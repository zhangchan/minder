
//分析
function fenxi(ele){
    if(!ele.length) return false;
    var aj = [{
        "children": [
               {
               "children": [{
               "children": [],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                    "imageTitle": "关系人",
                    // "color" : "#ff0000",
                    "analysis":true,
                    "text": "210105196303234335\n杨晓峰\n汉族"
                }
           },{
               "children": [],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                    "imageTitle": "关系人",
                    // "color" : "#ff0000",
                    "analysis":true,
                    "text": "210105196303234335\n杨晓峰\n汉族"
                }
           },{
               "children": [],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                    "imageTitle": "关系人",
                    // "color" : "#ff0000",
                    "analysis":true,
                    "text": "210105196303234335\n杨晓峰\n汉族"
                }
           }],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                    "imageTitle": "关系人",
                    // "color" : "#ff0000",
                    "analysis":true,
                    "text": "210105196303234335\n杨晓峰\n汉族"
                }
           },{
               "children": [],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                    "imageTitle": "关系人",
                    // "color" : "#ff0000",
                    "analysis":true,
                    "text": "210105196303234335\n杨晓峰\n汉族"
                }
           }
            
        ],
        "data": {
                   "id": "cvcvb",
            "image" :"dist/kityminder-edit/images/icons/an1.png",
            "imageTitle": "1111111",
            "analysis":true,
            "text": "李桂平涉嫌合同诈骗"
        }
    }];
    ele = ele.filter(function(e){
        return e.getData('analysis');
    });
    var arr=[];
    ele.forEach(function(d){
        ele.forEach(function(e){
            if (isChild(d,e.children) && arr.indexOf(d) == -1) {
                arr.push(d);
                return true;
            }
        });
    });
    ele = ele.filter(function(e){
        return arr.indexOf(e) == -1;
    });
    for (var i = 0; i < ele.length; i++) {
        ele[i].importJson(aj);
    }
}
function isChild(node,children){
    var state = false;
    node.getData('id');
    for(var i=0;i<children.length;i++){
        if(node.getData('id') == children[i].getData('id')){
            return true;
        }
        state = isChild(node,children[i].children);
    }
    return state || false;
}
//显示表格
function listTable(id,node){
console.log(node.getData('id'));
    $('#modal').show().animate({left:"20%"}, 500);
    $('#modal').find('.modal_title').text('案件嫌疑人数据')
    $('#table').bootstrapTable({
        striped : true,
        height : 185,
        columns: [{
            field: 'id',
            title: '案件编号'
        }, {
            field: 'name',
            title: '案件名称'
        }, {
            field: 'time',
            title: '案发时间'
        }, {
            field: 'zdw',
            title: '责任单位'
        }, {
            field: 'sid',
            title: '涉案人员身份证'
        }, {
            field: 'sname',
            title: '涉案人员姓名'
        }],
        data: [{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        },{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        },{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        },{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        },{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        },{
            id: "A6628816600002009050113",
            name: '拓比利铝业有限公司被盗案',
            time: '2011-01-01',
            zdw: '轮台县公安局',
            sid: '4101811968032006051',
            sname: '李新国'
        }]
    });
}
// function getIconUrl(name){
//     var root = "dist/kityminder-edit/images/icons/";
//     var iconMap = {
//         "案件1" : "an1.png",
//         "案件1" : "an2.png",
//         "车"    : "car.png",
//         "电话"  : "phone.png",
//         "市"    : "shi.png",
//         "县"    : "xian.png",
//         "乡"    : "xiang.png",
//     }
//     for (var key in iconMap) {
//         if(name == key){
//             return root + iconMap[key];
//         }
//     };
// }
function formatData(data){
    //重置data
    //data.data
    for(var i=0;data.children.length;i++){
        data.children[i] = arguments.callee(data.children[i]);
    }
    return data;
}
var json = {
    "root": {
        "children": [
            {
                "children": [
                    {
                       "children": [],
                        "data": {
                            "id": "3423dsd",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    },{
                       "children": [],
                        "data": {
                            "id": "dasda",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    }
                ],
                "data": {
                    "id": "1111",
                    "text": "恰尔巴格乡"
                }
            },
            {
                "children": [
                    {
                       "children": [],
                        "data": {
                            "id": "hgfhgfh",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    },{
                       "children": [],
                        "data": {
                            "id": "45546546",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    }
                ],
                "data": {
                    "id": "2222",
                    "image" :"dist/kityminder-edit/images/icons/xiang.png",
                    "imageTitle": "乡",
                    "text": "英下乡"
                }
            },
            {
                "children": [
                    {
                       "children": [],
                        "data": {
                            "id": "89875",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    },{
                       "children": [],
                        "data": {
                            "id": "345456",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    }
                ],
                "data": {
                    "id": "3333",
                    "image" :"dist/kityminder-edit/images/icons/xiang.png",
                    "analysis" : true,
                    "imageTitle": "乡",
                    "text": "兰干乡"
                }
            },
            {
                "children": [
                    {
                       "children": [],
                        "data": {
                            "id": "3423dsd",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    },{
                       "children": [
                            {
                               "children": [],
                                "data": {
                                    "id": "56756f",
                                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
                                    "imageTitle": "关系人",
                                    // "color" : "#ff0000",
                                    "analysis":true,
                                    "text": "210105196303234335\n杨晓峰\n汉族"
                                }
                            }
                       ],
                        "data": {
                            "id": "3423dsd",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            "color" : "#ff0000",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族"
                        }
                    }
                ],
                "data": {
                    "id": "4444",
                    "analysis" : true,
                    "text": "普惠乡"
                }
            },
            {
                "children": [],
                "data": {
                    "id": "5555",
                    "text": "阿瓦提乡"
                }
            }
        ],
        "data": {
            "id": "aaaa",
            "text": "巴音巴音郭楞蒙古自治州"
        }
    },
    "template": "right",
    "theme": "fresh-blue",
    "version": "1.4.33"
}
angular.module('kityminderDemo', ['kityminderEditor'])
    .controller('MainController', function($scope) {
        $scope.initEditor = function(editor, minder) {
            window.editor = editor;
            window.minder = minder;
            editor.minder.importJson(json)
        };
    });