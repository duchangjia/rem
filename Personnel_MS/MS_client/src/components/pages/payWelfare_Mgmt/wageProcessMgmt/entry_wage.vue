<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">录入工资</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="autoCalc('formdata2')">自动计算</el-button>
					<el-button type="primary" class="btn-primary" @click="save">保存</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<!--<el-col :sm="12" :md="6">
						<el-form-item label="部门名称" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :sm="12" :md="6">
						<el-form-item label="工号" prop="userNo">
							<el-input v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="姓名" prop="custName">
							<el-input v-model="ruleForm2.custName" placeholder="请输入姓名"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="社保缴纳差异情况" prop="diffType" style="margin-left: -38px;">
							<el-select v-model="ruleForm2.diffType">
								<el-option v-for="item in diffTypeList" :key="item.diffTypeNo" :label="item.diffTypeName" :value="item.diffTypeNo"></el-option>
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
				          	<el-input size="small" v-model="scope.row.wagesBase" @change="handleEdit($event,'wagesBase',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="wagesPerf" label="绩效工资" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.wagesPerf" @change="handleEdit($event,'wagesPerf',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="postPension" label="岗位津贴" :show-overflow-tooltip="true" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.postPension" @change="handleEdit($event,'postPension',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="phonePension" label="通讯补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.phonePension" @change="handleEdit($event,'phonePension',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="trafficPension" label="交通补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.trafficPension" @change="handleEdit($event,'trafficPension',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="livingPension" label="生活补助" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.livingPension" @change="handleEdit($event,'livingPension',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="overtimePay" label="加班工资" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.overtimePay" @change="handleEdit($event,'overtimePay',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="otherPension" label="其他补贴" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.otherPension" @change="handleEdit($event,'otherPension',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="lateArrivalPay" label="迟到早退" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.lateArrivalPay" @change="handleEdit($event,'lateArrivalPay',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="leavePay" label="病事假" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.leavePay" @change="handleEdit($event,'leavePay',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="absentPay" label="旷工" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.absentPay" @change="handleEdit($event,'absentPay',scope.row)"></el-input>
				        </template>
					</el-table-column>
					<el-table-column prop="perCommercialPay" label="商保(个人)" min-width="200px">
						<!--<template scope="scope">
				          	<el-input size="small" v-model="scope.row.shangbaoGeren" @change="handleEdit($event,'shangbaoGeren')"></el-input>
				        </template>-->
					</el-table-column>
					<el-table-column prop="comCommercialPay" label="商保(单位)" min-width="200px">
						<!--<template scope="scope">
				          	<el-input size="small" v-model="scope.row.shangbaoDanwei" @change="handleEdit($event,'shangbaoDanwei')"></el-input>
				        </template>-->
					</el-table-column>
					<!--<el-table-column prop="pretaxTotal" label="合计（扣税前）" min-width="200px">
						<template scope="scope">
				          	<el-input size="small" v-model="scope.row.pretaxTotal" @change="handleEdit($event,'pretaxTotal')"></el-input>
				        </template>
					</el-table-column>-->
					<el-table-column prop="perPayTotal" label="保险缴费合计(个人)" width="100" :formatter="perPayTotalFormatter"></el-table-column>
					<el-table-column prop="comPayTotal" label="保险缴费合计(单位)" width="100" :formatter="comPayTotalFormatter"></el-table-column>
					<el-table-column label="保险缴纳" width="100">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">详情</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="payTax" label="扣税" width="100"></el-table-column>
					<el-table-column prop="realHair" label="实发" width="100"></el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			ruleForm2: {
				organNo: '',
				userNo: "",
				custName: "",
				diffType: ''
			},
			socialInfoData: [
				{
					month: "",
					userNo: "",
					custName: "",
					wagesBase: "",
					wagesPerf: "",
					postPension: "",
					phonePension: "",
					createdBy: "",
					createdDate: ""
				}
			],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			//差异列表
			diffTypeList: [
				{diffTypeNo: "0",diffTypeName: "全部"},
				{diffTypeNo: "1",diffTypeName: "无差异"},
				{diffTypeNo: "2",diffTypeName: "有差异"},
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
		this.ruleForm2.organNo = '';
		this.ruleForm2.userNo = '';
		this.ruleForm2.custName = '';
		this.ruleForm2.diffType = '';
		//工资详情列表
		this.queryWageInfoList();
		//公司列表查询
		this.queryCompList();
//		//部门列表查询
//		this.queryDerpList();
	},
	methods: {
		perPayTotalFormatter(row, column) {
	      return (Number(row.perEndmPay) + Number(row.perMediPay) + Number(row.perUnemPay) +Number(row.perEmplPay) +Number(row.perMatePay) + Number(row.perHousePay)).toFixed(2);
	    },
	    comPayTotalFormatter(row, column) {
	      return (Number(row.comEndmPay) + Number(row.comMediPay) + Number(row.comUnemPay) +Number(row.comMatePay) + Number(row.comHousePay)).toFixed(2);
	    },
		handleInfo(index, row) {
			sessionStorage.setItem('editSecurity_userNo', row.userNo);
			sessionStorage.setItem('editSecurity_batchNo', row.batchNo);
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
					//工资详情列表
					self.queryWageInfoList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.userNo = '';
			this.ruleForm2.custName = '';
			this.ruleForm2.diffType = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//工资详情列表
			this.queryWageInfoList();
		},
		//编辑单元格
		handleEdit(val,valKey,row) {
			console.log('row',row)
			let params = {
				batchNo: sessionStorage.getItem('entryWage_batchNo'),
				userNo : row.userNo,
				livingPension: row.livingPension,
				perEndmPay: row.perEndmPay,
				perMediPay: row.perMediPay,
				perUnemPay: row.perUnemPay,
				perEmplPay: row.perEmplPay,
				perMatePay: row.perMatePay,
				perHousePay: row.perHousePay,
				pretaxTotal: row.pretaxTotal
			};
			params[valKey] = val;
			//工资信息录入
			this.modWageInfo(params);
		},
		//自动计算
		autoCalc() {
			
			this.autoCaclWage();
		},
		save() {
			const self = this;
//			self.$refs.formdata2.validate(valid => {
//		        if (valid) {
//		        	
		          	let params = {
						batchNo: sessionStorage.getItem('entryWage_batchNo'),
						userNo : self.socialInfoData[0].userNo,
    					perEndmPay: self.socialInfoData[0].perEndmPay,
						perMediPay: self.socialInfoData[0].perMediPay,
						perUnemPay: self.socialInfoData[0].perUnemPay,
						perEmplPay: self.socialInfoData[0].perEmplPay,
						perMatePay: self.socialInfoData[0].perMatePay,
						perHousePay: self.socialInfoData[0].perHousePay,
						pretaxTotal: self.socialInfoData[0].pretaxTotal,
						wagesBase: self.socialInfoData[0].wagesBase,  // 基础工资
						postPension: self.socialInfoData[0].postPension,  // 岗位工资
						wagesPerf: self.socialInfoData[0].wagesPerf, // 绩效工资
						phonePension: self.socialInfoData[0].phonePension,// 通讯补贴
						trafficPension: self.socialInfoData[0].trafficPension, // 交通补贴
						livingPension: self.socialInfoData[0].livingPension,  // 生活补贴
						otherPension: self.socialInfoData[0].otherPension, // 其他补贴
						payBonus: self.socialInfoData[0].payBonus, // 绩效奖金
						overtimePay: self.socialInfoData[0].overtimePay,  // 加班工资
						lateArrivalPay: self.socialInfoData[0].lateArrivalPay, // 病事假扣款
						absentPay: self.socialInfoData[0].absentPay, // 旷工扣款
						otherCutPay: self.socialInfoData[0].otherCutPay,
						payTax: self.socialInfoData[0].payTax,
						realHair: self.socialInfoData[0].realHair
		          	}
		          	//保存修改
		          	self.modWageInfo(params);
//		        }
//	       })
		},
		queryWageInfoList() {
			let self = this;
			let batchNo = sessionStorage.getItem('entryWage_batchNo');
			let params = {
				batchNo: batchNo,
				organNo: self.ruleForm2.organNo,
				userNo: self.ruleForm2.userNo,
				custName: self.ruleForm2.custName,
				diffType: self.ruleForm2.diffType
			}
			self.$axios.get(baseURL+'/wage/querySingleWageInfo',{params: params})
			.then((res) => {
				console.log('wageInfo',res);
				if(res.data.code === "S00000") {
					self.socialInfoData = res.data.data.models;
//					let perPayTotal= Number(self.socialInfoData[0].perEndmPay) + Number(self.socialInfoData[0].perMediPay) + Number(self.socialInfoData[0].perUnemPay) +Number(self.socialInfoData[0].perEmplPay) +Number(self.socialInfoData[0].perMatePay) + Number(self.socialInfoData[0].perHousePay);
//					let comPayTotal= Number(self.socialInfoData[0].comEndmPay) + Number(self.socialInfoData[0].comMediPay) + Number(self.socialInfoData[0].comUnemPay) +Number(self.socialInfoData[0].comEmplPay) +Number(self.socialInfoData[0].comMatePay) + Number(self.socialInfoData[0].comHousePay);
//					self.socialInfoData[0].perPayTotal = perPayTotal.toFixed(2);
//					self.socialInfoData[0].comPayTotal = comPayTotal.toFixed(2);
//					self.$set(self.socialInfoData, 0, self.socialInfoData[0]);
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		modWageInfo(params) {
			let self = this;
			self.$axios.post(baseURL+'/wage/addCustPayInfo',params)
			.then((res) => {
				console.log('modWage',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
//					self.$router.push('/wageProcess_manage');
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		autoCaclWage() {
			let self = this;
			let params = {
				perEndmPay: self.socialInfoData[0].perEndmPay,
				perMediPay: self.socialInfoData[0].perMediPay,
				perUnemPay: self.socialInfoData[0].perUnemPay,
				perEmplPay: self.socialInfoData[0].perEmplPay,
				perMatePay: self.socialInfoData[0].perMatePay,
				perHousePay: self.socialInfoData[0].perHousePay,
				pretaxTotal: self.socialInfoData[0].pretaxTotal,
				wagesBase: self.socialInfoData[0].wagesBase,  // 基础工资
				postPension: self.socialInfoData[0].postPension,  // 岗位工资
				wagesPerf: self.socialInfoData[0].wagesPerf, // 绩效工资
				phonePension: self.socialInfoData[0].phonePension,// 通讯补贴
				trafficPension: self.socialInfoData[0].trafficPension, // 交通补贴
				livingPension: self.socialInfoData[0].livingPension,  // 生活补贴
				otherPension: self.socialInfoData[0].otherPension, // 其他补贴
				payBonus: self.socialInfoData[0].payBonus, // 绩效奖金
				overtimePay: self.socialInfoData[0].overtimePay,  // 加班工资
				lateArrivalPay: self.socialInfoData[0].lateArrivalPay, // 病事假扣款
				absentPay: self.socialInfoData[0].absentPay, // 旷工扣款
				otherCutPay: self.socialInfoData[0].otherCutPay
			}
			self.$axios.post(baseURL+'/wage/reckonSingleWage', params)
			.then(function(res) {
				console.log('cacl',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					self.socialInfoData[0].payTax = res.data.data.payTax;//回写扣税
					self.socialInfoData[0].realHair = res.data.data.realHair;//回写实发
					self.$set(self.socialInfoData, 0, self.socialInfoData[0]);
				}
				
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
		queryDerpList() {
			let self = this;
			let organNo = sessionStorage.getItem('entryWage_organNo');
			let params = {
				organNo: organNo
			}
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