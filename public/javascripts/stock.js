function Stock() {
    this.show = true;
    this.container = new ImContainer({
        'debug': false,
        'name' : 'ui_finance'
    });
    this.container.setPosition({
        x: 900,
        y: 300
    });
    this.lastUpdateTime = Date.now();
    this.init = true;
    this.background = PIXI.Sprite.fromImage('images/stock.png');
    this.background.scale.x = 0.3;
    this.background.scale.y = 0.3;
    this.background.anchor.set(0.5);
    this.background.x = 0;
    this.background.y = 0;
    this.container.addChild(this.background);

    var title = new PIXI.Text('국내 증시', {
        fontFamily: 'chevyM',
        fontSize: 30,
        fill: 0xffffff
    });
    title.x = 0;
    title.y = -50;
    title.anchor.set(0.5);
    this.container.addChild(title);

    var texture = PIXI.Texture.fromImage('images/white10.png');
    row = new PIXI.extras.TilingSprite(
        texture,
        410, 1.5
    );
    row.anchor.set(0.5);
    row.x = 0;
    row.y = -20;
    this.container.addChild(row);

    row2 = new PIXI.extras.TilingSprite(
        texture,
        410, 1.5
    );
    row2.anchor.set(0.5);
    row2.x = 0;
    row2.y = 40;
    this.container.addChild(row2);

    row3 = new PIXI.extras.TilingSprite(
        texture,
        410, 1.5
    );
    row3.anchor.set(0.5);
    row3.x = 0;
    row3.y = 100;
    this.container.addChild(row3);

    var kospi = new PIXI.Text('코스피', {
        fontFamily: 'chevyM',
        fontSize: 24,
        fill: 0xffffff
    });
    kospi.x = -195;
    kospi.y = 10;
    kospi.anchor.set(0, 0.5);
    this.container.addChild(kospi);

    var kosdak = new PIXI.Text('코스닥', {
        fontFamily: 'chevyM',
        fontSize: 24,
        fill: 0xffffff
    });
    kosdak.x = -195;
    kosdak.y = 70;
    kosdak.anchor.set(0, 0.5);
    this.container.addChild(kosdak);

    var kospi200 = new PIXI.Text('코스피200', {
        fontFamily: 'chevyM',
        fontSize: 24,
        fill: 0xffffff
    });
    kospi200.x = -195;
    kospi200.y = 125;
    kospi200.anchor.set(0, 0.5);
    this.container.addChild(kospi200);

    this.kospiValue = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 20,
        fill: 0xffffff
    });
    this.kospiValue.x = -50;
    this.kospiValue.y = 10;
    this.kospiValue.anchor.set(0, 0.5);
    this.container.addChild(this.kospiValue);

    this.kosdakValue = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 20,
        fill: 0xffffff
    });
    this.kosdakValue.x = -50;
    this.kosdakValue.y = 70;
    this.kosdakValue.anchor.set(0, 0.5);
    this.container.addChild(this.kosdakValue);

    this.kospi200Value = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 20,
        fill: 0xffffff
    });
    this.kospi200Value.x = -50;
    this.kospi200Value.y = 125;
    this.kospi200Value.anchor.set(0, 0.5);
    this.container.addChild(this.kospi200Value);

    this.kospiIncrease = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 17,
        fill: 0xebbf3a
    });
    this.kospiIncrease.x = 60;
    this.kospiIncrease.y = 10;
    this.kospiIncrease.anchor.set(0, 0.5);
    this.container.addChild(this.kospiIncrease);

    this.kosdakIncrease = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 17,
        fill: 0xebbf3a
    });
    this.kosdakIncrease.x = 60;
    this.kosdakIncrease.y = 70;
    this.kosdakIncrease.anchor.set(0, 0.5);
    this.container.addChild(this.kosdakIncrease);

    this.kospi200Increase = new PIXI.Text('', {
        fontFamily: 'FuturaMedium',
        fontSize: 17,
        fill: 0xebbf3a
    });
    this.kospi200Increase.x = 60;
    this.kospi200Increase.y = 125;
    this.kospi200Increase.anchor.set(0, 0.5);
    this.container.addChild(this.kospi200Increase);
    this.getKoreaStockFromCrawling();
}
Stock.prototype.getKoreaStockFromCrawling = function () {
    $.ajax({
        url: "/stock",
        dataType: "json",
        success: function (result) {
            // console.log("stock reload");
            this.kospiValue.text = result['stockValue'][0];
            this.kosdakValue.text = result['stockValue'][1];
            this.kospi200Value.text = result['stockValue'][2];
            if(result['stockState'][0] == "nup") {
                var _text = result['stockAmount'][0].trim().split('%');
                this.kospiIncrease.text = "▲ " + _text[0] +"%";
            } else {
                var _text = result['stockAmount'][0].trim().split('%');
                this.kospiIncrease.text = "▼ " + _text[0] +"%";
            }
            if(result['stockState'][1] == "nup") {
                var _text = result['stockAmount'][1].trim().split('%');
                this.kosdakIncrease.text = "▲ " + _text[0] +"%";
            } else {
                var _text = result['stockAmount'][1].trim().split('%');
                this.kosdakIncrease.text = "▼ " + _text[0] +"%";
            }
            if(result['stockState'][2] == "nup") {
                var _text = result['stockAmount'][2].trim().split('%');
                this.kospi200Increase.text = "▲ " + _text[0] +"%";
            } else {
                var _text = result['stockAmount'][2].trim().split('%');
                this.kospi200Increase.text = "▼ " + _text[0] +"%";
            }
        }.bind(this),
        error: function (error) {
        }
    });
}

// Stock.prototype.getOtherStockFromCrawling = function(){
//     $.ajax({
//         url: "/otherstock",
//         dataType: "json",
//         success: function(result) {
//             console.log("stock reload");
//             console.log(result);
//         }.bind(this),
//         error : function(error) {
//             console.log("Error!");
//         }
//     });
// }