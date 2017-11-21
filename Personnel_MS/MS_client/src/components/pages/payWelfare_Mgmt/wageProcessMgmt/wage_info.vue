<template>
	<div class="wage_info">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="工资流程详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">工资流程详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="工资流程编号">
						    <el-input v-model="formdata2.applyNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="类别" prop="grpType">
							<el-select v-model="formdata2.grpType" multiple value-key="grpTypeNo" class="bg-white" :disabled="true">
								<el-option v-for="(item,k) in grpTypeList" :key="item.grpTypeNo" :label="item.grpTypeName" :value="item.grpTypeNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="companyNo">
							<el-select v-model="formdata2.companyNo" value-key="compOrgNo" :disabled="true">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="状态" prop="grpStatus"">
							<el-input v-model="formdata2.grpStatus" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门范围" prop="departRange">
							<ul class="range">
								<li class="range-item" v-for="item in formdata2.departRange">{{item.departRangeName}}</li>
							</ul>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="人员范围">
						    <ul class="range">
								<li class="range-item" v-for="item in formdata2.roleRange">{{item.roleRangeName+"("+item.roleRangeNo+")"}}</li>
							</ul>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="wageMonth"">
							<el-date-picker
						      v-model="formdata2.wageMonth"
						      type="month"
						      placeholder="请选择"
						      @change="changeWageMonth" 
						      style="width:100%;"
						       :disabled="true">
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算开始日期" prop="wageStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.wageStartTime" @change="changeStartTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算结束日期" prop="wageEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.wageEndTime" @change="changeEndTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col> 
					<el-col :span="24">
						<el-form-item class="remark" label="备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.remark"
							   :disabled="true">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新人">
						    <el-input v-model="formdata2.updatedBy" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新时间">
						    <el-input v-model="formdata2.updatedDate" :disabled="true"></el-input>
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
			return {
				formdata2: {
					grpType: "",
					companyName: "",
					companyNo: "",
					departRange: [
						{departRangeName: "广州分公司",departRangeNo: "1"},
						{departRangeName: "上海分公司",departRangeNo: "1"}
					],
					roleRange: [
						{roleRangeName: "张三",roleRangeNo: "P0000001"},
						{roleRangeName: "李四",roleRangeNo: "P0000002"}
					],
					wageMonth: "",
					grpStatus: "",
					wageStartTime: "",
					wageEndTime: "",
					remark: "",
					updatedBy: "",
					updatedDate: ""
				},
				//类别列表
				grpTypeList: [
					{grpTypeNo: "1", grpTypeName: "工资"},
					{grpTypeNo: "2", grpTypeName: "奖金"},
					{grpTypeNo: "3", grpTypeName: "福利"},
				],
				//公司列表
				compList: [
					{organNo: "01",organName: "广州分公司"}
				],
				//部门列表
				departRangeList: [
					{ departRangeNo: "01", departRangeName: "所有部门" },
					{ departRangeNo: "02", departRangeName: "行政部" },
					{ departRangeNo: "03", departRangeName: "信息部" }
				],
				//人员列表
				roleRangeList: [
					{roleRangeNo: "P0000001", roleRangeName: "张三"},
					{roleRangeNo: "P0000002", roleRangeName: "李四"},
					{roleRangeNo: "P0000003", roleRangeName: "王五"}
				],
			 	rules: {
			 		
				}
			}
		},
		components: {
			current
		},
		created() {
			
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
			//增加部门范围
			handleAddDepart(command) {
				console.log(command);
				this.formdata2.departRange.push(command);
			},
			//清空部门范围
			clearDepart() {
				this.formdata2.departRange = [];
			},
			//增加人员范围
			handleAddRole(command) {
				console.log(command);
				this.formdata2.roleRange.push(command)
			},
			//清空人员范围
			clearRole() {
				this.formdata2.roleRange = [];
			},
	      	save(formName) {
				const self = this;
				self.$refs.formdata2.validate(valid => {
			        if (valid) {
			          	let params = {
			          		
			          	}
			          	self.addWageInfo(params);
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
.wage_info  {
	padding: 0 0 20px 20px;
}
.wage_info .range {
	width: 300px;
	height: 100px;
	border: 1px solid #bfcbd9;
	border-radius: 4px;
	margin-bottom: 0px;
	overflow-y: auto;
	
}
.wage_info .range .range-item {
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
}
.wage_info .el-button--small {
  margin: 4px;
  padding: 7px 9px;
  border: none;
  font-size: 14px;
  width: auto;
}
.wage_info .addBtn {
	background: #FF9900;
}
.wage_info .clearBtn {
	color: #ff9900;
    background: #FFFFFF;
    border: 1px solid #FF9900;
}
</style>