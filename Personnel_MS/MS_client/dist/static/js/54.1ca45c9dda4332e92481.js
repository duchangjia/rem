webpackJsonp([54],{556:function(t,e,a){function i(t){a(825)}var n=a(194)(a(660),a(937),i,null,null);t.exports=n.exports},624:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},625:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"人事调动"===this.erji&&t.push("/personnel_transfer"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&t.push("/payChange_manage"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&t.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&t.push("/detail_transfer"),"人事调动详情"===this.sanji&&t.push("/transfer_info"),"人事调动修改"===this.sanji&&t.push("/edit_transfer"),"人事调动新增"===this.sanji&&t.push("/add_transfer"),"员工离职明细查询"===this.sanji&&t.push("/detail_dimission"),"员工离职详情"===this.sanji&&t.push("/dimission_info"),"员工离职修改"===this.sanji&&t.push("/edit_dimission"),"员工离职新增"===this.sanji&&t.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&t.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&t.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&t.push("/edit_payChangeInfo"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},626:function(t,e,a){e=t.exports=a(540)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},627:function(t,e,a){var i=a(626);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(541)("488e4eea",i,!0)},628:function(t,e,a){function i(t){a(627)}var n=a(194)(a(625),a(629),i,"data-v-d69b0f44",null);t.exports=n.exports},629:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:a(624),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},660:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(628),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={data:function(){var t=this;return{cParmDetal:{applyNo:"",compName:"",applyName:"",rank:"",salaryFloor:"",salaryTop:"",businessStandard:"",remark:""},rankList:["B10-高级开发软件工程师","B5-中级开发软件工程师","B5-UI"],rules:{applyName:[{required:!0,message:"模版名称不能为空",trigger:"blur"}],rank:[{required:!0,message:"职级不能为空",trigger:"blur"}],salaryFloor:[{required:!0,message:"薪资标准下线不能为空",trigger:"blur"}],salaryTop:[{required:!0,validator:function(e,a,i){""===a?i(new Error("请输入薪资标准上线")):Number(a)<=Number(t.cParmDetal.salaryFloor)?i(new Error("上限值必须大于下限值!")):i()},trigger:"blur"}]}}},components:{current:n.default},created:function(){var t=this,e=t.$route.params.applyNo,a={applyNo:e};t.queryCParmDtl(a)},methods:{save:function(t){var e=this,a=this;this.$refs[t].validate(function(t){if(!t)return e.$message.error("修改失败"),!1;var i={applyNo:a.cParmDetal.applyNo,compName:a.cParmDetal.compName,applyName:a.cParmDetal.applyName,rank:a.cParmDetal.rank,salaryFloor:a.cParmDetal.salaryFloor,salaryTop:a.cParmDetal.salaryTop,businessStandard:a.cParmDetal.businessStandard,remark:a.cParmDetal.remark};a.modCparm(i)})},queryCParmDtl:function(t){var e=this;e.$axios.get("iem_hrm/queryCParmDtl",{params:t}).then(function(t){console.log(t),e.cParmDetal=t.data.data}).catch(function(t){console.log(t)})},modCparm:function(t){var e=this;e.$axios.put("iem_hrm/modCparm",t).then(function(t){console.log(t),e.$message({message:"税率组修改成功",type:"success"})}).catch(function(t){console.log(t)})}}}},738:function(t,e,a){e=t.exports=a(540)(!0),e.push([t.i,'.edit_rank{padding-left:20px;padding-bottom:20px;width:100%}.edit_rank .content{width:100%;min-height:510px;padding:0 20px;background:#fff;clear:both}.edit_rank .content .title{border-bottom:1px solid #eee}.edit_rank .content .title .title-text{display:inline-block;position:relative;padding:29px 0;font-size:16px;letter-spacing:0}.edit_rank .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.edit_rank .content-inner{padding:40px 0}.edit_rank .conserve{float:right;margin-top:20px;background:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;font-size:14px;color:#333;width:120px;height:40px}.edit_rank .el-form-item{margin-bottom:22px;float:left;width:50%}.edit_rank .el-input__inner{border:1px solid #eee;color:#999;width:300px;height:40px;margin-left:30px}.edit_rank .el-form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#999;line-height:1;padding:11px 0;box-sizing:border-box}.edit_rank .el-form-item__error{padding-left:30px}',"",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/edit_rank.vue"],names:[],mappings:"AACA,WACC,kBAAmB,AACnB,oBAAqB,AACrB,UAAY,CACZ,AACD,oBACC,WAAY,AACZ,iBAAkB,AAClB,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,2BACC,4BAAiC,CACjC,AACD,uCACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,eAAgB,AAChB,gBAAkB,CAClB,AACD,6CACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AACD,0BACC,cAAkB,CAClB,AACD,qBACC,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,yBAA0B,AAC1B,gBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,YAAa,AACb,WAAa,CACb,AACD,yBACC,mBAAoB,AACpB,WAAY,AACZ,SAAW,CACX,AACD,4BACC,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACb,YAAa,AACb,gBAAkB,CAClB,AACD,gCACC,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,WAAe,AACf,cAAe,AACf,eAAyB,AACzB,qBAAuB,CACvB,AACD,gCACC,iBAAmB,CACnB",file:"edit_rank.vue",sourcesContent:["\n.edit_rank {\n\tpadding-left: 20px;\n\tpadding-bottom: 20px;\n\twidth: 100%;\n}\n.edit_rank .content {\n\twidth: 100%;\n\tmin-height: 510px;\n\tpadding: 0px 20px;\n\tbackground: #ffffff;\n\tclear: both;\n}\n.edit_rank .content .title {\n\tborder-bottom: 1px solid #EEEEEE;\n}\n.edit_rank .content .title .title-text {\n\tdisplay: inline-block;\n\tposition: relative;\n\tpadding: 29px 0px;\n\tfont-size: 16px;\n\tletter-spacing: 0;\n}\n.edit_rank .content .title .title-text:after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\tbottom: -1px;\n\twidth: 100%;\n\theight: 2px;\n\tbackground: #333333;\n}\n.edit_rank .content-inner {\n\tpadding: 40px 0px;\n}\n.edit_rank .conserve {\n\tfloat: right;\n\tmargin-top: 20px;\n\tbackground: #F4F4F4;\n\tborder: 1px solid #F4F4F4;\n\tborder-radius: 0px;\n\tfont-size: 14px;\n\tcolor: #333333;\n\twidth: 120px;\n\theight: 40px;\n}\n.edit_rank .el-form-item {\n\tmargin-bottom: 22px;\n\tfloat: left;\n\twidth: 50%;\n}\n.edit_rank .el-input__inner {\n\tborder: 1px solid #EEEEEE;\n\tcolor: #999999;\n\twidth: 300px;\n\theight: 40px;\n\tmargin-left: 30px;\n}\n.edit_rank .el-form-item__label {\n\ttext-align: right;\n\tvertical-align: middle;\n\tfloat: left;\n\tfont-size: 14px;\n\tcolor: #999999;\n\tline-height: 1;\n\tpadding: 11px 0px 11px 0;\n\tbox-sizing: border-box;\n}\n.edit_rank .el-form-item__error {\n\tpadding-left: 30px;\n}\n"],sourceRoot:""}])},825:function(t,e,a){var i=a(738);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(541)("67c2e531",i,!0)},937:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit_rank"},[a("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"职级薪酬标准设置",siji:"职级薪酬标准修改"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"title-text"},[t._v("职级薪酬标准修改")]),t._v(" "),a("el-button",{staticClass:"conserve",attrs:{type:"primary"},on:{click:function(e){t.save("cParmDetal")}}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"content-inner"},[a("el-form",{ref:"cParmDetal",attrs:{rules:t.rules,model:t.cParmDetal,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"模版编号",prop:"applyNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.cParmDetal.applyNo,callback:function(e){t.cParmDetal.applyNo=e},expression:"cParmDetal.applyNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公司名称",prop:"compName"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.cParmDetal.compName,callback:function(e){t.cParmDetal.compName=e},expression:"cParmDetal.compName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"模版名称",prop:"applyName"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.cParmDetal.applyName,callback:function(e){t.cParmDetal.applyName=e},expression:"cParmDetal.applyName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职级",prop:"rank"}},[a("el-select",{model:{value:t.cParmDetal.rank,callback:function(e){t.cParmDetal.rank=e},expression:"cParmDetal.rank"}},t._l(t.rankList,function(t){return a("el-option",{key:t,attrs:{value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"薪资标准下线",prop:"salaryFloor"}},[a("el-input",{model:{value:t.cParmDetal.salaryFloor,callback:function(e){t.cParmDetal.salaryFloor=e},expression:"cParmDetal.salaryFloor"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"薪资标准上线",prop:"salaryTop"}},[a("el-input",{model:{value:t.cParmDetal.salaryTop,callback:function(e){t.cParmDetal.salaryTop=e},expression:"cParmDetal.salaryTop"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"出差标准（人/天）"}},[a("el-input",{model:{value:t.cParmDetal.businessStandard,callback:function(e){t.cParmDetal.businessStandard=e},expression:"cParmDetal.businessStandard"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:t.cParmDetal.remark,callback:function(e){t.cParmDetal.remark=e},expression:"cParmDetal.remark"}})],1)],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=54.1ca45c9dda4332e92481.js.map