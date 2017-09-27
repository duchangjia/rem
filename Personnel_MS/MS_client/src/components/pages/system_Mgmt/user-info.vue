<template>
	<div class="user-info">
		<current yiji="系统管理" erji="用户管理" sanji="用户信息"></current>
		<!--<span class="back" @click="back()"></span>-->
		<div class="content">
			<div class="title">
				<span class="title-text">用户信息</span>
				<div class="btn-wrap">
					<el-button type="primary" class="reset" @click="passreset()">密码重置</el-button>
					<el-button type="primary" class="conserve" @click="conserve('userMsg')">保存</el-button>
				</div>
			</div>
			<div class="content-inner">
				<el-form :inline="true" :model="userMsg" :rules="rules" ref="userMsg" label-width="80px">
					<el-col :span="12">
						<el-form-item label="姓名" prop="name">
							<el-input v-model="userMsg.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="工号" prop="number">
							<el-input v-model="userMsg.number"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属公司" prop="company">
							<el-select v-model="userMsg.company" placeholder="所属公司">
								<el-option label="上海" value="shanghai"></el-option>
								<el-option label="深圳" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属部门" prop="department">
							<el-select v-model="userMsg.department" placeholder="所属部门">
								<el-option label="行政部" value="xingzheng"></el-option>
								<el-option label="财务部" value="caiwu"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="角色" prop="role">
							<el-select v-model="userMsg.role" class="bg-white">
								<el-option label="行政经理" value="01"></el-option>
								<el-option label="财务经理" value="02"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userMsg.status" class="bg-white">
								<el-option label="正常" value="00" checked></el-option>
								<el-option label="已锁定" value="01"></el-option>
								<el-option label="已注销" value="02"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="手机" prop="phone">
							<el-input v-model="userMsg.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="userMsg.email"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="身份证" prop="idCard">
							<el-input v-model="userMsg.idCard"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="userMsg.remark" class="bg-white"></el-input>
						</el-form-item>
					</el-col>
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
				userMsg: {
					name: '',
					number: '',
					company: '',
					department: '',
					role: '',
					status: '',
					phone: '123123123123',
					email: '',
					idCard: '54001111000002345',
					remark: ''
				},
				rules: {
					name: [
			            { required: true, message: '请输入姓名', trigger: 'blur' },
//			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
		          	],
					email: [
						{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
      					{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
					]
				}
			}
		},
		components: {
			current
		},
		methods: {
			//返回
			back() {
				this.$router.replace('management_user');
			},
			//密码重置
			passreset() {
				//this.$router.replace('modify_password');
			},
			//保存
			conserve(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
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
	.user-info {
		padding-left: 20px;
		width: 100%;
		position: relative;
	}
	
	.user-info .back {
		position: absolute;
		right: 20px;
		top: 29px;
		width: 19px;
		height: 12px;
		cursor: pointer;
		background: url(../../../../static/img/common/back.png);
	}
	
	.user-info .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.user-info .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.user-info .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	
	.user-info .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.user-info .content .title .btn-wrap {
		float: right;
		margin-top: 20px;
	}
	
	.user-info .el-button {
		border-radius: 0px;
	}
	
	.user-info .btn-wrap .reset {
		background: #FFFFFF;
		border: 1px solid #FF9900;
		font-size: 14px;
		color: #FF9900;
		margin-right: 20px;
		width: 120px;
		height: 40px;
	}
	
	.user-info .btn-wrap .conserve {
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 40px;
	}
	
	.user-info .el-button:focus,
	.user-info .el-button:hover {
		opacity: 0.5;
	}
	
	.user-info .content-inner {
		padding: 40px 0px;
	}
	
	.user-info form {
		font-size: 0px;
	}
	
	.user-info form>div {
		float: none;
		display: inline-block;
	}
	
	.user-info .el-input,
	.user-info .el-input__inner {
		width: 300px;
		display: inline-block;
	}
	
	.user-info .el-form-item__label {
		color: #999999;
	}
	
	.user-info .el-input__inner {
		border: 1px solid #eeeeee;
		color: #333333;
		background: #f4f4f4;
		height: 40px;
	}
	
	.user-info .bg-white .el-input__inner {
		background: #FFFFFF;
	}
	
	.user-info .el-select:hover .el-input__inner {
		border-color: #ff9900;
	}
	
	.user-info .el-input__inner:hover {
		border-color: #ff9900;
	}
	.el-select-dropdown__item.selected.hover {
	    background-color: #f4f4f4;
	}
	.el-select-dropdown__item.selected {
	    color: #333333;
	    background-color: #f4f4f4;
	}
</style>