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
                                <el-input :disabled="true" v-model="salesInfo.coocustNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                                <el-input :disabled="true" v-model="salesInfo.projSrvMngmode"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                            <el-input :disabled="true" v-model="salesInfo.projType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型">
                                <el-input :disabled="true" v-model="salesInfo.projIncmConfim"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同金额">
                                <el-input :disabled="true" v-model="salesInfo.projPreconAmt"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="订单类型">
                                <el-input :disabled="true" v-model="salesInfo.projOrdType"></el-input>
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
                                <el-input :disabled="true" v-model="salesInfo.projIncmType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                                <el-input :disabled="true" v-model="salesInfo.projConno"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态">
                                <el-input :disabled="true" v-model="salesInfo.projState"></el-input>
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
                                <el-input :disabled="true" v-model="projImpleInfo.projImpStep"></el-input>
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
    let { queryProjAndSalesInfo,queryProjImpleInfo,queryProjFileInfo} = api
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
                pagination:{
                    pageSize:10,
                    total:20
                },
                salesInfo:{
                    oppoNo:'1003223',
                    projName:'项目名称',
                    projNo:'项目编号',
		            coocustNo:'客户编号',
                    projSrvMngmode:'服务管理模式',
                    projType:'项目类型',
                    projIncmConfim:'收入确实类型',
                    projPreconAmt:'预计合同金额',
                    projOrdType:'订单类型:',
                    projImplePla:'项目的交付地点:',
                    projPreconDate:'预计合同签订时间',
                    projPreincmDate:'预计收入确认时间',
                    projIncmType:'收入类型',
                    projConno:'合同编号',
                    projState:'项目的状态',
                    projSaleName:'销售',
                    projSaleLinemgr:'销售的主管',
                    remark:'项目说明'
                },
                projImpleInfo:{
                    projImpDepname:'部门名称',
                    projImpDepno:'部门编号',
                    projImpCcc:'成本中心:',
                    projImpStep:'实施进度',
                    projImpPm:'项目经理',
                    projImpMgr:'项目主管',
		            projImpBegdate:'计划开始的时间',
                    projImpEndate:'计划结束的时间',
                    projImpDesc:'项目说明'
		
                },
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
        mounted(){
           let self = this;
		},
        methods:{
            
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