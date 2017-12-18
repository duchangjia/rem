<template>
	<div class="welfare_info">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="录入工资" siji="保险详情"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">保险详情</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('socialData')">保存</el-button>			
			</div>
			<div class="add-wrapper">
				<el-form ref="userInfo" :inline="true" :rules="rules1" :model="userInfo" label-width="120px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="organName">
						    <el-input v-model="userInfo.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称" prop="derpName">
						    <el-input v-model="userInfo.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="userInfo.userNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="userInfo.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
							<el-select v-model="userInfo.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
							<el-select v-model="userInfo.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">详情信息
						<span class="item-title-tips">提示:（1）输入框中反显值为财务人员依据社保局导入数据展示；（2）如果系统计算值与社保局导入数据不一致时，输入框下方区域红色高亮显示；</span>
					</el-col>
				</el-form>
				<el-form ref="socialData" :inline="true" :rules="rules2" :model="socialData" label-width="120px">
					<el-col :sm="24" :md="12">
						<el-form-item label="养老保险(个人)" prop="perEndmPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perEndmPay"></el-input>
					  		<span class="tip" v-if="socialData.perEndmPay!=socialData.countPerEndmPay">系统计算值={{socialData.countPerEndmPay || 0}}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="养老保险(单位)" prop="comEndmPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comEndmPay"></el-input>
					  		<span class="tip" v-if="socialData.comEndmPay!=socialData.countComEndmPay">系统计算值={{socialData.countComEndmPay || 0 }}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="医疗保险(个人)" prop="perMediPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perMediPay"></el-input>
					  		<span class="tip" v-if="socialData.perMediPay!=socialData.countPerMediPay">系统计算值={{socialData.countPerMediPay || 0 }}</span>
						</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="医疗保险(单位)" prop="comMediPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comMediPay"></el-input>
					  		<span class="tip" v-if="socialData.comMediPay!=socialData.countComMediPay">系统计算值={{socialData.countComMediPay || 0 }}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="失业保险(个人)" prop="perUnemPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perUnemPay"></el-input>
					  		<span class="tip" v-if="socialData.perUnemPay!=socialData.countPerUnemPay">系统计算值={{socialData.countPerUnemPay || 0 }}</span>
						</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="失业保险(单位)" prop="comUnemPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comUnemPay"></el-input>
					  		<span class="tip" v-if="socialData.comUnemPay!=socialData.countComUnemPay">系统计算值={{socialData.countComUnemPay || 0 }}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工伤保险(个人)" prop="perEmplPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perEmplPay"></el-input>
					  		<span class="tip" v-if="socialData.perEmplPay!=socialData.countPerEmplPay">系统计算值={{socialData.countPerEmplPay || 0 }}</span>
						</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工伤保险单位)" prop="comEmplPay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comEmplPay"></el-input>
					  		<span class="tip" v-if="socialData.comEmplPay!=socialData.countComEmplPay">系统计算值={{socialData.countComEmplPay || 0 }}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="生育保险(个人)" prop="perMatePay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perMatePay"></el-input>
					  		<span class="tip" v-if="socialData.perMatePay!=socialData.countPerMatePay">系统计算值={{socialData.countPerMatePay || 0 }}</span>
						</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="生育保险单位)" prop="comMatePay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comMatePay"></el-input>
					  		<span class="tip" v-if="socialData.comMatePay!=socialData.countComMatePay">系统计算值={{socialData.countComMatePay || 0 }}</span>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公积金(个人)" prop="perHousePay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.perHousePay"></el-input>
					  		<span class="tip" v-if="socialData.perHousePay!=socialData.countPerHousePay">系统计算值={{socialData.countPerHousePay || 0 }}</span>
						</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="公积(金单位)" prop="comHousePay" class="formLeft">
					      	<el-input type="text" placeholder="" v-model="socialData.comHousePay"></el-input>
					  		<span class="tip" v-if="socialData.comHousePay!=socialData.countComHousePay">系统计算值={{socialData.countComHousePay || 0 }}</span>
						</el-form-item>	
					</el-col>	
					  	
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			userInfo: {},
			socialData: {},
			//岗位列表
			custPostList: [],
			//职级列表
			custClassList: [],
			rules1: {},
			rules2: {
				applyName: [
					{ required: true, message: '请输入模版名称', trigger: 'blur' }
				],
				perEndmPay: [
					{ required: true, message: '(请输入养老保险个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comEndmPay: [
					{ required: true, message: '(请输入养老保险单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				perMediPay: [
					{ required: true, message: '(请输入医疗保险个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comMediPay: [
					{ required: true, message: '(请输入医疗保险单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				perUnemPay: [
					{ required: true, message: '(请输入失业保险个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comUnemPay: [
					{ required: true, message: '(请输入失业保险单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				perEmplPay: [
					{ required: true, message: '(请输入工伤保险个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comEmplPay: [
					{ required: true, message: '(请输入工伤保险单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				perMatePay: [
					{ required: true, message: '(请输入生育保险个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comMatePay: [
					{ required: true, message: '(请输入生育保险单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				perHousePay: [
					{ required: true, message: '(请输入住房公积金个人支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				],
				comHousePay: [
					{ required: true, message: '(请输入住房公积金单位支付)', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "(请输入正确的金额)" }
				]
			}
		}
	},
	components: {
		current
	},
	created(){
		const self = this;
		
		//查询保险详情
		self.querySocialInfo();
		//查询用户详情
		self.queryUserInfo();
		//查询岗位列表
		this.queryCustPostList();
		//查询职级列表
		this.queryCustClassList();
	},
	methods: {
		save(formName) {
			const self = this;
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		let params = {
						batchNo: sessionStorage.getItem('editSecurity_batchNo'),
						userNo: sessionStorage.getItem('editSecurity_userNo'),
						perEndmPay: self.socialData.perEndmPay,
						comEndmPay: self.socialData.comEndmPay,
						perMediPay: self.socialData.perMediPay,
						comMediPay: self.socialData.comMediPay,
						perUnemPay: self.socialData.perUnemPay,
						comUnemPay: self.socialData.comUnemPay,
						perEmplPay: self.socialData.perEmplPay,
						comEmplPay: self.socialData.comEmplPay,
						perMatePay: self.socialData.perMatePay,
						comMatePay: self.socialData.comMatePay,
						perHousePay: self.socialData.perHousePay,
						comHousePay: self.socialData.comHousePay,
	          		};
	          		//修改保险信息
	          		self.updateSocialInfo(params);
	           	 	
	          	} else {
	            	return false;
	          	}
	        });
		},
		queryUserInfo() {
			const self = this;
			let userNo = sessionStorage.getItem('editSecurity_userNo');
			let params = {
				userNo: userNo
			}
			console.log('userNO', params.userNo);
			self.$axios.get(baseURL+'/wage/queryCustInfoByUserNo' ,{params: params})
			.then((res) => {
				console.log('userInfo',res);
				if(res.data.code == "S00000") {
					self.userInfo = res.data.data;
				}
			}).catch((err) => {
				console.log('err');
			})
		},
		querySocialInfo() {
			const self = this;
			let idCard = sessionStorage.getItem('editSecurity_idCard');
			let batchNo = sessionStorage.getItem('editSecurity_batchNo');
			let month = sessionStorage.getItem('editSecurity_month');
			let params = {
				idCard: idCard,
				batchNo: batchNo,
				month: month
			}
			console.log('params', params);
			self.$axios.get(baseURL+'/wage/queryDiffPay' ,{params: params})
			.then((res) => {
				console.log('socialInfo',res);
				if(res.data.code == "S00000") {
					self.socialData = res.data.data;
					for(let k in self.socialData) {
						self.socialData[k] = self.socialData[k] + '';
						if(self.socialData[k] === '') {
							self.socialData[k] = '0';
						}
					}

				}
			}).catch((err) => {
				console.log('err');
			})
		},
		updateSocialInfo(params) {
			const self = this;
			self.$axios.post(baseURL+'/wage/addDiffPay',params)
  			.then((res) => {
  				console.log("updateSocialInfo",res);
  				if(res.data.code === "S00000") {
  					self.$message({ message: '操作成功', type: 'success' });
  					self.$router.push('/entry_wage');
  				}
  			}).catch((err) => {
  				console.log(err)
  			})
		},
		queryCustPostList() {
			let self = this;
			self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
			.then((res) => {
				console.log('CustPost',res);
				if(res.data.code === "S00000") {
					self.custPostList = res.data.data;
				}
				
			}).catch((err) => {
				console.log('error');
			})
		},
		queryCustClassList() {
			let self = this;
			self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
			.then((res) => {
				console.log('CustClass',res);
				if(res.data.code === "S00000") {
					self.custClassList = res.data.data;
				}
			}).catch((err) => {
				console.log('error');
			})
		},
	}
}
</script>

<style>
.welfare_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.welfare_info .tip {
    position: absolute;
    left: 0;
    bottom: -28px;
    font-size: 12px;
    color: #ff4949;
}
.welfare_info .el-form-item__error {
    left: 105px;
}
.item-title-tips {
	color: #999999;
	padding-left: 20px;
}
</style>