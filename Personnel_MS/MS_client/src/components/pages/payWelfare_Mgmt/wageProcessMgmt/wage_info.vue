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
						<el-form-item label="状态" prop="grpStatus">
							<el-input v-model="formdata2.grpStatus" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<!--<el-col :sm="24" :md="12">
						<el-form-item label="部门范围" prop="derpRange">
							<ul class="range">
								<li class="range-item" v-for="item in formdata2.derpRange">{{item.derpRangeName}}</li>
							</ul>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="人员范围">
						    <ul class="range">
								<li class="range-item" v-for="item in formdata2.preRange">{{item.preRangeName+"("+item.preRangeNo+")"}}</li>
							</ul>
					  	</el-form-item>
					</el-col>  	-->
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="wageMonth">
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
					<el-col :sm="24" :md="12">
						<el-form-item class="remark" label="备注" prop="remark">
						    <el-input v-model="formdata2.remark" :disabled="true"></el-input>
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
			<div class="add-wrapper auth-assign">
				<el-col :span="24">
					<div class="context-menu">
	                    <el-col :span="3" class="leftside" style="text-align: right;">
	                        <div>部门范围</div>
	                    </el-col>
	                    <el-col :span="21" class="rightside">
	                        <div class="menu">
	                            <el-checkbox-button v-model="checkSubAll" :indeterminate="isSubIndeterminate" label="全部" class="menu-item"></el-checkbox-button>
	                            <el-checkbox-group v-model="checkedSubmenus">
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
	                                <el-checkbox v-model="checkFuncsAll[index]" :indeterminate="!isFuncsIndeterminate[index]" class="func-checkall">{{ depart.derpRangeName }}</el-checkbox>
	                                <el-checkbox-group v-model="checkFuncs" class="func-item">
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
					grpType: "",
					companyName: "",
					companyNo: "",
					derpRange: [
						{ derpRangeNo: "01", derpRangeName: "xx部" },
						{ derpRangeNo: "02", derpRangeName: "行政部" }
					],
					preRange: [
						{preRangeName: "张三",preRangeNo: "P0000001"},
						{preRangeName: "李四",preRangeNo: "P0000002"}
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
				//部门列表
				derpRangeList: [
					{ 
						derpRangeNo: "01", 
						derpRangeName: "xx部" 
					},
					{ 
						derpRangeNo: "02", 
						derpRangeName: "行政部"
					},
					{ 
						derpRangeNo: "03", 
						derpRangeName: "信息部"
					}
				],
				//人员列表
				preRangeList: [
					{preRangeNo: "P0000001", preRangeName: "张三"},
					{preRangeNo: "P0000002", preRangeName: "李四"},
					{preRangeNo: "P0000003", preRangeName: "王五"}
				],
			 	rules: {
			 		
				}
			}
		},
		components: {
			current
		},
		created() {
			this.formdata2.preRange.forEach(function(ele) {
		        this.checkFuncs.push(ele.preRangeNo);
		      }, this);
			console.log('this.checkFuncs',this.checkFuncs);
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
.leftside {
	text-align: right;
    padding: 9px 24px 0;
    color: #999999;
}

</style>