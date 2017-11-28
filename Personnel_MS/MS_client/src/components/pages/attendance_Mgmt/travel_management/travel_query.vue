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
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo" @change="changeValue">
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
						      :picker-options="pickerOptions0" 
						      @change="changeStartTime"
						      >
						   </el-date-picker> -
							<el-date-picker
						      v-model="ruleForm2.endDate"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" 
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
					
					//出差列表查询
					self.queryTravelList();
				}
			}).catch(function(err) {
				console.log(err);
			})
		}
	}
}
</script>

<style scoped>
.el-button + .el-button {
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