webpackJsonp([90],{1105:function(t,e,i){var n=i(991);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(547)("440f26ca",n,!0)},1242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_agency"},[i("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"机构CCC管理",siji:"CCC新增"}}),t._v(" "),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"title"},[i("span",{staticClass:"text"},[t._v("CCC新增")]),i("button",{staticClass:"save",on:{click:t.save}},[t._v("保存")])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"item_group"},[i("span",{staticClass:"text"},[t._v("机构名称")]),i("div",{staticStyle:{display:"inline-block",position:"relative"}},[i("el-select",{staticClass:"common",attrs:{placeholder:"请选择机构"},on:{change:function(e){t.hidden(1)}},model:{value:t.obj.organName,callback:function(e){t.obj.organName=e},expression:"obj.organName"}},t._l(t.optionItem,function(t){return i("el-option",{attrs:{label:t,value:t}})})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rules.organName,expression:"rules.organName"}],staticStyle:{position:"absolute",top:"35px",color:"#ff4949"}},[t._v(t._s(t.rules.organName))])],1),t._v(" "),i("span",{staticClass:"text"},[t._v("CCC类型")]),i("div",{staticStyle:{display:"inline-block",position:"relative"}},[i("el-select",{attrs:{placeholder:"请选择CCC类型"},on:{change:function(e){t.hidden(2)}},model:{value:t.obj.costType,callback:function(e){t.obj.costType=e},expression:"obj.costType"}},[i("el-option",{attrs:{label:"管理CCC",value:"01"}}),t._v(" "),i("el-option",{attrs:{label:"售前CCC",value:"02"}}),t._v(" "),i("el-option",{attrs:{label:"项目CCC",value:"03"}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rules.costType,expression:"rules.costType"}],staticStyle:{position:"absolute",top:"35px",color:"#ff4949"}},[t._v(t._s(t.rules.costType))])],1)]),t._v(" "),i("div",{staticClass:"item_group"},[i("span",{staticClass:"text"},[t._v("CCC值")]),i("div",{staticStyle:{display:"inline-block",position:"relative"}},[i("el-input",{staticClass:"common",attrs:{maxlength:32},on:{blur:function(e){t.check(t.obj.costCode,3)},focus:function(e){t.hidden(3)}},model:{value:t.obj.costCode,callback:function(e){t.obj.costCode=e},expression:"obj.costCode"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rules.costCode,expression:"rules.costCode"}],staticStyle:{position:"absolute",top:"35px",color:"#ff4949"}},[t._v(t._s(t.rules.costCode))])],1),t._v(" "),i("span",{staticClass:"text"},[t._v("备注")]),i("el-input",{attrs:{maxlength:256},on:{blur:function(e){t.check(t.obj.descr,4)},focus:function(e){t.hidden(4)}},model:{value:t.obj.descr,callback:function(e){t.obj.descr=e},expression:"obj.descr"}})],1)])])])],1)},staticRenderFns:[]}},551:function(t,e,i){function n(t){i(1105)}var s=i(197)(i(811),i(1242),n,null,null);t.exports=s.exports},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},659:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"首页"===this.yiji&&t.push("/home"),"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"考勤管理"===this.yiji&&t.push("/attendance_record"),"资产管理"===this.yiji&&t.push("/assetReq_manage"),"员工自助"===this.yiji&&t.push("/query_personalInfo"),"基本信息"===this.erji&&t.push("/user_center"),"修改密码"===this.erji&&t.push("/modify_password"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"考勤记录管理"===this.erji&&t.push("/attendance_record"),"出差管理"===this.erji&&t.push("/travel_management"),"请假管理"===this.erji&&t.push("/leave_management"),"加班管理"===this.erji&&t.push("/overtime_management"),"资产登记管理"===this.erji&&t.push("/assetReq_manage"),"个人信息查询"===this.erji&&t.push("/query_personalInfo"),"开票信息查询"===this.erji&&t.push("/query_billingInfo"),"直线经理管理"===this.erji&&t.push("/lineManager_Mgmt"),"资产使用管理"===this.erji&&t.push("/assetUse_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/edit_userM"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"出差新增"===this.sanji&&t.push("/add_travel"),"出差详情"===this.sanji&&t.push("/travel_info"),"出差修改"===this.sanji&&t.push("/edit_travel"),"请假新增"===this.sanji&&t.push("/add_leave"),"请假详情"===this.sanji&&t.push("/leave_info"),"请假修改"===this.sanji&&t.push("/edit_leave"),"加班新增"===this.sanji&&t.push("/add_overtime"),"加班详情"===this.sanji&&t.push("/overtime_info"),"加班修改"===this.sanji&&t.push("/edit_overtime"),"资产信息查询"===this.sanji&&t.push("/query_asset"),"请假审批"===this.sanji&&t.push("/leave_approval"),"资产使用修改"===this.sanji&&t.push("/edit_assetUse"),"资产使用新增"===this.sanji&&t.push("/add_assetUse"),"资产使用详情"===this.sanji&&t.push("/detail_assetUse"),"人事调动详情"===this.siji&&t.push("/transfer_info"),"人事调动修改"===this.siji&&t.push("/edit_transfer"),"人事调动新增"===this.siji&&t.push("/add_transfer"),"员工离职详情"===this.siji&&t.push("/dimission_info"),"员工离职修改"===this.siji&&t.push("/edit_dimission"),"员工离职新增"===this.siji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"CCC修改"===this.siji&&t.push("/modify_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"开票信息修改"===this.siji&&t.push("/edit_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"资产详情"===this.siji&&t.push("/detail_asset"),"资产新增"===this.siji&&t.push("/add_asset"),"资产修改"===this.siji&&t.push("/edit_asset"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},liuji:{type:String,default:""},activeTab:{type:String,default:""}}}},660:function(t,e,i){e=t.exports=i(546)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},661:function(t,e,i){var n=i(660);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(547)("becca3a2",n,!0)},662:function(t,e,i){function n(t){i(661)}var s=i(197)(i(659),i(663),n,"data-v-d69b0f44",null);t.exports=s.exports},663:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"location-wrapper"},[n("el-row",[n("el-col",{attrs:{span:22}},[n("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t.liuji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[5]}}},[t._v(t._s(t.liuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),n("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[n("img",{staticClass:"pic",attrs:{src:i(658),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},811:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(662),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{obj:{organName:"",costType:"",costCode:"",descr:""},rules:{organName:"",costCode:"",costType:"",descr:""},optionItem:{}}},created:function(){var t=this;this.$axios.get("/iem_hrm/organ/getOrganName").then(function(e){console.log(e),t.optionItem=e.data}).catch(function(t){console.log(t)})},methods:{check:function(t,e){t||1!=e||(this.rules.organName="请输入机构名称"),t||3!=e||(this.rules.costCode="请输入CCC值"),t.length>31&&3==e&&(this.rules.costCode="长度不能大于32字节"),isNaN(1*(t-0))&&3==e&&(this.rules.costCode="只能输入数字"),t||2!=e||(this.rules.costType="请选择CCC类型"),t.length>255&&4==e&&(this.rules.descr="长度不能大于256字节")},hidden:function(t){1==t&&(this.rules.organName=""),3==t&&(this.rules.costCode=""),2==t&&(this.rules.costType=""),4==t&&(this.rules.descr="")},save:function(){var t=this,e=!this.rules.organName,i=!this.rules.costCode,n=!this.rules.costType;if(!(this.obj.organName&&this.obj.costCode&&this.obj.costType))return e&&(this.rules.organName="请输入机构名称"),i&&(this.rules.costCode="请输入CCC值"),n&&(this.rules.costType="请选择CCC类型"),t.$message({message:"请输入完整信息",type:"error"}),!1;this.$axios.post("/iem_hrm/organ/addOrgCCC",this.obj).then(function(e){var i=e.data.retMsg;"操作成功"===i?t.$message({message:i,type:"success"}):t.$message({message:i,type:"error"})}).catch(function(t){console.log("新增CCC失败",t)})}},components:{current:s.default}}},991:function(t,e,i){e=t.exports=i(546)(!0),e.push([t.i,".add_agency{padding:0 0 20px 20px;overflow:hidden;position:relative}.add_agency .test{padding-left:10px}.add_agency .content-wrapper{background:#fff;padding-left:20px;padding-right:20px;height:746px}.add_agency .content-wrapper .title{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0;height:80px;line-height:80px;border-bottom:1px solid #f4f4f4;position:relative}.add_agency .content-wrapper .title .text{border-bottom:2px solid #000;display:inline-block;height:80px}.add_agency .content-wrapper .title .save{width:120px;height:40px;background:#f4f4f4;border:none;outline:none;font-family:PingFangSC-Regular;font-size:14px;line-height:40px;text-align:center;position:absolute;right:0;bottom:20px}.add_agency .content-wrapper .title .save:hover{background:#f90;color:#fff}.add_agency .content-wrapper .content{padding:42px 0 0 8px}.add_agency .content-wrapper .content .item_group{margin-bottom:30px;height:40px;line-height:40px}.add_agency .content-wrapper .content .item_group .text{font-family:PingFangSC-Regular;font-size:14px;color:#999;letter-spacing:0;margin-right:30px;display:inline-block;width:60px;height:40px;line-height:40px;text-align:right}.add_agency .content-wrapper .content .item_group .common{margin-right:120px}.add_agency .content-wrapper .content .item_group .fade_check{position:absolute;top:35px;color:#ff4949;height:0}.add_agency .content-wrapper .content .item_group .fade_check_animation{transition:height .5s;height:5px}.add_agency .content-wrapper .content .item_group .el-input{width:300px;height:40px}.add_agency .content-wrapper .content .item_group .el-input .el-input__inner{width:100%;height:100%}.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:focus,.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:hover{border-color:#f90}","",{version:3,sources:["C:/Users/dongx/Desktop/xiangmu2/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_agency.vue"],names:[],mappings:"AACA,YACE,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,kBACE,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,YAAc,CACf,AACD,oCACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,0CACE,6BAA8B,AAC9B,qBAAsB,AACtB,WAAa,CACd,AACD,0CACE,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,YAAa,AACb,aAAc,AACd,+BAAgC,AAChC,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,WAAa,CACd,AACD,gDACE,gBAAiB,AACjB,UAAY,CACb,AACD,sCACE,oBAAsB,CACvB,AACD,kDACE,mBAAoB,AACpB,YAAa,AACb,gBAAkB,CACnB,AACD,wDACE,+BAAgC,AAChC,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAkB,CACnB,AACD,0DACE,kBAAoB,CACrB,AACD,8DACE,kBAAmB,AACnB,SAAU,AACV,cAAe,AACf,QAAU,CACX,AACD,wEACE,sBAAwB,AACxB,UAAY,CACb,AACD,4DACE,YAAa,AACb,WAAa,CACd,AACD,6EACE,WAAY,AACZ,WAAa,CACd,AAID,sKACE,iBAAmB,CACpB",file:"add_agency.vue",sourcesContent:["\n.add_agency {\n  padding: 0 0 20px 20px;\n  overflow: hidden;\n  position: relative;\n}\n.add_agency .test {\n  padding-left: 10px;\n}\n.add_agency .content-wrapper {\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 746px;\n}\n.add_agency .content-wrapper .title {\n  font-family: PingFangSC-Regular;\n  font-size: 16px;\n  color: #333;\n  letter-spacing: 0;\n  height: 80px;\n  line-height: 80px;\n  border-bottom: 1px solid #f4f4f4;\n  position: relative;\n}\n.add_agency .content-wrapper .title .text {\n  border-bottom: 2px solid #000;\n  display: inline-block;\n  height: 80px;\n}\n.add_agency .content-wrapper .title .save {\n  width: 120px;\n  height: 40px;\n  background: #f4f4f4;\n  border: none;\n  outline: none;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  line-height: 40px;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  bottom: 20px;\n}\n.add_agency .content-wrapper .title .save:hover {\n  background: #f90;\n  color: #fff;\n}\n.add_agency .content-wrapper .content {\n  padding: 42px 0 0 8px;\n}\n.add_agency .content-wrapper .content .item_group {\n  margin-bottom: 30px;\n  height: 40px;\n  line-height: 40px;\n}\n.add_agency .content-wrapper .content .item_group .text {\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #999;\n  letter-spacing: 0;\n  margin-right: 30px;\n  display: inline-block;\n  width: 60px;\n  height: 40px;\n  line-height: 40px;\n  text-align: right;\n}\n.add_agency .content-wrapper .content .item_group .common {\n  margin-right: 120px;\n}\n.add_agency .content-wrapper .content .item_group .fade_check {\n  position: absolute;\n  top: 35px;\n  color: #ff4949;\n  height: 0;\n}\n.add_agency .content-wrapper .content .item_group .fade_check_animation {\n  transition: height 0.5s;\n  height: 5px;\n}\n.add_agency .content-wrapper .content .item_group .el-input {\n  width: 300px;\n  height: 40px;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner {\n  width: 100%;\n  height: 100%;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:focus {\n  border-color: #f90;\n}\n.add_agency .content-wrapper .content .item_group .el-input .el-input__inner:hover {\n  border-color: #f90;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=90.b372bc147904a169770c.js.map