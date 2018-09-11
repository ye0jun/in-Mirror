function WeatherForDay(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_weatherforday'
    });
    this.container.setPosition({
        x:300,
        y:550
    });
    this.weatherIcon = [];
    this.day = [];
    this.maxTemperature = [];
    this.minTemperature = [];
    this.lastUpdateTime = Date.now();
    for(var i = 0; i < 8; i++) {
        
        this.weatherIcon[i] = PIXI.Sprite.fromImage('images/sun.png');
        this.weatherIcon[i].scale.x = 0.1;
        this.weatherIcon[i].scale.y = 0.1;
        this.weatherIcon[i].anchor.set(0.5);
        
        this.weatherIcon[i].x = (0.1 +65)*(i-3.5) + 0.1/2;
        this.weatherIcon[i].y = 0;
        this.container.addChild(this.weatherIcon[i]);

        this.day[i] = new PIXI.Text('',{
            fontFamily : 'chevyM', fontSize: 17, fill : 0xffffff
        });
        this.day[i].x = (0.1 +65)*(i-3.5) + 0.1/2;
        this.day[i].y = -50
        this.day[i].anchor.set(0.5);
        
        this.container.addChild(this.day[i]);

        this.maxTemperature[i] = new PIXI.Text('',{
            fontFamily : 'FuturaMedium', fontSize: 17, fill : 0xffffff
        });
        this.maxTemperature[i].x = (0.1 +65)*(i-3.5) + 0.1/2;
        this.maxTemperature[i].y = 55;
        this.maxTemperature[i].anchor.set(0.5);
        this.container.addChild(this.maxTemperature[i]);

        this.minTemperature[i] = new PIXI.Text('',{
            fontFamily : 'FuturaMedium', fontSize: 17, fill : 0xffffff
        });
        this.minTemperature[i].x = (0.1 +65)*(i-3.5) + 0.1/2;
        this.minTemperature[i].y = 35;
        this.minTemperature[i].anchor.set(0.5);
        this.container.addChild(this.minTemperature[i]);
    }
    var texture = PIXI.Texture.fromImage('images/white10.png');
    this.row = new PIXI.extras.TilingSprite(
        texture,
        500,2
    );
    this.row.anchor.set(0.5);
    this.row.x = 0;
    this.row.y = -30;
    this.container.addChild(this.row);
    this.getWeatherFromAPI();
}
// 날씨 정보 가져오기
WeatherForDay.prototype.getWeatherFromAPI = function(){
    // var city = "서울";
    $.ajax({
        url: '/weatherforday',
        dataType: 'json',
        type: 'get',
        contentType: "application/json",
        // data : {"city" : "서울"},
        success: function(data){
            this.setUI(data);
        }.bind(this)
    })
}

WeatherForDay.prototype.setUI = function(data){
    this.setWeaterIcon(data['condition']);
    this.setMaxTemperature(data['maxTemperature']);
    this.setMinTemperature(data['minTemperature']);
    this.setDay(data['day']);
}
WeatherForDay.prototype.setWeaterIcon = function(condition) {
    for(var i =0; i <condition.length; i++) {
        var str = condition[i].replace(/\s/gi, "");
        switch(str) {
            case "맑음" :
            var iconTexture = PIXI.Texture.fromImage('images/sunny.png');
            break;
            case "대체로맑음" :
            var iconTexture = PIXI.Texture.fromImage('images/sunny.png');
            break;
            case "구름조금" :
            var iconTexture = PIXI.Texture.fromImage('images/cloudy.png');
            break;
            case "흐림" :
            var iconTexture = PIXI.Texture.fromImage('images/cloud.png');
            break;
            case "비" :
            var iconTexture = PIXI.Texture.fromImage('images/rainy.png');
            break;
            case "광역성소나기" :
            var iconTexture = PIXI.Texture.fromImage('images/rainySun.png');
            break;
            case "광역성뇌우" :
            var iconTexture = PIXI.Texture.fromImage('images/rainySun.png');
            break;
            case "소나기" :
            var iconTexture = PIXI.Texture.fromImage('images/rainySun.png');
            break;
            default :
            var iconTexture = PIXI.Texture.fromImage('images/sunny.png');
            break;
        }
        this.weatherIcon[i].texture = iconTexture;
    }
}
WeatherForDay.prototype.setMaxTemperature = function(max) {
    for(var i = 0; i < max.length; i++) {
        this.maxTemperature[i].text = "↑" + parseInt(max[i]) + "°";
    }
}
WeatherForDay.prototype.setMinTemperature = function(min) {
    for(var i = 0; i < min.length; i++) {
        this.minTemperature[i].text = "↓" + parseInt(min[i]) + "°";
    }
}
WeatherForDay.prototype.setDay = function(day) {
    for(var i = 0; i <day.length; i++) {
        var _text = "";
        switch(day[i].replace(/\s/gi, "")){
            case "월" :
                _text = "MON";
            break;
            case "화" :
                _text = "TUE";
            break;
            case "수" :
                _text = "WED";
            break;
            case "목" :
                _text = "THU";
            break;
            case "금" :
                _text = "FRI";
            break;
            case "토" :
                _text = "SAT";
            break;
            case "일" :
                _text = "SUN";
            break;
            default:
                _text = "MON";
            break;
        }
        this.day[i].text = _text;
        // if(day[i].replace(/\s/gi, "") == "일") this.day[i].fill = "0x00ffff";
    }
}
WeatherForDay.prototype.update = function(){
    this.getWeatherFromAPI();
}