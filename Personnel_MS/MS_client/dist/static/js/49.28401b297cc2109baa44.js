webpackJsonp([49],{1045:function(t,e,a){var s=a(931);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(547)("4fe7b86a",s,!0)},1182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit_contract"},[a("current",{attrs:{yiji:"人事事务",erji:"人事合同",sanji:"合同修改"}}),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"titlebar"},[a("span",{staticClass:"title-text"},[t._v("合同修改")]),t._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(e){t.handleSave("editPactMsgRules")}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-form",{ref:"editPactMsgRules",attrs:{inline:!0,model:t.editPactMsg,rules:t.rules,"label-position":t.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"合同编号",prop:"pactNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.editPactMsg.pactNo,callback:function(e){t.editPactMsg.pactNo=e},expression:"editPactMsg.pactNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"纸质合同编号",prop:"paperPactNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.editPactMsg.paperPactNo,callback:function(e){t.editPactMsg.paperPactNo=e},expression:"editPactMsg.paperPactNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同名称",prop:"pactName"}},[a("el-input",{model:{value:t.editPactMsg.pactName,callback:function(e){t.editPactMsg.pactName=e},expression:"editPactMsg.pactName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称",prop:"organNo"}},[a("el-select",{model:{value:t.editPactMsg.organNo,callback:function(e){t.editPactMsg.organNo=e},expression:"editPactMsg.organNo"}},[a("el-option",{attrs:{label:"总公司",value:"0001"}}),t._v(" "),a("el-option",{attrs:{label:"深圳分公司",value:"0002"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门名称",prop:"derpNo"}},[a("el-select",{model:{value:t.editPactMsg.derpNo,callback:function(e){t.editPactMsg.derpNo=e},expression:"editPactMsg.derpNo"}},[a("el-option",{attrs:{label:"财务部",value:"0001"}}),t._v(" "),a("el-option",{attrs:{label:"技术部",value:"0002"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号",prop:"userNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.editPactMsg.userNo,callback:function(e){t.editPactMsg.userNo=e},expression:"editPactMsg.userNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"员工姓名",prop:"custName"}},[a("el-input",{model:{value:t.editPactMsg.custName,callback:function(e){t.editPactMsg.custName=e},expression:"editPactMsg.custName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-select",{model:{value:t.editPactMsg.sex,callback:function(e){t.editPactMsg.sex=e},expression:"editPactMsg.sex"}},[a("el-option",{attrs:{label:"男",value:"01"}}),t._v(" "),a("el-option",{attrs:{label:"女",value:"02"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证",prop:"cert"}},[a("el-input",{model:{value:t.editPactMsg.cert,callback:function(e){t.editPactMsg.cert=e},expression:"editPactMsg.cert"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同类型",prop:"pactType"}},[a("el-select",{model:{value:t.editPactMsg.pactType,callback:function(e){t.editPactMsg.pactType=e},expression:"editPactMsg.pactType"}},[a("el-option",{attrs:{label:"劳动合同",value:"01"}}),t._v(" "),a("el-option",{attrs:{label:"保密协议",value:"02"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"签订日期",prop:"signTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.pactSignOption},on:{change:t.signTimeChange},model:{value:t.editPactMsg.signTime,callback:function(e){t.editPactMsg.signTime=e},expression:"editPactMsg.signTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同开始日期",prop:"pactStartTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.pactStartOption},on:{change:t.pactStartTimeChange},model:{value:t.editPactMsg.pactStartTime,callback:function(e){t.editPactMsg.pactStartTime=e},expression:"editPactMsg.pactStartTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同结束日期",prop:"pactEndTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.pactEndOption},on:{change:t.pactEndTimeChange},model:{value:t.editPactMsg.pactEndTime,callback:function(e){t.editPactMsg.pactEndTime=e},expression:"editPactMsg.pactEndTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同状态",prop:"pactStatus"}},[a("el-select",{model:{value:t.editPactMsg.pactStatus,callback:function(e){t.editPactMsg.pactStatus=e},expression:"editPactMsg.pactStatus"}},[a("el-option",{attrs:{label:"已生效",value:"01"}}),t._v(" "),a("el-option",{attrs:{label:"未生效",value:"02"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同年限",prop:"pactExpires"}},[a("el-input",{model:{value:t.editPactMsg.pactExpires,callback:function(e){t.editPactMsg.pactExpires=e},expression:"editPactMsg.pactExpires"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"终止日期",prop:"pactStopTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:t.pactStopTimeChange},model:{value:t.editPactMsg.pactStopTime,callback:function(e){t.editPactMsg.pactStopTime=e},expression:"editPactMsg.pactStopTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同附件"}},[a("el-input",{model:{value:t.editPactMsg.attachm,callback:function(e){t.editPactMsg.attachm=e},expression:"editPactMsg.attachm"}}),t._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":t.handleFileUpload,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[a("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"终止原因",prop:"stopReason"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.editPactMsg.stopReason,callback:function(e){t.editPactMsg.stopReason=e},expression:"editPactMsg.stopReason"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.editPactMsg.remark,callback:function(e){t.editPactMsg.remark=e},expression:"editPactMsg.remark"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:" ",prop:"autoupFlag"}},[a("el-checkbox",{model:{value:t.editPactMsg.autoudFlag,callback:function(e){t.editPactMsg.autoudFlag=e},expression:"editPactMsg.autoudFlag"}},[t._v("自动更新员工资料")])],1)],1)],1)],1)])],1)},staticRenderFns:[]}},622:function(t,e,a){function s(t){a(1045)}var i=a(197)(a(885),a(1182),s,null,null);t.exports=i.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,a){var s=a(660);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(547)("becca3a2",s,!0)},662:function(t,e,a){function s(t){a(661)}var i=a(197)(a(659),a(663),s,"data-v-d69b0f44",null);t.exports=i.exports},663:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},885:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(662),i=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){var t=this;return{labelPosition:"right",pactNo:"",editPactMsg:{},pactSignOption:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},pactStartOption:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},pactEndOption:{disabledDate:function(e){return e.getTime()<Date.now()-864e5||e.getTime()<new Date(t.editPactMsg.pactStartTime).getTime()}},rules:{pactType:[{required:!0,message:"合同类型不能为空",trigger:"change"}],signTime:[{type:"date",required:!0,message:"签订日期不能为空",trigger:"change"}],pactStartTime:[{type:"date",required:!0,message:"合同开始日期不能为空",trigger:"change"}],pactEndTime:[{type:"date",required:!0,message:"合同结束日期不能为空",trigger:"change"}],pactStatus:[{required:!0,message:"合同状态不能为空",trigger:"change"}]}}},components:{current:i.default},created:function(){this.pactNo=this.$route.params.pactNo,this.getPactDtl()},methods:{getPactDtl:function(){var t=this,e={pactNo:this.pactNo};t.$axios.get("/iem_hrm/pact/queryPactDetail",{params:e}).then(function(e){console.log(e),t.editPactMsg=e.data.data}).catch(function(){console.log("error")})},handleFileUpload:function(t,e){console.log(t),this.editPactMsg.attachm=t.name},signTimeChange:function(t){this.editPactMsg.signTime=t},pactStartTimeChange:function(t){this.editPactMsg.pactStartTime=t},pactEndTimeChange:function(t){this.editPactMsg.pactEndTime=t},pactStopTimeChange:function(t){this.editPactMsg.pactStopTime=t},handleSave:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=e.editPactMsg;console.log(a),e.$axios.post("/iem_hrm/pact/updatePact",a).then(function(t){console.log(t),"S00000"==t.data.code?(e.$message({type:"success",message:"合同修改成功!"}),e.$router.push("/personnel_contract")):e.$message.error("合同修改失败！")}).catch(function(){e.$message.error("合同修改失败！")})})}}}},931:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".edit_contract{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/personnel_contract/edit_contract.vue"],names:[],mappings:"AACA,eACE,qBAAuB,CACxB",file:"edit_contract.vue",sourcesContent:["\n.edit_contract {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=49.28401b297cc2109baa44.js.map