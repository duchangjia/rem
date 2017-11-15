<template>
	<div class="info">
		<current yiji="考勤管理" erji="请假管理" sanji="请假修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">请假修改</span>
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
						    <el-input v-model="formdata2.custPost" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata2.custClass" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24" class="item-title">请假信息</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假开始时间" prop="leaveStartTime">
				        	<el-date-picker type="datetime" v-model="formdata2.leaveStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假结束时间" prop="leaveEndTime">
				        	<el-date-picker type="datetime" v-model="formdata2.leaveEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="请假类型" prop="leaveType">
						    <el-select v-model="formdata2.leaveType" value-key="leaveType" @change="changeValue">
								<el-option v-for="item in leaveTypeList" :key="item.leaveNo" :label="item.label" :value="item.leaveNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假累计工时">
						    <el-input v-model="formdata2.timeSheet"></el-input>
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
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="formdata"
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/" 
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
				formdata: {},
				formdata1: {
				},
				formdata2: {
					orgId: "01",
					deprtId: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					leaveStartTime: "",
					leaveEndTime: "",
					leaveType: "",
					leaveStartCity: "",
					leaveArrivalCity: "",
					timeSheet: "",
					leaveSTD: "",
					remark: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				leaveTypeList: [
					{label: '有薪休假', leaveNo: '01'},
					{label: '事假', leaveNo: '02'},
					{label: '病假', leaveNo: '03'},
					{label: '因公外出', leaveNo: '04'},
					{label: '出差', leaveNo: '05'},
					{label: '婚假', leaveNo: '06'},
					{label: '生育产假', leaveNo: '07'},
					{label: '哺乳假', leaveNo: '08'},
					{label: '护理假', leaveNo: '09'},
					{label: '流产假', leaveNo: '10'},
					{label: '产前检查', leaveNo: '11'},
					{label: '丧假', leaveNo: '12'},
					{label: '忘打卡', leaveNo: '13'},
					{label: '忘带卡', leaveNo: '14'},
					{label: '特殊', leaveNo: '15'},
					{label: '调休假', leaveNo: '16'}
				],
			 	rules: {
			 		leaveStartTime: [
		            	{ required: true, validator: checkLeaveStartTime, trigger: 'change' }
	          		],
					leaveEndTime: [
		            	{ required: true, validator: checkLeaveEndTime, trigger: 'change' }
	          		],
		          	leaveType: [
		            	{ required: true, message: '请假类型不能为空', trigger: 'blur' }
	          		],
	          		remark: [
	          			{ required: true, message: '请假备注不能为空', trigger: 'blur' }
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
			this.leaveInfo(params);
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.leaveStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.leaveEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	queryUserInfo() {
	      		this.formdata1.userNo;
	      		
	      	},
	      	download() {
	      		
	      	},
	      	successUpload(response, file, fileList) {
	      		this.$message({ message: '操作成功', type: 'success' });
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						let params = {
							
						}
						self.formdata = params;
						self.$refs.upload.submit();
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			leaveInfo(params) {
				let self = this;
				self.$axios.get(baseURL+'/leave/queryLeaveInfos',{params: params})
				.then(function(res) {
					console.log('leaveInfo',res);
					if(res.data.code === "S00000") {
						self.formdata2 = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.put(baseURL+'/leave/modifyLeaveInfo',params)
				.then(function(res) {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
						
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