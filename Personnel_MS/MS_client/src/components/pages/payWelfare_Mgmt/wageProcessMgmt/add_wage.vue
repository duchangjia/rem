<template>
	<div class="add_wage">
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
						<el-form-item label="工资月份" prop="month">
							<el-date-picker type="month" v-model="formdata2.month" @change="changeWageMonth" :editable="false" style="width:100%;"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算开始日期" prop="settleStartTime">
				        	<el-date-picker type="date" v-model="formdata2.settleStartTime" @change="changeStartTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="结算结束日期" prop="settleEndTime">
				        	<el-date-picker type="date" v-model="formdata2.settleEndTime" @change="changeEndTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col> 
					<el-col :sm="24" :md="12">
						<el-form-item class="remark" label="备注" prop="remark">
						    <el-input placeholder="请输入内容" v-model="formdata2.remark"> </el-input>
					  	</el-form-item>
					</el-col> 
					<el-col :sm="24" :md="12">
						<el-form-item label="类别" prop="batchType">
							<el-select v-model="formdata2.batchType" value-key="batchTypeNo" class="bg-white">
								<el-option v-for="(item,k) in batchTypeList" :key="item.batchTypeNo" :label="item.batchTypeName" :value="item.batchTypeNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="organNo">
							<el-select v-model="formdata2.organNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
				</el-form>
			</div>
			<div class="add-wrapper auth-assign">
				<el-col :span="24">
					<div class="context-menu">
	                    <el-col :span="3" class="wage_leftside">
	                        <div>部门范围</div>
	                    </el-col>
	                    <el-col :span="21" class="wage_rightside" v-if="derpRangeList.length>0">
	                        <div class="menu">
	                            <el-checkbox-button v-model="checkSubAll" :indeterminate="isSubIndeterminate" @change="handleSubAllChange" label="全部" class="menu-item"></el-checkbox-button>
	                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubsChange">
	                                <el-checkbox-button v-for="item in derpRangeList" :key="item.derpNo" :label="item" class="menu-item">{{item.derpName}}</el-checkbox-button>
	                            </el-checkbox-group>
	                        </div>
	                    </el-col>
	                </div>
                </el-col>
                <div class="func-permission">
	                <el-col :span="3" class="wage_leftside">
	                    <div>人员范围</div>
                		<span class="tips" v-show="checkPres.length==0">请选择人员范围</span>
	                </el-col>
	                <el-col :span="21" class="wage_rightside" v-if="checkedSubmenusFlag">
	                    <el-row :gutter="20">
	                        <el-col :span="6" v-for="(depart, index) in checkedSubmenus" :key="index">
	                            <div class="funcs-content">
	                                <el-checkbox v-model="checkPresAll[index]" :indeterminate="!isFuncsIndeterminate[index]" @change="handleFuncsAllChange($event,index,depart.preRangeList)" class="func-checkall">{{ depart.derpName }}</el-checkbox>
	                                <el-checkbox-group v-model="checkPres" @change="handleCheckedFuncsChange($event,index)"  class="func-item">
	                                    <el-checkbox v-for="item in depart.preRangeList" :key="item.userNo" :label="item" v-bind:title="item.custName" >{{ item.custName }}</el-checkbox>
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
				checkSubAllFlag: false,//部门全选按钮是否由认为点击选中
		      	checkedSubmenusFlag: false,
		      	checkedSubmenus: [],
		      	submenus: [],
		      	isSubIndeterminate: true,
      			
		      	checkPresAll: {},
		      	checkPres: [],
		      	isFuncsIndeterminate: {},
      			
				formdata2: {
					batchType: "",
					organName: "",
					organNo: "",
					derpRange: [],
					preRange: [],
					month: "",
					settleStartTime: "",
					settleEndTime: "",
					remark: ""
				},
				//类别列表
				batchTypeList: [
					{batchTypeNo: "01", batchTypeName: "工资"},
					{batchTypeNo: "02", batchTypeName: "奖金"},
					{batchTypeNo: "03", batchTypeName: "福利"},
				],
				//公司列表
				compList: [],
				//部门列表
				derpRangeList: [],
				
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
				sessionStorage.setItem('addWage_organNo',value);
				//查询部门范围列表
				// this.derpRangeList = [];
				this.queryDerpList(params);
			},
			// 部门范围 多选
		    handleSubAllChange(event) {
				  this.checkSubAll = event.target.checked;
		      	if (this.checkSubAll == true) {
		        	this.checkedSubmenus = this.derpRangeList;
		        	this.isSubIndeterminate = true;
		        	this.checkSubAllFlag = true;
		        	let params = {
		        		organNo: sessionStorage.getItem('addWage_organNo')
			      	}
					//查询人员范围列表（选全部部门时）
			      	this.queryDerpAndUser(params);
		      	} else {
		        	this.checkedSubmenus = [];
					this.isSubIndeterminate = false;
					this.checkSubAllFlag = false;
		      	}
		      	this.checkedSubmenus.length > 0
		        	? (this.checkedSubmenusFlag = true)
		        	: (this.checkedSubmenusFlag = false);
		      	this.formdata2.derpRange = this.checkedSubmenus;
		      	console.log("这是全选的derpRange", this.formdata2.derpRange);
		      	
		    },
		    handleCheckedSubsChange(val) {
		    	console.log('val',val)
		      	let checkedCount = val.length;
				  let derpNo = '';
				  this.checkSubAllFlag = false;
		      	if(val.length>0) {
		      		derpNo = val[val.length-1].derpNo;
		      	}
		      	this.isSubIndeterminate =
		        	checkedCount > 0 && checkedCount < this.derpRangeList.length;
		      	checkedCount > 0
		        	? (this.checkedSubmenusFlag = true)
		        	: (this.checkedSubmenusFlag = false);
		      	checkedCount == this.derpRangeList.length
		        	? (this.checkSubAll = true)
		        	: (this.checkSubAll = false);
		        	this.checkedSubmenus = val;
		      	this.formdata2.derpRange = val;
		      	console.log("这是derpRange", this.formdata2.derpRange);
		      	
		      	let params = {
			      	derpNo: derpNo
		      	}
				  //查询人员范围列表（单个部门时）
		      	this.queryDerpAndUser(params);
		    },
		    // 人员范围 多选
		    handleFuncsAllChange(event, index, MpreRangeList) {
				console.log('MpreRangeList',MpreRangeList)
		      this.checkPresAll[index] = event.target.checked;
		      if (this.checkPresAll[index] == true) {
				this.$set(this.isFuncsIndeterminate, index, true);
				MpreRangeList.forEach(function(ele) {
					  if (JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify( ele )) == -1) {
						this.formdata2.preRange.push( ele );
						this.checkPres = this.formdata2.preRange;
					}
				},this)
		        console.log('this.checkPres',this.checkPres)
		      } else {
				this.$set(this.isFuncsIndeterminate, index, false);
				MpreRangeList.forEach(function(ele) {
					  if (JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify( ele )) != -1) {
						this.formdata2.preRange.splice(JSON.stringify(this.formdata2.preRange).indexOf(JSON.stringify( ele ))-1, 1);
						this.checkPres = this.formdata2.preRange;
					}
				},this)
		      }
		      console.log("这是全选的checkPres", this.checkPres);
		      console.log("preRange", this.formdata2.preRange);
		    },
		    handleCheckedFuncsChange(val, index) {
		    	console.log('val',val)
		      if (val.length == this.formdata2.derpRange[index].preRangeList.length) {
		        this.checkPresAll[index] = true;
		        this.$set(this.isFuncsIndeterminate, index, true);
		      } else {
		        this.checkPresAll[index] = false;
		        this.$set(this.isFuncsIndeterminate, index, false);
		      }
		      this.formdata2.preRange = [];
		      val.forEach(function(ele) {
		        this.formdata2.preRange.push( ele );
			  }, this);
			  console.log("这是单选的checkPres", this.checkPres);
		      console.log("preRange", this.formdata2.preRange);
		      
		    },
			
	      	save(formName) {
				const self = this;
				self.$refs.formdata2.validate(valid => {
			        if (valid) {
			        	let preRanges = [],
			        		preRange = [],
			        		derpRanges = [],
			        		derpRange = [];
//			        	self.preRanges = preRanges;
		        		// self.formdata2.derpRange.forEach(function(ele) {
						// 	console.log('der ele',ele)
			        	// 	derpRanges.push(ele.derpNo);
			        	// 	derpRange.push(ele.derpNo);
						// },this);
						let checkObj = {};
						console.log('self.formdata2.preRange',self.formdata2.preRange)
			        	self.formdata2.preRange.forEach(function(ele) {
							console.log('pre ele',ele)
			        		preRanges.push(ele.userNo);
							preRange.push(ele.userNo);
							if(JSON.stringify(checkObj).indexOf(ele.derpNo) == -1) {
								console.log('true')
								checkObj.derpNo = ele.derpNo;
								derpRanges.push(ele.derpNo);
								derpRange.push(ele.derpNo);
							}
						},this); 
						let preRange_join = preRange.join(',');
			        	if(self.checkPres.length>0) {
			        		let params = {
				          		batchType: self.formdata2.batchType,
								organNo: self.formdata2.organNo,
								month: self.formdata2.month,
								settleStartTime: self.formdata2.settleStartTime,
								settleEndTime: self.formdata2.settleEndTime,
								remark: self.formdata2.remark,
				          		derpRanges: derpRanges,
				          		derpRange: JSON.stringify(derpRange),
				          		preRange: preRange_join
				          		
				          	}
				          	console.log('params',params);
				          	//新增工资流程信息
				          	self.addWageInfo(params);
			        	}
				          	
			        }
		       })
			},
			addWageInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/wage/addWageFlowManagerInfo',params)
				.then((res) => {
					console.log('addWage',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/wageProcess_manage');
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			//查询人员范围列表
			queryDerpAndUser(params) {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryDerpAndUserByDerpNo', {params: params})
				.then((res) => {
					console.log('userList',res);
					if(res.data.code === "S00000") {
						
						console.log('self.checkSubAllFlag',self.checkSubAllFlag);
						if(self.checkSubAllFlag) {//查全部人员时
							console.log('查全部人员时的userList',res);
							self.derpRangeList.forEach(function(ele,num) {
								ele.preRangeList = [];
							})
							self.derpRangeList.forEach(function(ele,num) {
								res.data.data.forEach(function(elem1, index1) {
									if(self.derpRangeList[num].derpNo == elem1.derpNo) {
										self.derpRangeList[num].preRangeList.push(elem1);
										self.$set(self.derpRangeList, num, self.derpRangeList[num]);
									}else {
										console.log('derpNo false')
									}

								})
							})
						} else {//查单个部门人员时
							console.log('查单个部门人员时的userList',res);
							self.derpRangeList.forEach(function(ele,num) {
								if(ele.derpNo == res.data.data[0].derpNo) {
									console.log('derpNo'+ele.derpNo+ '-----'+res.data.data[0].derpNo);
									self.derpRangeList[num].preRangeList = res.data.data;
									self.$set(self.derpRangeList, num, self.derpRangeList[num]);
								}else {
									console.log('derpNo false')
								}
							})
						}
						
						console.log('self.derpRangeList',self.derpRangeList)
						console.log('self.formdata2.derpRange',self.formdata2.derpRange)
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			//查询公司列表
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
				.then((res) => {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch((err) => {
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
						self.checkedSubmenus = [];//重选公司清空之前公司的部门列表
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			isInArray(arr, val) {
		      let testStr = "," + arr.join(",") + ",";
		      return testStr.indexOf("," + val + ",") != -1;
		    }
		}
	};
</script>

<style scoped>
.add_wage  {
	padding: 0 0 20px 20px;
}
.add_wage .range {
	width: 300px;
	height: 100px;
	border: 1px solid #bfcbd9;
	border-radius: 4px;
	margin-bottom: 0px;
    overflow-y: auto;
}
.add_wage .range .range-item {
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
}
.add_wage .el-button--small {
  margin: 4px;
  padding: 7px 9px;
  border: none;
  font-size: 14px;
  width: auto;
}
.add_wage .addBtn {
	background: #FF9900;
}
.add_wage .clearBtn {
	color: #ff9900;
    background: #FFFFFF;
    border: 1px solid #FF9900;
}
.add_wage .wage_leftside {
    text-align: right;
    padding: 9px 13px 10px;
    color: #999999;
    position: relative;
	margin-bottom: 20px;
	font-size: 14px;
	width: 110px;
}
.add_wage .wage_rightside {
	/* margin-left: -10px; */
}
.add_wage .tips {
    position: absolute;
    left: 13px;
    bottom: -5px;
    color: #ff4949;
    font-size: 12px;
}
</style>