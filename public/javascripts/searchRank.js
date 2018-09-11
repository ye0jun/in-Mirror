function SearchRank(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false,
        'name' : 'ui_search'
    });
    this.container.setPosition({
        x:900,
        y:250
    });
    // this.init = true;
    var texture = PIXI.Texture.fromImage('images/white10.png');
    this.row = new PIXI.extras.TilingSprite(
        texture,
        290,1.5
    );
    this.row.anchor.set(0.5);
    this.row.x = 0;
    this.row.y = -150;
    this.container.addChild(this.row);
    var g = new PIXI.Graphics();
    g.lineStyle(1.5, 0xFFffFF, 1);
    g.drawRoundedRect(-170, -210, 340, 420, 13);
    this.container.addChild(g);
    var title = new PIXI.Text('실시간 검색어 순위',{
        fontFamily : 'chevyM', fontSize: 25, fill : 0xffffff
    });
    title.anchor.set(0.5);
    title.x = 0;
    title.y = -178;
    this.container.addChild(title);

    this.lastUpdateTime = Date.now();
    this.search = [];
    this.searchRankText = [];
    // this.pause = true;
    // this.pauseTime = Date.now();
    // this.nowArrayIndex = 1;
    // this.nowRankIndex = 2;
    this.type = "naver"; //네이버 다음 (naver, daum)
    // var _type = firebase.database().ref('in_rankType');
    // _type.on('value', function(snapshot) {
    //     this.type = snapshot.val();
    // }.bind(this));

    this.getSearchRankFromCrawling();
    for(var i = 0; i < 10; i++) {
        var texture = PIXI.Texture.fromImage('images/white10.png');
        var rankBox = new PIXI.extras.TilingSprite(
            texture,
            20,20
        );
        rankBox.anchor.set(0.5);
        rankBox.x = -130;
        rankBox.y = (i-4.5) * (33) + 30;
        this.container.addChild(rankBox);

        var num = new PIXI.Text(i+1,{
            fontFamily : 'FuturaMedium', fontSize: 17, fill : 0x000000
        });
        num.anchor.set(0.5);
        num.x = -130;
        num.y = (i-4.5) * (33) + 30;
        this.container.addChild(num);
        this.searchRankText[i] = new PIXI.Text('',{
            fontFamily : 'chevyM', fontSize: 20, fill : 0xffffff
        });
        this.searchRankText[i].anchor.set(0, 0.5);
        this.searchRankText[i].x = -100;
        this.searchRankText[i].y = (i-4.5) * (33) + 30 ;
        this.container.addChild(this.searchRankText[i]);
    }
    // this.container.addChild(this.searchRankText);

    // this.searchRankText[0].text = this.search[0];
    // this.searchRankText[1].text = this.search[1];
    // this.searchRankText[2].text = this.search[2];
}
SearchRank.prototype.setType = function(type) {
    this.type = type;
    this.getSearchRankFromCrawling();
}
SearchRank.prototype.getSearchRankFromCrawling = function(){
    $.ajax({
        url: "/searchRank",
        dataType: "json",
        data: this.type,
        success: function(result) {
            // var text = "";
            for(var i = 0 ; i < result.rank.length; i ++){
                this.search[i] = result.rank[i];
                var keyword = result.rank[i].split(".")[1];
                this.searchRankText[i].text = keyword;
                // if(this.init && i < 3){
                //     this.searchRankText[i].text = this.search[i];
                // }
                // text += result.rank[i];
                // text += "\n";      
            }
            // this.init = false;
            // this.setContainerLocation();
        }.bind(this),
        error : function(error) {
        }
    });
}
SearchRank.prototype.update = function() {
    var now = Date.now();
    
    if(this.pause){
        if(now - this.pauseTime > 1000) {
            this.pause = false;
        }
    } else {
        for(var i = 0; i < 3; i++) {
            this.searchRankText[i].y -= 1;
            if(this.searchRankText[i].y < this.searchRankText[i].style.fontSize * -1) {
                if(this.nowRankIndex == 9) this.nowRankIndex = 0;
                else this.nowRankIndex++;
                this.searchRankText[i].text = this.search[this.nowRankIndex];
                if(this.nowArrayIndex == 2) this.nowArrayIndex = 0;
                else this.nowArrayIndex++;
                this.searchRankText[i].y = this.searchRankText[this.nowArrayIndex].y + this.searchRankText[this.nowArrayIndex].style.fontSize + 5; 
            } else if(this.searchRankText[i].y == -1){
                this.pause = true;
                this.pauseTime = Date.now();
            }
        }
    }
    
}
//컨테이너 위치 조정
SearchRank.prototype.setContainerLocation = function(){
    // this.headLineNewsText.x -= this.headLineNewsText.width/2;
    this.searchRankText.y = -this.searchRankText.height/2;
}
