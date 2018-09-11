var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
/* 네이버 뉴스가 euc-kr로 인코딩 되어 있어서 utf-8로 가져오도록 함 */
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('EUC-KR', 'UTF-8');

var router = express.Router();
const parser = require('xml2json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/searchRank', function (req, res, next) {
  var param = req.body.param;
  var rankArray = [];
  var myRes = res;
  if(param === "naver"){
    var url = "https://www.naver.com";
    request(url, function (err, res, html) {
      if (err) {
        console.log(err);
        return;
      }
      var $ = cheerio.load(html);
      var liList = $('.ah_roll_area').children('ul').children('li');
      for (var i = 0; i < 10; i++) {    // 10위까지
        var rank = $(liList[i]).find('.ah_a > span.ah_r').text();
        var keyword = $(liList[i]).find('.ah_a > span.ah_k').text();
        rankArray.push(rank + "." + keyword);
      }
      var json = JSON.stringify({
        rank: rankArray
      });
      myRes.end(json);
    });
  }
  else {
    var url = "https://www.daum.net/";
    request(url, function (err, res, html) {
      if (err) {
        console.log(err);
        return;
      }
      var $ = cheerio.load(html);
  
      var liList = $('.hotissue_mini').children('.list_hotissue').children('li');
  
      for (var i = 0; i < 10; i++) {
        var rank = $(liList[i]).find('.roll_txt > .rank_cont > span.num_pctop > span.ir_wa').text();
        var keyword = $(liList[i]).find('.roll_txt > .rank_cont > span.txt_issue > a').text();
        rankArray.push(rank + "." + keyword);
      }
      var json = JSON.stringify({
        rank: rankArray
      });
      myRes.end(json);
    });
  }
  

});

router.get('/headLineNews', function (req, res, next) {
  var param = req.body.param;
  var newsArray = [];
  var myRes = res;

  if(param === "naver"){
    var url = "http://news.naver.com/main/home.nhn";

    var requestOptions = {
      url: url,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
      },
      encoding: 'binary' // binary로 받아야 손실이 없음
    };
    request(requestOptions, function (err, res, html) {
      if (err) {
        console.log(err);
        return;
      }
      var buffer = new Buffer(html, 'binary');
      buffer = iconv.convert(buffer).toString();
      var $ = cheerio.load(buffer);

      var liList = $('.newsnow').children('ul').children('li');
      for (var i = 0; i < liList.length; i++) {
        var newsTitle = $(liList[i]).find('div.newsnow_tx_inner > a').text();
        newsArray.push(newsTitle);
      }
      var json = JSON.stringify({
        news: newsArray
      });
      myRes.end(json);
    });
  }
  else {
    var url = "https://www.daum.net/";
    request(url, function (err, res, html) {
      if (err) {
        console.log(err);
        return;
      }
      var $ = cheerio.load(html);
      var liList = $('.list_txt').children('li');
      for (var i = 0; i < liList.length; i++) {
        var newsTitle = $(liList[i]).find('a').text();
        newsArray.push(newsTitle); 
      }
      var json = JSON.stringify({
        news: newsArray
      });
      myRes.end(json);
    });
  }
});

