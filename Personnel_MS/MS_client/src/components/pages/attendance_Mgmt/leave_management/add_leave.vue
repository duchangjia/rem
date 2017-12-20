<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="请假管理" sanji="请假新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">请假新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules1" :model="formdata1" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata1.companyName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata1.deptName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号" prop="userNo">
						    <el-input v-model="formdata1.userNo">
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
						<el-form-item label="姓名">
						    <el-input v-model="formdata1.custName" :disabled="true"></el-input>
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
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
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
						<el-form-item label="附件" style="width: 100%;">
				  		 	<el-input v-model="formdata2.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload"
					  			 action="/iem_hrm/leave/addLeaveInfo" 
					  			 :data="formdata"
					  			 :on-change="changeUpload"
					  			 :on-success="successUpload"
					  			 :beforeUpload="beforeAvatarUpload"
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
				filesName: "files",
				fileFlag: '',
				//工号选择弹框数据
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
				
				 
			    leaveStartTime: '',
				leaveEndTime: '',
				//员工基本信息
				formdata1: {},
				//请假信息
				formdata2: {attachm: "",},
				//岗位列表
				custPostList: [],
				//职级列表
			    custClassList: [],
			    //请假类型列表
				leaveTypeList: [],
				rules1: {
			 		userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		]
				},
			 	rules2: {
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
		            	{ required: true, min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
	          		]
				}
			}
		},
		components: {
			current,
			messageBox
		},
		computed: {
			formdata: function(){
				const self = this;
				return {
					"userNo": self.formdata1.userNo, //"1004"
	    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
	    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
	    			"leaveType": self.formdata2.leaveType, //"3"
	    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
	    			"remark": self.formdata2.remark, //"请假的详细信息"
	    			// attachm: self.formdata2.attachm
				}
			}
		},
		created() {
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
	      	queryUserInfo() {
	      		let userNo = this.formdata1.userNo;
	      		let params = {
	      			userNo: userNo
	      		}
	      		//根据员工编号查询员工信息
	      		this.getUseInfoByUserNo(params);
	      	},
	      	dialogConfirm(ajaxNo){
		        let self = this;
		        let params = {
		        	userNo: ajaxNo.stateNo
		        }
		        self.$axios
		        .get( self.saveUrl, {params} )
		        .then(res => {
		        	console.log('res',res);
		          if (res.data.code == 'F00002'){
		            self.$message({
		              message:res.data.retMsg,
		              type: "error"
		            });
		          }else{
		            self.dialogVisible = false;
		            self.formdata1 = res.data.data;
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
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				//  this.formdata2.attachm = file.name;
				fileList.forEach(function(item) {
					this.formdata2.attachm += item.name + " ";
				}, this);
				console.log("选中的fileList", fileList);
			},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
					this.$router.push('/leave_management');
	      		} else {
					this.$message.error(response.retMsg);
				
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
			            		self.$refs.upload.submit();//触发上传
								if(!self.fileFlag) {
									let params = {
										"userNo": self.formdata1.userNo, //"1004"
						    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
						    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
						    			"leaveType": self.formdata2.leaveType, //"3"
						    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
						    			"remark": self.formdata2.remark, //"请假的详细信息"
						    			// attachm: self.formdata2.attachm
									}
									//无附件时新增
									self.addLeaveInfo(params);
								}
			            	}
			        	})   
			        }
			  })
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/getUseInfoByUserNo/',{params: params})
				.then((res) => {
					console.log('getUseInfoByUserNo',res);
					if(res.data.code === "S00000") {
						self.formdata1 = res.data.data;
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			addLeaveInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/leave/addLeaveInfo',params)
				.then((res) => {
					console.log('addLeaveInfo',res);
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

<style >

</style>