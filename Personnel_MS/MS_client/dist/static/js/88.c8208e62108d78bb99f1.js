webpackJsonp([88],{1074:function(e,a,t){a=e.exports=t(620)(!0),a.push([e.i,'.add_welfare{padding-left:20px;padding-bottom:20px;width:100%}.add_welfare .content{width:100%;padding:0 20px;background:#fff;clear:both}.add_welfare .content .title{border-bottom:1px solid #eee}.add_welfare .content .title .title-text{display:inline-block;position:relative;padding:14px 0;font-size:16px;height:50px}.add_welfare .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.add_welfare .content-inner{padding:30px 0}.add_welfare .conserve{float:right;margin-top:10px;background:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;font-size:14px;color:#333;width:120px;height:30px;padding:0}.add_welfare .form_box{clear:both}.add_welfare .form_box .title{padding:11px 0 11px 10px;margin-bottom:20px;color:#999;border:none;clear:both}.add_welfare .form_box .inner{padding-left:20px}.add_welfare .form_box .plus{margin-left:10px;margin-right:-20px;margin-top:10px;float:left}.add_welfare .form_box .el-form-item{width:45%;float:left}.add_welfare .form_box .el-form-item.formLeft{clear:both}.add_welfare .form_box .el-form-item.formRight{margin-left:-50px}.add_welfare .el-input__inner{border:1px solid #eee;color:#999;width:300px;height:40px;margin-left:30px}.add_welfare .el-form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#999;line-height:1;padding:11px 0;box-sizing:border-box}.add_welfare .el-input{position:relative;font-size:14px;width:330px}.add_welfare .el-form-item__error{padding-left:30px}',"",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_welfare.vue"],names:[],mappings:"AACA,aACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,sBACC,WAAY,AACZ,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,6BACA,4BAAiC,CAChC,AACD,yCACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,eAAgB,AAChB,WAAa,CACb,AACD,+CACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AACD,4BACC,cAAkB,CAClB,AACD,uBACC,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,YAAa,AACb,SAAW,CACX,AACD,uBACC,UAAY,CACZ,AACD,8BACC,yBAA4B,AACzB,mBAAoB,AACvB,WAAe,AACf,YAAa,AACb,UAAY,CACZ,AACD,8BACC,iBAAmB,CACnB,AACD,6BACC,iBAAkB,AAClB,mBAAoB,AACjB,gBAAiB,AACjB,UAAY,CACf,AACD,qCACC,UAAW,AACX,UAAY,CACZ,AACD,8CACC,UAAY,CACZ,AACD,+CACI,iBAAmB,CACtB,AACD,8BACI,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACb,YAAa,AACb,gBAAkB,CACrB,AACD,kCACI,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,WAAe,AACf,cAAe,AACf,eAAyB,AACzB,qBAAuB,CAC1B,AACD,uBACI,kBAAmB,AACnB,eAAgB,AAChB,WAAa,CAChB,AACD,kCACI,iBAAmB,CACtB",file:"add_welfare.vue",sourcesContent:["\n.add_welfare {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.add_welfare .content {\r\n\twidth: 100%;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.add_welfare .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.add_welfare .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 14px 0px;\r\n\tfont-size: 16px;\r\n\theight: 50px;\n}\n.add_welfare .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.add_welfare .content-inner {\r\n\tpadding: 30px 0px;\n}\n.add_welfare .conserve {\r\n\tfloat: right;\r\n\tmargin-top: 10px;\r\n\tbackground: #F4F4F4;\r\n\tborder: 1px solid #F4F4F4;\r\n\tborder-radius: 0px;\r\n\tfont-size: 14px;\r\n\tcolor: #333333;\r\n\twidth: 120px;\r\n\theight: 30px;\r\n\tpadding: 0;\n}\n.add_welfare .form_box {\r\n\tclear: both;\n}\n.add_welfare .form_box .title{\r\n\tpadding: 11px 0px 11px 10px;\r\n    margin-bottom: 20px;\r\n\tcolor: #999999;\r\n\tborder: none;\r\n\tclear: both;\n}\n.add_welfare .form_box .inner {\r\n\tpadding-left: 20px;\n}\n.add_welfare .form_box .plus {\r\n\tmargin-left: 10px;\r\n\tmargin-right: -20px;\r\n    margin-top: 10px;\r\n    float: left;\n}\n.add_welfare .form_box .el-form-item {\r\n\twidth: 45%;\r\n\tfloat: left;\n}\n.add_welfare .form_box .el-form-item.formLeft {\r\n\tclear: both;\n}\n.add_welfare .form_box .el-form-item.formRight {\r\n    margin-left: -50px;\n}\n.add_welfare .el-input__inner {\r\n    border: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    width: 300px;\r\n    height: 40px;\r\n    margin-left: 30px;\n}\n.add_welfare .el-form-item__label {\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    float: left;\r\n    font-size: 14px;\r\n    color: #999999;\r\n    line-height: 1;\r\n    padding: 11px 0px 11px 0;\r\n    box-sizing: border-box;\n}\n.add_welfare .el-input {\r\n    position: relative;\r\n    font-size: 14px;\r\n    width: 330px;\n}\n.add_welfare .el-form-item__error {\r\n    padding-left: 30px;\n}\r\n\r\n"],sourceRoot:""}])},1194:function(e,a,t){var i=t(1074);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(621)("1e376c20",i,!0)},1348:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add_welfare"},[t("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"福利缴纳系数设置",siji:"福利缴纳系数新增"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[t("span",{staticClass:"title-text"},[e._v("福利缴纳系数新增")]),e._v(" "),t("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(a){e.save("insurancePayTemplateData")}}},[e._v("保存")])],1),e._v(" "),t("div",{staticClass:"content-inner"},[t("el-form",{ref:"insurancePayTemplateData",attrs:{rules:e.rules,model:e.insurancePayTemplateData,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"模版名称",prop:"applyName"}},[t("el-input",{model:{value:e.insurancePayTemplateData.applyName,callback:function(a){e.insurancePayTemplateData.applyName=a},expression:"insurancePayTemplateData.applyName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"模版备注"}},[t("el-input",{model:{value:e.insurancePayTemplateData.remark,callback:function(a){e.insurancePayTemplateData.remark=a},expression:"insurancePayTemplateData.remark"}})],1),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("养老保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perEndmRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEndmRate,callback:function(a){e.insurancePayTemplateData.perEndmRate=a},expression:"insurancePayTemplateData.perEndmRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perEndmFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEndmFixed,callback:function(a){e.insurancePayTemplateData.perEndmFixed=a},expression:"insurancePayTemplateData.perEndmFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comEndmRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEndmRate,callback:function(a){e.insurancePayTemplateData.comEndmRate=a},expression:"insurancePayTemplateData.comEndmRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comEndmFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEndmFixed,callback:function(a){e.insurancePayTemplateData.comEndmFixed=a},expression:"insurancePayTemplateData.comEndmFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("医疗保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perMediRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMediRate,callback:function(a){e.insurancePayTemplateData.perMediRate=a},expression:"insurancePayTemplateData.perMediRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perMediFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMediFixed,callback:function(a){e.insurancePayTemplateData.perMediFixed=a},expression:"insurancePayTemplateData.perMediFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comMediRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMediRate,callback:function(a){e.insurancePayTemplateData.comMediRate=a},expression:"insurancePayTemplateData.comMediRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comMediFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMediFixed,callback:function(a){e.insurancePayTemplateData.comMediFixed=a},expression:"insurancePayTemplateData.comMediFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("失业保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perUnemRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perUnemRate,callback:function(a){e.insurancePayTemplateData.perUnemRate=a},expression:"insurancePayTemplateData.perUnemRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perUnemFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perUnemFixed,callback:function(a){e.insurancePayTemplateData.perUnemFixed=a},expression:"insurancePayTemplateData.perUnemFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comUnemRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comUnemRate,callback:function(a){e.insurancePayTemplateData.comUnemRate=a},expression:"insurancePayTemplateData.comUnemRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comUnemFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comUnemFixed,callback:function(a){e.insurancePayTemplateData.comUnemFixed=a},expression:"insurancePayTemplateData.comUnemFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("工伤保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perEmplRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEmplRate,callback:function(a){e.insurancePayTemplateData.perEmplRate=a},expression:"insurancePayTemplateData.perEmplRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perEmplFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEmplFixed,callback:function(a){e.insurancePayTemplateData.perEmplFixed=a},expression:"insurancePayTemplateData.perEmplFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comEmplRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEmplRate,callback:function(a){e.insurancePayTemplateData.comEmplRate=a},expression:"insurancePayTemplateData.comEmplRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comEmplFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEmplFixed,callback:function(a){e.insurancePayTemplateData.comEmplFixed=a},expression:"insurancePayTemplateData.comEmplFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("生育保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perMateRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMateRate,callback:function(a){e.insurancePayTemplateData.perMateRate=a},expression:"insurancePayTemplateData.perMateRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perMateFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMateFixed,callback:function(a){e.insurancePayTemplateData.perMateFixed=a},expression:"insurancePayTemplateData.perMateFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comMateRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMateRate,callback:function(a){e.insurancePayTemplateData.comMateRate=a},expression:"insurancePayTemplateData.comMateRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comMateFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMateFixed,callback:function(a){e.insurancePayTemplateData.comMateFixed=a},expression:"insurancePayTemplateData.comMateFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("住房公积金系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{staticClass:"formLeft",attrs:{label:"个人支付",prop:"perHousRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perHousRate,callback:function(a){e.insurancePayTemplateData.perHousRate=a},expression:"insurancePayTemplateData.perHousRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"perHousFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perHousFixed,callback:function(a){e.insurancePayTemplateData.perHousFixed=a},expression:"insurancePayTemplateData.perHousFixed"}})],1),e._v(" "),t("el-form-item",{staticClass:"formLeft",attrs:{label:"单位支付",prop:"comHousRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comHousRate,callback:function(a){e.insurancePayTemplateData.comHousRate=a},expression:"insurancePayTemplateData.comHousRate"}})],1),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-form-item",{staticClass:"formRight",attrs:{prop:"comHousFixed"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comHousFixed,callback:function(a){e.insurancePayTemplateData.comHousFixed=a},expression:"insurancePayTemplateData.comHousFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"})],1)],1)])],1)},staticRenderFns:[]}},632:function(e,a,t){function i(e){t(1194)}var s=t(236)(t(899),t(1348),i,null,null);e.exports=s.exports},733:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab&&this.pactNo?this.$router.push({name:e,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&e.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"工资查询"===this.erji&&e.push("/historicalSalary_query"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},734:function(e,a,t){a=e.exports=t(620)(!0),a.push([e.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},735:function(e,a,t){var i=t(734);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(621)("becca3a2",i,!0)},736:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},737:function(e,a,t){function i(e){t(735)}var s=t(236)(t(733),t(738),i,"data-v-d69b0f44",null);e.exports=s.exports},738:function(e,a,t){e.exports={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e(),e._v(" "),e._e()],1)],1),e._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:t(736),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},899:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(737),s=function(e){return e&&e.__esModule?e:{default:e}}(i);a.default={data:function(){return{insurancePayTemplateData:{applyNo:"",applyName:"",remark:"",perEndmRate:"0",perEndmFixed:"0",comEndmRate:"0",comEndmFixed:"0",perMediRate:"0",perMediFixed:"0",comMediRate:"0",comMediFixed:"0",perUnemRate:"0",perUnemFixed:"0",comUnemRate:"0",comUnemFixed:"0",perEmplRate:"0",perEmplFixed:"0",comEmplRate:"0",comEmplFixed:"0",perMateRate:"0",perMateFixed:"0",comMateRate:"0",comMateFixed:"0",perHousRate:"0",perHousFixed:"0",comHousRate:"0",comHousFixed:"0"},rules:{applyName:[{required:!0,message:"请输入模版名称",trigger:"blur"}],perEndmRate:[{required:!0,message:"请输入养老保险个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perEndmFixed:[{required:!0,message:"请输入养老保险个人支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comEndmRate:[{required:!0,message:"请输入养老保险单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comEndmFixed:[{required:!0,message:"请输入养老保险单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],perMediRate:[{required:!0,message:"请输入医疗保险个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perMediFixed:[{required:!0,message:"请输入医疗保险个人支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comMediRate:[{required:!0,message:"请输入医疗保险单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comMediFixed:[{required:!0,message:"请输入医疗保险单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],perUnemRate:[{required:!0,message:"请输入失业保险个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perUnemFixed:[{required:!0,message:"请输入失业保险个人支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comUnemRate:[{required:!0,message:"请输入失业保险单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comUnemFixed:[{required:!0,message:"请输入失业保险单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],perEmplRate:[{required:!0,message:"请输入工伤保险个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perEmplFixed:[{required:!0,message:"请输入工伤保险个人支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comEmplRate:[{required:!0,message:"请输入工伤保险单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comEmplFixed:[{required:!0,message:"请输入工伤保险单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],perMateRate:[{required:!0,message:"请输入生育保险个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perMateFixed:[{required:!0,message:"请输入生育保险个人固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comMateRate:[{required:!0,message:"请输入生育保险单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comMateFixed:[{required:!0,message:"请输入生育保险单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],perHousRate:[{required:!0,message:"请输入住房公积金个人支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],perHousFixed:[{required:!0,message:"请输入住房公积金个人支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}],comHousRate:[{required:!0,message:"请输入住房公积金单位支付系数",trigger:"blur"},{pattern:/^\d{1,2}(\.\d{1,6})?$/,message:"请输入一百以内的数，可精确到小数点后6位"}],comHousFixed:[{required:!0,message:"请输入住房公积金单位支付固定金额",trigger:"blur"},{pattern:/^\d{1,14}(\.\d{1,2})?$/,message:"可精确到小数点后2位的数"}]}}},components:{current:s.default},methods:{save:function(e){var a=this;a.$refs[e].validate(function(e){if(!e)return!1;var t={applyName:a.insurancePayTemplateData.applyName,remark:a.insurancePayTemplateData.remark,perEndmRate:a.insurancePayTemplateData.perEndmRate,perEndmFixed:a.insurancePayTemplateData.perEndmFixed,comEndmRate:a.insurancePayTemplateData.comEndmRate,comEndmFixed:a.insurancePayTemplateData.comEndmFixed,perMediRate:a.insurancePayTemplateData.perMediRate,perMediFixed:a.insurancePayTemplateData.perMediFixed,comMediRate:a.insurancePayTemplateData.comMediRate,comMediFixed:a.insurancePayTemplateData.comMediFixed,perUnemRate:a.insurancePayTemplateData.perUnemRate,perUnemFixed:a.insurancePayTemplateData.perUnemFixed,comUnemRate:a.insurancePayTemplateData.comUnemRate,comUnemFixed:a.insurancePayTemplateData.comUnemFixed,perEmplRate:a.insurancePayTemplateData.perEmplRate,perEmplFixed:a.insurancePayTemplateData.perEmplFixed,comEmplRate:a.insurancePayTemplateData.comEmplRate,comEmplFixed:a.insurancePayTemplateData.comEmplFixed,perMateRate:a.insurancePayTemplateData.perMateRate,perMateFixed:a.insurancePayTemplateData.perMateFixed,comMateRate:a.insurancePayTemplateData.comMateRate,comMateFixed:a.insurancePayTemplateData.comMateFixed,perHousRate:a.insurancePayTemplateData.perHousRate,perHousFixed:a.insurancePayTemplateData.perHousFixed,comHousRate:a.insurancePayTemplateData.comHousRate,comHousFixed:a.insurancePayTemplateData.comHousFixed};for(var i in t)i.match("Rate")&&(t[i]=t[i]/100);a.addInsurancePayTemplate(t)})},addInsurancePayTemplate:function(e){var a=this;a.$axios.post("iem_hrm/InsurancePayTemplate/addInsurancePayTemplate",e).then(function(e){"S00000"===e.data.code&&(a.$message({message:"福利缴纳系数新增成功",type:"success"}),a.$router.push("/welfare_coefficient"))}).catch(function(e){console.log("error")})}}}}});
//# sourceMappingURL=88.c8208e62108d78bb99f1.js.map