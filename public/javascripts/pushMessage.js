function PushMessage(container){
    this.graphics = new PIXI.Graphics();
    this.container = container;
    container.addChild(this.graphics);

    this.h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-100;
    this.w = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    this.messages = [];
    this.height = 70;
    this.width = 300;
    this.margin = 10;

}

PushMessage.prototype.create = function(text, kind, title){
    var _kind = null;
    var _src = "";
    switch(kind) {
        case "com.kakao.talk" :
        _kind = "카카오톡";
        _src = "images/kakao.png";
        break;
        case "com.samsung.android.messaging" :
        _kind ="문자";
        _src = "images/message.png";
        break;
        case "com.samsung.android.incallui" :
        _kind = "전화";
        _src = "images/phone.png";
        break;
        case "com.samsung.android.contacts" :
        _kind = "부재중전화";
        _src = "images/phone.png";
        break;
        case "com.facebook.katana" :
        _kind = "페이스북";
        _src = "images/facebook.png";
        break;
        case "com.facebook.orca" :
        _kind = "페이스북";
        _src = "images/facebook.png";
        break;
        case "com.instagram.android" :
        _kind = "인스타그램";
        _src = "images/instagram.png";
        break;
        default:
        _kind = null;
        break;
    }
    if(kind=="null") return;
    if(text == "null")
        return;

    text = title + " : " + text;
    if(text.length > 20) {
        text = text.substring(0,20) + "...";
        // this.height += 20;
    }    
    for(var i in this.messages){
        var message = this.messages[i];
        message.toY -= this.height + this.margin * 2;
        message.state = 1;
    }

    this.messages.push({
        createdTime : Date.now(),
        x : this.w - this.width - this.margin,
        y : this.h + this.margin,
        toY : this.h - this.height - this.margin,
        state : 0,
        transparent : 0,
        icon : new PIXI.Sprite.fromImage(_src),
        title : new PIXI.Text(_kind, {
            fontFamily : 'chevyM', fontSize: 14, fill : 0xffffff
        }),
        textObject : new PIXI.Text(text,{
            fontFamily : 'chevyM', fontSize: 14, fill : 0xffffff,letterSpacing:-0.5
        }),
        time : new PIXI.Text(time.hour + ":" + time.minute,{
            fontFamily : 'FuturaMedium', fontSize: 14, fill : 0xffffff,letterSpacing:-1
        })
    });
    this.messages[this.messages.length-1].icon.scale.x = 0.4;
    this.messages[this.messages.length-1].icon.scale.y = 0.4;
    this.messages[this.messages.length-1].icon.anchor.set(0.5);
    this.container.addChild(this.messages[this.messages.length-1].icon);
    this.container.addChild(this.messages[this.messages.length-1].title);
    this.container.addChild(this.messages[this.messages.length-1].textObject);
    this.container.addChild(this.messages[this.messages.length-1].time);
    /*
        state 정의
        0 = New
        1 = Old
        2 = Delete
    */
};

PushMessage.prototype.update = function(message){
    var shiftCount = 0;
    this.graphics.clear();
    for(var i in this.messages){
        var message = this.messages[i];
        
        if(message.y > message.toY){
            if(message.state == 0)
                message.y -= 4;
            else
                message.y -= 5;
        }

        if(message.state != 2){
            if( message.transparent < 1)
                message.transparent += 0.03;
        }
        else{
            if( message.transparent > 0)
                message.transparent -= 0.03;
            else
                shiftCount += 1;
        }

        if(Date.now() - message.createdTime > 5000){
            message.state = 2;
        }
        
        message.icon.alpha = message.transparent;
        message.icon.x = message.x + 33;
        message.icon.y = message.y + 16;
        message.title.alpha = message.transparent;
        message.title.x = message.x + 50;
        message.title.y = message.y + 8;
        message.textObject.alpha = message.transparent;
        message.textObject.x = message.x + 25;
        message.textObject.y = message.y + 40;
        message.time.alpha = message.transparent;
        message.time.x = message.x + 250;
        message.time.y = message.y + 8;
        
        // this.graphics.beginFill(0xFFFFFF, message.transparent);
        this.graphics.lineStyle(1.5, 0xFFffFF, 0.5);
        this.graphics.drawRoundedRect(message.x + 20, message.y + 32, this.width -40, 0.5, 1);
        this.graphics.drawRoundedRect(message.x, message.y, this.width, this.height, 15);
        // this.graphics.endFill();
    }
    for(var i=0; i<shiftCount; i++)
        this.messages.shift();
}