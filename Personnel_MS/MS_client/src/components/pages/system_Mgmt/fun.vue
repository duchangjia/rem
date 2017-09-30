<template>
	<div class="fun">
		<current yiji="系统管理" erji="功能管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">功能管理</span>
			</div>
			<div class="content-inner">
				<el-form :model="formData" ref="formData" label-width="68px" class="demo-ruleForm">
					<div class="input-wrap">
						<el-form-item label="交易名称" prop="dealName">
							<el-input type="text" v-model="formData.dealName"></el-input>
						</el-form-item>
						<el-form-item label="交易类型" prop="dealType">
							<el-select v-model="formData.dealType" class="bg-white">
								<el-option label="交易类型" value="00" checked></el-option>
								<el-option label="交易类型" value="01"></el-option>
								<el-option label="交易类型" value="02"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="状态" prop="status">
							<el-select v-model="formData.status" class="bg-white">
								<el-option label="正常" value="00" checked></el-option>
								<el-option label="已锁定" value="01"></el-option>
								<el-option label="已注销" value="02"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="所属系统" prop="system">
							<el-select v-model="formData.system" class="bg-white">
								<el-option label="所属系统" value="00" checked></el-option>
								<el-option label="所属系统" value="01"></el-option>
								<el-option label="所属系统" value="02"></el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="button-wrap">
						<el-form-item>
							<el-button class="resetform" @click="resetForm('formData')">重置</el-button>
							<el-button type="primary" @click="query('formData')">查询</el-button>
						</el-form-item>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="userList" border stripe style="width: 100%" @cell-click="handleEdit">
						<el-table-column prop="number" label="交易代码"></el-table-column>
						<el-table-column prop="name" label="交易名称"></el-table-column>
						<el-table-column prop="company" label="接口名称"></el-table-column>
						<el-table-column prop="department" label="交易类型"></el-table-column>
						<el-table-column prop="role" label="所属系统"></el-table-column>
						<el-table-column prop="phone" label="状态"></el-table-column>
						<el-table-column label="操作">
							<template scope="scope">
		                        <i class="icon-edit"></i>
		                    </template>
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

<script>
	import current from '../../common/current_position.vue'
	export default {
		data() {
			return {
				currentPage: 5,
				formData: {
					dealName: '',
					dealType: '',
					status: '',
					system: ''
				},
				userList: [{
					number: '0000111',
					name: '111111',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}, {
					number: '0000112',
					name: '222222',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}, {
					number: '0000113',
					name: '333333',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '已锁定'
				}, {
					number: '0000114',
					name: '444444',
					company: '广州分公司',
					department: '111',
					role: '财务部',
					phone: '1351011111',
					status: '正常'
				}],

				
			};
		},
		components: {
			current
		},
		methods: {
			query(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log(this.formData.dealName);
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
				this.$router.push('/edit_fun');
			},
	     	handleEdit(row, column, cell, event) {
	     		console.log(row.number);
	            this.$router.push('/edit_fun');
	        },
			handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
           	},
			handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
	     	}
	}

	}
</script>

