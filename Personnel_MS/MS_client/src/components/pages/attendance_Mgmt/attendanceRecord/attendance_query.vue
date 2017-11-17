<template>
	<div class="attendance_wrap">
		<current yiji="考勤管理" erji="考勤记录管理"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">考勤记录管理</span>
				<div class="imExport-btn">
					<el-upload ref="upload" name="file" class="upload-demo imExport-btn-item"
		  			 	:on-change="changeUpload" 
		  			 	:on-success="successUpload"
		  			 	action="/iem_hrm/attence/batchimport" 
		  			 	:show-file-list="false" 
		  			 	:beforeUpload="beforeUpload"
		  			 	:headers="token"
					>
                        <span class="icon-import" slot="trigger" title="导入"></span>
                   	</el-upload>
					<span class="icon-export imExport-btn-item" title="导出" @click="handleExport"></span>
					<span class="icon-download imExport-btn-item" title="下载模版" @click="handleDownloadTemplate"></span>
				</div>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="公司" prop="compName">
								<el-select v-model="ruleForm2.compOrgNo" value-key="compOrgNo" @change="changeComp">
									<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="部门" prop="departName">
								<el-select v-model="ruleForm2.departOrgNo" value-key="departOrgNo">
									<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="时间" prop="startDate"">
								<el-date-picker
							      v-model="ruleForm2.startDate"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeStartTime">
							   	</el-date-picker> -
								<el-date-picker
							      v-model="ruleForm2.endDate"
							      type="date"
							      placeholder="选择日期"
							      :picker-options="pickerOptions0" @change="changeEndTime">
							   </el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="6">
							<el-form-item label="工号" prop="userNo">
								<el-input type="text" v-model="ruleForm2.userNo" placeholder="请输入工号"></el-input>
							</el-form-item>
						</el-col>
					</div>
					<div class="button-wrap">
						<el-button class="resetform" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button type="primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="transferDataList" border stripe style="width: 100%">
						<el-table-column prop="attenceNo" label="考勤编号"></el-table-column>
						<el-table-column prop="userNo" label="工号"></el-table-column>
						<el-table-column prop="custName" label="姓名"></el-table-column>
						<el-table-column prop="attenceTime" label="考勤日期"></el-table-column>
						<el-table-column prop="attenceType" label="类型" :formatter="attenceTypeFormatter"></el-table-column>
						<el-table-column prop="taskTime" label="工时"></el-table-column>
						<el-table-column prop="createdBy" label="录入人"></el-table-column>
						<el-table-column prop="createdDate" label="录入时间" :formatter="travelTimeFormatter"></el-table-column>
					</el-table>
				</div>
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
			comp: {
				compName: '',
				compOrgNo: ''
			},
			depart: {
				departName: '',
				departOrgNo: ''
			},
			//部门列表
			departList: [
				{derpName: "上海魔方分公司",derpNo: '01'},
				{derpName: "魔方分公司深圳分公司",derpNo: 'p1'},
				{derpName: "深圳前海橙色魔方信息技术有限公司",derpNo: '0'}
			],
			//公司列表
			compList: [
				{organName: "上海魔方分公司",organNo: '01'},
				{organName: "魔方分公司深圳分公司",organNo: 'p1'},
				{organName: "深圳前海橙色魔方信息技术有限公司",organNo: '0'}
			],
			transferDataList: [
				{
					attenceNo: "",//考勤编号
					userNo: "",//用户编号 
					custName: "",
					attenceTime: "",//考勤日期 
					attenceType: "",//考勤类型	
					projNo: "",//项目ID
					taskTime: "",//工时
					attenceStatus: "",//状态
					remark: "",//备注	
					createdBy: "",
					createdDate: ""
				}
			],
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
		let params = {
			pageNum: this.pageNum,
			pageSize: this.pageSize
		}
		//查询公司列表
		this.queryCompList();
		//查询考勤列表
		this.queryAttenceList(params);
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
      		console.log('response',response);
      		if(response.code === "S00000") {
      			this.$message({ message: '操作成功', type: 'success' });
      		}
      		
      	},
      	beforeUpload(file) {
      		const extension = file.name.split('.')[1] === 'xls'
	      	const extension2 = file.name.split('.')[1] === 'xlsx'
	      	const isLt2M = file.size / 1024 / 1024 < 10
	      	if (!extension && !extension2) {
	        	console.log('上传模板只能是 xls、xlsx 格式!')
	      	}
	      	if (!isLt2M) {
	        	console.log('上传模板大小不能超过 10MB!')
	      	}
	      	return extension || extension2 && isLt2M

      	},
		changeStartTime(val) {
			this.ruleForm2.startDate = val;
		},
		changeEndTime(val) {
			this.ruleForm2.endDate = val;
		},
		handleImport() {
			this.$router.push('/attendance_import');
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
			console.log(this.ruleForm2.startDate)
			self.$refs[formName].validate((valid) => {
				if (valid) {
					let params = {
						pageNum: this.pageNum,
						pageSize: this.pageSize,
						organNo: self.ruleForm2.compOrgNo,
						derpNo: self.ruleForm2.departOrgNo,
						attenceUserNo: self.ruleForm2.userNo,
						attenceStartTime: self.ruleForm2.startDate,
						attenceEndTime: self.ruleForm2.endDate
					}
					//条件查询考勤列表
					this.queryAttenceList(params);
					
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
			const self = this;
			let params = {
				"pageNum": val,
				"pageSize": self.pageSize
			}
			self.queryAttenceList(params);
		},
		//导出
		handleExport() {
			
		},
		//下载模版
		handleDownloadTemplate() {
			let params = {
				
			}
			this.downloadFile(params);
		},
		queryAttenceList(params) {
			let self = this;
			self.$axios.get(baseURL+'/attence/queryAttenceList', {params: params})
			.then(function(res) {
				console.log('List',res);
				if(res.data.code === "S00000") {
					self.transferDataList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		importExcel(params) {
			let self = this;
			self.$axios.post(baseURL+'/attence/batchimport', {params: params})
			.then(function(res) {
				console.log('batchimport',res);
				if(res.data.code === "S00000") {
					
				}
			}).catch(function(err) {
				console.log(err);
			})
		},
		downloadFile(params) {
			const self = this;
			self.$axios.get(baseURL+'/attence/download', {
                    responseType: 'blob'
                })
                .then((response) => {
					console.log(response);
                    const fileName = "考勤模板.xlsx"; 
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
                    this.$message({ message: '下载附件失败', type: 'error' });
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

<style>
.attendance_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.attendance_wrap .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.attendance_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.attendance_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.attendance_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.attendance_wrap .title_button {
	float: right;
	margin-top: 20px;
}
.attendance_wrap .content-inner {
	padding: 30px 0px;
}

.attendance_wrap .el-form-item__label {
	color: #999999;
	padding: 8px 10px 8px 0;
	margin: 0;
	font-weight: normal;
}
.attendance_wrap .el-form-item {
	margin-bottom: 30px;
}

.attendance_wrap .el-input,
.attendance_wrap .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
}

.attendance_wrap .el-form-item__content {
	line-height: 30px;
	position: relative;
	font-size: 14px;
}

.attendance_wrap .button-wrap {
	margin: 0px auto 30px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.attendance_wrap .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}

.attendance_wrap .el-input__inner:hover {
	border-color: #FF9900;
}

.attendance_wrap .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	padding: 7px 45px;
	height: 30px;
}

/*.attendance_wrap .el-button.resetform {
	margin-right: 20px;
}*/

.attendance_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.attendance_wrap .el-button+.el-button {
    margin-left: 20px;
}
.attendance_wrap .el-table td,
.attendance_wrap .el-table th {
	text-align: center;
}
.attendance_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.attendance_wrap .el-table th {
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}

.attendance_wrap .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.attendance_wrap .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.attendance_wrap .el-pager li {
	padding: 0 4px;
	border-right: 0;
	background: #fff;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	line-height: 24px;
	text-align: center;
}

.attendance_wrap .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.attendance_wrap .el-pagination button,
.attendance_wrap .el-pagination span {
	display: inline-block;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	color: #282828;
	line-height: 24px;
	vertical-align: top;
	box-sizing: border-box;
}

.attendance_wrap .el-pager li:hover {
	color: #FF9900;
}
.attendance_wrap .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.attendance_wrap .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.attendance_wrap .el-pagination button:hover {
	color: #FF9900;
}
.attendance_wrap .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.attendance_wrap .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.attendance_wrap .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.attendance_wrap .el-pagination .btn-next,
.attendance_wrap .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.attendance_wrap .el-autocomplete-suggestion__wrap,
.attendance_wrap .el-pager li {
	border: 1px solid #EEEEEE;
}

.attendance_wrap .el-pager li.btn-quicknext,
.attendance_wrap .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
.attendance_wrap .el-upload__input {
    display: none;
}
.attendance_wrap .btn_wrap {
	margin-top: 30px;
}
.attendance_wrap .upload_btn {
	display: inline-block;
	left: 100%;
}
.attendance_wrap .imExport-btn {
	float: right;
	margin-top: 19px;
}
.attendance_wrap .imExport-btn .imExport-btn-item{
	display: inline-block;
	margin-left: 30px;
	cursor: pointer;
}
.attendance_wrap .icon-import {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-import0.png);
}
.attendance_wrap .icon-export {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-export0.png);
}
.attendance_wrap .icon-download {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/template-download0.png);
}
.attendance_wrap .el-form-item__error {
    left: 39px;
}
</style>