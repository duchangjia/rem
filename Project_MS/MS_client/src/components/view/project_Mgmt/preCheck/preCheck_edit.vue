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
                                <el-input :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="客户">
                            <el-select>
                                <el-option label="客户1" value="01"></el-option>
                                <el-option label="客户2" value="02"></el-option>
                                <el-option label="客户3" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="服务管理模式">
                            <el-select>
                                <el-option label="项目外包" value="01"></el-option>
                                <el-option label="人力外包" value="02"></el-option>
                                <el-option label="解决方案" value="03"></el-option>
                                <el-option label="其他" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目类型">
                            <el-select>
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
                            <el-select>
                                <el-option label="外包" value="01"></el-option>
                                <el-option label="固定金额" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同金额">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="订单类型">
                            <el-select>
                                <el-option label="new sell" value="01"></el-option>
                                <el-option label="Up sell" value="02"></el-option>
                                <el-option label="Renew" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目交付地">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计合同签订时间">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计收入时间">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型">
                            <el-select>
                                <el-option label="Pipeline" value="01"></el-option>
                                <el-option label="EATP" value="02"></el-option>
                                <el-option label="Frotlog" value="03"></el-option>
                                <el-option label="Backlog" value="04"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                            <el-input readonly="readonly"></el-input>
                            <el-upload class="upload-demo" ref="upload":show-file-list="false" :auto-upload="false" action="">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">上传合同</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目状态">
                            <el-select>
                                <el-option label="售前" value="01"></el-option>
                                <el-option label="实施" value="02"></el-option>
                                <el-option label="结束" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="24" class="item-title">销售信息</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="销售主管">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="项目说明">
                            <el-input type="textarea"  class="b-textarea"></el-input>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="24" class="item-title">项目实施</el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门中心">
                                <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门编号">
                            <el-input ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="成本中心">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="实施进度">
                            <el-select>
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
                    <el-col :span="24" class="item-title">项目分包</el-col>
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