<style>
	.fun {
		padding-left: 20px;
		width: 100%;
	}
	.fun .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	.fun .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	.fun .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	.fun .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	.fun .content-inner {
		padding: 40px 0px;
	}
	.fun .input-wrap {
		/*display: flex;*/
	}
	.fun .el-form-item__label {
		text-align: left;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #999999;
		line-height: 1;
		padding: 11px 12px 11px 0;
		box-sizing: border-box;
	}
	.fun .input-wrap .el-form-item {
		margin-right: 80px;
		float: left;
	}
	.fun .el-form-item {
		margin-bottom: 40px;
	}
	.fun .el-input,
	.fun .el-input__inner {
		width: 200px;
		display: inline-block;
	}
	
	.fun .el-form-item__content {
		line-height: 36px;
		position: relative;
		font-size: 14px;
	}
	.fun .button-wrap {
		margin: 0px auto;
		width: 264px;
		clear: both;
	}
	.fun .button-wrap .el-form-item__content {
		margin-left: 0!important;
	}
	.fun .el-input__inner {
		border-radius: 4px;
		border: 1px solid #EEEEEE;
		color: #333333;
		padding: 19px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	.fun .el-input__inner:hover {
	    border-color: #FF9900;
	}
	.fun .el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #FF9900;
		color: #FF9900;
		margin: 0;
		padding: 12px 45px;
		border-radius: 0px;
	}
	.fun .el-button.resetform {
		margin-right: 20px;
	}
	.fun .el-button--primary {
		color: #fff;
		background-color: #FF9900;
		border-color: #FF9900;
	}
	.fun .el-button:focus,
	.fun .el-button:hover {
	    border-color: #FF9900;
	    opacity: 0.5;
	}
	.fun .el-button:focus {
		opacity: 1;
	}
	.fun .el-button.resetform:focus,
	.fun .el-button.resetform:hover {
		color: #FF9900;
	}
	.fun .el-table {
	    background-color: #fff;
	    border-left: 1px solid #EEEEEE;
	    color: #666666;
	}
	.fun .el-table__footer-wrapper thead div, 
	.fun .el-table__header-wrapper thead div {
	    background-color: #f4f4f4;
	    color: #666666;
	    /*box-shadow: inset 0 1px 0 0 #EEEEEE;*/
	}
	.fun .el-table td,
	.fun .el-table th {
		text-align: center;
	}
	.fun .el-table--enable-row-hover .el-table__body tr:hover>td {
	    background-color: #f8f8f8;
	    background-clip: padding-box;
	}
	.fun .el-table--striped .el-table__body tr.el-table__row--striped td {
	    background: #F8F8F8;
	    background-clip: padding-box;
	}
	.fun .el-table th {
		white-space: nowrap;
		overflow: hidden;
		background-color: #f4f4f4;
		text-align: center;
		box-shadow: inset 0 1px 0 0 #EEEEEE;
	}
	.fun .el-table--border td,
	.fun .el-table--border th {
		border-right: 1px solid #EEEEEE;
	}
	.fun .el-table td,
	.fun .el-table th.is-leaf {
		border-bottom: 1px solid #EEEEEE;
	}
	/*.fun .el-table td:first-child:hover {
		color: #FF9900;
		cursor: pointer;
	}*/
	.fun .el-table::after, 
	.fun .el-table::before {
	    content: '';
	    position: absolute;
     	background-color: transparent; 
	}
	.fun .icon-edit {
	    display: inline-block;
	    width: 24px;
	    height: 24px;
	    background: url('../../../../static/img/common/edit.png') center no-repeat;
	}
	.fun .icon-edit:hover {
	    cursor: pointer;
	}
	.el-pagination {
		text-align: right;
		margin-top: 40px;
	    margin-right: 40px;
        color: #282828;
	}
	.el-pager li.active {
	    border-color: #FF9900;
	    background-color: #FF9900;
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
	.el-pager li.active:hover {
		color: #FFFFFF!important;
	}
	.el-pagination button:hover {
    color: #FF9900;
}
	.el-pagination__editor {
	    border: 1px solid #EEEEEE;
	    border-radius: 2px;
	    padding: 2px 2px;
	    width: 24px;
	}
	.el-pagination__editor:focus {
	    outline: 0;
	    border-color: #FF9900;
	}
	.el-pagination .btn-next, 
	.el-pagination .btn-prev {
	    border: 1px solid #EEEEEE;
	    color: #282828;
	}
	.el-autocomplete-suggestion__wrap, 
	.el-pager li {
	    border: 1px solid #EEEEEE;
	}
	.el-pager li.btn-quicknext, 
	.el-pager li.btn-quickprev {
	    line-height: 28px;
	    color: #282828;
	}
</style>