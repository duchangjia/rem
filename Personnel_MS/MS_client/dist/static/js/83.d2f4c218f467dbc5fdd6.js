webpackJsonp([83],{1021:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(773),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={data:function(){return{filters:{userNo:"",custName:""},pageNum:1,pageSize:10,totalRows:1,payBaseInfoList:[],token:{Authorization:"Bearer "+localStorage.getItem("access_token")}}},components:{current:i.default},created:function(){this.filters.userNo="",this.filters.custName="",this.getPayBaseInfoList()},methods:{getPayBaseInfoList:function(){var e=this,t={pageNum:e.pageNum,pageSize:e.pageSize,userNo:e.filters.userNo,custName:e.filters.custName};e.$axios.get("/iem_hrm/pay/queryPayBaseInfoList",{params:t}).then(function(t){console.log(t),e.payBaseInfoList=t.data.data.models,e.totalRows=t.data.data.total}).catch(function(){console.log("error")})},handlePayBaseInfoDetail:function(e,t){this.$router.push({name:"detail_payBaseInfo",params:{userNo:t.userNo}})},handleCurrentChange:function(e){this.pageNum=e,this.getPayBaseInfoList()},handleReset:function(){this.filters.userNo="",this.filters.custName=""},handleQuery:function(){this.getPayBaseInfoList()},changeUpload:function(e,t){console.log(e)},successUpload:function(e,t,s){console.log("import_response",e),"S00000"===e.code?this.$message({message:"操作成功",type:"success"}):this.$message({message:e,type:"info"})},handleExport:function(){this.exportFile()},exportFile:function(){var e=this,t={userNo:e.filters.userNo,custName:e.filters.custName};e.$axios.get("iem_hrm/pay/payBaseDataExport",{params:t,responseType:"blob"}).then(function(e){console.log("response",e);var t=e.data;if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,"薪酬基本信息.xlsx");else{var s=document.createElement("a");s.download="薪酬基本信息.xlsx",s.style.display="none",s.href=URL.createObjectURL(t),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}).catch(function(t){console.error(t),e.$message({message:"导出薪酬基数信息失败",type:"error"})})},handleDownloadTemplate:function(){this.downloadFile()},downloadFile:function(){var e=this;e.$axios.get("iem_hrm/file/downloadTemplate?templateName=薪酬基本信息模板",{responseType:"blob"}).then(function(e){console.log(e);var t=e.data;if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,"薪酬基本信息模板.xlsx");else{var s=document.createElement("a");s.download="薪酬基本信息模板.xlsx",s.style.display="none",s.href=URL.createObjectURL(t),document.body.appendChild(s),s.click(),document.body.removeChild(s)}}).catch(function(t){console.error(t),e.$message({message:"下载模版失败",type:"error"})})},handleAdd:function(){this.$router.push({name:"add_payBaseInfo"})},handleEdit:function(e,t){this.$router.push({name:"edit_payBaseInfo",params:{userNo:t.userNo}})},handleDelete:function(e,t){var s=this;this.$confirm("此操作将会删除该条薪酬基数信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.$axios.delete("/iem_hrm/pay/deletePayBaseInfo/"+t.userNo).then(function(e){console.log(e),"S00000"==e.data.code?(s.$message({type:"success",message:"操作成功!"}),s.getPayBaseInfoList()):s.$message.error("操作失败！")}).catch(function(){s.$message.error("操作失败！")})}).catch(function(){s.$message("您已取消操作！")})}}}},1168:function(e,t,s){t=e.exports=s(643)(!0),t.push([e.i,".paybaseinfo_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["E:/workSpace/item/iem/Personnel_MS/MS_client/src/components/pages/payWelfare_Mgmt/payBaseInfo/query_payBaseInfo.vue"],names:[],mappings:"AACA,kBACE,qBAAuB,CACxB",file:"query_payBaseInfo.vue",sourcesContent:["\n.paybaseinfo_mgmt {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1296:function(e,t,s){var a=s(1168);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(644)("e72c41e0",a,!0)},1452:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"paybaseinfo_mgmt"},[s("current",{attrs:{yiji:"薪酬福利",erji:"薪酬基数设置"}}),e._v(" "),s("div",{staticClass:"content-wrapper"},[s("el-col",{staticClass:"titlebar",attrs:{span:24}},[s("span",{staticClass:"title-text"},[e._v("薪酬基数设置")]),e._v(" "),s("div",{staticStyle:{float:"right"}},[s("el-upload",{ref:"upload",staticClass:"upload-demo span-icon",attrs:{name:"file",action:"/iem_hrm/pay/payBaseInfoImport","on-change":e.changeUpload,"on-success":e.successUpload,"show-file-list":!1,headers:e.token}},[s("el-button",{staticClass:"icon-import",attrs:{slot:"trigger",title:"批量导入"},slot:"trigger"})],1),e._v(" "),s("el-button",{staticClass:"span-icon icon-export",attrs:{title:"批量导出"},on:{click:e.handleExport}}),e._v(" "),s("el-button",{staticClass:"span-icon icon-download",attrs:{title:"模板下载"},on:{click:e.handleDownloadTemplate}}),e._v(" "),s("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)]),e._v(" "),s("el-col",{staticClass:"querybar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:e.filters}},[s("el-col",{attrs:{span:5}},[s("el-form-item",{attrs:{label:"工号"}},[s("el-input",{attrs:{placeholder:"请输入工号"},model:{value:e.filters.userNo,callback:function(t){e.$set(e.filters,"userNo",t)},expression:"filters.userNo"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:5}},[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.filters.custName,callback:function(t){e.$set(e.filters,"custName",t)},expression:"filters.custName"}})],1)],1),e._v(" "),s("el-form-item",[s("el-button",{staticClass:"resetBtn",staticStyle:{"margin-right":"10px"},on:{click:e.handleReset}},[e._v("重置")])],1),e._v(" "),s("el-form-item",[s("el-button",{staticClass:"queryBtn",attrs:{type:"primary"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1),e._v(" "),s("el-table",{attrs:{stripe:"",data:e.payBaseInfoList,border:""}},[s("el-table-column",{attrs:{align:"center",label:"工号"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"linkSpan",on:{click:function(s){e.handlePayBaseInfoDetail(t.$index,t.row)}}},[e._v(e._s(t.row.userNo))])]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"wagesBase",label:"基本工资"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"wagesPerf",label:"绩效工资"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"postPension",label:"岗位津贴"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"otherPension",label:"其他补贴"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"endmBase",label:"养老保险基数"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"houseBase",label:"公积金基数"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"createdDate",label:"录入时间"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("i",{staticClass:"icon-edit",on:{click:function(s){e.handleEdit(t.$index,t.row)}}}),e._v(" "),s("i",{staticClass:"icon-delete",on:{click:function(s){e.handleDelete(t.$index,t.row)}}})]}}])})],1),e._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.totalRows>e.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.totalRows},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},708:function(e,t,s){function a(e){s(1296)}var i=s(245)(s(1021),s(1452),a,null,null);e.exports=i.exports},769:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},770:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab&&this.pactNo?this.$router.push({name:e,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.userNo?this.$router.push({name:e,params:{userNo:this.userNo}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"首页"===this.yiji&&e.push("/home"),"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/stuffSelfHelp_manage"),"历史薪酬查询"===this.yiji&&e.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&e.push("/user_center"),"修改密码"===this.erji&&e.push("/modify_password"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"工资查询"===this.erji&&e.push("/historicalSalary_query"),"工资流程管理"===this.erji&&e.push("/wageProcess_manage"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"工资流程新增"===this.sanji&&e.push("/add_wage"),"工资流程修改"===this.sanji&&e.push("/edit_wage"),"录入工资"===this.sanji&&e.push("/entry_wage"),"社保数据查询"===this.sanji&&e.push("/socialSecurity_query"),"工资流程详情"===this.sanji&&e.push("/wage_info"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"保险详情"===this.siji&&e.push("/edit_security"),"社保数据导入"===this.siji&&e.push("/import_socialSecurity"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""},userNo:{type:String,default:""}}}},771:function(e,t,s){t=e.exports=s(643)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/workSpace/item/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},772:function(e,t,s){var a=s(771);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(644)("488e4eea",a,!0)},773:function(e,t,s){function a(e){s(772)}var i=s(245)(s(770),s(774),a,"data-v-d69b0f44",null);e.exports=i.exports},774:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e(),e._v(" "),e._e(),e._v(" "),e._e()],1)],1),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(769),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=83.d2f4c218f467dbc5fdd6.js.map