webpackJsonp([59],{549:function(t,e,i){function a(t){i(842)}var r=i(194)(i(653),i(954),a,null,null);t.exports=r.exports},624:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},625:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"人事调动详情"===this.sanji&&t.push("/transfer_info"),"人事调动修改"===this.sanji&&t.push("/edit_transfer"),"人事调动新增"===this.sanji&&t.push("/add_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"员工离职详情"===this.sanji&&t.push("/dimission_info"),"员工离职修改"===this.sanji&&t.push("/edit_dimission"),"员工离职新增"===this.sanji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},626:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},627:function(t,e,i){var a=i(626);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(541)("488e4eea",a,!0)},628:function(t,e,i){function a(t){i(627)}var r=i(194)(i(625),i(629),a,"data-v-d69b0f44",null);t.exports=r.exports},629:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-wrapper"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?a("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[a("img",{staticClass:"pic",attrs:{src:i(624),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},653:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(628),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{formdata:{groupNo:"",groupId:"",startTime:"",endTime:"",remark:""},rules:{groupNo:[{required:!0,message:"组名称不能为空",trigger:"blur"}],groupId:[{required:!0,message:"组ID不能为空",trigger:"blur"}],startTime:[]}}},components:{current:r.default},methods:{changeStartTime:function(t){this.formdata.startTime=t},changeEndTime:function(t){this.formdata.endTime=t},save:function(t){var e=this,i=this;this.$refs[t].validate(function(t){if(!t)return e.$message.error("新增失败"),!1;console.log(i.formdata.groupId),console.log(i.formdata.startTime),console.log(i.formdata.endTime);var a={groupNo:i.formdata.groupNo,groupId:i.formdata.groupId,startTime:i.formdata.startTime,isDelete:"1"};i.insertTaxRateGroup(a)})},insertTaxRateGroup:function(t){var e=this;e.$axios.post("iem_hrm/taxRateGroup/insertTaxRateGroup",t).then(function(t){console.log(t),e.$message({message:"税率组新增成功",type:"success"})}).catch(function(t){console.log("err")})}}}},755:function(t,e,i){e=t.exports=i(540)(!0),e.push([t.i,'.add_rateGroup{padding-left:20px;padding-bottom:20px;width:100%}.add_rateGroup .content{width:100%;min-height:510px;padding:0 20px;background:#fff;clear:both}.add_rateGroup .content .title{border-bottom:1px solid #eee}.add_rateGroup .content .title .title-text{display:inline-block;position:relative;padding:29px 0;font-size:16px;letter-spacing:0}.add_rateGroup .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.add_rateGroup .content-inner{padding:40px 0}.add_rateGroup .conserve{float:right;margin-top:20px;background:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;font-size:14px;color:#333;width:120px;height:40px}.add_rateGroup .el-input__inner{border:1px solid #eee;color:#999;width:300px;height:40px;margin-left:30px}.el-date-editor.el-input{width:300px;margin-left:30px}.el-date-editor.el-input .el-input__inner{margin-left:0}.add_rateGroup .el-form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#999;line-height:1;padding:11px 0;box-sizing:border-box}.add_rateGroup .el-form-item__error{padding-left:30px}',"",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/add_rateGroup.vue"],names:[],mappings:"AACA,eACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,wBACC,WAAY,AACZ,iBAAkB,AAClB,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,+BACA,4BAAiC,CAChC,AACD,2CACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,eAAgB,AAChB,gBAAkB,CAClB,AACD,iDACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AACD,8BACC,cAAkB,CAClB,AACD,yBACC,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,WAAa,CACb,AACD,gCACI,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACb,YAAa,AACb,gBAAkB,CACrB,AACD,yBACI,YAAa,AACb,gBAAkB,CACrB,AACD,0CACI,aAAiB,CACpB,AACD,oCACI,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,WAAe,AACf,cAAe,AACf,eAAyB,AACzB,qBAAuB,CAC1B,AACD,oCACI,iBAAmB,CACtB",file:"add_rateGroup.vue",sourcesContent:["\n.add_rateGroup {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.add_rateGroup .content {\r\n\twidth: 100%;\r\n\tmin-height: 510px;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.add_rateGroup .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.add_rateGroup .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 29px 0px;\r\n\tfont-size: 16px;\r\n\tletter-spacing: 0;\n}\n.add_rateGroup .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.add_rateGroup .content-inner {\r\n\tpadding: 40px 0px;\n}\n.add_rateGroup .conserve {\r\n\tfloat: right;\r\n\tmargin-top: 20px;\r\n\tbackground: #F4F4F4;\r\n\tborder: 1px solid #F4F4F4;\r\n\tborder-radius: 0px;\r\n\tfont-size: 14px;\r\n\tcolor: #333333;\r\n\twidth: 120px;\r\n\theight: 40px;\n}\n.add_rateGroup .el-input__inner {\r\n    border: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    width: 300px;\r\n    height: 40px;\r\n    margin-left: 30px;\n}\n.el-date-editor.el-input {\r\n    width: 300px;\r\n    margin-left: 30px;\n}\n.el-date-editor.el-input .el-input__inner {\r\n    margin-left: 0px;\n}\n.add_rateGroup .el-form-item__label {\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    float: left;\r\n    font-size: 14px;\r\n    color: #999999;\r\n    line-height: 1;\r\n    padding: 11px 0px 11px 0;\r\n    box-sizing: border-box;\n}\n.add_rateGroup .el-form-item__error {\r\n    padding-left: 30px;\n}\r\n"],sourceRoot:""}])},842:function(t,e,i){var a=i(755);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(541)("7ec294cb",a,!0)},954:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add_rateGroup"},[i("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"个人所得税税率设置",siji:"税率组新增"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("span",{staticClass:"title-text"},[t._v("税率组新增")]),t._v(" "),i("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(e){t.save("formdata")}}},[t._v("保存")])],1),t._v(" "),i("div",{staticClass:"content-inner"},[i("el-form",{ref:"formdata",attrs:{rules:t.rules,model:t.formdata,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"组名称",prop:"groupNo"}},[i("el-input",{model:{value:t.formdata.groupNo,callback:function(e){t.formdata.groupNo=e},expression:"formdata.groupNo"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"组ID",prop:"groupId"}},[i("el-input",{model:{value:t.formdata.groupId,callback:function(e){t.formdata.groupId=e},expression:"formdata.groupId"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"生效日期",prop:"startTime"}},[i("el-date-picker",{attrs:{type:"date"},on:{change:t.changeStartTime},model:{value:t.formdata.startTime,callback:function(e){t.formdata.startTime=e},expression:"formdata.startTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"失效日期",prop:"endTime"}},[i("el-date-picker",{attrs:{type:"date",placeholder:"如无，则不填"},on:{change:t.changeEndTime},model:{value:t.formdata.endTime,callback:function(e){t.formdata.endTime=e},expression:"formdata.endTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注"}},[i("el-input",{model:{value:t.formdata.remark,callback:function(e){t.formdata.remark=e},expression:"formdata.remark"}})],1)],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=59.08b8c7f0b20551538454.js.map