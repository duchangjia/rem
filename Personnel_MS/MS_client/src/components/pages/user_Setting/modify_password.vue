<template>
	<div class="modifine_password">
		<current yiji="首页" erji="修改密码"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">修改密码</span>
			</div>
			<ul class="content-inner">
				<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
					<el-form-item label="当前密码" prop="oldPass">
						<el-input type="password" v-model="ruleForm2.oldPass" placeholder="请输入原密码"></el-input>
						<span class="tips link" @click="fegetPassword">忘记密码</span>
					</el-form-item>
					<el-form-item label="新密码" prop="newPass">
						<el-input type="password" v-model="ruleForm2.newPass" auto-complete="off" placeholder="请输入新密码"></el-input>
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
			<el-dialog title="修改成功" :visible.sync="dialogTableVisible" @close="closeDialog()">
				<div class="edit-tip txt-center ">恭喜您，密码修改成功，请重新<span class="c-primary cur-pointer" @click="goLogin()">登录</span></div>
			</el-dialog>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from '../../common/current_position.vue'
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkoldPass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('密码不能为空'));
				} else {
					callback();
				}
			};
			var validateNewPass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入新密码'));
				}else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,20}$/.test(value)){
					callback(new Error('请输入正确格式的密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validateCheckPass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.newPass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					newPass: '',
					checkPass: '',
					oldPass: ''
				},
				dialogTableVisible:false,
				rules2: {
					oldPass: [{ validator: checkoldPass, trigger: 'blur' }],
					newPass: [{ validator: validateNewPass, trigger: 'blur' }],
					checkPass: [{ validator: validateCheckPass, trigger: 'blur' }]
				}
			};
		},
		components: {
			current
		},
		created() {
		},
		methods: {
			fegetPassword() {
				this.$alert('如忘记密码，请联系系统管理人员进行密码重置操作。', '温馨提示', {
		          confirmButtonText: '确定',
		          callback: action => {
		            
		          }
		        });
			},
			submitForm(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if(valid) {
						let params = {
							newPassword: self.ruleForm2.newPass,
							oldPassword: self.ruleForm2.oldPass
						}
						//修改密码
						self.updatePassword(params);
						
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			updatePassword(params) {
				let self = this;
				self.$axios.put(baseURL+'/user/changePassword',params)
				.then((res) => {
					console.log('updatePassword',res);
					if(res.data.code === "S00000") {
						self.dialogTableVisible = true;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			goLogin(){
				this.$router.push('/login')
			},
			closeDialog(){
				let self = this;
				 self.goLogin();
			}
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	.modifine_password {
		padding-left: 20px;
		width: 100%;
	}
	.modifine_password .content {
		width: 100%;
		padding: 0px 40px 20px;
		background: #ffffff;
	}
	.modifine_password .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	.modifine_password .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 14px 0px;
		font-size: 16px;
		height: 50px;
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
	.modifine_password .el-form-item__content {
	    font-size: 0px;
	}
	.modifine_password .el-input,
	.modifine_password .el-input__inner {
	    width: 300px;
	    display: inline-block;
	}
	.modifine_password .el-input__inner {
	    border: 1px solid #EEEEEE;
	    color: #333333;
	}
	.modifine_password .el-input__inner:hover {
	    border-color: #FF9900!important;
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
	.modifine_password .link {
		cursor: pointer;
		color: #337ab7;
    	text-decoration: underline;
	}
	.modifine_password .el-button {
	    background: #ff9900;
	    border: none;
	    color: #fff;
	    margin-top: 34px;
	    padding: 12px 15px;
	    opacity: 0.6;
	    border-radius: 4px;
	    width: 300px;
        margin-left: 18px;
	}
	.modifine_password .el-button, 
	.modifine_password .el-textarea__inner {
	    font-size: 16px;
	}
	.modifine_password label {
	    display: inline-block;
	    max-width: 100%;
	    margin-bottom: 5px;
	    font-weight: normal;
        margin-right: 18px;
	}
	.modifine_password .el-form-item__error {
	    left: 28px;
	}
	.modifine_password .edit-tip{
		padding:40px 0;
		
	}
	.modifine_password .edit-tip span{
		margin-left:10px;
	}
</style>