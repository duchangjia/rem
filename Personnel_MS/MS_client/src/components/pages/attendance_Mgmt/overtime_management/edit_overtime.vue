<template>
	<div class="workotC_wrap">
		<current yiji="考勤管理" erji="加班管理" sanji="加班修改">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">加班修改</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
						<el-input v-model="formdata2.companyName" :disabled="true"></el-input>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
						<el-input v-model="formdata2.deptName" :disabled="true"></el-input>
				  	</el-form-item>
					<el-form-item label="工号">
					    <el-input v-model="formdata2.userNo" :disabled="true"></el-input>
				 	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata2.custName" :disabled="true"></el-input>
				  	</el-form-item>
				  	<el-form-item label="岗位">
					    <el-input v-model="formdata2.custPost" :disabled="true"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级">
					    <el-input v-model="formdata2.custClass" :disabled="true"></el-input>
				  	</el-form-item>
				  	<div class="info-title">加班信息</div>
				  	<el-form-item label="加班开始时间" prop="workotStartTime">
			        	<el-date-picker type="datetime" v-model="formdata2.workotStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="加班结束时间" prop="workotEndTime">
			        	<el-date-picker type="datetime" v-model="formdata2.workotEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="加班类型" prop="workotType">
					    <el-select v-model="formdata2.workotType" value-key="workotType" @change="changeValue">
							<el-option v-for="item in workotTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="加班累计工时">
					    <el-input v-model="formdata2.timeSheet"></el-input>
				  	</el-form-item>
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
					companyName: "01",
					deptName: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					applyNo: "",
					workotStartTime: "",
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
				workotTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
			 	rules: {
			 		workotStartTime: [
//			 			{ required: true, message: '出差开始时间不能为空', trigger: 'blur' }
			 		],
			 		workotEndTime: [
//			 			{ required: true, message: '出差结束时间不能为空', trigger: 'blur' }
			 		],
		          	workotType: [
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
			//查询加班详细信息
			this.queryWorkotInfo(params);
		},
		methods: {
			changeStartTime(time) {
				this.formdata2.workotStartTime = time;
				console.log(time.substr(0,16))
			},
			changeEndTime(time) {
				this.formdata2.workotEndTime = time;
				console.log(time)
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
							"applyNo": self.formdata2.applyNo, //"201710190002"
							"workotType": self.formdata2.workotType, //"g"
							"timeSheet": self.formdata2.timeSheet, //"1"
							"attachm":  self.formdata2.attachm //"ha"
						}
						//修改加班详细信息
						self.modifyTravelInfo(params);
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			queryWorkotInfo(params) {
				let self = this;
				self.$axios.get(baseURL+'/workot/queryWorkOtInfos',{params: params})
				.then(function(res) {
					console.log('workotInfo',res);
					self.formdata2 = res.data.data;
				}).catch(function(err) {
					console.log('error');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.put(baseURL+'/workot/modifyWorkOtInfo',params)
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