router.get('/weatherforday', function(req, res, next){
  var url = "https://www.google.co.kr/search?ei=TvQPW-KOOYe70gT83KOIAw&q=%EC%98%A4%EB%8A%98+%EB%82%A0%EC%94%A8&oq=%EC%98%A4%EB%8A%98+%EB%82%A0%EC%94%A8&gs_l=psy-ab.3..35i39k1l2j0l8.2144742.2146948.0.2147176.15.14.1.0.0.0.200.1351.9j3j1.14.0....0...1c.1j4.64.psy-ab..0.15.1445.6..0i131k1j0i10k1j0i20i263k1j0i3k1j0i67k1j0i131i20i263k1.92.LVlHRT71GlQ";
  
  var maxTemperatureArray = [];
  var minTemperatureArray = [];
  var conditionArray = [];
  var dayArray = [];
  var myRes = res;

  var requestOptions = {
    url: url,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
  };

  request(requestOptions, function(err, res, html){
    if(err){
      console.log(err);
      return;
    }
    var $ = cheerio.load(html);
    var liList = $('.gic').children('#wob_dp').children('div.wob_df');
    for (var i = 0 ; i < 8; i++){
        var maxTemperature = $(liList[i]).find('div > .vk_gy > span.wob_t').first().text();  
        maxTemperatureArray.push(maxTemperature);
        
        var minTemperature = $(liList[i]).find('div > .vk_lgy > span.wob_t').first().text();  
        minTemperatureArray.push(minTemperature);

        var condition = $(liList[i]).find('div > img').attr('alt'); 
        conditionArray.push(condition);
    
        var day = $(liList[i]).find('.vk_lgy').first().text();
        dayArray.push(day);
      
        console.log(day, condition, maxTemperature, minTemperature);
      }
      var json = JSON.stringify({ 
        maxTemperature : maxTemperatureArray,
        minTemperature : minTemperatureArray,
        condition : conditionArray,
        day : dayArray
      });

      myRes.end(json);
  });
});  
router.get('/dust', function(req, res, next) {
  var city = req.query.city;
  // var myKey = 'gNEgtNwnwl%2FYu06%2FfxnkH7XbkyIyTMvJhsLekFa0aQ7QizgjZJxqk5WVa5jpWDpGkF4drZfZZD8raAicMKKMmA%3D%3D';
  var myKey = 'uhJmrgwK0C1OOb40IRBton2Luif%2F%2F0NbQzcmfecTF%2BPt0mNi1UidjLRnebLNxu%2BspCIL%2BfEjrXi3jQvAnuAccw%3D%3D';
  var myUrl = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName='+encodeURI(city)+'&pageNo=1&numOfRows=10&ServiceKey='+myKey+'&ver=1.3&_returnType=json';
  // var t = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?itemCode=PM10&dataGubun=DAILY&searchCondition=MONTH&pageNo=1&numOfRows=10&ServiceKey=gNEgtNwnwl%2FYu06%2FfxnkH7XbkyIyTMvJhsLekFa0aQ7QizgjZJxqk5WVa5jpWDpGkF4drZfZZD8raAicMKKMmA%3D%3D&_returnType=json';
  
  request(myUrl, { json: true }, (err, re, body) => {
    if (err) { return console.log(err); }
    res.json(body);
  });
});

router.get('/stock', function(req, res, next){
  var url = "https://finance.naver.com/sise";
  var stockName = [];
  var stockValue = [];
  var stockState = [];
  var stockAmount = [];
  var myRes = res;
  var requestOptions = {
    url: url,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    },
    encoding: 'binary' // binary로 받아야 손실이 없음
  };
  request(requestOptions, function(err, res, html){
    if(err){
      console.log(err);
      return;
    }
    var buffer = new Buffer(html, 'binary');
    buffer = iconv.convert(buffer).toString();
    var $ = cheerio.load(buffer);
    // var $ = cheerio.load(html);
    console.log(html);
    var liList = $('#wrap').children('#newarea').children('#contentarea').children('.box_top_submain2').children('.lft').children('ul').find('li');
    console.log(liList.length);
    console.log($(liList[0]).html());
    for (var i = 0; i <liList.length; i++) {
      console.log(i);
      if(i == 2) {
        var name = $(liList[i]).find('a > .num_sun > .blind').text();
      } else {
        var name = $(liList[i]).find('a > .blind').text();
      }
      var value = $(liList[i]).find('a > .num').text();
      var state = $(liList[i]).find('a > .num_s').children().eq(0).attr('class');
      var amount = $(liList[i]).find('a > .num_s').text();
      stockState.push(state);
      stockAmount.push(amount);
      stockValue.push(value);
      stockName.push(name);
    }
    var json = JSON.stringify({ 
      'stockName' : stockName,
      'stockValue' : stockValue,
      'stockState' : stockState,
      'stockAmount' : stockAmount
    });
    myRes.end(json);
  });
});  

