<template>
	<div class="welfare_info">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数详情"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数详情</span>
				<!--<el-button type="primary" class="conserve" @click="save('welfareInfo')">保存</el-button>-->
				<el-button type="primary" class="conserve" @click="back">返回</el-button>			
			</div>
			<div class="content-inner">
				<el-form ref="welfareInfo" :rules="rules" :model="welfareInfo" label-width="80px">
					<el-form-item label="模版编号" prop="applyNo">
					    <el-input v-model="welfareInfo.applyNo"></el-input>
				  	</el-form-item>
					<el-form-item label="模版名称" prop="applyName">
					    <el-input v-model="welfareInfo.applyName"></el-input>
				  	</el-form-item>
					<el-form-item label="模版备注">
					    <el-input v-model="welfareInfo.remark"></el-input>
				  	</el-form-item>
					<div class="form_box">
						<div class="title">养老保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEndmRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perEndmRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perEndmFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEndmRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comEndmRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comEndmFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMediRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perMediFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMediRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comMediRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comMediFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perUnemRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perUnemFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comUnemRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comUnemRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comUnemFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perEmplRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perEmplFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comEmplRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comEmplRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comEmplFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perMateRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perMateFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comMateRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comMateRate"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comMateFixed"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="perHousRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perHousRate"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.perHousFixed"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="comHousRate">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comHousRate"></el-input>
						    	<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.comHousFixed"></el-input>
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
const baseURL = 'ifdp'
export default {
	data() {
		return {
			welfareInfo: {
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
		let param = { applyNo: applyNo };
		self.$axios.get(baseURL+'/queryInsurancePayTemplate',{ params : param })
			.then(function(res) {
				console.log('res',res);
				self.welfareInfo = res.data.data;
			}).catch(function(err) {
				console.log('err');
			})
	},
	methods: {
		back() {
			this.$router.push('welfare_coefficient')
		}
//		save(formName) {
//		 	this.$refs[formName].validate((valid) => {
//	          	if (valid) {
//	           	 	this.$message({
//			          	message: '福利缴纳系数新增成功',
//			          	type: 'success'
//			        });
//	          	} else {
//	            	this.$message.error('新增失败');
//	            	return false;
//	          	}
//	        });
//		}
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
	padding: 29px 0px;
	font-size: 16px;
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
	padding: 40px 0px;
}
.welfare_info .conserve {
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
.welfare_info .form_box .title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 20px;
	color: #999999;
	background: #F4F4F4;
	border-top: 1px solid #EEEEEE;
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