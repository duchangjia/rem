<template>
	<div class="edit_rank">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置" siji="职级薪酬标准修改"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">职级薪酬标准修改</span>
				<el-button type="primary" class="conserve" @click="save('cParmDetal')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="cParmDetal" :rules="rules" :model="cParmDetal" label-width="120px">
					<el-form-item label="模版编号" prop="applyNo">
						<el-input v-model="cParmDetal.applyNo" :disabled="true"></el-input>
					</el-form-item>
					<!--<el-form-item label="公司名称" prop="compName">
						<el-input v-model="cParmDetal.compName" :disabled="true"></el-input>
					</el-form-item>-->
					<el-form-item label="公司名称">
						<el-select v-model="cParmDetal.organNo" value-key="compOrgNo" :disabled="true">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="模版名称" prop="applyName">
						<el-input v-model="cParmDetal.applyName" placeholder=""></el-input>
					</el-form-item>
					<el-form-item label="职级" prop="rank">
						<el-select v-model="cParmDetal.rank">
							<el-option v-for="item in rankList" :key="item" :value="item"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="薪资标准下线" prop="salaryFloor">
						<el-input v-model="cParmDetal.salaryFloor"></el-input>
					</el-form-item>
					<el-form-item label="薪资标准上线" prop="salaryTop">
						<el-input v-model="cParmDetal.salaryTop"></el-input>
					</el-form-item>
					<el-form-item label="出差标准（人/天）">
						<el-input v-model="cParmDetal.businessStandard"></el-input>
					</el-form-item>
					<el-form-item label="备注">
						<el-input v-model="cParmDetal.remark"></el-input>
					</el-form-item>
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
					callback(new Error('请输入薪资标准上线'));
				} else if(Number(value) <= Number(this.cParmDetal.salaryFloor)) {
					callback(new Error('上限值必须大于下限值!'));
				} else {
					callback();
				}
			};
			var checksalaryFloor = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入薪资标准下线'));
				} else if(Number(value) >= Number(this.cParmDetal.SalaryTop)) {
					callback(new Error('下限值必须小于上限值!'));
				} else {
					callback();
				}
			};
			return {
				cParmDetal: {
					applyNo: "",
					compName: "",
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
					{compName: "上海魔方分公司",compOrgNo: '01'},
					{compName: "魔方分公司深圳分公司",compOrgNo: 'p1'},
					{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '0'},
					{compName: "上海魔方分公司",compOrgNo: '1002'},
					{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '1001'}
				],
				rules: {
					//				compName: [
					//					{ required: true, message: '公司名称不能为空', trigger: 'blur' }
					//				],
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
					}]
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
//			let params = {
//				organNo: "112111",
//				appllyNo: "1121110002"
//			}
			//查询单个职级薪酬模板
			self.queryCParmDtl(params);
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
						this.$message.error('修改失败');
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
						self.$message({ message: '税率组修改成功', type: 'success' });
					}
					
				}).catch((err) => {
					console.log(err);
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
	
	.edit_rank .content {
		width: 100%;
		min-height: 510px;
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.edit_rank .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.edit_rank .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
		letter-spacing: 0;
	}
	
	.edit_rank .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.edit_rank .content-inner {
		padding: 40px 0px;
	}
	
	.edit_rank .conserve {
		float: right;
		margin-top: 20px;
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		border-radius: 0px;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 40px;
	}
	
	.edit_rank .el-form-item {
		margin-bottom: 22px;
		float: left;
		width: 50%;
	}
	
	.edit_rank .el-input__inner {
		border: 1px solid #EEEEEE;
		color: #999999;
		width: 300px;
		height: 40px;
		margin-left: 30px;
	}
	
	.edit_rank .el-form-item__label {
		text-align: right;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #999999;
		line-height: 1;
		padding: 11px 0px 11px 0;
		box-sizing: border-box;
	}
	
	.edit_rank .el-form-item__error {
		padding-left: 30px;
	}
</style>