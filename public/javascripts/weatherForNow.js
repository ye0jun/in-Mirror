function WeatherForNow(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_weatherfornow'
    });
    this.container.setPosition({
        x:300,
        y:400
    });
    this.latitude = 37.550523;
    this.longitude = 127.073869;
    this.lastUpdateTime = Date.now();
    this.weatherIcon = PIXI.Sprite.fromImage('images/cloudy.png');
    this.weatherIcon.scale.x = 0.3;
    this.weatherIcon.scale.y = 0.3;
    this.weatherIcon.anchor.set(0, 0.5);
    this.weatherIcon.x = -15;
    this.weatherIcon.y = 0;
    this.container.addChild(this.weatherIcon);

    var g = new PIXI.Graphics();
    g.beginFill(0xffffff); // black color
    // x, y, width, height, radius
    g.drawRoundedRect(-100, -45, 100, 22, 13);
    g.endFill();
    this.container.addChild(g);
    this.nowTemprature = new PIXI.Text('',{
        fontFamily : 'FuturaMedium', fontSize: 50, fill : 0xffffff
    });
    this.nowTemprature.anchor.set(1, 0.5);
    this.nowTemprature.x = -5;
    this.nowTemprature.y = 15;
    this.container.addChild(this.nowTemprature);

    this.highLowTemprature = new PIXI.Text('',{
        fontFamily : 'FuturaMedium', fontSize: 17, fill : 0xffffff
    });
    this.highLowTemprature.anchor.set(0.5);
    this.highLowTemprature.x = -55;
    this.highLowTemprature.y = 60;
    this.container.addChild(this.highLowTemprature);

    this.cityText = new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 20, fill : 0x000000
    });
    this.cityText.x = -76;
    this.cityText.y = -46;
    this.container.addChild(this.cityText);
    this.getWeatherFromAPI();
}
// 날씨 정보 가져오기
WeatherForNow.prototype.getWeatherFromAPI = function(){
    $.ajax({
        url: "https://api2.sktelecom.com/weather/current/hourly?version=1&lat="+this.latitude+"&lon="+this.longitude+"&appKey=148a5e11-4e2c-45b0-9964-2d0d9f14fd8b", 
        success: function(result) {
            if (result.weather.hourly[0]){
                var info = result.weather.hourly[0]; //날씨 정보
                this.city = info.grid.city; //ex. 서울시
                this.county = info.grid.county; // 구
                this.skyState = info.sky.name;
                this.skyCode = info.sky.code;
                this.temperature = info.temperature.tc;
                this.minTemperature = info.temperature.tmin;
                this.maxTemperature = info.temperature.tmax;
                this.setUI();
            }
        }.bind(this),
        error : function(error) {
        }
    });
}

WeatherForNow.prototype.setUI = function(){
    this.setWeaterIcon();
    this.setTemperature();
    this.setCity();
}
WeatherForNow.prototype.setWeaterIcon = function() {
    var src = "images/sunny.png";

    if(this.skyState == "SKY_A01") src = "images/sunny.png";
    else if(this.skyState == "SKY_A02") src = "images/cloudy.png";
    else if(this.skyState == "SKY_A03" || this.skyState == "SKY_A07") src = "images/cloud.png";
    else if(this.skyState == "SKY_A04" || this.skyState == "SKY_A05" || this.skyState == "SKY_A06" || this.skyState == "SKY_A08" || this.skyState == "SKY_A09" || this.skyState == "SKY_A10") src = "images/cloudy.png";
    else if(this.skyState == "SKY_A11"|| this.skyState == "SKY_A12" || this.skyState == "SKY_A13" || this.skyState == "SKY_A14") src = "images/storm.png";
    else src = "images/sunny.png";
    var tempTexture = PIXI.Texture.fromImage(src);
    this.weatherIcon.texture = tempTexture;
}
WeatherForNow.prototype.setTemperature = function() {
    var num = parseInt(this.temperature);
    this.nowTemprature.text = num + "°";
    var high = parseInt(this.maxTemperature);
    var low = parseInt(this.minTemperature);
    this.highLowTemprature.text = "↓" + low + "° / " +"↑"+ +high+"°";
}
WeatherForNow.prototype.setCity = function() {
    this.cityText.text = "광진구";
}
WeatherForNow.prototype.update = function(){
    this.getWeatherFromAPI();
}