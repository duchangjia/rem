<template>
	<div class="fun">
		<current yiji="系统管理" erji="功能管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">功能管理</span>
			</div>
			<div class="content-inner">
				<el-form :model="formData" ref="formData" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="系统编号" prop="sysNo">
								<el-select v-model="formData.sysNo" class="bg-white">
									<el-option v-for="item in menuQueryConditions" :label="item.sysNo" :value="item.sysNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="功能编号" prop="bsnNo">
								<el-input type="text" v-model="formData.bsnNo" placeholder="请输入功能编号"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="功能名称" prop="methodName">
								<el-input type="text" v-model="formData.methodName" placeholder="请输入功能名称"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="状态" prop="status">
								<el-select v-model="formData.status" class="bg-white">
									<el-option label="停用" value="0"></el-option>
									<el-option label="正常" value="1"></el-option>
									<el-option label="锁定" value="2"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</div>
					<div class="button-wrap">
						<el-button class="resetform" @click="resetForm()">重置</el-button>
						<el-button type="primary" @click="queryForm()">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="userList" border stripe style="width: 100%">
						<el-table-column prop="sysNo" label="系统编号"></el-table-column>
						<el-table-column prop="bsnNo" label="功能编号"></el-table-column>
						<el-table-column prop="methodName" label="功能名称"></el-table-column>
						<el-table-column prop="interfaceName" label="接口方法"></el-table-column>
						<el-table-column prop="bsnUrl" label="服务URL"></el-table-column>
						<el-table-column prop="status" label="状态" :formatter="statusFormatter"></el-table-column>
						<el-table-column label="操作">
							<template scope="scope">
		                        <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
		                    </template>
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import current from '../../common/current_position.vue'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
				pageNum: 1,
				pageSize: 10,
				totalRows: 0,
				queryFormFlag: false,
				formData: {
					methodName: '',
					bsnNo: '',
					status: '',
					sysNo: ''
				},
				userList: [{
					sysNo: '0000111',
					bsnNo: '111111',
					methodName: '广州分公司',
					interfaceName: '111',
					bsnUrl: '财务部',
					status: '1351011111',
					status: '正常'
				}],
				funcQueryConditions: [],
				menuQueryConditions: [
					{sysNo: "1"},
					{sysNo: "2"}
				]
				
			};
		},
		components: {
			current
		},
		created() {
			const self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize
			}
			//查询功能列表
			self.queryFormFlag = false;
			self.queryFunList(params);
			//查询功能编号
			self.queryConditions();
		},
		methods: {
			statusFormatter(row, column) {
		      	return row.status == 1 ? "正常" : row.status == 0 ? "停用" : "锁定";
		    },
			queryForm() {
				const self = this;
				self.userList = [];
				let params = {
					"pageNum": self.pageNum,
					"pageSize": self.pageSize,
				 	sysNo: self.formData.sysNo,
					bsnNo: self.formData.bsnNo,
					methodName: self.formData.methodName,
					status: self.formData.status
				}
				//查询功能列表
				self.queryFormFlag = true;
				self.queryFunList(params);
				
			},
			resetForm() {
				this.formData.methodName = '';
				this.formData.bsnNo = '';
				this.formData.status = '';
				this.formData.sysNo = '';
			},
	     	handleEdit(index, row) {
	     		console.log(row.sysNo);
	            this.$router.push({
	            	name: 'edit_fun',
	            	params: {
						bsnNo: row.bsnNo
	            	}
	            });
	       },
			handleCurrentChange(val) {
		        const self = this;
				let params = {};
				if(!self.queryFormFlag) {
					params = {
						"pageNum": val,
						"pageSize": self.pageSize
					}
				} else {
					params = {
						"pageNum": val,
						"pageSize": self.pageSize,
						sysNo: self.formData.sysNo,
						bsnNo: self.formData.bsnNo,
						methodName: self.formData.methodName,
						status: self.formData.status
					}
				}
				//分页查询功能列表
				self.queryFunList(params);
		        
	     	},
	     	queryFunList(params) {
				const self = this;
				self.$axios.get(baseURL+'/function/queryFuncList', {params: params})
				.then(function(res) {
					console.log('FuncList',res);
					self.userList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryConditions() {
				const self = this;
				self.$axios.get(baseURL+'/function/getQueryConditions')
				.then(function(res) {
					console.log('Conditions',res);
					self.menuQueryConditions = res.data.data.menuQueryConditions;
				}).catch(function(err) {
					console.log(err);
				})
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
		padding: 14px 0px;
		font-size: 16px;
		height: 50px;
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
		padding: 30px 0px;
	}
	.fun .el-form-item__label {
		color: #999999;
		font-weight: normal;
		padding: 8px 10px 8px 0;
		margin: 0;
	}
	.fun .el-form-item {
		margin-bottom: 30px;
	}
	.fun .el-input,
	.fun .el-input__inner {
		width: 164px;
		height: 30px;
		display: inline-block;
		border-radius: 4px;
	}
	
	.fun .el-form-item__content {
		line-height: 30px;
		position: relative;
		font-size: 14px;
	    float: left;
	    margin-left: 0px!important;
	}
	.fun .button-wrap {
		margin: 0px auto 20px;
		width: 260px;
		clear: both;
		font-size: 0px;
	}
	.fun .el-input__inner {
		border: 1px solid #EEEEEE;
		color: #333333;
	}
	.fun .el-input__inner:hover {
	    border-color: #FF9900;
	}
	.fun .el-button {
		border: 1px solid #FF9900;
		color: #FF9900;
		padding: 7px 45px;
		height: 30px;
		border-radius: 0px;
	}
	.fun .el-button--primary {
		color: #fff;
		background-color: #FF9900;
		border-color: #FF9900;
	}
	.el-button+.el-button {
	    margin-left: 20px;
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
	.fun .el-table .cell, 
	.fun .el-table th>div {
	    padding-left: 10px;
	    padding-right: 10px;
	}
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