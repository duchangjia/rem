<template>
	<div class="user-query">
		<current yiji="系统管理" erji="用户管理"></current>
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
				<div class="info">
					<el-table :data="userList" border stripe style="width: 100%">
						<el-table-column prop="number" label="工号">
						</el-table-column>
						<el-table-column prop="name" label="姓名">
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
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from '../../common/current_position.vue'
	export default {
		data() {
			var checkAge = (rule, value, callback) => {
			};
			var validatecompany = (rule, value, callback) => {
			};
			var validatecompany2 = (rule, value, callback) => {
			};
			return {
				currentPage: 5,
				ruleForm2: {
					company: '',
					department: '',
					user: ''
				},
				userList: [{
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
					status: '已锁定'
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
		components: {
			current
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
//			resetForm(formName) {
//				this.$refs[formName].resetFields();
//			}
			resetForm() {
				this.$router.push('/user-info');
			},
			handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
	      	}
		}

	}
</script>

<style>
	.user-query {
		padding-left: 20px;
		width: 100%;
	}
	.user-query .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.user-query .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.user-query .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	
	.user-query .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.user-query .content-inner {
		padding: 40px 0px;
	}
	
	.user-query .input-wrap {
		display: flex;
	}
	
	.user-query .el-form-item__label {
		text-align: left;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #999999;
		line-height: 1;
		padding: 11px 12px 11px 0;
		box-sizing: border-box;
	}
	
	.user-query .input-wrap .el-form-item {
		margin-right: 80px;
	}
	
	.user-query .el-form-item {
		margin-bottom: 40px;
	}
	
	.user-query .el-input,
	.user-query .el-input__inner {
		width: 200px;
		display: inline-block;
	}
	
	.user-query .el-form-item__content {
		line-height: 36px;
		position: relative;
		font-size: 14px;
	}
	
	.user-query .button-wrap {
		margin: 0px auto;
		width: 264px;
	}
	
	.user-query .button-wrap .el-form-item__content {
		margin-left: 0!important;
	}
	
	.user-query .el-input__inner {
		border-radius: 4px;
		border: 1px solid #eeeeee;
		color: #333333;
		padding: 19px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	.user-query .el-input__inner:hover {
	    border-color: #ff9900;
	}
	.user-query .el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #ff9900;
		color: #ff9900;
		margin: 0;
		padding: 12px 45px;
		border-radius: 0px;
	}
	
	.user-query .el-button.resetform {
		margin-right: 20px;
	}
	
	.user-query .el-button--primary {
		color: #fff;
		background-color: #ff9900;
		border-color: #ff9900;
	}
	
	.user-query .el-button:focus,
	.user-query .el-button:hover {
	    border-color: #ff9900;
	    opacity: 0.5;
	}
	.user-query .el-button.resetform:focus,
	.user-query .el-button.resetform:hover {
		color: #ff9900;
	}
	.user-query .el-table {
	    background-color: #fff;
	    border-left: 1px solid #eeeeee;
	    color: #666666;
	}
	.user-query .el-table__footer-wrapper thead div, 
	.user-query .el-table__header-wrapper thead div {
	    background-color: #f4f4f4;
	    color: #666666;
	    /*box-shadow: inset 0 1px 0 0 #EEEEEE;*/
	}
	.user-query .el-table td,
	.user-query .el-table th {
		text-align: center;
	}
	.user-query .el-table--enable-row-hover .el-table__body tr:hover>td {
	    background-color: #f8f8f8;
	    background-clip: padding-box;
	}
	.user-query .el-table--striped .el-table__body tr.el-table__row--striped td {
	    background: #F8F8F8;
	    background-clip: padding-box;
	}
	.user-query .el-table th {
		white-space: nowrap;
		overflow: hidden;
		background-color: #f4f4f4;
		text-align: center;
		box-shadow: inset 0 1px 0 0 #EEEEEE;
	}
	
	.user-query .el-table--border td,
	.user-query .el-table--border th {
		border-right: 1px solid #EEEEEE;
	}
	.user-query .el-table td,
	.user-query .el-table th.is-leaf {
		border-bottom: 1px solid #eeeeee;
	}
	.user-query .el-table::after, 
	.user-query .el-table::before {
	    content: '';
	    position: absolute;
     	background-color: transparent; 
	}
	.el-pagination {
		text-align: right;
		margin-top: 40px;
	    margin-right: 40px;
        color: #282828;
	}
	.el-pager li.active {
	    border-color: #ff9900;
	    background-color: #ff9900;
	    color: #fff;
	    cursor: default;
	}
	.el-pager li {
	    padding: 0 4px;
	    border-right: 0;
	    background: #fff;
	    font-size: 12px;
	    letter-spacing: -0.39px;
	    min-width: 24px;
	    height: 24px;
	    line-height: 24px;
	    text-align: center;
	}
	.el-pager li:last-child {
	    border-right: 1px solid #EEEEEE;
	}
	.el-pagination button, 
	.el-pagination span {
	    display: inline-block;
	    font-size: 12px;
	    letter-spacing: -0.39px;
	    min-width: 24px;
	    height: 24px;
	    color: #282828;
	    line-height: 24px;
	    vertical-align: top;
	    box-sizing: border-box;
	}
	.el-pager li:hover {
	    color: #FF9900!important;
	}
	.el-pagination button:hover {
    color: #ff9900;
}
	.el-pagination__editor {
	    border: 1px solid #eeeeee;
	    border-radius: 2px;
	    padding: 2px 2px;
	    width: 24px;
	}
	.el-pagination__editor:focus {
	    outline: 0;
	    border-color: #ff9900;
	}
	.el-pagination .btn-next, 
	.el-pagination .btn-prev {
	    border: 1px solid #EEEEEE;
	    color: #282828;
	}
	.el-autocomplete-suggestion__wrap, 
	.el-pager li {
	    border: 1px solid #eeeeee;
	}
	.el-pager li.btn-quicknext, 
	.el-pager li.btn-quickprev {
	    line-height: 28px;
	    color: #282828;
	}
</style>