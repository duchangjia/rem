webpackJsonp([38],{552:function(t,e,i){function n(t){i(804)}var a=i(194)(i(636),i(893),n,"data-v-b7353dc6",null);t.exports=a.exports},603:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAH9JREFUKBVjYMAC/s9kaABhLFJ4hRjRZaGG1APFfwOxHmM6ww10Neh8oJ7/IDEWZAkUgxgZwhnTCBuErJ8JxsFi0HqYHLE02DBqGASykBHJIGIdgFMd3Js4VZAqAXIdEP8H4l//ZzEEkqofQ/2gM5AqiRbDm8gCUC83IIsRwwYAAytCRvQG4toAAAAASUVORK5CYII="},604:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{link:[],breadItemLength:0}},created:function(){},methods:{jump:function(){var t=this.link[this.breadItemLength-2];if(!t)return!1;this.activeTab?this.$router.push({name:t,params:{activeTab:this.activeTab}}):this.$router.push(t)}},computed:{links:function(){var t=[];return"系统管理"===this.yiji&&t.push("/management_framework"),"人事事务"===this.yiji&&t.push("/personnel_contract"),"参数管理"===this.yiji&&t.push("/argument_1"),"薪酬福利"===this.yiji&&t.push("/payBaseInfo_setting"),"用户管理"===this.erji&&t.push("/management_user"),"角色管理"===this.erji&&t.push("/management_role"),"功能管理"===this.erji&&t.push("/management_fun"),"组织架构"===this.erji&&t.push("/management_framework"),"人事合同"===this.erji&&t.push("/personnel_contract"),"业务参数"===this.erji&&t.push("/argument_2"),"薪酬基数设置"===this.erji&&t.push("/payBaseInfo_setting"),"编辑部门"===this.sanji&&t.push("/edit_department"),"新增机构人员"===this.sanji&&t.push("/add_person"),"新增子部门"===this.sanji&&t.push("/add_junior"),"新增角色"===this.sanji&&t.push("/add_role"),"编辑角色"===this.sanji&&t.push("/edit_role"),"用户信息"===this.sanji&&t.push("/user-info"),"功能编辑"===this.sanji&&t.push("/edit_fun"),"合同新增"===this.sanji&&t.push("/add_contract"),"合同修改"===this.sanji&&t.push("/edit_contract"),"合同详情"===this.sanji&&t.push("detail_contract"),"合同变更"===this.sanji&&t.push("/add_pactChange"),"合同续签"===this.sanji&&t.push("/add_pactRenew"),"机构CCC管理"===this.sanji&&t.push("/agency_argument"),"免签节假日维护"===this.sanji&&t.push("/holiday_info"),"公司开票信息维护"===this.sanji&&t.push("/ticket_info"),"福利缴纳系数设置"===this.sanji&&t.push("/welfare_coefficient"),"个人所得税税率设置"===this.sanji&&t.push("/tax_rate"),"职级薪酬标准设置"===this.sanji&&t.push("/rank"),"薪酬基数新增"===this.sanji&&t.push("/add_payBaseInfo"),"薪酬基数修改"===this.sanji&&t.push("/edit_payBaseInfo"),"薪酬基数详情"===this.sanji&&t.push("/detail_payBaseInfo"),"福利缴纳系数新增"===this.siji&&t.push("/add_welfare"),"福利缴纳系数详情"===this.siji&&t.push("/welfare_info"),"个人所得税税率详情"===this.siji&&t.push("/rate_info"),"税率组新增"===this.siji&&t.push("/add_rateGroup"),"职级薪酬标准新增"===this.siji&&t.push("/add_rank"),"职级薪酬标准修改"===this.siji&&t.push("/edit_rank"),"CCC新增"===this.siji&&t.push("/add_agency"),"节假日新增"===this.siji&&t.push("/add_holiday"),"开票信息新增"===this.siji&&t.push("/add_ticket"),"合同变更详情"===this.siji&&t.push("/detail_pactChange"),"合同变更修改"===this.siji&&t.push("/edit_pactChange"),"合同续签详情"===this.siji&&t.push("/detail_pactRenew"),"合同续签修改"===this.siji&&t.push("/edit_pactRenew"),"税率新增"===this.wuji&&t.push("/add_rate"),"税率修改"===this.wuji&&t.push("/edit_rate"),this.link=t,this.breadItemLength=t.length,this.link}},props:{yiji:{type:String,default:""},erji:{type:String,default:""},sanji:{type:String,default:""},siji:{type:String,default:""},wuji:{type:String,default:""},activeTab:{type:String,default:""}}}},605:function(t,e,i){e=t.exports=i(539)(!0),e.push([t.i,".location-wrapper[data-v-d69b0f44]{height:70px;line-height:70px;font-size:12px}.location-wrapper .el-row[data-v-d69b0f44]{width:100%}.location-wrapper .title[data-v-d69b0f44]{color:#475669;vertical-align:middle}.location-wrapper .breadcrumb-inner[data-v-d69b0f44]{font-size:12px;display:inline-block;vertical-align:middle}.pic[data-v-d69b0f44]{cursor:pointer}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/common/current_position.vue"],names:[],mappings:"AACA,mCACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,2CACI,UAAY,CACf,AACD,0CACI,cAAe,AACf,qBAAuB,CAC1B,AACD,qDACI,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,sBACI,cAAgB,CACnB",file:"current_position.vue",sourcesContent:["\n.location-wrapper[data-v-d69b0f44] {\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 12px;\n}\n.location-wrapper .el-row[data-v-d69b0f44] {\r\n    width: 100%;\n}\n.location-wrapper .title[data-v-d69b0f44] {\r\n    color: #475669;\r\n    vertical-align: middle;\n}\n.location-wrapper .breadcrumb-inner[data-v-d69b0f44] {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.pic[data-v-d69b0f44] {\r\n    cursor: pointer;\n}\r\n"],sourceRoot:""}])},606:function(t,e,i){var n=i(605);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("488e4eea",n,!0)},607:function(t,e,i){function n(t){i(606)}var a=i(194)(i(604),i(608),n,"data-v-d69b0f44",null);t.exports=a.exports},608:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"location-wrapper"},[n("el-row",[n("el-col",{attrs:{span:22}},[n("span",{staticClass:"title"},[t._v("当前位置：")]),t._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},[t.yiji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[0]}}},[t._v(t._s(t.yiji))]):t._e(),t._v(" "),t.erji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[1]}}},[t._v(t._s(t.erji))]):t._e(),t._v(" "),t.sanji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[2]}}},[t._v(t._s(t.sanji))]):t._e(),t._v(" "),t.siji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[3]}}},[t._v(t._s(t.siji))]):t._e(),t._v(" "),t.wuji?n("el-breadcrumb-item",{staticClass:"test1",attrs:{to:{path:t.links[4]}}},[t._v(t._s(t.wuji))]):t._e(),t._v(" "),t._e()],1)],1),t._v(" "),n("el-col",{directives:[{name:"show",rawName:"v-show",value:t.breadItemLength>1,expression:"breadItemLength>1"}],attrs:{span:2}},[n("img",{staticClass:"pic",attrs:{src:i(603),alt:"pic",width:"19",height:"12"},on:{click:t.jump}})])],1)],1)},staticRenderFns:[]}},636:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(607),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{contents:[[{image:"ccc1.png",text:"机构CCC管理"},{image:"mqjjrwh1.png",text:"免签节假日维护"},{image:"gskpxxwh.png",text:"公司开票信息维护"}],[{image:"fljnxssz1.png",text:"福利缴纳系数设置"},{image:"grsdsslsz1.png",text:"个人所得税税率设置"},{image:"zjxcbzsz1.png",text:"职级薪酬标准设置"}]]}},methods:{link:function(t,e){var i=""+t+e;"00"==i?this.$router.push("agency_argument"):"10"==i?this.$router.push("welfare_coefficient"):"11"==i?this.$router.push("tax_rate"):"12"==i?this.$router.push("rank"):"01"==i?this.$router.push("holiday_info"):"02"==i&&this.$router.push("ticket_info")}},components:{current:a.default}}},739:function(t,e,i){e=t.exports=i(539)(!0),e.push([t.i,".argument_2[data-v-b7353dc6]{padding:0 0 20px 20px;overflow:hidden}.argument_2 .test[data-v-b7353dc6]{padding-left:10px}.content-wrapper[data-v-b7353dc6]{background:#fff;padding-left:20px;height:650px}.content-wrapper .title[data-v-b7353dc6]{font-family:PingFangSC-Regular;font-size:16px;color:#333;letter-spacing:0;height:80px;line-height:80px;border-bottom:1px solid #f4f4f4}.content-wrapper .title .text[data-v-b7353dc6]{border-bottom:2px solid #000;display:inline-block;height:80px}.content-wrapper .content[data-v-b7353dc6]{padding-top:42px}.content-wrapper .content .item[data-v-b7353dc6]{height:120px;line-height:120px}.content-wrapper .content .item[data-v-b7353dc6]:hover{box-shadow:0 0 10px 0 hsla(0,0%,80%,.5);cursor:pointer}.content-wrapper .content .item img[data-v-b7353dc6]{vertical-align:middle;margin-right:30px}.content-wrapper .content .item span[data-v-b7353dc6]{font-family:PingFangSC-Light;font-size:16px;color:#333;letter-spacing:0}","",{version:3,sources:["E:/fqlwork/ifdp/iem/Personnel_MS/MS_client/src/components/pages/argument_Mgmt/arg_2.vue"],names:[],mappings:"AACA,6BACI,sBAAuB,AACvB,eAAiB,CACpB,AACD,mCACI,iBAAmB,CACtB,AACD,kCACI,gBAAiB,AACjB,kBAAmB,AACnB,YAAc,CACjB,AACD,yCACI,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,+CACI,6BAA8B,AAC9B,qBAAsB,AACtB,WAAa,CAChB,AACD,2CACI,gBAAkB,CACrB,AACD,iDACI,aAAc,AACd,iBAAmB,CACtB,AACD,uDACI,wCAA8C,AAC9C,cAAgB,CACnB,AACD,qDACI,sBAAuB,AACvB,iBAAmB,CACtB,AACD,sDACI,6BAA8B,AAC9B,eAAgB,AAChB,WAAe,AACf,gBAAkB,CACrB",file:"arg_2.vue",sourcesContent:["\n.argument_2[data-v-b7353dc6] {\n    padding: 0 0 20px 20px;\n    overflow: hidden;\n}\n.argument_2 .test[data-v-b7353dc6]{\n    padding-left: 10px;\n}\n.content-wrapper[data-v-b7353dc6]{\n    background: #fff;\n    padding-left: 20px;\n    height: 650px;\n}\n.content-wrapper .title[data-v-b7353dc6]{\n    font-family: PingFangSC-Regular;\n    font-size: 16px;\n    color: #333333;\n    letter-spacing: 0;\n    height: 80px;\n    line-height: 80px;\n    border-bottom: 1px solid #f4f4f4;\n}\n.content-wrapper .title .text[data-v-b7353dc6]{\n    border-bottom:2px solid black;\n    display: inline-block;\n    height: 80px;\n}\n.content-wrapper .content[data-v-b7353dc6]{\n    padding-top: 42px;\n}\n.content-wrapper .content .item[data-v-b7353dc6]{\n    height: 120px;\n    line-height: 120px;\n}\n.content-wrapper .content .item[data-v-b7353dc6]:hover{\n    box-shadow: 0 0 10px 0 rgba(204,204,204,0.50);\n    cursor: pointer;\n}\n.content-wrapper .content .item img[data-v-b7353dc6]{\n    vertical-align: middle;\n    margin-right: 30px;\n}\n.content-wrapper .content .item span[data-v-b7353dc6]{\n    font-family: PingFangSC-Light;\n    font-size: 16px;\n    color: #333333;\n    letter-spacing: 0;\n}\n"],sourceRoot:""}])},804:function(t,e,i){var n=i(739);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("16dd088f",n,!0)},893:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"argument_2"},[i("current",{staticClass:"test",attrs:{yiji:"参数管理",erji:"业务参数"}}),t._v(" "),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"title"},[i("span",{staticClass:"text"},[t._v("业务参数")])]),t._v(" "),i("div",{staticClass:"content"},t._l(t.contents,function(e,n){return i("el-row",{attrs:{type:"flex",justify:"space-around"}},t._l(e,function(e,a){return i("el-col",{attrs:{span:6}},[i("div",{staticClass:"item",on:{click:function(e){t.link(n,a)}}},[i("span",{staticClass:"space",staticStyle:{display:"inline-block",width:"40px",height:"1px"}}),t._v(" "),i("img",{attrs:{src:"../../../../static/img/argument_Mgmt/argument_2/"+e.image,width:"56",height:"56"}}),t._v(" "),i("span",[t._v(t._s(e.text))])])])}))}))])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=38.ed5a4619bc52bc84a847.js.map