webpackJsonp([2],{1062:function(t,e,s){e=t.exports=s(620)(!0),e.push([t.i,".historicalsalary_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/historicalSalary_Mgmt/historicalSalary_query.vue"],names:[],mappings:"AACA,uBACI,qBAAuB,CAC1B",file:"historicalSalary_query.vue",sourcesContent:["\n.historicalsalary_mgmt {\r\n    padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1182:function(t,e,s){var a=s(1062);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(621)("885cfb74",a,!0)},1337:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historicalsalary_mgmt"},[s("current",{attrs:{yiji:"历史薪酬查询",erji:"工资查询"}}),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("el-col",{staticClass:"titlebar",attrs:{span:24}},[s("span",{staticClass:"title-text"},[t._v("工资查询")]),t._v(" "),s("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleExport}},[t._v("导出")])],1),t._v(" "),s("el-col",{staticClass:"querybar",staticStyle:{padding:"10px 0 0 0"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:t.filters}},[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"类别"}},[s("el-select",{attrs:{clearable:"",placeholder:"请选择类别"},model:{value:t.filters.batchType,callback:function(e){t.filters.batchType=e},expression:"filters.batchType"}},t._l(t.options,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"名称"}},[s("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.filters.batchName,callback:function(e){t.filters.batchName=e},expression:"filters.batchName"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"工号"}},[s("el-input",{attrs:{placeholder:"请输入工号"},model:{value:t.filters.userNo,callback:function(e){t.filters.userNo=e},expression:"filters.userNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filters.userName,callback:function(e){t.filters.userName=e},expression:"filters.userName"}})],1)],1),t._v(" "),s("el-col",{staticClass:"button-wrap",attrs:{span:24}},[s("el-button",{staticClass:"resetBtn",on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),s("el-button",{staticClass:"queryBtn",on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-table",{attrs:{stripe:"",data:t.assetInfoList,border:""}},[s("el-table-column",{attrs:{align:"center",prop:"batchName",label:"名称"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"userNo",label:"工号"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"wagesBase",label:"基础工资"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"wagesPerf",label:"绩效工资"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"otherPension",label:"其他补贴"}}),t._v(" "),s("el-table-column",{staticStyle:{"text-wrap":"normal"},attrs:{align:"center",prop:"payCut",label:"当月扣款(-)"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"payBonus",label:"当月奖金(+)"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"payAdjust",label:"当月调整(+)"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"perPublicFund",label:"公积金"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"perSocialPay",label:"社保"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"payTax",label:"个人扣税部分"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"realHair",label:"合计(实发)"}})],1),t._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}},239:function(t,e,s){function a(t){s(1182)}var i=s(236)(s(946),s(1337),a,null,null);t.exports=i.exports},733:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab&&this.pactNo?this.$router.push({name:t,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&t.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"工资查询"===this.erji&&t.push("/historicalSalary_query"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},734:function(t,e,s){e=t.exports=s(620)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},735:function(t,e,s){var a=s(734);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(621)("becca3a2",a,!0)},736:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},737:function(t,e,s){function a(t){s(735)}var i=s(236)(s(733),s(738),a,"data-v-d69b0f44",null);t.exports=i.exports},738:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(736),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},946:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(737),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{filters:{batchType:"",batchName:"",userNo:"",userName:""},pageNum:1,pageSize:10,totalRows:30,exportParams:{},assetInfoList:[],options:[{value:"01",label:"工资"},{value:"02",label:"奖金"},{value:"03",label:"福利"}],value:""}},components:{current:i.default},created:function(){this.filters.userNo="",this.filters.userName="",this.filters.batchType="",this.filters.batchName="",this.getHistoricalSalary()},methods:{getHistoricalSalary:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,userNo:t.filters.userNo,userName:t.filters.userName,batchType:t.filters.batchType,batchName:t.filters.batchName};console.log("batchType:"+e.batchType),console.log("pageNum:"+e.pageNum+"pageSize"+e.pageSize),t.$axios.get("/iem_hrm/EpCustPayFlow/queryEpCustPayFlows",{params:e}).then(function(s){console.log(s),t.assetInfoList=s.data.data.list,t.pageNum=s.data.data.pageNum,t.pageSize=s.data.data.pageSize,t.totalRows=s.data.data.total,t.exportParams=e,console.log(t.assetInfoList)}).catch(function(){console.log("error")})},handleCurrentChange:function(t){this.pageNum=t,this.getHistoricalSalary()},handleQuery:function(){this.getHistoricalSalary()},handleExport:function(){var t=this;console.log("执行导出"+this.exportParams.pageNum),this.$axios.get("/iem_hrm/EpCustPayFlow/exportEpCustPayFlows",{params:this.exportParams,responseType:"blob"}).then(function(t){console.log(t);var e=t.data;if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,"历史薪酬查询.xlsx");else{var s=document.createElement("a");s.download="历史薪酬查询.xlsx",s.style.display="none",s.href=URL.createObjectURL(e),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}).catch(function(e){console.error(e),t.$message({message:"下载失败",type:"error"})})},handleReset:function(){this.filters.userNo="",this.filters.userName="",this.filters.batchType="",this.filters.batchName=""}}}}});
//# sourceMappingURL=2.5db19cf6e9f0d09d5b6d.js.map