function Humidity() {
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_humidity'
    });
    this.container.setPosition({
        x:550,
        y:400
    });
    this.lastUpdateTime = Date.now();

    var g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    // x, y, width, height, radius
    g.drawRoundedRect(0, -40, 120, 22, 13);
    g.endFill();
    this.container.addChild(g);

    this.humidityIcon = PIXI.Sprite.fromImage('images/humidity1.png');
    this.humidityIcon.scale.x = 0.35;
    this.humidityIcon.scale.y = 0.35;
    this.humidityIcon.anchor.set(0.5);
    this.humidityIcon.x = -50;
    this.humidityIcon.y = 0;
    this.container.addChild(this.humidityIcon);

    title = new PIXI.Text('실내 습도', {
        fontFamily : 'chevyM', fontSize: 20, fill : 0x000000
    });
    title.x = 60;
    title.y = -30;
    title.anchor.set(0.5);
    this.container.addChild(title);

    this.humidityText = new PIXI.Text('', {
        fontFamily : 'FuturaMedium', fontSize: 55, fill : 0xffffff
    });
    this.humidityText.x = 60;
    this.humidityText.y = 25;
    this.humidityText.anchor.set(0.5);
    this.container.addChild(this.humidityText);
    this.getHumidityFromDB();
}
// 습도 정보 가져오기
Humidity.prototype.getHumidityFromDB = function(){
    var humidity = firebase.database().ref('humidity');
    humidity.on('value', function(snapshot) {
        this.humidity = snapshot.val();
        this.setHumidityTexture();
        this.setHumidityText();
    }.bind(this));
}

Humidity.prototype.setHumidityText = function() {
    this.humidityText.text = this.humidity+"%" ;
}

Humidity.prototype.setHumidityTexture = function() {
    var _src = "images/humidity1.png";
    if(this.humidity < 40) { 
        _src = "images/humidity1.png";
    } else if( this.humidity < 60) {
        _src = "images/humidity2.png";
    } else if ( this.humidity < 80) {
        _src = "images/humidity3.png";
    } else {
        _src = "images/humidity4.png";
    }
    var tempTexture = PIXI.Texture.fromImage(_src);
    this.humidityIcon.texture = tempTexture;
}
