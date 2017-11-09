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
							<el-form-item label="个人支付" prop="perEndmRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEndmFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEndmRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEndmFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMediRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMediFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMediRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMediFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perUnemRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perUnemFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comUnemRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comUnemFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEmplRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perEmplFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEmplRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comEmplFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMateRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perMateFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMateRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comMateFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perHousRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.perHousFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comHousRate">
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousRate"></el-input>
						    	<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="insurancePayTemplateData.comHousFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
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
				perEndmRate: '',
				perEndmFixed: '',
				comEndmRate: '',
				comEndmFixed: '',
				perMediRate: '',
				perMediFixed: '',
				comMediRate: '',
				comMediFixed: '',
				perUnemRate: '',
				perUnemFixed: '',
				comUnemRate: '',
				comUnemFixed: '',
				perEmplRate: '',
				perEmplFixed: '',
				comEmplRate: '',
				comEmplFixed: '',
				perMateRate: '',
				perMateFixed: '',
				comMateRate: '',
				comMateFixed: '',
				perHousRate: '',
				perHousFixed: '',
				comHousRate: '',
				comHousFixed: ''
			},
			rules: {
				applyName: [
					{ required: true, message: '请输入模版名称', trigger: 'blur' }
				],
				perEndmRate: [
					{ required: true, message: '请输入养老保险个人支付系数', trigger: 'blur' }
				],
				comEndmRate: [
					{ required: true, message: '请输入养老保险单位支付系数', trigger: 'blur' }
				],
				perMediRate: [
					{ required: true, message: '请输入医疗保险个人支付系数', trigger: 'blur' }
				],
				comMediRate: [
					{ required: true, message: '请输入医疗保险单位支付系数', trigger: 'blur' }
				],
				perUnemRate: [
					{ required: true, message: '请输入失业保险个人支付系数', trigger: 'blur' }
				],
				comUnemRate: [
					{ required: true, message: '请输入失业保险单位支付系数', trigger: 'blur' }
				],
				perEmplRate: [
					{ required: true, message: '请输入工伤保险个人支付系数', trigger: 'blur' }
				],
				comEmplRate: [
					{ required: true, message: '请输入工伤保险单位支付系数', trigger: 'blur' }
				],
				perMateRate: [
					{ required: true, message: '请输入生育保险个人支付系数', trigger: 'blur' }
				],
				comMateRate: [
					{ required: true, message: '请输入生育保险单位支付系数', trigger: 'blur' }
				],
				perHousRate: [
					{ required: true, message: '请输入住房公积金个人支付系数', trigger: 'blur' }
				],
				comHousRate: [
					{ required: true, message: '请输入住房公积金单位支付系数', trigger: 'blur' }
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
	            	self.$message.error('新增失败');
	            	return false;
	          	}
	        });
		},
		addInsurancePayTemplate(params) {
			const self = this;
			self.$axios.post(baseURL+'/InsurancePayTemplate/addInsurancePayTemplate', params)
  			.then(function(res) {
  				console.log(res)
  				self.$message({ message: '福利缴纳系数新增成功', type: 'success' });
  			}).catch(function(err) {
  				self.$message.error('新增失败');
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
	padding: 29px 0px;
	font-size: 16px;
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
	padding: 40px 0px;
}
.add_welfare .conserve {
	float: right;
	margin-top: 20px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 40px;
}
.add_welfare .form_box .title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 20px;
	color: #999999;
	border: none;
}
.add_welfare .form_box .inner {
	padding-left: 20px;
}
.add_welfare .form_box .plus {
	margin-left: 10px;
	margin-right: -20px;
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