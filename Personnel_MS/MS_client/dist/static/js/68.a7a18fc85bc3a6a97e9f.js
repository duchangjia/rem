webpackJsonp([68],{1066:function(t,e,a){var i=a(951);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(547)("d07d598e",i,!0)},1204:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workotC_wrap"},[a("current",{attrs:{yiji:"考勤管理",erji:"加班管理",sanji:"加班详情"}}),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"content-inner"},[a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:t.rules,model:t.formdata2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("el-input",{model:{value:t.formdata2.companyName,callback:function(e){t.formdata2.companyName=e},expression:"formdata2.companyName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"申请部门名称"}},[a("el-input",{model:{value:t.formdata2.deptName,callback:function(e){t.formdata2.deptName=e},expression:"formdata2.deptName"}})],1),t._v(" "),a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:t.rules,model:t.formdata2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{model:{value:t.formdata2.userNo,callback:function(e){t.formdata2.userNo=e},expression:"formdata2.userNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.formdata2.custName,callback:function(e){t.formdata2.custName=e},expression:"formdata2.custName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"岗位"}},[a("el-input",{model:{value:t.formdata2.custPost,callback:function(e){t.formdata2.custPost=e},expression:"formdata2.custPost"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职级"}},[a("el-input",{model:{value:t.formdata2.custClass,callback:function(e){t.formdata2.custClass=e},expression:"formdata2.custClass"}})],1)],1),t._v(" "),a("div",{staticClass:"info-title"},[t._v("加班信息")]),t._v(" "),a("el-form-item",{attrs:{label:"加班开始时间",prop:"workotStartTime"}},[a("el-date-picker",{attrs:{type:"datetime"},on:{change:t.changeStartTime},model:{value:t.formdata2.workotStartTime,callback:function(e){t.formdata2.workotStartTime=e},expression:"formdata2.workotStartTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"加班结束时间",prop:"workotEndTime"}},[a("el-date-picker",{attrs:{type:"datetime"},on:{change:t.changeEndTime},model:{value:t.formdata2.workotEndTime,callback:function(e){t.formdata2.workotEndTime=e},expression:"formdata2.workotEndTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"加班类型",prop:"workotType"}},[a("el-select",{attrs:{"value-key":"workotType"},on:{change:t.changeValue},model:{value:t.formdata2.workotType,callback:function(e){t.formdata2.workotType=e},expression:"formdata2.workotType"}},t._l(t.workotTypeList,function(t){return a("el-option",{key:t.workotNo,attrs:{label:t.label,value:t.workotNo}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"加班累计工时"}},[a("el-input",{model:{value:t.formdata2.timeSheet,callback:function(e){t.formdata2.timeSheet=e},expression:"formdata2.timeSheet"}})],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"remark",attrs:{label:"加班备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容"},model:{value:t.formdata2.remark,callback:function(e){t.formdata2.remark=e},expression:"formdata2.remark"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"最新更新人"}},[a("el-input",{model:{value:t.formdata2.updatedBy,callback:function(e){t.formdata2.updatedBy=e},expression:"formdata2.updatedBy"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最新更新时间"}},[a("el-input",{model:{value:t.formdata2.updatedDate,callback:function(e){t.formdata2.updatedDate=e},expression:"formdata2.updatedDate"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[a("el-button",{staticClass:"file_button",on:{click:t.handleDownload}},[t._v("下载")])],1)],1)],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"title-text"},[t._v("加班详情")])])}]}},592:function(t,e,a){function i(t){a(1066)}var s=a(197)(a(856),a(1204),i,null,null);t.exports=s.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,a){var i=a(660);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(547)("becca3a2",i,!0)},662:function(t,e,a){function i(t){a(661)}var s=a(197)(a(659),a(663),i,"data-v-d69b0f44",null);t.exports=s.exports},663:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:a(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},856:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(662),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={data:function(){return{formdata1:{userNo:"",custName:"",custPost:"",custClass:""},formdata2:{companyName:"01",deptName:"",workotStartTime:"",workotEndTime:"",workotType:"",workotStartCity:"",workotArrivalCity:"",timeSheet:"",workotSTD:"",remark:"",attachm:"",updatedBy:"",updatedDate:""},departList:[{departName:"上海魔方分公司",departOrgNo:"01"},{departName:"魔方分公司深圳分公司",departOrgNo:"p1"},{departName:"深圳前海橙色魔方信息技术有限公司",departOrgNo:"0"}],compList:[{compName:"上海魔方分公司",compOrgNo:"01"},{compName:"魔方分公司深圳分公司",compOrgNo:"p1"},{compName:"深圳前海橙色魔方信息技术有限公司",compOrgNo:"0"}],workotTypeList:[{label:"有薪加班",workotNo:"01"},{label:"调休加班",workotNo:"02"}],rules:{workotType:[{required:!0,message:"出差类型不能为空",trigger:"blur"}]}}},components:{current:s.default},created:function(){var t=this.$route.params.applyNo,e=(this.$route.params.userNo,{applyNo:t});this.workotInfo(e)},methods:{changeStartTime:function(t){this.formdata2.workotStartTime=t},changeEndTime:function(t){this.formdata2.workotEndTime=t},changeValue:function(t){console.log("value",t)},handleDownload:function(){var t=this,e={};t.downloadFile(e)},workotInfo:function(t){var e=this;e.$axios.get("iem_hrm/workot/queryWorkOtInfos",{params:t}).then(function(t){console.log("workotInfo",t),"S00000"===t.data.code&&(e.formdata2=t.data.data)}).catch(function(t){console.log("error")})},downloadFile:function(t){this.$axios.get("iem_hrm/workot/downLoadFile",{params:t}).then(function(t){console.log("downloadFile",t),t.data.code}).catch(function(t){console.log("error")})}}}},951:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"overtime_info.vue",sourceRoot:""}])}});
//# sourceMappingURL=68.a7a18fc85bc3a6a97e9f.js.map