<template>
	<div class="userM_query">
		<current yiji="系统管理" erji="用户管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">用户管理</span>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo" @change="changeValue">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="用户" prop="user">
							<el-input type="text" v-model="ruleForm2.user" placeholder="工号/姓名/手机/邮箱" @change="keyup"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="状态" prop="status">
							<el-select v-model="ruleForm2.status" class="bg-white">
								<el-option label="正常" value="1"></el-option>
								<el-option label="停用" value="0"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="operatorList" border stripe fit style="width: 100%">
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
						</template>
					</el-table-column>
					<el-table-column prop="mobile" label="手机"></el-table-column>
					<el-table-column prop="status" label="状态" :formatter="statusFormatter"></el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
const baseURL = 'iem_pmg'
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
			operatorList: [],
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
		this.ruleForm2.organNo = '';
		this.ruleForm2.derpNo = '';
		this.ruleForm2.status = '';
		this.ruleForm2.user = '';
		//查询用户列表
		this.queryUserList();
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
			//查询用户列表
			this.queryUserList();
		},
		changeValue(value) {
	 		const self = this;
	 		console.log(value)
       },
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.derpNo = '';
			this.ruleForm2.user = '';
			this.ruleForm2.status = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//分页查询用户列表
			this.queryUserList();
		},
		queryUserList() {
			let self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				"compOrganNo": self.ruleForm2.organNo,
				"deptOrganNo": self.ruleForm2.derpNo,
				"status": self.ruleForm2.status,
				"userFeatureInfo": self.ruleForm2.user
			}
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

<style scoped>
.userM_query {	
	padding-left: 20px;
    padding-bottom: 20px;
    width: 100%;
}
.userM_query .el-button + .el-button {
    margin-left: 20px;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>