import {
    ListView
} from "listview";

module.exports.init = !function () {
    window.ge = {
        addClick: function (target, cb, isScale) {
            if (!target.getComponent(cc.Button)) {
                let btn = target.addComponent(cc.Button);
                if (isScale) {
                    btn.transition = cc.Button.Transition.SCALE;
                    btn.duration = 0.1;
                    btn.zoomScale = 1.05;
                }
            }
            target.off('click');
            target.on('click', cb);
            return target;
        },
        getJs: function (node, pre) { // 获得某个节点的第一个js文件
            let comp = node._components || [];
            for (let i = 0; i < comp.length; i++) {
                let name = comp[i].name.split('<');
                if (name.length == 2) {
                    if (name[1].indexOf(pre || 'pf') == 0) return comp[i];
                    else if (name[1].indexOf('ly') == 0) return comp[i];
                    else if (name[1].indexOf(name[0]) == 0) return comp[i];
                }
            }
            return null;
        },
    }
    ge.ListView = ListView;
}();