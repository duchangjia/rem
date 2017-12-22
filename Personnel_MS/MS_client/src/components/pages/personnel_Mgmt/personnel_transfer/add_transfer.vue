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
						    <el-select v-model="formdata2.newOrgId" @change="changeComp" :disabled=disabledFlag>
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
						    <el-select v-model="formdata2.newDeprtId" :disabled=disabledFlag>
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
						    <el-input v-model="formdata2.newLineManager" @change="newLineManagerChange" :disabled=disabledFlag>
								<el-button slot="append" icon="search" @click="userNoSelect"></el-button>
							</el-input>
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
						    <el-select v-model="formdata1.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新岗位" prop="newPost">
						    <el-select v-model="formdata2.newPost" :disabled=disabledFlag>
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
						    <el-select v-model="formdata2.newClass" :disabled=disabledFlag>
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
				} 
				// else if (!this.newLineManagerFlag) {
					// console.log('newLineManagerFlag',this.newLineManagerFlag)
		          	// callback(new Error('请输入正确的直线经理工号'));
				// } 
				else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				filesName: "files",
				fileFlag: '',
				newLineManagerFlag: false,//判断新直线经理是否存在标志
				disabledFlag: false, //判断调动类型是否工资调整
			    //原员工信息
			    formdata1: {},
			    //调动信息
				formdata2: {
					attachm: '',
					newOrgId: '',
					newDeprtId: '',
					newLineManager: '',
					newPost: '',
					newClass: ''
					
				},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
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
			changeShiftType(val) {
				console.log('shiftType',val);
				let self = this;
				console.log('self.formdata1.oldOrgId',self.formdata1.organNo);
				if(val === '05') {//工资调整时
					self.formdata2.newOrgId = self.formdata1.organNo;
					self.formdata2.newDeprtId = self.formdata1.derpNo;
					self.formdata2.newLineManager = self.formdata1.lineManager;
					self.formdata2.newPost = self.formdata1.custPost;
					self.formdata2.newClass = self.formdata1.custClass;
					self.disabledFlag=true;
					self.newLineManagerFlag = true;
				} else {
					// self.formdata2.newOrgId = '';
					// self.formdata2.newDeprtId = '';
					// self.formdata2.newLineManager = '';
					// self.formdata2.newPost = '';
					// self.formdata2.newClass = '';
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
		            self.formdata2.newLineManager = res.data.data.userNo;
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