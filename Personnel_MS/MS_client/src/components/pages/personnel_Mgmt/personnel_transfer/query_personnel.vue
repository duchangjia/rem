<template>
	<div class="query_transfer">
		<current yiji="人事事务" erji="人事调动">
		</current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">人事调动</span>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
						<!--<el-col :sm="12" :md="6">
							<el-form-item label="公司" prop="company">
								<el-select v-model="comp" value-key="compOrgNo" @change="changeValue">
									<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.organName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="部门" prop="department">
								<el-select v-model="depart" value-key="departOrgNo" @change="changeValue">
									<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.derpName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>-->
						<el-col :sm="12" :md="6">
							<el-form-item label="工号" prop="userNo">
								<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="姓名" prop="custName">
								<el-input type="text" v-model="ruleForm2.custName" placeholder="请输入姓名"></el-input>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<div class="queryButton_wrapper">
								<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
								<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
							</div>
						</el-col>
							
				</el-form>
				<el-table :data="pactListInfo" border stripe style="width: 100%">
					<el-table-column align="center" label="工号">
						<template scope="scope">
							<span class="link" @click="handleDetail(scope.$index, scope.row)">{{ scope.row.userNo }}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" prop="custName" label="姓名">
					</el-table-column>
					<el-table-column align="center" prop="organName" label="公司名称">
					</el-table-column>
					<el-table-column align="center" prop="derpName" label="部门名称">
					</el-table-column>
					<el-table-column align="center" prop="sex" label="性别" :formatter="custSexFormatter">
					</el-table-column>
					<el-table-column align="center" prop="custPost" label="岗位" :formatter="custPostFormatter">
					</el-table-column>
					<el-table-column align="center" prop="custClass" label="职级" :formatter="custClassFormatter">
					</el-table-column>
					<el-table-column align="center" prop="mobileNo" label="手机">
					</el-table-column>
					<el-table-column align="center" prop="custStatus" label="状态" :formatter="custStatusFormatter">
					</el-table-column>
					<el-table-column align="center" label="操作" width="130">
						<template scope="scope">
							<el-button type="text" size="small" :disabled=handleTransferFlag[scope.$index] @click="handleTransfer(scope.$index, scope.row)">调动</el-button>
							<el-button type="text" size="small" :disabled=handDimissionFlag[scope.$index] @click="handDimission(scope.$index, scope.row)">离职</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>

			
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
				pageNum: 1,
				pageSize: 10,
				totalRows: 1,
				handleTransferFlag: [],//调动禁用标志
				handDimissionFlag: [],//离职禁用标志
				ruleForm2: {
					organName: "",
					derpName: "",
					userNo: "",
					custName: ""
				},
				pactListInfo: [],
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				custStatusList: [],
				rules: {

				}
			};
		},
		components: {
			current
		},
		created() {
			this.ruleForm2.userNo = "";
    		this.ruleForm2.custName = "";
			//查询员工列表
			this.queryList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询员工状态列表
			this.queryCustStatusList();
		},
		methods: {
			custSexFormatter(row, column) {
		      return row.sex == "01" ? "男" : row.sex == "02" ? "女": row.sex == "99" ? "其他" : "";
			},
			custPostFormatter(row, column) {
				let custPost = ""
				this.custPostList.forEach(function(item) {
				if(row.custPost == item.paraValue) {
				custPost = item.paraShowMsg;
				}
				}, this);
				return custPost;
			},
		    custClassFormatter(row, column) {
		      	let custClass = ""
				this.custClassList.forEach(function(item) {
					if(row.custClass == item.paraValue) {
						custClass = item.paraShowMsg;
					}
				}, this);
				return custClass;
		    },
		    custStatusFormatter(row, column) {
				let custStatus = ""
				this.custStatusList.forEach(function(item) {
					if(row.custStatus == item.paraValue) {
						custStatus = item.paraShowMsg;
					}
				}, this);
				return custStatus;
		    },
			//重置
			resetForm() {
				this.ruleForm2.userNo = '';
				this.ruleForm2.custName = '';
			},
			//查询
			queryForm(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if (valid) {
						self.queryList();
						
					} else {
						return false;
					}
				});
			},
			//员工详情
			handleDetail(index, row) {
				let userNo = row.userNo;
				this.$router.push({
					name: "archives_detail",
					query: { userNo }
				});
			},
			//分页
			handleCurrentChange(val) {
				this.pageNum = val;
				//分页查询员工列表
				this.queryList();
				
			},
			//员工调动
			handleTransfer(index, row) {
				const self = this;
				sessionStorage.setItem('transfer_userNo', row.userNo);
				sessionStorage.setItem('transfer_custStatus',row.custStatus);
				this.$router.push({
					name: "detail_transfer",
					params: {
						userNo: row.userNo
					}
				});
				
			},
			//员工离职
			handDimission(index, row) {
				sessionStorage.setItem('dimission_userNo', row.userNo);
				sessionStorage.setItem('dimission_custStatus',row.custStatus);
				this.$router.push({
					name: "detail_dimission",
					params: {
						userNo: row.userNo
					}
				})
				
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	       },
	       queryList() {
				let self = this;
				let params = {
		        	pageNum: self.pageNum,
		        	pageSize: self.pageSize,
		        	userNo: self.ruleForm2.userNo,
		        	custName: self.ruleForm2.custName
		      	};
				self.$axios.get(baseURL+'/CustInfo/queryCustInfList', {params: params})
				.then(function(res) {
					console.log('UserList',res);
					self.pactListInfo = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
					
					self.pactListInfo.forEach(function(ele,index) {
						//离职或退休时,员工不可调动
						if(ele.custStatus == '03' || ele.custStatus == '04') {
							self.handleTransferFlag[index] = true;
							// self.handDimissionFlag[index] = true;
						} else {
							self.handleTransferFlag[index] = false;
							// self.handDimissionFlag[index] = false;
						}
					})
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res) => {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustStatusList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_STATUS')
				.then((res) => {
					console.log('CustStatus',res);
					if(res.data.code === "S00000") {
						self.custStatusList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
		}
	};
</script>

<style>
.query_transfer {
	padding: 0 0 20px 20px;
}
.query_transfer .el-button + .el-button {
	margin-left: 20px;
}
.queryContent_wrapper .queryContent_inner .el-table .el-button--text.is-disabled {
    color: #bfcbd9;
}
</style>