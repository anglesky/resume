webpackJsonp([0],{GqNC:function(e,t){},JjyJ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(e){a("GqNC")},null,null).exports,r=a("/ocq"),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content",attrs:{id:"home"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"header_style1"},[a("div",{staticClass:"logo"},[a("h1",[a("router-link",{attrs:{to:"/"}},[e._v("风云珏玉")])],1)]),e._v(" "),a("div",{staticClass:"h_menu"},[a("ul",{staticClass:"flexy-menu thick orange"},[a("li",[a("router-link",{attrs:{to:"/resume"}},[e._v("个人简历")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/travel"}},[e._v("我的旅行")])],1)])]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"slider"},[t("div",{staticClass:"da-slider",attrs:{id:"da-slider"}},[t("div",{staticClass:"da-slide"},[t("h2",[this._v("千里之行，始于足下")]),this._v(" "),t("p",[this._v("A journey of a thousand miles begins with single step.")])])]),this._v(" "),t("div",{staticClass:"down-arrow"},[t("a",{staticClass:"scroll",attrs:{href:"#group_1"}},[t("span")])])])}]};var c=a("VU/8")({name:"GateWay",data:function(){return{msg:"门户"}}},l,!1,function(e){a("y3oV")},"data-v-24348d1b",null).exports,o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-container"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"logo"},[s("h1",[s("router-link",{attrs:{to:"/"}},[e._v("风云珏玉")])],1)]),e._v(" "),s("div",{staticClass:"menu"},[s("ul",{staticClass:"nav-menu"},[s("li",{staticClass:"active"},[s("router-link",{attrs:{to:"/resume"}},[e._v("个人简历")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/travel"}},[e._v("我的旅行")])],1)])])]),e._v(" "),s("div",{staticClass:"resume"},[s("div",{staticClass:"base-info"},[s("img",{attrs:{src:a("RRnT"),width:"50%"}}),e._v(" "),s("div",{staticClass:"other-info"},[s("div",{staticClass:"name"},[e._v(e._s(e.username))]),e._v(" "),s("p",[e._v(e._s(e.desc))]),e._v(" "),s("div",{staticStyle:{"text-align":"left"}},[e._v("联系电话："+e._s(e.cell_phone))]),e._v(" "),s("div",{staticStyle:{"text-align":"left"}},[e._v("邮箱："+e._s(e.email))])])]),e._v(" "),s("div",{staticClass:" main-info"},[s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[e._v("工作经历")]),e._v(" "),s("div",e._l(e.work_experience,function(t){return s("div",{staticClass:"w-item"},[s("div",{staticClass:"w-name"},[e._v(e._s(t.title))]),e._v(" "),s("div",{staticClass:"w-date"},[e._v(e._s(t.date))]),e._v(" "),s("div",{staticClass:"w-lang"},[e._v(e._s(t.lang))]),e._v(" "),s("div",{staticClass:"w-framework"},[e._v(e._s(t.framework))]),e._v(" "),s("div",{staticClass:"w-content"},[e._v(e._s(t.content))])])}))]),e._v(" "),s("div",{staticClass:"divide"}),e._v(" "),s("div",{staticClass:"item",staticStyle:{"margin-bottom":"30px"}},[s("div",{staticClass:"title"},[e._v("技能证书")]),e._v(" "),e._l(e.skills,function(t){return s("div",{staticClass:"skills"},[s("div",{staticClass:"s-item"},[e._v(e._s(t))])])})],2)])])])},staticRenderFns:[]};var d=a("VU/8")({name:"Main",data:function(){return{username:"孙安广",desc:"毕业于华中农业大学地理信息系统专业。喜欢跑步，骑行等运动；积极乐观，为人随和。",cell_phone:"18627820371",email:"sun_anguang@163.com",work_experience:[{title:"云生态圈",date:"【项目时间】2014.3-至今。",lang:"【开发语言】服务端Php,Ruby；前端js,html。",framework:"【开发框架】服务端Joomla,ECShop,Ucenter；前端jQuery.js,Bootstrap.js等。",content:"【研发内容】包括交易中心，开发世界，集成世界，服务世界，需求中心及个人中心在内的完整云生态环境。完成产品的开发，上架，销售，服务，需求等一系列功能。"},{title:"云生态圈微信公众号",date:"【项目时间】2018.1-2018.4。",lang:"【开发语言】服务端Php；前端js,html。",framework:"【开发框架】jQuery.js,Vue.js,Swiper.js,Weui等。",content:"【研发内容】基于PC端云生态圈功能的移植。主要负责生态园区，个人中心，需求中心等模块的研发。适用于不同屏幕尺寸的移动设备。"},{title:"地质云",date:"【项目时间】2017.6-2017.10。",lang:"【开发语言】服务端Php；前端js,html。",framework:"【开发框架】jQuery.js,ECharts.js等。",content:"【研发内容】使用webuploader.js实现大文件断点续传；使用ECharts.js实现数据可视化。"}],skills:["熟练使用js,css,html进行web前端页面实现；熟悉jQuery、Vue、Bootstrap等前端框架。","掌握php、Ruby等服务器语言；熟悉MySQL数据库，掌握SQL语法。","熟悉Liunux操作系统，能执行常用的命令操作。","熟悉Echarts，Chart，D3等数据可视化工具；了解webpack打包工具，了解less语言。","使用git代码管理工具。","大学英语四级（CET-4），计算机二级。"]}}},o,!1,function(e){a("JjyJ")},"data-v-93752e98",null).exports,v={name:"Travel",data:function(){return{msg:"Travel",travelList:[{name:"湖北",tDate:"2018-09-30",remark:"武汉是湖北的省会城市"},{name:"河南",tDate:"2018-07-21",remark:"河南省是粮食大省"},{name:"湖南",tDate:"2018-08-21",remark:"湖南省博物馆拥有丰富的馆藏文物"},{name:"海南",tDate:"2018-09-2",remark:"海南省是一个旅游省份，环境优美"}]}},mounted:function(){var e=echarts.init(document.getElementById("MainMap"));e.setOption({tooltip:{trigger:"item",formatter:function(e){var t=e.data,a=t.name+"<br/>";return 1==t.selected&&(a+="旅行时间："+t.tDate+"<br/>",a+="旅行备注："+t.remarks),a}},series:[{name:"中国",type:"map",mapType:"china",selectedMode:"multiple",label:{normal:{show:!0},emphasis:{show:!0}},data:[{name:"黑龙江",selected:!1},{name:"吉林",selected:!1},{name:"辽宁",selected:!1},{name:"内蒙古",selected:!1},{name:"河北",selected:!1},{name:"北京",selected:!1},{name:"天津",selected:!1},{name:"山东",selected:!1},{name:"江苏",selected:!1},{name:"上海",selected:!1},{name:"安徽",selected:!1},{name:"浙江",selected:!1},{name:"福建",selected:!1},{name:"江西",selected:!1},{name:"台湾",selected:!1},{name:"湖北",selected:!0,tDate:"2018-09-30",remarks:"目前在武汉"},{name:"河南",selected:!0,tDate:"2018-09-12",remarks:"河南省是粮食大省"},{name:"山西",selected:!1},{name:"陕西",selected:!1},{name:"甘肃",selected:!1},{name:"宁夏",selected:!1},{name:"青海",selected:!1},{name:"新疆",selected:!1},{name:"西藏",selected:!1},{name:"四川",selected:!1},{name:"重庆",selected:!1},{name:"贵州",selected:!1},{name:"湖南",selected:!1},{name:"广西",selected:!1},{name:"广东",selected:!1},{name:"云南",selected:!1},{name:"海南",selected:!0,tDate:"2018-09-02",remarks:"旅游大省"},{name:"香港",selected:!1},{name:"澳门",selected:!1}]}]});for(var t=0;t<e.getOption().series[0].data.length;t++)this.travelList.indexOf(e.getOption().series[0].data[t].name)>=0&&(e.getOption().series[0].data[t].selected=!0);e.setOption(e.getOption(),!0)},methods:{drawBounds:function(e){(new BMap.Boundary).get(e,function(e){var t=e.boundaries.length;if(0!==t){for(var a=[],s=0;s<t;s++){var i=new BMap.Polyline(e.boundaries[s],{strokeWeight:3,strokeColor:"#ff0000"});(void 0).addOverlay(i),a=a.concat(i.getPath())}a.addEventListener("mouseover",function(e){alert("hover")})}else alert("未能获取当前输入行政区域")})}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("div",{staticClass:"nav"},[t("div",{staticClass:"logo"},[t("h1",[t("router-link",{attrs:{to:"/"}},[this._v("风云珏玉")])],1)]),this._v(" "),t("div",{staticClass:"menu"},[t("ul",{staticClass:"nav-menu"},[t("li",[t("router-link",{attrs:{to:"/resume"}},[this._v("个人简历")])],1),this._v(" "),t("li",{staticClass:"active"},[t("router-link",{attrs:{to:"/travel"}},[this._v("我的旅行")])],1)])])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"travel-map"},[t("div",{staticClass:"title"},[this._v("旅行足迹")]),this._v(" "),t("div",{attrs:{id:"MainMap"}})])}]};var u=a("VU/8")(v,m,!1,function(e){a("z6g4")},"data-v-2f51d2f6",null).exports;s.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"GateWay",component:c},{path:"/resume",name:"Main",component:d},{path:"/travel",name:"Travel",component:u}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:n},template:"<App/>"})},RRnT:function(e,t,a){e.exports=a.p+"static/img/me.ddf9976.jpg"},y3oV:function(e,t){},z6g4:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5a99d29e9cecb6407091.js.map