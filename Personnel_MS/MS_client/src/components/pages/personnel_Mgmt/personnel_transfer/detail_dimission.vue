<template>
	<div class="transfer_wrap">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">员工离职明细查询</span>
				<el-button type="primary" class="title_button" @click="handleAddTransfer()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="公司" prop="compName">
								<el-select v-model="comp" value-key="compOrgNo" placeholder="所属公司" @change="changeValue">
									<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="部门" prop="departName">
								<el-select v-model="depart" value-key="departOrgNo" placeholder="所属部门" @change="changeValue">
									<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="开始时间" prop="startTime">
								<el-date-picker
							      v-model="ruleForm2.startTime"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeStartTime">
							   </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="结束时间" prop="endTime">
								<el-date-picker
							      v-model="ruleForm2.endTime"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeEndTime">
							   </el-date-picker>
							</el-form-item>
						</el-col>
					</div>
					<div class="button-wrap">
							<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
							<el-button type="primary" @click="queryForm">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="transferDataList" border stripe style="width: 100%">
						<el-table-column prop="dimId" label="离职编号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.dimId }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="userName" label="姓名"></el-table-column>
						<el-table-column prop="compName" label="公司名称"></el-table-column>
						<el-table-column prop="departName" label="部门名称"></el-table-column>
						<el-table-column prop="dimType" label="离职类型"></el-table-column>
						<el-table-column prop="dimTime" label="离职日期" :formatter="dimTimeFormatter"></el-table-column>
						<el-table-column align="center" label="操作" width="100">
							<template scope="scope">
								<span class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></span>
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
				compOrgNo: '',
				departOrgNo: '',
				startTime: "",
				endTime: ''
			},
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
			transferDataList: [
				{
					dimId: "001001",
					userNo: "p011111",
					userName: "sdsd",
					compName: "xx",
					departName: "xx",
					dimType: "xx",
					dimTime: "2017-10-01"
				},
				{
					dimId: "001001",
					userNo: "p011111",
					userName: "sdsd",
					compName: "",
					departName: "",
					dimType: "",
					dimTime: "",
					shengxiaoDate: ""
				}
			],
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
		const self = this;
		let pageNum = self.pageNum;
		let pageSize = self.pageSize;
		let userNo = self.$route.params.userNo;
		let params = {
			"pageNum": pageNum,
			"pageSize": pageSize,
			userNo: userNo
		}
		self.queryFormFlag = false;
		//查询离职列表
		self.queryCustDimhisList(pageNum,pageSize,params);
	},
	methods: {
		dimTimeFormatter(row, column) {
			let time = row.dimTime;
			return moment(time).format('YYYY-MM-DD hh:mm:ss');
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
		changeValue(value) {
		 		const self = this;
	            console.log('value',value);
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
			const self = this;
			let pageNum = self.pageNum;
			let pageSize = self.pageSize;
			let userNo = self.$route.params.userNo;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize,
				userNo: userNo,
			}
			self.queryFormFlag = true;
			//条件查询离职列表
			self.queryCustDimhisList(pageNum,pageSize,params);
		},
		//重置
		resetForm() {
			this.comp = {};
			this.depart = {};
			this.ruleForm2.startTime = '';
			this.ruleForm2.endTime = '';
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			const self = this;
			let pageNum = val;
			let pageSize = self.pageSize;
			let userNo = self.$route.params.userNo;
			let params = {};
			if(!self.queryFormFlag) {
				params = {
					"pageNum": pageNum,
					"pageSize": pageSize,
					userNo: userNo
				}
			} else {
				params = {
					"pageNum": pageNum,
					"pageSize": pageSize,
					userNo: userNo,
					startTime: self.ruleForm2.startTime,
					endTime: self.ruleForm2.endTime
				}
			}
			//分页查询离职列表
			self.queryCustDimhisList(pageNum,pageSize,params);
		},
		queryCustDimhisList(pageNum,pageSize,params) {
			let self = this;
			self.$axios.get(baseURL+'/custDimhis/queryCustDimhisList', {params: params})
			.then(function(res) {
				console.log('CustDimhisList',res);
				self.transferDataList = res.data.data.list;
				self.pageNum = pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch(function(err) {
				console.log(err);
			})
		}
	}

}
</script>

<style>
	
.transfer_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.transfer_wrap .content {
	width: 100%;
	/*min-height: 530px;*/
	/*height: calc(100% - 90px);*/
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.transfer_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.transfer_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.transfer_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.transfer_wrap .title_button {
	float: right;
	margin-top: 10px;
}
.transfer_wrap .content-inner {
	padding: 30px 0px;
}

.transfer_wrap .el-form-item__label {
	color: #999999;
	font-weight: normal;
	padding: 8px 10px 8px 0;
	margin: 0;
}


.transfer_wrap .el-form-item {
	margin-bottom: 30px;
}

.transfer_wrap .el-input,
.transfer_wrap .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
	border-radius: 4px;
}

.transfer_wrap .el-form-item__content {
	line-height: 30px;
	position: relative;
	font-size: 14px;
}

.transfer_wrap .button-wrap {
	margin: 0px auto 30px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.transfer_wrap .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}

.transfer_wrap .el-input__inner:hover {
	border-color: #FF9900;
}

.transfer_wrap .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	padding: 7px 45px;
	height: 30px;
}

.transfer_wrap .el-button.resetform {
	margin-right: 20px;
}

.transfer_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}

.transfer_wrap .el-table td,
.transfer_wrap .el-table th {
	text-align: center;
}

.transfer_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.transfer_wrap .el-table td:first-child:hover{
	color: #FF9900;
}

.transfer_wrap .el-table th {
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}

.transfer_wrap .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.transfer_wrap .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.transfer_wrap .el-pager li {
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

.transfer_wrap .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.transfer_wrap .el-pagination button,
.transfer_wrap .el-pagination span {
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

.transfer_wrap .el-pager li:hover {
	color: #FF9900;
}
.transfer_wrap .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.transfer_wrap .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.transfer_wrap .el-pagination button:hover {
	color: #FF9900;
}
.transfer_wrap .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.transfer_wrap .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.transfer_wrap .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.transfer_wrap .el-pagination .btn-next,
.transfer_wrap .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.transfer_wrap .el-autocomplete-suggestion__wrap,
.transfer_wrap .el-pager li {
	border: 1px solid #EEEEEE;
}

.transfer_wrap .el-pager li.btn-quicknext,
.transfer_wrap .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>