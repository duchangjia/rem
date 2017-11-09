<template>
	<div class="welfare_info">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数详情"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数详情</span>
				<el-button type="primary" class="conserve" @click="save('payTempDel')">保存</el-button>			
			</div>
			<div class="content-inner">
				<el-form ref="payTempDel" :rules="rules" :model="payTempDel" label-width="80px">
					<el-form-item label="模版编号" prop="applyNo">
					    <el-input v-model="payTempDel.applyNo" :disabled="true"></el-input>
				  	</el-form-item>
					<el-form-item label="模版名称" prop="applyName">
					    <el-input v-model="payTempDel.applyName"></el-input>
				  	</el-form-item>
					<el-form-item label="模版备注">
					    <el-input v-model="payTempDel.remark"></el-input>
				  	</el-form-item>
					<div class="form_box">
						<div class="title">养老保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEndmRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perEndmRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perEndmFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEndmRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comEndmRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comEndmFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMediRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perMediFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMediRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comMediFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perUnemRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perUnemFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comUnemRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comUnemFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEmplRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perEmplFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEmplRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comEmplFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMateRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perMateFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMateRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comMateFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perHousRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.perHousRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.perHousFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comHousRate">
						      	<el-input type="text" placeholder="" v-model="payTempDel.comHousRate"></el-input>
						    	<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="payTempDel.comHousFixed"></el-input>
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
			payTempDel: {
				applyNo: '',
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
	created(){
		const self = this;
		let applyNo = self.$route.params.applyNo;
		
		//查询福利系数模版详情
		self.queryInsurancePayTemplate(applyNo);
	},
	methods: {
		save(formName) {
			const self = this;
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		let params = {
						applyNo: self.payTempDel.applyNo,
						applyName: self.payTempDel.applyName,
						remark: self.payTempDel.remark,
						perEndmRate: self.payTempDel.perEndmRate,
						perEndmFixed: self.payTempDel.perEndmFixed,
						comEndmRate: self.payTempDel.comEndmRate,
						comEndmFixed: self.payTempDel.comEndmFixed,
						perMediRate: self.payTempDel.perMediRate,
						perMediFixed: self.payTempDel.perMediFixed,
						comMediRate: self.payTempDel.comMediRate,
						comMediFixed: self.payTempDel.comMediFixed,
						perUnemRate: self.payTempDel.perUnemRate,
						perUnemFixed: self.payTempDel.perUnemFixed,
						comUnemRate: self.payTempDel.comUnemRate,
						comUnemFixed: self.payTempDel.comUnemFixed,
						perEmplRate: self.payTempDel.perEmplRate,
						perEmplFixed: self.payTempDel.perEmplFixed,
						comEmplRate: self.payTempDel.comEmplRate,
						comEmplFixed: self.payTempDel.comEmplFixed,
						perMateRate: self.payTempDel.perMateRate,
						perMateFixed: self.payTempDel.perMateFixed,
						comMateRate: self.payTempDel.comMateRate,
						comMateFixed: self.payTempDel.comMateFixed,
						perHousRate: self.payTempDel.perHousRate,
						perHousFixed: self.payTempDel.perHousFixed,
						comHousRate: self.payTempDel.comHousRate,
						comHousFixed: self.payTempDel.comHousFixed
	          		};
	          		for(let k in params) {
						if(k.match('Rate')) {
							params[k] = params[k]/100;
						}
					}
	          		//修改福利系数模版
	          		self.updateInsurancePayTemplate(params);
	           	 	
	          	} else {
	            	this.$message.error('修改失败');
	            	return false;
	          	}
	        });
		},
		queryInsurancePayTemplate(params) {
			const self = this;
			self.$axios.get(baseURL+'/InsurancePayTemplate/queryInsurancePayTemplate/' + params)
			.then(function(res) {
				console.log('detalPagTemp',res);
				self.payTempDel = res.data.data;
				for(let k in self.payTempDel) {
					if(k.match('Rate')) {
						self.payTempDel[k] = self.payTempDel[k]*100;
					}
				}
			}).catch(function(err) {
				console.log('err');
			})
		},
		updateInsurancePayTemplate(params) {
			const self = this;
			self.$axios.put(baseURL+'/InsurancePayTemplate/updateInsurancePayTemplate',params)
  			.then((res) => {
  				console.log("updateInsurancePayTemplate",res);
  				if(res.data.code === "S00000") {
  					this.$message({ message: '福利缴纳系数修改成功', type: 'success' });
  				}
  			}).catch((err) => {
  				console.log(err)
  			})
		}
	}
}
</script>

<style>
.welfare_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.welfare_info .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.welfare_info .content .title {
border-bottom: 1px solid #EEEEEE;
}

.welfare_info .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.welfare_info .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.welfare_info .content-inner {
	padding: 30px 0px;
}
.welfare_info .conserve {
	float: right;
	margin-top: 10px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 30px;
	padding: 0;
}
.welfare_info .form_box .title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}
.welfare_info .form_box .plus {
	margin-left: 10px;
	margin-right: -20px;
}
.welfare_info .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.welfare_info .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.welfare_info .el-input {
    position: relative;
    font-size: 14px;
    width: 330px;
}
.welfare_info .el-form-item__error {
    padding-left: 30px;
}
</style>