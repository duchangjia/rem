webpackJsonp([37],{1083:function(t,e,a){var i=a(956);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(550)("0b5d3dd2",i,!0)},1245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add_transfer"},[a("current",{attrs:{yiji:"人事事务",erji:"人事调动",sanji:"人事调动明细查询",siji:"人事调动新增"}}),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"titlebar"},[a("span",{staticClass:"title-text"},[t._v("人事调动新增")]),t._v(" "),a("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:function(e){t.save("formdata2")}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"add-wrapper"},[a("el-form",{ref:"formdata1",attrs:{inline:!0,rules:t.rules1,model:t.formdata1,"label-width":"100px"}},[a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.companyName,callback:function(e){t.formdata1.companyName=e},expression:"formdata1.companyName"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"部门名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.deptName,callback:function(e){t.formdata1.deptName=e},expression:"formdata1.deptName"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{model:{value:t.formdata1.userNo,callback:function(e){t.formdata1.userNo=e},expression:"formdata1.userNo"}},[a("el-button",{attrs:{slot:"append",icon:"search"},on:{click:t.userNoSelect},slot:"append"})],1),t._v(" "),a("messageBox",{attrs:{title:t.boxTitle,tableOption:t.tableOption,inputFirstOption:t.inputFirstOption,inputSecOption:t.inputSecOption,searchData:t.searchData,searchUrl:t.searchUrl,dialogVisible:t.dialogVisible,pagination:t.msgPagination},on:{"update:tableOption":function(e){t.tableOption=e},"update:inputFirstOption":function(e){t.inputFirstOption=e},"update:inputSecOption":function(e){t.inputSecOption=e},"update:searchData":function(e){t.searchData=e},"update:dialogVisible":function(e){t.dialogVisible=e},"update:pagination":function(e){t.msgPagination=e},dialogConfirm:t.dialogConfirm}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.formdata1.custName,callback:function(e){t.formdata1.custName=e},expression:"formdata1.custName"}})],1)],1)],1),t._v(" "),a("el-form",{ref:"formdata2",attrs:{inline:!0,rules:t.rules2,model:t.formdata2,"label-width":"100px"}},[a("el-col",{staticClass:"item-title",attrs:{span:24}},[t._v("调动信息")]),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"调动类型",prop:"shiftType"}},[a("el-select",{attrs:{"value-key":"shiftType"},model:{value:t.formdata2.shiftType,callback:function(e){t.formdata2.shiftType=e},expression:"formdata2.shiftType"}},t._l(t.shiftTypeList,function(t){return a("el-option",{key:t.shiftType,attrs:{label:t.shiftName,value:t.shiftType}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"调动生效时间",prop:"shiftCameTime"}},[a("el-input",{model:{value:t.formdata2.shiftCameTime,callback:function(e){t.formdata2.shiftCameTime=e},expression:"formdata2.shiftCameTime"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"原公司名称"}},[a("el-select",{attrs:{"value-key":"compOrgNo"},model:{value:t.formdata2.oldOrgId,callback:function(e){t.formdata2.oldOrgId=e},expression:"formdata2.oldOrgId"}},t._l(t.compList,function(t){return a("el-option",{key:t.compOrgNo,attrs:{label:t.compName,value:t.compOrgNo}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"新公司名称",prop:"newcompOrgNo"}},[a("el-select",{attrs:{"value-key":"newcompOrgNo"},model:{value:t.formdata2.newOrgId,callback:function(e){t.formdata2.newOrgId=e},expression:"formdata2.newOrgId"}},t._l(t.compList,function(t){return a("el-option",{key:t.compOrgNo,attrs:{label:t.compName,value:t.compOrgNo}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"原部门名称"}},[a("el-select",{attrs:{"value-key":"departOrgNo"},model:{value:t.formdata2.oldDeprtId,callback:function(e){t.formdata2.oldDeprtId=e},expression:"formdata2.oldDeprtId"}},t._l(t.departList,function(t){return a("el-option",{key:t.departOrgNo,attrs:{label:t.departName,value:t.departOrgNo}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"新部门名称",prop:"newdepartOrgNo"}},[a("el-select",{attrs:{"value-key":"newdepartOrgNo"},model:{value:t.formdata2.newDeprtId,callback:function(e){t.formdata2.newDeprtId=e},expression:"formdata2.newDeprtId"}},t._l(t.departList,function(t){return a("el-option",{key:t.departOrgNo,attrs:{label:t.departName,value:t.departOrgNo}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"原直线经理"}},[a("el-input",{model:{value:t.formdata2.oldLineManager,callback:function(e){t.formdata2.oldLineManager=e},expression:"formdata2.oldLineManager"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"新直线经理",prop:"newLineManager"}},[a("el-input",{model:{value:t.formdata2.newLineManager,callback:function(e){t.formdata2.newLineManager=e},expression:"formdata2.newLineManager"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"原岗位"}},[a("el-input",{model:{value:t.formdata2.oldPost,callback:function(e){t.formdata2.oldPost=e},expression:"formdata2.oldPost"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"新岗位",prop:"newPost"}},[a("el-input",{model:{value:t.formdata2.newPost,callback:function(e){t.formdata2.newPost=e},expression:"formdata2.newPost"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"原职级"}},[a("el-input",{model:{value:t.formdata2.oldClass,callback:function(e){t.formdata2.oldClass=e},expression:"formdata2.oldClass"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{attrs:{label:"新职级",prop:"newClass"}},[a("el-input",{model:{value:t.formdata2.newClass,callback:function(e){t.formdata2.newClass=e},expression:"formdata2.newClass"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"调动原因",prop:"shiftReason"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"请输入内容"},model:{value:t.formdata2.shiftReason,callback:function(e){t.formdata2.shiftReason=e},expression:"formdata2.shiftReason"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:24,md:12}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"附件"}},[a("el-input",{model:{value:t.formdata2.attachm,callback:function(e){t.formdata2.attachm=e},expression:"formdata2.attachm"}}),t._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{name:"file",data:t.addFormdata,"on-change":t.changeUpload,"on-success":t.successUpload,action:"/iem_hrm/custShifthis/addCustShifthis","show-file-list":!1,"auto-upload":!1,headers:t.token}},[a("el-button",{staticClass:"uploadBtn",attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]}},640:function(t,e,a){function i(t){a(1083)}var n=a(198)(a(920),a(1245),i,null,null);t.exports=n.exports},670:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab&&this.pactNo?this.$router.push({name:t,params:{activeTab:this.activeTab,pactNo:this.pactNo}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"历史薪酬查询"===this.yiji&&t.push("/historicalSalary_Mgmt"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"工资查询"===this.erji&&t.push("/historicalSalary_query"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""},pactNo:{type:String,default:""}}}},671:function(t,e,a){e=t.exports=a(549)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:40px;line-height:40px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},672:function(t,e,a){var i=a(671);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(550)("488e4eea",i,!0)},673:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},674:function(t,e,a){function i(t){a(672)}var n=a(198)(a(670),a(675),i,"data-v-d69b0f44",null);t.exports=n.exports},675:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:a(673),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},796:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{radio:0,applyUserNo:"",assetNo:"",pactListInfo:[],custInfo:{stateName:"",stateNo:""},secInpuShow:!0}},methods:{dialogOpen:function(){this.pagination.totalRows=0,this.pagination.pageSize=5,this.pactListInfo=[],this.custInfo={},console.log(this.searchData.length),this.searchData.length<2&&(this.secInpuShow=!1)},getList:function(){var t=this,e=this.searchData,a={},i={pageNum:this.pagination.pageNum,pageSize:this.pagination.pageSize},n="",r="",o=Object.keys(e);o.length>1?(n=o[0],r=o[1],e[n]=this.custInfo.stateName,e[r]=this.custInfo.stateNo):(n=o[0],e[n]=this.custInfo.stateNo),a=Object.assign(e,i),console.log(a),this.$axios.get(this.searchUrl,{params:a}).then(function(e){if(console.log(e),200==e.status)if(e.data.data!=={}){var a=e.data.data.list;t.pactListInfo=a,t.pagination.totalRows=e.data.data.total,console.log(t.pactListInfo,"返回值")}else t.$message({message:"请输入合法编号",type:"error"})}).catch(function(e){t.$message({message:e.retMsg,type:"error"})})},handleCurrentPagination:function(t){this.pagination.pageNum=t,this.getList()},reset:function(){this.custInfo={}},dialogClose:function(){this.$emit("changeDialogVisible",!1)},handleCurrentChange:function(t,e,a){this.custInfo={},console.log(t);var i=this.pactListInfo.indexOf(t)+1,n=this.searchData,r=Object.keys(n),o=r[0],s=r[1];this.radio=i,console.log(t[o]),r.length>1?(this.custInfo.stateName=t[o],this.custInfo.stateNo=t[s]):this.custInfo.stateNo=t[o]},confirm:function(){var t=this;t.$emit("dialogConfirm",t.custInfo)}},props:{title:{type:String,default:"提示"},placeholder:{type:String,default:""},labelFirst:{type:String,default:""},labelSec:{type:String,default:""},searchUrl:{type:String,default:""},saveUrl:{type:String,default:""},dialogVisible:{type:Boolean,default:!1},firstPlaceholder:{type:String,default:""},secPlaceholder:{type:String,default:""},tableOption:{type:Array,default:[]},inputFirstOption:{type:Object,default:{}},inputSecOption:{type:Object,default:{}},searchData:{type:Object,default:{}},pagination:{type:Object,default:{}}}}},797:function(t,e,a){e=t.exports=a(549)(!0),e.push([t.i,'.item-box .el-form{margin-bottom:20px}.item-box .el-form-item:last-child{margin-right:0}.item-box .my-autocomplete li{line-height:20px;padding:7px}.item-box .my-autocomplete .name{text-overflow:ellipsis;overflow:hidden}.item-box .my-autocomplete .addr{font-size:12px;color:#b4b4b4}.item-box .my-autocomplete .highlighted .addr{color:#ddd}.el-radio__input.is-focus .el-radio__inner,.item-box .el-radio__input.is-checked .el-radio__inner{background:#f90;border-color:#f90}.item-box .el-radio__inner:after{width:6px;height:6px;border-radius:50%;background-color:#fff;content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(0);transition:transform .15s cubic-bezier(.71,-.46,.88,.6)}.el-radio__input.is-focus .el-radio__inner:after,.item-box .el-radio__input.is-checked .el-radio__inner:after{transform:translate(-50%,-50%) scale(1)}.item-box .button-box .toolBtn{height:30px;width:120px;background:#f90;border:1px solid #f90;font-family:PingFangSC-Regular;font-size:14px;color:#fff;display:inline-block;line-height:30px;padding:0;float:none;margin-top:0}.item-box .button-box .restBtn{background:#fff;border:1px solid #f90;color:#f90;display:inline-block;margin-left:10px}.item-box .el-input__inner{height:30px}.toolbar{text-align:right}.add_assetUser .content-wrapper .content .item-box .el-form-item .el-input{width:164px}.item-box .button-box{float:right}.el-table__body-wrapper{overflow-x:hidden}.el-table tr{cursor:pointer}.el-dialog__header{background:#f4f4f4;padding:10px 20px}.el-dialog__title{color:#333;font-weight:400;font-size:14px}.el-dialog__headerbtn{font-size:14px}.el-dialog__headerbtn .el-dialog__close{color:#f90}.el-dialog--small{width:80%}.item-box .el-form-item{width:270px;display:inline-block}.el-form-item.is-required .el-form-item__label:before{display:none}.el-dialog__footer{text-align:left;padding-left:40px}.el-dialog__footer .el-button--primary{background:#f4f4f4;color:#333;border:none;padding:10px 40px}.el-dialog__footer .el-button--primary:hover{background:#f90;color:#fff}.content-wrapper .el-pager li.active{border-color:#f90;background-color:#f90}.el-pager li:hover,.el-pagination button:hover{color:#f90}.el-pagination__editor:focus{border-color:#f90}.pagination-toolbar{margin-top:20px;text-align:right}',"",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/common/messageBox-components.vue"],names:[],mappings:"AACA,mBACE,kBAAmB,CACpB,AACD,mCACE,cAAe,CAChB,AACD,8BACE,iBAAkB,AAClB,WAAa,CACd,AACD,iCACE,uBAAwB,AACxB,eAAiB,CAClB,AACD,iCACE,eAAgB,AAChB,aAAe,CAChB,AACD,8CACE,UAAY,CACb,AACD,kGACI,gBAAgB,AAChB,iBAAkB,CACrB,AACD,iCACI,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,wCAAyC,AACzC,uDAAyD,CAC5D,AACD,8GACI,uCAAyC,CAC5C,AACD,+BACI,YAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,sBAAuB,AACvB,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,qBAAsB,AACtB,iBAAiB,AACjB,UAAU,AACV,WAAW,AACX,YAAc,CACjB,AACD,+BACI,gBAAiB,AACjB,sBAAuB,AACvB,WAAY,AACZ,qBAAsB,AACtB,gBAAkB,CACrB,AACD,2BAA2B,WAAY,CACtC,AACD,SAAS,gBAAiB,CACzB,AACD,2EAA2E,WAAY,CACtF,AACD,sBAAsB,WAAY,CACjC,AACD,wBAAwB,iBAAkB,CACzC,AACD,aAAa,cAAc,CAC1B,AACD,mBAAmB,mBAAmB,iBAAkB,CACvD,AACD,kBAAkB,WAAW,gBAAmB,cAAe,CAC9D,AACD,sBAAsB,cAAe,CACpC,AACD,wCAAwC,UAAc,CACrD,AACD,kBAAkB,SAAU,CAC3B,AACD,wBAAwB,YAAY,oBAAqB,CACxD,AACD,sDAAsD,YAAa,CAClE,AACD,mBAAmB,gBAAgB,iBAAkB,CACpD,AACD,uCAAuC,mBAAmB,WAAW,YAAY,iBAAkB,CAClG,AACD,6CAA6C,gBAAgB,UAAW,CACvE,AACD,qCAAqC,kBAAsB,qBAA0B,CACpF,AACD,+CAA+C,UAAc,CAC5D,AACD,6BAA6B,iBAAqB,CACjD,AACD,oBAAoB,gBAAgB,gBAAgB,CACnD",file:"messageBox-components.vue",sourcesContent:['\n.item-box .el-form{\r\n  margin-bottom:20px;\n}\n.item-box .el-form-item:last-child{\r\n  margin-right:0;\n}\n.item-box .my-autocomplete li {\r\n  line-height: 20px;\r\n  padding: 7px;\n}\n.item-box .my-autocomplete .name {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\n}\n.item-box .my-autocomplete .addr {\r\n  font-size: 12px;\r\n  color: #b4b4b4;\n}\n.item-box .my-autocomplete .highlighted .addr {\r\n  color: #ddd;\n}\n.item-box .el-radio__input.is-checked .el-radio__inner,.el-radio__input.is-focus .el-radio__inner{\r\n    background:#f90;\r\n    border-color:#f90;\n}\n.item-box .el-radio__inner:after {\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    content: "";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);\n}\n.item-box .el-radio__input.is-checked .el-radio__inner:after ,.el-radio__input.is-focus .el-radio__inner:after{\r\n    transform: translate(-50%,-50%) scale(1);\n}\n.item-box .button-box .toolBtn {\r\n    height:30px;\r\n    width: 120px;\r\n    background: #f90;\r\n    border: 1px solid #f90;\r\n    font-family: PingFangSC-Regular;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    line-height:30px;\r\n    padding:0;\r\n    float:none;\r\n    margin-top: 0;\n}\n.item-box .button-box .restBtn{\r\n    background: #fff;\r\n    border: 1px solid #f90;\r\n    color: #f90;\r\n    display: inline-block;\r\n    margin-left: 10px;\n}\n.item-box .el-input__inner{height:30px;\n}\n.toolbar{text-align:right;\n}\n.add_assetUser .content-wrapper .content .item-box .el-form-item .el-input{width:164px;\n}\n.item-box .button-box{float:right;\n}\n.el-table__body-wrapper{overflow-x:hidden;\n}\n.el-table tr{cursor:pointer\n}\n.el-dialog__header{background:#f4f4f4;padding:10px 20px;\n}\n.el-dialog__title{color:#333;font-weight:normal;font-size:14px;\n}\n.el-dialog__headerbtn{font-size:14px;\n}\n.el-dialog__headerbtn .el-dialog__close{color:#ff9900;\n}\n.el-dialog--small{width:80%;\n}\n.item-box .el-form-item{width:270px;display:inline-block;\n}\n.el-form-item.is-required .el-form-item__label:before{display:none;\n}\n.el-dialog__footer{text-align:left;padding-left:40px;\n}\n.el-dialog__footer .el-button--primary{background:#f4f4f4;color:#333;border:none;padding:10px 40px;\n}\n.el-dialog__footer .el-button--primary:hover{background:#f90;color:#fff;\n}\n.content-wrapper .el-pager li.active{border-color: #ff9900;background-color: #ff9900;\n}\n.el-pager li:hover,.el-pagination button:hover{color:#ff9900;\n}\n.el-pagination__editor:focus{border-color: #ff9900\n}\n.pagination-toolbar{margin-top:20px;text-align:right\n}\r\n'],sourceRoot:""}])},798:function(t,e,a){var i=a(797);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(550)("49e76906",i,!0)},800:function(t,e,a){function i(t){a(798)}var n=a(198)(a(796),a(801),i,null,null);t.exports=n.exports},801:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible},on:{close:function(e){t.dialogClose()},open:function(e){t.dialogOpen()},"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"item-box"},[a("el-form",{staticClass:"clearfix"},[a("el-form-item",{attrs:{label:t.inputFirstOption.labelName}},[a("el-input",{attrs:{placeholder:t.inputFirstOption.placeholder},model:{value:t.custInfo.stateName,callback:function(e){t.custInfo.stateName=e},expression:"custInfo.stateName"}})],1),t._v(" "),t.secInpuShow?a("el-form-item",{attrs:{label:t.inputSecOption.labelName}},[a("el-input",{attrs:{placeholder:t.inputSecOption.placeholder},model:{value:t.custInfo.stateNo,callback:function(e){t.custInfo.stateNo=e},expression:"custInfo.stateNo"}})],1):t._e(),t._v(" "),a("div",{staticClass:"button-box"},[a("el-button",{staticClass:"toolBtn restBtn",on:{click:function(e){t.reset()}}},[t._v("重置")]),t._v(" "),a("el-button",{staticClass:"toolBtn",on:{click:function(e){t.getList()}}},[t._v("查询")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.pactListInfo,"highlight-current-row":""},on:{"row-click":t.handleCurrentChange}},[a("el-table-column",{attrs:{align:"center",label:"选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{staticClass:"radio",attrs:{label:e.$index+1},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}})]}}])}),t._v(" "),t._l(t.tableOption,function(t){return a("el-table-column",{attrs:{align:"center",label:t.thName,prop:t.dataKey}})})],2),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pagination.totalRows>t.pagination.pageSize,expression:"pagination.totalRows>pagination.pageSize"}],staticClass:"pagination-toolbar",attrs:{"page-size":t.pagination.pageSize,layout:"prev, pager, next, jumper",total:t.pagination.totalRows},on:{"current-change":t.handleCurrentPagination}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.confirm()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]}},920:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(674),r=i(n),o=a(800),s=i(o);e.default={data:function(){return{token:{Authorization:"Bearer "+localStorage.getItem("access_token")},fileFlag:"",dialogVisible:!1,tableOption:[],inputFirstOption:{},inputSecOption:{},msgPagination:{},searchData:{},searchUrl:"",saveUrl:"",boxTitle:"",formdata1:{},formdata2:{oldOrgId:"",oldDeprtId:"",newOrgId:"",newDeprtId:"",custName:"",userNo:"",shiftType:"",shiftCameTime:"",oldLineManager:"",newLineManager:"",oldPost:"",newPost:"",oldClass:"",newClass:"",shiftReason:"",attachm:""},departList:[{departName:"上海魔方分公司",departOrgNo:"01"},{departName:"魔方分公司深圳分公司",departOrgNo:"p1"},{departName:"深圳前海橙色魔方信息技术有限公司",departOrgNo:"0"}],compList:[{compName:"上海魔方分公司",compOrgNo:"01"},{compName:"魔方分公司深圳分公司",compOrgNo:"p1"},{compName:"深圳前海橙色魔方信息技术有限公司",compOrgNo:"0"}],shiftTypeList:[{shiftType:"01",shiftName:"晋升"},{shiftType:"02",shiftName:"调动"},{shiftType:"03",shiftName:"平调"},{shiftType:"04",shiftName:"轮岗"},{shiftType:"05",shiftName:"工资调整"},{shiftType:"99",shiftName:"其他"}],rules1:{userNo:[{required:!0,message:"工号不能为空",trigger:"blur"}]},rules2:{shiftType:[{required:!0,message:"调动类型不能为空",trigger:"blur"}],shiftCameTime:[{required:!0,message:"生效日期不能为空",trigger:"blur"}],newOrgId:[{required:!0,message:"新公司名不能为空",trigger:"blur"}],newDeprtId:[{required:!0,message:"新部门名不能为空",trigger:"blur"}],newLineManager:[{required:!0,message:"新直线经理不能为空",trigger:"blur"}],newPost:[{required:!0,message:"新岗位不能为空",trigger:"blur"}],newClass:[{required:!0,message:"新职级不能为空",trigger:"blur"}],shiftReason:[{required:!0,message:"调动原因不能为空",trigger:"blur"}]}}},components:{current:r.default,messageBox:s.default},created:function(){},computed:{addFormdata:function(){var t=this;return{oldOrgId:t.formdata2.oldOrgId,oldDeprtId:t.formdata2.oldDeprtId,newOrgId:t.formdata2.newOrgId,newDeprtId:t.formdata2.newDeprtId,userNo:t.formdata2.userNo,shiftType:t.formdata2.shiftType,shiftCameTime:t.formdata2.shiftCameTime,oldLineManager:t.formdata2.oldLineManager,newLineManager:t.formdata2.newLineManager,oldPost:t.formdata2.oldPost,newPost:t.formdata2.newPost,oldClass:t.formdata2.oldClass,newClass:t.formdata2.newClass,shiftReason:t.formdata2.shiftReason,attachm:t.formdata2.attachm}}},methods:{dialogConfirm:function(t){console.log(t);var e=this,a={userNo:t.stateNo};e.$axios.get(e.saveUrl,{params:a}).then(function(t){"S00000"==t.data.code&&(e.dialogVisible=!1,e.formdata1=t.data.data)}).catch(function(t){console.log("error")})},userNoSelect:function(){this.tableOption=[{thName:"工号",dataKey:"userNo"},{thName:"姓名",dataKey:"custName"}],this.inputFirstOption={labelName:"姓名",placeholder:"请输入姓名"},this.inputSecOption={labelName:"工号",placeholder:"请输入工号"},this.searchData={custName:"",userNo:""},this.msgPagination={pageNum:1,pageSize:5,totalRows:0},this.dialogVisible=!0,this.searchUrl="/iem_hrm/CustInfo/queryCustBasicInfList",this.saveUrl="/iem_hrm/travel/getUseInfoByUserNo/",this.boxTitle="人工编号选择"},changeUpload:function(t,e){this.fileFlag=t,this.formdata2.attachm=t.name},successUpload:function(t,e,a){"S00000"===t.code&&(this.$message({message:"操作成功",type:"success"}),this.$router.push("/detail_transfer"))},save:function(t){var e=this,a=this;this.$refs[t].validate(function(t){if(!t)return e.$message.error("failvalid"),!1;if(a.$refs.upload.submit(),!a.fileFlag){var i={oldOrgId:a.formdata2.oldOrgId,oldDeprtId:a.formdata2.oldDeprtId,newOrgId:a.formdata2.newOrgId,newDeprtId:a.formdata2.newDeprtId,userNo:a.formdata2.userNo,shiftType:a.formdata2.shiftType,shiftCameTime:a.formdata2.shiftCameTime,oldLineManager:a.formdata2.oldLineManager,newLineManager:a.formdata2.newLineManager,oldPost:a.formdata2.oldPost,newPost:a.formdata2.newPost,oldClass:a.formdata2.oldClass,newClass:a.formdata2.newClass,shiftReason:a.formdata2.shiftReason,attachm:a.formdata2.attachm};a.addCustShif(i)}})},addCustShif:function(t){this.$axios.post("iem_hrm/custShifthis/addCustShifthis",t).then(function(t){console.log("addCustShif",t),"S00000"===response.code&&(this.$message({message:"操作成功",type:"success"}),this.$router.push("/detail_transfer"))}).catch(function(t){console.log("error")})},queryCompList:function(){var t=this;t.$axios.get("iem_hrm/organ/selectCompanyByUserNo").then(function(e){console.log("CompList",e),"S00000"===e.data.code&&(t.compList=e.data.data)}).catch(function(t){console.log(t)})},queryDerpList:function(t){var e=this;e.$axios.get("iem_hrm/organ/selectChildDeparment",{params:t}).then(function(t){console.log("DerpList",t),"S00000"===t.data.code&&(e.departList=t.data.data)}).catch(function(t){console.log(t)})}}}},956:function(t,e,a){e=t.exports=a(549)(!0),e.push([t.i,".add_transfer{padding-left:20px;padding-bottom:20px;width:100%}","",{version:3,sources:["D:/Desktop/work/iem/Personnel_MS/MS_client/src/components/pages/personnel_Mgmt/personnel_transfer/add_transfer.vue"],names:[],mappings:"AACA,cACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ",file:"add_transfer.vue",sourcesContent:["\n.add_transfer {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\r\n/*.add_transfer .content {\r\n\twidth: 100%;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\r\n}\r\n.add_transfer .content .title {\r\n\tborder-bottom: 1px solid #EEEEEE;\r\n}\r\n\r\n.add_transfer .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 14px 0px;\r\n\tfont-size: 16px;\r\n\theight: 50px;\r\n}\r\n\r\n.add_transfer .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\r\n}\r\n\r\n.add_transfer .content-inner {\r\n\tpadding: 30px 0px;\r\n}\t\r\n.add_transfer .info-title{\r\n\tpadding: 11px 0px 11px 10px;\r\n    margin-bottom: 30px;\r\n\tcolor: #999999;\r\n\tborder-bottom: none;\r\n}\r\n.add_transfer .el-input__inner {\r\n    border: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    width: 300px;\r\n    height: 40px;\r\n    margin-left: 30px;\r\n}\r\n.add_transfer .el-form-item {\r\n\tpadding-left: 20px;\r\n}\r\n.add_transfer .el-form-item__label {\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    float: left;\r\n    font-size: 14px;\r\n    color: #999999;\r\n    line-height: 1;\r\n    padding: 11px 0px 11px 0;\r\n    box-sizing: border-box;\r\n    font-weight: normal;\r\n}\r\n.add_transfer .el-textarea__inner {\r\n    margin-left: 30px;\r\n}\r\n.add_transfer .file_button {\r\n\tcolor: #FF9900;\r\n\tfont-size: 14px;\r\n}\r\n.add_transfer .el-form-item__error {\r\n    left: 30px;\r\n}\r\n.add_transfer .uploadBtn {\r\n  position: absolute;\r\n  height: 38px;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  border: 1px solid #ff9900;\r\n  border-radius: 0;\r\n  background: #ff9900;\r\n  font-family: \"PingFang SC\";\r\n}\r\n.add_transfer .el-upload__input {\r\n    margin-left: 30px;\r\n    border: 1px solid #eeeeee;\r\n}\r\n.add_transfer .conserve {\r\n\tfloat: right;\r\n\tmargin-top: 10px;\r\n\tbackground: #F4F4F4;\r\n\tborder: 1px solid #F4F4F4;\r\n\tborder-radius: 0px;\r\n\tfont-size: 14px;\r\n\tcolor: #333333;\r\n\twidth: 120px;\r\n\theight: 30px;\r\n\tpadding: 0;\r\n}*/\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=37.6ff25e34106a72c397a5.js.map