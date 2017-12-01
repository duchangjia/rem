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
						<el-form-item label="身份证">
						    <el-input v-model="formdata1.certNo" :disabled="true"></el-input>
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
							<el-date-picker type="date" v-model="formdata2.dimTime" @change="changeDimTime" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型" prop="dimType">
						    <el-select v-model="formdata2.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.dimTypeNo" :label="item.dimTypeName" :value="item.dimTypeNo"></el-option>
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
							<el-date-picker type="date" v-model="formdata2.payEndTime" @change="changePayEndTime" style="width: 100%;"></el-date-picker>
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
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/custDimhis/addCustDimhis" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
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
					organNo: "",
					organName: "",
					derpName: "",
					derpNo: "",
					custName: "",
					userNo: "",
					certNo: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					organNo: "",
					organName: "",
					derpName: "",
					derpNo: "",
					custName: "",
					userNo: "",
					certNo: "",
					custPost: "",
					custClass: "",
					lineManager: "",
					dimTime: "",
					dimType: "",
					hasGone: "",
					payEndTime: "",
					dimReason: "",
					updatedBy: "",
					updatedDate: "",
					attachm: "",
					dimProveFlag: ""
				},
				
				comp: {
					organName: '',
					organNo: ''
				},
				newcomp: {
					organName: '',
					organNo: ''
				},
				depart: {
					derpName: '',
					derpNo: ''
				},
				newdepart: {
					derpName: '',
					derpNo: ''
				},
				//部门列表
				departList: [
					{derpName: "上海魔方分公司",derpNo: '01'},
					{derpName: "魔方分公司深圳分公司",derpNo: 'p1'},
					{derpName: "深圳前海橙色魔方信息技术有限公司",derpNo: '0'}
				],
				//公司列表
				compList: [
					{organName: "上海魔方分公司",organNo: '01'},
					{organName: "魔方分公司深圳分公司",organNo: 'p1'},
					{organName: "深圳前海橙色魔方信息技术有限公司",organNo: '0'}
				],
				dimTypeList: [
					{dimTypeName:'辞退',dimTypeNo: "01"},
					{dimTypeName:'退休',dimTypeNo: "02"},
					{dimTypeName:'外调',dimTypeNo: "03"},
					{dimTypeName:'辞职',dimTypeNo: "04"},
					{dimTypeName:'裁员',dimTypeNo: "05"},
				],
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
			this.queryCompList();	
		},
		computed: {
			addFormdata: function(){
				return {
				    userNo: this.formdata1.userNo,//工号
				   	dimTime: this.formdata1.dimTime,
					dimType: this.formdata1.dimType,
					hasGone: this.formdata1.hasGone,
					payEndTime: this.formdata1.payEndTime,
					dimReason: this.formdata1.dimReason,
					attachm: this.formdata1.attachm,
					dimProveFlag: this.formdata1.dimProveFlag
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
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
	      			this.$router.push('/detail_dimission');
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
								if(!self.fileFlag){
									let params = {
									   userNo: this.formdata1.userNo,//工号
									   	dimTime: this.formdata2.dimTime,
										dimType: this.formdata2.dimType,
										hasGone: this.formdata2.hasGone,
										payEndTime: this.formdata2.payEndTime,
										dimReason: this.formdata2.dimReason,
										attachm: this.formdata2.attachm,
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
		    queryUserInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('dimission_userNo');
				let params = {
					userNo: userNo
				}
				self.$axios.get(baseURL+'/CustInfo/querySelfDtl', {params})
				.then(function(res) {
					console.log('userInfo',res);
					self.formdata1 = res.data;
				}).catch(function(err) {
					console.log(err);
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
</style>