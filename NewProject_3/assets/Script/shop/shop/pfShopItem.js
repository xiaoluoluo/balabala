
cc.Class({
    extends: cc.Component,

    properties: {
        btn:cc.Node,
        pic:cc.Sprite,
    },
    init(data,index){
        // console.log('第'+index+'个','数据是:'+data);
        ge.addClick(this.btn,()=>{
            console.log('你点击了','第'+index+'个','数据是:',data);
        });
    }
});
