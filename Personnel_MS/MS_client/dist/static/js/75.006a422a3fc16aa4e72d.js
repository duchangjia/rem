webpackJsonp([75],{1009:function(e,t,s){t=e.exports=s(546)(!0),t.push([e.i,".edit_assetinfo{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/asset_Mgmt/assetRegMgmt/edit_asset.vue"],names:[],mappings:"AACA,gBACE,qBAAuB,CACxB",file:"edit_asset.vue",sourcesContent:["\n.edit_assetinfo {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1123:function(e,t,s){var a=s(1009);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(547)("0f14f34d",a,!0)},1260:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit_assetinfo"},[s("current",{attrs:{yiji:"资产管理",erji:"资产登记管理",sanji:"资产信息查询",siji:"资产修改"}}),e._v(" "),s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"titlebar"},[s("span",{staticClass:"title-text"},[e._v("资产修改")]),e._v(" "),s("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(t){e.handleSave("editAssetInfoRules")}}},[e._v("保存")])],1),e._v(" "),s("div",{staticClass:"add-wrapper"},[s("el-form",{attrs:{inline:!0,model:e.custInfo,"label-position":e.labelPosition,"label-width":"110px"}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"公司名称"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.organName,callback:function(t){e.custInfo.organName=t},expression:"custInfo.organName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"申请部门名称"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.derpName,callback:function(t){e.custInfo.derpName=t},expression:"custInfo.derpName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"工号"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.userNo,callback:function(t){e.custInfo.userNo=t},expression:"custInfo.userNo"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.custName,callback:function(t){e.custInfo.custName=t},expression:"custInfo.custName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"职务"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.custPost,callback:function(t){e.custInfo.custPost=t},expression:"custInfo.custPost"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"职级"}},[s("el-input",{attrs:{disabled:!0},model:{value:e.custInfo.custClass,callback:function(t){e.custInfo.custClass=t},expression:"custInfo.custClass"}})],1)],1)],1)],1),e._v(" "),s("div",{staticClass:"add-wrapper"},[s("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("采购信息")]),e._v(" "),s("el-form",{ref:"editAssetInfoRules",staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:e.assetInfoDetail,rules:e.rules,"label-position":e.labelPosition,"label-width":"110px"}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"采购订单号",prop:"buyApplyNo"}},[s("el-input",{model:{value:e.assetInfoDetail.buyApplyNo,callback:function(t){e.assetInfoDetail.buyApplyNo=t},expression:"assetInfoDetail.buyApplyNo"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"购买单价",prop:"buyUnitPrice"}},[s("el-input",{model:{value:e.assetInfoDetail.buyUnitPrice,callback:function(t){e.assetInfoDetail.buyUnitPrice=t},expression:"assetInfoDetail.buyUnitPrice"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"购买数量",prop:"buyNum"}},[s("el-input",{model:{value:e.assetInfoDetail.buyNum,callback:function(t){e.assetInfoDetail.buyNum=t},expression:"assetInfoDetail.buyNum"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"购买金额",prop:"buyAmount"}},[s("el-input",{model:{value:e.assetInfoDetail.buyAmount,callback:function(t){e.assetInfoDetail.buyAmount=t},expression:"assetInfoDetail.buyAmount"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"制造商",prop:"mfrs"}},[s("el-input",{model:{value:e.assetInfoDetail.mfrs,callback:function(t){e.assetInfoDetail.mfrs=t},expression:"assetInfoDetail.mfrs"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"供应商",prop:"supplier"}},[s("el-input",{model:{value:e.assetInfoDetail.supplier,callback:function(t){e.assetInfoDetail.supplier=t},expression:"assetInfoDetail.supplier"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"资产类别"}},[s("el-select",{model:{value:e.assetInfoDetail.assetType,callback:function(t){e.assetInfoDetail.assetType=t},expression:"assetInfoDetail.assetType"}},[s("el-option",{attrs:{label:"办公用品",value:"01"}}),e._v(" "),s("el-option",{attrs:{label:"电脑",value:"02"}}),e._v(" "),s("el-option",{attrs:{label:"手机",value:"03"}}),e._v(" "),s("el-option",{attrs:{label:"后勤用品",value:"04"}}),e._v(" "),s("el-option",{attrs:{label:"数码相机",value:"05"}})],1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"资产名称",prop:"assetName"}},[s("el-input",{model:{value:e.assetInfoDetail.assetName,callback:function(t){e.assetInfoDetail.assetName=t},expression:"assetInfoDetail.assetName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"SN编号",prop:"snNo"}},[s("el-input",{model:{value:e.assetInfoDetail.snNo,callback:function(t){e.assetInfoDetail.snNo=t},expression:"assetInfoDetail.snNo"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"规格型号",prop:"specType"}},[s("el-input",{model:{value:e.assetInfoDetail.specType,callback:function(t){e.assetInfoDetail.specType=t},expression:"assetInfoDetail.specType"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"出厂时间",prop:"factoryTime"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:e.pickFactoryTime},model:{value:e.assetInfoDetail.factoryTime,callback:function(t){e.assetInfoDetail.factoryTime=t},expression:"assetInfoDetail.factoryTime"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"免维保截止时间",prop:"faxfreeTime"}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},on:{change:e.pickFaxfreeTime},model:{value:e.assetInfoDetail.faxfreeTime,callback:function(t){e.assetInfoDetail.faxfreeTime=t},expression:"assetInfoDetail.faxfreeTime"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"折旧年限",prop:"derpLimit"}},[s("el-input",{attrs:{placeholder:"月数，如：18"},model:{value:e.assetInfoDetail.derpLimit,callback:function(t){e.assetInfoDetail.derpLimit=t},expression:"assetInfoDetail.derpLimit"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"附件"}},[s("el-input",{model:{value:e.assetInfoDetail.attachm,callback:function(t){e.assetInfoDetail.attachm=t},expression:"assetInfoDetail.attachm"}}),e._v(" "),s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-change":e.handleFileUpload,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[s("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)],1)],1),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"主要性能说明",prop:"remark"}},[s("el-input",{attrs:{type:"textarea",placeholder:"配置说明"},model:{value:e.assetInfoDetail.remark,callback:function(t){e.assetInfoDetail.remark=t},expression:"assetInfoDetail.remark"}})],1)],1)],1)],1)])],1)},staticRenderFns:[]}},576:function(e,t,s){function a(e){s(1123)}var i=s(197)(s(836),s(1260),a,null,null);e.exports=i.exports},658:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(e,t,s){t=e.exports=s(546)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(e,t,s){var a=s(660);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(547)("becca3a2",a,!0)},662:function(e,t,s){function a(e){s(661)}var i=s(197)(s(659),s(663),a,"data-v-d69b0f44",null);e.exports=i.exports},663:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(658),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},836:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(662),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={data:function(){return{labelPosition:"right",assetNo:"",applyUserNo:"",custInfo:{},assetInfoDetail:{},rules:{buyUnitPrice:[{required:!0,message:"购买单价不能为空",trigger:"blur"}],buyAmount:[{required:!0,message:"购买金额不能为空",trigger:"blur"}],assetName:[{required:!0,message:"资产名称不能为空",trigger:"blur"}],remark:[{required:!0,message:"主要性能说明不能为空",trigger:"blur"}]}}},components:{current:i.default},created:function(){this.assetNo=this.$route.params.assetNo,this.applyUserNo=this.$route.params.applyUserNo,this.getCustInfo(),this.getAssetInfoDetail()},methods:{getCustInfo:function(){var e=this,t=e.applyUserNo;e.$axios.get("/iem_hrm/CustInfo/queryCustInfoByUserNo/"+t).then(function(t){e.custInfo=t.data.data}).catch(function(){console.log("error")})},getAssetInfoDetail:function(){var e=this,t=e.assetNo;e.$axios.get("/iem_hrm/EpAssetInf/queryEpAssetInf/"+t).then(function(t){e.assetInfoDetail=t.data.data}).catch(function(){console.log("error")})},pickFactoryTime:function(e){this.assetInfoDetail.factoryTime=e},pickFaxfreeTime:function(e){this.assetInfoDetail.faxfreeTime=e},handleFileUpload:function(e,t){console.log(e),this.assetInfoDetail.attachm=e.name},handleSave:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var s={};s.applyUserNo=t.custInfo.userNo,s.organNo=t.custInfo.organNo,s.derpNo=t.custInfo.derpNo,s.assetNo=t.assetInfoDetail.assetNo,s.buyApplyNo=t.assetInfoDetail.buyApplyNo,s.buyUnitPrice=t.assetInfoDetail.buyUnitPrice,s.buyNum=t.assetInfoDetail.buyNum,s.stockNum=t.assetInfoDetail.stockNum,s.buyAmount=t.assetInfoDetail.buyAmount,s.mfrs=t.assetInfoDetail.mfrs,s.supplier=t.assetInfoDetail.supplier,s.assetType=t.assetInfoDetail.assetType,s.assetName=t.assetInfoDetail.assetName,s.faxfreeTime=t.assetInfoDetail.faxfreeTime,s.snNo=t.assetInfoDetail.snNo,s.status=t.assetInfoDetail.status,s.derpLimit=t.assetInfoDetail.derpLimit,s.specType=t.assetInfoDetail.specType,s.factoryTime=t.assetInfoDetail.factoryTime,s.remark=t.assetInfoDetail.remark,console.log("editAssetInfo",s),t.$axios.put("/iem_hrm/EpAssetInf/updateEpAssetInf",s).then(function(e){console.log(e),"S00000"==e.data.code?(t.$message({type:"success",message:"操作成功!"}),t.$router.push("/query_asset")):t.$message.error("操作失败！")}).catch(function(){t.$message.error("操作失败！")})})}}}}});
//# sourceMappingURL=75.006a422a3fc16aa4e72d.js.map