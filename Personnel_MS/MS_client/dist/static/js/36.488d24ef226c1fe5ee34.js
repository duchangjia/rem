webpackJsonp([36],{551:function(e,a,t){function n(e){t(784)}var i=t(195)(t(632),t(870),n,null,null);e.exports=i.exports},601:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},602:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"业务参数"===this.erji&&e.push("/argument_2"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/user-info"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},603:function(e,a,t){a=e.exports=t(540)(!0),a.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},604:function(e,a,t){var n=t(603);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(541)("488e4eea",n,!0)},605:function(e,a,t){function n(e){t(604)}var i=t(195)(t(602),t(606),n,"data-v-d69b0f44",null);e.exports=i.exports},606:function(e,a,t){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"location-wrapper"},[n("el-row",[n("el-col",{attrs:{span:22}},[n("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),n("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[n("img",{staticClass:"pic",attrs:{src:t(601),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},632:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(605),i=function(e){return e&&e.__esModule?e:{default:e}}(n);a.default={data:function(){return{insurancePayTemplateData:{applyNo:"",applyName:"",remark:"",perEndmRate:"",perEndmFixed:"",comEndmRate:"",comEndmFixed:"",perMediRate:"",perMediFixed:"",comMediRate:"",comMediFixed:"",perUnemRate:"",perUnemFixed:"",comUnemRate:"",comUnemFixed:"",perEmplRate:"",perEmplFixed:"",comEmplRate:"",comEmplFixed:"",perMateRate:"",perMateFixed:"",comMateRate:"",comMateFixed:"",perHousRate:"",perHousFixed:"",comHousRate:"",comHousFixed:""},rules:{applyName:[{required:!0,message:"请输入模版名称",trigger:"blur"}],perEndmRate:[{required:!0,message:"请输入养老保险个人支付系数",trigger:"blur"}],comEndmRate:[{required:!0,message:"请输入养老保险单位支付系数",trigger:"blur"}],perMediRate:[{required:!0,message:"请输入医疗保险个人支付系数",trigger:"blur"}],comMediRate:[{required:!0,message:"请输入医疗保险单位支付系数",trigger:"blur"}],perUnemRate:[{required:!0,message:"请输入失业保险个人支付系数",trigger:"blur"}],comUnemRate:[{required:!0,message:"请输入失业保险单位支付系数",trigger:"blur"}],perEmplRate:[{required:!0,message:"请输入工伤保险个人支付系数",trigger:"blur"}],comEmplRate:[{required:!0,message:"请输入工伤保险单位支付系数",trigger:"blur"}],perMateRate:[{required:!0,message:"请输入生育保险个人支付系数",trigger:"blur"}],comMateRate:[{required:!0,message:"请输入生育保险单位支付系数",trigger:"blur"}],perHousRate:[{required:!0,message:"请输入住房公积金个人支付系数",trigger:"blur"}],comHousRate:[{required:!0,message:"请输入住房公积金单位支付系数",trigger:"blur"}]}}},components:{current:i.default},methods:{save:function(e){var a=this;a.$refs[e].validate(function(e){if(!e)return a.$message.error("新增失败"),!1;var t={applyName:a.insurancePayTemplateData.applyName,remark:a.insurancePayTemplateData.remark,perEndmRate:a.insurancePayTemplateData.perEndmRate,perEndmFixed:a.insurancePayTemplateData.perEndmFixed,comEndmRate:a.insurancePayTemplateData.comEndmRate,comEndmFixed:a.insurancePayTemplateData.comEndmFixed};a.addInsurancePayTemplate(t)})},addInsurancePayTemplate:function(e){var a=this;a.$axios.post("iem_hrm/addInsurancePayTemplate",e).then(function(e){console.log(e),a.$message({message:"福利缴纳系数新增成功",type:"success"})}).catch(function(e){a.$message.error("新增失败")})}}}},722:function(e,a,t){a=e.exports=t(540)(!0),a.push([e.i,'.add_welfare{padding-left:20px;padding-bottom:20px;width:100%}.add_welfare .content{width:100%;padding:0 20px;background:#fff;clear:both}.add_welfare .content .title{border-bottom:1px solid #eee}.add_welfare .content .title .title-text{display:inline-block;position:relative;padding:29px 0;font-size:16px}.add_welfare .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.add_welfare .content-inner{padding:40px 0}.add_welfare .conserve{float:right;margin-top:20px;background:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;font-size:14px;color:#333;width:120px;height:40px}.add_welfare .form_box .title{padding:11px 0 11px 10px;margin-bottom:20px;color:#999;background:#f4f4f4;border-top:1px solid #eee}.add_welfare .form_box .plus{margin-left:10px;margin-right:-20px}.add_welfare .el-input__inner{border:1px solid #eee;color:#999;width:300px;height:40px;margin-left:30px}.add_welfare .el-form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#999;line-height:1;padding:11px 0;box-sizing:border-box}.add_welfare .el-input{position:relative;font-size:14px;width:330px}.add_welfare .el-form-item__error{padding-left:30px}',"",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_welfare.vue"],names:[],mappings:"AACA,aACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,sBACC,WAAY,AACZ,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,6BACA,4BAAiC,CAChC,AACD,yCACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,cAAgB,CAChB,AACD,+CACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AACD,4BACC,cAAkB,CAClB,AACD,uBACC,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,WAAa,CACb,AACD,8BACC,yBAA4B,AACzB,mBAAoB,AACvB,WAAe,AACf,mBAAoB,AACpB,yBAA8B,CAC9B,AACD,6BACC,iBAAkB,AAClB,kBAAoB,CACpB,AACD,8BACI,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACb,YAAa,AACb,gBAAkB,CACrB,AACD,kCACI,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,WAAe,AACf,cAAe,AACf,eAAyB,AACzB,qBAAuB,CAC1B,AACD,uBACI,kBAAmB,AACnB,eAAgB,AAChB,WAAa,CAChB,AACD,kCACI,iBAAmB,CACtB",file:"add_welfare.vue",sourcesContent:["\n.add_welfare {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.add_welfare .content {\r\n\twidth: 100%;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.add_welfare .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.add_welfare .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 29px 0px;\r\n\tfont-size: 16px;\n}\n.add_welfare .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.add_welfare .content-inner {\r\n\tpadding: 40px 0px;\n}\n.add_welfare .conserve {\r\n\tfloat: right;\r\n\tmargin-top: 20px;\r\n\tbackground: #F4F4F4;\r\n\tborder: 1px solid #F4F4F4;\r\n\tborder-radius: 0px;\r\n\tfont-size: 14px;\r\n\tcolor: #333333;\r\n\twidth: 120px;\r\n\theight: 40px;\n}\n.add_welfare .form_box .title{\r\n\tpadding: 11px 0px 11px 10px;\r\n    margin-bottom: 20px;\r\n\tcolor: #999999;\r\n\tbackground: #F4F4F4;\r\n\tborder-top: 1px solid #EEEEEE;\n}\n.add_welfare .form_box .plus {\r\n\tmargin-left: 10px;\r\n\tmargin-right: -20px;\n}\n.add_welfare .el-input__inner {\r\n    border: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    width: 300px;\r\n    height: 40px;\r\n    margin-left: 30px;\n}\n.add_welfare .el-form-item__label {\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    float: left;\r\n    font-size: 14px;\r\n    color: #999999;\r\n    line-height: 1;\r\n    padding: 11px 0px 11px 0;\r\n    box-sizing: border-box;\n}\n.add_welfare .el-input {\r\n    position: relative;\r\n    font-size: 14px;\r\n    width: 330px;\n}\n.add_welfare .el-form-item__error {\r\n    padding-left: 30px;\n}\r\n"],sourceRoot:""}])},784:function(e,a,t){var n=t(722);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(541)("0fdbdf3e",n,!0)},870:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add_welfare"},[t("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"福利缴纳系数设置",siji:"福利缴纳系数新增"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[t("span",{staticClass:"title-text"},[e._v("福利缴纳系数新增")]),e._v(" "),t("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(a){e.save("insurancePayTemplateData")}}},[e._v("保存")])],1),e._v(" "),t("div",{staticClass:"content-inner"},[t("el-form",{ref:"insurancePayTemplateData",attrs:{rules:e.rules,model:e.insurancePayTemplateData,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"模版名称",prop:"applyName"}},[t("el-input",{model:{value:e.insurancePayTemplateData.applyName,callback:function(a){e.insurancePayTemplateData.applyName=a},expression:"insurancePayTemplateData.applyName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"模版备注"}},[t("el-input",{model:{value:e.insurancePayTemplateData.remark,callback:function(a){e.insurancePayTemplateData.remark=a},expression:"insurancePayTemplateData.remark"}})],1),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("养老保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perEndmRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEndmRate,callback:function(a){e.insurancePayTemplateData.perEndmRate=a},expression:"insurancePayTemplateData.perEndmRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEndmFixed,callback:function(a){e.insurancePayTemplateData.perEndmFixed=a},expression:"insurancePayTemplateData.perEndmFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comEndmRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEndmRate,callback:function(a){e.insurancePayTemplateData.comEndmRate=a},expression:"insurancePayTemplateData.comEndmRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEndmFixed,callback:function(a){e.insurancePayTemplateData.comEndmFixed=a},expression:"insurancePayTemplateData.comEndmFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("医疗保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perMediRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMediRate,callback:function(a){e.insurancePayTemplateData.perMediRate=a},expression:"insurancePayTemplateData.perMediRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMediFixed,callback:function(a){e.insurancePayTemplateData.perMediFixed=a},expression:"insurancePayTemplateData.perMediFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comMediRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMediRate,callback:function(a){e.insurancePayTemplateData.comMediRate=a},expression:"insurancePayTemplateData.comMediRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMediFixed,callback:function(a){e.insurancePayTemplateData.comMediFixed=a},expression:"insurancePayTemplateData.comMediFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("失业保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perUnemRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perUnemRate,callback:function(a){e.insurancePayTemplateData.perUnemRate=a},expression:"insurancePayTemplateData.perUnemRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perUnemFixed,callback:function(a){e.insurancePayTemplateData.perUnemFixed=a},expression:"insurancePayTemplateData.perUnemFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comUnemRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comUnemRate,callback:function(a){e.insurancePayTemplateData.comUnemRate=a},expression:"insurancePayTemplateData.comUnemRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comUnemFixed,callback:function(a){e.insurancePayTemplateData.comUnemFixed=a},expression:"insurancePayTemplateData.comUnemFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("工伤保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perEmplRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEmplRate,callback:function(a){e.insurancePayTemplateData.perEmplRate=a},expression:"insurancePayTemplateData.perEmplRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perEmplFixed,callback:function(a){e.insurancePayTemplateData.perEmplFixed=a},expression:"insurancePayTemplateData.perEmplFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comEmplRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEmplRate,callback:function(a){e.insurancePayTemplateData.comEmplRate=a},expression:"insurancePayTemplateData.comEmplRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comEmplFixed,callback:function(a){e.insurancePayTemplateData.comEmplFixed=a},expression:"insurancePayTemplateData.comEmplFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("生育保险系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perMateRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMateRate,callback:function(a){e.insurancePayTemplateData.perMateRate=a},expression:"insurancePayTemplateData.perMateRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perMateFixed,callback:function(a){e.insurancePayTemplateData.perMateFixed=a},expression:"insurancePayTemplateData.perMateFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comMateRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMateRate,callback:function(a){e.insurancePayTemplateData.comMateRate=a},expression:"insurancePayTemplateData.comMateRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comMateFixed,callback:function(a){e.insurancePayTemplateData.comMateFixed=a},expression:"insurancePayTemplateData.comMateFixed"}})],1)],1)]),e._v(" "),t("div",{staticClass:"form_box"},[t("div",{staticClass:"title"},[e._v("住房公积金系数")]),e._v(" "),t("div",{staticClass:"inner"},[t("el-form-item",{attrs:{label:"个人支付",prop:"perHousRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perHousRate,callback:function(a){e.insurancePayTemplateData.perHousRate=a},expression:"insurancePayTemplateData.perHousRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.perHousFixed,callback:function(a){e.insurancePayTemplateData.perHousFixed=a},expression:"insurancePayTemplateData.perHousFixed"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个人支付",prop:"comHousRate"}},[t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comHousRate,callback:function(a){e.insurancePayTemplateData.comHousRate=a},expression:"insurancePayTemplateData.comHousRate"}}),e._v(" "),t("span",{staticClass:"plus"},[e._v("%+")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:""},model:{value:e.insurancePayTemplateData.comHousFixed,callback:function(a){e.insurancePayTemplateData.comHousFixed=a},expression:"insurancePayTemplateData.comHousFixed"}})],1)],1)])],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=36.488d24ef226c1fe5ee34.js.map