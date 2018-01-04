<template>
    <div class="container-wrap">
        <current yiji="业务管理" erji="部门预算一览" sanji="部门项目预算详情"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">部门项目预算详情</span>
            </div>
            <div class="add-wrapper">
                <el-form label-width="140px" :inline="true">
                    <el-col :span="24" class="item-title">项目基本信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称">
                                <el-input :disabled="true" v-model="salesInfo.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                                <el-input :disabled="true" v-model="salesInfo.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门">
                            <el-input :disabled="true" v-model="salesInfo.projNo"></el-input>  
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目经理">
                            <el-input :disabled="true" v-model="salesInfo.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                            <el-select v-model="salesInfo.projType" :disabled="true">
								<el-option v-for="item in projSrvMngmodeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型">
                            <el-select v-model="salesInfo.projIncmConfim" :disabled="true">
                                <el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreconDate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreincmDate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型">
                            <el-select v-model="salesInfo.projIncmType">
                                <el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态">
                            <el-select v-model="salesInfo.projState" :disabled="true">
                                <el-option v-for="item in projStateList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    
                   <el-col :span="24" class="item-title">预算信息V4.0</el-col>
                   <el-col :sm="24" :md="8">
                        <el-form-item label="收入" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="净收入" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="税金" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="人力成本" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="费用成本" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="总成本" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24">
                        <el-form-item label="毛利率" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="版本" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="预算状态" class="sm_item">
                             <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="8">
                        <el-form-item label="提交日期" class="sm_item">
                            <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :span="24" class="item-title">项目分包</el-col>
                    <el-col :span="24">
                        <el-table stripe :data="tableList" class="table-add">
                            <el-table-column align="center" prop="projImpDepno" label="分包合同号">
                            </el-table-column>
                            <el-table-column align="center" prop="projImpDepno" label="分包客户">
                            </el-table-column>
                            <el-table-column align="center" prop="projImpDepno" label="金额">
                            </el-table-column>
                            <el-table-column align="center" prop="projImpDepno" label="类型">
                            </el-table-column>
                            <el-table-column align="center" prop="projImpDepno" label="分包说明">
                            </el-table-column>
                        </el-table>
                    </el-col> -->
                    <el-col :span="24" class="item-title">预算明细</el-col>
                    <el-col :span="24" class="item-title">
                        <ul class="table_btnBox">
                            <li class="fl" v-for="(item,index) in tableButton">
                                <el-button class="btn-default" :class="{'active':item.active}" @click="tableTab(item,index)">{{item.name}}</el-button>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="24">
                        <el-table stripe :data="tableList" class="table-add"  v-show="showIndex===0">
                            <el-table-column align="center" prop="title" label="">
                            </el-table-column>
                            <el-table-column align="center" :prop="item.dataKey" :label="item.label" v-for="(item,index) in tableList">
                            </el-table-column>
                        </el-table>
                        <div  v-show="showIndex===1">
                            <div class="btn_box">
                                <el-button class="btn-default">添加人员</el-button>
                                <el-button  class="btn-default">TBD</el-button>
                                <el-button  class="btn-default">重新计算</el-button>
                                <el-button  class="btn-default">导入</el-button>
                                <el-button  class="btn-default">导出</el-button>
                            </div>
                            <el-table stripe :data="tableTwoList" class="table-add" v-show="showIndex===1" style="width: 100%">
                                <el-table-column align="center" prop="department" label="部门">
                                </el-table-column>
                                <el-table-column align="center" prop="emNumber" label="员工号"  width="200">
                                </el-table-column>
                                <el-table-column align="center" prop="name" label="姓名">
                                </el-table-column>
                                <el-table-column align="center" prop="rank" label="职级">
                                </el-table-column>
                                <el-table-column align="center" prop="general" label="总收入">
                                </el-table-column>
                                <el-table-column align="center" prop="revenue" label="预计收入">
                                </el-table-column>
                                <el-table-column align="center" prop="unit" label="单价">
                                </el-table-column>
                                <el-table-column align="center" :prop="item.dataKey" :label="item.label" v-for="(item,index) in tableListTwo" width="120">
                                </el-table-column>
                            </el-table>
                        </div>
                        
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
    // let { queryProjAndSalesInfo,queryProjImpleInfo,queryProjFileInfo} = api
	export default {
		data() {
			return{
                searchInfo:{},
                showIndex:0,
                //总表
                tableList:[
                    {   
                        label:'2010-10-10',
                        cccc:'2000',
                        title:'人力成本',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2011-10-10',
                        title:'费用成本',
                        cccc:'2002',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2012-10-10',
                        title:'收入',
                        cccc:'2003',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2013-10-10',
                        cccc:'2004',
                        title:'净收入',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2014-10-10',
                        title:'税金',
                        cccc:'2005',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2015-10-10',
                        title:'总成本',
                        cccc:'2006',
                        dataKey:'cccc'
                    }
                ],
                //人力
                tableTwoList:[
                    {
                        department:'MOBILE',
                        emNumber:'10020020',
                        name:'李先生',
                        rank:'B9',
                        general:'100',
                        revenue:'233',
                        unit:'2000'

                    },
                    {
                        
                        department:'MOBILE',
                        emNumber:'10020020',
                        name:'李先生',
                        rank:'B9',
                        general:'100',
                        revenue:'233',
                        unit:'2000'
                    },
                    {
                        department:'MOBILE',
                        emNumber:'10020020',
                        name:'李先生',
                        rank:'B9',
                        general:'100',
                        revenue:'233',
                        unit:'2000'
                    },
                ],
                tableListTwo:[
                    {   
                        label:'2010-10-10',
                        cccc:'2000',
                        title:'人力成本',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2011-10-10',
                        title:'费用成本',
                        cccc:'2002',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2012-10-10',
                        title:'收入',
                        cccc:'2003',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2013-10-10',
                        cccc:'2004',
                        title:'净收入',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2014-10-10',
                        title:'税金',
                        cccc:'2005',
                        dataKey:'cccc'
                    },
                    {   
                        label:'2015-10-10',
                        title:'总成本',
                        cccc:'2006',
                        dataKey:'cccc'
                    }
                ],
                tableButton:[
                    {
                        active:true,
                        name:'总表'
                    },
                    {
                        active:false,
                        name:'人力'
                    },
                    // {
                    //     active:false,
                    //     name:'分包'
                    // },
                    {
                        active:false,
                        name:'费用'
                    },
                    {
                        active:false,
                        name:'收入'
                    }
                ],
                salesInfo:{
                    oppoNo:'',
                    projName:'',
                    projNo:'',
		            coocustNo:'',
                    projSrvMngmode:'',
                    projType:'01',
                    projIncmConfim:'01',
                    projPreconAmt:'',
                    projOrdType:'',
                    projImplePla:'',
                    projPreconDate:'',
                    projPreincmDate:'',
                    projIncmType:'',
                    projConno:'',
                    projState:'',
                    projSaleName:'',
                    projSaleLinemgr:'',
                    remark:''
                },
                projImpleInfo:{
                    projImpDepname:'',
                    projImpDepno:'',
                    projImpCcc:':',
                    projImpStep:'',
                    projImpPm:'',
                    projImpMgr:'',
		            projImpBegdate:'',
                    projImpEndate:'',
                    projImpDesc:''
		
                },
                //服务管理模式列表
				projSrvMngmodeList: [
					{paraValue: '01',paraShowMsg: '项目外包'},
					{paraValue: '02',paraShowMsg: '人力外包'},
					{paraValue: '03',paraShowMsg: '解决方案'},
					{paraValue: '04',paraShowMsg: '其他'}
                ],
                //项目类型列表
                projTypeList: [
					{paraValue: '01',paraShowMsg: '应用系统开发'},
					{paraValue: '02',paraShowMsg: '软件产品开发'},
					{paraValue: '03',paraShowMsg: '应用维护升级'},
					{paraValue: '04',paraShowMsg: '系统集成'},
					{paraValue: '05',paraShowMsg: '信息系统安全'},
					{paraValue: '06',paraShowMsg: '咨询服务'},
					{paraValue: '07',paraShowMsg: '其他'},
                ],
                //收入确认类型列表
                incmConfimList: [
                    {paraValue: '01',paraShowMsg: '外包'},
					{paraValue: '02',paraShowMsg: '固定金额'},
                ],
                //收入类型列表
				projIncmTypeList: [
					{paraValue: '01',paraShowMsg: 'Pipeline'},
					{paraValue: '02',paraShowMsg: 'EATP'},
					{paraValue: '03',paraShowMsg: 'Frotlog'},
					{paraValue: '04',paraShowMsg: 'Backlog'}
                ],
                //实施进度列表
                projImpStepList: [
                    {paraValue: '01',paraShowMsg: 'NEW'},
					{paraValue: '02',paraShowMsg: '需求分析'},
					{paraValue: '03',paraShowMsg: '设计阶段'},
					{paraValue: '04',paraShowMsg: '开发阶段'},
					{paraValue: '05',paraShowMsg: '测试阶段'},
					{paraValue: '06',paraShowMsg: '完成上线'},
					{paraValue: '07',paraShowMsg: '验收阶段'},
					{paraValue: '08',paraShowMsg: 'END'},
                ],
                //订单类型列表
                projOrdTypeList: [
                    {paraValue: '01',paraShowMsg: 'new sell'},
					{paraValue: '02',paraShowMsg: 'Up sell'},
					{paraValue: '03',paraShowMsg: 'Renew'}
                ],
                //项目状态列表
                projStateList: [
                    {paraValue: '01',paraShowMsg: '售前'},
					{paraValue: '02',paraShowMsg: '实施'},
					{paraValue: '03',paraShowMsg: '结束'}
                ],
                //客户列表
                coocustNoList: [
                    {paraValue: '01',paraShowMsg: '客户1'},
					{paraValue: '02',paraShowMsg: '客户2'},
					{paraValue: '03',paraShowMsg: '客户3'}
                ]
            }
        },
        created(){
           //查询项目信息详情
            // this.queryProjAndSalesInfo();
            //查询项目实施信息详情
            // this.queryProjImpleInfo();
            //查询项目资料
            // this.queryProjFileInfo()
            //查询收入金额列表
            //this.queryprojIncmTypeList()
			//查询收入确认金额列表
            // this.queryincmConfimList();
            //查询项目类型列表
            // this.queryprojTypeList()
		},
        methods:{
            //查询项目信息详情
			queryProjAndSalesInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjAndSalesInfo, params)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.salesInfo = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
            //切换table
            tableTab(item,index){
                var self = this;
                //添加减少类
                self.tableButton.forEach(function(item) {
                    item.active =false
                });
                item.active = true
               self.showIndex = index

            },
            //查询项目实施信息详情
            queryProjImpleInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjImpleInfo, params)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.projImpleInfo = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
             //项目资料的查询
            queryProjFileInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get(api.queryProjFileInfo, params)
				.then((res) => {
					console.log('fileList', res);
					if(res.data.code == 'S00000') {
						self.ProjFileList = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
            },
             //查询收入金额列表
            queryprojIncmTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_INCM_TYPE')
                .then((res) => {
                    console.log('projIncmTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projIncmTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
			//查询收入确认金额列表
            queryincmConfimList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=INCM_CONFIM')
                .then((res) => {
                    console.log('incmConfimList',res);
                    if(res.data.code === "S00000") {
                        self.incmConfimList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
            //查询项目类型列表
            queryprojTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_TYPE')
                .then((res) => {
                    console.log('projTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
        },
		components: {
			current
		},
		computed: {
			
		}
	};
</script>
<style lang="scss">
    .table_btnBox li{
        margin-left:20px;
        .btn-default{
            &:hover,&.active{
                background:$color-primary;
                color:#fff;
            }
            
        }
    }
    .btn_box{
        padding:20px 0;
        padding-left:30px;
        .el-button{
            &.btn-default{
                &:hover{
                    background:$color-primary;
                    color:#fff;
                }
            }
        }
    }
</style>