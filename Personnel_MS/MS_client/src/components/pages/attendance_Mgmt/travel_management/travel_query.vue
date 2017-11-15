<template>
	<div class="travel_query">
		<current yiji="考勤管理" erji="出差管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">出差管理</span>
				<el-button type="primary" class="title_button" @click="handleAdd">新增</el-button>
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
						<el-table-column prop="applyNo" label="出差编号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="companyName" label="公司名称"></el-table-column>
						<el-table-column prop="deptName" label="部门名称"></el-table-column>
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="custName" label="姓名"></el-table-column>
						<el-table-column prop="travelType" label="出差类型" :formatter="travelTypeFormatter"></el-table-column>
						<el-table-column prop="travelStartTime" label="出差开始时间" :formatter="travelStartTimeFormatter"></el-table-column>
						<el-table-column prop="travelEndTime" label="出差结束时间" :formatter="travelEndTimeFormatter"></el-table-column>
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
			pageSize: 10,
			totalRows: 2,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			transferDataList: [
				{
					applyNo: "",
					organName: "",
					departName: "",
					userNo: "", 
					custName: "",
					travelType: "",
					travelStartTime: "",
					travelEndTime: "",
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
			"pageSize": this.pageSize,
			
		}
		//出差列表查询
		this.queryTravelList(params);
		//公司列表查询
		this.queryCompList();
	},
	methods: {
		travelStartTimeFormatter(row, column) {
	      return moment(row.travelStartTime).format('YYYY-MM-DD') || '';
	   	}, 
	   	travelEndTimeFormatter(row, column) {
	      return moment(row.travelEndTime).format('YYYY-MM-DD') || '';
	   	}, 
	   	createdDateFormatter(row, column) {
	      return moment(row.createdDate).format('YYYY-MM-DD') || '';
	    },
		travelTypeFormatter(row, column) {
	    	let travelType = '';
	    	switch(row.travelType){
				case '01':
				  travelType = '业务拓展'
				  break;
				case '02':
				  travelType = '项目实施'
				  break;
				case '03':
				  travelType = '会议'
				  break;
				case '99':
				  travelType = '其他'
				  break;
				default:
			}
	    	return travelType;
		},
		getLocalTime(nS) {     
			
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
		changeValue(value) {
	 		const self = this;
            console.log('value',value);
	    },
	    handleAdd() {
	    	this.$router.push('/add_travel');
	    },
		handleEdit(index, row) {
			console.log('row:',row);
            this.$router.push({
            	name: "edit_travel",
            	params: {
            		applyNo: row.applyNo,
					userNo: row.userNo
            	}
            });
		},
		handleInfo(index, row) {
			console.log('row:',row);
			this.$router.push({
				name: "travel_info",
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
            	console.log(params);
            	//删除
				self.deleteTravel(params);
            	
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
						derpNo: self.ruleForm2.derpNo,
						travelUserNo: self.ruleForm2.userNo,
						travelStartTime: self.ruleForm2.startDate,
						travelEndTime: self.ruleForm2.endDate
					};
					
					//出差列表查询
					self.queryTravelList(params);
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.derpNo = '';
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
					
				}
			} else {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize
				}
			}
			//分页出差列表查询
			this.queryTravelList(params);
		},
		queryTravelList(params) {
			let self = this;
			self.$axios.get(baseURL+'/travel/queryTravelList', {params: params})
			.then(function(res) {
				console.log('TravelList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
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
		deleteTravel(params) {
			let self = this;
			self.$axios.delete(baseURL+'/travel/deleteTravel?applyNo='+ params.applyNo)
			.then(function(res) {
				console.log('deleteTravel',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					let param = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						organNo: self.ruleForm2.organNo,
						derpNo: self.ruleForm2.derpNo,
						travelUserNo: self.ruleForm2.userNo,
						travelStartTime: self.ruleForm2.startDate,
						travelEndTime: self.ruleForm2.endDate
					};
					
					//出差列表查询
					this.queryTravelList(param);
				}
			}).catch(function(err) {
				console.log(err);
			})
		}
	}
}
</script>

<style>
.travel_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.travel_query .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.travel_query .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.travel_query .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.travel_query .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.travel_query .title_button {
	float: right;
	margin-top: 10px;
}
.travel_query .content-inner {
	padding: 30px 0px;
}

.travel_query .el-form-item__label {
	color: #999999;
	padding: 8px 10px 8px 0;
	margin: 0;
	font-weight: normal;
}

.travel_query .el-form-item {
	margin-bottom: 30px;
}

.travel_query .el-input,
.travel_query .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
}

.travel_query .el-form-item__content {
	line-height: 30px;
	position: relative;
	font-size: 14px;
}

.travel_query .button-wrap {
	margin: 0px auto 30px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.travel_query .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}

.travel_query .el-input__inner:hover {
	border-color: #FF9900;
}

.travel_query .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	padding: 7px 45px;
	height: 30px;
}

/*.travel_query .el-button.resetform {
	margin-right: 20px;
}*/

.travel_query .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.travel_query .el-button+.el-button {
    margin-left: 20px;
}
.travel_query .el-table td,
.travel_query .el-table th {
	text-align: center;
}
.travel_query .el-table td:first-child{
	cursor: pointer;
}
.travel_query .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.travel_query .el-table td:first-child:hover{
	color: #FF9900;
}

.travel_query .el-table th {
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.el-table .cell, .el-table th>div {
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

.travel_query .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.travel_query .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.travel_query .el-pager li {
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

.travel_query .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.travel_query .el-pagination button,
.travel_query .el-pagination span {
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

.travel_query .el-pager li:hover {
	color: #FF9900;
}
.travel_query .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.travel_query .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.travel_query .el-pagination button:hover {
	color: #FF9900;
}
.travel_query .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.travel_query .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.travel_query .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.travel_query .el-pagination .btn-next,
.travel_query .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.travel_query .el-autocomplete-suggestion__wrap,
.travel_query .el-pager li {
	border: 1px solid #EEEEEE;
}

.travel_query .el-pager li.btn-quicknext,
.travel_query .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
.travel_query .el-upload__input {
    display: none;
}
.travel_query .btn_wrap {
	margin-top: 30px;
}
.travel_query .upload_btn {
	display: inline-block;
	left: 100%;
}
</style>