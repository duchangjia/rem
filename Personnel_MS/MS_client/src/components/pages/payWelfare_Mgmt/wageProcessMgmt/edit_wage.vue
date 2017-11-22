<template>
	<div class="edit_wage">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="工资流程修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">工资流程修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
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
							<el-select v-model="formdata2.grpType" multiple value-key="grpTypeNo" class="bg-white">
								<el-option v-for="(item,k) in grpTypeList" :key="item.grpTypeNo" :label="item.grpTypeName" :value="item.grpTypeNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="companyNo">
							<el-select v-model="formdata2.companyNo" value-key="compOrgNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
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
						     >
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门范围" prop="departRange">
							<ul class="range">
								<li class="range-item" v-for="item in formdata2.departRange">{{item.departRangeName}}</li>
							</ul>
							<el-dropdown trigger="click" @command="handleAddDepart">
						      	<span class="el-dropdown-link">
						       		 <el-button type="primary" size="small" class="addBtn">增加</el-button>
						      	</span>
						      	<el-dropdown-menu slot="dropdown">
						        	<el-dropdown-item v-for="item in departRangeList" :command="item">{{item.departRangeName}}</el-dropdown-item>
						      	</el-dropdown-menu>
						  	</el-dropdown>
							<el-button type="primary" size="small" class="clearBtn" @click="clearDepart">清空</el-button>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="人员范围">
						    <ul class="range">
								<li class="range-item" v-for="item in formdata2.roleRange">{{item.roleRangeName+"("+item.roleRangeNo+")"}}</li>
							</ul>
							<el-dropdown trigger="click" @command="handleAddRole">
						      	<span class="el-dropdown-link">
						       		<el-button type="primary" size="small" class="addBtn">增加</el-button>
						      	</span>
						      	<el-dropdown-menu slot="dropdown">
						        	<el-dropdown-item v-for="item in roleRangeList" :command="item">{{item.roleRangeName}}</el-dropdown-item>
						      	</el-dropdown-menu>
						  	</el-dropdown>
							<el-button type="primary" size="small" class="clearBtn" @click="clearRole">清空</el-button>
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
			var checkDepartRange = (rule, value, callback) => {
		        if (value == []) {
		          	callback(new Error('部门范围不能为空'));
		        }else {
		          	callback();
		        }
	      	};
			var checkWageStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('开始日期不能为空'));
		        } else if (this.formdata2.wageEndTime && value >= this.formdata2.wageEndTime) {
		          	callback(new Error('开始日期不能大于结束日期'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWageEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('结束日期不能为空'));
		        } else if (this.formdata2.wageStartTime && value <= this.formdata2.wageStartTime) {
		          	callback(new Error('开始日期不能大于结束日期'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				formdata2: {
					applyNo: "",
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
					wageStartTime: "",
					wageEndTime: "",
					remark: ""
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
			 		grpType: [
			 			{ required: true, message: '类别不能为空', trigger: 'blur' }
			 		],
			 		companyNo: [
			 			{ required: true, message: '公司名称不能为空', trigger: 'change' }
			 		],
			 		departRange: [
			 			{ required: true, message: '部门范围不能为空', trigger: 'change' }
			 		],
			 		wageMonth: [
			 			{ required: true, message: '工资月份不能为空', trigger: 'change' }
			 		],
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
			          	self.modWageInfo(params);
			        }
		       })
			},
			modWageInfo(params) {
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
.edit_wage  {
	padding: 0 0 20px 20px;
}
.edit_wage .range {
	width: 300px;
	height: 100px;
	border: 1px solid #bfcbd9;
	border-radius: 4px;
	margin-bottom: 0px;
    overflow-y: auto;
}
.edit_wage .range .range-item {
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
}
.edit_wage .el-button--small {
  margin: 4px;
  padding: 7px 9px;
  border: none;
  font-size: 14px;
  width: auto;
}
.edit_wage .addBtn {
	background: #FF9900;
}
.edit_wage .clearBtn {
	color: #ff9900;
    background: #FFFFFF;
    border: 1px solid #FF9900;
}
</style>