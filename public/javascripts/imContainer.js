function ImContainer(opt){
    this.Container = new PIXI.Container();
    this.Graphics = new PIXI.Graphics();

    this.debug = false;
    if( opt == null ) opt = {};
    if( opt.debug == true ) this.debug = true;
    if ( opt.name ){
      window.containers[opt.name] = this;
      addFirebaseEventForContainer(opt.name);
    } 


    if(this.debug){
        window.stage.addChild(this.Container);
        this.Graphics.visible = true;
    }
    else{
        window.mainContainer.addChild(this.Container);
        this.Graphics.visible = false;      
    }
    
    this.Container.addChild(this.Graphics);

    this.Graphics.lineStyle(0);
    this.Graphics.beginFill(0xFFFF0B);
    this.Graphics.drawCircle(0, 0, 7);
    this.Graphics.endFill();
}
ImContainer.prototype.setVisible = function(flag){
    if(flag) this.Container.visible = true;
    else this.Container.visible = false;
}
ImContainer.prototype.addChild = function(child){
    this.Container.addChild(child);
};

ImContainer.prototype.setPosition = function(opt){
    if(opt == null)
        return;

    if(opt.x == null)
        opt.x = this.Container.x;
    
    if(opt.y == null)
        opt.y = this.Container.y;

    this.Container.x = opt.x;
    this.Container.y = opt.y;
};

ImContainer.prototype.setDebug = function(mode){
    if(this.debug == mode)
        return;
    
    this.debug = mode;

    if(this.debug){
        window.stage.addChild(this.Container);
        this.Graphics.visible = true;
    }
    else{
        window.mainContainer.addChild(this.Container);
        this.Graphics.visible = false;
    }
};

ImContainer.prototype.setScale = function(scale){
  this.Container.scale.x = this.Container.scale.y = scale;
}

ImContainer.prototype.setPosition = function(position){
  this.Container.x = position.x;
  this.Container.y = position.y;
}