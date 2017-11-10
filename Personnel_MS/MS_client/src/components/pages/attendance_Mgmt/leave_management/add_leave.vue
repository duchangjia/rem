<template>
	<div class="leaveC_wrap">
		<current yiji="考勤管理" erji="请假管理" sanji="请假新增">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">请假新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
						<el-input v-model="formdata1.organNo"></el-input>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
						<el-input v-model="formdata1.deptNo"></el-input>
				  </el-form-item>
					<el-form-item label="工号">
					    <el-input v-model="formdata1.userNo"></el-input>
					    <el-button class="queryUserBtn" type="primary" @click="queryUserInfo">查询</el-button>
				 	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata1.custName"></el-input>
				  	</el-form-item>
				  	<el-form-item label="岗位">
					    <el-input v-model="formdata1.custPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级">
					    <el-input v-model="formdata1.custClass"></el-input>
				  	</el-form-item>
				  	<div class="info-title">请假信息</div>
				  	<el-form-item label="请假开始时间" prop="leaveStartTime">
			        	<el-date-picker type="datetime" v-model="formdata2.leaveStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="请假结束时间" prop="leaveEndTime">
			        	<el-date-picker type="datetime" v-model="formdata2.leaveEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="请假类型" prop="leaveType">
					    <el-select v-model="formdata2.leaveType" value-key="leaveType" @change="changeValue">
							<el-option v-for="item in leaveTypeList" :key="item.leaveNo" :label="item.label" :value="item.leaveNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="请假累计工时">
					    <el-input v-model="formdata2.timeSheet"></el-input>
				  	</el-form-item>
				  	<el-form-item class="remark" label="请假备注" prop="remark">
					    <el-input
						  type="textarea"
						  :autosize="{ minRows: 5, maxRows: 5}"
						  placeholder="请输入内容"
						  v-model="formdata2.remark">
						</el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" :on-change="changefile" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
                        </el-upload>
				  	</el-form-item>
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
			return {
				formdata1: {
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					organNo: "01",
					deptNo: "",
					leaveStartTime: "",
					leaveEndTime: "",
					leaveType: "",
					timeSheet: "",
					remark: "",
					attachm: ""
				},
				
//				oldcomp: {
//					compName: '',
//					compOrgNo: ''
//				},
//				newcomp: {
//					newcompName: '',
//					newcompOrgNo: ''
//				},
//				olddepart: {
//					departName: '',
//					departOrgNo: ''
//				},
//				newdepart: {
//					newdepartName: '',
//					newdepartOrgNo: ''
//				},
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
		          	leaveType: [
		            	{ required: true, message: '请假类型不能为空', trigger: 'blur' }
	          		]
				}
			}
		},
		components: {
			current
		},
		created() {
			
		},
		methods: {
			changefile(file, fileList) {
				console.log(file);
				this.formdata2.attachm = file.name;
			},
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
	      		let userNo = this.formdata1.userNo;
	      		let params = {
	      			userNo: userNo
	      		}
	      		//根据员工编号查询员工信息
	      		this.getUseInfoByUserNo(params);
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						//UserNo,LeaveStartTime,LeaveEndTime,LeaveType,Remark,TimeSheet上传的文件file
						let params = {
							"userNo": self.formdata1.userNo, //"1004"
			    			"leaveStartTime": self.formdata2.leaveStartTime, //"2017-09-10 08:30"
			    			"leaveEndTime": self.formdata2.leaveEndTime, //"2017-09-13 09:30"
			    			"leaveType": self.formdata2.leaveType, //"3"
			    			"timeSheet": self.formdata2.timeSheet, //"23"请假的工时
			    			"remark": self.formdata2.remark, //"请假的详细信息"
			    			attachm: self.formdata2.attachm
						}
						//新增请假信息
						self.addLeaveInfo(params);
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/leave/getUseInfoByUserNo/',{params: params})
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