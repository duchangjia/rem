webpackJsonp([17],{584:function(e,n,r){function t(e){r(802)}var i=r(194)(r(666),r(888),t,null,null);e.exports=i.exports},600:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},601:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"业务参数"===this.erji&&e.push("/argument_2"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/user-info"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},602:function(e,n,r){n=e.exports=r(539)(!0),n.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},603:function(e,n,r){var t=r(602);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r(540)("488e4eea",t,!0)},604:function(e,n,r){function t(e){r(603)}var i=r(194)(r(601),r(605),t,"data-v-d69b0f44",null);e.exports=i.exports},605:function(e,n,r){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"location-wrapper"},[t("el-row",[t("el-col",{attrs:{span:22}},[t("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),t("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?t("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?t("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?t("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?t("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?t("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),t("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[t("img",{staticClass:"pic",attrs:{src:r(600),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},666:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(604),i=function(e){return e&&e.__esModule?e:{default:e}}(t),a=["系统管理","参数管理","客户关系","项目管理","业务管理","运营报表"],o=["组织架构","用户管理","角色管理","功能管理"],s=["参数管理1","参数管理2","参数管理3"],c=["客户关系1","客户关系2","客户关系3"],l=["项目管理1","项目管理2","项目管理3","项目管理4"],d=["业务管理1","业务管理2","业务管理3","业务管理4"],A=["运营报表1","运营报表2","运营报表3","运营报表4"];n.default={data:function(){return{labelPosition:"right",addRoleMsg:{roleNo:"",roleName:"",status:"",roleDescr:""},menuRadio:"系统管理",menuRadioFlag:!0,menus:a,checkAll:!1,checkedSubmenus:["组织架构","用户管理"],submenus:o,isIndeterminate:!0}},components:{current:i.default},methods:{handleCheckedMenusChange:function(e){this.menuRadioFlag=null!==e,"系统管理"==e?(this.checkAll=!1,this.submenus=o):"参数管理"==e?(this.checkAll=!1,this.submenus=s):"客户关系"==e?(this.checkAll=!1,this.submenus=c):"项目管理"==e?(this.checkAll=!1,this.submenus=l):"业务管理"==e?(this.checkAll=!1,this.submenus=d):"运营报表"==e&&(this.checkAll=!1,this.submenus=A)},handleCheckAllChange:function(e){this.checkedSubmenus=e.target.checked?this.submenus:[],this.isIndeterminate=!1},handleCheckedSubmenusChange:function(e){var n=e.length;this.checkAll=n===this.submenus.length,this.isIndeterminate=n>0&&n<this.submenus.length},handleAdd:function(){var e=this,n={};n.roleName=this.addRoleMsg.roleName,n.status=this.addRoleMsg.status,n.roleDescr=this.addRoleMsg.roleDescr,console.log(n),this.$axios.post("/iem_hrm/role/addRoleInfo",n).then(function(n){console.log(n),"S00000"==n.data.code?e.$router.push("/management_role"):e.$message.error("新增角色失败！")}).catch(function(){e.$message.error("新增角色失败！")})}}}},740:function(e,n,r){n=e.exports=r(539)(!0),n.push([e.i,".add_role{padding:0 0 20px 20px}.add_role .content-wrapper{background:#fff;padding:0 20px;color:#333;clear:both}.add-wrapper .item-title{font-size:14px;height:56px;line-height:56px;padding-left:8px}.add-wrapper form{font-size:0}.add-wrapper form>div{float:none;display:inline-block}.add-wrapper .leftside{display:inline-block;padding:7px 0 7px 8px;color:#999}.add-wrapper .rightside{float:none;display:inline-block}.add-wrapper label{font-weight:400;color:#999;margin-bottom:0}.add-wrapper.role-msg label{margin-right:14px}.el-select-dropdown__item.selected,.el-select-dropdown__item.selected.hover{background-color:#f90}.add-wrapper .el-input__inner{border-radius:0;width:300px}.add-wrapper .el-input__inner:focus{border-color:#f90}.add-wrapper .menu-item{display:inline-block;margin-right:20px;margin-bottom:20px;border-radius:2px;font-family:PingFangSC-Regular}.add-wrapper .el-radio-button__inner{background:#f4f4f4;border:none;padding:10px;border-radius:2px}.add-wrapper .el-radio-button__inner:hover{color:#f90}.add-wrapper .el-radio-button:first-child .el-radio-button__inner{border-left:none;border-radius:2px}.add-wrapper .el-radio-button:last-child .el-radio-button__inner{border-radius:2px}.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color:#f90;box-shadow:none}.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover{color:#fff}.add-wrapper .submenu{padding:10px;margin-bottom:20px;background:#f4f4f4}.add-wrapper .submenu .menu-item{margin-bottom:0;font-family:PingFangSC-Light}.add-wrapper .submenu .el-checkbox-group{display:inline-block}.add-wrapper .submenu .el-checkbox-button__inner{background:#fff;border:none;padding:10px;border-radius:2px}.add-wrapper .submenu .el-checkbox-button:first-child .el-checkbox-button__inner{border-left:none;border-radius:2px}.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner{background-color:#f90;box-shadow:none}.add-wrapper .submenu .el-checkbox-button:last-child .el-checkbox-button__inner{border-radius:2px}.add-wrapper .submenu .el-checkbox-button__inner:hover{color:#f90}.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner:hover{color:#fff}.add-wrapper .func-permission .funcs-content{background:#f8f8f8;height:312px;margin-bottom:20px}.add-wrapper .func-permission .funcs-content label{color:#333}.add-wrapper .func-permission .funcs-content .func-item{margin-top:8px}.add-wrapper .func-permission .funcs-content .el-checkbox{display:block;line-height:36px}.add-wrapper .func-permission .funcs-content .el-checkbox+.el-checkbox{margin-left:0}.add-wrapper .func-permission .funcs-content .el-checkbox__input{float:right;margin-top:8px;margin-right:20px}.add-wrapper .func-permission .funcs-content .el-checkbox__label{padding-left:0;font-family:PingFangSC-Light;margin-left:20px}.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall{height:40px;line-height:40px;border-bottom:1px solid #f1f1f1}.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__input{margin-top:10px}.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__label{font-family:PingFangSC-Regular;font-size:16px}.add-wrapper .func-permission .funcs-content .el-checkbox__input.is-checked .el-checkbox__inner{background-color:#f90;border-color:#ff8d00}.add-wrapper .func-permission .funcs-content .el-checkbox__inner{border-radius:0}.add-wrapper .func-permission .funcs-content .el-checkbox__inner:focus,.add-wrapper .func-permission .funcs-content .el-checkbox__inner:hover{border-color:#ff8d00}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/system_Mgmt/add_role.vue"],names:[],mappings:"AACA,UACI,qBAAuB,CAC1B,AACD,2BACI,gBAAoB,AACpB,eAAkB,AAClB,WAAe,AACf,UAAY,CACf,AACD,yBACI,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACrB,AACD,kBACI,WAAa,CAChB,AACD,sBACI,WAAY,AACZ,oBAAsB,CACzB,AACD,uBACI,qBAAsB,AACtB,sBAAuB,AACvB,UAAe,CAClB,AACD,wBACI,WAAY,AACZ,oBAAsB,CACzB,AACD,mBACI,gBAAiB,AACjB,WAAe,AACf,eAAiB,CACpB,AACD,4BACI,iBAAmB,CACtB,AACD,4EAEI,qBAA0B,CAC7B,AACD,8BACI,gBAAiB,AACjB,WAAa,CAChB,AACD,oCACI,iBAAsB,CACzB,AACD,wBACI,qBAAsB,AACtB,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,8BAAkC,CACrC,AACD,qCACI,mBAAoB,AACpB,YAAa,AACb,aAAc,AACd,iBAAmB,CACtB,AACD,2CACI,UAAe,CAClB,AACD,kEACI,iBAAkB,AAClB,iBAAmB,CACtB,AACD,iEACI,iBAAmB,CACtB,AACD,0EACI,sBAA0B,AAC1B,eAAiB,CACpB,AACD,gFACI,UAAe,CAClB,AACD,sBACI,aAAc,AACd,mBAAoB,AACpB,kBAAoB,CACvB,AACD,iCACI,gBAAiB,AACjB,4BAAgC,CACnC,AACD,yCACI,oBAAsB,CACzB,AACD,iDACI,gBAAoB,AACpB,YAAa,AACb,aAAc,AACd,iBAAmB,CACtB,AACD,iFACI,iBAAkB,AAClB,iBAAmB,CACtB,AACD,gFACI,sBAA0B,AAC1B,eAAiB,CACpB,AACD,gFACI,iBAAmB,CACtB,AACD,uDACI,UAAe,CAClB,AACD,sFACI,UAAe,CAClB,AACD,6CACI,mBAAoB,AACpB,aAAc,AACd,kBAAoB,CAEvB,AACD,mDACI,UAAe,CAClB,AACD,wDACI,cAAgB,CACnB,AACD,0DACI,cAAe,AACf,gBAAkB,CACrB,AACD,uEACI,aAAe,CAClB,AACD,iEACI,YAAa,AACb,eAAgB,AAChB,iBAAmB,CACtB,AACD,iEACI,eAAgB,AAChB,6BAAgC,AAChC,gBAAkB,CACrB,AACD,wEACI,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,4FACI,eAAiB,CACpB,AACD,4FACI,+BAAkC,AAClC,cAAgB,CACnB,AACD,gGACI,sBAA0B,AAC1B,oBAAsB,CACzB,AACD,iEACI,eAAiB,CACpB,AACD,8IAEI,oBAAsB,CACzB",file:"add_role.vue",sourcesContent:['\n.add_role {\r\n    padding: 0 0 20px 20px;\n}\n.add_role .content-wrapper {\r\n    background: #ffffff;\r\n    padding: 0 20px 0;\r\n    color: #333333;\r\n    clear: both;\n}\n.add-wrapper .item-title {\r\n    font-size: 14px;\r\n    height: 56px;\r\n    line-height: 56px;\r\n    padding-left: 8px;\n}\n.add-wrapper form {\r\n    font-size: 0;\n}\n.add-wrapper form>div {\r\n    float: none;\r\n    display: inline-block;\n}\n.add-wrapper .leftside {\r\n    display: inline-block;\r\n    padding: 7px 0 7px 8px;\r\n    color: #999999;\n}\n.add-wrapper .rightside {\r\n    float: none;\r\n    display: inline-block;\n}\n.add-wrapper label {\r\n    font-weight: 400;\r\n    color: #999999;\r\n    margin-bottom: 0;\n}\n.add-wrapper.role-msg label {\r\n    margin-right: 14px;\n}\n.el-select-dropdown__item.selected,\r\n.el-select-dropdown__item.selected.hover {\r\n    background-color: #FF9900;\n}\n.add-wrapper .el-input__inner {\r\n    border-radius: 0;\r\n    width: 300px;\n}\n.add-wrapper .el-input__inner:focus {\r\n    border-color: #ff9900;\n}\n.add-wrapper .menu-item {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n    margin-bottom: 20px;\r\n    border-radius: 2px;\r\n    font-family: "PingFangSC-Regular";\n}\n.add-wrapper .el-radio-button__inner {\r\n    background: #F4F4F4;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 2px;\n}\n.add-wrapper .el-radio-button__inner:hover {\r\n    color: #FF9900;\n}\n.add-wrapper .el-radio-button:first-child .el-radio-button__inner {\r\n    border-left: none;\r\n    border-radius: 2px;\n}\n.add-wrapper .el-radio-button:last-child .el-radio-button__inner {\r\n    border-radius: 2px;\n}\n.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner {\r\n    background-color: #FF9900;\r\n    box-shadow: none;\n}\n.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover {\r\n    color: #ffffff;\n}\n.add-wrapper .submenu {\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    background: #F4F4F4;\n}\n.add-wrapper .submenu .menu-item {\r\n    margin-bottom: 0;\r\n    font-family: "PingFangSC-Light";\n}\n.add-wrapper .submenu .el-checkbox-group {\r\n    display: inline-block;\n}\n.add-wrapper .submenu .el-checkbox-button__inner {\r\n    background: #ffffff;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 2px;\n}\n.add-wrapper .submenu .el-checkbox-button:first-child .el-checkbox-button__inner {\r\n    border-left: none;\r\n    border-radius: 2px;\n}\n.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner {\r\n    background-color: #FF9900;\r\n    box-shadow: none;\n}\n.add-wrapper .submenu .el-checkbox-button:last-child .el-checkbox-button__inner {\r\n    border-radius: 2px;\n}\n.add-wrapper .submenu .el-checkbox-button__inner:hover {\r\n    color: #FF9900;\n}\n.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner:hover {\r\n    color: #ffffff;\n}\n.add-wrapper .func-permission .funcs-content {\r\n    background: #F8F8F8;\r\n    height: 312px;\r\n    margin-bottom: 20px;\r\n    /* padding: 0 20px; */\n}\n.add-wrapper .func-permission .funcs-content label {\r\n    color: #333333;\n}\n.add-wrapper .func-permission .funcs-content .func-item {\r\n    margin-top: 8px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox {\r\n    display: block;\r\n    line-height: 36px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox+.el-checkbox {\r\n    margin-left: 0;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox__input {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-right: 20px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox__label {\r\n    padding-left: 0;\r\n    font-family: "PingFangSC-Light";\r\n    margin-left: 20px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border-bottom: 1px solid #F1F1F1;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__input {\r\n    margin-top: 10px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__label {\r\n    font-family: "PingFangSC-Regular";\r\n    font-size: 16px;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox__input.is-checked .el-checkbox__inner {\r\n    background-color: #ff9900;\r\n    border-color: #ff8d00;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox__inner {\r\n    border-radius: 0;\n}\n.add-wrapper .func-permission .funcs-content .el-checkbox__inner:hover,\r\n.add-wrapper .func-permission .funcs-content .el-checkbox__inner:focus {\r\n    border-color: #ff8d00;\n}\r\n'],sourceRoot:""}])},802:function(e,n,r){var t=r(740);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r(540)("4bde34d3",t,!0)},888:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"add_role"},[r("current",{attrs:{yiji:"系统管理",erji:"角色管理",sanji:"新增角色"}}),e._v(" "),r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"titlebar"},[r("span",{staticClass:"title-text"},[e._v("新增角色")]),e._v(" "),r("el-button",{staticClass:"toolBtn",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("保存")])],1),e._v(" "),r("div",{staticClass:"add-wrapper role-msg"},[r("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("角色信息")]),e._v(" "),r("el-form",{attrs:{inline:!0,model:e.addRoleMsg,"label-position":e.labelPosition,"label-width":"80px"}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.addRoleMsg.roleName,callback:function(n){e.addRoleMsg.roleName=n},expression:"addRoleMsg.roleName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"状态"}},[r("el-select",{model:{value:e.addRoleMsg.status,callback:function(n){e.addRoleMsg.status=n},expression:"addRoleMsg.status"}},[r("el-option",{attrs:{label:"有效",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"无效",value:"0"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{model:{value:e.addRoleMsg.roleDescr,callback:function(n){e.addRoleMsg.roleDescr=n},expression:"addRoleMsg.roleDescr"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"add-wrapper auth-assign"},[r("el-col",{staticClass:"item-title",attrs:{span:24}},[e._v("权限分配")]),e._v(" "),r("div",{staticClass:"context-menu"},[r("el-col",{staticClass:"leftside",attrs:{span:2}},[r("div",[e._v("关联菜单")])]),e._v(" "),r("el-col",{staticClass:"rightside",attrs:{span:22}},[r("div",{staticClass:"menu"},[r("el-radio-group",{on:{change:e.handleCheckedMenusChange},model:{value:e.menuRadio,callback:function(n){e.menuRadio=n},expression:"menuRadio"}},e._l(e.menus,function(e){return r("el-radio-button",{key:e,staticClass:"menu-item",attrs:{label:e}})}))],1),e._v(" "),e.menuRadioFlag?r("div",{staticClass:"submenu"},[r("el-checkbox-button",{staticClass:"menu-item",attrs:{indeterminate:e.isIndeterminate,label:"全部"},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(n){e.checkAll=n},expression:"checkAll"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.handleCheckedSubmenusChange},model:{value:e.checkedSubmenus,callback:function(n){e.checkedSubmenus=n},expression:"checkedSubmenus"}},e._l(e.submenus,function(n){return r("el-checkbox-button",{key:n,staticClass:"menu-item",attrs:{label:n}},[e._v(e._s(n))])}))],1):e._e()])],1),e._v(" "),e.menuRadioFlag?r("div",{staticClass:"func-permission"},[r("el-col",{staticClass:"leftside",attrs:{span:2}},[r("div",[e._v("功能权限")])]),e._v(" "),r("el-col",{staticClass:"rightside",attrs:{span:22}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"funcs-content"},[r("el-checkbox",{staticClass:"func-checkall"},[e._v("组织架构")]),e._v(" "),r("el-checkbox-group",{staticClass:"func-item"},[r("el-checkbox",[e._v("新增机构信息")]),e._v(" "),r("el-checkbox",[e._v("删除机构信息")]),e._v(" "),r("el-checkbox",[e._v("新增机构信息")]),e._v(" "),r("el-checkbox",[e._v("修改机构信息")]),e._v(" "),r("el-checkbox",[e._v("查询机构列表")]),e._v(" "),r("el-checkbox",[e._v("新增机构信息")])],1)],1)]),e._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"funcs-content"},[r("el-checkbox",{staticClass:"func-checkall"},[e._v("用户管理")]),e._v(" "),r("el-checkbox-group",{staticClass:"func-item"},[r("el-checkbox",[e._v("用户管理1")]),e._v(" "),r("el-checkbox",[e._v("用户管理2")]),e._v(" "),r("el-checkbox",[e._v("用户管理3")]),e._v(" "),r("el-checkbox",[e._v("用户管理4")])],1)],1)])],1)],1)],1):e._e()],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.4063a0bf1f5e6f627101.js.map