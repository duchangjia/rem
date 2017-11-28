<template>
	<div class="add_welfare">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数新增"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">福利缴纳系数新增</span>
				<el-button class="toolBtn btn-primary" @click="save('insurancePayTemplateData')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="insurancePayTemplateData" :inline="true" :rules="rules" :model="insurancePayTemplateData" label-width="80px">
					<el-col :sm="24" :md="12">
						<el-form-item label="模版名称" prop="applyName">
						    <el-input v-model="insurancePayTemplateData.applyName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="模版备注">
						    <el-input v-model="insurancePayTemplateData.remark"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :span="24" class="item-title">养老保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perEndmRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmRate"></el-input>
					  		<span class="plus">%+</span>
						</el-form-item>
					  	
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perEndmFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comEndmRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmRate"></el-input>
							<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comEndmFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">医疗保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perMediRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perMediFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comMediRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comMediFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">失业保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perUnemRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perUnemFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comUnemRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comUnemFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">工伤保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perEmplRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perEmplFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comEmplRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comEmplFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">生育保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perMateRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perMateFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comMateRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateRate"></el-input>
					  		<span class="plus">%+</span>
					 	</el-form-item>	
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comMateFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">住房公积金系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perHousRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousRate"></el-input>
					  		<span class="plus">%+</span>
					  </el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="perHousFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousFixed"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comHousRate">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousRate"></el-input>
					  		<span class="plus">%+</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label=" " prop="comHousFixed" label-width="0">
					      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousFixed"></el-input>
					  	</el-form-item>	
					</el-col>
					
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			insurancePayTemplateData: {
				applyNo: "",
				applyName: '',
				remark: '',
				perEndmRate: '0',
				perEndmFixed: '0',
				comEndmRate: '0',
				comEndmFixed: '0',
				perMediRate: '0',
				perMediFixed: '0',
				comMediRate: '0',
				comMediFixed: '0',
				perUnemRate: '0',
				perUnemFixed: '0',
				comUnemRate: '0',
				comUnemFixed: '0',
				perEmplRate: '0',
				perEmplFixed: '0',
				comEmplRate: '0',
				comEmplFixed: '0',
				perMateRate: '0',
				perMateFixed: '0',
				comMateRate: '0',
				comMateFixed: '0',
				perHousRate: '0',
				perHousFixed: '0',
				comHousRate: '0',
				comHousFixed: '0'
			},
			rules: {
				applyName: [
					{ required: true, message: '请输入模版名称', trigger: 'blur' }
				],
				perEndmRate: [
					{ required: true, message: '请输入养老保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perEndmFixed: [
					{ required: true, message: '请输入养老保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comEndmRate: [
					{ required: true, message: '请输入养老保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEndmFixed: [
					{ required: true, message: '请输入养老保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perMediRate: [
					{ required: true, message: '请输入医疗保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMediFixed: [
					{ required: true, message: '请输入医疗保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comMediRate: [
					{ required: true, message: '请输入医疗保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMediFixed: [
					{ required: true, message: '请输入医疗保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perUnemRate: [
					{ required: true, message: '请输入失业保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perUnemFixed: [
					{ required: true, message: '请输入失业保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comUnemRate: [
					{ required: true, message: '请输入失业保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comUnemFixed: [
					{ required: true, message: '请输入失业保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perEmplRate: [
					{ required: true, message: '请输入工伤保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perEmplFixed: [
					{ required: true, message: '请输入工伤保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comEmplRate: [
					{ required: true, message: '请输入工伤保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEmplFixed: [
					{ required: true, message: '请输入工伤保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perMateRate: [
					{ required: true, message: '请输入生育保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMateFixed: [
					{ required: true, message: '请输入生育保险个人固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comMateRate: [
					{ required: true, message: '请输入生育保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMateFixed: [
					{ required: true, message: '请输入生育保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perHousRate: [
					{ required: true, message: '请输入住房公积金个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perHousFixed: [
					{ required: true, message: '请输入住房公积金个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comHousRate: [
					{ required: true, message: '请输入住房公积金单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comHousFixed: [
					{ required: true, message: '请输入住房公积金单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				]
			}
		}
	},
	components: {
		current
	},
	methods: {
		save(formName) {
			const self = this;
		 	self.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		let params = {
						applyName: self.insurancePayTemplateData.applyName,
						remark: self.insurancePayTemplateData.remark,
						perEndmRate: self.insurancePayTemplateData.perEndmRate,
						perEndmFixed: self.insurancePayTemplateData.perEndmFixed,
						comEndmRate: self.insurancePayTemplateData.comEndmRate,
						comEndmFixed: self.insurancePayTemplateData.comEndmFixed,
						perMediRate: self.insurancePayTemplateData.perMediRate,
						perMediFixed: self.insurancePayTemplateData.perMediFixed,
						comMediRate: self.insurancePayTemplateData.comMediRate,
						comMediFixed: self.insurancePayTemplateData.comMediFixed,
						perUnemRate: self.insurancePayTemplateData.perUnemRate,
						perUnemFixed: self.insurancePayTemplateData.perUnemFixed,
						comUnemRate: self.insurancePayTemplateData.comUnemRate,
						comUnemFixed: self.insurancePayTemplateData.comUnemFixed,
						perEmplRate: self.insurancePayTemplateData.perEmplRate,
						perEmplFixed: self.insurancePayTemplateData.perEmplFixed,
						comEmplRate: self.insurancePayTemplateData.comEmplRate,
						comEmplFixed: self.insurancePayTemplateData.comEmplFixed,
						perMateRate: self.insurancePayTemplateData.perMateRate,
						perMateFixed: self.insurancePayTemplateData.perMateFixed,
						comMateRate: self.insurancePayTemplateData.comMateRate,
						comMateFixed: self.insurancePayTemplateData.comMateFixed,
						perHousRate: self.insurancePayTemplateData.perHousRate,
						perHousFixed: self.insurancePayTemplateData.perHousFixed,
						comHousRate: self.insurancePayTemplateData.comHousRate,
						comHousFixed: self.insurancePayTemplateData.comHousFixed
	          		};
	          		for(let k in params) {
						if(k.match('Rate')) {
							params[k] = params[k]/100;
						}
					}
	          		//新增福利系数模版
	          		self.addInsurancePayTemplate(params);
	          	} else {
	            	return false;
	          	}
	        });
		},
		addInsurancePayTemplate(params) {
			const self = this;
			self.$axios.post(baseURL+'/InsurancePayTemplate/addInsurancePayTemplate', params)
  			.then(function(res) {
  				if(res.data.code === "S00000") {
  					self.$message({ message: '福利缴纳系数新增成功', type: 'success' });
	  				self.$router.push('/welfare_coefficient');
  				}
	  				
  			}).catch(function(err) {
  				console.log('error')
  			})
		}
	}
}
</script>

<style scoped>
.add_welfare {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_welfare .plus {
	position: absolute;
    top: 0px;
    right: -70px;
}

</style>