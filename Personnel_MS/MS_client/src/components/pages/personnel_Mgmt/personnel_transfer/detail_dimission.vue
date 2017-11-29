<template>
	<div class="detail_dimission">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">员工离职明细查询</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" @click="handleAddTransfer()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
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
					</el-col>
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
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-default" @click="queryForm">查询</el-button>
					</div>
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="dimId" label="离职编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.dimId }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="userNo" label="工号"></el-table-column>
					<el-table-column prop="userName" label="姓名"></el-table-column>
					<el-table-column prop="organName" label="公司名称"></el-table-column>
					<el-table-column prop="derpName" label="部门名称"></el-table-column>
					<el-table-column prop="dimType" label="离职类型"></el-table-column>
					<el-table-column prop="dimTime" label="离职日期" :formatter="dimTimeFormatter"></el-table-column>
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
			//部门列表
			departList: [
				{derpName: "上海魔方分公司",derpNo: '01'},
				{derpName: "魔方分公司深圳分公司",derpNo: 'p1'},
				{derpName: "深圳前海橙色魔方信息技术有限公司",derpNo: '0'}
			],
			//公司列表
			compList: [
				{organName: "上海魔方分公司",organNo: '01'},
				{organName: "魔方分公司深圳分公司",organNo: 'p1'},
				{organName: "深圳前海橙色魔方信息技术有限公司",organNo: '0'}
			],
			transferDataList: [
				{
					dimId: "001001",
					userNo: "p011111",
					userName: "sdsd",
					organName: "xx",
					derpName: "xx",
					dimType: "xx",
					dimTime: "2017-10-01"
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
		//查询离职列表
		this.queryCustDimhisList();
		//查询公司列表
		this.queryCompList();
	},
	methods: {
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
			console.log('row:',row);
            this.$router.push({
            	name: "edit_dimission",
            	params: {
            		dimId: row.dimId,
            		userNo: row.userNo
            	}
            });
		},
		handleInfo(index, row) {
			console.log('row:',row);
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
			let userNo = self.$route.params.userNo;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				userNo: userNo,
				startTime: self.ruleForm2.startTime,
				endTime: self.ruleForm2.endTime
			}
			self.$axios.get(baseURL+'/custDimhis/queryCustDimhisList', {params: params})
			.then(function(res) {
				console.log('CustDimhisList',res);
//				self.transferDataList = res.data.data.list;
				self.pageNum = params.pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log(err);
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