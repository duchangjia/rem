<template>
	<div class="overtime_query">
		<current yiji="考勤管理" erji="加班管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">加班管理</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
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
					<el-col :sm="24" :md="12">
						<el-form-item label="时间" prop="startDate">
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
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="applyNo" label="加班编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="companyName" label="公司名称"></el-table-column>
					<el-table-column prop="deptName" label="部门名称"></el-table-column>
					<el-table-column prop="userNo" label="工号"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="workotType" label="加班类型" :formatter="workotTypeFormatter"></el-table-column>
					<el-table-column prop="workotStartTime" label="加班开始时间" :formatter="workotStartTimeFormatter"></el-table-column>
					<el-table-column prop="workotEndTime" label="加班结束时间" :formatter="workotEndTimeFormatter"></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
					<el-table-column label="操作" width="100">
						<template scope="scope">
							<i class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></i>
							<i class="icon_delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
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
		return {
			pickerOptions0: {
	          disabledDate(time) {
//	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				departOrgNo: '',
				userNo: "",
				startDate: "",
				endDate: '',
				value9: ""
			},
			transferDataList: [
				{
					applyNo: "",
					companyName: "",
					deptName: "",
					userNo: "", 
					custName: "",
					workotType: "",
					workotStartTime: "",
					workotEndTime: "",
					createdBy: "",
					createdDate: ""
				}
			],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			rules: {
				compName: [],
				departName: []
			}
		}
	},
	components: {
		current
	},
	created() {
		this.ruleForm2.organNo = '';
		this.ruleForm2.departOrgNo = '';
		this.ruleForm2.userNo = '';
		this.ruleForm2.startDate = '';
		this.ruleForm2.endDate = '';
		//加班列表查询
		this.queryWorkOtList();
		//查询公司列表
		this.queryCompList();
	},
	methods: {
		workotStartTimeFormatter(row, column) {
	      return row.workotStartTime ? moment(row.workotStartTime).format('YYYY-MM-DD') : null;
	   	},
	   	workotEndTimeFormatter(row, column) {
	      return row.workotEndTime ? moment(row.workotEndTime).format('YYYY-MM-DD') : null;
	   	},
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	   	},
		workotTypeFormatter(row, column) {
	      return row.workotType == '01' ? "有薪加班" : "调休加班";
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
	    	this.$router.push('/add_overtime');
	    },
		handleEdit(index, row) {
			console.log('row:',row);
            this.$router.push({
            	name: "edit_overtime",
            	params: {
            		applyNo: row.applyNo,
					userNo: row.userNo
            	}
            });
		},
		handleInfo(index, row) {
			console.log('row:',row);
			this.$router.push({
				name: "overtime_info",
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
            	//删除加班信息
				self.deleteWorkOtInfo(params);
            	
            }).catch(() => {
                this.$message('您已取消操作！');
            });
			
		},
		//查询
		queryForm(formName) {
			const self = this;
			console.log(this.ruleForm2.startDate)
			self.$refs[formName].validate((valid) => {
				if (valid) {
					//加班列表查询
					self.queryWorkOtList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.departOrgNo = '';
			this.ruleForm2.startDate = '';
			this.ruleForm2.endDate = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//分页列表查询
			this.queryWorkOtList();
		},
		queryWorkOtList() {
			let self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				organNo: self.ruleForm2.organNo,
				derpNo: self.ruleForm2.departOrgNo,
				workOtUserNo: self.ruleForm2.userNo,
				workotStartTime: self.ruleForm2.startDate,
				workotEndTime: self.ruleForm2.endDate
			};
			self.$axios.get(baseURL+'/workot/queryWorkOtList', {params: params})
			.then(function(res) {
				console.log('queryTravelList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.models;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
			}).catch(function(err) {
				console.log(err);
			})
		},
		deleteWorkOtInfo(params) {
			let self = this;
			self.$axios.delete(baseURL+'/workot/deleteWorkOtInfo?applyNo='+params.applyNo)
			.then(function(res) {
				console.log('deleteTravel',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					
					//加班列表查询
					self.queryWorkOtList();
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
	}
}
</script>

<style scoped>
.overtime_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.overtime_query .el-button + .el-button {
    margin-left: 20px;
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
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>