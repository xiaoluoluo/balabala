

cc.Class({
    extends: cc.Component,

    properties: {
        scrollview:cc.ScrollView,
        item_tpl:cc.Node,
        content:cc.Node,
        btnClose:cc.Node,
        btnClose:cc.Node,
    },
    onLoad(){
        this.list = new ge.ListView({
            scrollview: this.scrollview,
            content: this.content,
            item_tpl: this.item_tpl,
            cb_host: this,
            item_setter: this.onItemSetter,
            gap_y: 17,
            gap_x: 14,
            column: 3,
            row: 1,
            direction: 1,
        })
        //数据加载
        this.items = [
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},
            {id:1,pic:'pic1'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'},{id:2,pic:'pic2'}
        ];
        this.list.set_data(this.items);
        ge.addClick(this.btnClose,()=>{
            console.log('关闭!');
        });
    },
    onItemSetter(node,data,index){
        ge.getJs(node).init(data,index);
        console.log('第'+index+'个','数据是:',data);
    },
    
});
