<template>
	<div class="welfare_info">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资" siji="保险详情"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">保险详情</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('socialData')">保存</el-button>			
			</div>
			<div class="add-wrapper">
				<el-form ref="socialData" :rules="rules" :model="socialData" label-width="120px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="organName">
						    <el-input v-model="socialData.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称" prop="derpName">
						    <el-input v-model="socialData.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="socialData.userNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="socialData.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-input v-model="socialData.custPost" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="socialData.custZIJI" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">详情信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="养老保险(个人)" prop="perEndmRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perEndmRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="养老保险(单位)" prop="comEndmRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comEndmRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="医疗保险(个人)" prop="perMediRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perMediRate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="医疗保险(单位)" prop="comMediRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comMediRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="失业保险(个人)" prop="perUnemRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perUnemRate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="失业保险(单位)" prop="comUnemRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comUnemRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工伤保险(个人)" prop="perEmplRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perEmplRate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工伤保险单位)" prop="comEmplRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comEmplRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="生育保险(个人)" prop="perMateRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perMateRate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="生育保险单位)" prop="comMateRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comMateRate"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公积金(个人)" prop="perHousRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.perHousRate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="公积(金单位)" prop="comHousRate" class="formLeft">
					      	<el-input type="text" placeholder="" v-model.number="socialData.comHousRate"></el-input>
					  	</el-form-item>	
					</el-col>	
					  	
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			socialData: {
				organName: 'xx',
				derpName: 'xx',
				userNo: 'xx',
				custName: 'xx',
				custPost: 'xx',
				custZIJI: 'xx',
				perEndmRate: 'xxxx',
				comEndmRate: 'xxx',
				perMediRate: 'xxx',
				comMediRate: '',
				perUnemRate: '',
				comUnemRate: '',
				perEmplRate: '',
				comEmplRate: '',
				perMateRate: '',
				comMateRate: '',
				perHousRate: '',
				comHousRate: ''
			},
			rules: {
				applyName: [
					{ required: true, message: '请输入模版名称', trigger: 'blur' }
				],
				perEndmRate: [
					{ required: true, type: 'number', message: '请输入养老保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEndmRate: [
					{ required: true, type: 'number', message: '请输入养老保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMediRate: [
					{ required: true, type: 'number', message: '请输入医疗保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comUnemRate: [
					{ required: true, type: 'number', message: '请输入失业保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comEmplRate: [
					{ required: true, type: 'number', message: '请输入工伤保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comMateRate: [
					{ required: true, type: 'number', message: '请输入生育保险单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				perHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金个人支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				comHousRate: [
					{ required: true, type: 'number', message: '请输入住房公积金单位支付系数', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				]
			}
		}
	},
	components: {
		current
	},
	created(){
		const self = this;
		
		//查询详情
		self.querySocialInfo();
	},
	methods: {
		save(formName) {
			const self = this;
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		let params = {
						applyNo: self.socialData.applyNo,
						applyName: self.socialData.applyName,
						remark: self.socialData.remark,
						perEndmRate: self.socialData.perEndmRate,
						comEndmRate: self.socialData.comEndmRate,
						perMediRate: self.socialData.perMediRate,
						comMediRate: self.socialData.comMediRate,
						perUnemRate: self.socialData.perUnemRate,
						comUnemRate: self.socialData.comUnemRate,
						perEmplRate: self.socialData.perEmplRate,
						comEmplRate: self.socialData.comEmplRate,
						perMateRate: self.socialData.perMateRate,
						comMateRate: self.socialData.comMateRate,
						perHousRate: self.socialData.perHousRate,
						comHousRate: self.socialData.comHousRate,
	          		};
//	          		for(let k in params) {
//						if(k.match('Rate')) {
//							params[k] = params[k]/100;
//						}
//					}
	          		//修改
	          		self.updateSocialInfo(params);
	           	 	
	          	} else {
	            	return false;
	          	}
	        });
		},
		querySocialInfo(params) {
			const self = this;
			self.$axios.get(baseURL+'' + params)
			.then(function(res) {
				console.log('socialInfo',res);
				if(res.data.code == "S00000") {
					self.socialData = res.data.data;
				}
			}).catch(function(err) {
				console.log('err');
			})
		},
		updateSocialInfo(params) {
			const self = this;
			self.$axios.put(baseURL+'',params)
  			.then((res) => {
  				console.log("updateSocialInfo",res);
  				if(res.data.code === "S00000") {
  					self.$message({ message: '操作成功', type: 'success' });
  					self.$router.push('/entry_wage');
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
/*.welfare_info .content {
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
}*/
</style>