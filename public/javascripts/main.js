window['containers'] = {};
window['myValues'] = {};
// window['myValues']['subwayLine'] = 7;
var json = $.getJSON("subway.json");
window._subwayData = json.responseJSON;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var app = new PIXI.Application(w, h, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

window.stage = app.stage;
var mainContainer = new PIXI.Container();
mainContainer.backgroundColor = 0xff0000;
mainContainer.pivot.x = w / 2;
mainContainer.pivot.y = h / 2;
mainContainer.rotation = Math.radians(270);
mainContainer.x = w / 2 - ((w - h) / 2);
mainContainer.y = h / 2 - ((w - h) / 2);
app.stage.addChild(mainContainer);

window.mainContainer = mainContainer;
var weatherForNow = new WeatherForNow();
window.weatherForNow = weatherForNow;

var searchRank = new SearchRank();
window.searchRank = searchRank;

var headLineNews = new HeadLineNews();
window.headLineNews = headLineNews;

var dust = new Dust();
window.dust = dust;
window.weatherForDay = new WeatherForDay();
window.temperature = new Temperature();
window.humidity = new Humidity();
window.time = new Time();
// window.weatherForDay = new WeatherForDay();
window.bus = new Bus();
window.subway = new Subway();
window.stock = new Stock();
window.coin = new Coin();
window.pushMessage = new PushMessage(mainContainer);
// a.create('진여준님이 댓글에서 회원님을 언급하였습니다.', 'com.kakao.talk');
// a.create('test', 'com.kakao.talk');
// a.create('InMirror', 'com.kakao.talk');
// Listen for animate update
app.ticker.add(function(delta) {
    // searchRank.update();
    headLineNews.update();
    time.update();
    var nowTime = Date.now();
    if(nowTime - weatherForNow.lastUpdateTime > 1000 * 60 * 60) {
        weatherForNow.lastUpdateTime = nowTime;
        // weatherForNow.update();
    }
    if(nowTime - dust.lastUpdateTime > 1000 * 60 * 60) {
        dust.lastUpdateTime = nowTime;
        dust.update();
    }
    if(nowTime - headLineNews.lastUpdateTime > 1000 * 60 * 1) {
        headLineNews.lastUpdateTime = nowTime;
        headLineNews.getHeadLineNewsFromCrawling();
    }
    if(nowTime - searchRank.lastUpdateTime > 1000 * 60 * 1) {
        searchRank.lastUpdateTime = nowTime;
        searchRank.getSearchRankFromCrawling();
    }
    if(nowTime - subway.lastUpdateTime > 1000 * 60 * 1) {
        subway.getData(subway.subwayName, subway.subwayLine);
        subway.lastUpdateTime = nowTime;
    }
    if(nowTime - bus.lastUpdateTime > 1000 * 60 * 1) {
        bus.getBusStationData();
        bus.lastUpdateTime = nowTime;
    }
    if(nowTime - coin.lastUpdateTime > 1000 * 60 * 1) {
        coin.getCoinPriceFromAPI();
        coin.lastUpdateTime = nowTime;
    }
    if(nowTime - stock.lastUpdateTime > 1000 * 60 * 1) {
        stock.getKoreaStockFromCrawling();
        stock.lastUpdateTime = nowTime;
    }
    pushMessage.update();
});

var _addFont = function (font) {
    var fontNameWithExtension = font.split('/').pop();
    var fontFileName = fontNameWithExtension.split('.')[0];
    var fontExtensionName = fontNameWithExtension.split('.')[1];
    var newStyle = document.createElement('style');
        newStyle.appendChild(document.createTextNode(
        "@font-face {font-family: '" + fontFileName + 
        "'; src: url('" + font + "')format('" + fontExtensionName + "');}"));
    document.head.appendChild(newStyle);
}

_addFont('fonts/nanum.ttf');
_addFont('fonts/chevyM.ttf');

_addFont('fonts/FuturaMedium.otf');