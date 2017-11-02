<template>
	<div class="travelC_wrap">
		<current yiji="考勤管理" erji="出差管理" sanji="出差详情">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">出差详情</span>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata2.organNo" value-key="organNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
					    <el-select v-model="formdata2.deptNo" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				<!--<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">-->  	
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
				<!--</el-form>-->

				  	<div class="info-title">出差信息</div>
				  	<el-form-item label="出差开始时间" prop="travelStartTime">
			        	<el-date-picker type="date" v-model="formdata2.travelStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差结束时间" prop="travelEndTime">
			        	<el-date-picker type="date" v-model="formdata2.travelEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差类型" prop="travelType">
					    <el-select v-model="formdata2.travelType" value-key="travelType" @change="changeValue">
							<el-option v-for="item in travelTypeList" :key="item.travelNo" :label="item.label" :value="item.travelNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="出差城市">
					    <el-input class="travelCity" v-model="formdata2.travelStartCity" placeholder="出发城市"></el-input>
					    <span class="travelCity_line" >-</span>
					    <el-input class="travelCity" v-model="formdata2.travelArrivalCity" placeholder="到达城市"></el-input>
				  	</el-form-item>
				  	<el-form-item label="出差天数">
					    <el-input v-model="formdata2.travelDays"></el-input>
				  	</el-form-item>
				  	<el-form-item label="差补标准">
					    <el-input v-model="formdata2.travelSTD"></el-input>
				  	</el-form-item>
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
				formdata1: {
				},
				formdata2: {
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
				this.formdata2.travelStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.travelEndTime = time;
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
					self.formdata2 = res.data.data;
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