function HeadLineNews(){
    this.show = true;
    this.container = new ImContainer({
        'debug' : false
        // 'name' : 'ui_news'
    });
    this.container.setPosition({
        x:0,
        y:window.innerWidth - 30
        // y: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20
    });
    this.init = true;
    this.headLine = [];
    this.headLineNewsText = [];
    this.nowArrayIndex = 4;
    this.nowNewsIndex = 4;
    this.lastUpdateTime = Date.now();
    this.type = "naver"; //네이버 다음 (naver, daum)
    // var _type = firebase.database().ref('in_newsType');
    // _type.on('value', function(snapshot) {
    //     this.type = snapshot.val();
    // }.bind(this));

    for(var i = 0; i < 5; i++){
        this.headLineNewsText[i] = new PIXI.Text( '' , {
            fontFamily : 'chevyM', fontSize: 25, fill : 0xffffff
        });
        this.headLineNewsText[i].anchor.set(0,1);
        this.container.addChild(this.headLineNewsText[i]);
    }
    
    this.getHeadLineNewsFromCrawling();
}
HeadLineNews.prototype.setType = function(type) {
    this.type = type;
    this.getHeadLineNewsFromCrawling();
}
HeadLineNews.prototype.getHeadLineNewsFromCrawling = function(){
    $.ajax({
        url: "/headLineNews",
        dataType: "json",
        data: this.type,
        success: function(result) {
            var text = "";
            var rank = 1;
            for(var i = 0 ; i < result.news.length; i++){
                this.headLine[i] = "  " + parseInt(i+1) + ". "+result.news[i];
                if(this.init && i < 5) {
                    this.headLineNewsText[i].text = this.headLine[i];
                    if(i == 0) this.headLineNewsText[i].x = 0;
                    else this.headLineNewsText[i].x =  this.headLineNewsText[i-1].x + this.headLineNewsText[i-1].width;
                }
            }
            this.init = false;
        }.bind(this),
        error : function(error) {
        }
    });
}
HeadLineNews.prototype.update = function() {
    if(!this.init){
        for(var i = 0; i < 5; i ++){
            if(this.headLineNewsText[i].x < this.headLineNewsText[i].width * -1) {
                if(this.nowNewsIndex == 9) this.nowNewsIndex = 0;
                else this.nowNewsIndex++;
                this.headLineNewsText[i].text = this.headLine[this.nowNewsIndex];
                this.headLineNewsText[i].x = this.headLineNewsText[this.nowArrayIndex].x + this.headLineNewsText[this.nowArrayIndex].width;
                if(this.nowArrayIndex == 4) this.nowArrayIndex = 0;
                else this.nowArrayIndex++;
            }
            this.headLineNewsText[i].x -= 1;
        }
    }
}
//컨테이너 위치 조정
HeadLineNews.prototype.setContainerLocation = function(){
    // this.headLineNewsText.x -= this.headLineNewsText.width/2;
    this.headLineNewsText.y = -this.headLineNewsText.height/2;
}