router.get('/otherstock', function(req, res, next){
  var url = "http://finance.naver.com/world";
  var stockName = [];
  var stockValue = [];
  var stockState = [];
  var stockAmount = [];
  var myRes = res;
  var requestOptions = {
    url: url,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    },
    encoding: 'binary' // binary로 받아야 손실이 없음
  };
  request(requestOptions, function(err, res, html){
    if(err){
      console.log(err);
      return;
    }
    var buffer = new Buffer(html, 'binary');
    buffer = iconv.convert(buffer).toString();
    var $ = cheerio.load(buffer);
    var divList = $('#wrap').children('.section_world').children('.market_include').children('.market_data').children('div');
    for (var i = 0; i < divList.length; i++) {
      var liList = $(divList[i]).children('.data').children('.data_lst').children('li');
      for(var j = 0; j < liList.length; j++) {
        var name = $(liList[j]).find('dl > dt > a').find('span').text();
        var value = $(liList[j]).find('dl > .point_status').find('strong').text();
        console.log(value);
        var em = $(liList[j]).find('dl > .point_status').find('em').text();
        var plusMinus = $(liList[j]).find('dl > .point_status').children('span').eq(0).text();
        var state = $(liList[j]).find('dl > .point_status').children('span').eq(1).text();
        stockState.push(state);
        stockAmount.push(em +  " " + plusMinus);
        stockValue.push(value);
        stockName.push(name);
      }
    }
    var json = JSON.stringify({ 
      'stockName' : stockName,
      'stockValue' : stockValue,
      'stockState' : stockState,
      'stockAmount' : stockAmount
    });
    myRes.end(json);
  });
});  

router.get('/searchaddress', function(req, res, next) {
  res.render('search');
});

router.get('/stationinfo', function(req, res, next) {
  var station = req.query.station;  
  var serviceKey = "uhJmrgwK0C1OOb40IRBton2Luif%2F%2F0NbQzcmfecTF%2BPt0mNi1UidjLRnebLNxu%2BspCIL%2BfEjrXi3jQvAnuAccw%3D%3D";
  var search = encodeURI(station);
  var url = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByName";
  var finalUrl = url + '?serviceKey=' + serviceKey + '&stSrch=' + search;
  request(finalUrl, (err, req, body) => {
    if (err) { return console.log(err); }
    var json = parser.toJson(body);
    var jsonObj = JSON.parse(json);
    res.json(jsonObj);
  });
});

router.get('/buslistbystationid', function(req, res, next) {
  var stationid = req.query.stationid;  
  var serviceKey = "uhJmrgwK0C1OOb40IRBton2Luif%2F%2F0NbQzcmfecTF%2BPt0mNi1UidjLRnebLNxu%2BspCIL%2BfEjrXi3jQvAnuAccw%3D%3D";
  var search = encodeURI(stationid);
  var url = "http://ws.bus.go.kr/api/rest/stationinfo/getRouteByStation";
  var finalUrl = url + '?serviceKey=' + serviceKey + '&arsId=' + search;
  console.log(finalUrl);
  request(finalUrl, (err, req, body) => {
    if (err) { return console.log(err); }
    var json = parser.toJson(body);
    var jsonObj = JSON.parse(json);
    res.json(jsonObj);
  });
});

router.get('/getStationByUid', function(req, res, next) {
  var stationid = req.query.stationid;  
  var serviceKey = "uhJmrgwK0C1OOb40IRBton2Luif%2F%2F0NbQzcmfecTF%2BPt0mNi1UidjLRnebLNxu%2BspCIL%2BfEjrXi3jQvAnuAccw%3D%3D";
  var search = encodeURI(stationid);
  var url = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid";
  var finalUrl = url + '?serviceKey=' + serviceKey + '&arsId=' + search;
  console.log(finalUrl);
  request(finalUrl, (err, req, body) => {
    if (err) { return console.log(err); }
    var json = parser.toJson(body);
    var jsonObj = JSON.parse(json);
    res.json(jsonObj);
  });
});

module.exports = router;
