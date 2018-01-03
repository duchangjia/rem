<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="加班管理" sanji="加班修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">加班修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules" :model="formdata2" label-width="122px">
						
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
					<el-col :span="24" class="item-title">加班信息</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班开始时间" prop="workotStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.workotStartTime" @change="changeStartTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班结束时间" prop="workotEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.workotEndTime" @change="changeEndTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班类型" prop="workotType">
						    <el-select v-model="formdata2.workotType" value-key="workotType">
								<el-option v-for="item in workotTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班累计工时" prop="timeSheet">
						    <el-input v-model="formdata2.timeSheet" placeholder="请输入加班累计工时"></el-input>
					  	</el-form-item>
					</el-col>	 
				</el-form>
				<el-form :model="formdata2" :rules="rules" ref="formdata2" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
					<el-col :span="24">
				  		<el-form-item class="remark" label="加班备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.remark">
							</el-input>
					  	</el-form-item>
				  	</el-col>       
				</el-form>
				<el-form ref="formdata3" :inline="true"  :rules="rules" :model="formdata2" label-width="122px" style="margin-top:0;overflow:visible;">  	
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
	                            <el-button slot="trigger" type="primary" >选取文件</el-button>
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
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('加班开始时间不能为空'));
		        } else if (this.formdata2.workotEndTime && value >= this.formdata2.workotEndTime) {
		          	callback(new Error('开始时间不能大于结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('加班结束时间不能为空'));
		        } else if (this.formdata2.workotStartTime && value <= this.formdata2.workotStartTime) {
		          	callback(new Error('开始时间不能大于结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
      			labelPosition: "right",
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileList: [],
				triRemoveFlag: true,
				fileFlag: '',
				formdata1: {
				},
				formdata2: {
					companyName: "",
					deptName: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					applyNo: "",
					workotStartTime: "", //2017-10-12-21 10:20:20
					workotEndTime: "",
					workotType: "",
					workotStartCity: "",
					workotArrivalCity: "",
					timeSheet: "",
					workotSTD: "",
					remark: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//加班类型列表
				workotTypeList: [],
			 	rules: {
			 		workotStartTime: [
		            	{ required: true, validator: checkWorkotStartTime, trigger: 'change' }
	          		],
					workotEndTime: [
		            	{ required: true, validator: checkWorkotEndTime, trigger: 'change' }
	          		],
		          	workotType: [
		            	{ required: true, message: '加班类型不能为空', trigger: 'blur' }
	          		],
	          		timeSheet: [
		            	{ required: true, message: '加班累计工时不能为空', trigger: 'blur' },
						{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的工时" }
	          		],
	          		remark: [
	          			{ required: true, message: '加班备注不能为空', trigger: 'blur' },
	          			{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
	          		]
				}
			}
		},
		components: {
			current
		},
		created() {
			
			//查询加班详细信息
			this.workotInfo();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询加班类型列表
			this.queryWorkotTypeList();
		},
		computed: {
			
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.workotStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.workotEndTime = time;
			},
	      	//上传附件
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				this.fileList = fileList;
				console.log("选中的fileList", fileList); 
			},
			handleRemove(file, fileList) {
				if(this.triRemoveFlag) {
					// 移除文件
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
				}
				
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
					// this.$router.push('/leave_management');
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
				  this.triRemoveFlag = false;
		      } else {
				  this.triRemoveFlag = true;
			  }
		      return  isLt2M	//extension || extension2 || extension3 || extension4 &&
		    },
	      	save(formName) {
				const self = this;
				self.$refs.formdata1.validate((valid) => {
					if(valid) {
						self.$refs.formdata2.validate((valid) => {
							if(valid) {
								self.$refs.formdata3.validate((valid) => {
									if(valid) {
										let fileIds = [];
										for(let k in self.fileList) {
											fileIds.push(self.fileList[k].fileId);
										}
										console.log('fileIds',fileIds)
										let params = {
											"applyNo": self.formdata2.applyNo, 
											"userNo": self.formdata2.userNo,
											"workotStartTime": self.formdata2.workotStartTime, 
											"workotEndTime": self.formdata2.workotEndTime,
											"workotType": self.formdata2.workotType, 
											"timeSheet": self.formdata2.timeSheet, 
											"remark": self.formdata2.remark,
											fileIds: fileIds
										}
										//修改加班详细信息
										self.modifyTravelInfo(params);
										
									}
								})
							}
						})
							
					}
				});
			},
			workotInfo() {
				const self = this;
				let applyNo = sessionStorage.getItem('editOvertime_applyNo');
				let params = {
					applyNo: applyNo
				}
				self.$axios.get(baseURL+'/workot/queryWorkOtInfos',{params: params})
				.then((res) => {
					console.log('workotInfo',res);
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
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/workot/modifyWorkOtInfo',params)
				.then((res) => {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/overtime_management');
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
			},
			queryWorkotTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=WORKOT_TYPE')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.workotTypeList = res.data.data;
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