webpackJsonp([35],{552:function(t,n,e){function a(t){e(799)}var i=e(195)(e(633),e(885),a,"data-v-b939df6a",null);t.exports=i.exports},601:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},602:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},603:function(t,n,e){n=t.exports=e(540)(!0),n.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},604:function(t,n,e){var a=e(603);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(541)("488e4eea",a,!0)},605:function(t,n,e){function a(t){e(604)}var i=e(195)(e(602),e(606),a,"data-v-d69b0f44",null);t.exports=i.exports},606:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:e(601),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},633:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(605),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{table:{num:[0,1,2,3,4,5],th:["机构ID","机构名称","CCC类型","CCC值","备注","操作"],td:[{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"},{id:"001",name:"机构名称机构名称机构名称",type:"管理",zhi:"XXXXXXXXXX",mark:"XXX"}]}}},methods:{handleSizeChange:function(t){console.log(t)},handleCurrentChange:function(t){console.log(t)},add:function(){this.$router.push("add_agency")}},components:{current:i.default}}},737:function(t,n,e){n=t.exports=e(540)(!0),n.push([t.i,".agency_argument[data-v-b939df6a]{padding:0 0 20px 20px;overflow:hidden;position:relative}.agency_argument .test[data-v-b939df6a]{padding-left:10px}.content-wrapper[data-v-b939df6a]{background:#fff;padding-left:20px;padding-right:20px;height:746px}.content-wrapper .title[data-v-b939df6a]{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0;height:80px;line-height:80px;border-bottom:1px solid #f4f4f4;position:relative}.content-wrapper .title .text[data-v-b939df6a]{border-bottom:2px solid #000;display:inline-block;height:80px}.content-wrapper .title .add[data-v-b939df6a]{width:120px;height:40px;background:#f90;border:1px solid #f90;outline:none;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:40px;text-align:center;position:absolute;right:0;bottom:20px}.content-wrapper .content[data-v-b939df6a]{padding-top:42px}.content-wrapper .content .search .text[data-v-b939df6a]{font-family:PingFangSC-Regular;font-size:14px;color:#999;letter-spacing:0}.content-wrapper .content .search input[data-v-b939df6a]{margin:0 20px 0 30px;width:300px;height:40px;border:1px solid #eee;border-radius:4px;text-indent:1em;outline:none;vertical-align:middle}.content-wrapper .content .search input[data-v-b939df6a]:hover{border:1px solid orange}.content-wrapper .content .search .toolBtn[data-v-b939df6a]{border-radius:0;height:40px;width:120px;background:#f90;border:none;vertical-align:middle;font-family:PingFangSC-Regular;font-size:14px;color:#fff}.content table[data-v-b939df6a]{display:flex;width:100%;margin-top:40px;margin-bottom:40px;font-family:PingFangSC-Regular;font-size:14px;color:#666;letter-spacing:0;flex-wrap:wrap;border:1px solid #f0f0f0;border-collapse:collapse}.content table td[data-v-b939df6a]{border:1px solid #f0f0f0}.content table tr[data-v-b939df6a]{width:100%;height:40px;display:flex;line-height:40px}.content table tr[data-v-b939df6a]:nth-child(odd){background:#f8f8f8}.content table tr[data-v-b939df6a]:hover{width:100%;height:40px;display:flex;line-height:40px;background:#eef1f6}.content table tr[data-v-b939df6a]:first-child{background:#f4f4f4;box-shadow:inset 0 1px 0 0 #eee}.content table tr td[data-v-b939df6a]{flex:1;text-align:center}.content table tr td[data-v-b939df6a]:nth-child(2){flex:2}.agency_argument .el-pagination[data-v-b939df6a]{position:absolute;right:0;bottom:40px}.content .el-icon-delete2[data-v-b939df6a]{color:#f90}_[data-v-b939df6a]:-ms-lang(x),td[data-v-b939df6a]{display:flex;align-items:center;justify-content:center}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/agency_argument.vue"],names:[],mappings:"AACA,kCACI,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,wCACI,iBAAmB,CACtB,AACD,kCACI,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,YAAc,CACjB,AACD,yCACI,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,gCAAiC,AACjC,iBAAmB,CACtB,AACD,+CACI,6BAA8B,AAC9B,qBAAsB,AACtB,WAAa,CAChB,AACD,8CACI,YAAa,AACb,YAAa,AACb,gBAAoB,AACpB,sBAA0B,AAC1B,aAAc,AACd,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,WAAa,CAChB,AACD,2CACI,gBAAkB,CACrB,AAGD,yDACI,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,gBAAkB,CACrB,AACD,yDACI,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,sBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,aAAc,AACd,qBAAuB,CAC1B,AACD,+DACI,uBAAyB,CAC5B,AACD,4DACI,gBAAiB,AACjB,YAAa,AACb,YAAa,AACb,gBAAoB,AACpB,YAAa,AACb,sBAAuB,AACvB,+BAAgC,AAChC,eAAgB,AAChB,UAAe,CAClB,AACD,gCACI,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,eAAgB,AAChB,yBAA0B,AAC1B,wBAA0B,CAC7B,AACD,mCACI,wBAA0B,CAC7B,AACD,mCACI,WAAY,AACZ,YAAa,AACb,aAAc,AACd,gBAAkB,CACrB,AACD,kDACI,kBAAoB,CACvB,AACD,yCACI,WAAY,AACZ,YAAa,AACb,aAAc,AACd,iBAAkB,AAClB,kBAAoB,CACvB,AACD,+CACI,mBAAoB,AACpB,+BAAoC,CACvC,AACD,sCACI,OAAQ,AACR,iBAAmB,CACtB,AACD,mDACI,MAAO,CACV,AACD,iDACI,kBAAmB,AACnB,QAAS,AACT,WAAY,CACf,AACD,2CACI,UAAe,CAClB,AACD,mDACI,aAAc,AACd,mBAAoB,AACpB,sBAAwB,CAC3B",file:"agency_argument.vue",sourcesContent:["\n.agency_argument[data-v-b939df6a] {\n    padding: 0 0 20px 20px;\n    overflow: hidden;\n    position: relative;\n}\n.agency_argument .test[data-v-b939df6a]{\n    padding-left: 10px;\n}\n.content-wrapper[data-v-b939df6a]{\n    background: #fff;\n    padding-left: 20px;\n    padding-right: 20px;\n    height: 746px;\n}\n.content-wrapper .title[data-v-b939df6a]{\n    font-family: PingFangSC-Regular;\n    font-size: 16px;\n    color: #333333;\n    letter-spacing: 0;\n    height: 80px;\n    line-height: 80px;\n    border-bottom: 1px solid #f4f4f4;\n    position: relative;\n}\n.content-wrapper .title .text[data-v-b939df6a]{\n    border-bottom:2px solid black;\n    display: inline-block;\n    height: 80px;\n}\n.content-wrapper .title .add[data-v-b939df6a]{\n    width: 120px;\n    height: 40px;\n    background: #FF9900;\n    border: 1px solid #FF9900;\n    outline: none;\n    font-family: PingFangSC-Regular;\n    font-size: 14px;\n    color: #FFFFFF;\n    line-height: 40px;\n    text-align: center;\n    position: absolute;\n    right: 0px;\n    bottom: 20px;\n}\n.content-wrapper .content[data-v-b939df6a]{\n    padding-top: 42px;\n}\n.content-wrapper .content .search[data-v-b939df6a]{\n}\n.content-wrapper .content .search .text[data-v-b939df6a]{\n    font-family: PingFangSC-Regular;\n    font-size: 14px;\n    color: #999999;\n    letter-spacing: 0;\n}\n.content-wrapper .content .search input[data-v-b939df6a]{\n    margin: 0 20px 0 30px;\n    width: 300px;\n    height: 40px;\n    border: 1px solid #EEEEEE;\n    border-radius: 4px;\n    text-indent: 1em;\n    outline: none;\n    vertical-align: middle;\n}\n.content-wrapper .content .search input[data-v-b939df6a]:hover{\n    border: 1px solid orange;\n}\n.content-wrapper .content .search .toolBtn[data-v-b939df6a]{\n    border-radius: 0;\n    height: 40px;\n    width: 120px;\n    background: #FF9900;\n    border: none;\n    vertical-align: middle;\n    font-family: PingFangSC-Regular;\n    font-size: 14px;\n    color: #FFFFFF;\n}\n.content table[data-v-b939df6a]{\n    display: flex;\n    width: 100%;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    font-family: PingFangSC-Regular;\n    font-size: 14px;\n    color: #666666;\n    letter-spacing: 0;\n    flex-wrap: wrap;\n    border: 1px solid #f0f0f0;\n    border-collapse: collapse;\n}\n.content table td[data-v-b939df6a]{\n    border: 1px solid #f0f0f0;\n}\n.content table tr[data-v-b939df6a]{\n    width: 100%;\n    height: 40px;\n    display: flex;\n    line-height: 40px;\n}\n.content table tr[data-v-b939df6a]:nth-child(odd){\n    background: #F8F8F8;\n}\n.content table tr[data-v-b939df6a]:hover{\n    width: 100%;\n    height: 40px;\n    display: flex;\n    line-height: 40px;\n    background: #EEF1F6;\n}\n.content table tr[data-v-b939df6a]:first-child{\n    background: #F4F4F4;\n    box-shadow: inset 0 1px 0 0 #EEEEEE;\n}\n.content table tr td[data-v-b939df6a]{\n    flex: 1;\n    text-align: center;\n}\n.content table tr td[data-v-b939df6a]:nth-child(2){\n    flex:2;\n}\n.agency_argument .el-pagination[data-v-b939df6a]{\n    position: absolute;\n    right: 0;\n    bottom:40px;\n}\n.content .el-icon-delete2[data-v-b939df6a]{\n    color: #ff9900;\n}\n_[data-v-b939df6a]:-ms-lang(x), td[data-v-b939df6a] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n"],sourceRoot:""}])},799:function(t,n,e){var a=e(737);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(541)("1bd1505c",a,!0)},885:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"agency_argument"},[e("current",{staticClass:"test",attrs:{yiji:"参数管理",erji:"业务参数",sanji:"机构CCC管理"}}),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"title"},[e("span",{staticClass:"text"},[t._v("机构CCC管理")]),e("button",{staticClass:"add",on:{click:t.add}},[t._v("新增")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"search"},[e("span",{staticClass:"text"},[t._v("查询条件")]),t._v(" "),e("input",{attrs:{type:"text"}}),t._v(" "),e("el-button",{staticClass:"toolBtn"},[t._v("查询")])],1),t._v(" "),e("table",[e("tr",t._l(t.table.th,function(n){return e("td",[t._v(t._s(n))])})),t._v(" "),t._l(t.table.td,function(n){return e("tr",[t._l(n,function(n){return e("td",[t._v(t._s(n))])}),e("td",[e("i",{staticClass:"el-icon-delete2"})])],2)})],2),t._v(" "),e("el-pagination",{attrs:{"page-size":10,layout:"total,prev, pager, next, jumper",total:100},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=35.376bf9cebe0c2def0bad.js.map