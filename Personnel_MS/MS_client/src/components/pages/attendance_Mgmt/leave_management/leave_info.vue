<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="请假管理" sanji="请假详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">请假详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="122px">
						
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata2.userNo" :disabled="true"></el-input>
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata2.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata2.companyName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata2.deptName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>			
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-select v-model="formdata2.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-select v-model="formdata2.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
				  	<el-col :span="24" class="item-title">请假信息</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假开始时间" prop="leaveStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.leaveStartTime" @change="changeStartTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="请假结束时间" prop="leaveEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.leaveEndTime" @change="changeEndTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假类型" prop="leaveType">
						    <el-select v-model="formdata2.leaveType" value-key="leaveType" @change="changeValue" :disabled="true">
								<el-option v-for="item in leaveTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假累计工时">
						    <el-input v-model="formdata2.timeSheet" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
				</el-form> 
				<el-form :model="formdata2" :rules="rules" ref="formdata2" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
					<el-col :span="24">
				  		<el-form-item class="remark" label="请假备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.remark" :disabled="true">
							</el-input>
					  	</el-form-item>
				  	</el-col> 	      
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="122px" style="margin-top:0;overflow:visible;">  	
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
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width:100%;">
							<ul>
								<li v-for="item in fileList" :key="item.fileId">
									<span class="fileText">{{item.name}}</span>
									<el-button class="downBtn" @click="handleDownloadFile(item)">下载</el-button>
								</li>
							</ul>
					  	</el-form-item>
					</el-col>	  	
					  	
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	const baseURL = 'iem_hrm';
	export default {
		data() {
			return {
      			labelPosition: "right",
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileList: [],
				formdata: {},
				formdata2: {},
				//岗位列表
				custPostList: [],
				//职级列表
			    custClassList: [],
			    //请假类型列表
				leaveTypeList: [],
			 	rules: {
		          	leaveType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		]
				}
			}
		},
		components: {
			current
		},
		created() {
			
			//查询请假详情
			this.queryLeaveInfo();
			//请假列表查询
			this.queryLeaveTypeList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.leaveStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.leaveEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
			},
			  //上传附件
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				this.fileList = fileList;
				console.log("选中的fileList", fileList); 
			},
			handleRemove(file, fileList) {
				// 移除文件
				console.log(file, fileList);
				console.log("移除的file", file);
				// let params = {
				// 	fileId: file.fileId
				// }
				// this.removeFile(params);
			},
			handlePreview(file) {
				// 点击已上传的文件链接时
				console.log(file);
				// let params = {
				// 	name: file.name,
				// 	fileId: file.fileId
				// }
				// this.downloadFile(params);
			},
			handleExceed(files, fileList) {
				// 文件超出数量
				this.$message.warning(
					`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
					fileList.length} 个文件`
				);
			},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
	      			// this.$router.push('/travel_management');
	      		}
	      		
			},
			handleDownloadFile(file) {
				console.log(file);
				let params = {
					name: file.name,
					fileId: file.fileId
				}
				this.downloadFile(params);
			},
			queryLeaveInfo() {
				const self = this;
				let applyNo = sessionStorage.getItem('leaveInfo_applyNo');
				let params = {
					applyNo: applyNo
				}
				self.$axios.get(baseURL+'/leave/queryLeaveInfos',{params: params})
				.then((res) => {
					console.log('queryLeaveInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
						if (
							self.formdata2.epFileManageList &&
							self.formdata2.epFileManageList.length >= 1
						) {
							self.formdata2.epFileManageList.forEach(function(ele) {
							self.fileList.push({
								name: ele.fileName + "." + ele.fileSuffix,
								url: ele.fileAddr,
								fileId: ele.fileId
							});
							}, this);
						}
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			removeFile(params) {
				let self = this;
				self.$axios.delete(baseURL+'/file/deleteFile/',params)
				.then((res) => {
					console.log('deleteFile',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/file/downloadFile/'+params.fileId, {
				responseType: 'blob' 
				})
				.then((response) => {
					const fileName = params.name;
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
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res) => {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryLeaveTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=LEAVE_TYPE')
				.then((res) => {
					console.log('sysParamMgmt',res);
					if(res.data.code === "S00000") {
						self.leaveTypeList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.fileText {
	color: #999999;
	font-size: 14px;
	padding-right: 20px;
}
.downBtn {
	color: #ffffff;
	background: #ff9900;
}
.el-button.downBtn:focus, .el-button.downBtn:hover {
    color: #ffffff;
    border-color: #ff9900;
}
</style>