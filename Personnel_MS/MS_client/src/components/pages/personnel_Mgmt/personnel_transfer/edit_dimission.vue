<template>
	<div class="edit_dimission">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询" siji="员工离职修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">员工离职修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true" :rules="rules" :model="formdata" label-width="122px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
						    <el-input v-model="formdata.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-input v-model="formdata.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata.userNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata.certNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-select v-model="formdata.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-select v-model="formdata.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata.lineManagerName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24" class="item-title">离职信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间" prop="dimTime">
						    <el-date-picker type="date" v-model="formdata.dimTime" @change="changeDimTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型" prop="dimType">
						    <el-select v-model="formdata.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="去向">
						    <el-input v-model="formdata.hasGone"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资截止日" prop="payEndTime">
						    <el-date-picker type="date" v-model="formdata.payEndTime" @change="changePayEndTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	 	         
				</el-form>
				<el-form :model="formdata" :rules="rules" ref="formdata2" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
					<el-col :span="24">
						<el-form-item label="离职原因" prop="dimReason" style="width:100%;">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.dimReason">
							</el-input>
					  	</el-form-item>
					</el-col>	         
				</el-form>
				<el-form ref="formdata3" :inline="true" :rules="rules" :model="formdata" label-width="122px" style="margin-top:0;overflow:visible;">	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" >
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
	                        <el-checkbox v-model="formdata.dimProveFlag">是否需要出具离职证明</el-checkbox>
					  	</el-form-item>
					</el-col>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	import moment from 'moment'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
      			labelPosition: "right",
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileList: [],
				fileFlag: '',
				triRemoveFlag: true,
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//离职类型列表
				dimTypeList: [],
				rules: {
		          	dimTime: [
		            	{ required: true, message: '离职时间不能为空', trigger: 'change' }
	          		],
					dimType: [
		            	{ required: true, message: '离职类型不能为空', trigger: 'blur' }
	          		],
					payEndTime: [
		            	{ required: true, message: '工资截止日不能为空', trigger: 'change' }
	          		],
					dimReason: [
		            	{ required: true, message: '离职原因不能为空', trigger: 'blur' }
	          		]
	          	}
			};
		},
		components: {
			current
		},
		computed: {
			
		},
		created() {
			
			//人事离职详情查询
			this.queryCustDimhisDetail(); 
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询离职类型列表
			this.querydimTypeList();
		},
		methods: {
			changeDimTime(time) {
				this.formdata.dimTime = time;
			},
			changePayEndTime(time) {
				this.formdata.payEndTime = time;
			},
			changeComp(value) {
		 		console.log('value',value);
	            let params = {
	            	organNo: value
	            }
	            this.queryDerpList(params);
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
	      		}
	      		console.log('this.fileList',this.fileList);
				  console.log('上传成功的file',file);
			},
			// 上传前对文件的大小的判断
		    beforeAvatarUpload (file) {
		      const isLt2M = file.size / 1024 / 1024 < 10
		      if (!isLt2M) {
				  this.$message({ message: '上传文件大小不能超过 10MB!', type: 'error' });
				  this.triRemoveFlag = false;
		      } else {
				  this.triRemoveFlag = true;
			  }
		      return  isLt2M	
		    },
	      	save(formName) {
				const self = this;
				self.$refs.formdata1.validate((valid) => {
					if(valid) {
						self.$refs.formdata2.validate((valid) => {
							if(valid) {
								let fileIds = [];
								for(let k in self.fileList) {
									fileIds.push(self.fileList[k].fileId);
								}
								let params = {
									dimId: this.formdata.dimId,
									userNo: this.formdata.userNo,
									dimTime: this.formdata.dimTime,
									dimType: this.formdata.dimType,
									hasGone: this.formdata.hasGone,
									payEndTime: this.formdata.payEndTime,
									dimReason: this.formdata.dimReason,
									dimProveFlag: this.formdata.dimProveFlag ? '01': '02',  //01ture  02false
									fileIds: fileIds
								};
								console.log('params',params)
								//无附件时修改
								self.updateCustDimhis(params);
							}
						})
							
							
					} 
				});
			},
			updateCustDimhis(params) {
				let self = this;
				self.$axios.put(baseURL+'/custDimhis/updateCustDimhis',params)
				.then((res) => {
					console.log('updateCustDimhis',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
		      			self.$router.push('/detail_dimission');
		      		}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustDimhisDetail() {
				let self = this;
				let userNo = sessionStorage.getItem('editDimission_userNo');
				let dimId = sessionStorage.getItem('editDimission_dimId');
				let params = {
					userNo: userNo,
					dimId: dimId
				}
				self.$axios.get(baseURL+'/custDimhis/queryCustDimhisDetail', {params: params})
				.then((res) => {
					console.log('dimDetail',res);
					self.formdata = res.data.data;
					self.formdata.dimProveFlag = self.formdata.dimProveFlag=='01' ? true: false;
					if (
						self.formdata.epFileManageList &&
						self.formdata.epFileManageList.length >= 1
					) {
						self.formdata.epFileManageList.forEach(function(ele) {
							self.fileList.push({
								name: ele.fileName + "." + ele.fileSuffix,
								url: ele.fileAddr,
								fileId: ele.fileId
							});
						}, this);
					}
				}).catch((err) => {
					console.log(err);
				})
			},
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
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
				.then((res) => {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.departList = res.data.data;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			querydimTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=DIM_TYPE')
				.then((res) => {
					console.log('dimType',res);
					if(res.data.code === "S00000") {
						self.dimTypeList = res.data.data;
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
.edit_dimission {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.edit_dimission .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
}
.edit_dimission .el-checkbox__inner:hover {
    border-color: #20a0ff;
}
</style>