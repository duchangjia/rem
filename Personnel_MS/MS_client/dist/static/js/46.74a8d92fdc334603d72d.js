webpackJsonp([46],{1068:function(t,e,a){var s=a(954);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(547)("ae464cb0",s,!0)},1205:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pact_mgmt"},[a("current",{attrs:{yiji:"人事事务",erji:"人事合同"}}),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("el-col",{staticClass:"titlebar",attrs:{span:24}},[a("span",{staticClass:"title-text"},[t._v("人事合同")]),t._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增合同")])],1),t._v(" "),a("el-col",{staticClass:"querybar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:t.filters}},[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filters.custName,callback:function(e){t.filters.custName=e},expression:"filters.custName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"合同类型"}},[a("el-select",{model:{value:t.filters.pactType,callback:function(e){t.filters.pactType=e},expression:"filters.pactType"}},[a("el-option",{attrs:{label:"劳动合同",value:"01"}}),t._v(" "),a("el-option",{attrs:{label:"保密协议",value:"02"}})],1)],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"10px"}},[a("el-button",{staticClass:"resetBtn",on:{click:t.handleReset}},[t._v("重置")])],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"queryBtn",attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{stripe:"",data:t.pactListInfo,border:""}},[a("el-table-column",{attrs:{align:"center",label:"合同编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"linkSpan",on:{click:function(a){t.handlePactDetail(e.$index,e.row)}}},[t._v(t._s(e.row.pactNo))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"paperPactNo",label:"纸质合同编号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"userNo",label:"工号"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"custName",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"organName",label:"公司名称"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"derpName",label:"部门名称"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"pactType",label:"合同类型",formatter:t.pactTypeFormatter}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"pactStatus",label:"合同状态",formatter:t.pactStatusFormatter}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"signTime",label:"签订日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"pactStartTime",label:"合同开始日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"pactEndTime",label:"合同结束日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handlePChange(e.$index,e.row)}}},[t._v("变更")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handlePRenew(e.$index,e.row)}}},[t._v("续签")])]}}])})],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}},626:function(t,e,a){function s(t){a(1068)}var i=a(197)(a(889),a(1205),s,null,null);t.exports=i.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,a){var s=a(660);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(547)("becca3a2",s,!0)},662:function(t,e,a){function s(t){a(661)}var i=a(197)(a(659),a(663),s,"data-v-d69b0f44",null);t.exports=i.exports},663:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"location-wrapper"},[s("el-row",[s("el-col",{attrs:{span:22}},[s("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),s("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?s("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[s("img",{staticClass:"pic",attrs:{src:a(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},889:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(662),i=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{filters:{custName:"",pactType:""},pageNum:1,pageSize:10,totalRows:1,pactListInfo:[]}},components:{current:i.default},created:function(){this.filters.custName="",this.filters.pactType="",this.getPactList()},methods:{getPactList:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,custName:t.filters.custName,pactType:t.filters.pactType};t.$axios.get("/iem_hrm/pact/queryPactList",{params:e}).then(function(e){console.log(e),t.pactListInfo=e.data.data.models,t.totalRows=e.data.data.total}).catch(function(){console.log("error")})},pactTypeFormatter:function(t,e){return"01"==t.pactType?"劳动合同":"02"==t.pactType?"保密协议":"其他"},pactStatusFormatter:function(t,e){return"01"==t.pactStatus?"试用":"02"==t.pactStatus?"有效":"03"==t.pactStatus?"提前解除":"04"==t.pactStatus?"到期解除":"其他"},dateFormat:function(t,e){},handlePactDetail:function(t,e){console.log("传递的pactNo:",e.pactNo),this.$router.push({name:"detail_contract",params:{pactNo:e.pactNo}})},handleCurrentChange:function(t){this.pageNum=t,this.getPactList()},handleReset:function(){this.filters.custName="",this.filters.pactType=""},handleQuery:function(){console.log("custName:"+this.filters.custName+" pactType:"+this.filters.pactType),this.getPactList()},handleAdd:function(){this.$router.push({name:"add_contract"})},handleEdit:function(t,e){this.$router.push({name:"edit_contract",params:{pactNo:e.pactNo}})},handleDelete:function(t,e){var a=this,s={};s.pactNo=e.pactNo,console.log(s),this.$confirm("此操作将会删除该条合同, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$axios.delete("/iem_hrm/pact/deletePact?pactNo="+s.pactNo,s).then(function(t){console.log(t),"S00000"==t.data.code?a.$message({type:"success",message:"删除成功!"}):a.$message.error("删除合同失败！")}).catch(function(){a.$message.error("删除合同失败！")})}).catch(function(){a.$message("您已取消删除合同！")})},handlePChange:function(t,e){this.$router.push({name:"add_pactChange",params:{pactNo:e.pactNo}})},handlePRenew:function(t,e){this.$router.push({name:"add_pactRenew",params:{pactNo:e.pactNo}})},handleTerminate:function(t,e){},handleProbation:function(t,e){}}}},954:function(t,e,a){e=t.exports=a(546)(!0),e.push([t.i,".pact_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/personnel_contract/query_contract.vue"],names:[],mappings:"AACA,WACE,qBAAuB,CACxB",file:"query_contract.vue",sourcesContent:["\n.pact_mgmt {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=46.74a8d92fdc334603d72d.js.map