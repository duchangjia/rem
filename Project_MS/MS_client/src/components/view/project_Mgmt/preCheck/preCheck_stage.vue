<template>
    <div class="container-wrap">
        <current yiji="项目管理" erji="项目一览" sanji="项目阶段"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">项目阶段</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
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
                        <el-form-item label="预计合同签订时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreconDate"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预计收入时间">
                                <el-input :disabled="true" v-model="salesInfo.projPreincmDate"></el-input>
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
                </el-form>    
                <el-col :span="24" class="item-title">项目实施</el-col>
                <el-form ref="projImpleInfo" :inline="true"  :rules="rules2" :model="projImpleInfo" label-width="110px">
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
                            <!-- <el-input v-model="projImpleInfo.projImpStep"> -->
                                <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
                                <!-- <el-button slot="append">查看项目计划</el-button>
                                <el-button slot="append">上传项目计划</el-button> -->
                            <!-- </el-input> -->
                            <el-select v-model="projImpleInfo.projImpStep" class="sec-button-input">
                                <el-option v-for="item in projImpStepList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                            <el-button class="whatchProj">查看项目计划</el-button>
                            <el-upload action="123" class="upload-demo">
                                <el-button type="primary" class="uploadBtn">上传项目计划</el-button>
                            </el-upload>
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
                            <el-input type="textarea" class="b-textarea" v-model="projImpleInfo.projImpDesc"></el-input>
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
    // let { queryProjAndSalesInfo,queryProjImpleInfo} = api
	export default {
		data() {
			return{
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
		
                },
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
                rules2: {
                    projImpStep: [

                    ],
                    projImpDesc: [
                        { min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
                    ]
                }

            }
        },
        created(){
            //查询项目信息详情
            // this.queryProjAndSalesInfo();
		},
        methods:{
            save() {
                let self = this;
                self.$refs.projImpleInfo.validate(valid => {
                        console.log('valid')
                    let params = {

                    }
                    //更新
                    self.updatedProjInfo(params);
                })
            },
            //查询项目信息详情
			queryProjAndSalesInfo() {
                const self = this;
                let oppoNo =  localStorage.getItem('preCheckOppoNo');
				let params = {

				};
				self.$axios.get( '', params)
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
            updatedProjInfo(params) {
				const self = this;
				self.$axios.put( '',params)
				.then((res) => {
					console.log('updated', res);
					if(res.data.code=="S00000"){
			        	self.$message({ message: '操作成功', type: 'success' });
			        	self.$router.push('/preCheck_query');
					} else {
						console.log('error');
					}
				})
				.catch((err) => {
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
           .whatchProj {
               width: 90px;
               padding: 12px 0;
               position: absolute;
               left: 120px;
               top: 0;
               background: #ff9900;
               color: #ffffff;
           }
           .uploadBtn {
               width: 90px;
               padding: 12px 0;
               border-radius: 4px!important;
               left: 211px;
           }
        }
        .sec-button-input .el-input__inner {
            width: 120px!important;
        }
    }
</style>