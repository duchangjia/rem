<template>
	<div class="travelC_wrap">
		<current yiji="考勤管理" erji="出差管理" sanji="出差修改">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">出差修改</span>
				<el-button type="primary" class="conserve" @click="save('formdata2')">保存</el-button>
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
				  	<div class="info-title">出差信息</div>
				  	<el-form-item label="出差开始时间" prop="travelStartTime">
			        	<el-date-picker type="datetime" v-model="formdata2.travelStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差结束时间" prop="travelEndTime">
			        	<el-date-picker type="datetime" v-model="formdata2.travelEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差类型" prop="travelType">
					    <el-select v-model="formdata2.travelType" value-key="travelType" @change="changeValue">
							<el-option v-for="item in travelTypeList" :key="item.travelNo" :label="item.label" :value="item.travelNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="出差城市" prop="travelStartCity">
					    <el-input class="travelCity" v-model="formdata2.travelStartCity" placeholder="出发城市"></el-input>
					    <span class="travelCity_line" >-</span>
					    <el-input class="travelCity" v-model="formdata2.travelArrivalCity" placeholder="到达城市"></el-input>
				  	</el-form-item>
				  	<el-form-item label="出差天数" prop="travelDays">
					    <el-input v-model="formdata2.travelDays"></el-input>
				  	</el-form-item>
				  	<el-form-item label="差补标准" prop="travelSTD">
					    <el-input v-model="formdata2.travelSTD" :disabled="true"></el-input>
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
				  	<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" name="file"
				  			 :data="formdata"
				  			 :on-change="changeUpload" 
				  			 :on-success="successUpload"
				  			 action="/iem_hrm/travel/modifyTravelInfo" 
				  			 :show-file-list="false" 
				  			 :auto-upload="false"
				  			 :headers="token"
				  		>
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
			var checkTravelEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('出差结束时间不能为空'));
		        } else if (value <= this.formdata2.travelStartTime) {
		          	callback(new Error('请输入正确的结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
//				formdata: {},
				fileFlag: '',
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
				travelTypeList: [
					{label: "业务拓展", travelNo: "01"},
					{label: "项目实施", travelNo: "02"},
					{label: "会议", travelNo: "03"},
					{label: "其他", travelNo: "99"}
				],
			 	rules: {
			 		travelType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		],
	          		travelStartTime: [
		            	{ required: true, message: '出差开始时间不能为空', trigger: 'change' }
	          		],
	          		travelEndTime: [
		            	{ required: true, validator: checkTravelEndTime, trigger: 'change' }
	          		],
	          		travelStartCity: [
//		            	{ required: true, message: '出差出发城市不能为空', trigger: 'blur' }
	          		],
	          		travelArrivalCity: [
//		            	{ required: true, message: '出差到达城市不能为空', trigger: 'blur' }
	          		],
	          		travelDays: [
		            	{ required: true, message: '出差天数不能为空', trigger: 'blur' }
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
				return {
					applyNo: this.formdata2.applyNo, //出差编号
				    userNo: this.formdata2.userNo,//工号
				    travelType: this.formdata2.travelType,//出差类型
				    travelStartTime: this.formdata2.travelStartTime,//出差开始时间	
				    travelEndTime: this.formdata2.travelEndTime, //出差结束时间
				    travelStartCity: this.formdata2.travelStartCity,//出差开始城市	
				    travelArrivalCity: this.formdata2.travelArrivalCity,//出差到达城市
				    travelDays: this.formdata2.travelDays, //出差天数  
				    travelSTD: this.formdata2.travelSTD,//差补标准
				    remark: this.formdata2.remark,//备注
				    attachm: this.formdata2.attachm//附件
				}
			}
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
				let params = {
					travelStartTime: this.formdata2.travelStartTime,
					travelEndTime: this.formdata2.travelEndTime
				}
				if(this.formdata2.travelEndTime) {
					this.calTravelDays(params);
				}
			},
			changeEndTime(time) {
				this.formdata2.travelEndTime = time;
				let params = {
					travelStartTime: this.formdata2.travelStartTime,
					travelEndTime: this.formdata2.travelEndTime
				}
				console.log(params);
				if(this.formdata2.travelStartTime) {
					this.calTravelDays(params);
				}
			},
			changeCompValue(value) {
				const self = this;
				let params = {
					organNo: value
				}
				//查询部门列表
				self.queryDerpList(params);
			},
			changeValue(value) {
		 		const self = this;
	      	},
	      	changeUpload(file, fileList) {
	      		console.log('fileList',fileList);
		 		this.fileFlag = file;
	      	},
	      	successUpload(response, file, fileList) {
	      		this.$message({ message: '操作成功', type: 'success' });
	      	},
	      	//修改出差详细信息
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
//						self.formdata = params;
						self.$refs.upload.submit();
						console.log('!self.fileFlag',self.fileFlag)
						if(!self.fileFlag){
							console.log('true')
							let params = {
								applyNo: self.formdata2.applyNo, //出差编号
							    userNo: self.formdata2.userNo,//工号
							    travelType: self.formdata2.travelType,//出差类型
							    travelStartTime: self.formdata2.travelStartTime,//出差开始时间	
							    travelEndTime: self.formdata2.travelEndTime, //出差结束时间
							    travelStartCity: self.formdata2.travelStartCity,//出差开始城市	
							    travelArrivalCity: self.formdata2.travelArrivalCity,//出差到达城市
							    travelDays: self.formdata2.travelDays, //出差天数  
							    travelSTD: self.formdata2.travelSTD,//差补标准
							    remark: self.formdata2.remark,//备注
							    //attachm: self.formdata2.attachm//附件
							}
							self.modifyTravelInfo(params);
						}
						
					} else {
						return false;
					}
				});
			},
			queryTravelInfo(params) {
				let self = this;
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
					console.log('err');
				})
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/travel/modifyTravelInfo',params)
				.then(function(res) {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
						self.$message({ message: '操作成功', type: 'success' });
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			calTravelDays(params) {
				let self = this;
				self.$axios.get(baseURL+'/travel/calTravelDays',{params})
				.then(function(res) {
					console.log('calTravelDays',res);
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

<style>

</style>