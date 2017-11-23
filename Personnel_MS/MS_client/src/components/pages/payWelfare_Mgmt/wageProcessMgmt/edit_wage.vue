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
						    <el-input v-model="formdata2.batchNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="类别" prop="batchType">
							<el-select v-model="formdata2.batchType" multiple value-key="batchTypeNo" class="bg-white">
								<el-option v-for="(item,k) in batchTypeList" :key="item.batchTypeNo" :label="item.batchTypeName" :value="item.batchTypeNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="organNo">
							<el-select v-model="formdata2.organNo" value-key="compOrgNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="month">
							<el-date-picker type="month" v-model="formdata2.month" placeholder="请选择" @change="changeWageMonth" style="width:100%;">
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					  	
					<el-col :sm="24" :md="12">
						<el-form-item label="结算开始日期" prop="settleStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.settleStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算结束日期" prop="settleEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.settleEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col> 
					<el-col :span="24">
						<el-form-item class="remark" label="备注" prop="remark">
						    <el-input placeholder="请输入内容" v-model="formdata2.remark"></el-input>
					  	</el-form-item>
					</el-col>  	
						
				</el-form>
			</div>
			<div class="add-wrapper auth-assign">
				<el-col :span="24">
					<div class="context-menu">
	                    <el-col :span="3" class="leftside" style="text-align: right;">
	                        <div>部门范围</div>
	                    </el-col>
	                    <el-col :span="21" class="rightside">
	                        <div class="menu">
	                            <el-checkbox-button v-model="checkSubAll" :indeterminate="isSubIndeterminate" @change="handleSubAllChange" label="全部" class="menu-item"></el-checkbox-button>
	                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubsChange">
	                                <el-checkbox-button v-for="item in derpRangeList" :label="item" class="menu-item">{{item.derpRangeName}}</el-checkbox-button>
	                            </el-checkbox-group>
	                        </div>
	                    </el-col>
	                </div>
                </el-col>
                <div class="func-permission" v-if="formdata2.preRange.length>0">
	                <el-col :span="3" class="leftside">
	                    <div>人员范围</div>
	                </el-col>
	                <el-col :span="21" class="rightside">
	                    <el-row :gutter="20">
	                        <el-col :span="6" v-for="(depart, index) in formdata2.derpRange">
	                            <div class="funcs-content">
	                                <el-checkbox v-model="checkFuncsAll[index]" :indeterminate="!isFuncsIndeterminate[index]" @change="handleFuncsAllChange($event,index)" class="func-checkall">{{ depart.derpRangeName }}</el-checkbox>
	                                <el-checkbox-group v-model="checkFuncs" @change="handleCheckedFuncsChange($event,index)"  class="func-item">
	                                    <el-checkbox v-for="item in preRangeList" :label="item.preRangeNo" v-bind:title="item.preRangeName" >{{ item.preRangeName }}</el-checkbox>
	                                </el-checkbox-group>
	                            </div>
	                        </el-col>
	                    </el-row>
	                </el-col>
	            </div>
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
		        } else if (this.formdata2.settleEndTime && value >= this.formdata2.settleEndTime) {
		          	callback(new Error('开始日期不能大于结束日期'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWageEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('结束日期不能为空'));
		        } else if (this.formdata2.settleStartTime && value <= this.formdata2.settleStartTime) {
		          	callback(new Error('开始日期不能大于结束日期'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				checkSubAll: false,
		      	checkedSubmenusFlag: false,
		      	checkedSubmenus: [],
		      	submenus: [],
		      	isSubIndeterminate: true,
      			
		      	checkFuncsAll: {},
		      	checkFuncs: [],
		      	isFuncsIndeterminate: {},
      			
				formdata2: {
					batchNo: "",
					batchType: "",
					companyName: "",
					organNo: "",
					derpRange: [
						{ derpRangeNo: "01", derpRangeName: "xx部" },
						{ derpRangeNo: "02", derpRangeName: "行政部" }
					],
					preRange: [
						{preRangeName: "张三",preRangeNo: "P0000001"},
						{preRangeName: "李四",preRangeNo: "P0000002"}
					],
					month: "",
					settleStartTime: "",
					settleEndTime: "",
					remark: ""
				},
				//类别列表
				batchTypeList: [
					{batchTypeNo: "1", batchTypeName: "工资"},
					{batchTypeNo: "2", batchTypeName: "奖金"},
					{batchTypeNo: "3", batchTypeName: "福利"},
				],
				//公司列表
				compList: [
					{organNo: "01",organName: "广州分公司"}
				],
				//部门列表
				derpRangeList: [
					{ derpRangeNo: "01", derpRangeName: "所有部门" },
					{ derpRangeNo: "02", derpRangeName: "行政部" },
					{ derpRangeNo: "03", derpRangeName: "信息部" }
				],
				//人员列表
				preRangeList: [
					{preRangeNo: "P0000001", preRangeName: "张三"},
					{preRangeNo: "P0000002", preRangeName: "李四"},
					{preRangeNo: "P0000003", preRangeName: "王五"}
				],
			 	rules: {
			 		batchType: [
			 			{ required: true, message: '类别不能为空', trigger: 'blur' }
			 		],
			 		organNo: [
			 			{ required: true, message: '公司名称不能为空', trigger: 'change' }
			 		],
			 		derpRange: [
			 			{ required: true, message: '部门范围不能为空', trigger: 'change' }
			 		],
			 		month: [
			 			{ required: true, message: '工资月份不能为空', trigger: 'change' }
			 		],
			 		settleStartTime: [
			 			{ require: "true", validator: checkWageStartTime, trigger: "change"}
			 		],
			 		settleEndTime: [
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
		created() {
			this.formdata2.derpRange.forEach(function(ele) {
				console.log('ele',ele)
		        this.checkedSubmenus.push(ele);
		      }, this);
		      console.log(this.checkedSubmenus)
			this.formdata2.preRange.forEach(function(ele) {
		        this.checkFuncs.push(ele.preRangeNo);
		      }, this);
			let batchNo = sessionStorage.getItem('wage_batchNo');
			let params = {
				batchNo: batchNo
			}
//			this.queryWageInfo(params);
		},
		methods: {
			changeWageMonth(time) {
				this.formdata2.month = time;
			},
			changeStartTime(time) {
				this.formdata2.settleStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.settleEndTime = time;
				
			},
			// 部门范围 多选
		    handleSubAllChange(event) {
		      this.checkSubAll = event.target.checked;
		      if (this.checkSubAll == true) {
		        this.checkedSubmenus = this.derpRangeList;
		        this.isSubIndeterminate = true;
		      } else {
		        this.checkedSubmenus = [];
		        this.isSubIndeterminate = false;
		      }
		      this.checkedSubmenus.length > 0
		        ? (this.checkedSubmenusFlag = true)
		        : (this.checkedSubmenusFlag = false);
		      this.formdata2.derpRange = this.checkedSubmenus;
		      console.log("这是全选的derpRange", this.formdata2.derpRange);
		    },
		    handleCheckedSubsChange(val) {
		      	let checkedCount = val.length;
		      	this.isSubIndeterminate =
		        	checkedCount > 0 && checkedCount < this.derpRangeList.length;
		      	checkedCount > 0
		        	? (this.checkedSubmenusFlag = true)
		        	: (this.checkedSubmenusFlag = false);
		      	checkedCount == this.derpRangeList.length
		        	? (this.checkSubAll = true)
		        	: (this.checkSubAll = false);
		      	this.formdata2.derpRange = val;
		      	console.log("这是derpRange", this.formdata2.derpRange);
		    },
		    // 人员范围 多选
		    handleFuncsAllChange(event, index) {
		      this.checkFuncsAll[index] = event.target.checked;
		      let targetFucsList = [];
		      this.preRangeList.forEach(function(ele) {
		        targetFucsList.push(ele.preRangeNo);
		      }, this);
		      if (this.checkFuncsAll[index] == true) {
		        this.$set(this.isFuncsIndeterminate, index, true);
		        targetFucsList.forEach(function(ele) {
		          if (JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify({ preRangeNo: ele })) == -1) {
		            this.formdata2.preRange.push({ preRangeNo: ele });
		          }
		          if ( !this.isInArray(this.checkFuncs, ele) ) {
		            this.checkFuncs.push(ele);
		          }
		        }, this);
		      } else {
		        this.$set(this.isFuncsIndeterminate, index, false);
		        targetFucsList.forEach(function(ele, index) {
		          if (JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify({ preRangeNo: ele })) != -1) {
		            this.formdata2.preRange.splice(JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify({ preRangeNo: ele }))-1, 1);
		          }
		          if ( this.isInArray(this.checkFuncs, ele) ) {
		            this.checkFuncs.splice(this.checkFuncs.indexOf(ele), 1);
		          }
		        }, this);
		      }
		      console.log("这是全选的checkFuncs", this.checkFuncs);
		      console.log("preRange", this.formdata2.preRange);
		    },
		    handleCheckedFuncsChange(val, index) {
		      if (val.length == this.preRangeList.length) {
		        this.checkFuncsAll[index] = true;
		        this.$set(this.isFuncsIndeterminate, index, true);
		      } else {
		        this.checkFuncsAll[index] = false;
		        this.$set(this.isFuncsIndeterminate, index, false);
		      }
		      this.formdata2.preRange = [];
		      val.forEach(function(ele) {
		        this.formdata2.preRange.push({ preRangeNo: ele });
		      }, this);
		      console.log("preRange", this.formdata2.preRange);
		    },
	      	save(formName) {
				const self = this;
				self.$refs.formdata2.validate(valid => {
			        if (valid) {
			          	let params = {
			          		userNo: self.formdata2.userNo, // 用户的编号
        					batchNo: self.formdata2.batchNo,// NOT NULL 批次编号
							batchType: self.formdata2.batchType, // NOT NULL 类别;参数表:01工资02奖金03福利
							organNo: self.formdata2.organNo, // NOT NULL 公司ID
							derpRange: self.formdata2.derpRange, // 部门范围
							preRange: self.formdata2.preRange, // 人员范围
							batchName: self.formdata2.batchName, // 组名称
							month: self.formdata2.month, // 工资的月份
							settleStartTime: self.formdata2.settleStartTime, // 结算开始日期
							settleEndTime: self.formdata2.settleEndTime, // 结算结束日期
							batchStatus: self.formdata2.batchStatus, // 状态;参数表:01录入02启用03废弃
							remark: self.formdata2.remark // 备注
			          	}
			          	self.modWageInfo(params);
			        }
		       })
			},
			queryWageInfo(params) {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryWageFlowInfo',{params: params})
				.then(function(res) {
					console.log('WageInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			modWageInfo(params) {
				let self = this;
				self.$axios.put(baseURL+'/wage/modifyWageFlowInfo',params)
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
.leftside {
	text-align: right;
    padding: 9px 24px 0;
    color: #999999;
}
</style>