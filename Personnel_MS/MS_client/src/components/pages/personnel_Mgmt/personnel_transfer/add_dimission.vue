<template>
	<div class="add_dimission">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询" siji="员工离职新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">员工离职新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true" :rules="rules1" :model="formdata1" label-width="110px">
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
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata1.certNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-select v-model="formdata1.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-select v-model="formdata1.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata1.lineManager" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">	
					<el-col :span="24" class="item-title">离职信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间" prop="dimTime">
							<el-date-picker type="date" v-model="formdata2.dimTime" @change="changeDimTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型" prop="dimType">
						    <el-select v-model="formdata2.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="去向">
						    <el-input v-model="formdata2.hasGone"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资截止日" prop="payEndTime">
							<el-date-picker type="date" v-model="formdata2.payEndTime" @change="changePayEndTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="离职原因" prop="dimReason" style="width:100%;">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.dimReason">
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
					  			 action="/iem_hrm/custDimhis/addCustDimhis" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
								 :name="filesName"
                                 :multiple="true"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn downloadBtn">选取文件</el-button>
	                        </el-upload>
	                        <el-checkbox v-model="formdata2.dimProveFlag">是否需要出具离职证明</el-checkbox>
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
	import moment from 'moment'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				filesName: "files",
				fileFlag: '',
				//用户基本信息
				formdata1: {},
				//离职信息
				formdata2: {attachm: ''},
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//部门列表
				derpList: [],
				//公司列表
				compList: [],
				//离职类型列表
				dimTypeList: [],
				rules1: {
					userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		]
				},
				rules2: {
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
			current, 
			messageBox
		},
		created() {
			
			//查询公司列表
//			this.queryCompList();	
			//查询用户基本信息
			this.queryUserInfo();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询离职类型列表
			this.querydimTypeList();
		},
		computed: {
			addFormdata: function(){
				return {
					userNo: this.formdata1.userNo,//工号
					dimTime: this.formdata2.dimTime,
					dimType: this.formdata2.dimType,
					hasGone: this.formdata2.hasGone || '',
					payEndTime: this.formdata2.payEndTime,
					dimReason: this.formdata2.dimReason,
					dimProveFlag: this.formdata2.dimProveFlag ? '01': '02' //01->ture  02->false
				}
			}
		},
		methods: {
			changeDimTime(time) {
				this.formdata2.dimTime = time;
			},
			changePayEndTime(time) {
				this.formdata2.payEndTime = time;
			},
			changeValue(value) {
		 		console.log('value',value);
	            let params = {
	            	organNo: value
	            }
	            this.queryDerpList(params);
	      	},
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				 this.formdata2.attachm = file.name;
				//  fileList.forEach(function(item) {
				// 	this.formdata2.attachm += item.name + " ";
				// }, this);
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
	      			this.$router.push('/detail_dimission');
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
								if(!self.fileFlag){
									let params = {
									   userNo: this.formdata1.userNo,//工号
									   	dimTime: this.formdata2.dimTime,
										dimType: this.formdata2.dimType,
										hasGone: this.formdata2.hasGone,
										payEndTime: this.formdata2.payEndTime,
										dimReason: this.formdata2.dimReason,
										dimProveFlag: this.formdata2.dimProveFlag ? '01': '02' //01ture  02false
									}
									console.log('params',params)
									//无附件时新增信息
									self.addCustDimhis(params);
								}
			            	}
			        	})
			        }
		      	})
			},
			addCustDimhis(params) {
				let self = this;
				self.$axios.post(baseURL+'/custDimhis/addCustDimhis',params)
				.then((res) => {
					console.log('addCustDimhis',res);
					if(res.data.code == "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
		      			self.$router.push('/detail_dimission');
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
						self.derpList = res.data.data;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
		    queryUserInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('dimission_userNo');
				let params = {
					userNo: userNo
				}
				self.$axios.get(baseURL+'/CustInfo/queryCustInfoByUserNo/'+userNo)
				.then((res) => {
					console.log('userInfo',res);
					self.formdata1 = res.data.data;
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
			}
		}
	};
</script>

<style>
.add_dimission {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_dimission .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
}
.add_dimission .el-checkbox__inner:hover {
    border-color: #20a0ff;
}
.add_dimission .el-upload-list {
    margin: -40px 0 0 0;
}
</style>