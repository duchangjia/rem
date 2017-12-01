<template>
	<div class="detail_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">人事调动明细查询</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" @click="handleAddTransfer()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<!--<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="ruleForm2.organNo" value-key="organNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.compName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo" @change="changeComp">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.departName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :sm="12" :md="6">
						<el-form-item label="开始时间" prop="startTime">
							<el-date-picker
						      v-model="ruleForm2.startTime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" @change="changeStartTime">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="结束时间" prop="endTime">
							<el-date-picker
						      v-model="ruleForm2.endTime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0" @change="changeEndTime">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<div class="queryButton_wrapper">
							<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
							<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
						</div>
					</el-col>
						
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="workhisId" label="调动编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.workhisId }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="userNo" label="工号"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="oldOrganName" label="原公司名称"></el-table-column>
					<el-table-column prop="oldDerpName" label="原部门名称"></el-table-column>
					<el-table-column prop="shiftType" label="调动类型"></el-table-column>
					<el-table-column prop="createdDate" label="调动日期"></el-table-column>
					<el-table-column prop="shiftCameTime" label="调动生效日期" :formatter="travelTimeFormatter"></el-table-column>
					<el-table-column align="center" label="操作" width="100">
						<template scope="scope">
							<span class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></span>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue';
import moment from 'moment'
const baseURL = 'iem_hrm';
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
			ruleForm2: {
				organNo: '',
				derpNo: '',
				startTime: "",
				endTime: ''
			},
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			transferDataList: [],
			rules: {
				compName: [],
				departName: []
			}
		};
	},
	components: {
		current
	},
	created() {
		this.ruleForm2.startTime = '';
		this.ruleForm2.endTime = '';
		//查询调动列表
		this.queryCustShifthisList();
		//查询公司列表
		this.queryCompList();
	},
	methods: {
		travelTimeFormatter(row, column) {
			let time = row.shiftCameTime;
			return time?moment(time).format('YYYY-MM-DD'): null;
		},
		changeStartTime(val) {
			this.ruleForm2.startTime = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endTime = val;
		},
		handleAddTransfer() {
			this.$router.push('/add_transfer');
		},
		changeComp(value) {
		 	console.log('value',value);
            let params = {
            	organNo: value
            }
            this.queryDerpList(params);
	    },
		handleEdit(index, row) {
			console.log('row:',row);
			sessionStorage.setItem('editTransfer_userNo', row.userNo);
			sessionStorage.setItem('editTransfer_workhisId', row.workhisId);
            this.$router.push({
            	name: "edit_transfer",
            	params: {
					userNo: row.userNo,
            		workhisId: row.workhisId
            	}
            });
		},
		handleInfo(index, row) {
			console.log('row:',row);
			sessionStorage.setItem('infoTransfer_userNo', row.userNo);
			sessionStorage.setItem('infoTransfer_workhisId', row.workhisId);
			this.$router.push({
				name: "transfer_info",
				params: {
					userNo: row.userNo,
					workhisId: row.workhisId
				}
			})
			
		},
		//查询
		queryForm(formName) {
			const self = this;
			console.log(this.ruleForm2.startTime)
			self.$refs[formName].validate((valid) => {
				if (valid) {
					//条件查询调动列表
					self.queryCustShifthisList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.derpNo = '';
			this.ruleForm2.startTime = '';
			this.ruleForm2.endTime = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//查询调动列表
			this.queryCustShifthisList();
		},
		//人事调动列表查询
		queryCustShifthisList() {
			let self = this;
			let userNo = sessionStorage.getItem('transfer_userNo');
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				userNo: userNo,
				startTime: self.ruleForm2.startTime,
				endTime: self.ruleForm2.endTime
			}
			console.log('trans params', params);
			self.$axios.get(baseURL+'/custShifthis/queryCustShifthisList', {params: params})
			.then(function(res) {
				console.log('CustShifthisList',res);
				self.transferDataList = res.data.data.models;
				self.pageNum = params.pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log('error');
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
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
			self.$axios.get(baseURL+'/wage/queryDerpByUserNo', {params: params})
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
	
.detail_transfer {
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
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>