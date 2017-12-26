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
						    <el-select v-model="formdata.shiftType" value-key="shiftType" @change="changeShiftType">
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
						    <el-select v-model="formdata.newOrgId" @change="changeComp" :disabled=disabledFlag>
								<el-option v-for="item in compListAll" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
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
						    <el-select v-model="formdata.newDeprtId" @change="changeDerp" :disabled=disabledFlag>
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
							<el-select v-model="formdata.newLineManager" :disabled=disabledFlag>
								<el-option v-for="item in userList" :key="item.userNo" :label="item.userNo" :value="item.userNo"></el-option>
							</el-select>
						    <!-- <el-input v-model="formdata.newLineManager" @change="newLineManagerChange" :disabled=disabledFlag >
								<el-button slot="append" icon="search" @click="userNoSelect"></el-button>
							</el-input> -->
					  		<messageBox 
                                :title="boxTitle"
                                :tableOption.sync="tableOption"  
                                :inputFirstOption.sync="inputFirstOption" 
                                :inputSecOption.sync="inputSecOption"
                                :searchData.sync="searchData" 
                                :searchUrl="searchUrl"
                                :dialogVisible.sync="dialogVisible"
                                :pagination.sync="msgPagination"
                                @dialogConfirm="dialogConfirm"
                                ></messageBox>
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
						    <el-select v-model="formdata.newPost" :disabled=disabledFlag>
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
						    <el-select v-model="formdata.newClass" :disabled=disabledFlag>
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
	import messageBox from "../../../common/messageBox-components.vue";
	import moment from 'moment'
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkNewLineManager = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('直线经理不能为空'));
				} 
				// else if (!this.newLineManagerFlag) {
				// 	console.log('newLineManagerFlag',this.newLineManagerFlag)
		        //   	callback(new Error('请输入正确的直线经理工号'));
				// }
				 else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileList: [],
				fileFlag: '',
				newLineManagerFlag: true,//判断新直线经理是否存在标志
				disabledFlag: false, //判断调动类型是否工资调整
				triRemoveFlag: true,
				changeCompStepFlag: true,
				//员工信息
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//所有公司列表
				compListAll: [],
				//员工列表
				userList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//调动类型列表
				shiftTypeList: [],

				dialogVisible:false,
			    tableOption:[],
			    inputFirstOption:{},
			    inputSecOption:{},
			    msgPagination:{},
			    searchData:{},
			    searchUrl:'',
			    saveUrl:'',
			    boxTitle:'',
				numType:'',
				
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
			current,
			messageBox
		},
		created() {
			
			//查询调动信息
			this.queryCustShifthisInfo();
			//查询公司列表
			this.queryCompList();
			//查询所有公司列表
			this.queryAllCompList();
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
				sessionStorage.setItem('editTransfer_organNo', value);
				if(this.changeCompStepFlag){
					this.changeCompStepFlag = false;
				}else {
					this.formdata.newDeprtId = '';
					this.formdata.newLineManager = '';
					this.formdata.newPost = '';
					this.formdata.newClass = '';
					this.userList = [];
				}
			},
			changeDerp(val) {
				let organNo = sessionStorage.getItem('editTransfer_organNo');
				let params = {
					organNo: organNo,
					derpNo: val
				};
				//查询员工列表
				this.queryUserList(params);
			},
			changeShiftType(val) {
				console.log('shiftType',val);
				console.log('self.formdata.newOrgId'+this.formdata.newOrgId);
				let self = this;
				if(val === '05') {//工资调整时
					self.formdata.newOrgId = self.formdata.oldOrgId;
					self.formdata.newDeprtId = self.formdata.oldDeprtId;
					self.formdata.newLineManager = self.formdata.oldLineManager;
					self.formdata.newPost = self.formdata.oldPost;
					self.formdata.newClass = self.formdata.oldClass;
					self.disabledFlag=true;
				} else {
					// self.formdata.newOrgId = '';
					// self.formdata.newDeprtId = '';
					// self.formdata.newLineManager = '';
					// self.formdata.newPost = '';
					// self.formdata.newClass = '';
					self.disabledFlag=false;
				}
				
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
	      	//上传附件
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				this.fileList = fileList;
				console.log("选中的fileList", fileList); 
			},
			handleRemove(file, fileList) {
				if(this.triRemoveFlag) {
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
				this.$refs[formName].validate((valid) => {
					if(valid) {
							let fileIds = [];
							for(let k in self.fileList) {
								fileIds.push(self.fileList[k].fileId);
							}
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
								fileIds: fileIds
							}
							console.log('params',params)
							//无附件时修改
							self.updateCustShif(params);
						

					} else {
						return false;
					}
				});
			},
			updateCustShif(params) {
				let self = this;
				self.$axios.put(baseURL+'/custShifthis/updateCustShifthis',params)
				.then((res) => {
					console.log('update',res);
					if(res.data.code == "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/detail_transfer');
					}
				}).catch((err) => {
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
				.then((res) => {
					console.log('CustShifthisDetail',res);
					self.formdata = res.data.data;
					self.formdata.shiftCameTime = moment(self.formdata.shiftCameTime).format('YYYY-MM-DD hh:mm:ss');
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
			dialogConfirm(ajaxNo){
		        let self = this;
		        let params = {
		        	userNo: ajaxNo.stateNo
		        }
		        self.$axios
		        .get( self.saveUrl, {params} )
		        .then(res => {
		          if (res.data.code == 'S00000'){
		            self.dialogVisible = false;
		            self.formdata.newLineManager = res.data.data.userNo;
		          }
		        })
		        .catch(e => {
		          console.log('error')
		        });
		    },
		    userNoSelect(){
		        //table
		        this.tableOption = [
		            {
		                thName:'工号',//table 表头
		                dataKey:'userNo'//table-col所绑定的prop值
		            },
		            {
		                thName:'姓名',//table 表头
		                dataKey:'custName'//table-col所绑定的prop值
		            }
		            ];
		        //input 第一个搜索框的配置项
		        this.inputFirstOption  = {
		            labelName:'姓名',//label头
		            placeholder:'请输入姓名'//input placeholder
		        },
		        //input 第二个搜索框的配置项
		        this.inputSecOption  = {
		            labelName:'工号',
		            placeholder:'请输入工号'
		        },
		        //搜索所需传值
		        this.searchData = {
		            custName:'',
		            userNo:''
		        }
		        //table分页所需传值
		        this.msgPagination =  {
		            pageNum:1,
		            pageSize:5,
		            totalRows:0
		        }
		        //点击确定后需要修改的对象 numType为changeNo方法所改变的type
		//      this.applyUserInfo = this.applyUserInfo
		        this.numType = 1
		        //dialog打开
		        this.dialogVisible=true
		        //查询接口
		        this.searchUrl = "/iem_hrm/CustInfo/queryCustInfList"
		        //点击确定后根据号码查询用户信息借口 没有则为空
		        this.saveUrl = '/iem_hrm/travel/getUseInfoByUserNo/'
		        //dialog标题
		        this.boxTitle = '人工编号选择'
		    },
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
				.then((res) => {
					console.log('CompList',res);
					if(res.data.code == "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			queryAllCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryAllCompany')
				.then((res) => {
					console.log('All',res);
					if(res.data.code == "S00000") {
						self.compListAll = res.data.data;
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
			queryUserList(params) {
				let self = this;
				self.$axios.get(baseURL+'/CustInfo/queryAllCust', {params: params})
				.then((res) => {
					console.log('userList',res);
					if(res.data.code === "S00000") {
						self.userList = res.data.data;
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
		}
	};
</script>

<style>
.edit_transfer {
	padding: 0 0 20px 20px;
}
</style>