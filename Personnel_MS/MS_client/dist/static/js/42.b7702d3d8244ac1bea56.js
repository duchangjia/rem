webpackJsonp([42],{544:function(t,n,e){function i(t){e(782)}var a=e(194)(e(624),e(867),i,null,null);t.exports=a.exports},599:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},600:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},601:function(t,n,e){n=t.exports=e(539)(!0),n.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},602:function(t,n,e){var i=e(601);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(540)("becca3a2",i,!0)},603:function(t,n,e){function i(t){e(602)}var a=e(194)(e(600),e(604),i,"data-v-d69b0f44",null);t.exports=a.exports},604:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:e(599),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},624:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(603),a=function(t){return t&&t.__esModule?t:{default:t}}(i);n.default={data:function(){return{value:""}},methods:{save:function(){}},components:{current:a.default}}},721:function(t,n,e){n=t.exports=e(539)(!0),n.push([t.i,".add_agency{padding:0 0 20px 20px;overflow:hidden;position:relative}.add_agency .test{padding-left:10px}.add_agency .content-wrapper{background:#fff;padding-left:20px;padding-right:20px;height:746px}.add_agency .content-wrapper .title{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0;height:80px;line-height:80px;border-bottom:1px solid #f4f4f4;position:relative}.add_agency .content-wrapper .title .text{border-bottom:2px solid #000;display:inline-block;height:80px}.add_agency .content-wrapper .title .save{width:120px;height:40px;background:#f4f4f4;border:none;outline:none;font-family:PingFangSC-Regular;font-size:14px;line-height:40px;text-align:center;position:absolute;right:0;bottom:20px}.add_agency .content-wrapper .content{padding:42px 0 0 8px}.add_agency .content-wrapper .content .item_group{margin-bottom:30px;height:40px;line-height:40px}.add_agency .content-wrapper .content .item_group .text{font-family:PingFangSC-Regular;font-size:14px;color:#999;letter-spacing:0;margin-right:30px;display:inline-block;width:60px;height:40px;line-height:40px;text-align:right}.add_agency .content-wrapper .content .item_group .common{margin-right:120px}.add_agency .content-wrapper .content .item_group .el-input{width:300px;height:40px}.add_agency .content-wrapper .content .item_group .el-input .el-input__inner{height:100%}.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:focus,.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:hover{border-color:#f90}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_agency.vue"],names:[],mappings:"AACA,YACE,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,kBACE,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,YAAc,CACf,AACD,oCACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,0CACE,6BAA8B,AAC9B,qBAAsB,AACtB,WAAa,CACd,AACD,0CACE,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,YAAa,AACb,aAAc,AACd,+BAAgC,AAChC,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,WAAa,CACd,AACD,sCACE,oBAAsB,CACvB,AACD,kDACE,mBAAoB,AACpB,YAAa,AACb,gBAAkB,CACnB,AACD,wDACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACnB,AACD,0DACE,kBAAoB,CACrB,AACD,4DACE,YAAa,AACb,WAAa,CACd,AACD,6EACE,WAAa,CACd,AAID,sKACE,iBAAmB,CACpB",file:"add_agency.vue",sourcesContent:["\n.add_agency {\n  padding: 0 0 20px 20px;\n  overflow: hidden;\n  position: relative;\n}\n.add_agency .test {\n  padding-left: 10px;\n}\n.add_agency .content-wrapper {\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 746px;\n}\n.add_agency .content-wrapper .title {\n  font-family: PingFangSC-Regular;\n  font-size: 16px;\n  color: #333;\n  letter-spacing: 0;\n  height: 80px;\n  line-height: 80px;\n  border-bottom: 1px solid #f4f4f4;\n  position: relative;\n}\n.add_agency .content-wrapper .title .text {\n  border-bottom: 2px solid #000;\n  display: inline-block;\n  height: 80px;\n}\n.add_agency .content-wrapper .title .save {\n  width: 120px;\n  height: 40px;\n  background: #f4f4f4;\n  border: none;\n  outline: none;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  bottom: 20px;\n}\n.add_agency .content-wrapper .content {\n  padding: 42px 0 0 8px;\n}\n.add_agency .content-wrapper .content .item_group {\n  margin-bottom: 30px;\n  height: 40px;\n  line-height: 40px;\n}\n.add_agency .content-wrapper .content .item_group .text {\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #999;\n  letter-spacing: 0;\n  margin-right: 30px;\n  display: inline-block;\n  width: 60px;\n  height: 40px;\n  line-height: 40px;\n  text-align: right;\n}\n.add_agency .content-wrapper .content .item_group .common {\n  margin-right: 120px;\n}\n.add_agency .content-wrapper .content .item_group .el-input {\n  width: 300px;\n  height: 40px;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner {\n  height: 100%;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:focus {\n  border-color: #f90;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:hover {\n  border-color: #f90;\n}"],sourceRoot:""}])},782:function(t,n,e){var i=e(721);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(540)("440f26ca",i,!0)},867:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"add_agency"},[e("current",{staticClass:"test",attrs:{yiji:"参数管理",erji:"业务参数",sanji:"机构CCC管理",siji:"CCC新增"}}),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"title"},[e("span",{staticClass:"text"},[t._v("CCC新增")]),e("button",{staticClass:"save",on:{click:t.save}},[t._v("保存")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"item_group"},[e("span",{staticClass:"text"},[t._v("机构名称")]),e("el-input",{staticClass:"common"}),t._v(" "),e("span",{staticClass:"text"},[t._v("CCC类型")]),e("el-select",{attrs:{placeholder:"请选择CCC类型"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}})],1),t._v(" "),e("div",{staticClass:"item_group"},[e("span",{staticClass:"text"},[t._v("CCC值")]),e("el-input",{staticClass:"common"}),t._v(" "),e("span",{staticClass:"text"},[t._v("备注")]),e("el-input")],1)])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=42.b7702d3d8244ac1bea56.js.map