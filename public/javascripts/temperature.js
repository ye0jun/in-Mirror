function Temperature() {
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_temperature'
    });
    this.container.setPosition({
        x:550,
        y:200
    });
    
    this.lastUpdateTime = Date.now();
    this.temperatureIcon = PIXI.Sprite.fromImage('images/temperature.png');
    this.temperatureIcon.scale.x = 0.35;
    this.temperatureIcon.scale.y = 0.35;
    this.temperatureIcon.anchor.set(0.5);
    this.temperatureIcon.x = -40;
    this.temperatureIcon.y = 0;
    this.container.addChild(this.temperatureIcon);

    var g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    // x, y, width, height, radius
    g.drawRoundedRect(0, -40, 120, 22, 13);
    g.endFill();
    this.container.addChild(g);

    title = new PIXI.Text('실내 온도', {
        fontFamily : 'chevyM', fontSize: 20, fill : 0x000000
    });
    title.x = 60;
    title.y = -30;
    title.anchor.set(0.5);
    this.container.addChild(title);

    this.temperatureText = new PIXI.Text('', {
        fontFamily : 'FuturaMedium', fontSize: 55, fill : 0xffffff
    });
    this.temperatureText.x = 60;
    this.temperatureText.y = 25
    this.temperatureText.anchor.set(0.5);
    this.container.addChild(this.temperatureText);
    this.getTemeratureFromDB();
}
// 날씨 정보 가져오기
Temperature.prototype.getTemeratureFromDB = function(){
    var temperature = firebase.database().ref('temperature');
    temperature.on('value', function(snapshot) {
        this.temperature = snapshot.val();
        this.setTemeratureText();
    }.bind(this));
}

Temperature.prototype.setTemeratureText = function() {
    this.temperatureText.text = this.temperature+"°" ;
}
