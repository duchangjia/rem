<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="加班管理" sanji="加班详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">加班详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata2.companyName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata2.deptName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata2.userNo"></el-input>
					 	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata2.custName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-input v-model="formdata2.custPost"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata2.custClass"></el-input>
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
						    <el-select v-model="formdata2.workotType" value-key="workotType" @change="changeValue">
								<el-option v-for="item in workotTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="加班累计工时">
						    <el-input v-model="formdata2.timeSheet"></el-input>
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
						<el-form-item label="最新更新人">
						    <el-input v-model="formdata2.updatedBy"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新时间">
						    <el-input v-model="formdata2.updatedDate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width:100%;">
						    <el-button class="file_button" @click="handleDownload">下载</el-button>
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
			return {
				formdata1: {
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					companyName: "01",
					deptName: "",
					workotStartTime: "",
					workotEndTime: "",
					workotType: "",
					workotStartCity: "",
					workotArrivalCity: "",
					timeSheet: "",
					workotSTD: "",
					remark: "",
					attachm: "",
					updatedBy: "",
					updatedDate: ""
				},
				
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
		          	workotType: [
//		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
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
			this.workotInfo(params);
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
	            console.log('value',value);
	      	},
	      	handleDownload() {
	      		const self = this;
	      		let params = {
	      			
	      		}
	      		//下载附件
				self.downloadFile(params);
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
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/workot/downLoadFile',{params: params})
				.then(function(res) {
					console.log('downloadFile',res);
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