<template>
	<div class="detail_dimission">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">员工离职明细查询</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" :disabled=addDimissionFlag @click="handleAddTransfer()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<!--<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="organName">
							<el-select v-model="ruleForm2.organNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="derpName">
							<el-select v-model="ruleForm2.derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :sm="12" :md="6">
						<el-form-item label="开始时间" prop="startTime">
							<el-date-picker
						      v-model="ruleForm2.startTime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0"
							  :editable="false" @change="changeStartTime">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="结束时间" prop="endTime">
							<el-date-picker
						      v-model="ruleForm2.endTime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0"
							  :editable="false" @change="changeEndTime">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<div class="queryButton_wrapper">
							<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
							<el-button class="btn-primary" @click="queryForm">查询</el-button>
						</div>
					</el-col>
						
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="dimId" label="离职编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.dimId }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="userNo" label="工号"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="organName" label="公司名称"></el-table-column>
					<el-table-column prop="derpName" label="部门名称"></el-table-column>
					<el-table-column prop="dimType" label="离职类型" :formatter="dimTypeFormatter"></el-table-column>
					<el-table-column prop="dimTime" label="离职日期" :formatter="dimTimeFormatter"></el-table-column>
					<el-table-column align="center" label="操作" width="100">
						<template scope="scope">
							<span class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></span>
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
			addDimissionFlag: false,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				startTime: "",
				endTime: ''
			},
			comp: {
				organName: '',
				organNo: ''
			},
			depart: {
				derpName: '',
				derpNo: ''
			},
			//离职类型列表
			dimTypeList: [],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			transferDataList: [
				{
					dimId: "",
					userNo: "",
					custName: "",
					organName: "",
					derpName: "",
					dimType: "",
					dimTime: ""
				}
			],
			rules: {
				organName: [],
				derpName: []
			}
		};
	},
	components: {
		current
	},
	created() {
		var custStatus = sessionStorage.getItem('dimission_custStatus');
		if(custStatus === '03' || custStatus === '04') {
			this.addDimissionFlag = true;
		}else {
			this.addDimissionFlag = false;
		}
		this.ruleForm2.startTime = '';
		this.ruleForm2.endTime = '';
		//查询离职列表
		this.queryCustDimhisList();
		//查询公司列表
		this.queryCompList();
		//查询离职类型列表
		this.querydimTypeList();
	},
	methods: {
		dimTypeFormatter(row, column) {
			let dimType = ""
			this.dimTypeList.forEach(function(item) {
				if(row.dimType == item.paraValue) {
					dimType = item.paraShowMsg;
				}
			}, this);
			return dimType;
		},
		dimTimeFormatter(row, column) {
			let time = row.dimTime;
			return time?moment(time).format('YYYY-MM-DD') :null;
		},
		changeStartTime(val) {
			this.ruleForm2.startTime = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endTime = val;
		},
		handleAddTransfer() {
			this.$router.push('/add_dimission');
		},
		changeComp(value) {
            console.log('value',value);
            let params = {
            	organNo: value
            }
            this.queryDerpList(params)
	    },
		handleEdit(index, row) {
			sessionStorage.setItem('editDimission_userNo', row.userNo);
			sessionStorage.setItem('editDimission_dimId', row.dimId);
            this.$router.push({
            	name: "edit_dimission",
            	params: {
            		dimId: row.dimId,
            		userNo: row.userNo
            	}
            });
		},
		handleInfo(index, row) {
			sessionStorage.setItem('infoDimission_userNo', row.userNo);
			sessionStorage.setItem('infoDimission_dimId', row.dimId);
			this.$router.push({
				name: "dimission_info",
				params: {
					dimId: row.dimId,
            		userNo: row.userNo
				}
			})
			
		},
		//查询
		queryForm() {
			
			//条件查询离职列表
			this.queryCustDimhisList();
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
			//分页查询离职列表
			this.queryCustDimhisList();
		},
		queryCustDimhisList() {
			let self = this;
			let userNo = sessionStorage.getItem('dimission_userNo');
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				userNo: userNo,
				startTime: self.ruleForm2.startTime,
				endTime: self.ruleForm2.endTime
			}
			console.log('dim params', params)
			self.$axios.get(baseURL+'/custDimhis/queryCustDimhisList', {params: params})
			.then(function(res) {
				console.log('CustDimhisList',res);
				self.transferDataList = res.data.data.models;
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
		querydimTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=DIM_TYPE')
				.then((res) => {
					console.log('dimType',res);
					if(res.data.code === "S00000") {
						self.dimTypeList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
	}

}
</script>

<style>
	
.detail_dimission {
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