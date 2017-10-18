<template>
	<div class="add_welfare">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置" siji="福利缴纳系数新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :rules="rules" :model="formdata" label-width="80px">
					<el-form-item label="模版名称" prop="name">
					    <el-input v-model="formdata.name"></el-input>
				  	</el-form-item>
					<el-form-item label="模版备注">
					    <el-input v-model="formdata.beiz"></el-input>
				  	</el-form-item>
					<div class="form_box">
						<div class="title">养老保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="yangl_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.yangl_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.yangl_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="yangl_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.yangl_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.yangl_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">医疗保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="yiliao_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.yiliao_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.yiliao_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="yiliao_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.yiliao_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.yiliao_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">失业保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="shiye_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.shiye_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.shiye_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="shiye_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.shiye_dw"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.shiye_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">工伤保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="gongs_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.gongs_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.gongs_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="gongs_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.gongs_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.gongs_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">生育保险系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="shengy_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.shengy_gr"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.shengy_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="shengy_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.shengy_dw"></el-input>
								<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.shengy_dw_r"></el-input>
						  	</el-form-item>
						</div>
					</div>
					<div class="form_box">
						<div class="title">住房公积金系数</div>
						<div class="inner">
							<el-form-item label="个人支付" prop="zhuf_gr">
						      	<el-input type="text" placeholder="" v-model="formdata.zhuf_gr"></el-input>
							    <span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.zhuf_gr_r"></el-input>
						  	</el-form-item>
						  	<el-form-item label="个人支付" prop="zhuf_dw">
						      	<el-input type="text" placeholder="" v-model="formdata.zhuf_dw"></el-input>
						    	<span class="plus">%+</span>
						      	<el-input type="text" placeholder="" v-model="formdata.zhuf_dw_r"></el-input>
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
export default {
	data() {
		return {
			formdata: {
				name: '',
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
	methods: {
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	           	 	this.$message({
			          	message: '福利缴纳系数新增成功',
			          	type: 'success'
			        });
	          	} else {
	            	this.$message.error('新增失败');
	            	return false;
	          	}
	        });
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
	background: #F4F4F4;
	border-top: 1px solid #EEEEEE;
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