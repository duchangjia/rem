<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="社保数据查询"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">社保数据查询</span>
				<div class="titleBtn_wrapper">
                   	<el-button class="btn-primary" @click="handleSocial">导入</el-button>
					<el-button class="btn-primary">导出</el-button>
				</div>
				
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司名称">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="身份证号">
							<el-input v-model="ruleForm2.certNo" placeholder="请输入身份证号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="社保数据周期" prop="startDate"">
							<el-date-picker
						      v-model="ruleForm2.startDate"
						      type="month"
						      placeholder="选择日期"
						      @change="changeStartTime"
						     >
						   	</el-date-picker> -
							<el-date-picker
						      v-model="ruleForm2.endDate"
						      type="month"
						      placeholder="选择日期"
						      @change="changeEndTime"
						     >
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="companyName" label="公司名称"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="certNo" label="身份证号"></el-table-column>
					<el-table-column prop="gryTime" label="社保数据周期" :formatter="gryTimeFormatter"></el-table-column>
					<el-table-column prop="yanglaoTotal" label="养老合计" ></el-table-column>
					<el-table-column prop="yiliaoTotal" label="医疗合计" ></el-table-column>
					<el-table-column prop="siyeTotal" label="失业合计" ></el-table-column>
					<el-table-column prop="shenyuTotal" label="生育合计" ></el-table-column>
					<el-table-column prop="gongshangTotal" label="工伤合计" ></el-table-column>
					<el-table-column prop="houseTotal" label="公积金合计" ></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
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
				certNo: '',
				startDate: "",
				endDate: ''
			},
			transferDataList: [
				{
					companyName: "深圳分公司",
					custName: "小李",
					certNo: "54000000000",
					gryTime: "2017-10",
					yanglaoTotal: "1",
					yiliaoTotal: "1",
					siyeTotal: "1",
					shenyuTotal: "1",
					gongshangTotal: "1",
					houseTotal: "1",
					createdBy: "P000000",
					createdDate: "2017-10-1"
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
		gryTimeFormatter(row, column) {
	      return row.gryTime ? moment(row.gryTime).format('YYYY-MM-DD') : null;
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
		changeEndTime(val) {
			this.ruleForm2.endDate = val;
		},
		changeComp(val) {
			console.log(val);
		},
		handleSocial() {
			this.$router.push('/import_socialSecurity');
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
			this.ruleForm2.certNo = '';
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
.titleBtn_wrapper {
	float: right;
}
.titleBar .btn-primary {
	float: none;
}
.el-button + .el-button {
    margin-left: 20px;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>