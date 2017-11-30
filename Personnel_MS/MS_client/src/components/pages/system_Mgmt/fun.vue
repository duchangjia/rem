<template>
	<div class="fun">
		<current yiji="系统管理" erji="功能管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">功能管理</span>
			</div>
			<div class="queryContent_inner">
				<el-form :model="formData" ref="formData" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="系统编号" prop="sysNo">
							<el-select v-model="formData.sysNo" class="bg-white">
								<el-option v-for="item in menuQueryConditions" :label="item.paraValue" :value="item.paraValue"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="功能编号" prop="bsnNo">
							<el-input type="text" v-model="formData.bsnNo" placeholder="请输入功能编号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="功能名称" prop="methodName">
							<el-input type="text" v-model="formData.methodName" placeholder="请输入功能名称"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="状态" prop="status">
							<el-select v-model="formData.status" class="bg-white">
								<el-option label="停用" value="0"></el-option>
								<el-option label="正常" value="1"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm()">重置</el-button>
						<el-button class="btn-primary" @click="queryForm()">查询</el-button>
					</div>
				</el-form>
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
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
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
					sysNo: '',
					bsnNo: '',
					methodName: '',
					interfaceName: '',
					bsnUrl: '',
					status: '',
					status: ''
				}],
				menuQueryConditions: []
				
			};
		},
		components: {
			current
		},
		created() {
			
			//查询功能列表
			this.queryFunList();
			//查询系统编号列表
			this.queryConditions();
		},
		methods: {
			statusFormatter(row, column) {
		      	return row.status == 1 ? "正常" : row.status == 0 ? "停用" : "锁定";
		    },
			queryForm() {
				//查询功能列表
				this.queryFunList();
				
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
		       	this.pageNum = val;
				//分页查询功能列表
				self.queryFunList();
		        
	     	},
	     	queryFunList() {
				const self = this;
				let params = {
					"pageNum": self.pageNum,
					"pageSize": self.pageSize,
				 	sysNo: self.formData.sysNo,
					bsnNo: self.formData.bsnNo,
					methodName: self.formData.methodName,
					status: self.formData.status
				}
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
				self.$axios.get(baseURL+'function/selectSysPara')
				.then(function(res) {
					console.log('Conditions',res);
					self.menuQueryConditions = res.data;
				}).catch(function(err) {
					console.log(err);
				})
			}
	}

	}
</script>

<style scoped>
	.fun {
		padding-left: 20px;
		width: 100%;
	}
	
	.fun .icon-edit {
	    display: inline-block;
	    width: 24px;
	    height: 24px;
	    cursor: pointer;
	    background: url('../../../../static/img/common/edit.png') center no-repeat;
	}
	
</style>