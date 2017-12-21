<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="请假管理" sanji="请假修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">请假修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
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
				        	<el-date-picker type="datetime" v-model="formdata2.leaveStartTime" @change="changeStartTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假结束时间" prop="leaveEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.leaveEndTime" @change="changeEndTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="请假类型" prop="leaveType">
						    <el-select v-model="formdata2.leaveType">
								<el-option v-for="item in leaveTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假累计工时" prop="timeSheet">
						    <el-input v-model="formdata2.timeSheet" placeholder="请输入请假累计工时"></el-input>
					  	</el-form-item>
					</el-col> 
				  	<el-col :span="24">
				  		<el-form-item class="remark" label="请假备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.remark">
							</el-input>
					  	</el-form-item>
				  	</el-col> 	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件">
					  		<el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple 
                                 :on-exceed="handleExceed"
								 :on-preview="handlePreview"
                                 :on-remove="handleRemove"
					  			 :on-change="changeUpload"
					  			 :on-success="successUpload"
								 :beforeUpload="beforeAvatarUpload"  
					  			 :show-file-list="true" 
					  			 :headers="token"
								 :limit="3"
								 :file-list="fileList"
					  		>
	                            <el-button slot="trigger" type="primary">选取文件</el-button>
	                        </el-upload>
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
			var checkLeaveStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('请假开始时间不能为空'));
		        } else if (this.formdata2.leaveEndTime && value >= this.formdata2.leaveEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkLeaveEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('请假结束时间不能为空'));
		        } else if (this.formdata2.leaveStartTime && value <= this.formdata2.leaveStartTime) {
		          	callback(new Error('请输入正确的结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileList: [],
				fileFlag: '',
				leaveStartTime: '',
				leaveEndTime: '',
				formdata1: {},
				formdata2: {},
				custPostList: [],
			    custClassList: [],
				leaveTypeList: [],
			 	rules: {
			 		leaveStartTime: [
		            	{ required: true, validator: checkLeaveStartTime, trigger: 'change' }
	          		],
					leaveEndTime: [
		            	{ required: true, validator: checkLeaveEndTime, trigger: 'change' }
	          		],
		          	leaveType: [
		            	{ required: true, message: '请假类型不能为空', trigger: 'blur' }
	          		],
	          		timeSheet: [
	          			{ required: true, message: '请假累计工时不能为空', trigger: 'blur' },
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的工时" }
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
		computed: {
			
		},
		created() {
			
			//查询请假详情
			this.leaveInfo();
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
				let index = this.fileList.indexOf(file);
				fileList.splice(index, 0, file);
				this.$confirm("此操作将永久删除, 是否继续?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(() => {
					this.$axios.delete("/iem_hrm/file/deleteFile/" + file.fileId)
						.then(res => {
						let result = res.data.retMsg;
						if ("操作成功" == result) {
							this.$message({ type: "success", message: result });
							fileList.splice(index, 1);
						} else {
							this.$message({ type: "error", message: result });
						}
						}).catch(e => {
							console.log(e);
							this.$message({ type: "error", message: e.retMsg });
					});
				}).catch(() => {
					this.$message({ type: "info", message: "已取消删除" });
				});
			},
			handlePreview(file) {
				// 点击已上传的文件链接时
				console.log(file);
				
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
					file.fileId = response.data;
	      			this.$message({ message: '操作成功,请点击保存按钮,保存修改', type: 'success' });
				  }
				  console.log('this.fileList',this.fileList);
				  console.log('上传成功的file',file);
			},
			  // 上传前对文件的大小的判断
		    beforeAvatarUpload (file) {
//		      const extension = file.name.split('.')[1] === 'xls'
//		      const extension2 = file.name.split('.')[1] === 'xlsx'
//		      const extension3 = file.name.split('.')[1] === 'doc'
//		      const extension4 = file.name.split('.')[1] === 'docx'
		      const isLt2M = file.size / 1024 / 1024 < 10
//		      if (!extension && !extension2 && !extension3 && !extension4) {
//		        console.log('上传文件只能是 xls、xlsx、doc、docx 格式!')
//		      }
		      if (!isLt2M) {
		      	this.$message({ message: '上传文件大小不能超过 10MB!', type: 'error' });
		      }
		      return  isLt2M	//extension || extension2 || extension3 || extension4 &&
		    },
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
							let fileIds = [];
							for(let k in self.fileList) {
								fileIds.push(self.fileList[k].fileId);
							}
							console.log('fileIds',fileIds)
							let params = {
								applyNo: self.formdata2.applyNo, //请假编号
								"userNo": self.formdata1.userNo, //"1004"
				    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
				    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
				    			"leaveType": self.formdata2.leaveType, //"3"
				    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
				    			"remark": self.formdata2.remark, //"请假的详细信息"
								fileIds: fileIds
							}
							//修改出差详情
							self.modifyTravelInfo(params);
					} else {
						return false;
					}
				});
			},
			leaveInfo() {
				let self = this;
				let applyNo = sessionStorage.getItem('editLeave_applyNo');
				let params = {
					applyNo: applyNo
				}
				self.$axios.get(baseURL+'/leave/queryLeaveInfos',{params: params})
				.then((res) => {
					console.log('leaveInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
						self.formdata2.timeSheet = self.formdata2.timeSheet + '';
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

						console.log("当前的fileList", self.fileList);
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
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/leave/modifyLeaveInfo',params)
				.then((res) => {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/leave_management');
					}
				}).catch((err) => {
					console.log('error');
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
			}
		}
	};
</script>

<style>

</style>