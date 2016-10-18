
//分析

function fenxi(ele){
    alert("分析");
    if(!ele.length) return false; 
    var aj = [{
		"data": {
            "id": "cvcvb",
            "image" :"dist/kityminder-edit/images/icons/an1.png",
			"stlx":"ixvAJ",
            "imageTitle": "1111111",
            "analysis":true,
            "text": "李桂平涉嫌合同诈骗"
        },
        "children": [
                {
				"children": [{
                "children": [],
                "data": {
                    "id": "cxzczx",
                    "image" :"dist/kityminder-edit/images/icons/gxr.png",
					"stlx":"ixvREN",
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
						"stlx":"ixvREN",
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
						"stlx":"ixvREN",
						"imageTitle": "关系人",
						// "color" : "#ff0000",
						"analysis":true,
						"text": "210105196303234335\n杨晓峰\n汉族"
					}
			     }],
					"data": {
						"id": "cxzczx",
						"image" :"dist/kityminder-edit/images/icons/gxr.png",
						"stlx":"ixvREN",
						"imageTitle": "关系人",
						// "color" : "#ff0000",
						"analysis":true,
						"text": "210105196303234335\n杨晓峰\n汉族"
					}
			    },	{
				   "children": [],
					"data": {
						"id": "cxzczx",
						"image" :"dist/kityminder-edit/images/icons/car.png",
						"imageTitle": "车",
						"stlx":"ixvcar",
						// "color" : "#ff0000",
						"analysis":true,
						"text": "粤888888\n土匪\n广州"
					}
					}
            
        ] 
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
        ele[i].getData('id')
        ele[i].importJson(aj);
    }
}
function qqfw(obj,node){
    //去掉请求服务
    obj.remove();
    node.setData("fwflag",false);
    //修改当前节点显示的文字
    node.setData("text","false\nssss\nssss\nssss");
    //修改当前节点显示的图片
    node.setData("image","dist/kityminder-edit/images/icons/xiang.png");
    //修改更多属性使用 node.setData(参数名,值);
}
//加载历史图
function loadHistory(name){
    minder.importJson(json)
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
function createTab(eles){
    var html = '<div class="title_box">';
    for (var i = 0; i < eles.length; i++) {
        html += '<div class="tab '+ (!i ? "cur now" : "") +'">' + eles[i].title + '</div>';
    }
    html += '</div>';
    return html;
}
function addAll(arr){
    var val = 0;
    for (var i = 0; i < arr.length; i++) {
        val += arr[i];
    }
    return val;
}
function showTable(columns,data){
    $('#table').bootstrapTable({
        striped : true,
        height : 185,
        columns: columns,
        data: data
    });
}
function leftMove(){
    if(!$(".now").next().length) return false;
    var w = $(".now").outerWidth();
    var left = parseInt($(".title_box").css("left"));
    $(".now").removeClass('now').next().addClass('now');
    $(".title_box").css("left",left-w + "px");
}
function rightMove(){
    if(!$(".now").prev().length) return false;
    var w = $(".now").outerWidth();
    var left = parseInt($(".title_box").css("left"));
    $(".now").removeClass('now').prev().addClass('now');
    $(".title_box").css("left",left+w + "px");
}
function listTable(id){
    $('#modal').show().animate({left:"20%"}, 500);
    var tab = [
        {title:"案件嫌疑人数据1"},
        {title:"案件嫌疑人数据2"},
        {title:"案件嫌疑人数据3"},
        {title:"案件嫌疑人数据4"},
        {title:"案件嫌疑人数据5"},
        {title:"案件嫌疑人数据6"},
        {title:"案件嫌疑人数据7"},
        {title:"案件嫌疑人数据8"},
        {title:"案件嫌疑人数据9"},
        {title:"案件嫌疑人数据10"},
        {title:"案件嫌疑人数据11"},
        {title:"案件嫌疑人数据12"},
        {title:"案件嫌疑人数据13"},
        {title:"案件嫌疑人数据14"},
        {title:"案件嫌疑人数据15"}];
    var columns = [{
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
        }];
    var data = [{
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
        }];
    $('#modal').find('.modal_title').html(createTab(tab));
    $('#modal').append('<div class="move_btn left_btn"><</div><div class="move_btn right_btn">></div>')
    var widthArr = $('.title_box').find('.tab').map(function(i,ele){
        return $(ele).outerWidth();
    });
    var width = addAll(widthArr);
    $("#modal .modal_title .title_box").width(width)
    $('.modal_title').width($('.modal_title').width()-20);
    if(width > $('.modal_title').width()){
        $(".move_btn").show();
    }else{
        $(".move_btn").hide();
    }
    console.log($('.modal_title').width(),$('.title_box').width(),width);

    //根据数据显示第一个tab
    showTable(columns,data);
    //点击显示对应的tab
    $('#modal').on("click",".tab",function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        showTable(columns,data)
    });   
    $('#modal .right_btn').on("click",leftMove);
    $('#modal .left_btn').on("click",rightMove);
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
                            "image" :"dist/kityminder-edit/images/aaa1.jpg",
                            "imageWidth" : 100,
                            "imageTitle": "关系人",
                            "color" : "#ff0000",
                            "stzj" : "001",
                            "fwflag" : true,
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰"
                        }
                    },{
                       "children": [],
                        "data": {
                            "id": "dasda",
                            "image" :"dist/kityminder-edit/images/icons/gxr.png",
                            "imageTitle": "关系人",
                            // "color" : "#ff0000",
                            "fwflag" : true,
                            "stzj" : "001",
                            "analysis":true,
                            "text": "210105196303234335\n杨晓峰\n汉族\n汉族"
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
                            "fwflag" : true,
                            "stzj" : "002",
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
                            "stzj" : "001",
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