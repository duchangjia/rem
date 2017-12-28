<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目一览" sanji="项目详情"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目详情</span>
            </div>
            <div class="add-wrapper">
                <el-form label-width="140px" :inline="true">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="机会号">
                            <el-input :disabled="true" v-model="salesInfo.oppoNo"></el-input>
                        </el-form-item>
                    </el-col>
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
                        <el-form-item label="客户">
                            <el-select v-model="salesInfo.coocustNo"  :disabled="true">
                                <el-option v-for="item in coocustNoList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>    
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                            <el-select v-model="salesInfo.projSrvMngmode" :disabled="true">
								<el-option v-for="item in projSrvMngmodeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                            <el-select v-model="salesInfo.projType" :disabled="true">
								<el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
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
                        <el-form-item label="预计合同金额">
                                <el-input :disabled="true" v-model="salesInfo.projPreconAmt"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="订单类型">
                            <el-select  v-model="salesInfo.projOrdType" :disabled="true">
                                <el-option v-for="item in projOrdTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目交付地">
                                <el-input :disabled="true"  v-model="salesInfo.projImplePla"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同签订时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreconDate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计收入时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreincmDate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型">
                            <el-select v-model="salesInfo.projIncmType" :disabled="true">
                                <el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                                <el-input :disabled="true" v-model="salesInfo.projConno"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态">
                            <el-select v-model="salesInfo.projState" :disabled="true">
                                <el-option v-for="item in projStateList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24" class="item-title">销售信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售">
                                <el-input :disabled="true" v-model="salesInfo.projSaleName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售主管">
                                <el-input :disabled="true" v-model="salesInfo.projSaleLinemgr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea" :disabled="true" class="b-textarea" v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="24" class="item-title">项目实施</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门中心">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpDepname"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门编号">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpDepno"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="成本中心">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpCcc"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="实施进度">
                            <el-select v-model="projImpleInfo.projImpStep" :disabled="true">
                                <el-option v-for="item in projImpStepList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目经理">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpPm"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目主管">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpMgr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpBegdate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间">
                                <el-input :disabled="true" v-model="projImpleInfo.projImpEndate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea" :disabled="true" class="b-textarea" v-model="projImpleInfo.projImpDesc"></el-input>
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
                    <el-col :span="24" class="item-title">项目材料</el-col>
                    <el-col :span="24">
                        <el-table stripe :data="ProjFileList" class="table-add">
                            <el-table-column align="center" prop="rid" label="编号">
                            </el-table-column>
                            <el-table-column align="center" prop="attaType" label="类型">
                            </el-table-column>
                            <el-table-column align="center" prop="attaFile" label="名称">
                            </el-table-column>
                            <el-table-column align="center" prop="remark" label="说明">
                            </el-table-column>
                            <el-table-column align="center"  label="操作">
                                <template scope="scope">
                                    <el-button class="btn-primary">
                                        下载
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
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
                tableList:[
                    {
                        projImpDepno:'1002',
                        oppoNo:'1003223',
                        projNo:'1002020',
                        projName:'赚钱项目',
                        projStatus:'01',
                        projIncmType:'02',
                        projIncmConfim:'03',
                        projSaleName:'周杰伦',
                        projSaleLinemgr:'马经理',
                        projImpBegdate:'2017-12-12',
                        projImpEndate:'2017-12-13'
                    }
                ],
                salesInfo:{
                    oppoNo:'',
                    projName:'',
                    projNo:'',
		            coocustNo:'',
                    projSrvMngmode:'',
                    projType:'',
                    projIncmConfim:'',
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
                ],
                ProjFileList:[
                    {
                        rid:'文件的编号',
                        attaType:'文件的类型',
                        attaFile:'文件名称',
                        remark:'文件说明'
                    }
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
    .content-wrapper{
        .add-wrapper{
            .b-textarea{
                min-width:860px !important;
            }
           
        }
    }
</style>