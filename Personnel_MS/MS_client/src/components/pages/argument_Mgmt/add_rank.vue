<template>
	<div class="add_rank">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置" siji="职级薪酬标准新增"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">职级薪酬标准新增</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-select v-model="formdata.organNo" value-key="organNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="模版名称" prop="applyName">
							<el-input v-model="formdata.applyName"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级" prop="rank">
							<el-select v-model="formdata.rank">
								<el-option v-for="item in rankList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="薪资标准下限" prop="salaryFloor">
							<el-input v-model="formdata.salaryFloor"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="薪资标准上限" prop="salaryTop">
							<el-input v-model="formdata.salaryTop"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差标准（人/天）" prop="businessStandard">
							<el-input v-model="formdata.businessStandard"></el-input>
						</el-form-item>
					</el-col>	
					<el-col :span="24">
						<el-form-item label="备注" prop="remark">
							<el-input type="textarea" v-model="formdata.remark"></el-input>
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
				} else if(Number(value) <= Number(this.formdata.salaryFloor)) {
					console.log('top <')
					callback(new Error('上限值必须大于下限值!'));
				} else {
					callback();
				}
			};
			var checksalaryFloor = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入薪资标准下限'));
				} else if(Number(value) >= Number(this.formdata.SalaryTop)) {
					console.log('floor >')
					callback(new Error('下限值必须小于上限值!'));
				} else {
					callback();
				}
			};
			
			var checkBusinessStandard = (rule, value, callback) => {
				if(value && !/^\d*$/.test(value)) {
					callback(new Error('请输入出差标准天数'));
				} else {
					callback();
				}
			};
			return {
				formdata: {
					organNo: "",
					compName: '',
					applyName: "",
					rank: '',
					salaryFloor: '',
					salaryTop: '',
					businessStandard: '',
					remark: ""
				},
				rankList: [],
				//公司列表
				compList: [],
				rules: {
					compName: [
						{ required: true, message: '公司名称不能为空', trigger: 'blur' }
					],
					applyName: [
						{ required: true, message: '模版名称不能为空', trigger: 'blur' }
					],
					rank: [
						{ required: true, message: '职级不能为空', trigger: 'blur' }
					],
					salaryFloor: [
						{required: true,validator: checksalaryFloor,trigger: 'blur'},
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额",trigger: 'blur'}
					],
					salaryTop: [
						{required: true,validator: checkSalaryTop,trigger: 'blur'},
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额",trigger: 'blur'}
					],
					businessStandard: [
						{ message: '请输入出差标准天数', trigger: 'blur' },
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的天数"}
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
			//查询公司列表
			this.queryCompList();
			//查询职级列表
			this.queryCans();
		},
		methods: {
			save(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if(valid) {
						let params = {
							organNo: self.formdata.organNo,
							applyName: self.formdata.applyName,
							rank: self.formdata.rank,
							salaryFloor: self.formdata.salaryFloor,
							salaryTop: self.formdata.salaryTop,
							businessStandard: self.formdata.businessStandard,
							remark: self.formdata.remark
						}
						//新增职级模版
						self.addCparm(params);

					} else {
						return false;
					}
				});
			},
			addCparm(params) {
				const self = this;
				self.$axios.post(baseURL + '/RankSalaryTemplate/addCparm', params)
				.then((res) => {
					console.log('addCparm',res);
					self.$message({ message: '操作成功', type: 'success' });
					self.$router.push('/rank');
				}).catch((err) => {
					console.log('error')
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
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

<style scoped>
	.add_rank {
		padding-left: 20px;
		padding-bottom: 20px;
		width: 100%;
	}

</style>