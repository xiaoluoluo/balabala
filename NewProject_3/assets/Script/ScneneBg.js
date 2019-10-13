cc.Class({
    extends: cc.Component,

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // // defaults, set visually when attaching this script to the Canvas
        // text: 'Hello, World!'
        _map_size : new cc.Vec2(2048,2048)
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        this.node.on(cc.Node.EventType.TOUCH_START,function(t){
            console.log("触摸开始");
        },this)
        //监听
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.on_touch_move,this);
        //触摸抬起
        this.node.on(cc.Node.EventType.TOUCH_ENDED,function(t){
           console.log("触摸内结束");
       },this);
       this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){
           console.log("触摸外开始");
       },this);
   
    },

    on_touch_move(t){

        var touches = t.getTouches();

        if (touches.length >= 2){
            console.log("触摸外开始2");
            var self = this, parent = this.node.parent;

            var touch1 = touches[0], touch2 = touches[1];
            var delta1 = touch1.getDelta(), delta2 = touch2.getDelta();
         

            //坐标转换为map坐标系
            var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
            var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation());

                      
             //记录当前锚点
             let anchorPoint_before = self.node.getAnchorPoint();
             //新锚点距离map左、下边界距离
             let dis_left = self._map_size.x*anchorPoint_before.x*self.node.scale-self.node.x+(touchPoint1.x-touchPoint2.x)/2;  //减平均值（防溢出写法）
             let dis_bottom = self._map_size.y*anchorPoint_before.y*self.node.scale-self.node.y+(touchPoint1.y-touchPoint2.y)/2;
             //以两点中心为新的锚点
             let anchorPoint_after = cc.v2(dis_left/(self.node.scale*self._map_size.x), dis_bottom/(self.node.scale*self._map_size.y));
             self.node.setAnchorPoint(anchorPoint_after);
             //距离差
             let dis_X = self._map_size.x*(anchorPoint_before.x-anchorPoint_after.x)*self.node.scale;
             let dis_Y = self._map_size.y*(anchorPoint_before.y-anchorPoint_after.y)*self.node.scale;
             //位置纠正
             self.node.setPosition(self.node.x-dis_X, self.node.y-dis_Y);

             //缩放,手指移动距离的0.6倍
             var distance = touchPoint1.sub(touchPoint2);
             var delta = delta1.sub(delta2);
             var scale = 1;
             if (Math.abs(distance.x) > Math.abs(distance.y)) {
                 scale = (distance.x + delta.x*0.6) / distance.x * self.node.scale;
             }
             else {
                 scale = (distance.y + delta.y*0.6) / distance.y * self.node.scale;
             }
             let windowSize=cc.view.getVisibleSize();
             var minScale = windowSize.height/2048;
             if (self.node.scale>1) {
                 self.node.scale =1;
             }
             else if(self.node.scale<minScale){
                 self.node.scale = minScale;
             }
             else{
                 self.node.scale = scale;
             }

        }else{
            console.log("触摸外开始1");
            var delta=t.getDelta();
            this.node.x+=delta.x;
            this.node.y+=delta.y;

            
        }

    },

    // called every frame
    update: function (dt) {

    },
});
