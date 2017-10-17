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
					<el-form-item label="模版编号" prop="modelNo">
					    <el-input v-model="welfareInfo.modelNo"></el-input>
				  	</el-form-item>
					<el-form-item label="模版名称" prop="modelName">
					    <el-input v-model="welfareInfo.modelName"></el-input>
				  	</el-form-item>
					<el-form-item label="模版备注">
					    <el-input v-model="welfareInfo.beiz"></el-input>
				  	</el-form-item>
					<div class="form_box">
						<div class="title">养老保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="yangl_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yangl_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yangl_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="yangl_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yangl_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yangl_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="yiliao_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yiliao_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yiliao_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="yiliao_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yiliao_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.yiliao_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="shiye_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shiye_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shiye_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="shiye_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shiye_dw"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shiye_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="gongs_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.gongs_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.gongs_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="gongs_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.gongs_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.gongs_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="shengy_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shengy_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shengy_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="shengy_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shengy_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.shengy_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="zhuf_gr">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.zhuf_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.zhuf_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="zhuf_dw">
						      	<el-input type="text" placeholder="" v-model="welfareInfo.zhuf_dw"></el-input>
						    	<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="welfareInfo.zhuf_dw_r"></el-input>
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
				modelNo: '',
				modelName: '',
				beiz: '',
				yangl_gr: '',
				yangl_gr_r: '',
				yangl_dw: '',
				yangl_dw_r: '',
				yiliao_gr: '',
				yiliao_gr_r: '',
				yiliao_dw: '',
				yiliao_dw_r: '',
				shiye_gr: '',
				shiye_gr_r: '',
				shiye_dw: '',
				shiye_dw_r: '',
				gongs_gr: '',
				gongs_gr_r: '',
				gongs_dw: '',
				gongs_dw_r: '',
				shengy_gr: '',
				shengy_gr_r: '',
				shengy_dw: '',
				shengy_dw_r: '',
				zhuf_gr: '',
				zhuf_gr_r: '',
				zhuf_dw: '',
				zhuf_dw_r: ''
			},
			rules: {
				name: [
					{ required: true, message: '请输入模版名称', trigger: 'blur' }
				],
				yangl_gr: [
					{ required: true, message: '请输入养老保险个人支付系数', trigger: 'blur' }
				],
				yangl_dw: [
					{ required: true, message: '请输入养老保险单位支付系数', trigger: 'blur' }
				],
				yiliao_gr: [
					{ required: true, message: '请输入医疗保险个人支付系数', trigger: 'blur' }
				],
				yiliao_dw: [
					{ required: true, message: '请输入医疗保险单位支付系数', trigger: 'blur' }
				],
				shiye_gr: [
					{ required: true, message: '请输入失业保险个人支付系数', trigger: 'blur' }
				],
				shiye_dw: [
					{ required: true, message: '请输入失业保险单位支付系数', trigger: 'blur' }
				],
				gongs_gr: [
					{ required: true, message: '请输入工伤保险个人支付系数', trigger: 'blur' }
				],
				gongs_dw: [
					{ required: true, message: '请输入工伤保险单位支付系数', trigger: 'blur' }
				],
				shengy_gr: [
					{ required: true, message: '请输入生育保险个人支付系数', trigger: 'blur' }
				],
				shengy_dw: [
					{ required: true, message: '请输入生育保险单位支付系数', trigger: 'blur' }
				],
				zhuf_gr: [
					{ required: true, message: '请输入住房公积金个人支付系数', trigger: 'blur' }
				],
				zhuf_dw: [
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
		let modelNo = sessionStorage.getItem('modelNo');
		let param = { modelNo: modelNo };
		self.$axios.get(baseURL+'/queryWelfareInfo',{ params : param })
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