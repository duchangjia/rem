webpackJsonp([88],{1103:function(t,e,i){var r=i(989);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(547)("24526689",r,!0)},1240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_rateGroup"},[i("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"个人所得税税率设置",siji:"个人所得税税率详情",wuji:"税率新增"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("span",{staticClass:"title-text"},[t._v("税率新增")]),t._v(" "),i("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(e){t.save("formdata")}}},[t._v("保存")])],1),t._v(" "),i("div",{staticClass:"content-inner"},[i("el-form",{ref:"formdata",attrs:{rules:t.rules,model:t.formdata,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"组名称",prop:"groupName"}},[i("el-input",{attrs:{disabled:!0},model:{value:t.formdata.groupName,callback:function(e){t.formdata.groupName=e},expression:"formdata.groupName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"下限",prop:"groupLowerLimit"}},[i("el-input",{model:{value:t.formdata.groupLowerLimit,callback:function(e){t.formdata.groupLowerLimit=e},expression:"formdata.groupLowerLimit"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"上限",prop:"groupLimit"}},[i("el-input",{model:{value:t.formdata.groupLimit,callback:function(e){t.formdata.groupLimit=e},expression:"formdata.groupLimit"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"百分率",prop:"percentRate"}},[i("el-input",{model:{value:t.formdata.percentRate,callback:function(e){t.formdata.percentRate=e},expression:"formdata.percentRate"}}),t._v(" "),i("span",{staticClass:"percent_icon"},[t._v("%")])],1),t._v(" "),i("el-form-item",{attrs:{label:"速算扣除数",prop:"quickCal"}},[i("el-input",{model:{value:t.formdata.quickCal,callback:function(e){t.formdata.quickCal=e},expression:"formdata.quickCal"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{model:{value:t.formdata.remark,callback:function(e){t.formdata.remark=e},expression:"formdata.remark"}})],1)],1)],1)])],1)},staticRenderFns:[]}},554:function(t,e,i){function r(t){i(1103)}var a=i(197)(i(814),i(1240),r,null,null);t.exports=a.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,i){e=t.exports=i(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,i){var r=i(660);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(547)("becca3a2",r,!0)},662:function(t,e,i){function r(t){i(661)}var a=i(197)(i(659),i(663),r,"data-v-d69b0f44",null);t.exports=a.exports},663:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"location-wrapper"},[r("el-row",[r("el-col",{attrs:{span:22}},[r("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),r("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[r("img",{staticClass:"pic",attrs:{src:i(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},814:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(662),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={data:function(){var t=this;return{formdata:{groupName:"",groupId:"",applyNo:"",groupLimit:"",groupLowerLimit:"",percentRate:"",quickCal:"",remark:""},rules:{groupId:[{required:!0,message:"组名称不能为空",trigger:"blur"}],startTime:[{type:"date",required:!0,message:"生效日期不能为空",trigger:"blur"}],groupLimit:[{required:!0,validator:function(e,i,r){""===i?r(new Error("上限不能为空")):/^[0-9]*$/.test(i)?Number(i)<=Number(t.formdata.groupLowerLimit)?r(new Error("上限值必须大于下限值!")):r():r(new Error("请输入数字"))},trigger:"blur"}],groupLowerLimit:[{required:!0,validator:function(t,e,i){""===e?i(new Error("下限不能为空")):/^[0-9]*$/.test(e)?i():i(new Error("请输入数字"))},trigger:"blur"}],percentRate:[{required:!0,validator:function(t,e,i){""===e?i(new Error("百分率不能为空")):/^[0-9]*$/.test(e)?i():i(new Error("请输入数字"))},trigger:"blur"}],quickCal:[{required:!0,validator:function(t,e,i){""===e?i(new Error("速算扣除数不能为空")):i()},trigger:"blur"}]}}},components:{current:a.default},created:function(){this.formdata.groupName=sessionStorage.getItem("groupName"),this.formdata.groupId=sessionStorage.getItem("groupId")},methods:{save:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=e,r={groupId:i.formdata.groupId,remark:"xxxx",GroupLimit:i.formdata.groupLimit,GroupLowerLimit:i.formdata.groupLowerLimit,percentRate:i.formdata.percentRate/100,quickCal:i.formdata.quickCal,isDelete:"1"};i.insertTaxRateCtrl(r)})},insertTaxRateCtrl:function(t){var e=this,i=this;i.$axios.post("iem_hrm/taxRateCtrl/addRate",t).then(function(t){console.log("addRate",t),i.formdata.applyNo=t.data.data,e.$message({message:"操作成功",type:"success"})})}}}},989:function(t,e,i){e=t.exports=i(546)(!0),e.push([t.i,'.add_rateGroup{padding-left:20px;padding-bottom:20px;width:100%}.add_rateGroup .content{width:100%;min-height:510px;padding:0 20px;background:#fff;clear:both}.add_rateGroup .content .title{border-bottom:1px solid #eee}.add_rateGroup .content .title .title-text{display:inline-block;position:relative;padding:14px 0;font-size:16px;height:50px}.add_rateGroup .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.add_rateGroup .content-inner{padding:30px 0}.add_rateGroup .conserve{float:right;margin-top:10px;background:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;font-size:14px;color:#333;width:120px;height:30px;padding:0}.add_rateGroup .el-input__inner{border:1px solid #eee;color:#999;width:300px;height:40px;margin-left:30px}.add_rateGroup .el-date-editor.el-input{width:300px;margin-left:30px}.add_rateGroup .el-date-editor.el-input .el-input__inner{margin-left:0}.add_rateGroup .el-form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#999;line-height:1;padding:11px 0;box-sizing:border-box}.add_rateGroup .el-input__inner:hover{border-color:#f90}.add_rateGroup .el-input.is-disabled .el-input__inner:hover{border-color:#d1dbe5}.add_rateGroup .el-form-item__error{padding-left:30px}.add_rateGroup .percent_icon{position:absolute;top:0;left:340px}',"",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_rate.vue"],names:[],mappings:"AACA,eACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,wBACC,WAAY,AACZ,iBAAkB,AAClB,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,+BACA,4BAAiC,CAChC,AACD,2CACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,eAAgB,AAChB,WAAa,CACb,AACD,iDACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AACD,8BACC,cAAkB,CAClB,AACD,yBACC,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,YAAa,AACb,SAAW,CACX,AACD,gCACI,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACb,YAAa,AACb,gBAAkB,CACrB,AACD,wCACI,YAAa,AACb,gBAAkB,CACrB,AACD,yDACI,aAAiB,CACpB,AACD,oCACI,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,WAAe,AACf,cAAe,AACf,eAAyB,AACzB,qBAAuB,CAC1B,AACD,sCACI,iBAAsB,CACzB,AACD,4DACI,oBAAsB,CACzB,AACD,oCACI,iBAAmB,CACtB,AACD,6BACI,kBAAmB,AACnB,MAAS,AACT,UAAY,CACf",file:"add_rate.vue",sourcesContent:["\n.add_rateGroup {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.add_rateGroup .content {\r\n\twidth: 100%;\r\n\tmin-height: 510px;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.add_rateGroup .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.add_rateGroup .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 14px 0px;\r\n\tfont-size: 16px;\r\n\theight: 50px;\n}\n.add_rateGroup .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.add_rateGroup .content-inner {\r\n\tpadding: 30px 0px;\n}\n.add_rateGroup .conserve {\r\n\tfloat: right;\r\n\tmargin-top: 10px;\r\n\tbackground: #F4F4F4;\r\n\tborder: 1px solid #F4F4F4;\r\n\tborder-radius: 0px;\r\n\tfont-size: 14px;\r\n\tcolor: #333333;\r\n\twidth: 120px;\r\n\theight: 30px;\r\n\tpadding: 0;\n}\n.add_rateGroup .el-input__inner {\r\n    border: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    width: 300px;\r\n    height: 40px;\r\n    margin-left: 30px;\n}\n.add_rateGroup .el-date-editor.el-input {\r\n    width: 300px;\r\n    margin-left: 30px;\n}\n.add_rateGroup .el-date-editor.el-input .el-input__inner {\r\n    margin-left: 0px;\n}\n.add_rateGroup .el-form-item__label {\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    float: left;\r\n    font-size: 14px;\r\n    color: #999999;\r\n    line-height: 1;\r\n    padding: 11px 0px 11px 0;\r\n    box-sizing: border-box;\n}\n.add_rateGroup .el-input__inner:hover {\r\n    border-color: #FF9900;\n}\n.add_rateGroup .el-input.is-disabled .el-input__inner:hover {\r\n    border-color: #d1dbe5;\n}\n.add_rateGroup .el-form-item__error {\r\n    padding-left: 30px;\n}\n.add_rateGroup .percent_icon {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 340px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=88.a454ba36bab2bd8f5065.js.map