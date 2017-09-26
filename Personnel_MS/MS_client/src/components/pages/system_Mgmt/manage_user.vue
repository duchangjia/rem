<template>
	<div class="manage_user">
		<div class="location-wrapper">
			<el-col :span="24">
				<span class="title">当前位置：</span>
				<el-breadcrumb separator="/" class="breadcrumb-inner">
					<el-breadcrumb-item>系统管理</el-breadcrumb-item>
					<el-breadcrumb-item>用户管理</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
		</div>
		<div class="content">
			<div class="title">
				<span class="title-text">用户管理</span>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" ref="ruleForm2" label-width="58px" class="demo-ruleForm">
					<div class="input-wrap">
						<el-form-item label="公司" prop="company">
							<el-input type="text" v-model="ruleForm2.company"></el-input>
						</el-form-item>
						<el-form-item label="部门" prop="department">
							<el-input type="text" v-model="ruleForm2.department"></el-input>
						</el-form-item>
						<el-form-item label="用户" prop="user">
							<el-input type="text" v-model="ruleForm2.user" placeholder="工号/姓名/手机/邮箱"></el-input>
						</el-form-item>
					</div>
					<div class="button-wrap">
						<el-form-item>
							<el-button @click="resetForm('ruleForm2')" class="resetform">重置</el-button>
							<el-button type="primary" @click="submitForm('ruleForm2')">查询</el-button>
						</el-form-item>
					</div>
				</el-form>
				<div class="user-info">
					<el-table :data="tableData" border stripe style="width: 100%">
						<el-table-column prop="number" label="工号" width="180">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="180">
						</el-table-column>
						<el-table-column prop="company" label="所属公司">
						</el-table-column>
						<el-table-column prop="department" label="部门">
						</el-table-column>
						<el-table-column prop="role" label="角色">
						</el-table-column>
						<el-table-column prop="phone" label="手机">
						</el-table-column>
						<el-table-column prop="status" label="状态">
						</el-table-column>
					</el-table>
				</div>
				<!--<div class="pagination-wrap">-->
				<el-pagination class="" layout="prev, pager, next" :total="1000">
				</el-pagination>
				<!--</div>-->
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default {
		data() {
			var checkAge = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('年龄不能为空'));
				}
			};
			var validatecompany = (rule, value, callback) => {
				//				if(value === '') {
				//					callback(new Error('请输入密码'));
				//				} else {
				//					if(this.ruleForm2.checkcompany !== '') {
				//						this.$refs.ruleForm2.validateField('checkcompany');
				//					}
				//					callback();
				//				}
			};
			var validatecompany2 = (rule, value, callback) => {
				//				if(value === '') {
				//					callback(new Error('请再次输入密码'));
				//				} else if(value !== this.ruleForm2.company) {
				//					callback(new Error('两次输入密码不一致!'));
				//				} else {
				//					callback();
				//				}
			};
			return {
				ruleForm2: {
					company: '',
					department: '',
					user: ''
				},
				tableData: [{
					number: '2016001',
					name: '王小虎',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}, {
					number: '2016001',
					name: '王小虎',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}, {
					number: '2016001',
					name: '王小虎',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}, {
					number: '2016001',
					name: '王小虎',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}],

				rules2: {
					company: [{
						validator: validatecompany,
						trigger: 'blur'
					}],
					checkcompany: [{
						validator: validatecompany2,
						trigger: 'blur'
					}],
					age: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}

	}
</script>

<style>
	.manage_user {
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
	
	.manage_user .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
	}
	
	.manage_user .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.manage_user .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	
	.manage_user .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.manage_user .content-inner {
		padding: 40px 0px;
	}
	
	.manage_user .input-wrap {
		display: flex;
	}
	
	.manage_user .el-form-item__label {
		text-align: left;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #999999;
		line-height: 1;
		padding: 11px 12px 11px 0;
		box-sizing: border-box;
	}
	
	.manage_user .input-wrap .el-form-item {
		margin-right: 80px;
	}
	
	.manage_user .el-form-item {
		margin-bottom: 40px;
	}
	
	.manage_user .el-input,
	.el-input__inner {
		width: 200px;
		display: inline-block;
	}
	
	.manage_user .el-form-item__content {
		line-height: 36px;
		position: relative;
		font-size: 14px;
	}
	
	.manage_user .button-wrap {
		margin: 0px auto;
		width: 264px;
	}
	
	.manage_user .button-wrap .el-form-item__content {
		margin-left: 0!important;
	}
	
	.manage_user .el-input__inner {
		border-radius: 2px;
		border: 1px solid #eeeeee;
		color: #333333;
		padding: 19px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	
	.manage_user .el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #ff9900;
		color: #ff9900;
		margin: 0;
		padding: 12px 45px;
		border-radius: 4px;
	}
	
	.manage_user .el-button.resetform {
		margin-right: 20px;
	}
	
	.manage_user .el-button--primary {
		color: #fff;
		background-color: #ff9900;
		border-color: #ff9900;
	}
	
	.manage_user .user-info {}
	
	.manage_user .el-table td,
	.manage_user .el-table th {
		text-align: center;
	}
	
	.manage_user .el-table th {
		white-space: nowrap;
		overflow: hidden;
		background-color: #f4f4f4;
		text-align: center;
		box-shadow: inset 0 1px 0 0 #EEEEEE;
	}
	
	.manage_user .el-table--border td,
	.el-table--border th {
		border-right: 1px solid #EEEEEE;
	}
	
	.manage_user .el-table td,
	.manage_user .el-table th.is-leaf {
		border-bottom: 1px solid #EEEEEE;
	}
	.manage_user .el-pagination {
		text-align: right;
		margin-top: 40px;
	}
	.manage_user .el-pager li.active {
	    border-color: #ff9900;
	    background-color: #ff9900;
	    color: #fff;
	    cursor: default;
	}
	.manage_user .el-pager li {
	    padding: 0 4px;
	    border-right: 0;
	    background: #fff;
	    font-size: 12px;
	    min-width: 24px;
	    height: 24px;
	    line-height: 24px;
	    text-align: center;
	}
	.el-pagination button, .el-pagination span {
	    display: inline-block;
	    font-size: 12px;
	    min-width: 24px;
	    height: 24px;
	    line-height: 24px;
	    vertical-align: top;
	    box-sizing: border-box;
	}
	.el-pager li:hover {
	    color: #FF9900;
	}
</style>