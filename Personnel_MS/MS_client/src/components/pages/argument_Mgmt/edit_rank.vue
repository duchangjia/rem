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
						<el-form-item label="出差标准（人/天）">
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
				rankList: ['B10-高级开发软件工程师', 'B5-中级开发软件工程师', 'B5-UI'],
				//公司列表
				compList: [
					{organName: "上海分公司",organNo: '01'},
					{organName: "魔方分公司深圳分公司",organNo: 'p1'},
					{organName: "深圳前海橙色魔方信息技术有限公司5666666666666",organNo: '0'},
					{organName: "上海魔方分公司",organNo: '1002'},
					{organName: "魔方南山分公司",organNo: '1001'}
				],
				rules: {
					compName: [
//						{ required: true, message: '公司名称不能为空', trigger: 'blur' }
					],
					applyName: [{
						required: true,
						message: '模版名称不能为空',
						trigger: 'blur'
					}],
					rank: [{
						required: true,
						message: '职级不能为空',
						trigger: 'blur'
					}],
					salaryFloor: [{
						required: true,
						validator: checksalaryFloor,
						trigger: 'blur'
					}],
					salaryTop: [{
						required: true,
						validator: checkSalaryTop,
						trigger: 'blur'
					}],
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
			const self = this;
			let applyNo = self.$route.params.applyNo;
			let organNo = self.$route.params.organNo;
			let params = {
				applyNo: applyNo,
				organNo: organNo
			}
			//查询职级薪酬模板详情
			self.queryCParmDtl(params);
			//查询公司列表
			self.queryCompList();
			//查询职级列表
			self.queryCans();
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
			queryCParmDtl(params) {
				const self = this;
				self.$axios.get(baseURL + '/RankSalaryTemplate/queryCParmDtl/' + params.organNo + '/' + params.applyNo)
					.then((res) => {
						console.log('CParmDtl',res);
						self.cParmDetal = res.data.data;
						
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
				.then(function(res) {
					console.log('CompList',res);
					self.compList = res.data.data;
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCans() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then(function(res) {
					console.log('queryCans',res);
					if(res.data.code === "S00000") {
						self.rankList = res.data.data;
					}
					
				}).catch(function(err) {
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