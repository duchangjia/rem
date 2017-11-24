<template>
	<div class="welfare_info">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数详情"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数详情</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('payTempDel')">保存</el-button>			
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
							<el-form-item label="个人支付" prop="perEndmRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEndmRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perEndmFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEndmFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comEndmRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEndmRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comEndmFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEndmFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMediRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMediRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perMediFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMediFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comMediRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMediRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comMediFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMediFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perUnemRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perUnemRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perUnemFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perUnemFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comUnemRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comUnemRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comUnemFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comUnemFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEmplRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEmplRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perEmplFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEmplFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comEmplRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEmplRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comEmplFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEmplFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMateRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMateRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perMateFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMateFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comMateRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMateRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comMateFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMateFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perHousRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perHousRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="perHousFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.perHousFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="单位支付" prop="comHousRate" class="formLeft">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comHousRate"></el-input>
						  	</el-form-item>
						  	<span class="plus">%+</span>
						  	<el-form-item prop="comHousFixed" class="formRight">
						      	<el-input type="text" placeholder="" v-model.number="payTempDel.comHousFixed"></el-input>
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
					{ required: true, type: 'number', message: '请输入养老保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perEndmFixed: [
					{ required: true, type: 'number', message: '请输入养老保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comEndmRate: [
					{ required: true, type: 'number', message: '请输入养老保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEndmFixed: [
					{ required: true, type: 'number', message: '请输入养老保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMediFixed: [
					{ required: true, type: 'number', message: '请输入医疗保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMediFixed: [
					{ required: true, type: 'number', message: '请输入医疗保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perUnemFixed: [
					{ required: true, type: 'number', message: '请输入失业保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comUnemFixed: [
					{ required: true, type: 'number', message: '请输入失业保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perEmplFixed: [
					{ required: true, type: 'number', message: '请输入工伤保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEmplFixed: [
					{ required: true, type: 'number', message: '请输入工伤保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMateFixed: [
					{ required: true, type: 'number', message: '请输入生育保险个人固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMateFixed: [
					{ required: true, type: 'number', message: '请输入生育保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				perHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perHousFixed: [
					{ required: true, type: 'number', message: '请输入住房公积金个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
				],
				comHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comHousFixed: [
					{ required: true, type: 'number', message: '请输入住房公积金单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位的数" }
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
  					self.$message({ message: '操作成功', type: 'success' });
  					self.$router.push('/welfare_coefficient');
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
.welfare_info .toolBtn {
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
.welfare_info .form_box {
	clear: both;
}
.welfare_info .form_box .title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 20px;
	color: #999999;
	border: none;
	clear: both;
}
.welfare_info .form_box .inner {
	padding-left: 20px;
}
.welfare_info .form_box .plus {
	margin-left: 10px;
	margin-right: -20px;
    margin-top: 10px;
    float: left;
}
.welfare_info .form_box .el-form-item {
	width: 45%;
	float: left;
}
.welfare_info .form_box .el-form-item.formLeft {
	clear: both;
}
.welfare_info .form_box .el-form-item.formRight {
    margin-left: -50px;
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