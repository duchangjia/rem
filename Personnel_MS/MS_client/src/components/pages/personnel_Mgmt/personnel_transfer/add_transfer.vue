<template>
	<div class="add_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">人事调动新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules1" :model="formdata1" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
						    <el-input v-model="formdata1.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-input v-model="formdata1.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工号" prop="userNo">
						    <el-input v-model="formdata1.userNo" :disabled="true">
						    </el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata1.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
				  	<el-col :span="24" class="item-title">调动信息</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动类型" prop="shiftType">
						    <el-select v-model="formdata2.shiftType" @change="changeShiftType">
								<el-option v-for="item in shiftTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动生效时间" prop="shiftCameTime">
						    <el-date-picker type="date" v-model="formdata2.shiftCameTime" @change="changeShiftCameTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原公司名称">
						    <el-input v-model="formdata1.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新公司名称" prop="newOrgId">
						    <el-select v-model="formdata2.newOrgId" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原部门名称">
						    <el-input v-model="formdata1.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新部门名称" prop="newDeprtId">
						    <el-select v-model="formdata2.newDeprtId">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原直线经理">
						    <el-input v-model="formdata1.lineManager" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新直线经理" prop="newLineManager">
						    <el-input v-model="formdata2.newLineManager" @change="newLineManagerChange"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原岗位">
						    <el-select v-model="formdata1.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新岗位" prop="newPost">
						    <el-select v-model="formdata2.newPost">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原职级">
						    <el-select v-model="formdata1.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新职级" prop="newClass">
						    <el-select v-model="formdata2.newClass">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="调动原因" prop="shiftReason">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.shiftReason">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
							<el-input v-model="formdata2.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 :beforeUpload="beforeAvatarUpload"
					  			 action="/iem_hrm/custShifthis/addCustShifthis" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
								 name="files"
                                 :multiple="true"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
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
	import messageBox from "../../../common/messageBox-components.vue";
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkNewLineManager = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('直线经理不能为空'));
		        } else if (!this.newLineManagerFlag) {
					console.log('newLineManagerFlag',this.newLineManagerFlag)
		          	callback(new Error('请输入正确的直线经理工号'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				filesName: "files",
				fileFlag: '',
				newLineManagerFlag: '',//判断新直线经理是否存在标志
				
			    //原信息
			    formdata1: {},
			    //调动信息
				formdata2: {attachm: ''},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				shiftTypeList: [],
				rules1: {
					userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		]
				},
			 	rules2: {
		          	shiftType: [
		            	{ required: true, message: '调动类型不能为空', trigger: 'blur' }
	          		],
		          	shiftCameTime: [
		          		{ required: true, message: '生效日期不能为空', trigger: 'change' }
		          	],
		          	newOrgId: [
		          		{ required: true, message: '新公司名不能为空', trigger: 'blur' }
		          	],
		          	newDeprtId: [
	          			{ required: true, message: '新部门名不能为空', trigger: 'blur' }
		          	],
					newLineManager: [
						{ required: true, validator: checkNewLineManager, trigger: 'change' }
					],
					newPost: [
						{ required: true, message: '新岗位不能为空', trigger: 'blur' }
					],
					newClass: [
						{ required: true, message: '新职级不能为空', trigger: 'blur' }
					],
					shiftReason: [
						{ required: true, message: '调动原因不能为空', trigger: 'blur' }
					]
				}
			}
		},
		components: {
			current, messageBox
		},
		created() {
			//查询员工信息
			this.queryUserInfo();
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询调动类型列表
			this.queryShiftTypeList();
		},
		computed: {
			addFormdata: function(){
				const self = this;
				return {
				    newOrgId: self.formdata2.newOrgId,
					newDeprtId: self.formdata2.newDeprtId,
					userNo: self.formdata1.userNo,
					shiftType: self.formdata2.shiftType,
					shiftCameTime: self.formdata2.shiftCameTime,
					newLineManager: self.formdata2.newLineManager,
					newPost: self.formdata2.newPost,
					newClass: self.formdata2.newClass,
					shiftReason: self.formdata2.shiftReason
				}
			}
		},
		methods: {
			changeShiftType(value) {
				console.log('shiftType', value);
				if(value==='05') {
					console.log('true');
					console.log(this.formdata1.organNo);
					// this.formdata2.newOrgId = this.formdata1.organNo;
					// this.formdata2.newDeprtId = this.formdata1.derpNo;
					// this.formdata2.newLineManager = this.formdata1.lineManager;
				}
			},
			changeShiftCameTime(time) {
	      		this.formdata2.shiftCameTime = time;
	      	},
			changeComp(val) {
				let params = {
					organNo: val
				}
				//查询部门列表
				this.queryDerpList(params);
			},
			//校验直线经理是否存在
			newLineManagerChange(value) {
				let params = {
					userNo: value
				}
				this.$axios.get(baseURL+'/CustInfo/queryCustInfoByUserNo/'+ value)
				.then((res) => {
					console.log('newLineManagerChange',res);
					if(!res.data.data.userNo) {
						this.newLineManagerFlag = false;
					} else {
						this.newLineManagerFlag = true;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				 this.formdata2.attachm = file.name;
				//  fileList.forEach(function(item) {
				// 	this.formdata2.attachm += item.name + " ";
				// }, this);
				console.log("选中的fileList", fileList);
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: response.retMsg, type: 'success' });
	      			this.$router.push('/detail_transfer');
	      		} else {
	      			this.$message({ message: response.retMsg, type: 'error' });
	      		}
	      		
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
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          	self.$refs.formdata2.validate(valid => {
			            	if (valid) {
			            		self.$refs.upload.submit();
								if(!self.fileFlag) {
									let params = {
										newOrgId: self.formdata2.newOrgId,
										newDeprtId: self.formdata2.newDeprtId,
										userNo: self.formdata1.userNo,
										shiftType: self.formdata2.shiftType,
										shiftCameTime: self.formdata2.shiftCameTime,
										newLineManager: self.formdata2.newLineManager,
										newPost: self.formdata2.newPost,
										newClass: self.formdata2.newClass,
										shiftReason: self.formdata2.shiftReason
									}
									console.log('params',params)
									//无附件时人事调动添加
									self.addCustShif(params);
								}
			            	}
			        	})
			        }
		       })
				
			},
			addCustShif(params) {
				let self = this;
				self.$axios.post(baseURL+'/custShifthis/addCustShifthis',params)
				.then((res) => {
					console.log('addCustShif',res);
					if(res.data.code == "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
		      			self.$router.push('/detail_transfer');
		      		}
				}).catch((err) => {
					console.log('error');
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
			queryShiftTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=SHIFT_TYPE')
				.then((res) => {
					console.log('shiftTypeList',res);
					if(res.data.code === "S00000") {
						self.shiftTypeList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryUserInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('transfer_userNo');
				let params = {
					userNo: userNo
				}
				self.$axios.get(baseURL+'/CustInfo/queryCustInfoByUserNo/'+ userNo)
				.then((res) => {
					console.log('userInfo',res);
					self.formdata1 = res.data.data;
				}).catch((err) => {
					console.log(err);
				})
			}
		}
	};
</script>

<style>
.add_transfer {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

</style>