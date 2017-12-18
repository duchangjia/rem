<template>
	<div class="edit_rank">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置" siji="职级薪酬标准修改"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">职级薪酬标准修改</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('cParmDetal')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="cParmDetal" :inline="true" :rules="rules" :model="cParmDetal" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="模版编号" prop="applyNo">
							<el-input v-model="cParmDetal.applyNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col> 
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-select v-model="cParmDetal.organNo" value-key="organNo" :disabled="true">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="模版名称" prop="applyName">
							<el-input v-model="cParmDetal.applyName" placeholder=""></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级" prop="rank">
							<el-select v-model="cParmDetal.rank">
								<el-option v-for="item in rankList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="薪资标准下限" prop="salaryFloor">
							<el-input v-model="cParmDetal.salaryFloor"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="薪资标准上限" prop="salaryTop">
							<el-input v-model="cParmDetal.salaryTop"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差标准（人/天）" prop="businessStandard">
							<el-input v-model="cParmDetal.businessStandard"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="cParmDetal.remark"></el-input>
						</el-form-item>
					</el-col>	
						
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import current from '../../common/current_position.vue'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			var checkSalaryTop = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入薪资标准上限'));
				} else if(Number(value) <= Number(this.cParmDetal.salaryFloor)) {
					callback(new Error('上限值必须大于下限值!'));
				} else {
					callback();
				}
			};
			var checksalaryFloor = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入薪资标准下限'));
				} else if(Number(value) >= Number(this.cParmDetal.SalaryTop)) {
					callback(new Error('下限值必须小于上限值!'));
				} else {
					callback();
				}
			};
			return {
				cParmDetal: {
					applyNo: "",
					organName: "",
					applyName: "",
					rank: "",
					salaryFloor: "",
					salaryTop: "",
					businessStandard: "",
					remark: ""
				},
				rankList: [],
				//公司列表
				compList: [],
				rules: {
					compName: [
//						{ required: true, message: '公司名称不能为空', trigger: 'blur' }
					],
					applyName: [
						{required: true,message: '模版名称不能为空',trigger: 'blur'}
					],
					rank: [
						{required: true,message: '职级不能为空',trigger: 'blur'}
					],
					salaryFloor: [
						{required: true,validator: checksalaryFloor,trigger: 'blur'},
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'blur'}
					],
					salaryTop: [
						{required: true,validator: checkSalaryTop,trigger: 'blur'},
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额", trigger: 'blur'}
					],
					businessStandard: [
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的天数", trigger: 'blur'}
					],
					remark: [
						{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
					]
				}
			}
		},
		components: {
			current
		},
		created() {
			//查询职级薪酬模板详情
			this.queryCParmDtl();
			//查询公司列表
			this.queryCompList();
			//查询职级列表
			this.queryCans();
		},
		methods: {
			save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let params = {
							applyNo: self.cParmDetal.applyNo,
							organNo: self.cParmDetal.organNo,
							applyName: self.cParmDetal.applyName,
							rank: self.cParmDetal.rank,
							salaryFloor: self.cParmDetal.salaryFloor,
							salaryTop: self.cParmDetal.salaryTop,
							businessStandard: self.cParmDetal.businessStandard,
							remark: self.cParmDetal.remark
						}
						//修改职级薪酬标准模板
						self.modCparm(params);

					} else {
						return false;
					}
				});
			},
			queryCParmDtl() {
				const self = this;
				let applyNo = sessionStorage.getItem('editRank_applyNo');
				let organNo = sessionStorage.getItem('editRank_organNo');
				let params = {
					applyNo: applyNo,
					organNo: organNo
				}	
				self.$axios.get(baseURL + '/RankSalaryTemplate/queryCParmDtl/' + params.organNo + '/' + params.applyNo)
					.then((res) => {
						console.log('CParmDtl',res);
						self.cParmDetal = res.data.data;
						for(let k in self.cParmDetal) {
							self.cParmDetal[k] = self.cParmDetal[k] + '';
						}
						
					}).catch((err) => {
						console.log(err);
					})
			},
			modCparm(params) {
				const self = this;
				self.$axios.put(baseURL + '/RankSalaryTemplate/modCparm', params)
				.then((res) => {
					console.log('modCparm',res);
					if(res.data.code === "S00000") {
						self.$message({ message: res.data.retMsg, type: 'success' });
						self.$router.push('/rank');
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryAllCompany')
				.then((res) => {
					console.log('CompList',res);
					self.compList = res.data.data;
				}).catch((err) => {
					console.log(err);
				})
			},
			queryCans() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then((res) => {
					console.log('queryCans',res);
					if(res.data.code === "S00000") {
						self.rankList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	}
</script>

<style>
.edit_rank {
	padding-left: 20px;
	padding-bottom: 20px;
	width: 100%;
}
	
	
</style>