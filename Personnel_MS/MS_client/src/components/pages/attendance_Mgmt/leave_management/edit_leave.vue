<template>
	<div class="leaveC_wrap">
		<current yiji="考勤管理" erji="请假管理" sanji="请假修改">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">请假修改</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata2.orgId" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
					    <el-select v-model="formdata2.deprtId" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">  	
					<el-form-item label="工号">
					    <el-input v-model="formdata1.userNo"></el-input>
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
				</el-form>

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
				  	<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
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
			 		leaveStartTime: [
			 			{ required: true, message: '出差开始时间不能为空', trigger: 'blur' }
			 		],
			 		leaveEndTime: [
			 			{ required: true, message: '出差结束时间不能为空', trigger: 'blur' }
			 		],
		          	leaveType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		],
	          		remark: [
	          			{ required: true, message: '出差备注不能为空', trigger: 'blur' }
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
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						let params = {
							
						}
						//查询出差详细信息
						self.modifyTravelInfo(params);
						
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
					self.formdata2 = res.data.data;
				}).catch(function(err) {
					console.log('error');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.put(baseURL+'/leave/modifyLeaveInfo',params)
				.then(function(res) {
					console.log('modifyTravelInfo',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style>

</style>