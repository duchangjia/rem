webpackJsonp([67],{1084:function(t,e,i){var s=i(962);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(550)("53cea058",s,!0)},1241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paychange_mgmt"},[i("current",{attrs:{yiji:"薪酬福利",erji:"调薪管理",sanji:"调薪查询"}}),t._v(" "),i("div",{staticClass:"content-wrapper"},[i("el-col",{staticClass:"titlebar",attrs:{span:24}},[i("span",{staticClass:"title-text"},[t._v("调薪查询")]),t._v(" "),i("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("调薪")])],1),t._v(" "),i("el-col",{staticClass:"querybar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[i("el-form",{attrs:{inline:!0,model:t.filters}},[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.startTimeOption},model:{value:t.filters.startTime,callback:function(e){t.filters.startTime=e},expression:"filters.startTime"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.endTimeOption},model:{value:t.filters.endTime,callback:function(e){t.filters.endTime=e},expression:"filters.endTime"}})],1)],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"resetBtn",staticStyle:{"margin-right":"10px"},on:{click:t.handleReset}},[t._v("重置")])],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"queryBtn",attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),i("el-table",{attrs:{stripe:"",data:t.payChangeInfoList,border:""}},[i("el-table-column",{attrs:{align:"center",label:"调薪编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"linkSpan",on:{click:function(i){t.handlePayChangeInfoDetail(e.$index,e.row)}}},[t._v(t._s(e.row.applyNo))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"userNo",label:"工号"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"custName",label:"姓名"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"nWagesBase",label:"调整后基本工资"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"nWagesPerf",label:"调整后绩效工资"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"nPostPension",label:"调整后岗位津贴"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"nOtherPension",label:"调整后其他补贴"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updatedDate",label:"录入时间"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"icon-edit",on:{click:function(i){t.handleEdit(e.$index,e.row)}}}),t._v(" "),i("i",{staticClass:"icon-delete",on:{click:function(i){t.handleDelete(e.$index,e.row)}}})]}}])})],1),t._v(" "),i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}},615:function(t,e,i){function s(t){i(1084)}var a=i(198)(i(889),i(1241),s,null,null);t.exports=a.exports},664:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab&&this.pactNo?this.$router.push({name:t,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&t.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"工资查询"===this.erji&&t.push("/historicalSalary_query"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},665:function(t,e,i){e=t.exports=i(549)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},666:function(t,e,i){var s=i(665);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(550)("488e4eea",s,!0)},667:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},668:function(t,e,i){function s(t){i(666)}var a=i(198)(i(664),i(669),s,"data-v-d69b0f44",null);t.exports=a.exports},669:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:i(667),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},889:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(668),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){var t=this;return{filters:{startTime:"",endTime:""},pageNum:1,pageSize:7,totalRows:30,payChangeInfoList:[],userNo:"",startTimeOption:{disabledDate:function(t){}},endTimeOption:{disabledDate:function(e){return e.getTime()<new Date(t.filters.startTime).getTime()}}}},components:{current:a.default},created:function(){this.filters.startTime="",this.filters.endTime="",this.getPayChangeInfoList()},methods:{getPayChangeInfoList:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,startTime:t.filters.startTime,endTime:t.filters.endTime};t.$axios.get("/iem_hrm/epPayChageInf/queryEpPayChageInfListAll",{params:e}).then(function(e){console.log(e),t.payChangeInfoList=e.data.data.list,t.userNo=t.payChangeInfoList[0].userNo,t.totalRows=e.data.data.total}).catch(function(){console.log("error")})},handlePayChangeInfoDetail:function(t,e){this.$router.push({name:"detail_payChangeInfo",params:{applyNo:e.applyNo}})},handleCurrentChange:function(t){this.pageNum=t,this.getPayChangeInfoList()},handleReset:function(){this.filters.startTime="",this.filters.endTime=""},handleQuery:function(){console.log("startTime:"+self.filters.startTime+" endTime:"+self.filters.endTime),this.getPayChangeInfoList()},handleAdd:function(){this.$router.push({name:"add_payChangeInfo",params:{userNo:this.userNo}})},handleEdit:function(t,e){this.$router.push({name:"edit_payChangeInfo",params:{applyNo:e.applyNo,userNo:this.userNo}})},handleDelete:function(t,e){var i=this,s={};s.applyNo=e.applyNo,s.userNo=this.userNo,console.log(s),this.$confirm("此操作将会删除该条调薪信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$axios.delete("/iem_hrm/epPayChageInf/delEpPayChageInf?applyNo="+s.applyNo+"&userNo="+s.userNo,s).then(function(t){console.log(t),"S00000"==t.data.code?(i.$message({type:"success",message:"删除成功!"}),i.getPayChangeInfoList()):i.$message.error("删除调薪信息失败！")}).catch(function(){i.$message.error("删除调薪信息失败！")})}).catch(function(){i.$message("您已取消删除调薪信息！")})}}}},962:function(t,e,i){e=t.exports=i(549)(!0),e.push([t.i,".paychange_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/payWelfare_Mgmt/payChangeMgmt/query_payChangeInfo.vue"],names:[],mappings:"AACA,gBACE,qBAAuB,CACxB",file:"query_payChangeInfo.vue",sourcesContent:["\n.paychange_mgmt {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=67.d0678c74c690cee74771.js.map