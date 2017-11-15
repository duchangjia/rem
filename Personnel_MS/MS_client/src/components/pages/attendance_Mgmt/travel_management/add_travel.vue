<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="出差管理" sanji="出差新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">出差新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
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
						<el-form-item label="工号">
						    <el-input v-model="formdata1.userNo">
						    	<el-button slot="append" icon="search" @click="queryUserInfo"></el-button>
						    </el-input>
						    <messageBox 
                                :title="boxTitle"
                                :tableOption.sync="tableOption"  
                                :inputFirstOption.sync="inputFirstOption" 
                                :inputSecOption.sync="inputSecOption"
                                :searchData.sync="searchData" 
                                :pagination.sync="msgPagination" 
                                :saveUrl="saveUrl"
                                :searchUrl="searchUrl"
                                @changeNo = "changeNo"
                                :assetNo.sync = "info.assetNo"
                                :dialogVisible.sync="dialogVisible"
                                :applyUserInfo.sync="applyUserInfo"
                                @changeDialogVisible="changeDialogVisible"
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
					<el-col :span="24" class="item-title">出差信息</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差开始时间" prop="travelStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.travelStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差结束时间" prop="travelEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.travelEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差类型" prop="travelType">
						    <el-select v-model="formdata2.travelType" value-key="travelType" @change="changeValue">
								<el-option v-for="item in travelTypeList" :key="item.travelNo" :label="item.label" :value="item.travelNo"></el-option>
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
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="formdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/travel/addTravelInfo" 
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
			var checkTravelStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('出差开始时间不能为空'));
		        } else if (this.formdata2.travelEndTime && value >= this.formdata2.travelEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkTravelEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('出差结束时间不能为空'));
		        } else if (this.formdata2.travelStartTime && value <= this.formdata2.travelStartTime) {
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
				info: {
			        applyUserNo: "",
			        assetNo: ""
		      	},
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
				formdata1: {},
				formdata2: {},
				travelTypeList: [
					{label: "业务拓展", travelNo: "01"},
					{label: "项目实施", travelNo: "02"},
					{label: "会议", travelNo: "03"},
					{label: "其他", travelNo: "99"}
				],
			 	rules: {
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
		            	{ required: true, message: '出差天数不能为空', trigger: 'blur' }
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
				    remark: this.formdata2.remark,//备注
				    attachm: this.formdata2.attachm//附件
				}
			}
		},
		created() {
			
		},
		methods: {
			changefile(file, fileList) {
				console.log(file);
				this.formdata2.attachm = file.name;
			},
			changeStartTime(time) {
				this.formdata2.travelStartTime = time;
				let params = {
					travelStartTime: this.formdata2.travelStartTime,
					travelEndTime: this.formdata2.travelEndTime
				}
				if(this.formdata2.travelEndTime) {
					this.calTravelDays(params);
				}
				console.log(params);
				
			},
			changeEndTime(time) {
				this.formdata2.travelEndTime = time;
				let params = {
					travelStartTime: this.formdata2.travelStartTime,
					travelEndTime: this.formdata2.travelEndTime
				}
				console.log(params);
				if(this.formdata2.travelStartTime) {
					this.calTravelDays(params);
				}
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
	      	changeNo(val){
		        if(this.numType == 1){
		            this.info.applyUserNo = val
		        }
		    },
	      	changeDialogVisible(flag){
		        this.dialogVisible = flag
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
		        this.applyUserInfo = this.applyUserInfo
		        this.numType = 1
		        //dialog打开
		        this.dialogVisible=true
		        //查询接口
		        this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList"
		        //点击确定后根据号码查询用户信息借口 没有则为空
		        this.saveUrl = '/iem_hrm/assetUse/queryAssetUserByApplyUserNo/'
		        //dialog标题
		        this.boxTitle = '人工编号选择'
		    },
	      	changeUpload(file, fileList) {
	      		console.log('fileList',fileList);
		 		this.fileFlag = file;
	      	},
	      	successUpload(response, file, fileList) {
	      		this.$message({ message: '操作成功', type: 'success' });
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
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
							    remark: self.formdata2.remark,//备注
							    attachm: self.formdata2.attachm//附件
							}
							//无附件时新增信息
							self.addTravelInfo(params);
						}
					} else {
						return false;
					}
				});
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/getUseInfoByUserNo/',{params: params})
				.then(function(res) {
					console.log('getUseInfoByUserNo',res);
					if(res.data.code === "S00000") {
						self.formdata1 = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			addTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/travel/addTravelInfo',params)
				.then(function(res) {
					console.log('addTravelInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
					}
				}).catch(function(err) {
					console.log('error');
				})
			},
			calTravelDays(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/calTravelDays',{params})
				.then(function(res) {
					console.log('calTravelDays',res);
					if(res.data.code === "S00000") {
						self.formdata2.travelDays = res.data.data.travelDays;
					}
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style scoped>

.travelC_wrap .queryUserBtn {
    position: absolute;
    right: 0;
    top: 0;
    height: 40px;
}

</style>