webpackJsonp([1],{1010:function(t,e,s){e=t.exports=s(546)(!0),e.push([t.i,".query_asset{padding:0 0 20px 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/asset_Mgmt/assetRegMgmt/query_asset.vue"],names:[],mappings:"AACA,aACE,qBAAuB,CACxB",file:"query_asset.vue",sourcesContent:["\n.query_asset {\r\n  padding: 0 0 20px 20px;\n}\r\n"],sourceRoot:""}])},1124:function(t,e,s){var a=s(1010);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(547)("6138b402",a,!0)},1261:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"query_asset"},[s("current",{attrs:{yiji:"资产管理",erji:"资产登记管理",sanji:"资产信息查询"}}),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("el-col",{staticClass:"titlebar",attrs:{span:24}},[s("span",{staticClass:"title-text"},[t._v("资产信息查询")]),t._v(" "),s("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1),t._v(" "),s("el-col",{staticClass:"querybar",staticStyle:{padding:"10px 0 0 0"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:t.filters}},[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"资产编号"}},[s("el-input",{attrs:{placeholder:"请输入"},model:{value:t.filters.assetNo,callback:function(e){t.filters.assetNo=e},expression:"filters.assetNo"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"资产类型"}},[s("el-select",{model:{value:t.filters.assetType,callback:function(e){t.filters.assetType=e},expression:"filters.assetType"}},[s("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),s("el-option",{attrs:{label:"办公用品",value:"01"}}),t._v(" "),s("el-option",{attrs:{label:"电脑",value:"02"}}),t._v(" "),s("el-option",{attrs:{label:"手机",value:"03"}}),t._v(" "),s("el-option",{attrs:{label:"后勤用品",value:"04"}}),t._v(" "),s("el-option",{attrs:{label:"数码相机",value:"05"}})],1)],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"资产名称"}},[s("el-input",{attrs:{placeholder:"请输入"},model:{value:t.filters.assetName,callback:function(e){t.filters.assetName=e},expression:"filters.assetName"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"资产状态"}},[s("el-select",{model:{value:t.filters.status,callback:function(e){t.filters.status=e},expression:"filters.status"}},[s("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),s("el-option",{attrs:{label:"有效",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"无效",value:"0"}})],1)],1)],1),t._v(" "),s("el-col",{staticClass:"button-wrap",attrs:{span:24}},[s("el-button",{staticClass:"resetBtn",on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),s("el-button",{staticClass:"queryBtn",on:{click:t.handleQuery}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-table",{attrs:{stripe:"",data:t.assetInfoList,border:""}},[s("el-table-column",{attrs:{align:"center",label:"资产编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"linkSpan",on:{click:function(s){t.handleAssetInfoDetail(e.$index,e.row)}}},[t._v(t._s(e.row.assetNo))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"assetType",label:"资产类型",formatter:t.assetTypeFormatter}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"assetName",label:"资产名称"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"buyUnitPrice",label:"购买单价"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"buyNum",label:"购买数量"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"buyAmount",label:"购买金额"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"stockNum",label:"当前库存"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"organName",label:"公司名称"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"derpName",label:"申请部门"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"applyUserNo",label:"申请人"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"createdDate",label:"登记时间"}}),t._v(" "),s("el-table-column",{attrs:{align:"center",label:"操作",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small"},on:{click:function(s){t.handleEdit(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),s("el-button",{attrs:{size:"small"},on:{click:function(s){t.handleAssetUse(e.$index,e.row)}}},[t._v("使用管理")])]}}])})],1),t._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageSize,expression:"totalRows>pageSize"}],staticClass:"toolbar",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNum=e}}})],1)],1)},staticRenderFns:[]}},198:function(t,e,s){function a(t){s(1124)}var i=s(197)(s(837),s(1261),a,null,null);t.exports=i.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,s){e=t.exports=s(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,s){var a=s(660);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(547)("becca3a2",a,!0)},662:function(t,e,s){function a(t){s(661)}var i=s(197)(s(659),s(663),a,"data-v-d69b0f44",null);t.exports=i.exports},663:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:s(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},837:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(662),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{filters:{assetNo:"",assetType:"",assetName:"",status:""},rules:{assetNo:[],assetType:[],assetName:[],status:[]},pageNum:1,pageSize:10,totalRows:1,assetInfoList:[]}},components:{current:i.default},created:function(){this.filters.assetNo="",this.filters.assetType="",this.filters.assetName="",this.filters.status="",this.getAssetInfoList()},methods:{getAssetInfoList:function(){var t=this,e={pageNum:t.pageNum,pageSize:t.pageSize,assetNo:t.filters.assetNo,assetType:t.filters.assetType,assetName:t.filters.assetName,status:t.filters.status};t.$axios.get("/iem_hrm/EpAssetInf/queryEpAssetInfList",{params:e}).then(function(e){console.log(e),t.assetInfoList=e.data.data.list,t.totalRows=e.data.data.total}).catch(function(){console.log("error")})},assetTypeFormatter:function(t,e){return"01"==t.assetType?"办公用品":"02"==t.assetType?"电脑":"03"==t.assetType?"手机":"04"==t.assetType?"后勤用品":"05"==t.assetType?"数码相机":"异常"},handleAssetInfoDetail:function(t,e){this.$router.push({name:"detail_asset",params:{assetNo:e.assetNo,applyUserNo:e.applyUserNo}})},handleCurrentChange:function(t){this.pageNum=t,this.getAssetInfoList()},handleReset:function(){this.filters.assetNo="",this.filters.assetType="",this.filters.assetName="",this.filters.status=""},handleQuery:function(){this.getAssetInfoList()},handleAdd:function(){this.$router.push({name:"add_asset",params:{}})},handleEdit:function(t,e){this.$router.push({name:"edit_asset",params:{assetNo:e.assetNo,applyUserNo:e.applyUserNo}})},handleAssetUse:function(t,e){}}}}});
//# sourceMappingURL=1.da0f7166bbd7bf04ceb7.js.map