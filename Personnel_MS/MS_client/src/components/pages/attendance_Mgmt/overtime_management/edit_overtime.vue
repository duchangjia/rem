<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="加班管理" sanji="加班修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">加班修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata2.companyName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata2.deptName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata2.userNo" :disabled="true"></el-input>
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata2.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <!--<el-input v-model="formdata2.custPost" :disabled="true"></el-input>-->
						    <el-select v-model="formdata2.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <!--<el-input v-model="formdata2.custClass" :disabled="true"></el-input>-->
						    <el-select v-model="formdata2.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
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
						    <el-select v-model="formdata2.workotType" value-key="workotType">
								<el-option v-for="item in workotTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班累计工时" prop="timeSheet">
						    <el-input v-model.number="formdata2.timeSheet" placeholder="请输入加班累计工时"></el-input>
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
					  			 action="/iem_hrm/workot/modifyWorkOtInfo" 
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
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('请假开始时间不能为空'));
		        } else if (this.formdata2.workotEndTime && value >= this.formdata2.workotEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('请假结束时间不能为空'));
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
				formdata1: {
				},
				formdata2: {
					companyName: "",
					deptName: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					applyNo: "",
					workotStartTime: "", //2017-10-12-21 10:20:20
					workotEndTime: "",
					workotType: "",
					workotStartCity: "",
					workotArrivalCity: "",
					timeSheet: "",
					workotSTD: "",
					remark: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				custPostList: [],
				custClassList: [],
				workotTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
			 	rules: {
			 		workotStartTime: [
		            	{ required: true, validator: checkWorkotStartTime, trigger: 'change' }
	          		],
					workotEndTime: [
		            	{ required: true, validator: checkWorkotEndTime, trigger: 'change' }
	          		],
		          	workotType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		],
	          		timeSheet: [
		            	{ required: true, type: 'number', message: '请假累计工时不能为空', trigger: 'blur' }
	          		],
	          		remark: [
	          			{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
	          		]
				}
			}
		},
		components: {
			current
		},
		created() {
			let applyNo = this.$route.params.applyNo;
			let userNo = this.$route.params.userNo;
			let params = {
				applyNo: applyNo
			}
			//查询加班详细信息
			this.workotInfo(params);
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
		},
		computed: {
			formdata: function(){
				const self = this;
				return {
					"applyNo": self.formdata2.applyNo, 
					"userNo": self.formdata2.userNo,
	    			"workotStartTime": self.formdata2.workotStartTime, 
	    			"workotEndTime": self.formdata2.workotEndTime,
	    			"workotType": self.formdata2.workotType, 
	    			"timeSheet": self.formdata2.timeSheet, 
	    			"remark": self.formdata2.remark,
	    			attachm: self.formdata2.attachm
				}
			}
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.workotStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.workotEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
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
				this.$refs[formName].validate((valid) => {
					if(valid) {
						self.$refs.upload.submit();
						if(!self.fileFlag) {
							let params = {
								"applyNo": self.formdata2.applyNo, 
								"userNo": self.formdata2.userNo,
				    			"workotStartTime": self.formdata2.workotStartTime, 
				    			"workotEndTime": self.formdata2.workotEndTime,
				    			"workotType": self.formdata2.workotType, 
				    			"timeSheet": self.formdata2.timeSheet, 
				    			"remark": self.formdata2.remark,
				    			attachm: self.formdata2.attachm
							}
							//修改加班详细信息
							self.modifyTravelInfo(params);
						}
							
						
					} else {
						return false;
					}
				});
			},
			workotInfo(params) {
				const self = this;
				self.$axios.get(baseURL+'/workot/queryWorkOtInfos',{params: params})
				.then(function(res) {
					console.log('workotInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/workot/modifyWorkOtInfo',params)
				.then(function(res) {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/overtime_management');
		      		}
				}).catch(function(err) {
					console.log('error');
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
			}
		}
	};
</script>

<style>

</style>