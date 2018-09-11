function WeatherForNow(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : true
    });
    this.container.setPosition({
        x:300,
        y:300
    });
    this.latitude = 37.550523;
    this.longitude = 127.073869;
    this.lastUpdateTime = Date.now();
    this.weatherIcon = PIXI.Sprite.fromImage('images/sun.png');
    this.weatherIcon.scale.x = 0.3;
    this.weatherIcon.scale.y = 0.3;
    this.weatherIcon.anchor.set(0.5);
    this.weatherIcon.x = 0;
    this.weatherIcon.y = 0;
    this.container.addChild(this.weatherIcon);

    this.nowTemprature = new PIXI.Text('0 ℃',{
        fontFamily : 'Arial', fontSize: 24, fill : 0xffffff
    });
    this.nowTemprature.anchor.x = 1;
    this.nowTemprature.x = -10;
    this.nowTemprature.y = 47;
    this.container.addChild(this.nowTemprature);

    this.cityText = new PIXI.Text('광진구', {
        fontFamily : 'Arial', fontSize: 20, fill : 0xffffff
    });
    this.cityText.x = 10;
    this.cityText.y = 50;
    this.container.addChild(this.cityText);
    this.getWeatherFormAPI();
}
// 날씨 정보 가져오기
WeatherForNow.prototype.getWeatherFormAPI = function(){
    $.ajax({
        url: "https://api2.sktelecom.com/weather/current/hourly?version=1&lat="+this.latitude+"&lon="+this.longitude+"&appKey=a3d8d6ca-acc0-488d-bdec-8b5faa901e73", 
        success: function(result) {
            console.log(result.weather.hourly[0]);
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
            alert("Error!");
        }
    });
}

WeatherForNow.prototype.setUI = function(){
    this.setWeaterIcon();
    this.setTemperature();
    this.setCity();
}
WeatherForNow.prototype.setWeaterIcon = function() {
    var tempTexture = PIXI.Texture.fromImage('images/sun.png');
    this.weatherIcon.texture = tempTexture;
}
WeatherForNow.prototype.setTemperature = function() {
    var num = parseFloat(this.temperature);
    this.nowTemprature.text = num + "℃";
}
WeatherForNow.prototype.setCity = function() {
    this.cityText.text = this.county;
}
WeatherForNow.prototype.update = function(){
    this.getWeatherFormAPI();
}