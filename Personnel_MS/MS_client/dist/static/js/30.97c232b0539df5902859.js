webpackJsonp([30],{561:function(t,n,e){function i(t){e(787)}var a=e(194)(e(642),e(873),i,null,null);t.exports=a.exports},600:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},601:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},602:function(t,n,e){n=t.exports=e(539)(!0),n.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},603:function(t,n,e){var i=e(602);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(540)("488e4eea",i,!0)},604:function(t,n,e){function i(t){e(603)}var a=e(194)(e(601),e(605),i,"data-v-d69b0f44",null);t.exports=a.exports},605:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:e(600),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},642:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(604),a=function(t){return t&&t.__esModule?t:{default:t}}(i);n.default={data:function(){return{test222:[{color:"orange",content:1},{color:"yellow",content:1},{color:"gold",content:1}],table:{th:["公司名称","纳税人识别号","银行账户","账户名称","操作"],td:[{companyId:"001",userId:"机构名称机构名称机构名称",account:"管理",accountName:"XXXXXXXXXX"},{companyId:"001",userId:"机构名称机构名称机构名称",account:"管理",accountName:"XXXXXXXXXX"}]}}},methods:{handleSizeChange:function(t){console.log(t)},handleCurrentChange:function(t){console.log(t)},add:function(){this.$router.push("add_ticket")}},components:{current:a.default}}},725:function(t,n,e){n=t.exports=e(539)(!0),n.push([t.i,".ticket_argument{padding:0 0 20px 20px;overflow:hidden;position:relative}.ticket_argument .test{padding-left:10px}.ticket_argument .content-wrapper{background:#fff;padding-left:20px;padding-right:20px;height:746px}.ticket_argument .content-wrapper .title{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0;height:80px;line-height:80px;border-bottom:1px solid #f4f4f4;position:relative}.ticket_argument .content-wrapper .title .text{border-bottom:2px solid #000;display:inline-block;height:80px}.ticket_argument .content-wrapper .title .add{width:120px;height:40px;background:#f90;border:1px solid #f90;outline:none;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:40px;text-align:center;position:absolute;right:0;bottom:20px}.ticket_argument .content-wrapper .content{padding-top:42px}.ticket_argument .content-wrapper .content .text{font-family:PingFangSC-Regular;font-size:14px;color:#999;letter-spacing:0}.ticket_argument .content-wrapper .content input{margin:0 20px 0 30px;width:300px;height:40px;border:1px solid #eee;border-radius:4px;text-indent:1em;outline:none;vertical-align:middle}.ticket_argument .content-wrapper .content input:hover{border:1px solid orange}.ticket_argument .content-wrapper .content .toolBtn{border-radius:0;height:40px;width:120px;background:#f90;border:none;vertical-align:middle;font-family:PingFangSC-Regular;font-size:14px;color:#fff}.ticket_argument .content-wrapper .content table{display:flex;width:100%;margin-top:40px;margin-bottom:40px;font-family:PingFangSC-Regular;font-size:14px;color:#666;letter-spacing:0;flex-wrap:wrap;border:1px solid #f0f0f0;border-collapse:collapse}.ticket_argument .content-wrapper .content table td{border:1px solid #f0f0f0}.ticket_argument .content-wrapper .content table tr{width:100%;height:40px;display:flex;line-height:40px}.ticket_argument .content-wrapper .content table tr:nth-child(odd){background:#f8f8f8}.ticket_argument .content-wrapper .content table tr:hover{width:100%;height:40px;display:flex;line-height:40px;background:#eef1f6}.ticket_argument .content-wrapper .content table tr:first-child{background:#f4f4f4;box-shadow:inset 0 1px 0 0 #eee}.ticket_argument .content-wrapper .content table td{flex:2;text-align:center}.ticket_argument .content-wrapper .content table td:first-child,.ticket_argument .content-wrapper .content table td:nth-child(3){flex:3}.ticket_argument .content-wrapper .content .el-icon-delete2{color:#f90}.ticket_argument .el-pagination{position:absolute;right:45px;bottom:40px}.ticket_argument .el-pagination .el-pagination__total{height:24px}.ticket_argument .el-pagination .btn-next,.ticket_argument .el-pagination .btn-prev,.ticket_argument .el-pagination .el-pager li,.ticket_argument .el-pagination .el-pagination__jump{height:24px;width:24px;line-height:24px}.ticket_argument .el-pagination .el-pager li.active{background:#f90;border:1px solid #f90}.ticket_argument .el-pagination .el-pager li:hover,.ticket_argument .el-pagination button:hover{color:#f90}.ticket_argument .el-pagination .el-pagination__jump .el-pagination__editor{width:24px;height:24px;line-height:24px;margin:0 3px;text-indent:0}.ticket_argument .el-pagination .el-pagination__editor:focus{outline:none;border-color:#f90}.ticket_argument _:-ms-lang(x),.ticket_argument td{display:flex;align-items:center;justify-content:center}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/ticket_info.vue"],names:[],mappings:"AACA,iBACE,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,uBACE,iBAAmB,CACpB,AACD,kCACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,YAAc,CACf,AACD,yCACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+CACE,6BAA8B,AAC9B,qBAAsB,AACtB,WAAa,CACd,AACD,8CACE,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,sBAAuB,AACvB,aAAc,AACd,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,WAAa,CACd,AACD,2CACE,gBAAkB,CACnB,AACD,iDACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,gBAAkB,CACnB,AACD,iDACE,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,gBAAiB,AACjB,aAAc,AACd,qBAAuB,CACxB,AACD,uDACE,uBAA0B,CAC3B,AACD,oDACE,gBAAiB,AACjB,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,YAAa,AACb,sBAAuB,AACvB,+BAAgC,AAChC,eAAgB,AAChB,UAAY,CACb,AACD,iDACE,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,yBAA0B,AAC1B,wBAA0B,CAC3B,AACD,oDACE,wBAA0B,CAC3B,AACD,oDACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,gBAAkB,CACnB,AACD,mEACE,kBAAoB,CACrB,AACD,0DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,iBAAkB,AAClB,kBAAoB,CACrB,AACD,gEACE,mBAAoB,AACpB,+BAAiC,CAClC,AACD,oDACE,OAAQ,AACR,iBAAmB,CACpB,AAID,iIACE,MAAQ,CACT,AACD,4DACE,UAAY,CACb,AACD,gCACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,sDACE,WAAa,CACd,AAQD,sLAJE,YAAa,AACb,WAAY,AACZ,gBAAkB,CAMnB,AACD,oDACE,gBAAiB,AACjB,qBAAuB,CACxB,AACD,gGAEE,UAAY,CACb,AACD,4EACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,aAAe,CAChB,AACD,6DACE,aAAc,AACd,iBAAmB,CACpB,AACD,mDAEE,aAAc,AACd,mBAAoB,AACpB,sBAAwB,CACzB",file:"ticket_info.vue",sourcesContent:["\n.ticket_argument {\n  padding: 0 0 20px 20px;\n  overflow: hidden;\n  position: relative;\n}\n.ticket_argument .test {\n  padding-left: 10px;\n}\n.ticket_argument .content-wrapper {\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 746px;\n}\n.ticket_argument .content-wrapper .title {\n  font-family: PingFangSC-Regular;\n  font-size: 16px;\n  color: #333;\n  letter-spacing: 0;\n  height: 80px;\n  line-height: 80px;\n  border-bottom: 1px solid #f4f4f4;\n  position: relative;\n}\n.ticket_argument .content-wrapper .title .text {\n  border-bottom: 2px solid #000;\n  display: inline-block;\n  height: 80px;\n}\n.ticket_argument .content-wrapper .title .add {\n  width: 120px;\n  height: 40px;\n  background: #f90;\n  border: 1px solid #f90;\n  outline: none;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #fff;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  bottom: 20px;\n}\n.ticket_argument .content-wrapper .content {\n  padding-top: 42px;\n}\n.ticket_argument .content-wrapper .content .text {\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #999;\n  letter-spacing: 0;\n}\n.ticket_argument .content-wrapper .content input {\n  margin: 0 20px 0 30px;\n  width: 300px;\n  height: 40px;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  text-indent: 1em;\n  outline: none;\n  vertical-align: middle;\n}\n.ticket_argument .content-wrapper .content input:hover {\n  border: 1px solid #ffa500;\n}\n.ticket_argument .content-wrapper .content .toolBtn {\n  border-radius: 0;\n  height: 40px;\n  width: 120px;\n  background: #f90;\n  border: none;\n  vertical-align: middle;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #fff;\n}\n.ticket_argument .content-wrapper .content table {\n  display: flex;\n  width: 100%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #666;\n  letter-spacing: 0;\n  flex-wrap: wrap;\n  border: 1px solid #f0f0f0;\n  border-collapse: collapse;\n}\n.ticket_argument .content-wrapper .content table td {\n  border: 1px solid #f0f0f0;\n}\n.ticket_argument .content-wrapper .content table tr {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  line-height: 40px;\n}\n.ticket_argument .content-wrapper .content table tr:nth-child(odd) {\n  background: #f8f8f8;\n}\n.ticket_argument .content-wrapper .content table tr:hover {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  line-height: 40px;\n  background: #eef1f6;\n}\n.ticket_argument .content-wrapper .content table tr:first-child {\n  background: #f4f4f4;\n  box-shadow: inset 0 1px 0 0 #eee;\n}\n.ticket_argument .content-wrapper .content table td {\n  flex: 2;\n  text-align: center;\n}\n.ticket_argument .content-wrapper .content table td:nth-child(1) {\n  flex: 3;\n}\n.ticket_argument .content-wrapper .content table td:nth-child(3) {\n  flex: 3;\n}\n.ticket_argument .content-wrapper .content .el-icon-delete2 {\n  color: #f90;\n}\n.ticket_argument .el-pagination {\n  position: absolute;\n  right: 45px;\n  bottom: 40px;\n}\n.ticket_argument .el-pagination .el-pagination__total {\n  height: 24px;\n}\n.ticket_argument .el-pagination .btn-prev,\n.ticket_argument .el-pagination .el-pagination__jump,\n.ticket_argument .el-pagination .btn-next {\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n}\n.ticket_argument .el-pagination .el-pager li {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.ticket_argument .el-pagination .el-pager li.active {\n  background: #f90;\n  border: 1px solid #f90;\n}\n.ticket_argument .el-pagination .el-pager li:hover,\n.ticket_argument .el-pagination button:hover {\n  color: #f90;\n}\n.ticket_argument .el-pagination .el-pagination__jump .el-pagination__editor {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  margin: 0 3px;\n  text-indent: 0;\n}\n.ticket_argument .el-pagination .el-pagination__editor:focus {\n  outline: none;\n  border-color: #f90;\n}\n.ticket_argument _:-ms-lang(x),\n.ticket_argument td {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"],sourceRoot:""}])},787:function(t,n,e){var i=e(725);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(540)("2b93a31a",i,!0)},873:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ticket_argument"},[e("current",{staticClass:"test",attrs:{yiji:"参数管理",erji:"业务参数",sanji:"公司开票信息维护"}}),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"title"},[e("span",{staticClass:"text"},[t._v("公司开票信息维护")]),e("button",{staticClass:"add",on:{click:t.add}},[t._v("新增")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"search"},[e("span",{staticClass:"text"},[t._v("查询条件")]),t._v(" "),e("input",{attrs:{type:"text"}}),t._v(" "),e("el-button",{staticClass:"toolBtn"},[t._v("查询")])],1),t._v(" "),e("table",[e("tr",t._l(t.table.th,function(n){return e("td",[t._v(t._s(n))])})),t._v(" "),t._l(t.table.td,function(n){return e("tr",[t._l(n,function(n){return e("td",[t._v(t._s(n))])}),e("td",[e("i",{staticClass:"el-icon-delete2"})])],2)})],2),t._v(" "),e("el-pagination",{attrs:{"page-size":10,layout:"total,prev, pager, next, jumper",total:100},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=30.97c232b0539df5902859.js.map