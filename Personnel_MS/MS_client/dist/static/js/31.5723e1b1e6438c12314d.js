webpackJsonp([31],{1023:function(e,s,t){s=e.exports=t(546)(!0),s.push([e.i,".add_role{padding:0 0 20px 20px}.add_role .el-textarea__inner{width:300px}.add_role .content-wrapper{padding:0 20px}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/system_Mgmt/add_role.vue"],names:[],mappings:"AACA,UACI,qBAAuB,CAC1B,AACD,8BACI,WAAa,CAChB,AACD,2BACI,cAAkB,CACrB",file:"add_role.vue",sourcesContent:["\n.add_role {\r\n    padding: 0 0 20px 20px;\n}\n.add_role .el-textarea__inner {\r\n    width: 300px;\n}\n.add_role .content-wrapper {\r\n    padding: 0 20px 0;\n}\r\n\r\n"],sourceRoot:""}])},1138:function(e,s,t){var i=t(1023);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(547)("e356eaa0",i,!0)},1277:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"add_role"},[t("current",{attrs:{yiji:"系统管理",erji:"角色管理",sanji:"新增角色"}}),e._v(" "),t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"titlebar"},[t("span",{staticClass:"title-text"},[e._v("新增角色")]),e._v(" "),t("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1),e._v(" "),t("div",{staticClass:"add-wrapper role-msg"},[t("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("角色信息")]),e._v(" "),t("el-form",{attrs:{inline:!0,model:e.addRoleMsg,"label-position":e.labelPosition,"label-width":"80px"}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{model:{value:e.addRoleMsg.roleName,callback:function(s){e.addRoleMsg.roleName=s},expression:"addRoleMsg.roleName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"状态"}},[t("el-select",{model:{value:e.addRoleMsg.status,callback:function(s){e.addRoleMsg.status=s},expression:"addRoleMsg.status"}},[t("el-option",{attrs:{label:"有效",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"无效",value:"0"}})],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.addRoleMsg.roleDescr,callback:function(s){e.addRoleMsg.roleDescr=s},expression:"addRoleMsg.roleDescr"}})],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"add-wrapper auth-assign"},[t("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("权限分配")]),e._v(" "),t("div",{staticClass:"context-menu"},[t("el-col",{staticClass:"leftside",attrs:{span:2}},[t("div",[e._v("关联菜单")])]),e._v(" "),t("el-col",{staticClass:"rightside",attrs:{span:22}},[t("div",{staticClass:"menu"},[t("el-radio-group",{on:{change:e.handleCheckedMenusChange},model:{value:e.menuRadio,callback:function(s){e.menuRadio=s},expression:"menuRadio"}},e._l(e.menus,function(e){return t("el-radio-button",{key:e,staticClass:"menu-item",attrs:{label:e}})}))],1),e._v(" "),e.menuRadioFlag?t("div",{staticClass:"submenu"},[t("el-checkbox-button",{staticClass:"menu-item",attrs:{indeterminate:e.isIndeterminate,label:"全部"},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(s){e.checkAll=s},expression:"checkAll"}}),e._v(" "),t("el-checkbox-group",{on:{change:e.handleCheckedSubmenusChange},model:{value:e.checkedSubmenus,callback:function(s){e.checkedSubmenus=s},expression:"checkedSubmenus"}},e._l(e.submenus,function(s){return t("el-checkbox-button",{key:s,staticClass:"menu-item",attrs:{label:s}},[e._v(e._s(s))])}))],1):e._e()])],1),e._v(" "),e.menuRadioFlag?t("div",{staticClass:"func-permission"},[t("el-col",{staticClass:"leftside",attrs:{span:2}},[t("div",[e._v("功能权限")])]),e._v(" "),t("el-col",{staticClass:"rightside",attrs:{span:22}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("div",{staticClass:"funcs-content"},[t("el-checkbox",{staticClass:"func-checkall"},[e._v("组织架构")]),e._v(" "),t("el-checkbox-group",{staticClass:"func-item"},[t("el-checkbox",[e._v("新增机构信息")]),e._v(" "),t("el-checkbox",[e._v("删除机构信息")]),e._v(" "),t("el-checkbox",[e._v("新增机构信息")]),e._v(" "),t("el-checkbox",[e._v("修改机构信息")]),e._v(" "),t("el-checkbox",[e._v("查询机构列表")]),e._v(" "),t("el-checkbox",[e._v("新增机构信息")])],1)],1)]),e._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"funcs-content"},[t("el-checkbox",{staticClass:"func-checkall"},[e._v("用户管理")]),e._v(" "),t("el-checkbox-group",{staticClass:"func-item"},[t("el-checkbox",[e._v("用户管理1")]),e._v(" "),t("el-checkbox",[e._v("用户管理2")]),e._v(" "),t("el-checkbox",[e._v("用户管理3")]),e._v(" "),t("el-checkbox",[e._v("用户管理4")])],1)],1)])],1)],1)],1):e._e()],1)])],1)},staticRenderFns:[]}},642:function(e,s,t){function i(e){t(1138)}var a=t(197)(t(901),t(1277),i,null,null);e.exports=a.exports},658:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&e.push("/attendance_record"),"资产管理"===this.yiji&&e.push("/assetReq_manage"),"员工自助"===this.yiji&&e.push("/query_personalInfo"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"考勤记录管理"===this.erji&&e.push("/attendance_record"),"出差管理"===this.erji&&e.push("/travel_management"),"请假管理"===this.erji&&e.push("/leave_management"),"加班管理"===this.erji&&e.push("/overtime_management"),"资产登记管理"===this.erji&&e.push("/assetReq_manage"),"个人信息查询"===this.erji&&e.push("/query_personalInfo"),"开票信息查询"===this.erji&&e.push("/query_billingInfo"),"直线经理管理"===this.erji&&e.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&e.push("/assetUse_manage"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/edit_userM"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"出差新增"===this.sanji&&e.push("/add_travel"),"出差详情"===this.sanji&&e.push("/travel_info"),"出差修改"===this.sanji&&e.push("/edit_travel"),"请假新增"===this.sanji&&e.push("/add_leave"),"请假详情"===this.sanji&&e.push("/leave_info"),"请假修改"===this.sanji&&e.push("/edit_leave"),"加班新增"===this.sanji&&e.push("/add_overtime"),"加班详情"===this.sanji&&e.push("/overtime_info"),"加班修改"===this.sanji&&e.push("/edit_overtime"),"资产信息查询"===this.sanji&&e.push("/query_asset"),"请假审批"===this.sanji&&e.push("/leave_approval"),"资产使用修改"===this.sanji&&e.push("/edit_assetUse"),"资产使用新增"===this.sanji&&e.push("/add_assetUse"),"资产使用详情"===this.sanji&&e.push("/detail_assetUse"),"人事调动详情"===this.siji&&e.push("/transfer_info"),"人事调动修改"===this.siji&&e.push("/edit_transfer"),"人事调动新增"===this.siji&&e.push("/add_transfer"),"员工离职详情"===this.siji&&e.push("/dimission_info"),"员工离职修改"===this.siji&&e.push("/edit_dimission"),"员工离职新增"===this.siji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"CCC修改"===this.siji&&e.push("/modify_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"开票信息修改"===this.siji&&e.push("/edit_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"资产详情"===this.siji&&e.push("/detail_asset"),"资产新增"===this.siji&&e.push("/add_asset"),"资产修改"===this.siji&&e.push("/edit_asset"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(e,s,t){s=e.exports=t(546)(!0),s.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(e,s,t){var i=t(660);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(547)("becca3a2",i,!0)},662:function(e,s,t){function i(e){t(661)}var a=t(197)(t(659),t(663),i,"data-v-d69b0f44",null);e.exports=a.exports},663:function(e,s,t){e.exports={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e.liuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[5]}}},[e._v(e._s(e.liuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:t(658),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},901:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(662),a=function(e){return e&&e.__esModule?e:{default:e}}(i),n=["系统管理","参数管理","客户关系","项目管理","业务管理","运营报表"],l=["组织架构","用户管理","角色管理","功能管理"],r=["参数管理1","参数管理2","参数管理3"],h=["客户关系1","客户关系2","客户关系3"],o=["项目管理1","项目管理2","项目管理3","项目管理4"],c=["业务管理1","业务管理2","业务管理3","业务管理4"],u=["运营报表1","运营报表2","运营报表3","运营报表4"];s.default={data:function(){return{labelPosition:"right",addRoleMsg:{roleNo:"",roleName:"",status:"",roleDescr:""},menuRadio:"系统管理",menuRadioFlag:!0,menus:n,checkAll:!1,checkedSubmenus:["组织架构","用户管理"],submenus:l,isIndeterminate:!0}},components:{current:a.default},methods:{handleCheckedMenusChange:function(e){this.menuRadioFlag=null!==e,"系统管理"==e?(this.checkAll=!1,this.submenus=l):"参数管理"==e?(this.checkAll=!1,this.submenus=r):"客户关系"==e?(this.checkAll=!1,this.submenus=h):"项目管理"==e?(this.checkAll=!1,this.submenus=o):"业务管理"==e?(this.checkAll=!1,this.submenus=c):"运营报表"==e&&(this.checkAll=!1,this.submenus=u)},handleCheckAllChange:function(e){this.checkedSubmenus=e.target.checked?this.submenus:[],this.isIndeterminate=!1},handleCheckedSubmenusChange:function(e){var s=e.length;this.checkAll=s===this.submenus.length,this.isIndeterminate=s>0&&s<this.submenus.length},handleSave:function(){var e=this,s={};s.roleName=this.addRoleMsg.roleName,s.status=this.addRoleMsg.status,s.roleDescr=this.addRoleMsg.roleDescr,console.log(s),this.$axios.post("/iem_hrm/role/addRoleInfo",s).then(function(s){console.log(s),"S00000"==s.data.code?e.$router.push("/management_role"):e.$message.error("新增角色失败！")}).catch(function(){e.$message.error("新增角色失败！")})}}}}});
//# sourceMappingURL=31.5723e1b1e6438c12314d.js.map