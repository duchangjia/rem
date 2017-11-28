<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">录入工资</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="autoCalc('formdata2')">自动计算</el-button>
				</div>
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
						<el-form-item label="工号" prop="custNo">
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
							<el-select v-model="ruleForm2.difference">
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
					<el-table-column prop="month" label="工资月份" width="100"></el-table-column>
					<el-table-column prop="userNo" label="工号" width="100"></el-table-column>
					<el-table-column prop="custName" label="姓名" width="100"></el-table-column>
					<el-table-column prop="wagesBase" label="基础工资" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.wagesBase" @change="handleEdit($event,'wagesBase')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="wagesPerf" label="绩效工资" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.wagesPerf" @change="handleEdit($event,'wagesPerf')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="postPension" label="岗位津贴" :show-overflow-tooltip="true" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.postPension" @change="handleEdit($event,'postPension')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="phonePension" label="通讯补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.phonePension" @change="handleEdit($event,'phonePension')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="trafficPension" label="交通补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.trafficPension" @change="handleEdit($event,'trafficPension')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="livingPension" label="生活补助" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.livingPension" @change="handleEdit($event,'livingPension')"></el-input>
				        </template>
					</el-table-column>
					<!--<el-table-column prop="jixiaojiang" label="绩效奖金" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.jixiaojiang" @change="handleEdit($event,'jixiaojiang')"></el-input>
				        </template>
					</el-table-column>-->
					<el-table-column prop="overtimePay" label="加班工资" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.overtimePay" @change="handleEdit($event,'overtimePay')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="otherPension" label="其他补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.otherPension" @change="handleEdit($event,'otherPension')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="chidao" label="迟到早退" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.chidao" @change="handleEdit($event,'chidao')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="bingjia" label="病事假" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.bingjia" @change="handleEdit($event,'bingjia')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="kuanggong" label="矿工" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.kuanggong" @change="handleEdit($event,'kuanggong')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="shangbaoGeren" label="商保(个人)" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.shangbaoGeren" @change="handleEdit($event,'shangbaoGeren')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="shangbaoDanwei" label="商保(单位)" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.shangbaoDanwei" @change="handleEdit($event,'shangbaoDanwei')"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="baoxianGeren" label="保险缴费合计(个人)" width="100"></el-table-column>
					<el-table-column prop="baoxianDanwei" label="保险缴费合计(单位)" width="100"></el-table-column>
					<el-table-column prop="baoxianjiaona" label="保险缴纳" width="100">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">详情</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="payTax" label="扣税" width="100"></el-table-column>
					<el-table-column prop="realHair" label="实发" width="100"></el-table-column>
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
				derpNo: '',
				custNo: "",
				custName: "",
				difference: ''
			},
			socialInfoData: [
				{
					month: "20172017",
					userNo: "P00000",
					custName: "小李",
					wagesBase: "2000",
					wagesPerf: "21",
					postPension: "200",
					phonePension: "20",
					createdBy: "P000000",
					createdDate: "2017-11-21"
				}
			],
			//部门列表
			departList: [],
			//差异列表
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
		let batchNo = sessionStorage.getItem('entryWage_batchNo');
		let organNo = sessionStorage.getItem('entryWage_organNo');
		let params = {
			organNo: organNo
		}
		//部门列表查询
		this.queryDerpList(params);
	},
	methods: {
		handleInfo(index, row) {
			sessionStorage.setItem('infoWage_month', row.month);
			this.$router.push({
				name: "edit_security",
				params: {
					month: row.month
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
					//查询
					self.queryWageList(params);
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.derpNo = '';
			this.ruleForm2.custNo = '';
			this.ruleForm2.custName = '';
			this.ruleForm2.difference = '';
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
		//编辑单元格
		handleEdit(val,valKey) {
			console.log('val',val)
			console.log('valKey',valKey)
			let params = {
				
			};
			//工资信息录入
			this.modWageInfo(params);
		},
		//自动计算
		autoCalc() {
			let params = {
				
			};
			this.autoCaclWage(params);
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
		modWageInfo(params) {
			let self = this;
			self.$axios.put(baseURL+'',params)
			.then((res) => {
				console.log('modWage',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					self.$router.push('/wageProcess_manage');
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		autoCaclWage(params) {
			let self = this;
			self.$axios.put(baseURL+'', params)
			.then(function(res) {
				console.log('cacl',res);
				if(res.data.code === "S00000") {
					
				}
				
			}).catch(function(err) {
				console.log('error');
			})
		},
		queryWageList(params) {
			let self = this;
			self.$axios.get(baseURL+'', {params: params})
			.then(function(res) {
				console.log('WageList',res);
				if(res.data.code === "S00000") {
//					self.transferDataList = res.data.data.models;
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