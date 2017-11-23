<template>
	<div class="add_welfare">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数新增</span>
				<el-button type="primary" class="conserve" @click="save('insurancePayTemplateData')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="insurancePayTemplateData" :rules="rules" :model="insurancePayTemplateData" label-width="80px">
					<el-form-item label="模版名称" prop="applyName">
					    <el-input v-model="insurancePayTemplateData.applyName"></el-input>
				  	</el-form-item>
					<el-form-item label="模版备注">
					    <el-input v-model="insurancePayTemplateData.remark"></el-input>
				  	</el-form-item>
					<div class="form_box">
						<div class="title">养老保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEndmRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perEndmFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comEndmRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comEndmFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMediRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perMediFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comMediRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comMediFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perUnemRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perUnemFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comUnemRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comUnemFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEmplRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perEmplFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comEmplRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comEmplFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMateRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perMateFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comMateRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comMateFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perHousRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perHousFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comHousRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comHousFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousFixed"></el-input>
						  	</el-form-item>					
						</div>
					</div>
					<div class="form_box"></div>
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

<style>
.add_welfare {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_welfare .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_welfare .content .title {
border-bottom: 1px solid #EEEEEE;
}

.add_welfare .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.add_welfare .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_welfare .content-inner {
	padding: 30px 0px;
}
.add_welfare .conserve {
	float: right;
	margin-top: 10px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 30px;
	padding: 0;
}
.add_welfare .form_box {
	clear: both;
}
.add_welfare .form_box .title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 20px;
	color: #999999;
	border: none;
	clear: both;
}
.add_welfare .form_box .inner {
	padding-left: 20px;
}
.add_welfare .form_box .plus {
	margin-left: 10px;
	margin-right: -20px;
    margin-top: 10px;
    float: left;
}
.add_welfare .form_box .el-form-item {
	width: 45%;
	float: left;
}
.add_welfare .form_box .el-form-item.formLeft {
	clear: both;
}
.add_welfare .form_box .el-form-item.formRight {
    margin-left: -50px;
}
.add_welfare .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.add_welfare .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.add_welfare .el-input {
    position: relative;
    font-size: 14px;
    width: 330px;
}
.add_welfare .el-form-item__error {
    padding-left: 30px;
}

</style>