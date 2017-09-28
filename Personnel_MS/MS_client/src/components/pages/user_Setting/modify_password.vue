<template>
	<div class="modifine_password">
		<div class="location-wrapper">
			<el-col :span="24">
				<span class="title">当前位置：</span>
				<el-breadcrumb separator="/" class="breadcrumb-inner">
					<el-breadcrumb-item>个人设置</el-breadcrumb-item>
					<el-breadcrumb-item>修改密码</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
		</div>
		<div class="content">
			<div class="title">
				<span class="title-text">修改密码</span>
			</div>
			<ul class="content-inner">
				<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="94px" class="demo-ruleForm">
					<el-form-item label="当前密码" prop="oldpass">
						<el-input type="password" v-model.number="ruleForm2.oldpass" placeholder="请输入原密码"></el-input>
						<span class="tips forget">忘记密码</span>
					</el-form-item>
					<el-form-item label="新密码" prop="pass">
						<el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请再次输入新密码"></el-input>
						<span class="tips">密码支持6-20位字符，至少包含数字、字母（区分大小写）、符号中的2种</span>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入新密码"></el-input>
					</el-form-item>
					
					<el-form-item>
						<el-button @click="submitForm('ruleForm2')">确定</el-button>
					</el-form-item>
				</el-form>

			</ul>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import Bus from '../../../common/Bus.js'
	export default {
		data() {
			var checkoldpass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('密码不能为空'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入新密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					pass: '',
					checkPass: '',
					oldpass: ''
				},
				rules2: {
					oldpass: [{
						validator: checkoldpass,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						Bus.$emit('showSuccessTip', '');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	.modifine_password {
		padding: 0px 20px;
		width: 100%;
	}
	.location-wrapper {
		width: 100%;
		height: 70px;
		line-height: 70px;
		font-size: 12px;
	}
	.location-wrapper .title {
		color: #475669;
		vertical-align: middle;
	}
	.location-wrapper .breadcrumb-inner {
		font-size: 12px;
		display: inline-block;
		vertical-align: middle;
	}
	.modifine_password .content {
		width: 100%;
		/*min-height: 530px;*/
	    /*height: calc(100% - 90px);*/
		padding: 0px 40px 20px;
		background: #ffffff;
	}
	.modifine_password .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	.modifine_password .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	.modifine_password .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	.modifine_password .content-inner {
		padding-top: 30px;
	}
	.modifine_password .el-form-item__label {
	    color: #999999;
	}
	.el-form-item__content {
	    font-size: 0px;
	}
	.modifine_password .el-input,
	.modifine_password .el-input__inner {
	    width: 300px;
	    display: inline-block;
	}
	.modifine_password .el-input__inner {
	    border-radius: 2px;
	    border: 1px solid #eeeeee;
	    color: #333333;
	    padding: 19px 10px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	}
	.modifine_password .el-input__icon {
	    position: absolute;
	    width: 35px;
	    height: 100%;
	    right: 0;
	    top: 0;
	    text-align: center;
	    color: #bfcbd9;
	    transition: all .3s;
	    font-size: 0px;
	}
	.modifine_password .tips {
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		margin-left: 40px;
	}
	.modifine_password .forget {
		cursor: pointer;
	}
	.modifine_password .forget:hover {
		color: #FF9900;
	}
	.modifine_password .el-button {
	    background: #ff9900;
	    border: none;
	    color: #fff;
	    margin-top: 62px;
	    padding: 12px 15px;
	    opacity: 0.6;
	    border-radius: 4px;
	    width: 300px;
	}
	.modifine_password .el-button, 
	.modifine_password .el-textarea__inner {
	    font-size: 16px;
	}
	.el-button:focus, .el-button:hover {
	    color: #fff;
	    border-color: #ff9900;
	    opacity: 0.5;
	}
	.modifine_password label {
	    display: inline-block;
	    max-width: 100%;
	    margin-bottom: 5px;
	    font-weight: normal;
	}
</style>