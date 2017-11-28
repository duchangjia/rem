webpackJsonp([70],{1048:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(773),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{labelPosition:"right",activeName:"changePactMsg",userNo:"",pactNo:"",changeId:"",basicPactMsg:{},custInfo:{},editPChangeMsg:{},pactMsgRules:{changeTime:[{required:!0,message:"请选择变更日期",trigger:"change"}],changeType:[{required:!0,message:"请选择变更类别",trigger:"blur"}],changeContent:[{required:!0,message:"请输入变更内容",trigger:"blur"}]}}},components:{current:i.default},created:function(){this.userNo=this.$route.params.userNo,this.pactNo=this.$route.params.pactNo,this.changeId=this.$route.params.changeId,this.getPactDetail(),this.getCustInfo(),this.getPChangeDetail()},computed:{_custClass:function(){return"B10"==this.custInfo.custClass?"B10-初级软件工程师":"B11"==this.custInfo.custClass?"B11-中级软件工程师":"B12"==this.custInfo.custClass?"B12-高级软件工程师":""},_changeType:function(){return"01"==this.editPChangeMsg.changeType?"条款变更":"99"==this.editPChangeMsg.changeType?"其他":""}},methods:{getPactDetail:function(){var t=this,e={pactNo:t.pactNo};t.$axios.get("/iem_hrm/pact/queryPactDetail",{params:e}).then(function(e){t.basicPactMsg=e.data.data}).catch(function(){console.log("error")})},getCustInfo:function(){var t=this,e=t.userNo;t.$axios.get("/iem_hrm/CustInfo/queryCustInfoByUserNo/"+e).then(function(e){console.log("cusInfo",e),t.custInfo=e.data.data}).catch(function(){console.log("error")})},getPChangeDetail:function(){var t=this,e={pactNo:t.pactNo,changeId:t.changeId};t.$axios.get("/iem_hrm/pact/queryPactChangeDetail",{params:e}).then(function(e){console.log("PChangeDtl",e),t.editPChangeMsg=e.data.data}).catch(function(){console.log("error")})},changeTimeChange:function(t){this.editPChangeMsg.changeTime=t},handleFileUpload:function(t,e){console.log(t),this.editPChangeMsg.attachm=t.name},handleSave:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var s={};s.pactNo=e.pactNo,s.changeId=e.changeId,s.changeTime=e.editPChangeMsg.changeTime,s.changeType=e.editPChangeMsg.changeType,s.changeContent=e.editPChangeMsg.changeContent,s.attachm=e.editPChangeMsg.attachm,e.$axios.put("/iem_hrm/pact/updatePactChange",s).then(function(t){console.log(t),"S00000"==t.data.code?(e.$message({type:"success",message:"操作成功!"}),e.$router.push({name:"detail_contract",params:{pactNo:e.pactNo,activeTab:e.activeName}})):e.$message.error("操作失败！")}).catch(function(){e.$message.error("操作失败！")})})}}}},1203:function(t,e,s){e=t.exports=s(643)(!0),e.push([t.i,".edit_pactChange{padding:0 0 20px 20px}","",{version:3,sources:["E:/workSpace/item/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/personnel_contract/edit_pactChange.vue"],names:[],mappings:"AACA,iBACE,qBAAuB,CACxB",file:"edit_pactChange.vue",sourcesContent:["\n.edit_pactChange {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1331:function(t,e,s){var a=s(1203);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(644)("5d2da241",a,!0)},1490:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit_pactChange"},[s("current",{attrs:{yiji:"人事事务",erji:"人事合同",sanji:"合同详情",siji:"合同变更修改",activeTab:t.activeName,pactNo:t.pactNo}}),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"titlebar"},[s("span",{staticClass:"title-text"},[t._v("合同变更修改")]),t._v(" "),s("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(e){t.handleSave("pactMsgRules")}}},[t._v("保存")])],1),t._v(" "),s("div",{staticClass:"add-wrapper"},[s("el-form",{attrs:{inline:!0,model:t.basicPactMsg,"label-position":t.labelPosition,"label-width":"110px"}},[s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"合同编号"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.pactNo,callback:function(e){t.$set(t.basicPactMsg,"pactNo",e)},expression:"basicPactMsg.pactNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"合同名称"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.pactName,callback:function(e){t.$set(t.basicPactMsg,"pactName",e)},expression:"basicPactMsg.pactName"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"合同签约时间"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:t.basicPactMsg.signTime,callback:function(e){t.$set(t.basicPactMsg,"signTime",e)},expression:"basicPactMsg.signTime"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"合同终止时间"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:t.basicPactMsg.pactStopTime,callback:function(e){t.$set(t.basicPactMsg,"pactStopTime",e)},expression:"basicPactMsg.pactStopTime"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"add-wrapper"},[s("el-col",{staticClass:"item-title",attrs:{span:24}},[t._v("员工信息")]),t._v(" "),s("el-form",{attrs:{inline:!0,model:t.custInfo,"label-position":t.labelPosition,"label-width":"110px"}},[s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"工号"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.userNo,callback:function(e){t.$set(t.custInfo,"userNo",e)},expression:"custInfo.userNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.custName,callback:function(e){t.$set(t.custInfo,"custName",e)},expression:"custInfo.custName"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"身份证"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.certNo,callback:function(e){t.$set(t.custInfo,"certNo",e)},expression:"custInfo.certNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"公司"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.organName,callback:function(e){t.$set(t.custInfo,"organName",e)},expression:"custInfo.organName"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"部门"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.derpName,callback:function(e){t.$set(t.custInfo,"derpName",e)},expression:"custInfo.derpName"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"岗位"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.custPost,callback:function(e){t.$set(t.custInfo,"custPost",e)},expression:"custInfo.custPost"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"职务"}},[s("el-input",{attrs:{disabled:!0},model:{value:t.custInfo.custPost,callback:function(e){t.$set(t.custInfo,"custPost",e)},expression:"custInfo.custPost"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"职级"}},[s("el-input",{attrs:{disabled:!0},model:{value:t._custClass,callback:function(e){t._custClass=e},expression:"_custClass"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"add-wrapper"},[s("el-col",{staticClass:"item-title",attrs:{span:24}},[t._v("合同变更信息")]),t._v(" "),s("el-form",{ref:"pactMsgRules",staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:t.editPChangeMsg,rules:t.pactMsgRules,"label-position":t.labelPosition,"label-width":"110px"}},[s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"变更时间",prop:"changeTime"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:t.changeTimeChange},model:{value:t.editPChangeMsg.changeTime,callback:function(e){t.$set(t.editPChangeMsg,"changeTime",e)},expression:"editPChangeMsg.changeTime"}})],1)],1),t._v(" "),s("el-col",{attrs:{sm:24,md:12}},[s("el-form-item",{attrs:{label:"变更类别",prop:"changeType"}},[s("el-input",{model:{value:t._changeType,callback:function(e){t._changeType=e},expression:"_changeType"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"变更内容",prop:"changeContent"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.editPChangeMsg.changeContent,callback:function(e){t.$set(t.editPChangeMsg,"changeContent",e)},expression:"editPChangeMsg.changeContent"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"附件"}},[s("el-input",{model:{value:t.editPChangeMsg.attachm,callback:function(e){t.$set(t.editPChangeMsg,"attachm",e)},expression:"editPChangeMsg.attachm"}}),t._v(" "),s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":t.handleFileUpload,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[s("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}},734:function(t,e,s){function a(t){s(1331)}var i=s(245)(s(1048),s(1490),a,null,null);t.exports=i.exports},769:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},770:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab&&this.pactNo?this.$router.push({name:t,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.userNo?this.$router.push({name:t,params:{userNo:this.userNo}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/stuffSelfHelp_manage"),"历史薪酬查询"===this.yiji&&t.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"工资查询"===this.erji&&t.push("/historicalSalary_query"),"工资流程管理"===this.erji&&t.push("/wageProcess_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"工资流程新增"===this.sanji&&t.push("/add_wage"),"工资流程修改"===this.sanji&&t.push("/edit_wage"),"录入工资"===this.sanji&&t.push("/entry_wage"),"社保数据查询"===this.sanji&&t.push("/socialSecurity_query"),"工资流程详情"===this.sanji&&t.push("/wage_info"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"保险详情"===this.siji&&t.push("/edit_security"),"社保数据导入"===this.siji&&t.push("/import_socialSecurity"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""},userNo:{type:String,default:""}}}},771:function(t,e,s){e=t.exports=s(643)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/workSpace/item/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},772:function(t,e,s){var a=s(771);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(644)("488e4eea",a,!0)},773:function(t,e,s){function a(t){s(772)}var i=s(245)(s(770),s(774),a,"data-v-d69b0f44",null);t.exports=i.exports},774:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(769),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=70.4db2ce029b51096229fc.js.map