<template>
	<div class="add_travel">
		<current yiji="考勤管理" erji="出差管理" sanji="出差新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">出差新增</span>
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
						    <!--<el-input v-model="custPostName" :disabled="true"></el-input>-->
						    <el-select v-model="formdata1.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <!--<el-input v-model="custClass" :disabled="true"></el-input>-->
					  		<el-select v-model="formdata1.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
						</el-form-item>
					</el-col>  
				</el-form>
				<el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
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
						    <el-select v-model="formdata2.travelType" value-key="travelType">
								<el-option v-for="item in travelTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item class="travelCity_wrap" label="出差城市" prop="travelStartCity">
						    <el-input class="travelCity" v-model="formdata2.travelStartCity" placeholder="出发城市"></el-input>
					  	</el-form-item>
					  	<span class="travelCity_line" >-</span>
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
						    <el-input v-model="formdata1.travelSTD" :disabled="true"></el-input>
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
						<el-form-item label="附件" style="width: 100%;">
				  		 	<el-input v-model="formdata2.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload"
					  			 :data="formdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
								 :beforeUpload="beforeAvatarUpload"  
					  			 action="/iem_hrm/travel/addTravelInfo" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
								 :name="filesName"
					  			 :headers="token"
								 :multiple="true"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn downloadBtn">选取文件</el-button>
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
				filesName: "files",
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
			    
				custPostName: '',
				custClass: '',
				travelStartTime: '',
				travelEndTime: '',
				formdata1: {},
				formdata2: {attachm: ''},
				//岗位列表
				custPostList: [],
				//职级列表
			    custClassList: [],
				//出差类型列表
				travelTypeList: [],
				rules1: {
					userNo: [
			 			{ required: true, message: '工号不能为空', trigger: 'blur' }
			 		]
				},
			 	rules2: {
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
			current, 
			messageBox
		},
		computed: {
			formdata: function(){
				return {
				    userNo: this.formdata1.userNo,//工号
				    travelType: this.formdata2.travelType,//出差类型
				    travelStartTime: this.formdata2.travelStartTime,//出差开始时间	
				    travelEndTime: this.formdata2.travelEndTime, //出差结束时间
				    travelStartCity: this.formdata2.travelStartCity,//出差开始城市	
				    travelArrivalCity: this.formdata2.travelArrivalCity,//出差到达城市
				    travelDays: this.formdata2.travelDays, //出差天数  
				    travelSTD: this.formdata1.travelSTD,//差补标准
				    remark: this.formdata2.remark || '',//备注
				}
			}
		},
		created() {
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询出差类型列表
			this.queryTravelTypeList();
		},
		methods: {
			changefile(file, fileList) {
				console.log(file);
				this.formdata2.attachm = file.name;
			},
			changeStartTime(time) {
				console.log('starttime',time);
				this.formdata2.travelStartTime = time;
				// let params = {
				// 	travelStartTime: this.formdata2.travelStartTime,
				// 	travelEndTime: this.formdata2.travelEndTime
				// }
				// if(this.formdata2.travelEndTime) {
				// 	this.calTravelDays(params);
				// }
				// console.log('start params',params);
				
			},
			changeEndTime(time) {
				console.log('endtime',time);
				this.formdata2.travelEndTime = time;
				// let params = {
				// 	travelStartTime: this.formdata2.travelStartTime,
				// 	travelEndTime: this.formdata2.travelEndTime
				// }
				// console.log('end params',params);
				// if(this.formdata2.travelStartTime) {
				// 	this.calTravelDays(params);
				// }
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
	      		console.log(ajaxNo)
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
		        this.searchUrl = "/iem_hrm/CustInfo/queryCustInfList"
		        //点击确定后根据号码查询用户信息借口 没有则为空
		        this.saveUrl = '/iem_hrm/travel/getUseInfoByUserNo/'
		        //dialog标题
		        this.boxTitle = '人工编号选择'
		    },
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
				 this.formdata2.attachm = file.name;
				//   fileList.forEach(function(item) {
				// 	this.formdata2.attachm += item.name + " ";
				// }, this);
				console.log("选中的fileList", fileList);
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
	      			this.$router.push('/travel_management');
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
									    userNo: self.formdata1.userNo,//工号
									    travelType: self.formdata2.travelType,//出差类型
									    travelStartTime: self.formdata2.travelStartTime,//出差开始时间	
									    travelEndTime: self.formdata2.travelEndTime, //出差结束时间
									    travelStartCity: self.formdata2.travelStartCity,//出差开始城市	
									    travelArrivalCity: self.formdata2.travelArrivalCity,//出差到达城市
									    travelDays: self.formdata2.travelDays, //出差天数  
									    travelSTD: self.formdata1.travelSTD,//差补标准
									    remark: self.formdata2.remark || '',//备注
									}
									console.log('params', params)
									//无附件时新增信息
									self.addTravelInfo(params);
								}
			            	}
			        	})
			        }
		       })
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/getUseInfoByUserNo/',{params: params})
				.then((res)  => {
					console.log('getUseInfoByUserNo',res);
					if(res.data.code === "S00000") {
						self.formdata1 = res.data.data;
					}
					
				}).catch((err)  => {
					console.log('error');
				})
			},
			addTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/travel/addTravelInfo',params)
				.then((res)  => {
					console.log('addTravelInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/travel_management');
					}
				}).catch((err)  => {
					console.log('error');
				})
			},
			calTravelDays(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/calTravelDays',{params})
				.then((res)  => {
					console.log('calTravelDays',res);
					if(res.data.code === "S00000") {
						self.formdata2.travelDays = res.data.data.travelDays;
					}
				}).catch((err)  => {
					console.log('error');
				})
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res)  => {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch((err)  => {
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

<style >
.add_travel {
	padding: 0 0 20px 20px;
}	
.add_travel .travelCity_wrap2{
	padding-left: 0;
}
.add_travel .travelCity_line {
    width: 10px;
    height: 1px;
    display: inline-block;
    background: #8391a5;
    margin: 17px 5px;
}
.add_travel .travelCity_wrap .el-form-item__content,
.add_travel .travelCity_wrap2 .el-form-item__content,
.add_travel .travelCity_wrap .el-input__inner,
.add_travel .travelCity_wrap2 .el-input__inner {
	width: 130px!important;
}
.add_travel .travelCity_wrap2 .el-form-item__content {
	margin-left: 10px;
}
.add_travel .el-input--small .el-input__inner {
    height: 30px;
    width: 145px;
}
</style>