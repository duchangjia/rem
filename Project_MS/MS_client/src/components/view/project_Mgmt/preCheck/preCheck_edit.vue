<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目一览" sanji="项目编辑"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目编辑</span>
                <el-button type="primary" class="toolBtn btn-primary">保存</el-button>
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
                                <el-input v-model="salesInfo.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                                <el-input v-model="salesInfo.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="客户" >
                            <el-select v-model="salesInfo.coocustNo">
                                <el-option label="客户1" value="01"></el-option>
                                <el-option label="客户2" value="02"></el-option>
                                <el-option label="客户3" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                            <el-select v-model="salesInfo.projSrvMngmode">
                                <el-option label="项目外包" value="01"></el-option>
                                <el-option label="人力外包" value="02"></el-option>
                                <el-option label="解决方案" value="03"></el-option>
                                <el-option label="其他" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                            <el-select v-model="salesInfo.projType">
                                <el-option label="应用系统开发" value="01"></el-option>
                                <el-option label="软件产品开发" value="02"></el-option>
                                <el-option label="应用维护升级" value="03"></el-option>
                                <el-option label="系统集成" value="04"></el-option>
                                <el-option label="信息系统安全" value="05"></el-option>
                                <el-option label="咨询服务" value="06"></el-option>
                                <el-option label="其他" value="07"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确认类型">
                            <el-select v-model="salesInfo.projIncmConfim">
                                <el-option label="外包" value="01"></el-option>
                                <el-option label="固定金额" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同金额">
                                <el-input v-model="salesInfo.projPreconAmt"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="订单类型">
                            <el-select  v-model="salesInfo.projOrdType">
                                <el-option label="new sell" value="01"></el-option>
                                <el-option label="Up sell" value="02"></el-option>
                                <el-option label="Renew" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目交付地">
                                <el-input v-model="salesInfo.projImplePla"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同签订时间">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="salesInfo.projPreconDate"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计收入时间">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="salesInfo.projPreincmDate"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型">
                            <el-select v-model="salesInfo.projIncmType">
                                <el-option label="Pipeline" value="01"></el-option>
                                <el-option label="EATP" value="02"></el-option>
                                <el-option label="Frotlog" value="03"></el-option>
                                <el-option label="Backlog" value="04"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                            <el-input readonly="readonly" v-model="salesInfo.projConno"></el-input>
                            <el-upload class="upload-demo" ref="upload":show-file-list="false" :auto-upload="false" action="">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">上传合同</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态">
                            <el-select v-model="salesInfo.projState">
                                <el-option label="售前" value="01"></el-option>
                                <el-option label="实施" value="02"></el-option>
                                <el-option label="结束" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24" class="item-title">销售信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售">
                                <el-input v-model="salesInfo.projSaleName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售主管">
                                <el-input v-model="salesInfo.projSaleLinemgr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea"  class="b-textarea" v-model="salesInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="24" class="item-title">项目实施</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门中心">
                                <el-input v-model="projImpleInfo.projImpDepname"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门编号">
                            <el-input v-model="projImpleInfo.projImpDepno"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="成本中心">
                            <el-input v-model="projImpleInfo.projImpCcc"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="实施进度">
                            <el-select v-model="projImpleInfo.projImpStep">
                                <el-option label="NEW" value="01"></el-option>
                                <el-option label="需求分析" value="02"></el-option>
                                <el-option label="设计阶段" value="03"></el-option>
                                <el-option label="开发阶段" value="04"></el-option>
                                <el-option label="测试阶段" value="05"></el-option>
                                <el-option label="完成上线" value="06"></el-option>
                                <el-option label="验收阶段" value="07"></el-option>
                                <el-option label="END" value="08"></el-option>
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
                                <el-input :disabled="true" v-model="projImpleInfo.projImpPm"></el-input>
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
                            <el-table-column align="center"  label="操作">
                                <template scope="scope">
                                    <el-button class="btn-primary">
                                        上传分包合同
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col> -->
                   
                </el-form>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
    let { queryProjAndSalesInfo,queryProjImpleInfo} = api
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
                    projPreconDate:'2017-08-8',
                    projPreincmDate:'2017-08-9',
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
		
                }
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