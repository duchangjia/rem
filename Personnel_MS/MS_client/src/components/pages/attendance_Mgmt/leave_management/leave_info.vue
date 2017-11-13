<template>
	<div class="leaveC_wrap">
		<current yiji="考勤管理" erji="请假管理" sanji="请假详情">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">请假详情</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
						<el-input v-model="formdata2.companyName"></el-input>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
						<el-input v-model="formdata2.deptName"></el-input>
				  	</el-form-item>
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">  	
					<el-form-item label="工号">
					    <el-input v-model="formdata2.userNo"></el-input>
				 	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata2.custName"></el-input>
				  	</el-form-item>
				  	<el-form-item label="岗位">
					    <el-input v-model="formdata2.custPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级">
					    <el-input v-model="formdata2.custClass"></el-input>
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
				  	<el-form-item label="最新更新人">
					    <el-input v-model="formdata2.updatedBy"></el-input>
				  	</el-form-item>
				  	<el-form-item label="最新更新时间">
					    <el-input v-model="formdata2.updatedDate"></el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width:100%;">
					    <el-button class="file_button" @click="handleDownload">下载</el-button>
				  	</el-form-item>
				  	<!--<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
                        </el-upload>
				  	</el-form-item>-->
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
				formdata: {},
				formdata2: {
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					orgId: "01",
					deprtId: "",
					leaveStartTime: "",
					leaveEndTime: "",
					leaveType: "",
					leaveStartCity: "",
					leaveArrivalCity: "",
					timeSheet: "",
					leaveSTD: "",
					remark: "",
					attachm: "",
					updatedBy: "",
					updatedDate: ""
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
		          	leaveType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
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
	      	handleDownload() {
	      		const self = this;
	      		let params = {
	      			
	      		}
	      		//下载附件
				self.downloadFile(params);
	      	},
			leaveInfo(params) {
				const self = this;
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
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/leave/downLoadFile',{params: params})
				.then(function(res) {
					console.log('downloadFile',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style>

</style>