webpackJsonp([43],{585:function(t,e,a){function i(t){a(850)}var s=a(198)(a(695),a(963),i,null,null);t.exports=s.exports},631:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},632:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"人事调动详情"===this.sanji&&t.push("/transfer_info"),"人事调动修改"===this.sanji&&t.push("/edit_transfer"),"人事调动新增"===this.sanji&&t.push("/add_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"员工离职详情"===this.sanji&&t.push("/dimission_info"),"员工离职修改"===this.sanji&&t.push("/edit_dimission"),"员工离职新增"===this.sanji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},633:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},634:function(t,e,a){var i=a(633);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(547)("488e4eea",i,!0)},635:function(t,e,a){function i(t){a(634)}var s=a(198)(a(632),a(636),i,"data-v-d69b0f44",null);t.exports=s.exports},636:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:a(631),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},695:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(635),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={data:function(){var t=this;return{filters:{startTime:"",endTime:""},pageNum:1,pageSize:7,totalRows:30,payChangeInfoList:[],startTimeOption:{disabledDate:function(t){}},endTimeOption:{disabledDate:function(e){return e.getTime()<new Date(t.filters.startTime).getTime()}}}},components:{current:s.default},created:function(){this.filters.startTime="",this.filters.endTime="",this.getPayChangeInfoList()},methods:{getPayChangeInfoList:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,startTime:t.filters.startTime,endTime:t.filters.endTime};t.$axios.get("/iem_hrm/selectListEpPayChageInfo",{params:e}).then(function(e){console.log(e),t.payChangeInfoList=e.data.data.epPayChageInfoList,t.totalRows=Number(e.data.data.total)}).catch(function(){console.log("error")})},handlePayChangeInfoDetail:function(t,e){this.$router.push({name:"detail_payChangeInfo",params:{userNo:e.applyNo}})},handleCurrentChange:function(t){this.pageNum=t,this.getPayChangeInfoList()},handleQuery:function(){console.log("startTime:"+self.filters.startTime+" endTime:"+self.filters.endTime),this.getPayChangeInfoList()},handleAdd:function(){this.$router.push({name:"add_payChangeInfo"})},handleEdit:function(t,e){this.$router.push({name:"edit_payChangeInfo",params:{applyNo:e.applyNo,userNo:e.userNo}})},handleDelete:function(t,e){var a=this,i={};i.applyNo=e.applyNo,console.log(i),this.$confirm("此操作将会删除该条薪酬基数信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$axios.delete("/iem_hrm/pay/deleteEpPayChageInf?applyNo="+i.applyNo,i).then(function(t){console.log(t),"S00000"==t.data.code?a.$message({type:"success",message:"删除成功!"}):a.$message.error("删除调薪信息失败！")}).catch(function(){a.$message.error("删除调薪信息失败！")})}).catch(function(){a.$message("您已取消删除调薪信息！")})}}}},762:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".paychange_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/payWelfare_Mgmt/payChangeMgmt/query_payChangeInfo.vue"],names:[],mappings:"AACA,gBACE,qBAAuB,CACxB",file:"query_payChangeInfo.vue",sourcesContent:["\n.paychange_mgmt {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},850:function(t,e,a){var i=a(762);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(547)("53cea058",i,!0)},963:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paychange_mgmt"},[a("current",{attrs:{yiji:"薪酬福利",erji:"调薪管理",sanji:"调薪查询"}}),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("el-col",{staticClass:"titlebar",attrs:{span:24}},[a("span",{staticClass:"title-text"},[t._v("调薪查询")]),t._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("调薪")])],1),t._v(" "),a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.startTimeOption},model:{value:t.filters.startTime,callback:function(e){t.filters.startTime=e},expression:"filters.startTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":t.endTimeOption},model:{value:t.filters.endTime,callback:function(e){t.filters.endTime=e},expression:"filters.endTime"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"10px"}},[a("el-button",{staticClass:"queryBtn",attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{stripe:"",data:t.payChangeInfoList,border:""}},[a("el-table-column",{attrs:{align:"center",label:"调薪编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"linkSpan",on:{click:function(a){t.handlePayChangeInfoDetail(e.$index,e.row)}}},[t._v(t._s(e.row.applyNo))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"userNo",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"custName",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nWagesBase",label:"调整后基本工资"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nWagesPerf",label:"调整后绩效工资"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nPostPension",label:"调整后岗位津贴"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nOtherPension",label:"调整后其他补贴"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"entryTime",label:"录入时间"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"icon-edit",on:{click:function(a){t.handleEdit(e.$index,e.row)}}}),t._v(" "),a("i",{staticClass:"icon-delete",on:{click:function(a){t.handleDelete(e.$index,e.row)}}})]}}])})],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=43.29d138ac7be672fcc39b.js.map