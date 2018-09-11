function Time(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_time'
    });
    this.container.setPosition({
        x:300,
        y:100
    });
    var d = new Date();
    this.hour = d.getHours();
    this.minute = d.getMinutes();

    this.timeIcon = PIXI.Sprite.fromImage('images/sun.png');
    this.timeIcon.scale.x = 0.23;
    this.timeIcon.scale.y = 0.23;
    this.timeIcon.anchor.set(0.5);
    this.timeIcon.x = -100;
    this.timeIcon.y = 0;
    this.container.addChild(this.timeIcon);

    this.timeText = new PIXI.Text(this.hour + ":" + this.minute,{
        fontFamily : 'FuturaMedium', fontSize: 80, fill : 0xffffff
    });
    this.timeText.x = 50
    this.timeText.y = 0;
    this.timeText.anchor.set(0.5);
    this.container.addChild(this.timeText);
}
Time.prototype.setFormat = function() {
    if(parseInt(this.hour) < 6 || parseInt(this.hour) > 18) {
        var _texture = PIXI.Texture.fromImage('images/moon.png');
        this.timeIcon.texture = _texture;
    }
    if (parseInt(this.hour) > 12) {
        this.hour -= 12;
    } else if (parseInt(this.hour) === 0) {
       this.hour = 12;
    }
    if(parseInt(this.hour) < 10) {
        this.hour = "0" + this.hour;
    }
    if(parseInt(this.minute)< 10) {
        this.minute = "0" + this.minute;
    }
}
Time.prototype.setText = function() {
    this.timeText.text = this.hour + ":" + this.minute;
}
Time.prototype.update = function() {
    var d = new Date();
    this.hour = d.getHours();
    this.minute = d.getMinutes();
    this.setFormat();
    this.setText();
}
    // if(d.getMinutes() == 0) {
        
    //     d.update();
    // }
    // var hour = d.getHours();
    // var minute = d.getMinutes();
    // var second = d.getSeconds();
    // basicText.text = "" + hour + " : " + minute + " : " + second;

