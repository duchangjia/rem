<template>
	<div class="workot_query">
		<current yiji="考勤管理" erji="加班管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">加班管理</span>
				<el-button type="primary" class="title_button" @click="handleAdd">新增</el-button>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="公司">
								<el-select v-model="ruleForm2.organNo" @change="changeComp">
									<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
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
						<el-col :span="6">
							<el-form-item label="工号" prop="userNo">
								<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
							</el-form-item>
						</el-col>
					</div>
					<div class="button-wrap">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
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
		return {
			pickerOptions0: {
	          disabledDate(time) {
//	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
			pageNum: 1,
			pageSize: 5,
			totalRows: 2,
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
		this.queryFormFlag = false;
		let params = {
			"pageNum": this.pageNum,
			"pageSize": this.pageSize
		}
		//加班列表查询
		this.queryWorkOtList(params);
		//查询公司列表
		this.queryCompList();
	},
	methods: {
		workotStartTimeFormatter(row, column) {
	      return moment(row.workotStartTime).format('YYYY-MM-DD') || '';
	   	},
	   	workotEndTimeFormatter(row, column) {
	      return moment(row.workotEndTime).format('YYYY-MM-DD') || '';
	   	},
	   	createdDateFormatter(row, column) {
	      return moment(row.createdDate).format('YYYY-MM-DD') || '';
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
					self.queryFormFlag = true;
					let params = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						organNo: self.ruleForm2.organNo,
						userNo: self.ruleForm2.userNo,
//						applyNo: self.ruleForm2.applyNo,
						workotStartTime: self.ruleForm2.workotStartTime,
						workotEndTime: self.ruleForm2.workotEndTime
					};
					
					//加班列表查询
					self.queryWorkOtList(params);
					
				} else {
					console.log('error submit!!');
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
			const self = this;
			let params = {};
			if(self.queryFormFlag) {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize,
					organNo: self.ruleForm2.organNo,
					userNo: self.ruleForm2.userNo,
//						applyNo: self.ruleForm2.applyNo,
					workotStartTime: self.ruleForm2.workotStartTime,
					workotEndTime: self.ruleForm2.workotEndTime
					
				}
			} else {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize
				}
			}
			//分页出差列表查询
			this.queryWorkOtList(params);
		},
		queryWorkOtList(params) {
			let self = this;
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
					let param = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						organNo: self.ruleForm2.organNo,
						userNo: self.ruleForm2.userNo,
//						applyNo: self.ruleForm2.applyNo,
						workotStartTime: self.ruleForm2.workotStartTime,
						workotEndTime: self.ruleForm2.workotEndTime
					};
					
					//加班列表查询
					self.queryWorkOtList(param);
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

<style>
.workot_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.workot_query .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.workot_query .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.workot_query .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.workot_query .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.workot_query .title_button {
	float: right;
	margin-top: 10px;
}
.workot_query .content-inner {
	padding: 30px 0px;
}

.workot_query .el-form-item__label {
	color: #999999;
	padding: 8px 10px 8px 0;
	margin: 0;
	font-weight: normal;
}

/*.workot_query .input-wrap .el-form-item {
	float: left;
}*/

.workot_query .el-form-item {
	margin-bottom: 30px;
}

.workot_query .el-input,
.workot_query .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
}

.workot_query .el-form-item__content {
	line-height: 30px;
	position: relative;
	font-size: 14px;
}

.workot_query .button-wrap {
	margin: 0px auto 30px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.workot_query .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}

.workot_query .el-input__inner:hover {
	border-color: #FF9900;
}

.workot_query .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	padding: 7px 45px;
	height: 30px;
}
.workot_query .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.workot_query .el-button+.el-button {
    margin-left: 20px;
}
.workot_query .el-table td,
.workot_query .el-table th {
	text-align: center;
}
.workot_query .el-table td:first-child{
	cursor: pointer;
}
.workot_query .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.workot_query .el-table td:first-child:hover{
	color: #FF9900;
}

.workot_query .el-table th {
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.workot_query .el-table .cell, .el-table th>div {
    padding-left: 10px;
    padding-right: 10px;
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

.workot_query .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.workot_query .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.workot_query .el-pager li {
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

.workot_query .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.workot_query .el-pagination button,
.workot_query .el-pagination span {
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

.workot_query .el-pager li:hover {
	color: #FF9900;
}
.workot_query .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.workot_query .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.workot_query .el-pagination button:hover {
	color: #FF9900;
}
.workot_query .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.workot_query .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.workot_query .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.workot_query .el-pagination .btn-next,
.workot_query .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.workot_query .el-autocomplete-suggestion__wrap,
.workot_query .el-pager li {
	border: 1px solid #EEEEEE;
}

.workot_query .el-pager li.btn-quicknext,
.workot_query .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
.workot_query .el-upload__input {
    display: none;
}
.workot_query .btn_wrap {
	margin-top: 30px;
}
.workot_query .upload_btn {
	display: inline-block;
	left: 100%;
}
</style>