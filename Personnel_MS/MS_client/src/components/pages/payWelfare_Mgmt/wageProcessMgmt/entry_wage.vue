<template>
	<div class="entry_wage">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">录入工资</span>
				
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
					<div class="queryButton_wrapper" style="position: relative;">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
						<div class="titleBtn_wrapper" >
							<el-button type="primary" class="btn-primary" @click="autoCalcAll">自动计算</el-button>
							<el-button type="primary" class="btn-primary" @click="saveAll">保存</el-button>
						</div>
					</div>
				</el-form>
				
				<el-table :data="socialInfoData" border fit stripe style="width: 100%;">
					<el-table-column prop="month" label="工资月份" width="100" min-height="60px"></el-table-column>
					<el-table-column prop="userNo" label="工号" width="100"></el-table-column>
					<el-table-column prop="custName" label="姓名" width="100"></el-table-column>
					<el-table-column prop="wagesBase" label="基础工资" min-width="200px"  :formatter="commonFormatter">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="wagesBase">
									<el-input size="small" v-model="scope.row.wagesBase" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="wagesPerf" label="绩效工资" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="wagesPerf">
									<el-input size="small" v-model="scope.row.wagesPerf" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="postPension" label="岗位津贴" :show-overflow-tooltip="true" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="postPension">
									<el-input size="small" v-model="scope.row.postPension" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="phonePension" label="通讯补贴" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="phonePension">
									<el-input size="small" v-model="scope.row.phonePension" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
							
						</template>
					</el-table-column>
					<el-table-column prop="trafficPension" label="交通补贴" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="trafficPension">
									<el-input size="small" v-model="scope.row.trafficPension" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="livingPension" label="生活补助" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="livingPension">
									<el-input size="small" v-model="scope.row.livingPension" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="overtimePay" label="加班工资" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="overtimePay">
									<el-input size="small" v-model="scope.row.overtimePay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="otherPension" label="其他补贴" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="otherPension">
									<el-input size="small" v-model="scope.row.otherPension" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="lateArrivalPay" label="迟到早退" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="lateArrivalPay">
									<el-input size="small" v-model="scope.row.lateArrivalPay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="leavePay" label="病事假" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="leavePay">
									<el-input size="small" v-model="scope.row.leavePay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="absentPay" label="旷工" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="absentPay">
									<el-input size="small" v-model="scope.row.absentPay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="perCommercialPay" label="商保(个人)" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="perCommercialPay">
									<el-input size="small" v-model="scope.row.perCommercialPay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="comCommercialPay" label="商保(单位)" min-width="200px">
						<template scope="scope">
							<el-form :model="scope.row" :rules="rules1" class="demo-ruleForm">
								<el-form-item label="" prop="comCommercialPay">
									<el-input size="small" v-model="scope.row.comCommercialPay" @change="handleEdit($event, scope.$index, scope.row)"></el-input>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="perPayTotal" label="保险缴费合计(个人)" width="100" :formatter="perPayTotalFormatter"></el-table-column>
					<el-table-column prop="comPayTotal" label="保险缴费合计(单位)" width="100" :formatter="comPayTotalFormatter"></el-table-column>
					<el-table-column label="保险缴纳" width="100">
						<template scope="scope">
							<span class="link" @click="handleInfo(scope.$index, scope.row)">详情</span>
						</template>
					</el-table-column>
					<el-table-column prop="payTax" label="扣税" width="100"></el-table-column>
					<el-table-column prop="realHair" label="实发" width="100"></el-table-column>
					<el-table-column label="操作" width="150">
						<template scope="scope">
							<el-button type="text" size="small" @click="handleCalc(scope.$index, scope.row)">自动计算</el-button>
							<el-button type="text" size="small" @click="handleSave(scope.$index, scope.row)">保存修改</el-button>
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
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			//提示信息
			tipsMsg: {},
			ruleForm2: {
				organNo: '',
				userNo: "",
				custName: "",
				diffType: ''
			},
			socialInfoData: [
				{wagesBase: ''}
			],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			//差异列表
			diffTypeList: [
				{diffTypeNo: "0",diffTypeName: "无差异"},
				{diffTypeNo: "1",diffTypeName: "有差异"},
			],
			rules: {
				startDate: [
				]
			},
			//输入工资数据校验
			rules1: {
				wagesBase: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				wagesPerf: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				postPension: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				phonePension: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				trafficPension: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				livingPension: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				overtimePay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				otherPension: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				lateArrivalPay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				leavePay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				absentPay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				perCommercialPay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
				],
				comCommercialPay: [
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'change' }
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
		commonFormatter(row, column) {
			console.log('fomatter row', row);
			console.log('fomatter column', column);
			// return ;
		},
		perPayTotalFormatter(row, column) {
	      return (Number(row.perEndmPay) + Number(row.perMediPay) + Number(row.perUnemPay) +Number(row.perEmplPay) +Number(row.perMatePay) + Number(row.perHousePay)).toFixed(2);
	    },
	    comPayTotalFormatter(row, column) {
	      return (Number(row.comEndmPay) + Number(row.comMediPay) + Number(row.comUnemPay) +Number(row.comMatePay) + Number(row.comHousePay)).toFixed(2);
	    },
		handleInfo(index, row) {
			sessionStorage.setItem('editSecurity_idCard', row.idCard);
			sessionStorage.setItem('editSecurity_batchNo', row.batchNo);
			sessionStorage.setItem('editSecurity_month', row.month);
			sessionStorage.setItem('editSecurity_userNo', row.userNo);
			this.$router.push("/edit_security");
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
		handleEdit(val,index, row) {
			console.log('val',val);
			console.log('row',row);
			if(/^\d{1,14}(\.\d{1,2})?$/.test(val)) {
				console.log('test');
				let params = {};
				let list = [{
					batchNo: row.batchNo,
					userNo : row.userNo,
					livingPension: row.livingPension,
					perEndmPay: row.perEndmPay,
					perMediPay: row.perMediPay,
					perUnemPay: row.perUnemPay,
					perEmplPay: row.perEmplPay,
					perMatePay: row.perMatePay,
					perHousePay: row.perHousePay,
					pretaxTotal: row.pretaxTotal,
					perCommercialPay: row.perCommercialPay,//商保个人
					comCommercialPay: row.comCommercialPay,//商保单位
					wagesBase: row.wagesBase,  // 基础工资
					postPension: row.postPension,  // 岗位工资
					wagesPerf: row.wagesPerf, // 绩效工资
					phonePension: row.phonePension,// 通讯补贴
					trafficPension: row.trafficPension, // 交通补贴
					livingPension: row.livingPension,  // 生活补贴
					otherPension: row.otherPension, // 其他补贴
					overtimePay: row.overtimePay,  // 加班工资
					lateArrivalPay: row.lateArrivalPay, // 病事假扣款
					absentPay: row.absentPay, // 旷工扣款
					otherCutPay: row.otherCutPay
				}];
				params.wageFlowList =list;
				//工资信息录入
				this.modWageInfo(params);
			}
			
		},
		//单项自动计算
		handleCalc(index,row) {
			console.log('row',row);
			let params = {};
			let list = [{
				batchNo: row.batchNo,
				userNo : row.userNo,
				wagesBase: row.wagesBase, //基本工资
				wagesPerf: row.wagesPerf,	//绩效工资
				postPension: row.postPension,	//岗位补贴
				phonePension: row.phonePension,	//通讯补贴
				trafficPension: row.trafficPension, 	//交通补贴
				livingPension: row.livingPension,	//生活补贴
				bonusPerf: row.bonusPerf,	//绩效奖金
				overtimePay: row.overtimePay,	//加班工资
				otherPension: row.otherPension,	//其他补贴
				lateArrivalPay: row.lateArrivalPay,	//迟到早退
				leavePay: row.leavePay,	//病事假
				absentPay: row.absentPay,	//旷工
				perCommercialPay: row.perCommercialPay,	//个人商业保险
				otherCutPay: row.otherCutPay,	//其他扣款
				perHousePay: row.perHousePay,	//个人公积基金
				perEndmPay: row.perEndmPay,	//个人养老
				perMediPay: row.perMediPay,	//个人医疗
				perUnemPay: row.perUnemPay,	//个人失业 
				perEmplPay: row.perEmplPay,	//个人工伤
				perMatePay: row.perMatePay,	//个人生育
				pretaxTotal: row.pretaxTotal	//税前合计
			}]
			params.countWageList = list;
			let self = this;
			self.$axios.post(baseURL+'/wage/reckonSingleWage', params)
			.then((res) => {
				console.log('cacl',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					self.socialInfoData[index].payTax = res.data.data[0].payTax;//回写扣税
					self.socialInfoData[index].realHair = res.data.data[0].realHair;//回写实发
					self.$set(self.socialInfoData, index, self.socialInfoData[index]);
				}
				
			}).catch((err) => {
				console.log('error');
			})
		},
		//单项保存
		handleSave(index,row) {
			let params = {};
			let list = [{
				batchNo: row.batchNo,
				userNo : row.userNo,
				perEndmPay: row.perEndmPay,
				perMediPay: row.perMediPay,
				perUnemPay: row.perUnemPay,
				perEmplPay: row.perEmplPay,
				perMatePay: row.perMatePay,
				perHousePay: row.perHousePay,
				pretaxTotal: row.pretaxTotal,
				perCommercialPay: row.perCommercialPay,//商保个人
				comCommercialPay: row.comCommercialPay,//商保单位
				wagesBase: row.wagesBase,  // 基础工资
				postPension: row.postPension,  // 岗位工资
				wagesPerf: row.wagesPerf, // 绩效工资
				phonePension: row.phonePension,// 通讯补贴
				trafficPension: row.trafficPension, // 交通补贴
				livingPension: row.livingPension,  // 生活补贴
				otherPension: row.otherPension, // 其他补贴
				payBonus: row.payBonus, // 绩效奖金
				overtimePay: row.overtimePay,  // 加班工资
				lateArrivalPay: row.lateArrivalPay, // 病事假扣款
				absentPay: row.absentPay, // 旷工扣款
				otherCutPay: row.otherCutPay,
				payTax: row.payTax,
				realHair: row.realHair
			  }]
			  params.wageFlowList =list;
          	//保存修改
			let self = this;
			console.log('params',params)
			  self.$axios.post(baseURL+'/wage/addCustPayInfo',params)
			.then((res) => {
				console.log('modWage',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		//全部计算
		autoCalcAll() {
			let params = {},
				list = [],
				self = this;

			for(let i=0; i<this.socialInfoData.length; i++) {
				 list.push({
					batchNo: this.socialInfoData[i].batchNo,
					userNo : this.socialInfoData[i].userNo,
					wagesBase: this.socialInfoData[i].wagesBase, //基本工资
					wagesPerf: this.socialInfoData[i].wagesPerf,	//绩效工资
					postPension: this.socialInfoData[i].postPension,	//岗位补贴
					phonePension: this.socialInfoData[i].phonePension,	//通讯补贴
					trafficPension: this.socialInfoData[i].trafficPension, 	//交通补贴
					livingPension: this.socialInfoData[i].livingPension,	//生活补贴
					bonusPerf: this.socialInfoData[i].bonusPerf,	//绩效奖金
					overtimePay: this.socialInfoData[i].overtimePay,	//加班工资
					otherPension: this.socialInfoData[i].otherPension,	//其他补贴
					lateArrivalPay: this.socialInfoData[i].lateArrivalPay,	//迟到早退
					leavePay: this.socialInfoData[i].leavePay,	//病事假
					absentPay: this.socialInfoData[i].absentPay,	//旷工
					perCommercialPay: this.socialInfoData[i].perCommercialPay,	//个人商业保险
					otherCutPay: this.socialInfoData[i].otherCutPay,	//其他扣款
					perHousePay: this.socialInfoData[i].perHousePay,	//个人公积基金
					perEndmPay: this.socialInfoData[i].perEndmPay,	//个人养老
					perMediPay: this.socialInfoData[i].perMediPay,	//个人医疗
					perUnemPay: this.socialInfoData[i].perUnemPay,	//个人失业 
					perEmplPay: this.socialInfoData[i].perEmplPay,	//个人工伤
					perMatePay: this.socialInfoData[i].perMatePay,	//个人生育
					pretaxTotal: this.socialInfoData[i].pretaxTotal	//税前合计
				})
			}
				
			params.countWageList = list;
			self.$axios.post(baseURL+'/wage/reckonSingleWage', params)
			.then((res) => {
				console.log('caclAll',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					for(let index=0;index<self.socialInfoData.length;index++) {
						// if(self.socialInfoData[index].batchNo == res.data.data[])
						self.socialInfoData[index].payTax = res.data.data[index].payTax;//回写扣税
						self.socialInfoData[index].realHair = res.data.data[index].realHair;//回写实发
						self.$set(self.socialInfoData, index, self.socialInfoData[index]);
					}
					
				}
				
			}).catch((err) => {
				console.log('error');
			})
			
			
		},
		//全部保存
		saveAll() {
			let params = {},
				list = [];
			for(let i=0; i<this.socialInfoData.length; i++) {
				list.push({
					batchNo: this.socialInfoData[i].batchNo,
					userNo : this.socialInfoData[i].userNo,
					perEndmPay: this.socialInfoData[i].perEndmPay,
					perMediPay: this.socialInfoData[i].perMediPay,
					perUnemPay: this.socialInfoData[i].perUnemPay,
					perEmplPay: this.socialInfoData[i].perEmplPay,
					perMatePay: this.socialInfoData[i].perMatePay,
					perHousePay: this.socialInfoData[i].perHousePay,
					pretaxTotal: this.socialInfoData[i].pretaxTotal,
					perCommercialPay: this.socialInfoData[i].perCommercialPay,//商保个人
					comCommercialPay: this.socialInfoData[i].comCommercialPay,//商保单位
					wagesBase: this.socialInfoData[i].wagesBase,  // 基础工资
					postPension: this.socialInfoData[i].postPension,  // 岗位工资
					wagesPerf: this.socialInfoData[i].wagesPerf, // 绩效工资
					phonePension: this.socialInfoData[i].phonePension,// 通讯补贴
					trafficPension: this.socialInfoData[i].trafficPension, // 交通补贴
					livingPension: this.socialInfoData[i].livingPension,  // 生活补贴
					otherPension: this.socialInfoData[i].otherPension, // 其他补贴
					payBonus: this.socialInfoData[i].payBonus, // 绩效奖金
					overtimePay: this.socialInfoData[i].overtimePay,  // 加班工资
					lateArrivalPay: this.socialInfoData[i].lateArrivalPay, // 病事假扣款
					absentPay: this.socialInfoData[i].absentPay, // 旷工扣款
					otherCutPay: this.socialInfoData[i].otherCutPay,
					payTax: this.socialInfoData[i].payTax,
					realHair: this.socialInfoData[i].realHair
				})
			}
				
			params.wageFlowList = list;
			//保存修改
			let self = this;
			self.$axios.post(baseURL+'/wage/addCustPayInfo',params)
			.then((res) => {
				console.log('modWageAll',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
				}
			}).catch((err) => {
				console.log('error');
			})
			
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
					console.log('socialInfoData', self.socialInfoData)
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
					
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
			.then((res) => {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
			}).catch((err) => {
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
			.then((res) => {
				console.log('DerpList',res);
				if(res.data.code === "S00000") {
					self.departList = res.data.data;
				}
				
			}).catch((err) => {
				console.log(err);
			})
		}
	}
}
</script>


<style>
.entry_wage {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.entry_wage .imExport-btn-item {
    margin-right: 20px;
}
.entry_wage .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.entry_wage .el-table .cell .el-form-item {
    margin-bottom: 20px;
    margin-top: 20px;
}
.entry_wage .el-table .el-form-item__content {
    line-height: normal;
    width: 164px;
}
.entry_wage .titleBtn_wrapper {
	position: absolute; 
	right: -426px;
	top:2px;
}
</style>