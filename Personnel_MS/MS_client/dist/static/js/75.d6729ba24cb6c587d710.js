webpackJsonp([75],{1107:function(e,a,t){a=e.exports=t(620)(!0),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"edit_leave.vue",sourceRoot:""}])},1227:function(e,a,t){var s=t(1107);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(621)("1d73eb27",s,!0)},1381:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"info_wrapper"},[t("current",{attrs:{yiji:"考勤管理",erji:"请假管理",sanji:"请假修改"}}),e._v(" "),t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"titlebar"},[t("span",{staticClass:"title-text"},[e._v("请假修改")]),e._v(" "),t("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(a){e.save("formdata2")}}},[e._v("保存")])],1),e._v(" "),t("div",{staticClass:"add-wrapper"},[t("el-form",{ref:"formdata2",attrs:{inline:!0,rules:e.rules,model:e.formdata2,"label-width":"110px"}},[t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"公司名称"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.companyName,callback:function(a){e.formdata2.companyName=a},expression:"formdata2.companyName"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"申请部门名称"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.deptName,callback:function(a){e.formdata2.deptName=a},expression:"formdata2.deptName"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"工号"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.userNo,callback:function(a){e.formdata2.userNo=a},expression:"formdata2.userNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custName,callback:function(a){e.formdata2.custName=a},expression:"formdata2.custName"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"岗位"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custPost,callback:function(a){e.formdata2.custPost=a},expression:"formdata2.custPost"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"职级"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custClass,callback:function(a){e.formdata2.custClass=a},expression:"formdata2.custClass"}})],1)],1),e._v(" "),t("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("请假信息")]),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"请假开始时间",prop:"leaveStartTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime"},on:{change:e.changeStartTime},model:{value:e.formdata2.leaveStartTime,callback:function(a){e.formdata2.leaveStartTime=a},expression:"formdata2.leaveStartTime"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"请假结束时间",prop:"leaveEndTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime"},on:{change:e.changeEndTime},model:{value:e.formdata2.leaveEndTime,callback:function(a){e.formdata2.leaveEndTime=a},expression:"formdata2.leaveEndTime"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"请假类型",prop:"leaveType"}},[t("el-select",{attrs:{"value-key":"leaveType"},on:{change:e.changeValue},model:{value:e.formdata2.leaveType,callback:function(a){e.formdata2.leaveType=a},expression:"formdata2.leaveType"}},e._l(e.leaveTypeList,function(e){return t("el-option",{key:e.leaveNo,attrs:{label:e.label,value:e.leaveNo}})}))],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{attrs:{label:"请假累计工时",prop:"timeSheet"}},[t("el-input",{attrs:{placeholder:"请输入请假累计工时"},model:{value:e.formdata2.timeSheet,callback:function(a){e.formdata2.timeSheet=e._n(a)},expression:"formdata2.timeSheet"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{staticClass:"remark",attrs:{label:"请假备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容"},model:{value:e.formdata2.remark,callback:function(a){e.formdata2.remark=a},expression:"formdata2.remark"}})],1)],1),e._v(" "),t("el-col",{attrs:{sm:24,md:12}},[t("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[t("el-input",{model:{value:e.formdata2.attachm,callback:function(a){e.formdata2.attachm=a},expression:"formdata2.attachm"}}),e._v(" "),t("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{name:"file",data:e.formdata,"on-change":e.changeUpload,"on-success":e.successUpload,action:"/iem_hrm/leave/modifyLeaveInfo","show-file-list":!1,"auto-upload":!1,headers:e.token}},[t("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}},660:function(e,a,t){function s(e){t(1227)}var i=t(236)(t(929),t(1381),s,null,null);e.exports=i.exports},733:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab&&this.pactNo?this.$router.push({name:e,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&e.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"工资查询"===this.erji&&e.push("/historicalSalary_query"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},734:function(e,a,t){a=e.exports=t(620)(!0),a.push([e.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},735:function(e,a,t){var s=t(734);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(621)("becca3a2",s,!0)},736:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},737:function(e,a,t){function s(e){t(735)}var i=t(236)(t(733),t(738),s,"data-v-d69b0f44",null);e.exports=i.exports},738:function(e,a,t){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e(),e._v(" "),e._e()],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:t(736),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},929:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(737),i=function(e){return e&&e.__esModule?e:{default:e}}(s);a.default={data:function(){var e=this,a=function(a,t,s){""==t?s(new Error("请假开始时间不能为空")):e.formdata2.leaveEndTime&&t>=e.formdata2.leaveEndTime?s(new Error("请输入正确的开始时间")):s()},t=function(a,t,s){""==t?s(new Error("请假结束时间不能为空")):e.formdata2.leaveStartTime&&t<=e.formdata2.leaveStartTime?s(new Error("请输入正确的结束时间")):s()};return{token:{Authorization:"Bearer "+localStorage.getItem("access_token")},fileFlag:"",formdata1:{},formdata2:{orgId:"01",deprtId:"",userNo:"",custName:"",custPost:"",custClass:"",leaveStartTime:"",leaveEndTime:"",leaveType:"",leaveStartCity:"",leaveArrivalCity:"",timeSheet:"",leaveSTD:"",remark:"",attachm:"",updateBy:"",updateTime:""},leaveTypeList:[{label:"有薪休假",leaveNo:"01"},{label:"事假",leaveNo:"02"},{label:"病假",leaveNo:"03"},{label:"因公外出",leaveNo:"04"},{label:"出差",leaveNo:"05"},{label:"婚假",leaveNo:"06"},{label:"生育产假",leaveNo:"07"},{label:"哺乳假",leaveNo:"08"},{label:"护理假",leaveNo:"09"},{label:"流产假",leaveNo:"10"},{label:"产前检查",leaveNo:"11"},{label:"丧假",leaveNo:"12"},{label:"忘打卡",leaveNo:"13"},{label:"忘带卡",leaveNo:"14"},{label:"特殊",leaveNo:"15"},{label:"调休假",leaveNo:"16"}],rules:{leaveStartTime:[{required:!0,validator:a,trigger:"change"}],leaveEndTime:[{required:!0,validator:t,trigger:"change"}],leaveType:[{required:!0,message:"请假类型不能为空",trigger:"blur"}],timeSheet:[{required:!0,type:"number",message:"请假累计工时不能为空",trigger:"blur"}],remark:[{min:0,max:512,message:"长度在 0 到 512 个字符之间",trigger:"blur"}]}}},components:{current:i.default},computed:{formdata:function(){var e=this;return{applyNo:this.formdata2.applyNo,userNo:e.formdata1.userNo,leaveStartTime:e.formdata2.leaveStartTime,leaveEndTime:e.formdata2.leaveEndTime,leaveType:e.formdata2.leaveType,timeSheet:e.formdata2.timeSheet,remark:e.formdata2.remark,attachm:e.formdata2.attachm}}},created:function(){var e=sessionStorage.getItem("applyNo"),a=(this.$route.params.userNo,{applyNo:e});this.leaveInfo(a),this.querysysParamMgmt()},methods:{changeStartTime:function(e){this.formdata2.leaveStartTime=e},changeEndTime:function(e){this.formdata2.leaveEndTime=e},changeValue:function(e){console.log("value",e)},changeUpload:function(e,a){this.fileFlag=e,this.formdata2.attachm=e.name},successUpload:function(e,a,t){"S00000"===e.code&&(this.$message({message:"操作成功",type:"success"}),this.$router.push("/leave_management"))},save:function(e){var a=this,t=this;this.$refs[e].validate(function(e){if(!e)return!1;if(t.$refs.upload.submit(),!t.fileFlag){var s={applyNo:a.formdata2.applyNo,userNo:t.formdata1.userNo,leaveStartTime:t.formdata2.leaveStartTime,leaveEndTime:t.formdata2.leaveEndTime,leaveType:t.formdata2.leaveType,timeSheet:t.formdata2.timeSheet,remark:t.formdata2.remark,attachm:t.formdata2.attachm};t.modifyTravelInfo(s)}})},leaveInfo:function(e){var a=this;a.$axios.get("iem_hrm/leave/queryLeaveInfos",{params:e}).then(function(e){console.log("leaveInfo",e),"S00000"===e.data.code&&(a.formdata2=e.data.data)}).catch(function(e){console.log("error")})},querysysParamMgmt:function(){this.$axios.get("iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=11").then(function(e){console.log("sysParamMgmt",e),e.data.code}).catch(function(e){console.log("error")})},modifyTravelInfo:function(e){var a=this;a.$axios.post("iem_hrm/leave/modifyLeaveInfo",e).then(function(e){console.log("modifyTravelInfo",e),"S00000"===e.data.code&&(a.$message({message:"操作成功",type:"success"}),a.$router.push("/leave_management"))}).catch(function(e){console.log("error")})},calTimeSheet:function(e){var a=this;a.$axios.get("iem_hrm/leave/calculateLeaveTime",{params:e}).then(function(e){console.log("timeSheet",e),a.formdata2.timeSheet=e.data}).catch(function(e){console.log("error")})}}}}});
//# sourceMappingURL=75.d6729ba24cb6c587d710.js.map