webpackJsonp([78],{1011:function(s,e,t){e=s.exports=t(620)(!0),e.push([s.i,".add_assetinfo{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/asset_Mgmt/assetRegMgmt/add_asset.vue"],names:[],mappings:"AACA,eACE,qBAAuB,CACxB",file:"add_asset.vue",sourcesContent:["\n.add_assetinfo {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1127:function(s,e,t){var a=t(1011);"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);t(621)("0a9a172e",a,!0)},1266:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"add_assetinfo"},[t("current",{attrs:{yiji:"资产管理",erji:"资产登记管理",sanji:"资产信息查询",siji:"资产新增"}}),s._v(" "),t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"titlebar"},[t("span",{staticClass:"title-text"},[s._v("资产新增")]),s._v(" "),t("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(e){s.handleSave("addAssetInfoRules")}}},[s._v("保存")])],1),s._v(" "),t("div",{staticClass:"add-wrapper"},[t("el-form",{attrs:{inline:!0,model:s.custInfo,"label-position":s.labelPosition,"label-width":"110px"}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"公司名称"}},[t("el-input",{attrs:{disabled:!0},model:{value:s.custInfo.organName,callback:function(e){s.custInfo.organName=e},expression:"custInfo.organName"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"申请部门名称"}},[t("el-input",{attrs:{disabled:!0},model:{value:s.custInfo.derpName,callback:function(e){s.custInfo.derpName=e},expression:"custInfo.derpName"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"工号",prop:"userNo"}},[t("el-input",{on:{change:s.userNoChange},model:{value:s.custInfo.userNo,callback:function(e){s.custInfo.userNo=e},expression:"custInfo.userNo"}},[t("el-button",{attrs:{slot:"append",icon:"search"},on:{click:s.searchUserNo},slot:"append"})],1)],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{disabled:!0},model:{value:s.custInfo.custName,callback:function(e){s.custInfo.custName=e},expression:"custInfo.custName"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"职务"}},[t("el-input",{attrs:{disabled:!0},model:{value:s.custInfo.custPost,callback:function(e){s.custInfo.custPost=e},expression:"custInfo.custPost"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"职级"}},[t("el-input",{attrs:{disabled:!0},model:{value:s._custClass,callback:function(e){s._custClass=e},expression:"_custClass"}})],1)],1)],1)],1),s._v(" "),t("div",{staticClass:"add-wrapper"},[t("el-col",{staticClass:"item-title",attrs:{span:24}},[s._v("采购信息")]),s._v(" "),t("el-form",{ref:"addAssetInfoRules",staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:s.addAssetInfo,rules:s.assetInfoRules,"label-position":s.labelPosition,"label-width":"110px"}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"采购订单号",prop:"buyApplyNo"}},[t("el-input",{model:{value:s.addAssetInfo.buyApplyNo,callback:function(e){s.addAssetInfo.buyApplyNo=e},expression:"addAssetInfo.buyApplyNo"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"购买单价",prop:"buyUnitPrice"}},[t("el-input",{model:{value:s.addAssetInfo.buyUnitPrice,callback:function(e){s.addAssetInfo.buyUnitPrice=e},expression:"addAssetInfo.buyUnitPrice"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"购买数量",prop:"buyNum"}},[t("el-input",{attrs:{maxlength:10},model:{value:s.addAssetInfo.buyNum,callback:function(e){s.addAssetInfo.buyNum=e},expression:"addAssetInfo.buyNum"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"购买金额",prop:"buyAmount"}},[t("el-input",{model:{value:s.addAssetInfo.buyAmount,callback:function(e){s.addAssetInfo.buyAmount=e},expression:"addAssetInfo.buyAmount"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"制造商",prop:"mfrs"}},[t("el-input",{model:{value:s.addAssetInfo.mfrs,callback:function(e){s.addAssetInfo.mfrs=e},expression:"addAssetInfo.mfrs"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplier"}},[t("el-input",{model:{value:s.addAssetInfo.supplier,callback:function(e){s.addAssetInfo.supplier=e},expression:"addAssetInfo.supplier"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"资产类别"}},[t("el-select",{model:{value:s.addAssetInfo.assetType,callback:function(e){s.addAssetInfo.assetType=e},expression:"addAssetInfo.assetType"}},[t("el-option",{attrs:{label:"办公用品",value:"01"}}),s._v(" "),t("el-option",{attrs:{label:"电脑",value:"02"}}),s._v(" "),t("el-option",{attrs:{label:"手机",value:"03"}}),s._v(" "),t("el-option",{attrs:{label:"后勤用品",value:"04"}}),s._v(" "),t("el-option",{attrs:{label:"数码相机",value:"05"}})],1)],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"资产名称",prop:"assetName"}},[t("el-input",{model:{value:s.addAssetInfo.assetName,callback:function(e){s.addAssetInfo.assetName=e},expression:"addAssetInfo.assetName"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"SN编号",prop:"snNo"}},[t("el-input",{model:{value:s.addAssetInfo.snNo,callback:function(e){s.addAssetInfo.snNo=e},expression:"addAssetInfo.snNo"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"规格型号",prop:"specType"}},[t("el-input",{model:{value:s.addAssetInfo.specType,callback:function(e){s.addAssetInfo.specType=e},expression:"addAssetInfo.specType"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"出厂时间",prop:"factoryTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:s.pickFactoryTime},model:{value:s.addAssetInfo.factoryTime,callback:function(e){s.addAssetInfo.factoryTime=e},expression:"addAssetInfo.factoryTime"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"免维保截止时间",prop:"faxfreeTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:s.pickFaxfreeTime},model:{value:s.addAssetInfo.faxfreeTime,callback:function(e){s.addAssetInfo.faxfreeTime=e},expression:"addAssetInfo.faxfreeTime"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"折旧年限",prop:"derpLimit"}},[t("el-input",{model:{value:s.addAssetInfo.derpLimit,callback:function(e){s.addAssetInfo.derpLimit=e},expression:"addAssetInfo.derpLimit"}})],1)],1),s._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"附件"}},[t("el-input",{model:{value:s.addAssetInfo.attachm,callback:function(e){s.addAssetInfo.attachm=e},expression:"addAssetInfo.attachm"}}),s._v(" "),t("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":s.handleFileUpload,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[t("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[s._v("选取文件")])],1)],1)],1),s._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"主要性能说明",prop:"remark"}},[t("el-input",{attrs:{type:"textarea",placeholder:"配置说明"},model:{value:s.addAssetInfo.remark,callback:function(e){s.addAssetInfo.remark=e},expression:"addAssetInfo.remark"}})],1)],1)],1)],1)])],1)},staticRenderFns:[]}},647:function(s,e,t){function a(s){t(1127)}var i=t(236)(t(912),t(1266),a,null,null);s.exports=i.exports},732:function(s,e){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},733:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var s=this.link[this.breadItemLength-2];if(!s)return!1;this.activeTab?this.$router.push({name:s,params:{activeTab:this.activeTab}}):this.$router.push(s)}},computed:{links:function(){var s=[];return"首页"===this.yiji&&s.push("/home"),"系统管理"===this.yiji&&s.push("/management_framework"),"人事事务"===this.yiji&&s.push("/personnel_contract"),"参数管理"===this.yiji&&s.push("/argument_1"),"薪酬福利"===this.yiji&&s.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&s.push("/attendance_record"),"资产管理"===this.yiji&&s.push("/assetReq_manage"),"员工自助"===this.yiji&&s.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&s.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&s.push("/user_center"),"修改密码"===this.erji&&s.push("/modify_password"),"用户管理"===this.erji&&s.push("/management_user"),"角色管理"===this.erji&&s.push("/management_role"),"功能管理"===this.erji&&s.push("/management_fun"),"组织架构"===this.erji&&s.push("/management_framework"),"人事合同"===this.erji&&s.push("/personnel_contract"),"人事调动"===this.erji&&s.push("/personnel_transfer"),"业务参数"===this.erji&&s.push("/argument_2"),"薪酬基数设置"===this.erji&&s.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&s.push("/payChange_manage"),"考勤记录管理"===this.erji&&s.push("/attendance_record"),"出差管理"===this.erji&&s.push("/travel_management"),"请假管理"===this.erji&&s.push("/leave_management"),"加班管理"===this.erji&&s.push("/overtime_management"),"资产登记管理"===this.erji&&s.push("/assetReq_manage"),"个人信息查询"===this.erji&&s.push("/query_personalInfo"),"开票信息查询"===this.erji&&s.push("/query_billingInfo"),"直线经理管理"===this.erji&&s.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&s.push("/assetUse_manage"),"工资查询"===this.erji&&s.push("/historicalSalary_query"),"编辑部门"===this.sanji&&s.push("/edit_department"),"新增机构人员"===this.sanji&&s.push("/add_person"),"新增子部门"===this.sanji&&s.push("/add_junior"),"新增角色"===this.sanji&&s.push("/add_role"),"编辑角色"===this.sanji&&s.push("/edit_role"),"用户信息"===this.sanji&&s.push("/edit_userM"),"功能编辑"===this.sanji&&s.push("/edit_fun"),"合同新增"===this.sanji&&s.push("/add_contract"),"合同修改"===this.sanji&&s.push("/edit_contract"),"合同详情"===this.sanji&&s.push("detail_contract"),"合同变更"===this.sanji&&s.push("/add_pactChange"),"合同续签"===this.sanji&&s.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&s.push("/agency_argument"),"免签节假日维护"===this.sanji&&s.push("/holiday_info"),"公司开票信息维护"===this.sanji&&s.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&s.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&s.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&s.push("/rank"),"薪酬基数新增"===this.sanji&&s.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&s.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&s.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&s.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&s.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&s.push("/detail_dimission"),"出差新增"===this.sanji&&s.push("/add_travel"),"出差详情"===this.sanji&&s.push("/travel_info"),"出差修改"===this.sanji&&s.push("/edit_travel"),"请假新增"===this.sanji&&s.push("/add_leave"),"请假详情"===this.sanji&&s.push("/leave_info"),"请假修改"===this.sanji&&s.push("/edit_leave"),"加班新增"===this.sanji&&s.push("/add_overtime"),"加班详情"===this.sanji&&s.push("/overtime_info"),"加班修改"===this.sanji&&s.push("/edit_overtime"),"资产信息查询"===this.sanji&&s.push("/query_asset"),"请假审批"===this.sanji&&s.push("/leave_approval"),"资产使用修改"===this.sanji&&s.push("/edit_assetUse"),"资产使用新增"===this.sanji&&s.push("/add_assetUse"),"资产使用详情"===this.sanji&&s.push("/detail_assetUse"),"人事调动详情"===this.siji&&s.push("/transfer_info"),"人事调动修改"===this.siji&&s.push("/edit_transfer"),"人事调动新增"===this.siji&&s.push("/add_transfer"),"员工离职详情"===this.siji&&s.push("/dimission_info"),"员工离职修改"===this.siji&&s.push("/edit_dimission"),"员工离职新增"===this.siji&&s.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&s.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&s.push("/welfare_info"),"个人所得税税率详情"===this.siji&&s.push("/rate_info"),"税率组新增"===this.siji&&s.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&s.push("/add_rank"),"职级薪酬标准修改"===this.siji&&s.push("/edit_rank"),"CCC新增"===this.siji&&s.push("/add_agency"),"CCC修改"===this.siji&&s.push("/modify_agency"),"节假日新增"===this.siji&&s.push("/add_holiday"),"开票信息新增"===this.siji&&s.push("/add_ticket"),"开票信息修改"===this.siji&&s.push("/edit_ticket"),"合同变更详情"===this.siji&&s.push("/detail_pactChange"),"合同变更修改"===this.siji&&s.push("/edit_pactChange"),"合同续签详情"===this.siji&&s.push("/detail_pactRenew"),"合同续签修改"===this.siji&&s.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&s.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&s.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&s.push("/edit_payChangeInfo"),"资产详情"===this.siji&&s.push("/detail_asset"),"资产新增"===this.siji&&s.push("/add_asset"),"资产修改"===this.siji&&s.push("/edit_asset"),"税率新增"===this.wuji&&s.push("/add_rate"),"税率修改"===this.wuji&&s.push("/edit_rate"),this.link=s,this.breadItemLength=s.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},734:function(s,e,t){e=s.exports=t(620)(!0),e.push([s.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},735:function(s,e,t){var a=t(734);"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);t(621)("becca3a2",a,!0)},736:function(s,e,t){function a(s){t(735)}var i=t(236)(t(733),t(737),a,"data-v-d69b0f44",null);s.exports=i.exports},737:function(s,e,t){s.exports={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[s._v("当前位置：")]),s._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[s.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[0]}}},[s._v(s._s(s.yiji))]):s._e(),s._v(" "),s.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[1]}}},[s._v(s._s(s.erji))]):s._e(),s._v(" "),s.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[2]}}},[s._v(s._s(s.sanji))]):s._e(),s._v(" "),s.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[3]}}},[s._v(s._s(s.siji))]):s._e(),s._v(" "),s.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[4]}}},[s._v(s._s(s.wuji))]):s._e(),s._v(" "),s.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:s.links[5]}}},[s._v(s._s(s.liuji))]):s._e(),s._v(" "),s._e()],1)],1),s._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:s.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:t(732),alt:"pic",width:"19",height:"12"},on:{click:s.jump}})])],1)],1)},staticRenderFns:[]}},912:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(736),i=function(s){return s&&s.__esModule?s:{default:s}}(a);e.default={data:function(){return{labelPosition:"right",custInfo:{},addAssetInfo:{buyApplyNo:"",assetName:"",assetType:"",buyUnitPrice:"",buyNum:"",buyAmount:"",mfrs:"",supplier:"",snNo:"",specType:"",organNo:"",derpNo:"",applyUserNo:"",factoryTime:"",faxfreeTime:"",derpLimit:"",attachm:"",remark:""},assetInfoRules:{buyUnitPrice:[{required:!0,message:"购买单价不能为空",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的正数"}],buyNum:[{pattern:/^(0|([1-9][0-9]{0,10}))$/,message:"请输入正整数"}],buyAmount:[{required:!0,message:"购买金额不能为空",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的正数"}],assetName:[{required:!0,message:"资产名称不能为空",trigger:"blur"}],derpLimit:[{pattern:/^(0|([1-9][0-9]{0,63}))$/,message:"月数，如：18"}],remark:[{required:!0,message:"主要性能说明不能为空",trigger:"blur"}]}}},components:{current:i.default},created:function(){},computed:{_custClass:{set:function(s){this.custInfo.custClass=s},get:function(){return"B10"==this.custInfo.custClass?"B10-初级软件工程师":"B11"==this.custInfo.custClass?"B11-中级软件工程师":"B12"==this.custInfo.custClass?"B12-高级软件工程师":""}}},methods:{getCustInfo:function(){var s=this;s.custInfo.applyUserNo;s.custInfo={userNo:"P0000117",custName:"zhaoqi",organNo:"1001",organName:"魔方南山分公司",derpNo:"100101",derpName:"魔方南山分公司技术部门",custPost:"软件工程师",custClass:"B10"}},searchUserNo:function(){var s=this;s.custInfo.userNo="P0000117",s.getCustInfo(),s.addAssetInfo.applyUserNo=s.custInfo.userNo,s.addAssetInfo.organNo=s.custInfo.organNo,s.addAssetInfo.derpNo=s.custInfo.derpNo},userNoChange:function(s){this.getCustInfo()},pickFactoryTime:function(s){this.addAssetInfo.factoryTime=s},pickFaxfreeTime:function(s){this.addAssetInfo.faxfreeTime=s},handleFileUpload:function(s,e){console.log(s),this.addAssetInfo.attachm=s.name},handleSave:function(s){var e=this;this.$refs[s].validate(function(s){if(!s)return console.log("error submit!!"),!1;var t=e.addAssetInfo;console.log(t),e.$axios.post("/iem_hrm/EpAssetInf/addEpAssetInf",t).then(function(s){console.log(s),"S00000"==s.data.code?(e.$message({type:"success",message:"操作成功!"}),e.$router.push("/query_asset")):e.$message.error("操作失败！")}).catch(function(){e.$message.error("操作失败！")})})}}}}});
//# sourceMappingURL=78.1fd314c9b2ff9eb4a9b8.js.map