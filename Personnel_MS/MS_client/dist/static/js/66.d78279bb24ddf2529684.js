webpackJsonp([66],{1082:function(t,a,e){var s=e(968);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(547)("d61b3894",s,!0)},1219:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"travelC_wrap"},[e("current",{attrs:{yiji:"考勤管理",erji:"出差管理",sanji:"出差新增"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"title-text"},[t._v("出差新增")]),t._v(" "),e("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(a){t.save("formdata2")}}},[t._v("保存")])],1),t._v(" "),e("div",{staticClass:"content-inner"},[e("el-form",{ref:"formdata2",attrs:{inline:!0,rules:t.rules,model:t.formdata2,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"公司名称"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.companyName,callback:function(a){t.formdata1.companyName=a},expression:"formdata1.companyName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"申请部门名称"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.deptName,callback:function(a){t.formdata1.deptName=a},expression:"formdata1.deptName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"工号"}},[e("el-input",{model:{value:t.formdata1.userNo,callback:function(a){t.formdata1.userNo=a},expression:"formdata1.userNo"}}),t._v(" "),e("el-button",{staticClass:"queryUserBtn",attrs:{type:"primary"},on:{click:t.queryUserInfo}},[t._v("查询")])],1),t._v(" "),e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.custName,callback:function(a){t.formdata1.custName=a},expression:"formdata1.custName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"岗位"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.custPost,callback:function(a){t.formdata1.custPost=a},expression:"formdata1.custPost"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"职级"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.custClass,callback:function(a){t.formdata1.custClass=a},expression:"formdata1.custClass"}})],1),t._v(" "),e("div",{staticClass:"info-title"},[t._v("出差信息")]),t._v(" "),e("el-form-item",{attrs:{label:"出差开始时间",prop:"travelStartTime"}},[e("el-date-picker",{attrs:{type:"date"},on:{change:t.changeStartTime},model:{value:t.formdata2.travelStartTime,callback:function(a){t.formdata2.travelStartTime=a},expression:"formdata2.travelStartTime"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"出差结束时间",prop:"travelEndTime"}},[e("el-date-picker",{attrs:{type:"date"},on:{change:t.changeEndTime},model:{value:t.formdata2.travelEndTime,callback:function(a){t.formdata2.travelEndTime=a},expression:"formdata2.travelEndTime"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"出差类型",prop:"travelType"}},[e("el-select",{attrs:{"value-key":"travelType"},on:{change:t.changeValue},model:{value:t.formdata2.travelType,callback:function(a){t.formdata2.travelType=a},expression:"formdata2.travelType"}},t._l(t.travelTypeList,function(t){return e("el-option",{key:t.travelNo,attrs:{label:t.label,value:t.travelNo}})}))],1),t._v(" "),e("el-form-item",{attrs:{label:"出差城市"}},[e("el-input",{staticClass:"travelCity",attrs:{placeholder:"出发城市"},model:{value:t.formdata2.travelStartCity,callback:function(a){t.formdata2.travelStartCity=a},expression:"formdata2.travelStartCity"}}),t._v(" "),e("span",{staticClass:"travelCity_line"},[t._v("-")]),t._v(" "),e("el-input",{staticClass:"travelCity",attrs:{placeholder:"到达城市"},model:{value:t.formdata2.travelArrivalCity,callback:function(a){t.formdata2.travelArrivalCity=a},expression:"formdata2.travelArrivalCity"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"出差天数",prop:"travelDays"}},[e("el-input",{model:{value:t.formdata2.travelDays,callback:function(a){t.formdata2.travelDays=a},expression:"formdata2.travelDays"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"差补标准",prop:"travelSTD"}},[e("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.travelSTD,callback:function(a){t.formdata1.travelSTD=a},expression:"formdata1.travelSTD"}})],1),t._v(" "),e("el-form-item",{staticClass:"remark",attrs:{label:"出差备注",prop:"remark"}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容"},model:{value:t.formdata2.remark,callback:function(a){t.formdata2.remark=a},expression:"formdata2.remark"}})],1),t._v(" "),e("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[e("el-input",{model:{value:t.formdata2.attachm,callback:function(a){t.formdata2.attachm=a},expression:"formdata2.attachm"}}),t._v(" "),e("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{name:"file",data:t.formdata,"on-change":t.changeUpload,"on-success":t.successUpload,action:"/iem_hrm/travel/addTravelInfo","show-file-list":!1,"auto-upload":!1,headers:t.token}},[e("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1)],1)])],1)},staticRenderFns:[]}},595:function(t,a,e){function s(t){e(1082)}var i=e(197)(e(856),e(1219),s,"data-v-486838a7",null);t.exports=i.exports},658:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,a,e){a=t.exports=e(546)(!0),a.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,a,e){var s=e(660);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(547)("becca3a2",s,!0)},662:function(t,a,e){function s(t){e(661)}var i=e(197)(e(659),e(663),s,"data-v-d69b0f44",null);t.exports=i.exports},663:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:e(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},856:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(662),i=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={data:function(){return{token:{Authorization:"Bearer "+localStorage.getItem("access_token")},formdata:{},formdata1:{organNo:"",deptNo:"",userNo:"",custName:"",custPost:"",custClass:"",travelSTD:""},formdata2:{travelStartTime:"",travelEndTime:"",travelType:"",travelStartCity:"",travelArrivalCity:"",travelDays:"",remark:"",attachm:""},travelTypeList:[{label:"业务拓展",travelNo:"01"},{label:"项目实施",travelNo:"02"},{label:"会议",travelNo:"03"},{label:"其他",travelNo:"99"}],rules:{travelType:[{required:!0,message:"出差类型不能为空",trigger:"blur"}],travelStartTime:[{required:!0,message:"出差开始时间不能为空",trigger:"blur"}],travelEndTime:[{required:!0,message:"出差结束时间不能为空",trigger:"blur"}],travelStartCity:[],travelArrivalCity:[],travelDays:[{required:!0,message:"出差天数不能为空",trigger:"blur"}],remark:[{min:0,max:512,message:"长度在 0 到 512 个字符之间",trigger:"blur"}]}}},components:{current:i.default},created:function(){},methods:{changefile:function(t,a){console.log(t),this.formdata2.attachm=t.name},changeStartTime:function(t){this.formdata2.travelStartTime=t},changeEndTime:function(t){this.formdata2.travelEndTime=t},changeValue:function(t){console.log("value",t)},queryUserInfo:function(){var t=this.formdata1.userNo,a={userNo:t};this.getUseInfoByUserNo(a)},successUpload:function(t,a,e){this.$message({message:"操作成功",type:"success"})},save:function(t){var a=this;this.$refs[t].validate(function(t){if(!t)return!1;console.log("valid");var e={userNo:a.formdata1.userNo,travelType:a.formdata2.travelType,travelStartTime:a.formdata2.travelStartTime,travelEndTime:a.formdata2.travelEndTime,travelStartCity:a.formdata2.travelStartCity,travelArrivalCity:a.formdata2.travelArrivalCity,travelDays:a.formdata2.travelDays,travelSTD:a.formdata1.travelSTD,remark:a.formdata2.remark,attachm:a.formdata2.attachm};a.formdata=e,a.$refs.upload.submit()})},getUseInfoByUserNo:function(t){var a=this;a.$axios.get("iem_hrm/travel/getUseInfoByUserNo/",{params:t}).then(function(t){console.log("getUseInfoByUserNo",t),"S00000"===t.data.code&&(a.formdata1=t.data.data)}).catch(function(t){console.log("error")})},addTravelInfo:function(t){var a=this;a.$axios.post("iem_hrm/travel/addTravelInfo",t).then(function(t){console.log("addTravelInfo",t),"S00000"===t.data.code&&a.$message({message:"操作成功",type:"success"})}).catch(function(t){console.log("error")})}}}},968:function(t,a,e){a=t.exports=e(546)(!0),a.push([t.i,".queryUserBtn[data-v-486838a7]{position:absolute;right:0;top:0;height:40px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/attendance_Mgmt/travel_management/add_travel.vue"],names:[],mappings:"AACA,+BACI,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,WAAa,CAChB",file:"add_travel.vue",sourcesContent:["\n.queryUserBtn[data-v-486838a7] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 40px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=66.d78279bb24ddf2529684.js.map