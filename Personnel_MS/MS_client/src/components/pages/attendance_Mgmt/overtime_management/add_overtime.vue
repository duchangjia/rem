<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="加班管理" sanji="加班新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">加班新增</span>
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
						    <el-input v-model="formdata1.custPost" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata1.custClass" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	 
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="100px">
				  	<el-col :span="24" class="item-title">加班信息</el-col> 
				  	<el-col :sm="24" :md="12">
						<el-form-item label="加班开始时间" prop="workotStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.workotStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班结束时间" prop="workotEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.workotEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班类型" prop="workotType">
						    <el-select v-model="formdata2.workotType" value-key="workotType" @change="changeValue">
								<el-option v-for="item in workotTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班累计工时" prop="timeSheet">
						    <el-input v-model="formdata2.timeSheet" placeholder="请输入加班累计工时"></el-input>
					  	</el-form-item>
					</el-col>	  	
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
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
				  		 	<el-input v-model="formdata2.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="formdata"
					  			 :on-change="changeUpload"
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/workot/addWorkOtInfo" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
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
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('加班开始时间不能为空'));
		        } else if (this.formdata2.workotEndTime && value >= this.formdata2.workotEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('加班结束时间不能为空'));
		        } else if (this.formdata2.workotStartTime && value <= this.formdata2.workotStartTime) {
		          	callback(new Error('请输入正确的结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileFlag: '',
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
				formdata1: {
					companyName: "",
					deptName: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					workotStartTime: "",
					workotEndTime: "",
					workotType: "",
					timeSheet: "",
					remark: "",
					attachm: ""
				},
				//部门列表
				departList: [
					{departName: "上海魔方分公司",departOrgNo: '01'},
					{departName: "魔方分公司深圳分公司",departOrgNo: 'p1'},
					{departName: "深圳前海橙色魔方信息技术有限公司",departOrgNo: '0'}
				],
				//公司列表
				compList: [
					{compName: "上海魔方分公司",compOrgNo: '01'},
					{compName: "魔方分公司深圳分公司",compOrgNo: 'p1'},
					{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '0'}
				],
				workotTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
				rules1: {
			 		userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		]
			 	},
			 	rules2: {
			 		userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		],
		          	workotType: [
		            	{ required: true, message: '加班类型不能为空', trigger: 'blur' }
	          		],
	          		workotStartTime: [
		            	{ required: true, validator: checkWorkotStartTime, trigger: 'change' }
	          		],
					workotEndTime: [
		            	{ required: true, validator: checkWorkotEndTime, trigger: 'change' }
	          		],
	          		timeSheet: [
		            	{ required: true, message: '加班累计工时不能为空', trigger: 'blur' }
	          		],
	          		remark: [
	          			{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
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
					"userNo": self.formdata1.userNo,
	    			"workotStartTime": self.formdata2.workotStartTime, 
	    			"workotEndTime": self.formdata2.workotEndTime,
	    			"workotType": self.formdata2.workotType, 
	    			"timeSheet": self.formdata2.timeSheet, 
	    			"remark": self.formdata2.remark,
	    			
				}
			}
		},
		methods: {
			changefile(file, fileList) {
				this.fileFlag = file;
			},
			changeStartTime(time) {
				this.formdata2.workotStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.workotEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
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
		          if (res.data.code == 'S00000'){
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
		        this.searchUrl = "/iem_hrm/CustInfo/advQueryCustInf"
		        //点击确定后根据号码查询用户信息借口 没有则为空
		        this.saveUrl = '/iem_hrm/travel/getUseInfoByUserNo/'
		        //dialog标题
		        this.boxTitle = '人工编号选择'
		    },
		    changeUpload(file, fileList) {
		 		this.fileFlag = file;
		 		this.formdata2.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
					this.$router.push('/overtime_management');
	      		}
	      	},
	      	save(formName) {
				const self = this;
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          self.$refs.formdata2.validate(valid => {
			            if (valid) {
			            	console.log('valid')
			            	self.$refs.upload.submit();
							if(!self.fileFlag) {
							let params = {
								"userNo": self.formdata1.userNo,
				    			"workotStartTime": self.formdata2.workotStartTime, 
				    			"workotEndTime": self.formdata2.workotEndTime,
				    			"workotType": self.formdata2.workotType, 
				    			"timeSheet": self.formdata2.timeSheet, 
				    			"remark": self.formdata2.remark
							}
							//无附件时新增加班信息
							self.addLeaveInfo(params);
						}
			            }
			          })
			        }
			  })
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/workot/getUseInfoByUserNo/',{params: params})
				.then(function(res) {
					console.log('getUseInfoByUserNo',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			addLeaveInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/workot/addWorkOtInfo',params)
				.then(function(res) {
					console.log('addLeaveInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/overtime_management');
					}
				}).catch(function(err) {
					console.log('error');
				})
			},
			calTimeSheet(params) {
				let self = this;
				self.$axios.get(baseURL+'/workot/calculateWorkOtTime',{params})
				.then(function(res) {
					console.log('timeSheet',res);
//					if(res.data.code === "S00000") {
						self.formdata2.timeSheet = res.data;
//					}
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style scoped>

.queryUserBtn {
    position: absolute;
    right: 0;
    top: 0;
    height: 40px;
}
</style>