<template>
	<div class="edit_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">人事调动修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata.oldOrganName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
							<el-input v-model="formdata.oldDerpName" :disabled="true"></el-input>
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
					<el-col :span="24" class="item-title">调动信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="调动类型" prop="shiftType">
						    <el-select v-model="formdata.shiftType" value-key="shiftType">
								<el-option v-for="item in shiftTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="调动生效时间" prop="shiftCameTime">
						    <el-date-picker type="date" v-model="formdata.shiftCameTime" @change="changeShiftCameTime" :editable="false" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原公司名称">
							<el-input v-model="formdata.oldOrganName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新公司名称" prop="newOrgId">
						    <el-select v-model="formdata.newOrgId" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原部门名称">
							<el-input v-model="formdata.oldDerpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新部门名称" prop="newDeprtId">
						    <el-select v-model="formdata.newDeprtId">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item.derpNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原直线经理">
						    <el-input v-model="formdata.oldLineManager" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新直线经理" prop="newLineManager">
						    <el-input v-model="formdata.newLineManager" @change="newLineManagerChange"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原岗位">
						    <el-select v-model="formdata.oldPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新岗位" prop="newPost">
						    <el-select v-model="formdata.newPost">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原职级">
						    <el-select v-model="formdata.oldClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新职级" prop="newClass">
						    <el-select v-model="formdata.newClass">
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
							  v-model="formdata.shiftReason">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
					  		<el-input v-model="formdata.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 :beforeUpload="beforeAvatarUpload"
					  			 action="/iem_hrm/custShifthis/updateCustShifthis" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
								 :name="filesName" 
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
	import moment from 'moment'
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
				newLineManagerFlag: '',
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//调动类型列表
				shiftTypeList: [],
			 	rules: {
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
						{ required: true, validator: checkNewLineManager, trigger: 'blur' }
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
			current
		},
		created() {
			
			//查询调动信息
			this.queryCustShifthisInfo();
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
				    workhisId: self.formdata.workhisId,
					oldOrgId: self.formdata.oldOrgId,
					oldDeprtId: self.formdata.oldDeprtId,
					newOrgId: self.formdata.newOrgId,
					newDeprtId: self.formdata.newDeprtId,
					userNo: self.formdata.userNo,
					shiftType: self.formdata.shiftType,
					shiftCameTime: self.formdata.shiftCameTime,
					oldLineManager: self.formdata.oldLineManager,
					newLineManager: self.formdata.newLineManager,
					oldPost: self.formdata.oldPost,
					newPost: self.formdata.newPost,
					oldClass: self.formdata.oldClass,
					newClass: self.formdata.newClass,
					shiftReason: self.formdata.shiftReason,
					attachm: self.formdata.attachm
				}
			}
		},
		methods: {
	      	changeShiftCameTime(time) {
	      		this.formdata.shiftCameTime = time;
	      	},
			changeComp(value) {
	            console.log('value',value);
	            let params = {
					organNo: value
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
				//  this.formdata.attachm = file.name;
				 fileList.forEach(function(item) {
					this.formdata.attachm += item.name + " ";
				}, this);
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
				this.$refs[formName].validate((valid) => {
					if(valid) {
						self.$refs.upload.submit();
						if(!self.fileFlag) {
							let params = {
								workhisId: self.formdata.workhisId,
								oldOrgId: self.formdata.oldOrgId,
								oldDeprtId: self.formdata.oldDeprtId,
								newOrgId: self.formdata.newOrgId,
								newDeprtId: self.formdata.newDeprtId,
								userNo: self.formdata.userNo,
								shiftType: self.formdata.shiftType,
								shiftCameTime: self.formdata.shiftCameTime,
								oldLineManager: self.formdata.oldLineManager,
								newLineManager: self.formdata.newLineManager,
								oldPost: self.formdata.oldPost,
								newPost: self.formdata.newPost,
								oldClass: self.formdata.oldClass,
								newClass: self.formdata.newClass,
								shiftReason: self.formdata.shiftReason,
								attachm: self.formdata.attachm
							}
							console.log('params',params)
							//无附件时修改
							self.updateCustShif(params);
						}
						

					} else {
						return false;
					}
				});
			},
			updateCustShif(params) {
				let self = this;
				self.$axios.put(baseURL+'/custShifthis/updateCustShifthis',params)
				.then(function(res) {
					console.log('update',res);
					if(res.data.code == "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/detail_transfer');
					}
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustShifthisInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('editTransfer_userNo');
				let workhisId = sessionStorage.getItem('editTransfer_workhisId');
				let params = {
					userNo: userNo,
					workhisId: workhisId
				}
				self.$axios.get(baseURL+'/custShifthis/queryCustShifthisDetail', {params: params})
				.then(function(res) {
					console.log('CustShifthisDetail',res);
					self.formdata = res.data.data;
					self.formdata.shiftCameTime = moment(self.formdata.shiftCameTime).format('YYYY-MM-DD hh:mm:ss');
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
				.then(function(res) {
					console.log('CompList',res);
					if(res.data.code == "S00000") {
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
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then(function(res) {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then(function(res) {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
					}
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryShiftTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=SHIFT_TYPE')
				.then(function(res) {
					console.log('shiftTypeList',res);
					if(res.data.code === "S00000") {
						self.shiftTypeList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
		}
	};
</script>

<style>
.edit_transfer {
	padding: 0 0 20px 20px;
}
</style>