<template>
	<div class="travelC_wrap">
		<current yiji="考勤管理" erji="出差管理" sanji="出差详情">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">出差详情</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :inline="true"  :rules="rules" :model="formdata" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata.organNo">
							<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
					    <el-select v-model="formdata.deptNo">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  </el-form-item>
					<el-form-item label="工号">
					    <el-input v-model="formdata.userNo"></el-input>
				 	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata.custName"></el-input>
				  	</el-form-item>
				  	<el-form-item label="岗位">
					    <el-input v-model="formdata.custPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级">
					    <el-input v-model="formdata.custClass"></el-input>
				  	</el-form-item>

				  	<div class="info-title">出差信息</div>
				  	<el-form-item label="出差开始时间" prop="travelStartTime">
			        	<el-date-picker type="date" v-model="formdata.travelStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差结束时间" prop="travelEndTime">
			        	<el-date-picker type="date" v-model="formdata.travelEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差类型" prop="travelType">
					    <el-select v-model="formdata.travelType">
							<el-option v-for="item in travelTypeList" :key="item.travelNo" :label="item.label" :value="item.travelNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="出差城市">
					    <el-input class="travelCity" v-model="formdata.travelStartCity" placeholder="出发城市"></el-input>
					    <span class="travelCity_line" >-</span>
					    <el-input class="travelCity" v-model="formdata.travelArrivalCity" placeholder="到达城市"></el-input>
				  	</el-form-item>
				  	<el-form-item label="出差天数">
					    <el-input v-model="formdata.travelDays"></el-input>
				  	</el-form-item>
				  	<el-form-item label="差补标准">
					    <el-input v-model="formdata.travelSTD"></el-input>
				  	</el-form-item>
				  	<el-col :span="24">
				  		<el-form-item class="remark" label="出差备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.remark">
							</el-input>
					  	</el-form-item>
				  	</el-col>
				  	<el-form-item label="最新更新人">
					    <el-input v-model="formdata.updatedBy"></el-input>
				  	</el-form-item>
				  	<el-form-item label="最新更新时间">
					    <el-input v-model="formdata.updatedDate"></el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width:100%;">
					    <el-button class="file_button" @click="handleDownload">下载</el-button>
				  	</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	import moment from 'moment'
	const baseURL = 'iem_hrm';
	export default {
		data() {
			return {
				formdata: {
					organNo: "01",
					deptNo: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					travelStartTime: "",
					travelEndTime: "",
					travelType: "",
					travelStartCity: "",
					travelArrivalCity: "",
					travelDays: "",
					travelSTD: "",
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
					{organName: "上海魔方分公司",organNo: '01'},
					{organName: "魔方分公司深圳分公司",organNo: 'p1'},
					{organName: "深圳前海橙色魔方信息技术有限公司",organNo: '0'}
				],
				travelTypeList: [
					{label: "业务拓展", travelNo: "01"},
					{label: "项目实施", travelNo: "02"},
					{label: "会议", travelNo: "03"},
					{label: "其他", travelNo: "99"}
				],
			 	rules: {
		          	travelType: [
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
			//查询出差详情
			this.queryTravelInfo(params);
			//查询公司列表
			this.queryCompList();
		},
		methods: {
			changeStartTime(time) {
//				this.formdata.travelStartTime = time;
			},
			changeEndTime(time) {
//				this.formdata.travelEndTime = time;
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
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			queryTravelInfo(params) {
				const self = this;
				self.$axios.get(baseURL+'/travel/getTravelInfoByApplyNo',{params: params})
				.then(function(res) {
					console.log('travelInfo',res);
//					self.formdata = res.data.data;
//					self.formdata.updatedDate = moment(self.formdata.updatedDate).format('YYYY-MM-DD hh:mm:ss');
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryAllCompany')
				.then(function(res) {
					console.log('CompList',res);
					self.compList = res.data.data;
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/organ/queryChildrenDep', {params: params})
				.then(function(res) {
					console.log('DerpList',res);
					self.departList = res.data.data;
				}).catch(function(err) {
					console.log(err);
				})
			},
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/travel/downloadFile',{params: params})
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