webpackJsonp([0],{1004:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paybaseinfo_mgmt"},[s("current",{attrs:{yiji:"薪酬福利",erji:"调薪管理"}}),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("el-col",{staticClass:"titlebar",attrs:{span:24}},[s("span",{staticClass:"title-text"},[t._v("调薪管理")])]),t._v(" "),s("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:t.filters}},[s("el-form-item",{attrs:{label:"工号"}},[s("el-input",{attrs:{placeholder:"请输入工号"},model:{value:t.filters.userNo,callback:function(e){t.filters.userNo=e},expression:"filters.userNo"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.filters.custName,callback:function(e){t.filters.custName=e},expression:"filters.custName"}})],1),t._v(" "),s("el-form-item",{staticStyle:{"margin-left":"10px"}},[s("el-button",{staticClass:"queryBtn",attrs:{type:"primary"},on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-table",{attrs:{stripe:"",data:t.custInfoList,border:""}},[s("el-table-column",{attrs:{align:"center",label:"工号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"linkSpan",on:{click:function(s){t.handleCustInfoDetail(e.$index,e.row)}}},[t._v(t._s(e.row.userNo))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"custName",label:"姓名"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"organName",label:"公司名称"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"derpName",label:"部门名称"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"sex",label:"性别",formatter:t.custSexFormatter}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"custPost",label:"岗位"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"custClass",label:"职级"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"mobileNo",label:"手机"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"custStatus",label:"状态",formatter:t.custStatusFormatter}}),t._v(" "),s("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small"},on:{click:function(s){t.handlePayChange(e.$index,e.row)}}},[t._v("调薪")])]}}])})],1),t._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}},195:function(t,e,s){function a(t){s(892)}var i=s(194)(s(682),s(1004),a,null,null);t.exports=i.exports},624:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},625:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"人事调动详情"===this.sanji&&t.push("/transfer_info"),"人事调动修改"===this.sanji&&t.push("/edit_transfer"),"人事调动新增"===this.sanji&&t.push("/add_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"员工离职详情"===this.sanji&&t.push("/dimission_info"),"员工离职修改"===this.sanji&&t.push("/edit_dimission"),"员工离职新增"===this.sanji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},626:function(t,e,s){e=t.exports=s(540)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},627:function(t,e,s){var a=s(626);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(541)("488e4eea",a,!0)},628:function(t,e,s){function a(t){s(627)}var i=s(194)(s(625),s(629),a,"data-v-d69b0f44",null);t.exports=i.exports},629:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(624),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},682:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(628),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{filters:{userNo:"",custName:""},pageNum:1,pageSize:7,totalRows:30,custInfoList:[]}},components:{current:i.default},created:function(){this.filters.userNo="",this.filters.custName="",this.getCustInfoList()},methods:{getCustInfoList:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,userNo:t.filters.userNo,custName:t.filters.custName};t.$axios.get("/iem_hrm/queryCustInfoList",{params:e}).then(function(e){console.log(e),t.custInfoList=e.data.data.custInfoList,t.totalRows=Number(e.data.data.total)}).catch(function(){console.log("error")})},custSexFormatter:function(t,e){return 0==t.sex?"男":1==t.sex?"女":"异常"},custStatusFormatter:function(t,e){return 0==t.custStatus?"离职":1==t.custStatus?"在职":2==t.custStatus?"试用":"异常"},handleCustInfoDetail:function(t,e){},handleCurrentChange:function(t){this.pageNum=t,this.getCustInfoList()},handleQuery:function(){console.log("userNo:"+self.filters.userNo+" custName:"+self.filters.custName),this.getCustInfoList()},handlePayChange:function(t,e){this.$router.push({name:"query_payChangeInfo",params:{userNo:e.userNo}})}}}},805:function(t,e,s){e=t.exports=s(540)(!0),e.push([t.i,".paybaseinfo_mgmt{padding:0 0 20px 20px}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/payWelfare_Mgmt/payChangeMgmt/query_custInfo.vue"],names:[],mappings:"AACA,kBACE,qBAAuB,CACxB",file:"query_custInfo.vue",sourcesContent:["\n.paybaseinfo_mgmt {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},892:function(t,e,s){var a=s(805);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(541)("7ceb95d1",a,!0)}});
//# sourceMappingURL=0.e15abf211723042cb0ad.js.map