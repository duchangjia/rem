webpackJsonp([28],{568:function(t,a,e){function s(t){e(762)}var i=e(195)(e(650),e(848),s,null,null);t.exports=i.exports},601:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},602:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},603:function(t,a,e){a=t.exports=e(540)(!0),a.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},604:function(t,a,e){var s=e(603);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(541)("488e4eea",s,!0)},605:function(t,a,e){function s(t){e(604)}var i=e(195)(e(602),e(606),s,"data-v-d69b0f44",null);t.exports=i.exports},606:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:e(601),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},650:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(605),i=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={data:function(){return{labelPosition:"right",addPactMsg:{paperPactNo:"",pactName:"",organName:"",derpName:"",userNo:"",custName:"",sex:"",cert:"",pactType:"",signTime:"",pactStartTime:"",pactEndTime:"",pactStatus:"",pactExpires:"",pactStopTime:"",attachm:"",stopReason:"",remark:""},rules:{userNo:[{required:!0,message:"请输入工号",trigger:"blur"}],pactType:[{required:!0,message:"请选择合同类型",trigger:"blur"}],signTime:[{required:!0,message:"请选择签订日期",trigger:"blur"}],pactStartTime:[{required:!0,message:"请选择合同开始日期",trigger:"blur"}],pactEndTime:[{required:!0,message:"请选择合同结束日期",trigger:"blur"}],pactStatus:[{required:!0,message:"请选择合同状态",trigger:"blur"}]}}},components:{current:i.default},methods:{handleSave:function(){var t=this,a={};a.paperPactNo=this.addPactMsg.paperPactNo,a.pactName=this.addPactMsg.pactName,a.organName=this.addPactMsg.organName,console.log(a),this.$axios.post("/iem_hrm/addPact",a).then(function(a){console.log(a),"S00000"==a.data.code?t.$router.push("/personnel_contract"):t.$message.error("合同新增失败！")}).catch(function(){t.$message.error("合同新增失败！")})}}}},700:function(t,a,e){a=t.exports=e(540)(!0),a.push([t.i,".add_contract{padding:0 0 20px 20px}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/add_contract.vue"],names:[],mappings:"AACA,cACE,qBAAuB,CACxB",file:"add_contract.vue",sourcesContent:["\n.add_contract {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},762:function(t,a,e){var s=e(700);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(541)("84933616",s,!0)},848:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add_contract"},[e("current",{attrs:{yiji:"人事事务",erji:"人事合同",sanji:"合同新增"}}),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"titlebar"},[e("span",{staticClass:"title-text"},[t._v("合同新增")]),t._v(" "),e("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("保存")])],1),t._v(" "),e("div",{staticClass:"add-wrapper"},[e("el-form",{ref:"addPactMsg",attrs:{inline:!0,model:t.addPactMsg,rules:t.rules,"label-position":t.labelPosition,"label-width":"110px"}},[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"纸质合同编号",prop:"paperPactNo"}},[e("el-input",{model:{value:t.addPactMsg.paperPactNo,callback:function(a){t.addPactMsg.paperPactNo=a},expression:"addPactMsg.paperPactNo"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同名称",prop:"pactName"}},[e("el-input",{model:{value:t.addPactMsg.pactName,callback:function(a){t.addPactMsg.pactName=a},expression:"addPactMsg.pactName"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"公司名称",prop:"organName"}},[e("el-select",{model:{value:t.addPactMsg.organName,callback:function(a){t.addPactMsg.organName=a},expression:"addPactMsg.organName"}},[e("el-option",{attrs:{label:"总公司",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"深圳分公司",value:"0"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"部门名称",prop:"derpName"}},[e("el-select",{model:{value:t.addPactMsg.derpName,callback:function(a){t.addPactMsg.derpName=a},expression:"addPactMsg.derpName"}},[e("el-option",{attrs:{label:"财务部",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"技术部",value:"0"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"工号",prop:"userNo"}},[e("el-input",{model:{value:t.addPactMsg.userNo,callback:function(a){t.addPactMsg.userNo=a},expression:"addPactMsg.userNo"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"员工姓名",prop:"custName"}},[e("el-input",{model:{value:t.addPactMsg.custName,callback:function(a){t.addPactMsg.custName=a},expression:"addPactMsg.custName"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"性别",prop:"sex"}},[e("el-select",{model:{value:t.addPactMsg.sex,callback:function(a){t.addPactMsg.sex=a},expression:"addPactMsg.sex"}},[e("el-option",{attrs:{label:"男",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"女",value:"0"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"身份证",prop:"cert"}},[e("el-input",{model:{value:t.addPactMsg.cert,callback:function(a){t.addPactMsg.cert=a},expression:"addPactMsg.cert"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同类型",prop:"pactType"}},[e("el-select",{model:{value:t.addPactMsg.pactType,callback:function(a){t.addPactMsg.pactType=a},expression:"addPactMsg.pactType"}},[e("el-option",{attrs:{label:"劳动合同",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"保密协议",value:"0"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"签订日期",prop:"signTime"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.addPactMsg.signTime,callback:function(a){t.addPactMsg.signTime=a},expression:"addPactMsg.signTime"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同开始日期",prop:"pactStartTime"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.addPactMsg.pactStartTime,callback:function(a){t.addPactMsg.pactStartTime=a},expression:"addPactMsg.pactStartTime"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同结束日期",prop:"pactEndTime"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.addPactMsg.pactEndTime,callback:function(a){t.addPactMsg.pactEndTime=a},expression:"addPactMsg.pactEndTime"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同状态",prop:"pactStatus"}},[e("el-select",{model:{value:t.addPactMsg.pactStatus,callback:function(a){t.addPactMsg.pactStatus=a},expression:"addPactMsg.pactStatus"}},[e("el-option",{attrs:{label:"已生效",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"未生效",value:"0"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同年限",prop:"pactExpires"}},[e("el-input",{model:{value:t.addPactMsg.pactExpires,callback:function(a){t.addPactMsg.pactExpires=a},expression:"addPactMsg.pactExpires"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"终止日期",prop:"pactStopTime"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.addPactMsg.pactStopTime,callback:function(a){t.addPactMsg.pactStopTime=a},expression:"addPactMsg.pactStopTime"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"合同附件",prop:"attachm"}},[e("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[e("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"终止原因",prop:"stopReason"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.addPactMsg.stopReason,callback:function(a){t.addPactMsg.stopReason=a},expression:"addPactMsg.stopReason"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.addPactMsg.remark,callback:function(a){t.addPactMsg.remark=a},expression:"addPactMsg.remark"}})],1)],1)],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.786a402ae204fe114bfe.js.map