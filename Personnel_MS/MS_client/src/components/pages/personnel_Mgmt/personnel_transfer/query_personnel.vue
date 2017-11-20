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
					<!--<div class="input-wrap">-->
						<el-col :span="6">
							<el-form-item label="公司" prop="company">
								<el-select v-model="comp" value-key="compOrgNo" @change="changeValue">
									<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="部门" prop="department">
								<el-select v-model="depart" value-key="departOrgNo" @change="changeValue">
									<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="工号" prop="userNo">
								<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="姓名" prop="userName">
								<el-input type="text" v-model="ruleForm2.userName" placeholder="请输入姓名"></el-input>
							</el-form-item>
						</el-col>
					<!--</div>-->
					<div class="queryButton_wrapper">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table stripe :data="pactListInfo" border>
					<el-table-column align="center" label="工号">
						<template scope="scope">
							<span @click="handleDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" prop="userName" label="姓名">
					</el-table-column>
					<el-table-column align="center" prop="compName" label="公司名称">
					</el-table-column>
					<el-table-column align="center" prop="departName" label="部门名称">
					</el-table-column>
					<el-table-column align="center" prop="xingbie" label="性别">
					</el-table-column>
					<el-table-column align="center" prop="custPost" label="岗位">
					</el-table-column>
					<el-table-column align="center" prop="perendmFixed" label="职级">
					</el-table-column>
					<el-table-column align="center" prop="mobile" label="手机">
					</el-table-column>
					<el-table-column align="center" prop="status" label="状态">
					</el-table-column>
					<el-table-column align="center" label="操作" width="150">
						<template scope="scope">
							<el-button type="text" size="small" @click="handleTransfer(scope.$index, scope.row)">调动</el-button>
							<el-button type="text" size="small" @click="handDimission(scope.$index, scope.row)">离职</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
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
				pageSize: 5,
				totalRows: 1,
				ruleForm2: {
					compName: "",
					departName: "",
					userNo: "",
					userName: ""
				},
				pactListInfo: [
					{
						userNo: "P0000001",
						userName: "小李",
						compName: "广州分公司",
						departName: "xxx",
						xingbie: "男",
						custPost: "java",
						perendmFixed: "B9",
						mobile: "1313131333",
						status: "在职"
					}
				],
				comp: {
					compName: '',
					compOrgNo: ''
				},
				depart: {
					departName: '',
					departOrgNo: ''
				},
				//部门列表
				departList: [
					{departName: "上海魔方分公司",departOrgNo: '01'},
					{departName: "魔方分公司深圳分公司",departOrgNo: 'p1'},
					{departName: "深圳前海橙色魔方信息技术有限公司",departOrgNo: '0'}
				],
				//公司列表
				compList: [
					{compName: "上海魔方分公司",compOrgNo: '01'},
					{compName: "魔方分公司深圳分公司",compOrgNo: 'p1'},
					{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '0'}
				],
				rules: {

				}
			};
		},
		components: {
			current
		},
		created() {
			const self = this;
			let pageNum = self.pageNum;
			let pageSize = self.pageSize;
			let params = {
				pageNum: pageNum,
				pageSize: pageSize
			}
			//查询员工列表
			self.queryList(pageNum,pageSize,params);
		},
		methods: {
			//重置
			resetForm() {
				this.comp = {};
				this.depart = {};
				this.ruleForm2.userNo = '';
				this.ruleForm2.userName = '';
			},
			//查询
			queryForm(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if (valid) {
						console.log('submit')
						
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//员工详情
			handleDetail(index, row) {
				this.$router.push({
					name: "personnel_info",
					params: {
						userNo: row.userNo
					}
				});
			},
			//分页
			handleCurrentChange(val) {
				const self = this;
				let pageNum = val;
				let pageSize = self.pageSize;
				let params = {
					pageNum: pageNum,
					pageSize: pageSize
				}
				//分页查询员工列表
				self.queryList(pageNum,pageSize,params);
				
			},
			//员工调动
			handleTransfer(index, row) {
				const self = this;
				this.$router.push({
					name: "detail_transfer",
					params: {
						userNo: row.userNo
					}
				});
				
			},
			//员工离职
			handDimission(index, row) {
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
//				self.userDetail.compName = self.comp.compName;
//				self.userDetail.compOrgNo = self.comp.compOrgNo;
//				self.userDetail.departName = self.depart.departName;
//				self.userDetail.departOrgNo = self.depart.departOrgNo;
//				self.userDetail.roleName = self.role.roleName;
//				self.userDetail.roleNo = self.role.roleNo;
	       },
	       queryList(pageNum,pageSize,params) {
				let self = this;
				self.$axios.get(baseURL+'', {params: params})
				.then(function(res) {
					console.log('UserList',res);
					self.transferDataList = res.data.data.models;
					self.pageNum = pageNum;
					self.totalRows = Number(res.data.data.total);
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
	
</style>