<template>
	<div class="edit_fun">
		<current yiji="系统管理" erji="功能管理" sanji="功能编辑"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">功能编辑</span>
				<div class="btn-wrap">
					<!--<el-button type="primary" class="reset" @click="passreset()">密码重置</el-button>-->
					<el-button type="primary" class="conserve" @click="conserve('userMsg')">保存</el-button>
				</div>
			</div>
			<div class="content-inner">
				<el-form :inline="true" :model="userMsg" ref="userMsg" label-width="80px">
					<el-col :span="12">
						<el-form-item label="交易代码" prop="dealcode">
							<el-input v-model="userMsg.dealcode"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="交易名称" prop="dealname">
							<el-input v-model="userMsg.dealname"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="接口名称" prop="interfacename">
							<el-input v-model="userMsg.interfacename"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="交易类型" prop="dealType">
							<el-select v-model="userMsg.dealType" placeholder="交易类型">
								<el-option label="交易类型" value="01"></el-option>
								<el-option label="交易类型" value="02"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属系统" prop="company">
							<el-select v-model="userMsg.company" class="bg-white">
								<el-option label="所属系统" value="01"></el-option>
								<el-option label="所属系统" value="02"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userMsg.status" class="bg-white">
								<el-option label="正常" value="00"></el-option>
								<el-option label="已锁定" value="01"></el-option>
								<el-option label="已注销" value="02"></el-option>
							</el-select>
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
					dealcode: '',
					dealname: '',
					interfacename: '',
					company: '',
					dealType: '',
					status: ''
				}
			}
		},
		components: {
			current
		},
		methods: {
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
	.edit_fun {
		padding-left: 20px;
		width: 100%;
		position: relative;
	}
	
	.edit_fun .back {
		position: absolute;
		right: 20px;
		top: 29px;
		width: 19px;
		height: 12px;
		cursor: pointer;
		background: url(../../../../static/img/common/back.png);
	}
	
	.edit_fun .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.edit_fun .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.edit_fun .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	
	.edit_fun .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.edit_fun .content .title .btn-wrap {
		float: right;
		margin-top: 20px;
	}
	
	.edit_fun .el-button {
		border-radius: 0px;
	}
	
	.edit_fun .btn-wrap .reset {
		background: #FFFFFF;
		border: 1px solid #FF9900;
		font-size: 14px;
		color: #FF9900;
		margin-right: 20px;
		width: 120px;
		height: 40px;
	}
	
	.edit_fun .btn-wrap .conserve {
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 40px;
	}
	
	.edit_fun .el-button:focus,
	.edit_fun .el-button:hover {
		opacity: 0.5;
	}
	
	.edit_fun .content-inner {
		padding: 40px 0px;
	}
	
	.edit_fun form {
		font-size: 0px;
	}
	
	.edit_fun form>div {
		float: none;
		display: inline-block;
	}
	
	.edit_fun .el-input,
	.edit_fun .el-input__inner {
		width: 300px;
		display: inline-block;
	}
	
	.edit_fun .el-form-item__label {
		color: #999999;
	    margin-right: 18px;
	}
	
	.edit_fun .el-input__inner {
		border: 1px solid #eeeeee;
		color: #333333;
		height: 40px;
	}
	
	.edit_fun .bg-white .el-input__inner {
		background: #FFFFFF;
	}
	
	.edit_fun .el-select:hover .el-input__inner {
		border-color: #ff9900;
	}
	
	.edit_fun .el-input__inner:hover {
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