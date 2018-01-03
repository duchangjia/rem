<template>
	<div class="add_preSale">
		<current yiji="项目管理" erji="售前立项" sanji="售前立项修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">售前立项修改</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" @click="saveAndSubmit">保存提交审批</el-button>
					<el-button class="btn-primary" @click="saveNotSbumit">保存暂不提交审批</el-button>
				</div>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules" :model="formdata1" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="机会号">
							<el-input v-model="formdata1.oppoNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目名称" prop="projName">
							<el-input v-model="formdata1.projName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入类型" prop="projIncmConfim">
							<el-select v-model="formdata1.projIncmConfim">
								<el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="客户" prop="coocustNo">
							<el-input v-model="formdata1.coocustNo"></el-input>
							<!-- <el-select v-model="formdata1.coocustNo">
								<el-option v-for="item in userNoList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select> -->
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="服务管理模式" prop="projSrvMngmode">
							<el-select v-model="formdata1.projSrvMngmode">
								<el-option v-for="item in fuwuModelList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="项目类型" prop="projType">
						    <el-select v-model="formdata1.projType">
								<el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入确认类型" prop="projIncmType">
						    <el-select v-model="formdata1.projIncmType">
								<el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同金额" prop="projPreconAmt">
                            <el-input v-model.number="formdata1.projPreconAmt"></el-input>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="订单类型" prop="projOrdType">
						    <el-select v-model="formdata1.projOrdType">
								<el-option v-for="item in dindanTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	 
				  	<el-col :sm="24" :md="12">
				  		<el-form-item class="projImplePla" label="项目交付地" prop="projImplePla">
						    <el-input type="text" v-model="formdata1.projImplePla"></el-input>
					  	</el-form-item>
				  	</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="预计合同签订时间" prop="porjPreconDate">
				        	<el-date-picker type="date" v-model="formdata1.porjPreconDate" @change="changePorjPreconDate" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="计划开始时间" prop="projImpBegdate">
				        	<el-date-picker type="date" v-model="formdata1.projImpBegdate" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计结束时间" prop="projImpEndate">
				        	<el-date-picker type="date" v-model="formdata1.projImpEndate" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                </el-form>
                <el-col :span="24" class="item-title">销售信息</el-col>  
                <el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata1" label-width="130px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="销售" prop="projSaleName">
						    <el-input type="text" v-model="formdata1.projSaleName"></el-input>
					  	</el-form-item>
				  	</el-col>
					  <el-col :sm="24" :md="12">
				  		<el-form-item label="销售主管" prop="projSaleLinemgrno">
						    <el-input type="text" v-model="formdata1.projSaleLinemgrno"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :span="24">
				  		<el-form-item label="项目说明" prop="remark">
							<el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata1.remark">
							</el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
				<el-col :span="24" class="item-title" style="position: relative;">立项预算
					<el-upload class="upload-demo" ref="upload" name="file"
						:data="formdata"
						:on-change="changeUpload"
						:on-success="successUpload"
						action="" 
						:show-file-list="false" 
						:auto-upload="false"
						:headers="token"
					>
						<el-button slot="trigger" type="primary" class="uploadBtn" style="right: 151px;border-radius: 4px;">上传立项申请表</el-button>
					</el-upload>
				</el-col>
				
				<el-form ref="formdata3" :inline="true"  :rules="rules" :model="formdata2" label-width="130px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="总工作量" prop="projBudTalwork">
						    <el-input type="text" v-model="formdata2.projBudTalwork"></el-input>
					  	</el-form-item>
				  	</el-col>
					  <el-col :sm="24" :md="12">
				  		<el-form-item label="人力成本" prop="projBudHrcost">
						    <el-input type="text" v-model="formdata2.projBudHrcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="费用成本" prop="projBudExpcost">
						    <el-input type="text" v-model="formdata2.projBudExpcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="分包成本" prop="projBudSubcost">
						    <el-input type="text" v-model="formdata2.projBudSubcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="税金" prop="projBudTax">
						    <el-input type="text" v-model="formdata2.projBudTax"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="总收入" prop="projBudTalinc">
						    <el-input type="text" v-model="formdata2.projBudTalinc"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="毛利润(GM)%" prop="projGrsMarg">
						    <el-input type="text" v-model="formdata2.projGrsMarg"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="净利润(GM)%" prop="projNetMarg">
						    <el-input type="text" v-model="formdata2.projNetMarg"></el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	const baseURL = 'iem_pmg';
	export default {
		data() {
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计开始时间不能为空'));
		        } else if (this.formdata1.projImpEndate && value >= this.formdata1.projImpEndate) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计结束时间不能为空'));
		        } else if (this.formdata1.projImpBegdate && value <= this.formdata1.projImpBegdate) {
		          	callback(new Error('请输入正确的结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileFlag: '',
				formdata1: {
					projName: "",
					projIncmConfim: "",
					coocustNo: "",
					projSrvMngmode: "",
					projType: "",
					projIncmType: "T&M",
					applyNo: "",
                    porjPreconDate: "", //2017-10-12-21 10:20:20
                    projImpBegdate: "",
					projImpEndate: "",
					projPreconAmt: "",
					workotStartCity: "",
					workotArrivalCity: "",
					projOrdType: "",
					workotSTD: "",
					projImplePla: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				formdata2: {

				},
				// formdata1: {

				// },
				//项目类型列表
                projTypeList: [
					{paraValue: 'ASD',paraShowMsg: '应用系统开发'},
					{paraValue: 'SPD',paraShowMsg: '软件产品开发'},
					{paraValue: 'APM',paraShowMsg: '应用维护升级'},
					{paraValue: 'SSI',paraShowMsg: '系统集成'},
					{paraValue: 'ISS',paraShowMsg: '信息系统安全'},
					{paraValue: 'ASC',paraShowMsg: '咨询服务'},
					{paraValue: 'OTH',paraShowMsg: '其他'}
				],
                //收入类型列表
				projIncmTypeList: [
					{paraValue: '01',paraShowMsg: 'Pipeline'},
					{paraValue: '02',paraShowMsg: 'EATP'},
					{paraValue: '03',paraShowMsg: 'Frotlog'},
					{paraValue: '04',paraShowMsg: 'Backlog'}
				],
				//客户列表
				userNoList: [
					{paraValue: '01',paraShowMsg: '中国平安'},
					{paraValue: '02',paraShowMsg: '招商银行'}
				],
				//服务管理模式列表
				fuwuModelList: [
					{paraValue: '01',paraShowMsg: '项目外包'},
					{paraValue: '02',paraShowMsg: '人力外包'},
					{paraValue: '03',paraShowMsg: '解决方案'},
					{paraValue: '04',paraShowMsg: '其他'}
				],
				//收入确认类型列表
                incmConfimList: [
					{paraValue: 'T&M',paraShowMsg: '外包'},
					{paraValue: 'FIX',paraShowMsg: '固定金额'}
				],
                //订单类型列表
				dindanTypeList: [
					{paraShowMsg: 'NEW SELL', paraValue: 'NS'},
					{paraShowMsg: 'UP SELL', paraValue: 'US'},
					{paraShowMsg: 'RE NEW', paraValue: 'RN'}
				],
			 	rules: {
			 		projName: [
						{ required: true, message: '项目名称不能为空', trigger: 'blur' }
					], //项目名称
					projIncmConfim: [
						{ required: true, message: '收入类型不能为空', trigger: 'blur' }
					], // 收入类型
					coocustNo: [
						{ required: true, message: '客户不能为空', trigger: 'blur' }
					], // 客户
					projSrvMngmode: [
						// { required: true, message: '服务管理模式不能为空', trigger: 'blur' }
					], // 服务管理模式
					projType: [
						{ required: true, message: '项目类型不能为空', trigger: 'blur' }
					], // 项目类型
					projIncmConfim: [
						// { required: true, message: '收入确认类型不能为空', trigger: 'blur' }
					], // 收入确认类型
					projPreconAmt: [
						{ required: true, message: '预算合同金额不能为空', trigger: 'blur' }
					], // 预算合同金额
					projOrdType: [
						{ required: true, message: '订单类型不能为空', trigger: 'blur' }
					], // 订单类型
					projImplePla: [
						// { required: true, message: '项目交付地不能为空', trigger: 'blur' }
					], // 项目交付地
					porjPreconDate: [
						{ required: true, message: '预计合同签订时间不能为空', trigger: 'change' }
					], // 预计合同签订时间
					projImpBegdate: [
						// { required: true, validator: checkWorkotStartTime, trigger: 'change' }
					], // 计划开始时间
					projImpEndate: [
						// { required: true, validator: checkWorkotEndTime, trigger: 'change' }
					], // 预计结束时间
					projSaleName: [
						{ required: true, message: '销售人员姓名不能为空', trigger: 'blur' }
					], // 销售人员姓名
					projSaleLinemgrno: [
						// { required: true, message: '销售主管不能为空', trigger: 'blur' }
					], // 销售主管
					remark: [
						{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
					], // 项目说明(销售信息中的)
					projBudTalwork: [], // 总工作量
					projBudHrcost: [], // 人力成本
					projBudExpcost: [], // 费用成本
					// projBudSubcost: [], // 分包成本
					projBudTax: [], // 税金
					projBudTalinc: [], // 总收入
					projGrsMarg: [], // 毛利润
					projNetMarg: []  //毛利润
                },
			}
		},
		components: {
			current
		},
		created() {
			
			//查询详情
			this.queryUserDetail();
			//查询详情
			this.queryperSDetail();
            //查询收入金额列表
            //this.queryprojIncmTypeList()
			//查询收入确认金额列表
            // this.queryincmConfimList();
            // //查询项目类型列表
            // this.queryprojTypeList()
		},
		computed: {
			formdata: function(){
				const self = this;
				return {
					
				}
			}
		},
		methods: {
            changePorjPreconDate(time) {
				this.formdata1.porjPreconDate = time;
			},
			changeStartTime(time) {
				this.formdata1.projImpBegdate = time;
			},
			changeEndTime(time) {
				this.formdata1.projImpEndate = time;
			},
			changeValue(value) {
		 		const self = this;
	      	},
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
		 		this.formdata1.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
					// this.$router.push('/');
	      		}
			},
			//保存提交审批点击
			saveAndSubmit() {
				let self = this;
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          	self.$refs.formdata2.validate(valid => {
							if (valid) {
								self.$refs.formdata3.validate(valid => {
									if (valid) {
										let params = {
											projName: self.formdata1.projName, //项目名称
											projIncmConfim: self.formdata1.projIncmConfim, // 收入类型
											coocustNo: self.formdata1.coocustNo, // 客户
											projSrvMngmode: self.formdata1.projSrvMngmode, // 服务管理模式
											projType: self.formdata1.projType, // 项目类型
											projIncmConfim: self.formdata1.projIncmConfim, // 收入确认类型
											projPreconAmt: self.formdata1.projPreconAmt, // 预算合同金额
											projOrdType: self.formdata1.projOrdType, // 订单类型
											projImplePla: self.formdata1.projImplePla, // 项目交付地
											porjPreconDate: self.formdata1.porjPreconDate, // 预计合同签订时间
											projImpBegdate: self.formdata1.projImpBegdate, // 计划开始时间
											projImpEndate: self.formdata1.projImpEndate, // 预计结束时间
											projSaleName: self.formdata1.projSaleName, // 销售人员姓名
											projSaleLinemgrno: self.formdata1.projSaleLinemgrno, // 销售主管
											remark: self.formdata1.remark, // 项目说明(销售信息中的)
											projBudTalwork: self.formdata2.projBudTalwork, // 总工作量
											projBudHrcost: self.formdata2.projBudHrcost, // 人力成本
											projBudExpcost: self.formdata2.projBudExpcost, // 费用成本
											projBudSubcost: self.formdata2.projBudSubcost, // 分包成本
											projBudTax: self.formdata2.projBudTax, // 税金
											projBudTalinc: self.formdata2.projBudTalinc, // 总收入
											projGrsMarg: self.formdata2.projGrsMarg, // 毛利润
											projNetMarg: self.formdata2.projNetMarg, // 净利润 
										}
										console.log('params', params)
										//保存
										self.savePreSale(params);
										//提交审批
										self.submitPreSale(params);
									}
								})
							}
						})
					}
				})

			},
			//保存不提交审批点击
			saveNotSbumit() {
				let self = this;
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          	self.$refs.formdata2.validate(valid => {
							if (valid) {
								self.$refs.formdata3.validate(valid => {
									if (valid) {
										let params = {
											projName: self.formdata1.projName, //项目名称
											projIncmConfim: self.formdata1.projIncmConfim, // 收入类型
											coocustNo: self.formdata1.coocustNo, // 客户
											projSrvMngmode: self.formdata1.projSrvMngmode, // 服务管理模式
											projType: self.formdata1.projType, // 项目类型
											projIncmConfim: self.formdata1.projIncmConfim, // 收入确认类型
											projPreconAmt: self.formdata1.projPreconAmt, // 预算合同金额
											projOrdType: self.formdata1.projOrdType, // 订单类型
											projImplePla: self.formdata1.projImplePla, // 项目交付地
											porjPreconDate: self.formdata1.porjPreconDate, // 预计合同签订时间
											projImpBegdate: self.formdata1.projImpBegdate, // 计划开始时间
											projImpEndate: self.formdata1.projImpEndate, // 预计结束时间
											projSaleName: self.formdata1.projSaleName, // 销售人员姓名
											projSaleLinemgrno: self.formdata1.projSaleLinemgrno, // 销售主管
											remark: self.formdata1.remark, // 项目说明(销售信息中的)
											projBudTalwork: self.formdata2.projBudTalwork, // 总工作量
											projBudHrcost: self.formdata2.projBudHrcost, // 人力成本
											projBudExpcost: self.formdata2.projBudExpcost, // 费用成本
											projBudSubcost: self.formdata2.projBudSubcost, // 分包成本
											projBudTax: self.formdata2.projBudTax, // 税金
											projBudTalinc: self.formdata2.projBudTalinc, // 总收入
											projGrsMarg: self.formdata2.projGrsMarg, // 毛利润
											projNetMarg: self.formdata2.projNetMarg, // 净利润 
										}
										console.log('params', params)
										//保存
										self.savePreSale(params);
									}
								})
							}
						})
					}
				})	
			},
			//保存修改
			savePreSale(params) {
				let self = this;
				self.$axios.post(baseURL+'/presale/updatePresaleProjInfo',params)
				.then((res) => {
					console.log('save',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
						// self.$router.push('/preSale_query');
		      		}
				}).catch((err) => {
					console.log('error');
				})
			},
			//提交审批
			submitPreSale(params) {
				let self = this;
				self.$axios.post(baseURL+'',params)
				.then((res) => {
					console.log('Submit',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
						// self.$router.push('/preSale_query');
		      		}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryUserDetail() {
				const self = this;
				let oppoNo = sessionStorage.getItem('preSaleEdit_oppoNo');
				self.$axios.get(baseURL+'/presale/queryPresaleProjDetial/'+ oppoNo)
				.then((res) => {
					console.log('userdtl', res);
					if(res.data.code == 'S00000') {
						self.formdata1 = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
			},
			queryperSDetail() {
				const self = this;
				let oppoNo = sessionStorage.getItem('preSaleEdit_oppoNo');
				self.$axios.get(baseURL+'budget/queryProjBudgetInfo/'+ oppoNo)
				.then((res) => {
					console.log('presaledtl', res);
					if(res.data.code == 'S00000') {
						self.formdata2 = res.data.data;
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
		}
	};
</script>

<style>
.add_preSale {
	padding: 0 0 20px 20px;
}
.addPreSaleButton_wrapper {
	width: 400px;
	margin: 0 auto;
}
.titleBtn_wrapper {
	float: right;
}
</style>