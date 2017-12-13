<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目一览" sanji="项目阶段"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目阶段</span>
            </div>
            <div class="add-wrapper">
                <el-form label-width="140px" :inline="true">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="机会号">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="客户">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同签订时间">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计收入时间">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                  

                    <el-col :span="24" class="item-title">销售信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售主管">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea" :disabled="true" class="b-textarea"></el-input>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="24" class="item-title">项目实施</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门中心">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门编号">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="成本中心">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="实施进度">
                            <el-input :disabled="true" class="sec-button-input">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                                <el-button slot="append">上传项目计划</el-button>
                            </el-input>
                            <el-upload class="upload-demo">
                                <el-button type="primary" class="uploadBtn">上传项目计划</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目经理">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目主管">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间">
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea" :disabled="true" class="b-textarea"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
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
<style lang="scss">
    .content-wrapper{
        .add-wrapper{
            .b-textarea{
                min-width:860px !important;
            }
           
        }
    }
</style>