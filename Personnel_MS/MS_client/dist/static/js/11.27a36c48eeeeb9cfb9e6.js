webpackJsonp([11],{558:function(t,e,n){function r(t){n(792)}var a=n(194)(n(639),n(878),r,null,null);t.exports=a.exports},600:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},601:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},602:function(t,e,n){e=t.exports=n(539)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},603:function(t,e,n){var r=n(602);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(540)("488e4eea",r,!0)},604:function(t,e,n){function r(t){n(603)}var a=n(194)(n(601),n(605),r,"data-v-d69b0f44",null);t.exports=a.exports},605:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"location-wrapper"},[r("el-row",[r("el-col",{attrs:{span:22}},[r("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),r("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?r("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[r("img",{staticClass:"pic",attrs:{src:n(600),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},606:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOBHtk71KBEEQhL+5W0yNzPwB8Q9BBQMjQ8HI0BcQuXsOwYt8Ak9RczOfw8hcERNZjMT03LFm1r4ZV4U1t6Gp7qra3p1m1pGFP2VW7Y1yI6NT6bjDs+f6PBnZseIT+8KSCZbosvglAwfPyuAZR+EvmKJiMjIV08KSd72nGTVX4pjx5yxEucOr02ffq5lv+lv2Dy19LWz+jGM/ZDdYdaxV1Zf2WKgDF7UhO+qPTEtL9Gzq5MtRGDEn3DZTrGtO01lRbpmWBhjzR/wfAD/voOBWuxxk+xxQcxlVl8U3RoQ74EVwZZrrpdo4w3zAm8i18T03RxMr1nUPgjdGGtDlhBHX+pEOTfwFH3WcfdM+AIWpQWD6aSkoAAAAAElFTkSuQmCC"},639:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(604),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={data:function(){return{pageIndex:1,pageRows:2,totalRows:1,dataList:[{applyNo:"00001",applyName:"xxxxxx",compName:"xxxx",rank:"B10-高级开发软件工程师",salaryFloor:"5000.00",salaryTop:"10000.00",businessStandard:"50",remark:"",createdId:"001",createdTime:""},{applyNo:"00002",applyName:"xxxxx",compName:"xxxx",rank:"B5-UI中级",salaryFloor:"4000",salaryTop:"70000",businessStandard:"60",remark:"",createdId:"002",createdTime:""}]}},created:function(){var t=this,e={pageNum:1,pageSize:2};t.queryCParmList(1,2,e)},components:{current:a.default},methods:{addWelfare:function(){this.$router.push("/add_rank")},handleEdit:function(t,e){console.log("index",t),console.log("row.applyNo",e.applyNo),this.$router.push({name:"edit_rank",params:{applyNo:e.applyNo}})},handleDelete:function(t,e){console.log("index",t),console.log("row",e);var n=this;n.$confirm("此操作将会删除该条模版, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={};n.$axios.delete("iem_hrm/delCparm",t).then(function(t){n.$message({type:"success",message:"删除成功!"})}).catch(function(t){n.$message.error("删除模版失败！")})}).catch(function(){n.$message("您已取消删除模版！")})},handleCurrentChange:function(t){console.log("当前页",t);var e=this,n=t,r={pageNum:n,pageSize:2};e.queryCParmList(n,2,r)},queryCParmList:function(t,e,n){var r=this;r.$axios.get("iem_hrm/queryCParmList",{params:n}).then(function(n){console.log(n),r.dataList=n.data.data.list,r.pageIndex=t,r.pageRows=e,r.totalRows=Number(n.data.data.total)}).catch(function(t){console.log(t)})}}}},730:function(t,e,n){e=t.exports=n(539)(!0),e.push([t.i,'.rank_wrap{padding-left:20px;padding-bottom:20px;width:100%}.rank_wrap .content{width:100%;min-height:510px;padding:0 20px;background:#fff;clear:both}.rank_wrap .content .title{border-bottom:1px solid #eee}.rank_wrap .content .title .title-text{display:inline-block;position:relative;padding:29px 0;font-size:16px}.rank_wrap .content .title .title-text:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:#333}.rank_wrap .el-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #f90;color:#f90;float:right;margin-top:20px;padding:12px 45px;border-radius:0}.rank_wrap .el-button.resetform{margin-right:20px}.rank_wrap .el-button--primary{color:#fff;background-color:#f90;border-color:#f90}.rank_wrap .content-inner{padding:40px 0}.rank_wrap .el-table td,.rank_wrap .el-table th{text-align:center}.rank_wrap .link{cursor:pointer;color:#337ab7;text-decoration:underline}.rank_wrap .el-table th{white-space:nowrap;overflow:hidden;background-color:#f4f4f4;text-align:center;box-shadow:inset 0 1px 0 0 #eee}.icon-delete{display:inline-block;width:24px;height:24px;background:url('+n(606)+") 50% no-repeat}.icon-delete:hover,.icon-edit:hover{cursor:pointer}.el-pagination{text-align:right;margin-top:40px;margin-right:40px;color:#282828}.el-pager li{padding:0 4px;border-right:0;background:#fff;font-size:12px;letter-spacing:-.39px;min-width:24px;height:24px;line-height:24px;text-align:center}.el-pager li:last-child{border-right:1px solid #eee}.el-pagination button,.el-pagination span{display:inline-block;font-size:12px;letter-spacing:-.39px;min-width:24px;height:24px;color:#282828;line-height:24px;vertical-align:top;box-sizing:border-box}.el-pager li:hover{color:#f90}.el-pager li.active{border-color:#f90;background-color:#f90;color:#fff;cursor:default}.el-pager li.active:hover{cursor:pointer;color:#fff}.el-pagination button:hover{color:#f90}.el-pagination button.disabled:hover{color:#e4e4e4}.el-pagination__editor{border:1px solid #eee;border-radius:2px;padding:2px 0;width:24px;min-width:24px}.el-pagination__editor:focus{outline:0;border-color:#f90}.el-pagination .btn-next,.el-pagination .btn-prev{border:1px solid #eee;color:#282828}.el-autocomplete-suggestion__wrap,.el-pager li{border:1px solid #eee}.el-pager li.btn-quicknext,.el-pager li.btn-quickprev{line-height:28px;color:#282828}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/rank.vue"],names:[],mappings:"AACA,WACC,kBAAmB,AAChB,oBAAqB,AACxB,UAAY,CACZ,AACD,oBACC,WAAY,AACZ,iBAAkB,AAClB,eAAkB,AAClB,gBAAoB,AACpB,UAAY,CACZ,AACD,2BACA,4BAAiC,CAChC,AACD,uCACC,qBAAsB,AACtB,kBAAmB,AACnB,eAAkB,AAClB,cAAgB,CAChB,AACD,6CACC,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAoB,CACpB,AAID,sBACC,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,gBAAiB,AACjB,sBAA0B,AAC1B,WAAe,AACf,YAAa,AACV,gBAAiB,AACpB,kBAAmB,AACnB,eAAmB,CACnB,AACD,gCACC,iBAAmB,CACnB,AACD,+BACC,WAAY,AACZ,sBAA0B,AAC1B,iBAAsB,CACtB,AACD,0BACC,cAAkB,CAClB,AAYD,gDAEC,iBAAmB,CACnB,AAKD,iBACC,eAAgB,AACb,cAAe,AACf,yBAA2B,CAC9B,AAaD,wBACC,mBAAoB,AACpB,gBAAiB,AACjB,yBAA0B,AAC1B,kBAAmB,AACnB,+BAAoC,CACpC,AAmBD,aACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,sDAA6E,CAChF,AACD,oCAEI,cAAgB,CACnB,AACD,eACC,iBAAkB,AAClB,gBAAiB,AACjB,kBAAmB,AACnB,aAAe,CACf,AAOD,aACC,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,eAAgB,AAChB,sBAAwB,AACxB,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACnB,AACD,wBACC,2BAAgC,CAChC,AACD,0CAEC,qBAAsB,AACtB,eAAgB,AAChB,sBAAwB,AACxB,eAAgB,AAChB,YAAa,AACb,cAAe,AACf,iBAAkB,AAClB,mBAAoB,AACpB,qBAAuB,CACvB,AACD,mBACC,UAAe,CACf,AACD,oBACI,kBAAsB,AACtB,sBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACnB,AACD,0BACC,eAAgB,AAChB,UAAe,CACf,AACD,4BACC,UAAe,CACf,AACD,qCACC,aAAe,CACf,AACD,uBACC,sBAA0B,AAC1B,kBAAmB,AACnB,cAAiB,AACjB,WAAY,AACZ,cAAgB,CAChB,AACD,6BACC,UAAW,AACX,iBAAsB,CACtB,AACD,kDAEC,sBAA0B,AAC1B,aAAe,CACf,AACD,+CAEC,qBAA0B,CAC1B,AACD,sDAEC,iBAAkB,AAClB,aAAe,CACf",file:"rank.vue",sourcesContent:["\n.rank_wrap {\r\n\tpadding-left: 20px;\r\n    padding-bottom: 20px;\r\n\twidth: 100%;\n}\n.rank_wrap .content {\r\n\twidth: 100%;\r\n\tmin-height: 510px;\r\n\tpadding: 0px 20px;\r\n\tbackground: #ffffff;\r\n\tclear: both;\n}\n.rank_wrap .content .title {\r\nborder-bottom: 1px solid #EEEEEE;\n}\n.rank_wrap .content .title .title-text {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 29px 0px;\r\n\tfont-size: 16px;\n}\n.rank_wrap .content .title .title-text:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -1px;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #333333;\n}\n.rank_wrap .content-inner {\r\n\tpadding: 40px 0px;\n}\n.rank_wrap .el-button {\r\n\tdisplay: inline-block;\r\n\tline-height: 1;\r\n\twhite-space: nowrap;\r\n\tcursor: pointer;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #FF9900;\r\n\tcolor: #FF9900;\r\n\tfloat: right;\r\n    margin-top: 20px;\r\n\tpadding: 12px 45px;\r\n\tborder-radius: 0px;\n}\n.rank_wrap .el-button.resetform {\r\n\tmargin-right: 20px;\n}\n.rank_wrap .el-button--primary {\r\n\tcolor: #fff;\r\n\tbackground-color: #FF9900;\r\n\tborder-color: #FF9900;\n}\n.rank_wrap .content-inner {\r\n\tpadding: 40px 0px;\n}\r\n/*.rank_wrap .el-table {\r\n\tbackground-color: #fff;\r\n\tborder-left: 1px solid #EEEEEE;\r\n\tcolor: #666666;\r\n}\r\n\r\n.rank_wrap .el-table__footer-wrapper thead div,\r\n.rank_wrap .el-table__header-wrapper thead div {\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #666666;\r\n}*/\n.rank_wrap .el-table td,\r\n.rank_wrap .el-table th {\r\n\ttext-align: center;\n}\r\n/*.rank_wrap .el-table td:first-child span {\r\n\tcursor: pointer;\r\n\tcolor: #FF9900;\r\n}*/\n.rank_wrap .link {\r\n\tcursor: pointer;\r\n    color: #337ab7;\r\n    text-decoration: underline;\n}\r\n/*.rank_wrap .el-table td:first-child:hover{\r\n\tcolor: #FF9900;\r\n}*/\r\n/*.rank_wrap .el-table--enable-row-hover .el-table__body tr:hover>td {\r\n\tbackground-color: #f8f8f8;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.rank_wrap .el-table--striped .el-table__body tr.el-table__row--striped td {\r\n\tbackground: #F8F8F8;\r\n\tbackground-clip: padding-box;\r\n}*/\n.rank_wrap .el-table th {\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbackground-color: #f4f4f4;\r\n\ttext-align: center;\r\n\tbox-shadow: inset 0 1px 0 0 #EEEEEE;\n}\r\n\r\n/*.rank_wrap .el-table--border td,\r\n.rank_wrap .el-table--border th {\r\n\tborder-right: 1px solid #EEEEEE;\r\n}\r\n\r\n.rank_wrap .el-table td,\r\n.rank_wrap .el-table th.is-leaf {\r\n\tborder-bottom: 1px solid #EEEEEE;\r\n}\r\n\r\n\r\n.rank_wrap .el-table::after,\r\n.rank_wrap .el-table::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-color: transparent;\r\n}*/\n.icon-delete {\r\n    display: inline-block;\r\n    width: 24px;\r\n    height: 24px;\r\n    background: url('../../../../static/img/common/delete.png') center no-repeat;\n}\n.icon-edit:hover,\r\n.icon-delete:hover {\r\n    cursor: pointer;\n}\n.el-pagination {\r\n\ttext-align: right;\r\n\tmargin-top: 40px;\r\n\tmargin-right: 40px;\r\n\tcolor: #282828;\n}\n.el-pager li.active {\r\n\tborder-color: #FF9900;\r\n\tbackground-color: #FF9900;\r\n\tcolor: #fff;\r\n\tcursor: default;\n}\n.el-pager li {\r\n\tpadding: 0 4px;\r\n\tborder-right: 0;\r\n\tbackground: #fff;\r\n\tfont-size: 12px;\r\n\tletter-spacing: -0.39px;\r\n\tmin-width: 24px;\r\n\theight: 24px;\r\n\tline-height: 24px;\r\n\ttext-align: center;\n}\n.el-pager li:last-child {\r\n\tborder-right: 1px solid #EEEEEE;\n}\n.el-pagination button,\r\n.el-pagination span {\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tletter-spacing: -0.39px;\r\n\tmin-width: 24px;\r\n\theight: 24px;\r\n\tcolor: #282828;\r\n\tline-height: 24px;\r\n\tvertical-align: top;\r\n\tbox-sizing: border-box;\n}\n.el-pager li:hover {\r\n\tcolor: #FF9900;\n}\n.el-pager li.active {\r\n    border-color: #ff9900;\r\n    background-color: #ff9900;\r\n    color: #fff;\r\n    cursor: default;\n}\n.el-pager li.active:hover {\r\n\tcursor: pointer;\r\n\tcolor: #ffffff;\n}\n.el-pagination button:hover {\r\n\tcolor: #FF9900;\n}\n.el-pagination button.disabled:hover {\r\n\tcolor: #e4e4e4;\n}\n.el-pagination__editor {\r\n\tborder: 1px solid #EEEEEE;\r\n\tborder-radius: 2px;\r\n\tpadding: 2px 0px;\r\n\twidth: 24px;\r\n\tmin-width: 24px;\n}\n.el-pagination__editor:focus {\r\n\toutline: 0;\r\n\tborder-color: #FF9900;\n}\n.el-pagination .btn-next,\r\n.el-pagination .btn-prev {\r\n\tborder: 1px solid #EEEEEE;\r\n\tcolor: #282828;\n}\n.el-autocomplete-suggestion__wrap,\r\n.el-pager li {\r\n\tborder: 1px solid #EEEEEE;\n}\n.el-pager li.btn-quicknext,\r\n.el-pager li.btn-quickprev {\r\n\tline-height: 28px;\r\n\tcolor: #282828;\n}\r\n"],sourceRoot:""}])},792:function(t,e,n){var r=n(730);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(540)("301a1212",r,!0)},878:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank_wrap"},[n("current",{attrs:{yiji:"参数管理",erji:"业务参数",sanji:"职级薪酬标准设置"}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("span",{staticClass:"title-text"},[t._v("职级薪酬标准设置")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addWelfare()}}},[t._v("新增")])],1),t._v(" "),n("div",{staticClass:"content-inner"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"applyNo",label:"模版编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link",on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[t._v(t._s(e.row.applyNo))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"applyName",label:"模版名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"compName",label:"公司名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"rank",label:"职级"}}),t._v(" "),n("el-table-column",{attrs:{prop:"salaryFloor",label:"薪资标准下线"}}),t._v(" "),n("el-table-column",{attrs:{prop:"salaryTop",label:"薪资标准上线"}}),t._v(" "),n("el-table-column",{attrs:{prop:"businessStandard",label:"出差标准（人/天）"}}),t._v(" "),n("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createdId",label:"创建ID"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createdTime",label:"创建时间"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"icon-delete",on:{click:function(n){t.handleDelete(e.$index,e.row)}}})]}}])})],1),t._v(" "),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalRows>t.pageRows,expression:"totalRows>pageRows"}],attrs:{"current-page":t.pageIndex,"page-size":t.pageRows,layout:"prev, pager, next, jumper",total:t.totalRows},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageIndex=e}}})],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.27a36c48eeeeb9cfb9e6.js.map