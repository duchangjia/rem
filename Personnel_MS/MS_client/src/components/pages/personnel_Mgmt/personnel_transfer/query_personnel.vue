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
					<el-table-column align="center" prop="custPost" label="岗位">
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
				<el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows">
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
				handleTransferFlag: [],
				handDimissionFlag: [],
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
		},
		methods: {
			custSexFormatter(row, column) {
		      return row.sex == "01" ? "男" : row.sex == "02" ? "女": row.sex == "99" ? "其他" : "";
		    },
		    custClassFormatter(row, column) {
		      return row.custClass == "B10" ? "B10-初级软件工程师" : row.custClass == "B11" ? "B11-中级软件工程师": row.custClass == "B12" ? "B12-高级软件工程师" : "";
		    },
		    custStatusFormatter(row, column) {
		      return row.custStatus == "01"
		        ? "试用"
		        : row.custStatus == "02"
		          ? "在职"
		          : row.custStatus == "03"
		            ? "退休"
		            : row.custStatus == "04"
		              ? "离职"
		              : row.custStatus == "05" ? "停薪留职" : "";
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
						if(ele.custStatus == '01' || ele.custStatus == '02') {
							self.handleTransferFlag[index] = false;
							self.handDimissionFlag[index] = false;
						} else {
							self.handleTransferFlag[index] = true;
							self.handDimissionFlag[index] = true;
						}
					})
				}).catch(function(err) {
					console.log(err);
				})
			}
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
</style>