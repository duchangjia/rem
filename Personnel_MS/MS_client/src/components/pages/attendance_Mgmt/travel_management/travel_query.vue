<template>
	<div class="query_wrapper">
		<current yiji="考勤管理" erji="出差管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">出差管理</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
				</div>
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
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo">
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
							   :editable="false"
						      @change="changeStartTime"
						      >
						   </el-date-picker> -
							<el-date-picker
						      v-model="ruleForm2.endDate"
						      type="date"
						      placeholder="选择日期"
							   :editable="false"
						      @change="changeEndTime"
						      >
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
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
import getDeepDerp from '../../../../common/GetDeepDerp'
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
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			transferDataList: [],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			travelTypeList: [],
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
		this.ruleForm2.organNo = '';
		this.ruleForm2.derpNo = '';
		this.ruleForm2.userNo = '';
		this.ruleForm2.startDate = '';
		this.ruleForm2.endDate = '';
		//出差列表查询
		this.queryTravelList();
		//公司列表查询
		this.queryCompList();
		//加班类型列表查询
		this.queryTravelTypeList();
	},
	methods: {
		travelStartTimeFormatter(row, column) {
	      return row.travelStartTime ? moment(row.travelStartTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	travelEndTimeFormatter(row, column) {
	      return row.travelEndTime ? moment(row.travelEndTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		travelTypeFormatter(row, column) {
			let travelType = ""
			this.travelTypeList.forEach(function(item) {
				if(row.travelType == item.paraValue) {
					travelType = item.paraShowMsg;
				}
			}, this);
			return travelType;
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
	    	this.$router.push('/add_travel');
	    },
		handleEdit(index, row) {
			sessionStorage.setItem('editTravel_applyNo', row.applyNo);
            this.$router.push("/edit_travel");
		},
		handleInfo(index, row) {
			sessionStorage.setItem('InfoTravel_applyNo', row.applyNo);
			this.$router.push("/travel_info");
			
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
					//出差列表查询
					self.queryTravelList();
					
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
			this.pageNum = val;
			//分页出差列表查询
			this.queryTravelList();
		},
		queryTravelList() {
			let self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				organNo: self.ruleForm2.organNo,
				derpNo: self.ruleForm2.derpNo,
				travelUserNo: self.ruleForm2.userNo,
				travelStartTime: self.ruleForm2.startDate,
				travelEndTime: self.ruleForm2.endDate
			};
			self.$axios.get(baseURL+'/travel/queryTravelList', {params: params})
			.then((res) => {
				console.log('TravelList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then((res) => {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		queryDerpList(params) {
			let self = this;
			self.departList = [];
			self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
			.then((res) => {
				console.log('DerpList',res);
				self.ruleForm2.derpNo = '';
				if(res.data.code === "S00000") {
					res.data.data.forEach(item=>{
						self.departList.push({
							derpName: item.derpName,
							derpNo: item.derpNo,
						})
						if(item.depList.length!=0){
							getDeepDerp(item.depList,self.departList)
						}
					})
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		deleteTravel(params) {
			let self = this;
			self.$axios.delete(baseURL+'/travel/deleteTravel?applyNo='+ params.applyNo)
			.then((res) => {
				console.log('deleteTravel',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					
					//出差列表查询
					self.queryTravelList();
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		queryTravelTypeList() {
			let self = this;
			self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=TRAVEL_TYPE')
			.then((res) => {
				console.log('travelType',res);
				if(res.data.code === "S00000") {
					self.travelTypeList = res.data.data;
				}
			}).catch((err) => {
				console.log('error');
			})
		}
	}
}
</script>

<style scoped>
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