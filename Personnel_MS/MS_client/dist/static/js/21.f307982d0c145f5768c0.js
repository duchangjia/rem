webpackJsonp([21],{574:function(t,e,a){function s(t){a(745)}var i=a(194)(a(656),a(831),s,null,null);t.exports=i.exports},600:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},601:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},602:function(t,e,a){e=t.exports=a(539)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},603:function(t,e,a){var s=a(602);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(540)("488e4eea",s,!0)},604:function(t,e,a){function s(t){a(603)}var i=a(194)(a(601),a(605),s,"data-v-d69b0f44",null);t.exports=i.exports},605:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(600),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},656:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(604),i=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{labelPosition:"right",activeName:"changePactMsg",pactNo:"",changeId:"",basicPactMsg:{},editPChangeMsg:{},rules:{changeTime:[{type:"date",required:!0,message:"请选择变更日期",trigger:"change"}],changeType:[{required:!0,message:"请选择变更类别",trigger:"blur"}],changeContent:[{required:!0,message:"请输入变更内容",trigger:"blur"}]}}},components:{current:i.default},created:function(){this.pactNo=this.$route.params.pactNo,this.changeId=this.$route.params.changeId,this.getPactDtl(this.pactNo),this.getPChangeDtl()},methods:{getPactDtl:function(t){var e=this,a={pactNo:e.pactNo};e.$axios.get("/iem_hrm/pact/queryPactDetail",{params:a}).then(function(t){e.basicPactMsg=t.data.data}).catch(function(){console.log("error")})},getPChangeDtl:function(t){var e=this,a={pactNo:e.pactNo,changeId:e.changeId};e.$axios.get("/iem_hrm/pact/queryPactChangeDetail",{params:a}).then(function(t){console.log(t),e.editPChangeMsg=t.data.data}).catch(function(){console.log("error")})},handleSave:function(){var t=this,e={};e.pactNo=this.pactNo,e.changeId=this.changeId,e.changeTime=this.editPChangeMsg.changeTime,e.changeType=this.editPChangeMsg.changeType,e.changeContent=this.editPChangeMsg.changeContent,this.$axios.post("/iem_hrm/pact/updatePactChange",e).then(function(e){console.log(e),"S00000"==e.data.code?t.$router.push({name:"personnel_contract",params:{pactNo:t.pactNo,activeTab:t.activeName}}):t.$message.error("合同变更修改失败！")}).catch(function(){t.$message.error("合同变更修改失败！")})}}}},683:function(t,e,a){e=t.exports=a(539)(!0),e.push([t.i,".edit_pactChange{padding:0 0 20px 20px}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/edit_pactChange.vue"],names:[],mappings:"AACA,iBACE,qBAAuB,CACxB",file:"edit_pactChange.vue",sourcesContent:["\n.edit_pactChange {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},745:function(t,e,a){var s=a(683);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(540)("2c489b9e",s,!0)},831:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit_pactChange"},[a("current",{attrs:{yiji:"人事事务",erji:"人事合同",sanji:"合同详情",siji:"合同变更修改",activeTab:t.activeName}}),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"titlebar"},[a("span",{staticClass:"title-text"},[t._v("合同变更修改")]),t._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-form",{attrs:{inline:!0,model:t.basicPactMsg,"label-position":t.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同编号",prop:"pactNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.pactNo,callback:function(e){t.basicPactMsg.pactNo=e},expression:"basicPactMsg.pactNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同名称",prop:"pactName"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.pactName,callback:function(e){t.basicPactMsg.pactName=e},expression:"basicPactMsg.pactName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同签约时间",prop:"signTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:t.basicPactMsg.signTime,callback:function(e){t.basicPactMsg.signTime=e},expression:"basicPactMsg.signTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同终止时间",prop:"pactStopTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!0},model:{value:t.basicPactMsg.pactStopTime,callback:function(e){t.basicPactMsg.pactStopTime=e},expression:"basicPactMsg.pactStopTime"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-col",{staticClass:"item-title",attrs:{span:24}},[t._v("员工信息")]),t._v(" "),a("el-form",{staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:t.basicPactMsg,"label-position":t.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号",prop:"userNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.userNo,callback:function(e){t.basicPactMsg.userNo=e},expression:"basicPactMsg.userNo"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"custName"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.custName,callback:function(e){t.basicPactMsg.custName=e},expression:"basicPactMsg.custName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证",prop:"cert"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.cert,callback:function(e){t.basicPactMsg.cert=e},expression:"basicPactMsg.cert"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司",prop:"organName"}},[a("el-select",{attrs:{disabled:!0},model:{value:t.basicPactMsg.organName,callback:function(e){t.basicPactMsg.organName=e},expression:"basicPactMsg.organName"}},[a("el-option",{attrs:{label:"总公司",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"深圳分公司",value:"0"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门",prop:"derpName"}},[a("el-select",{attrs:{disabled:!0},model:{value:t.basicPactMsg.derpName,callback:function(e){t.basicPactMsg.derpName=e},expression:"basicPactMsg.derpName"}},[a("el-option",{attrs:{label:"财务部",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"技术部",value:"0"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"岗位",prop:"custPost"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.custPost,callback:function(e){t.basicPactMsg.custPost=e},expression:"basicPactMsg.custPost"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职务",prop:"custClass"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.custClass,callback:function(e){t.basicPactMsg.custClass=e},expression:"basicPactMsg.custClass"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职级",prop:"rank"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.basicPactMsg.rank,callback:function(e){t.basicPactMsg.rank=e},expression:"basicPactMsg.rank"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-col",{staticClass:"item-title",attrs:{span:24}},[t._v("合同变更信息")]),t._v(" "),a("el-form",{ref:"editPChangeMsg",staticStyle:{"margin-top":"0",overflow:"visible"},attrs:{inline:!0,model:t.editPChangeMsg,rules:t.rules,"label-position":t.labelPosition,"label-width":"110px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"变更时间",prop:"changeTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.editPChangeMsg.changeTime,callback:function(e){t.editPChangeMsg.changeTime=e},expression:"editPChangeMsg.changeTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"变更类别",prop:"changeType"}},[a("el-select",{model:{value:t.editPChangeMsg.changeType,callback:function(e){t.editPChangeMsg.changeType=e},expression:"editPChangeMsg.changeType"}},[a("el-option",{attrs:{label:"条款变更",value:"1"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"变更内容",prop:"changeContent"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.editPChangeMsg.changeContent,callback:function(e){t.editPChangeMsg.changeContent=e},expression:"editPChangeMsg.changeContent"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"附件",prop:"attachm"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"auto-upload":!1}},[a("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=21.f307982d0c145f5768c0.js.map