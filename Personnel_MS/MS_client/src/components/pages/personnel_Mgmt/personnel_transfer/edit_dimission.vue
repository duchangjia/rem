<template>
	<div class="edit_dimission">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询" siji="员工离职修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">员工离职修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
						    <el-input v-model="formdata.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-input v-model="formdata.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata.userNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata.certNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-select v-model="formdata.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-select v-model="formdata.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata.lineManagerName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24" class="item-title">离职信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间" prop="dimTime">
						    <el-date-picker type="date" v-model="formdata.dimTime" @change="changeDimTime" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型" prop="dimType">
						    <el-select v-model="formdata.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="去向">
						    <el-input v-model="formdata.hasGone"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资截止日" prop="payEndTime">
						    <el-date-picker type="date" v-model="formdata.payEndTime" @change="changePayEndTime" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="离职原因" prop="dimReason" style="width:100%;">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.dimReason">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
					  		<el-input v-model="formdata.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/custDimhis/updateCustDimhis" 
					  			 :show-file-list="true" 
					  			 :auto-upload="false"
					  			 :headers="token"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
	                        </el-upload>
	                        <el-checkbox v-model="formdata.dimProveFlag">是否需要出具离职证明</el-checkbox>
					  	</el-form-item>
					</el-col>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	import moment from 'moment'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileFlag: '',
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//离职类型列表
				dimTypeList: [],
				rules: {
		          	dimTime: [
		            	{ required: true, message: '离职时间不能为空', trigger: 'change' }
	          		],
					dimType: [
		            	{ required: true, message: '离职类型不能为空', trigger: 'blur' }
	          		],
					payEndTime: [
		            	{ required: true, message: '工资截止日不能为空', trigger: 'change' }
	          		],
					dimReason: [
		            	{ required: true, message: '离职原因不能为空', trigger: 'blur' }
	          		]
	          	}
			};
		},
		components: {
			current
		},
		computed: {
			addFormdata: function(){
				return {
				    dimId: this.formdata.dimId,
					userNo: this.formdata.userNo,//工号
				   	dimTime: this.formdata.dimTime,
					dimType: this.formdata.dimType,
					hasGone: this.formdata.hasGone,
					payEndTime: this.formdata.payEndTime,
					dimReason: this.formdata.dimReason,
					attachm: this.formdata.attachm,
					dimProveFlag: this.formdata.dimProveFlag ? '01': '02'
				}
			}
		},
		created() {
			
			//人事离职详情查询
			this.queryCustDimhisDetail(); 
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询离职类型列表
			this.querydimTypeList();
		},
		methods: {
			changeDimTime(time) {
				this.formdata.dimTime = time;
			},
			changePayEndTime(time) {
				this.formdata.payEndTime = time;
			},
			changeComp(value) {
		 		console.log('value',value);
	            let params = {
	            	organNo: value
	            }
	            this.queryDerpList(params);
	      	},
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
		 		this.formdata.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
	      			this.$router.push('/detail_dimission');
	      		}
	      		
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						self.$refs.upload.submit();
						if(!this.fileFlag) {
							let params = {
								dimId: this.formdata.dimId,
								userNo: this.formdata.userNo,
							   	dimTime: this.formdata.dimTime,
								dimType: this.formdata.dimType,
								hasGone: this.formdata.hasGone,
								payEndTime: this.formdata.payEndTime,
								dimReason: this.formdata.dimReason,
								attachm: this.formdata.attachm,
								dimProveFlag: this.formdata.dimProveFlag ? '01': '02'//01ture  02false
							};
							console.log('params',params)
							//无附件时修改
							self.updateCustDimhis(params);
						}
							

					} else {
						return false;
					}
				});
			},
			updateCustDimhis(params) {
				let self = this;
				self.$axios.put(baseURL+'/custDimhis/updateCustDimhis',params)
				.then(function(res) {
					console.log('updateCustDimhis',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
		      			self.$router.push('/detail_dimission');
		      		}
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustDimhisDetail() {
				let self = this;
				let userNo = sessionStorage.getItem('editDimission_userNo');
				let dimId = sessionStorage.getItem('editDimission_dimId');
				let params = {
					userNo: userNo,
					dimId: dimId
				}
				self.$axios.get(baseURL+'/custDimhis/queryCustDimhisDetail', {params: params})
				.then(function(res) {
					console.log('dimDetail',res);
					self.formdata = res.data.data;
					self.formdata.dimProveFlag = self.formdata.dimProveFlag=='01' ? true: false;
//					self.formdata.updatedDate = moment(self.formdata.updatedDate).format('YYYY-MM-DD hh:mm:ss');
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
				.then(function(res) {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
				.then(function(res) {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.departList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			querydimTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=DIM_TYPE')
				.then(function(res) {
					console.log('dimType',res);
					if(res.data.code === "S00000") {
						self.dimTypeList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then(function(res) {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then(function(res) {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.edit_dimission {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.edit_dimission .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
}
.edit_dimission .el-checkbox__inner:hover {
    border-color: #20a0ff;
}
</style>