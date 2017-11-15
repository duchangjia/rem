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
						    <el-select v-model="formdata2.leaveType" value-key="leaveType">
								<el-option v-for="item in leaveTypeList" :key="item.leaveNo" :label="item.label" :value="item.leaveNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="请假累计工时" prop="timeSheet">
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
					  			 :on-change="changeUpload"
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
				fileFlag: '',
				formdata1: {
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					companyName: "",
					deptName: "",
					leaveStartTime: "",
					leaveEndTime: "",
					leaveType: "",
					timeSheet: "",
					remark: "",
					attachm: ""
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
	          		timeSheet: [
		            	{ required: true, message: '请假工时不能为空', trigger: 'blur' }
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
		computed: {
			formdata: function(){
				const self = this;
				return {
					applyNo: this.formdata2.applyNo, //请假编号
					"userNo": self.formdata1.userNo, //"1004"
	    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
	    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
	    			"leaveType": self.formdata2.leaveType, //"3"
	    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
	    			"remark": self.formdata2.remark, //"请假的详细信息"
	    			attachm: self.formdata2.attachm
				}
			}
		},
		created() {
			
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.leaveStartTime = time;
				let params = {
					leaveStartTime: this.formdata2.leaveStartTime,
					leaveEndTime: this.formdata2.leaveEndTime
				}
				if(this.formdata2.leaveStartTime) {
					this.calTimeSheet(params);
				}
			},
			changeEndTime(time) {
				this.formdata2.leaveEndTime = time;
				let params = {
					leaveStartTime: this.formdata2.travelStartTime,
					leaveEndTime: this.formdata2.leaveEndTime
				}
				if(this.formdata2.leaveEndTime) {
					this.calTimeSheet(params);
				}
			},
	      	queryUserInfo() {
	      		let userNo = this.formdata1.userNo;
	      		let params = {
	      			userNo: userNo
	      		}
	      		//根据员工编号查询员工信息
	      		this.getUseInfoByUserNo(params);
	      	},
	      	changeUpload(file, fileList) {
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
						if(!self.fileFlag) {
							let params = {
								applyNo: this.formdata2.applyNo, //请假编号
								"userNo": self.formdata1.userNo, //"1004"
				    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
				    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
				    			"leaveType": self.formdata2.leaveType, //"3"
				    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
				    			"remark": self.formdata2.remark, //"请假的详细信息"
				    			attachm: self.formdata2.attachm
							}
							//无附件时新增
							self.addLeaveInfo(params);
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
			addLeaveInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/leave/addLeaveInfo',params)
				.then(function(res) {
					console.log('addLeaveInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
					}
				}).catch(function(err) {
					console.log('error');
				})
			},
			calTimeSheet(params) {
				let self = this;
				self.$axios.get(baseURL+'/leave/calculateLeaveTime',{params})
				.then(function(res) {
					console.log('timeSheet',res);
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

</style>