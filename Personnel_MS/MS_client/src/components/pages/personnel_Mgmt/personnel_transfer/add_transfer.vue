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
						    	<!--<el-button slot="append" icon="search" @click="userNoSelect"></el-button>-->
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
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
				  	<el-col :span="24" class="item-title">调动信息</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动类型" prop="shiftType">
						    <el-select v-model="formdata2.shiftType" value-key="shiftType">
								<el-option v-for="item in shiftTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动生效时间" prop="shiftCameTime">
						    <el-date-picker type="date" v-model="formdata2.shiftCameTime" @change="changeShiftCameTime" style="width: 100%;"></el-date-picker>
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
						    <el-input v-model="formdata2.newLineManager"></el-input>
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
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/custShifthis/addCustShifthis" 
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
			    //原信息
			    formdata1: {},
			    //调动信息
				formdata2: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				shiftTypeList: [
					{shiftType: '01',shiftName: '晋升'},
					{shiftType: '02',shiftName: '调动'},
					{shiftType: '03',shiftName: '平调'},
					{shiftType: '04',shiftName: '轮岗'},
					{shiftType: '05',shiftName: '工资调整'},
					{shiftType: '99',shiftName: '其他'},
				],
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
						{ required: true, message: '新直线经理不能为空', trigger: 'blur' }
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
					shiftReason: self.formdata2.shiftReason,
					attachm: self.formdata2.attachm
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
	      	dialogConfirm(ajaxNo){
	      		console.log(ajaxNo)
		        let self = this;
		        let params = {
		        	userNo: ajaxNo.stateNo
		        }
		        self.$axios
		        .get( self.saveUrl, {params} )
		        .then(res => {
		        	console.log('res',res)
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
		 		this.formdata2.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: response.retMsg, type: 'success' });
	      			this.$router.push('/detail_transfer');
	      		} else {
	      			this.$message({ message: response.retMsg, type: 'error' });
	      		}
	      		
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
										shiftReason: self.formdata2.shiftReason,
										attachm: self.formdata2.attachm
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
				.then(function(res) {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
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
			queryUserInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('transfer_userNo');
				let params = {
					userNo: userNo
				}
				self.$axios.get(baseURL+'/CustInfo/queryCustInfoByUserNo/'+ userNo)
				.then(function(res) {
					console.log('userInfo',res);
					self.formdata1 = res.data.data;
				}).catch(function(err) {
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
/*.add_transfer .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_transfer .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.add_transfer .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.add_transfer .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_transfer .content-inner {
	padding: 30px 0px;
}	
.add_transfer .info-title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}
.add_transfer .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.add_transfer .el-form-item {
	padding-left: 20px;
}
.add_transfer .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
    font-weight: normal;
}
.add_transfer .el-textarea__inner {
    margin-left: 30px;
}
.add_transfer .file_button {
	color: #FF9900;
	font-size: 14px;
}
.add_transfer .el-form-item__error {
    left: 30px;
}
.add_transfer .uploadBtn {
  position: absolute;
  height: 38px;
  top: 0;
  right: 0;
  margin: 0;
  border: 1px solid #ff9900;
  border-radius: 0;
  background: #ff9900;
  font-family: "PingFang SC";
}
.add_transfer .el-upload__input {
    margin-left: 30px;
    border: 1px solid #eeeeee;
}
.add_transfer .conserve {
	float: right;
	margin-top: 10px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 30px;
	padding: 0;
}*/
</style>