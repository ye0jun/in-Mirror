function Dust() {
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_dust'
    });
    this.container.setPosition({
        x:100,
        y:300
    });
    this.lastUpdateTime = Date.now();
    var g = new PIXI.Graphics();
    g.beginFill(0xffffff); // black color
    // x, y, width, height, radius
    g.drawRoundedRect(-45, 40, 90, 22, 13);
    g.endFill();
    this.container.addChild(g);

    var title = new PIXI.Text('미세먼지', {
        fontFamily : 'chevyM', fontSize: 18, fill : 0x000000
    });
    title.anchor.set(0.5);
    title.x = 0;
    title.y = 50;
    this.container.addChild(title);

    this.dustIcon = PIXI.Sprite.fromImage('images/normal.png');
    this.dustIcon.scale.x = 0.4;
    this.dustIcon.scale.y = 0.4;
    this.dustIcon.anchor.set(0.5);
    this.dustIcon.x = 0;
    this.dustIcon.y = -30;
    this.container.addChild(this.dustIcon);

    this.dustText = new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 26, fill : 0xffffff
    });
    this.dustText.x = 0;
    this.dustText.y = 85;
    this.dustText.anchor.set(0.5);
    this.container.addChild(this.dustText);
    this.getDustFormAPI();
}
// 날씨 정보 가져오기
Dust.prototype.getDustFormAPI = function(){
    var self = this;
    $.ajax({
        url: '/dust',
        dataType: 'json',
        type: 'get',
        contentType: "application/json",
        data : {"city" : "서울"},
        success: function(data){
            self.getDustJson(data);
        }
    })
}
Dust.prototype.getDustJson = function(json){
    if(json.list[0]){
        var data = json.list[0];
        // grade 1 = 좋음, 2 = 보통, 3 = 나쁨, 4 = 매우나쁨
        //pm 10은 미세먼지 pm25는 초미세먼지
        this.pm10Value = data.pm10Value;
        this.pm10Grade = data.pm10Grade;
        this.pm25Grade = data.pm25Grade;
        this.setUI();
    }
}

Dust.prototype.setUI = function(){
    this.setDustIcon();
    this.setDustText();
}

Dust.prototype.setDustIcon = function() {
    switch(this.pm10Grade) {
        case "1" :
        var dustTexture = PIXI.Texture.fromImage('images/smile.png');
        break;
        case "2" :
        var dustTexture = PIXI.Texture.fromImage('images/normal.png');
        break;
        case "3" :
        var dustTexture = PIXI.Texture.fromImage('images/bad.png');
        break;
        case "4" :
        var dustTexture = PIXI.Texture.fromImage('images/bad.png');
        break;
        default :
        var dustTexture = PIXI.Texture.fromImage('images/normal.png');
        break;
    }
    this.dustIcon.texture = dustTexture;
}

Dust.prototype.setDustText = function() {
    var text = "";
    switch(this.pm10Grade) {
        case "1" :
            text = "좋음";
            break;
        case "2" :
            text = "보통";
            break;
        case "3" : 
            text = "나쁨";
            break;
        case "4" :
            text = "매우나쁨";
            break;
        default : 
            text = "보통";
            break;
    }
    this.dustText.text = text + " : " + this.pm10Value;
}

Dust.prototype.update = function(){
    this.getDustFormAPI();
}