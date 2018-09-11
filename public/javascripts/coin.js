function Coin(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_coin'
    });
    this.lastUpdateTime = Date.now();
    this.container.setPosition({
        x:900,
        y:700
    });
    this.coins = ["이오스","비트코인 캐시", "퀀텀", "아이오타", "라이트코인" ,"이더리움 클래식","비트코인 골드", "비트코인", "오미세고", "이더리움","리플"];
    this.coinPriceText = [];
    this.coinPrice = [];
    var texture = PIXI.Texture.fromImage('images/white10.png');
    var row = new PIXI.extras.TilingSprite(
        texture,
        260,1.5
    );
    row.anchor.set(0.5);
    row.x = 0;
    row.y = -190;
    this.container.addChild(row);

    var g = new PIXI.Graphics();
    g.lineStyle(1.5, 0xFFffFF, 1);
    g.drawRoundedRect(-150, -240, 300, 480, 13);
    this.container.addChild(g);

    var title = new PIXI.Text('코인 시세',{
        fontFamily : 'chevyM', fontSize: 25, fill : 0xffffff
    });
    title.anchor.set(0.5);
    title.x = 0;
    title.y = -215;
    this.container.addChild(title);

    for(var i = 0; i < this.coins.length; i++) {
        var title = new PIXI.Text(this.coins[i],{
            fontFamily : 'chevyM', fontSize: 20, fill : 0xffffff
        });
        title.anchor.set(0, 0.5);
        title.x = -125;
        title.y = (i-4.5)*35 + 12;
        this.container.addChild(title);

        this.coinPriceText[i] = new PIXI.Text('',{
            fontFamily : 'FuturaMedium', fontSize: 17, fill : 0xffffff
        });
        this.coinPriceText[i].anchor.set(1, 0.5);
        this.coinPriceText[i].x = 125;
        this.coinPriceText[i].y = (i-4.5)*35 + 12;
        this.container.addChild(this.coinPriceText[i]);
    }
    this.getCoinPriceFromAPI();

}

Coin.prototype.getCoinPriceFromAPI = function(){
    $.ajax({
        url: "https://api.coinone.co.kr/ticker/?currency=all", 
        success: function(result) {
            var keys = Object.keys(result);
            this.coinPrice[0] = numberWithCommas(result["eos"].last) + "원";
            this.coinPrice[1] = numberWithCommas(result["bch"].last) + "원";
            this.coinPrice[2] = numberWithCommas(result["qtum"].last) + "원";
            this.coinPrice[3] = numberWithCommas(result["iota"].last) + "원";
            this.coinPrice[4] = numberWithCommas(result["ltc"].last) + "원";
            this.coinPrice[5] = numberWithCommas(result["etc"].last) + "원";
            this.coinPrice[6] = numberWithCommas(result["btg"].last) + "원";
            this.coinPrice[7] = numberWithCommas(result["btc"].last) + "원";
            this.coinPrice[8] = numberWithCommas(result["omg"].last) + "원";
            this.coinPrice[9] = numberWithCommas(result["eth"].last) + "원";
            this.coinPrice[10] = numberWithCommas(result["xrp"].last) + "원";
            this.setPrice();
        }.bind(this),
        error : function(error) {
        }
    });
}

Coin.prototype.setPrice = function(){
    for(var i =0; i<this.coinPriceText.length; i++) {
        this.coinPriceText[i].text = this.coinPrice[i];
    }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}