function Bus() {
    this.show = true;
    this.container = new ImContainer({
        'debug': false,
        'name' : 'ui_bus'
    });
    this.container.setPosition({
        x: 800,
        y: 700
    });
    this.stationName = "";
    this.busNum = "";
    this.lastUpdateTime = Date.now();
    this.busIcon = PIXI.Sprite.fromImage('images/bus.png');
    this.busIcon.scale.x = 0.35;
    this.busIcon.scale.y = 0.35;
    this.busIcon.anchor.set(0.5);
    this.busIcon.x = -110;
    this.busIcon.y = -60;
    this.container.addChild(this.busIcon);

    this.bus_1 = new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 23, fill : 0xffffff
    });
    this.bus_1.x = 100;
    this.bus_1.y = -75;
    this.bus_1.anchor.set(0.5);
    this.container.addChild(this.bus_1);

    var texture = PIXI.Texture.fromImage('images/white10.png');
    var row = new PIXI.extras.TilingSprite(
        texture,
        180,1.5
    );
    row.anchor.set(0.5);
    row.x = 100;
    row.y = -55;
    this.container.addChild(row);

    this.bus_2 = new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 23, fill : 0xffffff
    });
    this.bus_2.x = 100;
    this.bus_2.y = -35;
    this.bus_2.anchor.set(0.5);
    this.container.addChild(this.bus_2);

    var g = new PIXI.Graphics();
    g.beginFill(0xffffff)
    g.drawRoundedRect(-250, -5, 500, 50, 28);
    g.endFill();
    g.beginFill(0x000000)
    g.drawRoundedRect(-242, 2, 200, 36, 20);
    g.endFill();
    this.container.addChild(g);

    this.busNumText = new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 27, fill : 0xffffff
    });
    this.busNumText.x = -140;
    this.busNumText.y = 19;
    this.busNumText.anchor.set(0.5);
    this.container.addChild(this.busNumText);

    this.areaText =  new PIXI.Text('', {
        fontFamily : 'chevyM', fontSize: 27, fill : 0x000000
    });
    this.areaText.x = 80;
    this.areaText.y = 19;
    this.areaText.anchor.set(0.5);
    this.container.addChild(this.areaText);
    
}

Bus.prototype.getBusStationData = function () {
    $.ajax({
        url: '/getStationByUid',
        dataType: 'json',
        type: 'get',
        contentType: "application/json",
        data: {
            "stationid": window['myValues'].busStationId
        },
        success: function (data) {
            var value = data.ServiceResult.msgBody.itemList;
            if(value.length){
                for (var i in value) {
                    var busId = value[i].rtNm;
                    if (busId == window['myValues']['busId'])
                        this.updateDataFromServer(value[i]);
                }
            }
            else{
                var busId = value.rtNm;
                if (busId == window['myValues']['busId'])
                    this.updateDataFromServer(value);
            }
        }.bind(this)
    })
}

Bus.prototype.updateDataFromServer = function (data) {
    this.stationName = data['stNm'];
    this.busNum = window['myValues']['busId'];
    this.busNumText.text = this.busNum + "번";
    this.areaText.text = this.stationName;
    var bus1 = data['arrmsg1'].split("후");
    if(bus1[0] == "곧 도착") this.bus_1.text = bus1[0];
    else if (bus1[0] == "운행종료") this.bus_1.text = bus1[0];
    else this.bus_1.text = bus1[0] + " 후";
    
    var bus2 = data['arrmsg2'].split("후");
    if(bus2[0] == "운행종료") this.bus_2.text = bus2[0]; 
    else this.bus_2.text = bus2[0] + " 후";
};