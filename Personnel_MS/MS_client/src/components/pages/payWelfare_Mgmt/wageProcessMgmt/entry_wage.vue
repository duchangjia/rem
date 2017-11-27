<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">录入工资</span>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="部门名称" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="工资月份" prop="custNo">
							<el-input v-model="ruleForm2.custNo" placeholder="请输入工号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="姓名" prop="custName">
							<el-input v-model="ruleForm2.custName" placeholder="请输入姓名"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="社保缴纳差异情况" prop="difference" style="margin-left: -38px;">
							<el-select v-model="ruleForm2.difference" @change="changeComp">
								<el-option v-for="item in differenceList" :key="item.differenceNo" :label="item.differenceName" :value="item.differenceNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="socialInfoData" border fit stripe style="width: 100%;">
					<el-table-column prop="applyNo" label="工资月份" width="100"></el-table-column>
					<el-table-column prop="companyName" label="工号" width="100"></el-table-column>
					<el-table-column prop="gryStartTime" label="姓名" width="100"></el-table-column>
					<el-table-column prop="gryEndTime" label="基础工资" width="100"></el-table-column>
					<el-table-column prop="gongziMonth" label="绩效工资" width="100"></el-table-column>
					<el-table-column prop="remark" label="岗位津贴" :show-overflow-tooltip="true" width="100"></el-table-column>
					<el-table-column prop="status" label="通讯补贴" width="100"></el-table-column>
					<el-table-column prop="jiaotongbt" label="交通补贴" width="100"></el-table-column>
					<el-table-column prop="jixiaojiang" label="绩效奖金" width="100"></el-table-column>
					<el-table-column prop="jiaban" label="加班工资" width="100"></el-table-column>
					<el-table-column prop="qita" label="其他补贴" width="100"></el-table-column>
					<el-table-column prop="chidao" label="迟到早退" width="100"></el-table-column>
					<el-table-column prop="bingjia" label="病事假" width="100"></el-table-column>
					<el-table-column prop="kuanggong" label="矿工" width="100"></el-table-column>
					<el-table-column prop="shangbaoGeren" label="商保(个人)" width="100"></el-table-column>
					<el-table-column prop="baoxianGeren" label="保险缴费合计(个人)" width="100"></el-table-column>
					<el-table-column prop="baoxianDanwei" label="保险缴费合计(单位)" width="100"></el-table-column>
					<el-table-column prop="baoxianjiaona" label="保险缴纳" width="100">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">详情</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="koushui" label="扣税" width="100"></el-table-column>
					<el-table-column prop="shifa" label="实发" width="100"></el-table-column>
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
			token: {
				Authorization:`Bearer `+localStorage.getItem('access_token'),
			},
			pageNum: 1,
			pageSize: 10,
			totalRows: 2,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				custNo: "",
				custName: "",
				endDate: ''
			},
			socialInfoData: [
				{
					applyNo: "20172017",
					companyName: "深圳分公司",
					gryStartTime: "2017-10-10",
					gryEndTime: "2017-11-10",
					gongziMonth: "2017-10-10",
					remark: "的方式大力开发空间里的时间反对声浪附近逗留时间房价肯定里粉丝数量大幅减少的看风景",
					status: "01",
					createdBy: "P000000",
					createdDate: "2017-11-21"
				}
			],
			//部门列表
			departList: [],
			//公司列表
			differenceList: [
				{differenceNo: "0",differenceName: "全部"},
				{differenceNo: "1",differenceName: "无差异"},
				{differenceNo: "2",differenceName: "有差异"},
			],
			rules: {
				startDate: [
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
			"pageSize": this.pageSize,
			
		}
		
		//公司列表查询
		this.queryCompList();
		//部门列表查询
		this.queryDerpList(params);
	},
	methods: {
		gryStartTimeFormatter(row, column) {
	      return row.gryStartTime ? moment(row.gryStartTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	gryEndTimeFormatter(row, column) {
	      return row.gryEndTime ? moment(row.gryEndTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	statusFormatter(row, column) {
	   		return row.status=="01" ? "录入" : row.status=="02" ? "启用" : "废弃";
	   	},
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
			console.log(val)
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
		handleSocial() {
			this.$router.push('/socialSecurity_query');
		},
	    handleAdd() {
	    	this.$router.push('/add_wage');
	    },
		handleInfo(index, row) {
			sessionStorage.setItem('infoWage_applyNo', row.applyNo);
			this.$router.push({
				name: "edit_security",
				params: {
					applyNo: row.applyNo
				}
			})
			
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
						
					};
					//查询工资列表
					
					
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
			
		},
		queryWageInfo(params) {
			let self = this;
			self.$axios.get(baseURL+'/wage/',{params: params})
			.then(function(res) {
				console.log('wageInfo',res);
				if(res.data.code === "S00000") {
					self.socialInfoData = res.data.data;
				}
				
			}).catch(function(err) {
				console.log('error');
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
		}
	}
}
</script>


<style scoped>
.payroll_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.payroll_query .imExport-btn-item {
    margin-right: 20px;
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