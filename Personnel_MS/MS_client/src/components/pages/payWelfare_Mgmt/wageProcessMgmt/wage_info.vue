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
						    <el-input v-model="formdata2.batchNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="类别" prop="batchType">
							<el-select v-model="formdata2.batchType" value-key="batchType" class="bg-white" :disabled="true">
								<el-option v-for="item in batchTypeList" :key="item.batchType" :label="item.batchTypeName" :value="item.batchType"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="organNo">
							<el-select v-model="formdata2.organNo" value-key="compOrgNo" @change="changeComp" :disabled="true">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="状态" prop="batchStatus">
							<el-select v-model="formdata2.batchStatus" value-key="compOrgNo" :disabled="true">
								<el-option v-for="item in batchStatusList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="month">
							<el-date-picker
						      v-model="formdata2.month"
						      type="month"
						      placeholder="请选择"
						      @change="changeWageMonth" 
						      style="width:100%;"
						       :disabled="true">
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算开始日期" prop="settleStartTime">
				        	<el-date-picker type="date" v-model="formdata2.settleStartTime" @change="changeStartTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算结束日期" prop="settleEndTime">
				        	<el-date-picker type="date" v-model="formdata2.settleEndTime" @change="changeEndTime" style="width:100%;" :disabled="true"></el-date-picker>
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
	                    <el-col :span="3" class="wage_leftside" style="text-align: right;">
	                        <div>部门范围</div>
	                    </el-col>
	                    <el-col :span="21" class="wage_rightside">
	                        <div class="menu">
	                            <el-checkbox-button v-model="checkSubAll" :indeterminate="isSubIndeterminate" label="全部" class="menu-item" :disabled="true"></el-checkbox-button>
	                            <el-checkbox-group v-model="checkedSubmenus">
	                                <el-checkbox-button v-for="item in derpRangeList" :key="item.derpNo" :label="item" class="menu-item" :disabled="true">{{item.derpName}}</el-checkbox-button>
	                            </el-checkbox-group>
	                        </div>
	                    </el-col>
	                </div>
                </el-col>
                <div class="func-permission">
	                <el-col :span="3" class="wage_leftside">
	                    <div>人员范围</div>
	                </el-col>
	                <el-col :span="21" class="wage_rightside" v-if="checkedSubmenus.length>0">
	                    <el-row :gutter="20">
	                        <el-col :span="6" v-for="(depart, index) in checkedSubmenus" :key="index">
	                            <div class="funcs-content">
	                                <el-checkbox v-model="checkPresAll[index]" :indeterminate="!isFuncsIndeterminate[index]" class="func-checkall" :disabled="true">{{ depart.derpName }}</el-checkbox>
	                                <el-checkbox-group v-model="checkPres" class="func-item">
	                                    <el-checkbox v-for="item in depart.preRangeList" :key="item.userNo" :label="item.userNo" v-bind:title="item.custName"  :disabled="true">{{ item.custName }}</el-checkbox>
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
      			
		      	checkPresAll: {},
		      	checkPres: [],
		      	isFuncsIndeterminate: {},
      			
				formdata2: {},
				//类别列表
				batchTypeList: [
					{batchType: "01", batchTypeName: "工资"},
					{batchType: "02", batchTypeName: "奖金"},
					{batchType: "03", batchTypeName: "福利"},
				],
				//公司列表
				compList: [],
				//状态列表
				batchStatusList: [
					{paraValue: '01',paraShowMsg: '录入'},
					{paraValue: '02',paraShowMsg: '启用'},
					{paraValue: '03',paraShowMsg: '废弃'},
				],
				//部门列表
				derpRangeList: [],
			 	rules: {
			 		
				}
			}
		},
		components: {
			current
		},
		created() {
			//查询工资流程信息
			this.queryWageInfo();
			//查询公司列表
			this.queryCompList();
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
			//选择公司
			changeComp(value) {
				let params = {
					organNo: value
				}
				sessionStorage.setItem('infoWage_organNo',value);
				//查询部门范围列表
				this.queryDerpList(params);
			},
			queryWageInfo() {
				let self = this;
				let batchNo = sessionStorage.getItem('infoWage_batchNo');
				let params = {
					batchNo: batchNo
				}
				self.$axios.get(baseURL+'/wage/queryWageFlowInfo',{params: params})
				.then((res) => {
					console.log('WageInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
						self.formdata2.preRange = JSON.parse(self.formdata2.preRange);
						self.formdata2.derpRange = JSON.parse(self.formdata2.derpRange);
				      	//人员范围（反显）
				      	self.checkPres = self.formdata2.preRange;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
				.then(function(res) {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			//查询部门范围列表
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryDerpByOrganNo', {params: params})
				.then((res) => {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.derpRangeList = res.data.data;
						let ranges = [];
						self.derpRangeList.forEach(function(ele) {
							self.formdata2.derpRange.forEach(function(eles) {
								if(ele.derpNo == eles) {
									ranges.push(ele);
								}
								let params = {
							      	derpNo: eles
						      	}
						      	//查询人员范围列表（单个部门时）
						      	self.queryDerpAndUser(params);
							})
						})
						//部门范围（反显）
						self.checkedSubmenus = ranges;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			//查询人员范围列表
			queryDerpAndUser(params) {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryDerpAndUserByDerpNo', {params: params})
				.then((res) => {
					// console.log('userList',res);
					if(res.data.code === "S00000") {
						self.derpRangeList.forEach(function(ele,num) {
							if(ele.derpNo == res.data.data[0].derpNo) {
								self.derpRangeList[num].preRangeList = res.data.data;
								self.$set(self.derpRangeList, num, self.derpRangeList[num]);
							}else {
								// console.log('deparNo false')
							}
						})
						self.formdata2.derpRange.forEach(function(ele,num) {
							if(ele.derpNo == res.data.data[0].derpNo) {
								self.formdata2.derpRange[num].preRangeList = res.data.data;
								self.$set(self.formdata2.derpRange,num,self.formdata2.derpRange[num]);
							}else {
								// console.log('formdata2 false')
							}
						})
								// console.log('self.derpRangeList',self.derpRangeList)
								// console.log('self.formdata2.derpRange',self.formdata2.derpRange)
					}
				}).catch((err) => {
					console.log(err);
				})
			},
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
.wage_info .wage_leftside {
	text-align: right;
    padding: 9px 13px 10px;
    color: #999999;
    position: relative;
	margin-bottom: 20px;
	font-size: 14px;
	width: 110px;
}
.wage_info .wage_rightside {
	margin-left: -10px;
}
</style>