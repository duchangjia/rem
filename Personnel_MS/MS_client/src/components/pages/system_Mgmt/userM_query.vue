<template>
	<div class="user-query">
		<current yiji="系统管理" erji="用户管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">用户管理</span>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="公司" prop="compName">
								<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" @change="changeComp">
									<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="部门" prop="departName">
								<el-select v-model="ruleForm2.derpNo" value-key="derpNo" @change="changeValue">
									<el-option v-for="item in departList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="用户" prop="user">
								<el-input type="text" v-model="ruleForm2.user" placeholder="工号/姓名/手机/邮箱" @change="keyup"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="状态" prop="status">
								<el-select v-model="ruleForm2.status" class="bg-white">
									<el-option label="正常" value="1"></el-option>
									<el-option label="停用" value="0"></el-option>
									<el-option label="锁定" value="2"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</div>
					<div class="button-wrap">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="operatorList" border stripe style="width: 100%">
						<el-table-column prop="userNo" label="工号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.userNo }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="compName" label="所属公司"></el-table-column>
						<el-table-column prop="departName" label="部门"></el-table-column>
						<el-table-column prop="userName" label="姓名"></el-table-column>
						<el-table-column prop="roleName" label="角色">
							<template scope="scope">
						        <span class="roleSpan" v-for="item in scope.row.roles">{{ item.roleName }}</span>
					      		<!--<el-tag size="medium" v-for="item in scope.row.roles">{{ item.roleName }}</el-tag>-->
							</template>
						</el-table-column>
						<el-table-column prop="mobile" label="手机"></el-table-column>
						<el-table-column prop="status" label="状态" :formatter="statusFormatter"></el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				status: '',
				user: ''
			},
			operatorList: [
				{
					userNo: "",
					userName: "",
					compName: "",
					departName: "",
					roleNo: "",
					mobile: "",
					status: "",
					roles: [
						{roleName: "", roleNo: ""},
						{roleName: "", roleNo: ""},
					]
				}
			],
			comp: {
				compName: '',
				compOrgNo: ''
			},
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			rules: {
				company: [],
				department: [],
				user: []
			}
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
		//查询用户列表
		self.queryFormFlag = false;
		self.queryUserList(params);
		//公司列表查询
		this.queryCompList();
	},
	methods: {
		statusFormatter(row, column) {
	      return row.status == 1 ? "正常" : row.status == 0 ? "停用" : "锁定";
	    },
	    //详情页
	    handleInfo(index, row) {
			sessionStorage.setItem('user', row.userNo);
            this.$router.push({
            	name: 'edit_userM',
            	params: {
            		user: row.userNo
            	}
            });
		},
		changeComp(val) {
			console.log('comp',val);
			const self = this;
			let params = {
				organNo: val
			}
			//部门列表查询
			self.queryDerpList(params);
		},
		keyup(val) {
			console.log(val)
		},
		//查询
		queryForm(formName) {
			const self = this;
			let user = self.ruleForm2.user;
			self.operatorList = [];
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				"compOrganNo": self.ruleForm2.organNo,
				"deptOrganNo": self.ruleForm2.derpNo,
				"status": self.ruleForm2.status,
				"userFeatureInfo": self.ruleForm2.user
			}
			//查询用户列表
			self.queryFormFlag = true;
			self.queryUserList(params);
		},
		changeValue(value) {
	 		const self = this;
	 		console.log(value)
//          console.log('value',value);
//				self.userDetail.compName = self.comp.compName;
//				self.userDetail.compOrgNo = self.comp.compOrgNo;
//				self.userDetail.departName = self.depart.departName;
//				self.userDetail.departOrgNo = self.depart.departOrgNo;
//				self.userDetail.roleName = self.role.roleName;
//				self.userDetail.roleNo = self.role.roleNo;
       },
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.derpNo = '';
			this.ruleForm2.user = '';
			this.ruleForm2.status = '';
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
					"compOrganNo": self.ruleForm2.organNo,
					"deptOrganNo": self.ruleForm2.derpNo,
					"status": self.ruleForm2.status,
					"userFeatureInfo": self.ruleForm2.user
				}
			}
			//分页查询用户列表
			self.queryUserList(params);
		},
		queryUserList(params) {
			let self = this;
			self.$axios.get(baseURL+'/user/queryUserList', {params: params})
			.then(function(res) {
				console.log('UserList',res);
				self.operatorList = res.data.data.models;
				self.pageNum = params.pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then(function(res) {
				console.log('CompList',res);
				self.compList = res.data.data;
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryDerpList(params) {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
			.then(function(res) {
				console.log('DerpList',res);
				if(res.data.code === "S00000") {
					self.departList = res.data.data;
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		}
	}

}
</script>

<style>
	
.user-query {
	padding-left: 20px;
    padding-bottom: 20px;
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
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
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
	padding: 30px 0px;
}

.user-query .el-form-item__label {
	color: #999999;
	font-weight: normal;
	padding: 8px 10px 8px 0;
	margin: 0;
}

.user-query .el-form-item {
	margin-bottom: 30px;
}

.user-query .el-input,
.user-query .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
	border-radius: 4px;
}

.user-query .el-form-item__content {
	line-height: 30px;
	position: relative;
	font-size: 14px;
}

.user-query .button-wrap {
	margin: 0px auto 30px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.user-query .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}

.user-query .el-input__inner:hover {
	border-color: #FF9900;
}

.user-query .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	padding: 7px 45px;
	height: 30px;
}

/*.user-query .el-button.resetform {
	margin-right: 20px;
}*/

.user-query .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.user-query .el-button+.el-button {
    margin-left: 20px;
}
.user-query .el-table td,
.user-query .el-table th {
	text-align: center;
}
.user-query .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.user-query .roleSpan {
	display: inline-block;
	padding: 5px;
}

.user-query .el-table th {
	text-align: center;
}
.user-query .el-table .cell, 
.user-query .el-table th>div {
    padding-left: 10px;
    padding-right: 10px;
}
.user-query .icon_edit {
	width: 16px;
	height: 16px;
	display: inline-block;
	background: url(../../../../static/img/common/edit.png) no-repeat;
	cursor: pointer;
	margin-top: 1px;
}
.user-query .icon_delete {
	width: 16px;
	height: 16px;
	display: inline-block;
	background: url(../../../../static/img/common/delete.png) no-repeat;
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
	color: #FF9900;
}
.el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.el-pagination button:hover {
	color: #FF9900;
}
.el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
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