<template>
	<div class="info_wrapper">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="工资流程新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">工资流程新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="类别" prop="wageType">
							<!--<el-input v-model="formdata2.wageType"></el-input>-->
							<el-select v-model="formdata2.wageType" multiple value-key="wageTypeNo" class="bg-white">
								<el-option v-for="(item,k) in wageTypeList" :key="item.wageTypeNo" :label="item.wageTypeName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata2.companyName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门范围">
						    <!--<el-input v-model="formdata2.departRange"></el-input>-->
						    <el-select v-model="formdata2.departRange" multiple value-key="departRangeNo" class="bg-white">
								<el-option v-for="(item,k) in departRangeList" :key="item.departRangeNo" :label="item.departRangeName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="人员范围">
						    <el-input v-model="formdata2.roleRange"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="wageMonth"">
							<el-date-picker
						      v-model="formdata2.wageMonth"
						      type="month"
						      placeholder="请选择"
						      @change="changeWageMonth" 
						      style="width:100%;">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算开始日期" prop="wageStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.wageStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算结束日期" prop="wageEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.wageEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col> 
					<el-col :span="24">
						<el-form-item class="remark" label="备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.remark">
							</el-input>
					  	</el-form-item>
					</el-col>  	
						
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	import messageBox from "../../../common/messageBox-components.vue";
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkWageStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('开始时间不能为空'));
		        } else if (this.formdata2.wageEndTime && value >= this.formdata2.wageEndTime) {
		          	callback(new Error('开始时间不能大于结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWageEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('结束时间不能为空'));
		        } else if (this.formdata2.wageStartTime && value <= this.formdata2.wageStartTime) {
		          	callback(new Error('开始时间不能大于结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				formdata2: {
					wageType: "",
					companyName: "",
					departRange: [],
					roleRange: "",
					wageMonth: "",
					wageStartTime: "",
					wageEndTime: "",
					remark: ""
				},
				travelTypeList: [
					{label: "业务拓展", travelNo: "01"},
					{label: "项目实施", travelNo: "02"},
					{label: "会议", travelNo: "03"},
					{label: "其他", travelNo: "99"}
				],
				wageType: [
					{wageTypeNo: "1", wageTypeName: "工资"},
					{wageTypeNo: "2", wageTypeName: "奖金"},
					{wageTypeNo: "3", wageTypeName: "福利"},
				],
				departRangeList: [
					{
						departRangeNo: "01",
						departRangeName: "所有部门"
					},
					{
						departRangeNo: "02",
						departRangeName: "行政部"
					},
					{
						departRangeNo: "03",
						departRangeName: "行政部"
					}
				],
			 	rules: {
			 		wageStartTime: [
			 			{ require: "true", validator: checkWageStartTime, trigger: "change"}
			 		],
			 		wageEndTime: [
			 			{ require: "true", validator: checkWageEndTime, trigger: "change"}
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
		methods: {
			changeWageMonth(time) {
				this.formdata2.wageMonth = time;
			},
			changeStartTime(time) {
				this.formdata2.wageStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.wageEndTime = time;
				
			},
	      	save(formName) {
				const self = this;
				self.$refs.formdata2.validate(valid => {
			        if (valid) {
			          	
			        }
		       })
			},
			addWageInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'',params)
				.then(function(res) {
					console.log('addWage',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/wageProcess_manage');
					}
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style scoped>

</style>