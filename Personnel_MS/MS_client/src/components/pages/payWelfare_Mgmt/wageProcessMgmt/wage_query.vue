<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">工资流程管理</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" @click="handleSocial">社保数据导入</el-button>
					<el-button class="btn-primary" @click="handleAdd">新增</el-button>
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
					<!--<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="departName">
							<el-select v-model="ruleForm2.derpNo" value-key="derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :sm="12" :md="6">
						<el-form-item label="工资月份" prop="startDate">
							<el-date-picker v-model="ruleForm2.startDate" type="month" placeholder="请选择" @change="changeStartTime"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<div class="queryButton_wrapper">
							<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
							<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
						</div>
					</el-col>
						
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="batchNo" label="工资流程编号">
						<template scope="scope">
					        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.batchNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="organName" label="公司名称"></el-table-column>
					<el-table-column prop="settleStartTime" label="结算开始日期" :formatter="settleStartTimeFormatter"></el-table-column>
					<el-table-column prop="settleEndTime" label="结算结束日期" :formatter="settleEndTimeFormatter"></el-table-column>
					<el-table-column prop="month" label="工资月份" ></el-table-column>
					<el-table-column prop="remark" label="备注" :show-overflow-tooltip="true"></el-table-column>
					<el-table-column prop="batchStatus" label="状态" :formatter="batchStatusFormatter"></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
					<el-table-column label="操作" width="100">
						<template scope="scope">
							<el-dropdown trigger="click" @command="handleCommand">
						      	<span class="el-dropdown-link">
						       		 <el-button type="text" size="small" @click="handlMenu(scope.$index, scope.row)">下拉菜单</el-button>
						      	</span>
						      	<el-dropdown-menu slot="dropdown">
						        	<el-dropdown-item command="handleExport">导出工资数据</el-dropdown-item>
						        	
						        	<el-dropdown-item command="handleImport">导入工资数据
						        		<el-upload class="upload-demo wage_upload" ref="upload" name="file"
								  			 :data="formdata"
								  			 :on-change="changeUpload" 
								  			 :on-success="successUpload"
								  			 action="/iem_hrm/wage/wageInfoImport"  
								  			 :auto-upload="true"
								  			 :headers="token"
								  		>
				                            <el-button slot="trigger" type="primary" class="uploadBtn" style="opacity: 0;">选取文件</el-button>
				                        </el-upload>
						        	</el-dropdown-item>
						        	<el-dropdown-item command="handleEnter">单笔录入工资数据</el-dropdown-item>
						        	<el-dropdown-item command="handleStatus">启用</el-dropdown-item>
						        	<el-dropdown-item command="handleEdit">编辑</el-dropdown-item>
						        	<el-dropdown-item command="handleDelete">删除</el-dropdown-item>
						      	</el-dropdown-menu>
						  	</el-dropdown>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
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
				startDate: "",
			},
			transferDataList: [
				{
					batchNo: "",
					organName: "",
					settleStartTime: "",
					settleEndTime: "",
					month: "",
					remark: "",
					batchStatus: "",
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
	computed: {
		formdata: function(){
			return {
				batchNo: sessionStorage.getItem('wageQuery_batchNo')
			}
		}
	},
	created() {
		this.ruleForm2.organNo = '';
		this.ruleForm2.startDate = '';
		//查询工资列表
		this.queryWageList();
		//公司列表查询
		this.queryCompList();
	},
	methods: {
		settleStartTimeFormatter(row, column) {
	      return row.settleStartTime ? moment(row.settleStartTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	settleEndTimeFormatter(row, column) {
	      return row.settleEndTime ? moment(row.settleEndTime).format('YYYY-MM-DD') : null;
	   	}, 
	   	batchStatusFormatter(row, column) {
	   		return row.batchStatus=="01" ? "录入" : row.batchStatus=="02" ? "启用" : "废弃";
	   	},
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
			console.log(val)
		},
		changeUpload(file, fileList) {
	 		this.fileFlag = file;
	 		this.formdata2.attachm = file.name;
      	},
      	successUpload(response, file, fileList) {
      		console.log('response',response)
      		if(response.code === "S00000") {
      			this.$message({ message: response.retMsg, type: 'success' });
      			this.$router.push('/wageProcess_manage');
      		}else {
      			this.$message({ message: response.retMsg, type: 'success' });
      		}
      		
      	},
		changeComp(val) {
			console.log(val);
		},
		handleSocial() {
			this.$router.push('/socialSecurity_query');
		},
	    handleAdd() {
	    	this.$router.push('/add_wage');
	    },
		handleInfo(index, row) {
			sessionStorage.setItem('infoWage_batchNo', row.batchNo);
			this.$router.push({
				name: "wage_info",
				params: {
					batchNo: row.batchNo
				}
			})
			
		},
		//触发下拉菜单
		handlMenu(index, row) {
			sessionStorage.setItem('wageQuery_batchNo',row.batchNo);
			sessionStorage.setItem('entryWage_organNo',row.organNo);
		},
		handleCommand(command) {
			console.log(command)
			let batchNo = sessionStorage.getItem('wageQuery_batchNo');
			let organNo = sessionStorage.getItem('entryWage_organNo');
			let params = {};
			console.log('batchNo',batchNo);
			switch(command){
				case 'handleExport':
				  	//导出
				  	params = {
				  		batchNo: batchNo
				  	}
				  	this.handleExport(params);
				  	break;
				case 'handleImport':
				  	//导入
				  	break;
				case 'handleEnter':
				  	//单笔录入工资
					sessionStorage.setItem('entryWage_batchNo', batchNo);
					sessionStorage.setItem('entryWage_organNo', organNo);
					this.$router.push('/entry_wage');
				  	break;
				case 'handleStatus':
				  	//启用
					params = {
						batchNo: batchNo
					}
					//修改状态
				  	this.updateWageStatus(params);
				  	break;
				case 'handleEdit':
				 	 //编辑
					sessionStorage.setItem('editWage_batchNo', batchNo);
	            	this.$router.push('/edit_wage');
				  	break;
				case 'handleDelete':
				  	//删除
					const self = this;
				 	self.$confirm('此操作将会删除该条信息, 是否继续?', '提示', {
		                confirmButtonText: '确定',
		                cancelButtonText: '取消',
		                type: 'warning'
		           	}).then(() => {
		            	params = {
							batchNo: batchNo
						}
		            	console.log(params);
		            	//删除工资流程信息
		            	self.deleteWageFlow(params);
		            	
		            }).catch(() => {
		                self.$message('您已取消操作！');
		            });
				  	break;
				  
				default:
			}

		},
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					//条件查询工资列表
					self.queryWageList();
					
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
			this.pageNum = val;
			//分页查询工资列表
			this.queryWageList();
		},
		queryWageList() {
			let self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				organNo: this.ruleForm2.organNo,
				month: this.ruleForm2.startDate
			};
			self.$axios.get(baseURL+'/wage/queryWageFlowList', {params: params})
			.then(function(res) {
				console.log('WageList',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.models;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		deleteWageFlow(params) {
			let self = this;
			self.$axios.delete(baseURL+'/wage/deleteWageFlowInfo?batchNo='+params.batchNo)
			.then((res) => {
				console.log('deleteWageFlow',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					
					//查询工资列表
					self.queryWageList();
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		updateWageStatus(params) {
			let self = this;
			self.$axios.put(baseURL+'/wage/updateWageFlowStatus',params)
			.then((res) => {
				console.log('updateWageStatus',res);
				if(res.data.code === "S00000") {
					self.$message({ message: '操作成功', type: 'success' });
					
					//查询工资列表
					self.queryWageList();
				}
			}).catch((err) => {
				console.log('error');
			})
		},
		handleExport(params) {
			const self = this;
            this.$axios
                .get("/iem_hrm/wage/wageInfoExport", { params: params, responseType: 'blob' })
                .then((response) => {
                    console.log(response);
                    const fileName = "工资数据.xlsx"; 
                    const blob = response.data;

                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {

                        window.navigator.msSaveOrOpenBlob(blob, fileName);
                    } else {
                        let elink = document.createElement('a'); // 创建a标签
                        elink.download = fileName;
                        elink.style.display = 'none';
                        elink.href = URL.createObjectURL(blob);
                        document.body.appendChild(elink);
                        elink.click(); // 触发点击a标签事件
                        document.body.removeChild(elink);
                    }
                }).catch((e) => {
                    console.error(e)
                    self.$message({ message: '下载失败', type: 'error' });
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
		queryDerpList(params) {
			let self = this;
			self.$axios.get(baseURL+'/wage/queryDerpByUserNo', {params: params})
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

.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.el-dropdown-menu__item {
	position: relative;
}
.wage_upload {
    position: absolute;
    left: 2px;
    top: 0;
   
}
.wage_upload .uploadBtn {
    padding: 10px 45px;
}
</style>