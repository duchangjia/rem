webpackJsonp([74],{1017:function(e,t,a){t=e.exports=a(620)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"leave_info.vue",sourceRoot:""}])},1137:function(e,t,a){var s=a(1017);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(621)("ba93de8a",s,!0)},1292:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info_wrapper"},[a("current",{attrs:{yiji:"考勤管理",erji:"请假管理",sanji:"请假详情"}}),e._v(" "),a("div",{staticClass:"content-wrapper"},[e._m(0),e._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:e.rules,model:e.formdata2,"label-width":"100px"}},[a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.companyName,callback:function(t){e.formdata2.companyName=t},expression:"formdata2.companyName"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"申请部门名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.deptName,callback:function(t){e.formdata2.deptName=t},expression:"formdata2.deptName"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.userNo,callback:function(t){e.formdata2.userNo=t},expression:"formdata2.userNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custName,callback:function(t){e.formdata2.custName=t},expression:"formdata2.custName"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"岗位"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custPost,callback:function(t){e.formdata2.custPost=t},expression:"formdata2.custPost"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"职级"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.custClass,callback:function(t){e.formdata2.custClass=t},expression:"formdata2.custClass"}})],1)],1),e._v(" "),a("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("请假信息")]),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"请假开始时间",prop:"leaveStartTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:!0},on:{change:e.changeStartTime},model:{value:e.formdata2.leaveStartTime,callback:function(t){e.formdata2.leaveStartTime=t},expression:"formdata2.leaveStartTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"请假结束时间",prop:"leaveEndTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:!0},on:{change:e.changeEndTime},model:{value:e.formdata2.leaveEndTime,callback:function(t){e.formdata2.leaveEndTime=t},expression:"formdata2.leaveEndTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"请假类型",prop:"leaveType"}},[a("el-select",{attrs:{"value-key":"leaveType",disabled:!0},on:{change:e.changeValue},model:{value:e.formdata2.leaveType,callback:function(t){e.formdata2.leaveType=t},expression:"formdata2.leaveType"}},e._l(e.leaveTypeList,function(e){return a("el-option",{key:e.leaveNo,attrs:{label:e.label,value:e.leaveNo}})}))],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"请假累计工时"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.timeSheet,callback:function(t){e.formdata2.timeSheet=t},expression:"formdata2.timeSheet"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"remark",attrs:{label:"请假备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容",disabled:!0},model:{value:e.formdata2.remark,callback:function(t){e.formdata2.remark=t},expression:"formdata2.remark"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"最新更新人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.updatedBy,callback:function(t){e.formdata2.updatedBy=t},expression:"formdata2.updatedBy"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"最新更新时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata2.updatedDate,callback:function(t){e.formdata2.updatedDate=t},expression:"formdata2.updatedDate"}})],1)],1),e._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[a("el-button",{staticClass:"downloadBtn",on:{click:e.handleDownload}},[e._v("下载")])],1)],1)],1)],1)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titlebar"},[a("span",{staticClass:"title-text"},[e._v("请假详情")])])}]}},661:function(e,t,a){function s(e){a(1137)}var i=a(236)(a(930),a(1292),s,null,null);e.exports=i.exports},733:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab&&this.pactNo?this.$router.push({name:e,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&e.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"工资查询"===this.erji&&e.push("/historicalSalary_query"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},734:function(e,t,a){t=e.exports=a(620)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},735:function(e,t,a){var s=a(734);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(621)("becca3a2",s,!0)},736:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},737:function(e,t,a){function s(e){a(735)}var i=a(236)(a(733),a(738),s,"data-v-d69b0f44",null);e.exports=i.exports},738:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e(),e._v(" "),e._e()],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(736),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},930:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(737),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{formdata:{},formdata2:{userNo:"",custName:"",custPost:"",custClass:"",orgId:"01",deprtId:"",leaveStartTime:"",leaveEndTime:"",leaveType:"",leaveStartCity:"",leaveArrivalCity:"",timeSheet:"",leaveSTD:"",remark:"",attachm:"",updatedBy:"",updatedDate:""},leaveTypeList:[{label:"有薪休假",leaveNo:"01"},{label:"事假",leaveNo:"02"},{label:"病假",leaveNo:"03"},{label:"因公外出",leaveNo:"04"},{label:"出差",leaveNo:"05"},{label:"婚假",leaveNo:"06"},{label:"生育产假",leaveNo:"07"},{label:"哺乳假",leaveNo:"08"},{label:"护理假",leaveNo:"09"},{label:"流产假",leaveNo:"10"},{label:"产前检查",leaveNo:"11"},{label:"丧假",leaveNo:"12"},{label:"忘打卡",leaveNo:"13"},{label:"忘带卡",leaveNo:"14"},{label:"特殊",leaveNo:"15"},{label:"调休假",leaveNo:"16"}],rules:{leaveType:[{required:!0,message:"出差类型不能为空",trigger:"blur"}]}}},components:{current:i.default},created:function(){var e=sessionStorage.getItem("applyNo"),t=(this.$route.params.userNo,{applyNo:e});this.queryLeaveInfo(t)},methods:{changeStartTime:function(e){this.formdata2.leaveStartTime=e},changeEndTime:function(e){this.formdata2.leaveEndTime=e},changeValue:function(e){console.log("value",e)},handleDownload:function(){var e=this,t={filePath:e.formdata2.attachm,isOnLine:"false"};e.downloadFile(t)},queryLeaveInfo:function(e){var t=this;t.$axios.get("iem_hrm/leave/queryLeaveInfos",{params:e}).then(function(e){console.log("queryLeaveInfo",e),"S00000"===e.data.code&&(t.formdata2=e.data.data)}).catch(function(e){console.log("error")})},downloadFile:function(e){var t=this;this.$axios.get("iem_hrm/leave/downLoadFile?filePath="+e.filePath+"&isOnLine="+e.isOnLine,{responseType:"blob"}).then(function(t){var a=e.filePath.substr(e.filePath.lastIndexOf("/")+1),s=t.data;if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(s,a);else{var i=document.createElement("a");i.download=a,i.style.display="none",i.href=URL.createObjectURL(s),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}).catch(function(e){console.error(e),t.$message({message:"下载附件失败",type:"error"})})}}}}});
//# sourceMappingURL=74.c8b997d8b542e4f6fcbd.js.map