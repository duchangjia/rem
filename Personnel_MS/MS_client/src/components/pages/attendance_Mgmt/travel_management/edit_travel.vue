<template>
	<div class="edit_travel">
		<current yiji="考勤管理" erji="出差管理" sanji="出差修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">出差修改</span>
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
					<el-col :span="24" class="item-title">出差信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差开始时间" prop="travelStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.travelStartTime" @change="changeStartTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差结束时间" prop="travelEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.travelEndTime" @change="changeEndTime" :editable="false" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差类型" prop="travelType">
						    <el-select v-model="formdata2.travelType" value-key="travelType" >
								<el-option v-for="item in travelTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item class="travelCity_wrap" label="出差城市" prop="travelStartCity">
						    <el-input class="travelCity" v-model="formdata2.travelStartCity" placeholder="出发城市"></el-input>
					  	</el-form-item>
					  	<span class="travelCity_line" >分割线</span>
					  	<el-form-item class="travelCity_wrap2" prop="travelArrivalCity">
						    <el-input class="travelCity" v-model="formdata2.travelArrivalCity" placeholder="到达城市"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差天数" prop="travelDays">
						    <el-input v-model="formdata2.travelDays"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="差补标准" prop="travelSTD">
						    <el-input v-model="formdata2.travelSTD" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
				  	<el-col :span="24">
				  		<el-form-item class="remark" label="出差备注" prop="remark">
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
	import moment from 'moment'
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkTravelStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('出差开始时间不能为空'));
		        } else if (this.formdata2.travelEndTime && value >= this.formdata2.travelEndTime) {
		          	callback(new Error('出差开始时间不能大于结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkTravelEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('出差结束时间不能为空'));
		        } else if (this.formdata2.travelStartTime && value <= this.formdata2.travelStartTime) {
		          	callback(new Error('出差开始时间不能大于结束时间'));
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
				caclStarttimeFlag: false,
				caclEndtimeFlag: false,
				custPostName: '',
				custClass: '',
				travelStartTime: '',
				travelEndTime: '',
				formdata2: {},
				//岗位列表
				custPostList: [],
				//职级列表
			    custClassList: [],
				//出差类型列表
				travelTypeList: [],
			 	rules: {
			 		travelType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		],
	          		travelStartTime: [
		            	{ required: true, validator: checkTravelStartTime, trigger: 'change' }
	          		],
	          		travelEndTime: [
		            	{ required: true, validator: checkTravelEndTime, trigger: 'change' }
	          		],
	          		travelStartCity: [
		            	{ required: true, message: '出差出发城市不能为空', trigger: 'blur' }
	          		],
	          		travelArrivalCity: [
		            	{ required: true, message: '出差到达城市不能为空', trigger: 'blur' }
	          		],
	          		travelDays: [
		            	{ required: true, message: '出差天数不能为空', trigger: 'blur' },
						{ pattern: /^[\d(\.\d)?]{0,8}$/, message: "请输入正确的天数" }
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
			
			//查询出差详情
			this.queryTravelInfo();
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList()
			//查询出差类型列表
			this.queryTravelTypeList();
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.travelStartTime = time;
				// if(this.caclStarttimeFlag) {
				// 	let params = {
				// 		travelStartTime: this.formdata2.travelStartTime,
				// 		travelEndTime: this.formdata2.travelEndTime
				// 	}
				// 	if(this.formdata2.travelEndTime) {
				// 		this.calTravelDays(params);
				// 	}	
				// }
				// this.caclStarttimeFlag = true;
					
			},
			changeEndTime(time) {
				// this.formdata2.travelEndTime = time;
				this.formdata2.travelEndTime = time;
				// if(this.caclEndtimeFlag) {
				// 	let params = {
				// 		travelStartTime: this.formdata2.travelStartTime,
				// 		travelEndTime: this.formdata2.travelEndTime
				// 	}
				// 	if(this.formdata2.travelStartTime) {
				// 		this.calTravelDays(params);
				// 	}
				// }
				// this.caclEndtimeFlag = true;
			},
			changeCompValue(value) {
				const self = this;
				let params = {
					organNo: value
				}
				//查询部门列表
				self.queryDerpList(params);
			},
			changeValue(value) {
		 		const self = this;
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
				let params = {
					fileId: file.fileId
				}
				this.removeFile(params);
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
		      }
		      return  isLt2M	//extension || extension2 || extension3 || extension4 &&
		    },
	      	//修改出差详细信息
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
							let fileIds = [];
							for(let k in self.fileList) {
								fileIds.push(self.fileList[k].fileId);
							}
							let params = {
								applyNo: self.formdata2.applyNo, //出差编号
							    userNo: self.formdata2.userNo,//工号
							    travelType: self.formdata2.travelType,//出差类型
							    travelStartTime: self.formdata2.travelStartTime,//出差开始时间	
							    travelEndTime: self.formdata2.travelEndTime, //出差结束时间
							    travelStartCity: self.formdata2.travelStartCity,//出差开始城市	
							    travelArrivalCity: self.formdata2.travelArrivalCity,//出差到达城市
							    travelDays: self.formdata2.travelDays, //出差天数  
							    travelSTD: self.formdata2.travelSTD,//差补标准
								remark: self.formdata2.remark,//备注
								fileIds: fileIds
							}
							console.log('self.fileList',self.fileList);
							console.log('params',params);
							//修改信息
							self.modifyTravelInfo(params);
						
					} else {
						return false;
					}
				});
			},
			queryTravelInfo() {
				let self = this;
				let applyNo = sessionStorage.getItem('editTravel_applyNo');
				let params = {
					applyNo: applyNo
				}
				self.$axios.get(baseURL+'/travel/getTravelInfoByApplyNo',{params: params})
				.then((res) => {
					console.log('travelInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
						self.formdata2.travelDays = self.formdata2.travelDays + '';
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
				self.$axios.post(baseURL+'/travel/modifyTravelInfo',params)
				.then((res) => {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/travel_management');
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			removeFile(params) {
				let self = this;
				self.$axios.delete(baseURL+'/file/deleteFile/'+params.fileId)
				.then((res) => {
					console.log('deleteFile',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			calTravelDays(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/calTravelDays',{params})
				.then((res) => {
					console.log('calTravelDays',res);
					if(res.data.code === "S00000") {
						self.formdata2.travelDays = res.data.data.travelDays;
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryAllCompany')
				.then((res) => {
					console.log('CompList',res);
					self.compList = res.data.data;
				}).catch((err)  => {
					console.log(err);
				})
			},
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryChildrenDep', {params: params})
				.then((res) => {
					console.log('DerpList',res);
					self.departList = res.data.data;
				}).catch((err) => {
					console.log('err');
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
			queryTravelTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=TRAVEL_TYPE')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.travelTypeList = res.data.data;
					}
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.edit_travel {
	padding: 0 0 20px 20px;
}
.edit_travel .travelCity_wrap2{
	padding-left: 0;
}
.edit_travel .travelCity_line {
    width: 10px;
    height: 1px;
    display: inline-block;
    background: #8391a5;
    margin: 17px 5px;
}
.edit_travel .travelCity_wrap .el-form-item__content,
.edit_travel .travelCity_wrap2 .el-form-item__content,
.edit_travel .travelCity_wrap .el-input__inner,
.edit_travel .travelCity_wrap2 .el-input__inner {
	width: 130px!important;
}
.edit_travel .travelCity_wrap2 .el-form-item__content {
	margin-left: 10px;
}
</style>