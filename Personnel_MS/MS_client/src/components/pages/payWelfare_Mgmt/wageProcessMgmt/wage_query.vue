<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">工资流程管理</span>
				<div class="titleBtn_wrapper">
					<!--<el-upload ref="upload" name="file" class="upload-demo imExport-btn-item"
		  			 	:on-change="changeUpload" 
		  			 	:on-success="successUpload"
		  			 	action="/iem_hrm/" 
		  			 	:show-file-list="false" 
		  			 	:headers="token"
					>
                        <span class="icon-import" title="社保数据导入" slot="trigger"></span>
                   	</el-upload>-->
                   	<el-button class="" @click="handleAdd">社保数据导入</el-button>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</div>
				
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工资月份" prop="startDate"">
							<el-date-picker
						      v-model="ruleForm2.startDate"
						      type="month"
						      placeholder="请选择"
						      @change="changeStartTime">
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="applyNo" label="工资流程编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="companyName" label="公司名称"></el-table-column>

					<el-table-column prop="payStartTime" label="结算开始日期" :formatter="travelStartTimeFormatter"></el-table-column>
					<el-table-column prop="payEndTime" label="结算结束日期" :formatter="travelEndTimeFormatter"></el-table-column>

					<el-table-column prop="gongziMonth" label="工资月份" ></el-table-column>
					<el-table-column prop="remark" label="备注" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="status" label="状态" ></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
					<el-table-column label="操作" width="100">
						<template scope="scope">
							<!--<el-button type="text" size="small" @click="handlMenu(scope.$index, scope.row)">菜单</el-button>-->
							<el-dropdown trigger="click" @command="handleCommand">
						      	<span class="el-dropdown-link">
						       		 <el-button type="text" size="small" @click="handlMenu(scope.$index, scope.row)">下拉菜单</el-button>
						      	</span>
						      	<el-dropdown-menu slot="dropdown">
						        	<el-dropdown-item command="handleExport">导出工资数据</el-dropdown-item>
						        	<el-dropdown-item command="handleImport">导入工资数据</el-dropdown-item>
						        	<el-dropdown-item command="handleEnter">单笔录入工资数据</el-dropdown-item>
						        	<el-dropdown-item command="handleUse">启用</el-dropdown-item>
						        	<el-dropdown-item command="handleEdit">编辑</el-dropdown-item>
						        	<el-dropdown-item command="handleDelete">删除</el-dropdown-item>
						      	</el-dropdown-menu>
						  	</el-dropdown>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			token: {
				Authorization:`Bearer `+localStorage.getItem('access_token'),
			},
			pageNum: 1,
			pageSize: 10,
			totalRows: 2,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				derpNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			transferDataList: [
				{
					applyNo: "20172017",
					organName: "",
					payStartTime: "",
					payEndTime: "",
					gongziMonth: "",
					remark: "的方式大力开发空间里的时间反对声浪附近逗留时间房价肯定里粉丝数量大幅减少的看风景",
					status: "",
					createdBy: "",
					createdDate: ""
				}
			],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			rules: {
				startDate: [
				]
			}
		}
	},
	components: {
		current
	},
	created() {
		this.queryFormFlag = false;
		let params = {
			"pageNum": this.pageNum,
			"pageSize": this.pageSize,
			
		}
		
		//公司列表查询
		this.queryCompList();
	},
	methods: {
		travelStartTimeFormatter(row, column) {
	      return row.travelStartTime ? moment(row.travelStartTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	travelEndTimeFormatter(row, column) {
	      return row.travelEndTime ? moment(row.travelEndTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		travelTypeFormatter(row, column) {
	    	let travelType = '';
	    	switch(row.travelType){
				case '01':
				  travelType = '业务拓展'
				  break;
				case '02':
				  travelType = '项目实施'
				  break;
				case '03':
				  travelType = '会议'
				  break;
				case '99':
				  travelType = '其他'
				  break;
				default:
			}
	    	return travelType;
		},
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
			console.log(val)
		},
		changeComp(val) {
			console.log(val);
			const self = this;
			let params = {
				organNo: val
			}
			//部门列表查询
			self.queryDerpList(params);
		},
	    handleAdd() {
	    	this.$router.push('/add_wage');
	    },
		handleInfo(index, row) {
			sessionStorage.setItem('infoWage_applyNo', row.applyNo);
			this.$router.push({
				name: "wage_info",
				params: {
					applyNo: row.applyNo
				}
			})
			
		},
		handlMenu(index, row) {
			console.log('menu',row);
			sessionStorage.setItem('wage_applyNo',row.applyNo);
		},
		handleCommand(command) {
			console.log(command)
			let applyNo = sessionStorage.getItem('wage_applyNo');
			if(command === "handleExport") {
				//导出
				
			}else if(command === "handleImport") {
				//导入
				
			}else if(command === "handleEnter") {
				//录入
				
			}else if(command === "handleUse") {
				//启用
				
			}else if(command === "handleEdit") {
				//编辑
				sessionStorage.setItem('editWage_applyNo', applyNo);
	            this.$router.push('/edit_wage');
	            
			}else if(command === "handleDelete") {
				//删除
				const self = this;
			 	self.$confirm('此操作将会删除该条信息, 是否继续?', '提示', {
	                confirmButtonText: '确定',
	                cancelButtonText: '取消',
	                type: 'warning'
	           	}).then(() => {
	            	let params = {
						applyNo: applyNo
					}
	            	console.log(params);
	            	
	            	
	            }).catch(() => {
	                this.$message('您已取消操作！');
	            });
			}
		},
		changeUpload(file, fileList) {
//	 		this.formdata2.attachm = file.name;
      	},
      	successUpload(response, file, fileList) {
      		if(response.code === "S00000") {
      			this.$message({ message: '操作成功', type: 'success' });
      			this.$router.push('/travel_management');
      		}
      		
      	},
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					self.queryFormFlag = true;
					let params = {
						"pageNum": self.pageNum,
						"pageSize": self.pageSize,
						
					};
					//查询工资列表
					
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.derpNo = '';
			this.ruleForm2.userNo = '';
			this.ruleForm2.startDate = '';
			this.ruleForm2.endDate = '';
		},
		handleCurrentChange(val) {
			const self = this;
			let params = {};
			if(self.queryFormFlag) {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize,
					
				}
			} else {
				params = {
					"pageNum": val,
					"pageSize": self.pageSize
				}
			}
			
		},
		queryTravelList(params) {
			let self = this;
			self.$axios.get(baseURL+'', {params: params})
			.then(function(res) {
				console.log('TravelList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then(function(res) {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryDerpList(params) {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
			.then(function(res) {
				console.log('DerpList',res);
				if(res.data.code === "S00000") {
					self.departList = res.data.data;
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		}
	}
}
</script>


<style scoped>
.payroll_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.payroll_query .imExport-btn-item {
    margin-right: 20px;
}
</style>