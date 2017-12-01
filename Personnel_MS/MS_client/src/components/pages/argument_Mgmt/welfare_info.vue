<template>
	<div class="welfare_info">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数详情"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">福利缴纳系数详情</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('payTempDel')">保存</el-button>			
			</div>
			<div class="add-wrapper">
				<el-form ref="payTempDel" :inline="true" :rules="rules" :model="payTempDel" label-width="80px">
					<el-col :sm="24" :md="12">
						<el-form-item label="模版编号" prop="applyNo">
						    <el-input v-model="payTempDel.applyNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="模版名称" prop="applyName">
						    <el-input v-model="payTempDel.applyName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="模版备注">
						    <el-input v-model="payTempDel.remark"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">养老保险系数</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perEndmRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEndmRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item prop="perEndmFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEndmFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comEndmRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEndmRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comEndmFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEndmFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">医疗保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perMediRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMediRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="perMediFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMediFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comMediRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMediRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comMediFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMediFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">失业保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perUnemRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perUnemRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="perUnemFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perUnemFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comUnemRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comUnemRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					  	
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comUnemFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comUnemFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">工伤保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perEmplRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEmplRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="perEmplFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perEmplFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comEmplRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEmplRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comEmplFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comEmplFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">生育保险系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perMateRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMateRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="perMateFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perMateFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comMateRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMateRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comMateFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comMateFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">住房公积金系数</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="个人支付" prop="perHousRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perHousRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="perHousFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.perHousFixed"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="单位支付" prop="comHousRate">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comHousRate"></el-input>
					  		<span class="plus">%+</span>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item prop="comHousFixed" label=" " label-width="0">
					      	<el-input type="text" placeholder="" v-model.number="payTempDel.comHousFixed"></el-input>
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
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perEndmFixed: [
					{ required: true, type: 'number', message: '请输入养老保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comEndmRate: [
					{ required: true, type: 'number', message: '请输入养老保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comEndmFixed: [
					{ required: true, type: 'number', message: '请输入养老保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				perMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perMediFixed: [
					{ required: true, type: 'number', message: '请输入医疗保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comMediFixed: [
					{ required: true, type: 'number', message: '请输入医疗保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				perUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perUnemFixed: [
					{ required: true, type: 'number', message: '请输入失业保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comUnemFixed: [
					{ required: true, type: 'number', message: '请输入失业保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				perEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perEmplFixed: [
					{ required: true, type: 'number', message: '请输入工伤保险个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comEmplFixed: [
					{ required: true, type: 'number', message: '请输入工伤保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				perMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perMateFixed: [
					{ required: true, type: 'number', message: '请输入生育保险个人固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comMateFixed: [
					{ required: true, type: 'number', message: '请输入生育保险单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				perHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				perHousFixed: [
					{ required: true, type: 'number', message: '请输入住房公积金个人支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
				],
				comHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内，可精确到小数点后6位" }
				],
				comHousFixed: [
					{ required: true, type: 'number', message: '请输入住房公积金单位支付固定金额', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "可精确到小数点后2位" }
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
						console.log(self.payTempDel[k],'lalalal')
						self.payTempDel[k] = parseFloat((self.payTempDel[k]*100).toFixed(6));
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

<style scoped>
.welfare_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.welfare_info .plus {
	position: absolute;
    top: 0px;
    right: -70px;
}

</style>