<template>
	<div class="leave_query">
		<current yiji="考勤管理" erji="请假管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">请假管理</span>
				<el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :sm="12" :md="6">
							<el-form-item label="公司">
								<el-select v-model="ruleForm2.organNo" @change="changeComp">
									<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="部门">
								<el-select v-model="ruleForm2.departOrgNo" value-key="departOrgNo">
									<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="时间" prop="startDate"">
								<el-date-picker
							      v-model="ruleForm2.startDate"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeStartTime">
							   	</el-date-picker> -
								<el-date-picker
							      v-model="ruleForm2.endDate"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeEndTime">
							   </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="工号" prop="userNo">
								<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
							</el-form-item>
						</el-col>
					</div>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm()">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="transferDataList" border stripe style="width: 100%">
						<el-table-column prop="applyNo" label="请假编号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="companyName" label="公司名称"></el-table-column>
						<el-table-column prop="deptName" label="部门名称"></el-table-column>
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="custName" label="姓名"></el-table-column>
						<el-table-column prop="leaveType" label="请假类型" :formatter="leaveTypeFormatter"></el-table-column>
						<el-table-column prop="leaveStartTime" label="请假开始时间" :formatter="leaveStartTimeFormatter"></el-table-column>
						<el-table-column prop="leaveEndTime" label="请假结束时间" :formatter="leaveEndTimeFormatter"></el-table-column>
						<el-table-column prop="createdBy" label="录入人"></el-table-column>
						<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
						<el-table-column label="操作" width="100">
							<template scope="scope">
								<i class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></i>
								<i class="icon_delete" @click="handleDelete(scope.$index, scope.row)"></i>
							</template>	
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		var checkStartDate = (rule, value, callback) => {
	        if (this.ruleForm2.endDate && value >= this.ruleForm2.endDate) {
	          	callback(new Error('开始时间不能大于结束时间'));
	        } else {
	          	callback();
	        }
      	};
		var checkEndDate = (rule, value, callback) => {
	        if (this.ruleForm2.startDate && value <= this.ruleForm2.startDate) {
	          	callback(new Error('开始时间不能大于结束时间'));
	        } else {
	          	callback();
	        }
      	};
		return {
			pickerOptions0: {
	          disabledDate(time) {
//	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
			pageNum: 1,
			pageSize: 10,
			totalRows: 2,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				departOrgNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			transferDataList: [
				{
					applyNo: "",
					companyName: "",
					deptName: "",
					userNo: "", 
					custName: "",
					leaveType: "",
					leaveStartTime: "",
					leaveEndTime: "",
					createdBy: "",
					createdDate: ""
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
				startDate: [
	            	{ validator: checkStartDate, trigger: 'change' }
          		],
          		endDate: [
	            	{ validator: checkEndDate, trigger: 'change' }
          		]
			}
		}
	},
	components: {
		current
	},
	created() {
		this.queryFormFlag = false;
		let params = {
			"pageNum": this.pageNum,
			"pageSize": this.pageSize
		}
		//请假列表查询
		this.queryLeaveList(params);
		//查询公司列表
		this.queryCompList();
	},
	methods: {
		leaveStartTimeFormatter(row, column) {
	      return row.leaveStartTime ? moment(row.leaveStartTime).format('YYYY-MM-DD') : null;
	   	},
		leaveEndTimeFormatter(row, column) {
	      return row.leaveEndTime ? moment(row.leaveEndTime).format('YYYY-MM-DD') : null;
	   	}, 
		createdDateFormatter(row, column) {
	      	return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endDate = val;
		},
		changeComp(val) {
			console.log(val);
			const self = this;
			let params = {
				organNo: val
			}
			//部门列表查询
			self.queryDerpList(params);
		},
	    handleAdd() {
	    	this.$router.push('/add_leave');
	    },
		handleEdit(index, row) {
			sessionStorage.setItem('applyNo',row.applyNo);
            this.$router.push({
            	name: "edit_leave",
            	params: {
            		applyNo: row.applyNo,
					userNo: row.userNo
            	}
            });
		},
		handleInfo(index, row) {
			sessionStorage.setItem('applyNo',row.applyNo);
			this.$router.push({
				name: "leave_info",
				params: {
					applyNo: row.applyNo,
					userNo: row.userNo
				}
			})
			
		},
		handleDelete(index, row) {
			const self = this;
		 	self.$confirm('此操作将会删除该条信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
           }).then(() => {
            	let params = {
					applyNo: row.applyNo
				}
            	//删除
				self.deleteLeaveInfo(params);
            	
            }).catch(() => {
                this.$message('您已取消操作！');
            });
			
		},
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					self.queryFormFlag = true;
					let params = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						organNo: self.ruleForm2.organNo,
						derpNo: self.ruleForm2.departOrgNo,
						leaveUserNo: self.ruleForm2.userNo,
						leaveStartTime: self.ruleForm2.startDate,
						leaveEndTime: self.ruleForm2.endDate
					};
					console.log(params)
					//请假列表查询
					self.queryLeaveList(params);
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.departOrgNo = '';
			this.ruleForm2.userNo = '';
			this.ruleForm2.startDate = '';
			this.ruleForm2.endDate = '';
		},
		handleCurrentChange(val) {
			const self = this;
			let params = {};
			if(self.queryFormFlag) {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize,
					organNo: self.ruleForm2.organNo,
					derpNo: self.ruleForm2.departOrgNo,
					leaveUserNo: self.ruleForm2.userNo,
					leaveStartTime: self.ruleForm2.startDate,
					leaveEndTime: self.ruleForm2.endDate
					
				}
			} else {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize
				}
			}
			//分页列表查询
			this.queryLeaveList(params);
		},
		queryLeaveList(params) {
			let self = this;
			self.$axios.get(baseURL+'/leave/queryLeaveList', {params: params})
			.then(function(res) {
				console.log('LeaveList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.models;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		deleteLeaveInfo(params) {
			let self = this;
			self.$axios.delete(baseURL+'/leave/deleteLeaveInfo?applyNo='+params.applyNo)
			.then(function(res) {
				console.log('deleteLeaveInfo',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					let param = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						organNo: self.ruleForm2.organNo,
						derpNo: self.ruleForm2.derpNo,
						userNo: self.ruleForm2.userNo,
						leaveStartTime: self.ruleForm2.startDate,
						leaveEndTime: self.ruleForm2.endDate
					};
					
					//请假列表查询
					self.queryLeaveList(param);
				}
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then(function(res) {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
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
		},
		leaveTypeFormatter(row, column) {
	    	let leaveType = '';
	    	switch(row.leaveType){
				case '01':
				  leaveType = '有薪休假'
				  break;
				case '02':
				  leaveType = '事假'
				  break;
				case '03':
				  leaveType = '病假'
				  break;
				case '04':
				  leaveType = '因公外出'
				  break;
				case '05':
				  leaveType = '出差'
				  break;
				case '06':
				  leaveType = '婚假'
				  break;
				case '07':
				  leaveType = '生育产假'
				  break;
				case '08':
				  leaveType = '哺乳假'
				  break;
				case '09':
				  leaveType = '护理假'
				  break;
				case '10':
				  leaveType = '流产假'
				  break;
				case '11':
				  leaveType = '产前检查'
				  break;
				case '12':
				  leaveType = '丧假'
				  break;
				case '13':
				  leaveType = '忘打卡'
				  break;
				case '14':
				  leaveType = '忘带卡'
				  break;
				case '15':
				  leaveType = '特殊'
				  break;
				case '16':
				  leaveType = '调休假'
				  break;
				default:
			}
	    	return leaveType;
		}
	}
}
</script>

<style scoped>
.leave_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}
.icon_delete {
	width: 14px;
	height: 16px;
	cursor: pointer;
	display: inline-block;
	margin-left: 20px;
	background: url(../../../../../static/img/common/delete.png);
}
.el-button + .el-button {
    margin-left: 20px;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>