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
						    <el-select v-model="formdata.organNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-select v-model="formdata.derpNo" >
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata.userNo"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata.custName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata.certNo"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-input v-model="formdata.custPost"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata.custClass"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata.lineManager"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24" class="item-title">离职信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间" prop="dimTime">
						    <el-input v-model="formdata.dimTime"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型" prop="dimType">
						    <el-select v-model="formdata.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.dimTypeNo" :label="item.dimTypeName" :value="item.dimTypeNo"></el-option>
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
						    <el-input v-model="formdata.payEndTime"></el-input>
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
						<el-form-item label="最新更新人">
						    <el-input v-model="formdata.updatedBy"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新时间">
						    <el-input v-model="formdata.updatedDate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
					  		<el-input v-model="formdata.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="addFormdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm" 
					  			 :show-file-list="false" 
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
				formdata: {
					compOrgNo: "xxx",
					compName: "xxx",
					departName: "xxx",
					departOrgNo: "xxx",
					custName: "xxx",
					userNo: "xxx",
					certNo: "xxx",
					custPost: "xxx",
					custClass: "xxx",
					lineManager: "xxx",
					dimTime: "xxx",
					dimType: "xxx",
					hasGone: "xxx",
					payEndTime: "xxx",
					dimReason: "xxx",
					updatedBy: "xxx",
					updatedDate: "xxx",
					attachm: "",
					dimProveFlag: "xxx"
				},
				
				comp: {
					compName: '',
					compOrgNo: 'p1'
				},
				newcomp: {
					compName: '',
					compOrgNo: ''
				},
				depart: {
					departName: '',
					departOrgNo: ''
				},
				newdepart: {
					departName: '',
					departOrgNo: ''
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
				dimTypeList: [
					{dimTypeName:'辞退',dimTypeNo: "01"},
					{dimTypeName:'退休',dimTypeNo: "02"},
					{dimTypeName:'外调',dimTypeNo: "03"},
					{dimTypeName:'辞职',dimTypeNo: "04"},
					{dimTypeName:'裁员',dimTypeNo: "05"},
				],
				rules: {
		          	dimTime: [
		            	{ required: true, message: '离职时间不能为空', trigger: 'blur' }
	          		],
					dimType: [
		            	{ required: true, message: '离职类型不能为空', trigger: 'blur' }
	          		],
					payEndTime: [
		            	{ required: true, message: '工资截止日不能为空', trigger: 'blur' }
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
				const self = this;
				return {
				    workhisId: self.formdata.workhisId,
					
				}
			}
		},
		created() {
			let userNo = this.$route.params.userNo;
			let dimId = this.$route.params.dimId;
			let params = {
				userNo: userNo,
				dimId: dimId
			}
			//人事离职详情查询
			this.queryCustDimhisDetail(params); 
			//查询公司列表
			this.queryCompList();
		},
		methods: {
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
						
						if(!this.fileFlag) {
							let params = {
								
							};
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
					if(res.code === "S00000") {
		      			this.$message({ message: '操作成功', type: 'success' });
		      			this.$router.push('/detail_dimission');
		      		}
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustDimhisDetail(params) {
				let self = this;
				self.$axios.get(baseURL+'/custDimhis/queryCustDimhisDetail', {params: params})
				.then(function(res) {
					console.log('CustShifthisDetail',res);
//					self.formdata = res.data.data;
//					self.formdata.updatedDate = moment(self.formdata.updatedDate).format('YYYY-MM-DD hh:mm:ss');
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
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
				self.$axios.get(baseURL+'/wage/queryDerpByUserNo', {params: params})
				.then(function(res) {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.departList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
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

</style>