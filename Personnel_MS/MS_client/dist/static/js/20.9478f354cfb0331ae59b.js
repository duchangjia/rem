webpackJsonp([20],{576:function(e,t,a){function s(e){a(767)}var i=a(195)(a(658),a(853),s,null,null);e.exports=i.exports},601:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},602:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"业务参数"===this.erji&&e.push("/argument_2"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/user-info"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},603:function(e,t,a){t=e.exports=a(540)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},604:function(e,t,a){var s=a(603);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(541)("488e4eea",s,!0)},605:function(e,t,a){function s(e){a(604)}var i=a(195)(a(602),a(606),s,"data-v-d69b0f44",null);e.exports=i.exports},606:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(601),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},658:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(605),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{labelPosition:"right",activeName:"renewPactMsg",pactNo:"",renewId:"",basicPactMsg:{},editPRenewMsg:{},rules:{renewTime:[{required:!0,message:"请选择续签生效日期",trigger:"blur"}],renewEndTime:[{required:!0,message:"续签失效日期必须大于续签生效日期",trigger:"blur"}],renewType:[{required:!0,message:"请选择续签类别",trigger:"blur"}],renewContent:[{required:!0,message:"请输入续签内容",trigger:"blur"}]}}},components:{current:i.default},created:function(){this.pactNo=this.$route.params.pactNo,this.renewId=this.$route.params.renewId,this.getPactDtl(this.pactNo),this.getPChangeDtl()},methods:{getPactDtl:function(e){var t=this,a={pactNo:t.pactNo};t.$axios.get("ifdp/querPactDtl",{params:a}).then(function(e){t.basicPactMsg=e.data.data}).catch(function(){console.log("error")})},getPChangeDtl:function(e){var t=this,a={pactNo:t.pactNo,renewId:t.renewId};t.$axios.get("ifdp/queryPChangeDtl",{params:a}).then(function(e){console.log(e),t.editPRenewMsg=e.data.data}).catch(function(){console.log("error")})},handleAdd:function(){var e=this,t={};t.pactNo=this.pactNo,t.renewId=this.renewId,t.renewTime=this.editPRenewMsg.renewTime,t.renewType=this.editPRenewMsg.renewType,t.renewContent=this.editPRenewMsg.renewContent,this.$axios.post("/iem_hrm/modPRenew",t).then(function(t){console.log(t),"S00000"==t.data.code?e.$router.push({name:"personnel_contract",params:{pactNo:e.pactNo,activeTab:e.activeName}}):e.$message.error("合同续签修改失败！")}).catch(function(){e.$message.error("合同续签修改失败！")})}}}},705:function(e,t,a){t=e.exports=a(540)(!0),t.push([e.i,".edit_pactRenew{padding:0 0 20px 20px}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/edit_pactRenew.vue"],names:[],mappings:"AACA,gBACE,qBAAuB,CACxB",file:"edit_pactRenew.vue",sourcesContent:["\n.edit_pactRenew {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},767:function(e,t,a){var s=a(705);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(541)("d55c3934",s,!0)},853:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit_pactRenew"},[a("current",{attrs:{yiji:"人事事务",erji:"人事合同",sanji:"合同详情",siji:"合同续签修改",activeTab:e.activeName}}),e._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"titlebar"},[a("span",{staticClass:"title-text"},[e._v("合同续签修改")]),e._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("保存")])],1),e._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-form",{attrs:{inline:!0,model:e.basicPactMsg,"label-position":e.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同编号",prop:"pactNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.pactNo,callback:function(t){e.basicPactMsg.pactNo=t},expression:"basicPactMsg.pactNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同名称",prop:"pactName"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.pactName,callback:function(t){e.basicPactMsg.pactName=t},expression:"basicPactMsg.pactName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上次生效时间",prop:"signTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:e.basicPactMsg.signTime,callback:function(t){e.basicPactMsg.signTime=t},expression:"basicPactMsg.signTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上次到期时间",prop:"pactStopTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:e.basicPactMsg.pactStopTime,callback:function(t){e.basicPactMsg.pactStopTime=t},expression:"basicPactMsg.pactStopTime"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("员工信息")]),e._v(" "),a("el-form",{staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:e.basicPactMsg,"label-position":e.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号",prop:"userNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.userNo,callback:function(t){e.basicPactMsg.userNo=t},expression:"basicPactMsg.userNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"custName"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.custName,callback:function(t){e.basicPactMsg.custName=t},expression:"basicPactMsg.custName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证",prop:"cert"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.cert,callback:function(t){e.basicPactMsg.cert=t},expression:"basicPactMsg.cert"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司",prop:"organName"}},[a("el-select",{attrs:{disabled:!0},model:{value:e.basicPactMsg.organName,callback:function(t){e.basicPactMsg.organName=t},expression:"basicPactMsg.organName"}},[a("el-option",{attrs:{label:"总公司",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"深圳分公司",value:"0"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门",prop:"derpName"}},[a("el-select",{attrs:{disabled:!0},model:{value:e.basicPactMsg.derpName,callback:function(t){e.basicPactMsg.derpName=t},expression:"basicPactMsg.derpName"}},[a("el-option",{attrs:{label:"财务部",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"技术部",value:"0"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"岗位",prop:"custPost"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.custPost,callback:function(t){e.basicPactMsg.custPost=t},expression:"basicPactMsg.custPost"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职务",prop:"custClass"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.custClass,callback:function(t){e.basicPactMsg.custClass=t},expression:"basicPactMsg.custClass"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职级",prop:"rank"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.basicPactMsg.rank,callback:function(t){e.basicPactMsg.rank=t},expression:"basicPactMsg.rank"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("合同续签信息")]),e._v(" "),a("el-form",{ref:"editPRenewMsg",staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:e.editPRenewMsg,rules:e.rules,"label-position":e.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"续签生效时间",prop:"renewTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editPRenewMsg.renewTime,callback:function(t){e.editPRenewMsg.renewTime=t},expression:"editPRenewMsg.renewTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"续签失效时间",prop:"renewEndTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editPRenewMsg.renewTime,callback:function(t){e.editPRenewMsg.renewTime=t},expression:"editPRenewMsg.renewTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"续签类别",prop:"renewType"}},[a("el-select",{model:{value:e.editPRenewMsg.renewType,callback:function(t){e.editPRenewMsg.renewType=t},expression:"editPRenewMsg.renewType"}},[a("el-option",{attrs:{label:"合同延期",value:"1"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"续签内容",prop:"renewContent"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.editPRenewMsg.renewContent,callback:function(t){e.editPRenewMsg.renewContent=t},expression:"editPRenewMsg.renewContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"附件",prop:"attachm"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[a("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.9478f354cfb0331ae59b.js.map