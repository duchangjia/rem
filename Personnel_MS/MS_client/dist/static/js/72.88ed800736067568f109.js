webpackJsonp([72],{1087:function(e,t,a){var s=a(973);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(547)("6ecfce3c",s,!0)},1224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"leaveC_wrap"},[a("current",{attrs:{yiji:"考勤管理",erji:"请假管理",sanji:"请假新增"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"title-text"},[e._v("请假新增")]),e._v(" "),a("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(t){e.save("formdata2")}}},[e._v("保存")])],1),e._v(" "),a("div",{staticClass:"content-inner"},[a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:e.rules,model:e.formdata2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("el-select",{attrs:{"value-key":"compOrgNo"},on:{change:e.changeValue},model:{value:e.formdata2.organNo,callback:function(t){e.formdata2.organNo=t},expression:"formdata2.organNo"}},e._l(e.compList,function(e){return a("el-option",{key:e.compOrgNo,attrs:{label:e.compName,value:e.compOrgNo}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"申请部门名称"}},[a("el-select",{attrs:{"value-key":"departOrgNo"},on:{change:e.changeValue},model:{value:e.formdata2.deptNo,callback:function(t){e.formdata2.deptNo=t},expression:"formdata2.deptNo"}},e._l(e.departList,function(e){return a("el-option",{key:e.departOrgNo,attrs:{label:e.departName,value:e.departOrgNo}})}))],1),e._v(" "),a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:e.rules,model:e.formdata2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{model:{value:e.formdata1.userNo,callback:function(t){e.formdata1.userNo=t},expression:"formdata1.userNo"}}),e._v(" "),a("el-button",{staticClass:"queryUserBtn",attrs:{type:"primary"},on:{click:e.queryUserInfo}},[e._v("查询")])],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.formdata1.custName,callback:function(t){e.formdata1.custName=t},expression:"formdata1.custName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"岗位"}},[a("el-input",{model:{value:e.formdata1.custPost,callback:function(t){e.formdata1.custPost=t},expression:"formdata1.custPost"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职级"}},[a("el-input",{model:{value:e.formdata1.custClass,callback:function(t){e.formdata1.custClass=t},expression:"formdata1.custClass"}})],1)],1),e._v(" "),a("div",{staticClass:"info-title"},[e._v("请假信息")]),e._v(" "),a("el-form-item",{attrs:{label:"请假开始时间",prop:"leaveStartTime"}},[a("el-date-picker",{attrs:{type:"datetime"},on:{change:e.changeStartTime},model:{value:e.formdata2.leaveStartTime,callback:function(t){e.formdata2.leaveStartTime=t},expression:"formdata2.leaveStartTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"请假结束时间",prop:"leaveEndTime"}},[a("el-date-picker",{attrs:{type:"datetime"},on:{change:e.changeEndTime},model:{value:e.formdata2.leaveEndTime,callback:function(t){e.formdata2.leaveEndTime=t},expression:"formdata2.leaveEndTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"请假类型",prop:"leaveType"}},[a("el-select",{attrs:{"value-key":"leaveType"},on:{change:e.changeValue},model:{value:e.formdata2.leaveType,callback:function(t){e.formdata2.leaveType=t},expression:"formdata2.leaveType"}},e._l(e.leaveTypeList,function(e){return a("el-option",{key:e.leaveNo,attrs:{label:e.label,value:e.leaveNo}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"请假累计工时"}},[a("el-input",{model:{value:e.formdata2.timeSheet,callback:function(t){e.formdata2.timeSheet=t},expression:"formdata2.timeSheet"}})],1),e._v(" "),a("el-form-item",{staticClass:"remark",attrs:{label:"请假备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容"},model:{value:e.formdata2.remark,callback:function(t){e.formdata2.remark=t},expression:"formdata2.remark"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[a("el-input",{model:{value:e.formdata2.attachm,callback:function(t){e.formdata2.attachm=t},expression:"formdata2.attachm"}}),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":e.changefile,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[a("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)],1)],1)],1)])],1)},staticRenderFns:[]}},585:function(e,t,a){function s(e){a(1087)}var i=a(197)(a(846),a(1224),s,"data-v-4fe7529d",null);e.exports=i.exports},658:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(e,t,a){t=e.exports=a(546)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(e,t,a){var s=a(660);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(547)("becca3a2",s,!0)},662:function(e,t,a){function s(e){a(661)}var i=a(197)(a(659),a(663),s,"data-v-d69b0f44",null);e.exports=i.exports},663:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(658),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},846:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(662),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{formdata1:{userNo:"",custName:"",custPost:"",custClass:""},formdata2:{organNo:"01",deptNo:"",leaveStartTime:"",leaveEndTime:"",leaveType:"",timeSheet:"",remark:"",attachm:""},departList:[{departName:"上海魔方分公司",departOrgNo:"01"},{departName:"魔方分公司深圳分公司",departOrgNo:"p1"},{departName:"深圳前海橙色魔方信息技术有限公司",departOrgNo:"0"}],compList:[{compName:"上海魔方分公司",compOrgNo:"01"},{compName:"魔方分公司深圳分公司",compOrgNo:"p1"},{compName:"深圳前海橙色魔方信息技术有限公司",compOrgNo:"0"}],leaveTypeList:[{label:"有薪休假",leaveNo:"01"},{label:"事假",leaveNo:"02"},{label:"病假",leaveNo:"03"},{label:"因公外出",leaveNo:"04"},{label:"出差",leaveNo:"05"},{label:"婚假",leaveNo:"06"},{label:"生育产假",leaveNo:"07"},{label:"哺乳假",leaveNo:"08"},{label:"护理假",leaveNo:"09"},{label:"流产假",leaveNo:"10"},{label:"产前检查",leaveNo:"11"},{label:"丧假",leaveNo:"12"},{label:"忘打卡",leaveNo:"13"},{label:"忘带卡",leaveNo:"14"},{label:"特殊",leaveNo:"15"},{label:"调休假",leaveNo:"16"}],rules:{leaveType:[{required:!0,message:"请假类型不能为空",trigger:"blur"}]}}},components:{current:i.default},created:function(){},methods:{changefile:function(e,t){console.log(e),this.formdata2.attachm=e.name},changeStartTime:function(e){this.formdata2.leaveStartTime=e},changeEndTime:function(e){this.formdata2.leaveEndTime=e},changeValue:function(e){console.log("value",e)},queryUserInfo:function(){var e=this.formdata1.userNo,t={userNo:e};this.getUseInfoByUserNo(t)},save:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("failvalid"),!1;console.log("valid");var s={userNo:a.formdata1.userNo,leaveStartTime:a.formdata2.leaveStartTime,leaveEndTime:a.formdata2.leaveEndTime,leaveType:a.formdata2.leaveType,timeSheet:a.formdata2.timeSheet,authFlow:a.formdata2.authFlow,authStatus:a.formdata2.authStatus,password:a.formdata2.password,authView:a.formdata2.authView,remark:a.formdata2.remark};a.addLeaveInfo(s)})},getUseInfoByUserNo:function(e){this.$axios.get("iem_hrm/leave/getUseInfoByUserNo/",{params:e}).then(function(e){console.log("getUseInfoByUserNo",e)}).catch(function(e){console.log("error")})},addLeaveInfo:function(e){this.$axios.post("iem_hrm/leave/addLeaveInfo",e).then(function(e){console.log("addLeaveInfo",e)}).catch(function(e){console.log("error")})}}}},973:function(e,t,a){t=e.exports=a(546)(!0),t.push([e.i,".queryUserBtn[data-v-4fe7529d]{position:absolute;right:0;top:0;height:40px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/attendance_Mgmt/leave_management/add_leave.vue"],names:[],mappings:"AACA,+BACI,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,WAAa,CAChB",file:"add_leave.vue",sourcesContent:["\n.queryUserBtn[data-v-4fe7529d] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 40px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=72.88ed800736067568f109.js.map