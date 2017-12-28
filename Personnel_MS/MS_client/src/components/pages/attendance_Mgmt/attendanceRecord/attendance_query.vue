<template>
	<div class="attendance_query">
		<current yiji="考勤管理" erji="考勤记录管理"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">考勤记录管理</span>
				<div class="titleBtn_wrapper">
					<el-upload ref="upload" name="file" class="upload-demo imExport-btn-item"
		  			 	:on-change="changeUpload" 
		  			 	:on-success="successUpload"
		  			 	action="/iem_hrm/attence/batchimport" 
		  			 	:show-file-list="false" 
		  			 	:headers="token"
					>
                        <span class="icon-import" slot="trigger" title="导入"></span>
                   	</el-upload>
					<span class="icon-export imExport-btn-item" title="导出" @click="handleExport"></span>
					<span class="icon-download imExport-btn-item" title="下载模版" @click="handleDownloadTemplate"></span>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司" prop="compName">
							<el-select v-model="ruleForm2.compOrgNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="部门" prop="departName">
							<el-select v-model="ruleForm2.departOrgNo" value-key="departOrgNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="时间" prop="startDate">
							<el-date-picker
						      v-model="ruleForm2.startDate"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0"
							   :editable="false" @change="changeStartTime">
						   	</el-date-picker> -
							<el-date-picker
						      v-model="ruleForm2.endDate"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0"
							   :editable="false" @change="changeEndTime">
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="工号" prop="userNo">
							<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="transferDataList" border stripe style="width: 100%">
					<el-table-column prop="userNo" label="工号"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="companyName" label="公司名称"></el-table-column>
					<el-table-column prop="deptName" label="部门名称"></el-table-column>
					<el-table-column prop="attenceTime" label="考勤日期"></el-table-column>
					<el-table-column prop="attenceType" label="类型" :formatter="attenceTypeFormatter"></el-table-column>
					<el-table-column prop="taskTime" label="工时"></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="travelTimeFormatter"></el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows" >
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
import getDeepDerp from '../../../../common/GetDeepDerp'
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		var checkStartDate = (rule, value, callback) => {
	        if (this.ruleForm2.endDate && value >= this.ruleForm2.endDate) {
	          	callback(new Error('开始时间不能大于结束时间'));
	        } else {
	          	callback();
	        }
      	};
		var checkEndDate = (rule, value, callback) => {
	        if (this.ruleForm2.startDate && value <= this.ruleForm2.startDate) {
	          	callback(new Error('开始时间不能大于结束时间'));
	        } else {
	          	callback();
	        }
      	};
		return {
			pickerOptions0: {
	          disabledDate(time) {
//	            return time.getTime() < Date.now() - 8.64e7;
	          }
	       	},
	       	token: {
				Authorization:`Bearer `+localStorage.getItem('access_token'),
			},
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			ruleForm2: {
				compOrgNo: '',
				departOrgNo: '',
				userNo: "",
				startDate: "",
				endDate: ''
			},
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			//考勤信息列表
			transferDataList: [],
			rules: {
				startDate: [
	            	{ validator: checkStartDate, trigger: 'change' }
          		],
          		endDate: [
	            	{ validator: checkEndDate, trigger: 'change' }
          		]
			}
		}
	},
	components: {
		current
	},
	created() {
		this.ruleForm2.compOrgNo = '';
		this.ruleForm2.departOrgNo = '';
		this.ruleForm2.userNo = '';
		this.ruleForm2.startDate = '';
		this.ruleForm2.endDate = '';
		//查询公司列表
		this.queryCompList();
		//查询考勤列表
		this.queryAttenceList();
	},
	methods: {
		attenceTypeFormatter(row, column) {
	    	let attence = '';
	    	switch(row.attenceType){
				case '01':
				  attence = '迟到早退'
				  break;
				case '02':
				  attence = '旷工'
				  break;
				case '03':
				  attence = '事假'
				  break;
				case '04':
				  attence = '病假'
				  break;
				case '05':
				  attence = '产假'
				  break;
				default:
				  
			}
	    	return attence;
		},
		travelTimeFormatter(row, column) {
			let time = row.createdDate;
			return moment(time).format('YYYY-MM-DD');
		},
		changeUpload(file, fileList) {
			console.log(file);
      	},
      	successUpload(response, file, fileList) {
      		console.log('response',response)
      		if(response.code === "S00000") {
      			this.$message({ message: '操作成功', type: 'success' });
      			//查询考勤列表
				this.queryAttenceList();
      		} else {
      			this.$message({ message: response, type: 'error' });
      		}
      		
      	},
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endDate = val;
		},
		changeComp(val) {
			let params = {
				organNo: val
			}
			//查询部门列表
		 	this.queryDerpList(params);
	   },
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					//条件查询考勤列表
					self.queryAttenceList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.compOrgNo = '';
			this.ruleForm2.departOrgNo = '';
			this.ruleForm2.userNo = '';
			this.ruleForm2.startDate = '';
			this.ruleForm2.endDate = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			this.queryAttenceList();//分页查询考勤列表
		},
		//导出
		handleExport() {
			let self = this;
			let params = {
				organNo: self.ruleForm2.compOrgNo,
				derpNo: self.ruleForm2.departOrgNo,
				attenceUserNo: self.ruleForm2.userNo,
				attenceStartTime: self.ruleForm2.startDate,
				attenceEndTime: self.ruleForm2.endDate
			}
			self.exportFile(params);
		},
		//下载模版
		handleDownloadTemplate() {
			this.downloadFile();
		},
		//查询考勤列表
		queryAttenceList() {
			let self = this;
			let params = {
				pageNum: this.pageNum,
				pageSize: this.pageSize,
				organNo: self.ruleForm2.compOrgNo,
				derpNo: self.ruleForm2.departOrgNo,
				attenceUserNo: self.ruleForm2.userNo,
				attenceStartTime: self.ruleForm2.startDate,
				attenceEndTime: self.ruleForm2.endDate
			}
			self.$axios.get(baseURL+'/attence/queryAttenceList', {params: params})
			.then((res) => {
				console.log('List',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		//下载模版
		downloadFile() {
			const self = this;
			self.$axios.get(baseURL+'/file/downloadTemplate?templateName=考勤基本信息模板', {
                    responseType: 'blob'
                })
                .then((response) => {
					console.log(response);
                    const fileName = "考勤基本信息模板.xlsx"; 
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
                    self.$message({ message: '下载模版失败', type: 'error' });
                })
		},
		//导出
		exportFile(params) {
			const self = this;
			self.$axios.get(baseURL+'/attence/exportAttenceInfo',{
					params: params,
                    responseType: 'blob'
                })
                .then((response) => {
					console.log('response',response);
                    const fileName = "考勤信息.xlsx"; 
                    const blob = response.data;
//					debugger
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
                    self.$message({ message: '导出考勤信息失败', type: 'error' });
                })
		},
		//查询公司列表
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then((res) => {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		//查询部门列表
		queryDerpList(params) {
			let self = this;
			self.departList = [];
			self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
			.then((res) => {
				console.log('DerpList',res);
				this.ruleForm2.departOrgNo = '';
				if(res.data.code === "S00000") {
					res.data.data.forEach(item=>{
						self.departList.push({
							derpName: item.derpName,
							derpNo: item.derpNo,
						})
						if(item.depList.length!=0){
							getDeepDerp(item.depList,self.departList)
						}
					})
				}
				
			}).catch((err) => {
				console.log(err);
			})
		}
	}
}
</script>

<style scoped lang='scss'>
.attendance_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.attendance_query .imExport-btn {
	float: right;
}
.attendance_query .imExport-btn-item{
	display: inline-block;
	margin-left: 30px;
	cursor: pointer;
	vertical-align: middle;
    margin-top: 13px;
}
.attendance_query .el-upload__input {
    display: none;
}
.attendance_query .icon-import {
	display: inline-block;
	width: 16px;
	height: 16px;
	vertical-align: middle;
	background: url(../../../../../static/img/common/batch-import0.png);
}
.attendance_query .icon-export {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-export0.png);
}
.attendance_query .icon-download {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/template-download0.png);
}
.el-button + .el-button {
    margin-left: 20px;
}
</style>