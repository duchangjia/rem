<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目一览" sanji="项目详情"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目详情</span>
            </div>
            <div class="add-wrapper">
                <!-- <el-form label-width="110px" :inline="true">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称">
                                <el-input :disabled="true" v-model="applyCompanyInfo.organName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请部门名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.derpName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="CCC">
                                <el-input :disabled="true" v-model="applyCompanyInfo.ccc"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请使用人工号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyUserNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="姓名">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="手机号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mobileNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custPost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custClass"></el-input>
                        </el-form-item>
                    </el-col>
                <el-col :span="24" class="item-title">资产信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买单价">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="当前库存数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.stockNum"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="购买金额">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyAmount"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="制造商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mfrs"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="供应商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.supplier"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产类别">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="资产名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="SN编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.snNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="规格型号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.specType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="出厂时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.factoryTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="免维保截至时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.faxFreeTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="主要性能说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.configInstr"></el-input>
                        </el-form-item>
                    </el-col>
                <el-col :span="24" class="item-title">使用信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="使用类别">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="使用数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyNum"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="发生时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyTime"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="状态">
                            <el-input placeholder="请选择状态" :disabled="true" v-model="applyCompanyInfo.applyStatus">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新人">
                            <el-input :disabled="true" v-model="applyCompanyInfo.updatedBy"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新时间">
                            <el-input :disabled="true" :value="applyCompanyInfo.updatedDate | formatDate"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form> -->
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
    import api from "../../../../common/api/api.js"
    // let { queryProjList } = api
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