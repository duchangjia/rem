webpackJsonp([13],{563:function(e,t,n){function i(e){n(885)}var r=n(194)(n(667),n(997),i,null,null);e.exports=r.exports},624:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var e=this.link[this.breadItemLength-2];if(!e)return!1;this.activeTab?this.$router.push({name:e,params:{activeTab:this.activeTab}}):this.$router.push(e)}},computed:{links:function(){var e=[];return"系统管理"===this.yiji&&e.push("/management_framework"),"人事事务"===this.yiji&&e.push("/personnel_contract"),"参数管理"===this.yiji&&e.push("/argument_1"),"薪酬福利"===this.yiji&&e.push("/payBaseInfo_setting"),"用户管理"===this.erji&&e.push("/management_user"),"角色管理"===this.erji&&e.push("/management_role"),"功能管理"===this.erji&&e.push("/management_fun"),"组织架构"===this.erji&&e.push("/management_framework"),"人事合同"===this.erji&&e.push("/personnel_contract"),"人事调动"===this.erji&&e.push("/personnel_transfer"),"业务参数"===this.erji&&e.push("/argument_2"),"薪酬基数设置"===this.erji&&e.push("/payBaseInfo_setting"),"调薪管理"===this.erji&&e.push("/payChange_manage"),"编辑部门"===this.sanji&&e.push("/edit_department"),"新增机构人员"===this.sanji&&e.push("/add_person"),"新增子部门"===this.sanji&&e.push("/add_junior"),"新增角色"===this.sanji&&e.push("/add_role"),"编辑角色"===this.sanji&&e.push("/edit_role"),"用户信息"===this.sanji&&e.push("/user-info"),"功能编辑"===this.sanji&&e.push("/edit_fun"),"合同新增"===this.sanji&&e.push("/add_contract"),"合同修改"===this.sanji&&e.push("/edit_contract"),"合同详情"===this.sanji&&e.push("detail_contract"),"合同变更"===this.sanji&&e.push("/add_pactChange"),"合同续签"===this.sanji&&e.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&e.push("/agency_argument"),"免签节假日维护"===this.sanji&&e.push("/holiday_info"),"公司开票信息维护"===this.sanji&&e.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&e.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&e.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&e.push("/rank"),"薪酬基数新增"===this.sanji&&e.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&e.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&e.push("/detail_payBaseInfo"),"调薪查询"===this.sanji&&e.push("/query_payChangeInfo"),"人事调动明细查询"===this.sanji&&e.push("/detail_transfer"),"人事调动详情"===this.sanji&&e.push("/transfer_info"),"人事调动修改"===this.sanji&&e.push("/edit_transfer"),"人事调动新增"===this.sanji&&e.push("/add_transfer"),"员工离职明细查询"===this.sanji&&e.push("/detail_dimission"),"员工离职详情"===this.sanji&&e.push("/dimission_info"),"员工离职修改"===this.sanji&&e.push("/edit_dimission"),"员工离职新增"===this.sanji&&e.push("/add_dimission"),"福利缴纳系数新增"===this.siji&&e.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&e.push("/welfare_info"),"个人所得税税率详情"===this.siji&&e.push("/rate_info"),"税率组新增"===this.siji&&e.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&e.push("/add_rank"),"职级薪酬标准修改"===this.siji&&e.push("/edit_rank"),"CCC新增"===this.siji&&e.push("/add_agency"),"节假日新增"===this.siji&&e.push("/add_holiday"),"开票信息新增"===this.siji&&e.push("/add_ticket"),"合同变更详情"===this.siji&&e.push("/detail_pactChange"),"合同变更修改"===this.siji&&e.push("/edit_pactChange"),"合同续签详情"===this.siji&&e.push("/detail_pactRenew"),"合同续签修改"===this.siji&&e.push("/edit_pactRenew"),"调薪基数详情"===this.siji&&e.push("/detail_payChangeInfo"),"调薪基数新增"===this.siji&&e.push("/add_payChangeInfo"),"调薪基数修改"===this.siji&&e.push("/edit_payChangeInfo"),"税率新增"===this.wuji&&e.push("/add_rate"),"税率修改"===this.wuji&&e.push("/edit_rate"),this.link=e,this.breadItemLength=e.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},626:function(e,t,n){t=e.exports=n(540)(!0),t.push([e.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},627:function(e,t,n){var i=n(626);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(541)("488e4eea",i,!0)},628:function(e,t,n){function i(e){n(627)}var r=n(194)(n(625),n(629),i,"data-v-d69b0f44",null);e.exports=r.exports},629:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"location-wrapper"},[i("el-row",[i("el-col",{attrs:{span:22}},[i("span",{staticClass:"title"},[e._v("当前位置：")]),e._v(" "),i("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[e.yiji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[0]}}},[e._v(e._s(e.yiji))]):e._e(),e._v(" "),e.erji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[1]}}},[e._v(e._s(e.erji))]):e._e(),e._v(" "),e.sanji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[2]}}},[e._v(e._s(e.sanji))]):e._e(),e._v(" "),e.siji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[3]}}},[e._v(e._s(e.siji))]):e._e(),e._v(" "),e.wuji?i("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:e.links[4]}}},[e._v(e._s(e.wuji))]):e._e(),e._v(" "),e._e()],1)],1),e._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:e.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[i("img",{staticClass:"pic",attrs:{src:n(624),alt:"pic",width:"19",height:"12"},on:{click:e.jump}})])],1)],1)},staticRenderFns:[]}},630:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOBHtk71KBEEQhL+5W0yNzPwB8Q9BBQMjQ8HI0BcQuXsOwYt8Ak9RczOfw8hcERNZjMT03LFm1r4ZV4U1t6Gp7qra3p1m1pGFP2VW7Y1yI6NT6bjDs+f6PBnZseIT+8KSCZbosvglAwfPyuAZR+EvmKJiMjIV08KSd72nGTVX4pjx5yxEucOr02ffq5lv+lv2Dy19LWz+jGM/ZDdYdaxV1Zf2WKgDF7UhO+qPTEtL9Gzq5MtRGDEn3DZTrGtO01lRbpmWBhjzR/wfAD/voOBWuxxk+xxQcxlVl8U3RoQ74EVwZZrrpdo4w3zAm8i18T03RxMr1nUPgjdGGtDlhBHX+pEOTfwFH3WcfdM+AIWpQWD6aSkoAAAAAElFTkSuQmCC"},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(628),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{pageIndex:1,pageRows:2,totalRows:1,welfareList:[{applyNo:"00001",applyName:"广州地区缴纳",remark:"",createdBy:"",createdDate:""},{applyNo:"00002",applyName:"深圳地区缴纳",remark:"",createdBy:"",createdDate:""},{applyNo:"00003",applyName:"东莞地区缴纳",remark:"",createdBy:"",createdDate:""}]}},components:{current:r.default},created:function(){var e=this,t={pageNum:1,pageSize:4};e.queryInsurancePayTemplates(1,4,t)},methods:{addWelfare:function(){this.$router.push("/add_welfare")},handleEdit:function(e,t){console.log("index:"+e,"row.modelNo:"+t.applyNo),this.$router.push({name:"welfare_info",params:{applyNo:t.applyNo}})},handleDelete:function(e,t){var n=this;n.$confirm("此操作将会删除该条模版, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={};n.deleteInsurancePayTemplate(e)}).catch(function(){n.$message("您已取消删除模版！")})},handleCurrentChange:function(e){console.log("当前页",e);var t=this,n=e,i={pageNum:n,pageSize:4};t.queryInsurancePayTemplates(n,4,i)},queryInsurancePayTemplates:function(e,t,n){var i=this;i.$axios.get("iem_hrm/queryInsurancePayTemplates",{params:n}).then(function(n){console.log("res",n),i.welfareList=n.data.data.WelfareList,i.totalRows=Number(n.data.data.total),i.pageIndex=e,i.pageRows=t,i.totalRows=Number(n.data.data.total)}).catch(function(e){console.log(e)})},deleteInsurancePayTemplate:function(e){var t=this;t.$axios.delete("iem_hrm/deleteInsurancePayTemplate").then(function(e){console.log(e),t.$message({type:"success",message:"删除成功!"})}).catch(function(e){t.$message.error("删除失败")})}}}},798:function(e,t,n){t=e.exports=n(540)(!0),t.push([e.i,'.welfare_coefficient{padding-left:20px;padding-bottom:20px;width:100%}.welfare_coefficient .content{width:100%;min-height:510px;padding:0 20px;background:#fff;clear:both}.welfare_coefficient .content .title{border-bottom:1px solid #eee}.welfare_coefficient .content .title .title-text{display:inline-block;position:relative;padding:29px 0;font-size:16px}.welfare_coefficient .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.welfare_coefficient .el-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #f90;color:#f90;float:right;margin-top:20px;padding:12px 45px;border-radius:0}.welfare_coefficient .el-button.resetform{margin-right:20px}.welfare_coefficient .el-button--primary{color:#fff;background-color:#f90;border-color:#f90}.welfare_coefficient .content-inner{padding:40px 0}.welfare_coefficient .el-table td,.welfare_coefficient .el-table th{text-align:center}.link{cursor:pointer;color:#337ab7;text-decoration:underline}.welfare_coefficient .el-table th{white-space:nowrap;overflow:hidden;background-color:#f4f4f4;text-align:center;box-shadow:inset 0 1px 0 0 #eee}.welfare_coefficient .icon-delete{display:inline-block;width:24px;height:24px;background:url('+n(630)+") 50% no-repeat}.welfare_coefficient .icon-delete:hover,.welfare_coefficient .icon-edit:hover{cursor:pointer}.welfare_coefficient .el-pagination{text-align:right;margin-top:40px;margin-right:40px;color:#282828}.welfare_coefficient .el-pager li{padding:0 4px;border-right:0;background:#fff;font-size:12px;letter-spacing:-.39px;min-width:24px;height:24px;line-height:24px;text-align:center}.welfare_coefficient .el-pager li:last-child{border-right:1px solid #eee}.welfare_coefficient .el-pagination button,.welfare_coefficient .el-pagination span{display:inline-block;font-size:12px;letter-spacing:-.39px;min-width:24px;height:24px;color:#282828;line-height:24px;vertical-align:top;box-sizing:border-box}.welfare_coefficient .el-pager li:hover{color:#f90}.welfare_coefficient .el-pager li.active{border-color:#f90;background-color:#f90;color:#fff;cursor:default}.welfare_coefficient .el-pager li.active:hover{cursor:pointer;color:#fff}.welfare_coefficient .el-pagination button:hover{color:#f90}.welfare_coefficient .el-pagination button.disabled,.welfare_coefficient .el-pagination button.disabled:hover{color:#e4e4e4}.welfare_coefficient .el-pagination__editor{border:1px solid #eee;border-radius:2px;padding:2px 0;width:24px;min-width:24px}.welfare_coefficient .el-pagination__editor:focus{outline:0;border-color:#f90}.welfare_coefficient .el-pagination .btn-next,.welfare_coefficient .el-pagination .btn-prev{border:1px solid #eee;color:#282828}.welfare_coefficient .el-autocomplete-suggestion__wrap,.welfare_coefficient .el-pager li{border:1px solid #eee}.welfare_coefficient .el-pager li.btn-quicknext,.welfare_coefficient .el-pager li.btn-quickprev{line-height:28px;color:#282828}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/welfare_coefficient.vue"],names:[],mappings:"AACA,qBACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,8BACC,WAAY,AACZ,iBAAkB,AAClB,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,qCACA,4BAAiC,CAChC,AACD,iDACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,cAAgB,CAChB,AACD,uDACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AAID,gCACC,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,gBAAiB,AACjB,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACV,gBAAiB,AACpB,kBAAmB,AACnB,eAAmB,CACnB,AACD,0CACC,iBAAmB,CACnB,AACD,yCACC,WAAY,AACZ,sBAA0B,AAC1B,iBAAsB,CACtB,AACD,oCACC,cAAkB,CAClB,AAYD,oEAEC,iBAAmB,CACnB,AAMD,MACC,eAAgB,AACb,cAAe,AACf,yBAA2B,CAC9B,AAaD,kCACC,mBAAoB,AACpB,gBAAiB,AACjB,yBAA0B,AAC1B,kBAAmB,AACnB,+BAAoC,CACpC,AAmBD,kCACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,sDAA6E,CAChF,AACD,8EAEI,cAAgB,CACnB,AACD,oCACC,iBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,aAAe,CACf,AAOD,kCACC,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,eAAgB,AAChB,sBAAwB,AACxB,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACnB,AACD,6CACC,2BAAgC,CAChC,AACD,oFAEC,qBAAsB,AACtB,eAAgB,AAChB,sBAAwB,AACxB,eAAgB,AAChB,YAAa,AACb,cAAe,AACf,iBAAkB,AAClB,mBAAoB,AACpB,qBAAuB,CACvB,AACD,wCACC,UAAe,CACf,AACD,yCACI,kBAAsB,AACtB,sBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACnB,AACD,+CACC,eAAgB,AAChB,UAAe,CACf,AACD,iDACC,UAAe,CACf,AAID,8GACC,aAAe,CACf,AACD,4CACC,sBAA0B,AAC1B,kBAAmB,AACnB,cAAiB,AACjB,WAAY,AACZ,cAAgB,CAChB,AACD,kDACC,UAAW,AACX,iBAAsB,CACtB,AACD,4FAEC,sBAA0B,AAC1B,aAAe,CACf,AACD,yFAEC,qBAA0B,CAC1B,AACD,gGAEC,iBAAkB,AAClB,aAAe,CACf",file:"welfare_coefficient.vue",sourcesContent:["\n.welfare_coefficient {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.welfare_coefficient .content {\r\n\twidth: 100%;\r\n\tmin-height: 510px;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.welfare_coefficient .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.welfare_coefficient .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 29px 0px;\r\n\tfont-size: 16px;\n}\n.welfare_coefficient .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.welfare_coefficient .content-inner {\r\n\tpadding: 40px 0px;\n}\n.welfare_coefficient .el-button {\r\n\tdisplay: inline-block;\r\n\tline-height: 1;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #FF9900;\r\n\tcolor: #FF9900;\r\n\tfloat: right;\r\n    margin-top: 20px;\r\n\tpadding: 12px 45px;\r\n\tborder-radius: 0px;\n}\n.welfare_coefficient .el-button.resetform {\r\n\tmargin-right: 20px;\n}\n.welfare_coefficient .el-button--primary {\r\n\tcolor: #fff;\r\n\tbackground-color: #FF9900;\r\n\tborder-color: #FF9900;\n}\n.welfare_coefficient .content-inner {\r\n\tpadding: 40px 0px;\n}\r\n/*.welfare_coefficient .el-table {\r\n\tbackground-color: #fff;\r\n\tborder-left: 1px solid #EEEEEE;\r\n\tcolor: #666666;\r\n}\r\n\r\n.welfare_coefficient .el-table__footer-wrapper thead div,\r\n.welfare_coefficient .el-table__header-wrapper thead div {\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #666666;\r\n}*/\n.welfare_coefficient .el-table td,\r\n.welfare_coefficient .el-table th {\r\n\ttext-align: center;\n}\r\n/*.welfare_coefficient .el-table td:first-child span {\r\n\tcursor: pointer;\r\n    color: #337ab7;\r\n    text-decoration: underline;\r\n}*/\n.link {\r\n\tcursor: pointer;\r\n    color: #337ab7;\r\n    text-decoration: underline;\n}\r\n/*.welfare_coefficient .el-table td:first-child:hover{\r\n\tcolor: #FF9900;\r\n}*/\r\n/*.welfare_coefficient .el-table--enable-row-hover .el-table__body tr:hover>td {\r\n\tbackground-color: #f8f8f8;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.welfare_coefficient .el-table--striped .el-table__body tr.el-table__row--striped td {\r\n\tbackground: #F8F8F8;\r\n\tbackground-clip: padding-box;\r\n}*/\n.welfare_coefficient .el-table th {\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbackground-color: #f4f4f4;\r\n\ttext-align: center;\r\n\tbox-shadow: inset 0 1px 0 0 #EEEEEE;\n}\r\n\r\n/*.welfare_coefficient .el-table--border td,\r\n.welfare_coefficient .el-table--border th {\r\n\tborder-right: 1px solid #EEEEEE;\r\n}\r\n\r\n.welfare_coefficient .el-table td,\r\n.welfare_coefficient .el-table th.is-leaf {\r\n\tborder-bottom: 1px solid #EEEEEE;\r\n}\r\n\r\n\r\n.welfare_coefficient .el-table::after,\r\n.welfare_coefficient .el-table::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-color: transparent;\r\n}*/\n.welfare_coefficient .icon-delete {\r\n    display: inline-block;\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('../../../../static/img/common/delete.png') center no-repeat;\n}\n.welfare_coefficient .icon-edit:hover,\r\n.welfare_coefficient .icon-delete:hover {\r\n    cursor: pointer;\n}\n.welfare_coefficient .el-pagination {\r\n\ttext-align: right;\r\n\tmargin-top: 40px;\r\n\tmargin-right: 40px;\r\n\tcolor: #282828;\n}\n.welfare_coefficient .el-pager li.active {\r\n\tborder-color: #FF9900;\r\n\tbackground-color: #FF9900;\r\n\tcolor: #fff;\r\n\tcursor: default;\n}\n.welfare_coefficient .el-pager li {\r\n\tpadding: 0 4px;\r\n\tborder-right: 0;\r\n\tbackground: #fff;\r\n\tfont-size: 12px;\r\n\tletter-spacing: -0.39px;\r\n\tmin-width: 24px;\r\n\theight: 24px;\r\n\tline-height: 24px;\r\n\ttext-align: center;\n}\n.welfare_coefficient .el-pager li:last-child {\r\n\tborder-right: 1px solid #EEEEEE;\n}\n.welfare_coefficient .el-pagination button,\r\n.welfare_coefficient .el-pagination span {\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tletter-spacing: -0.39px;\r\n\tmin-width: 24px;\r\n\theight: 24px;\r\n\tcolor: #282828;\r\n\tline-height: 24px;\r\n\tvertical-align: top;\r\n\tbox-sizing: border-box;\n}\n.welfare_coefficient .el-pager li:hover {\r\n\tcolor: #FF9900;\n}\n.welfare_coefficient .el-pager li.active {\r\n    border-color: #ff9900;\r\n    background-color: #ff9900;\r\n    color: #fff;\r\n    cursor: default;\n}\n.welfare_coefficient .el-pager li.active:hover {\r\n\tcursor: pointer;\r\n\tcolor: #ffffff;\n}\n.welfare_coefficient .el-pagination button:hover {\r\n\tcolor: #FF9900;\n}\n.welfare_coefficient .el-pagination button.disabled {\r\n    color: #e4e4e4;\n}\n.welfare_coefficient .el-pagination button.disabled:hover {\r\n\tcolor: #e4e4e4;\n}\n.welfare_coefficient .el-pagination__editor {\r\n\tborder: 1px solid #EEEEEE;\r\n\tborder-radius: 2px;\r\n\tpadding: 2px 0px;\r\n\twidth: 24px;\r\n\tmin-width: 24px;\n}\n.welfare_coefficient .el-pagination__editor:focus {\r\n\toutline: 0;\r\n\tborder-color: #FF9900;\n}\n.welfare_coefficient .el-pagination .btn-next,\r\n.welfare_coefficient .el-pagination .btn-prev {\r\n\tborder: 1px solid #EEEEEE;\r\n\tcolor: #282828;\n}\n.welfare_coefficient .el-autocomplete-suggestion__wrap,\r\n.welfare_coefficient .el-pager li {\r\n\tborder: 1px solid #EEEEEE;\n}\n.welfare_coefficient .el-pager li.btn-quicknext,\r\n.welfare_coefficient .el-pager li.btn-quickprev {\r\n\tline-height: 28px;\r\n\tcolor: #282828;\n}\r\n"],sourceRoot:""}])},885:function(e,t,n){var i=n(798);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(541)("b0177c06",i,!0)},997:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welfare_coefficient"},[n("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"福利缴纳系数设置"}}),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("span",{staticClass:"title-text"},[e._v("福利缴纳系数设置")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addWelfare()}}},[e._v("新增")])],1),e._v(" "),n("div",{staticClass:"content-inner"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.welfareList,border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"applyNo",label:"模版编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"link",on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v(e._s(t.row.applyNo))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"applyName",label:"模版名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createdBy",label:"创建createdBy"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createdDate",label:"创建时间"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"icon-delete",on:{click:function(n){e.handleDelete(t.$index,t.row)}}})]}}])})],1),e._v(" "),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.totalRows>e.pageRows,expression:"totalRows>pageRows"}],attrs:{"current-page":e.pageIndex,"page-size":e.pageRows,layout:"prev, pager, next, jumper",total:e.totalRows},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageIndex=t}}})],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.d90f9fd474cf488d4fc5.js.map