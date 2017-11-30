<template>
	<div class="edit_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动修改">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">人事调动修改</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
						    <el-select v-model="formdata.oldOrgId" value-key="compOrgNo">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-select v-model="formdata.oldDeprtId" value-key="departOrgNo">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
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
					<el-col :span="24" class="item-title">调动信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="调动类型" prop="shiftType">
						    <el-select v-model="formdata.shiftType" value-key="shiftType">
								<el-option v-for="item in shiftTypeList" :key="item.shiftType" :label="item.shiftName" :value="item.shiftType"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="调动生效时间" prop="shiftCameTime">
						    <el-date-picker type="datetime" v-model="formdata.shiftCameTime" @change="changeShiftCameTime" style="width: 100%;"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原公司名称">
						    <el-select v-model="formdata.oldOrgId" value-key="compOrgNo">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新公司名称" prop="newOrgId">
						    <el-select v-model="formdata.newOrgId" value-key="newcompOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原部门名称">
						    <el-select v-model="formdata.oldDeprtId" value-key="departOrgNo">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新部门名称" prop="newDeprtId">
						    <el-select v-model="formdata.newDeprtId" value-key="newdepartOrgNo">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原直线经理">
						    <el-input v-model="formdata.oldLineManager"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新直线经理" prop="newLineManager">
						    <el-input v-model="formdata.newLineManager"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原岗位">
						    <el-input v-model="formdata.oldPost"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新岗位" prop="newPost">
						    <el-input v-model="formdata.newPost"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原职级">
						    <el-input v-model="formdata.oldClass"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新职级" prop="newClass">
						    <el-input v-model="formdata.newClass"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="调动原因" prop="shiftReason">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.shiftReason">
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
					  			 action="/iem_hrm" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
	                        </el-upload>
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
	const baseURL = 'iem_hrm';
	export default {
		data() {
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileFlag: '',
				formdata: {
					oldOrgId: "01",
//					compName: "",
//					departName: "",
					oldDeprtId: "01",
					newOrgId: "p1",
//					newcompName: "",
//					newdepartName: "",
					newDeprtId: "p1",
					custName: "xiaoyi",
					userNo: "p001",
					shiftType: "001",
					shiftCameTime: "xxx",
					oldLineManager: "",
					newLineManager: "",
					oldPost: "",
					newPost: "",
					oldClass: "",
					newClass: "",
					shiftReason: "",
					attachm: ""
				},
				
				comp: {
					compName: '',
					compOrgNo: ''
				},
				newcomp: {
					newcompName: '',
					newcompOrgNo: ''
				},
				depart: {
					departName: '',
					departOrgNo: ''
				},
				newdepart: {
					newdepartName: '',
					newdepartOrgNo: ''
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
				shiftTypeList: [
					{shiftType: '01',shiftName: '晋升'},
					{shiftType: '02',shiftName: '调动'},
					{shiftType: '03',shiftName: '平调'},
					{shiftType: '04',shiftName: '轮岗'},
					{shiftType: '05',shiftName: '工资调整'},
					{shiftType: '99',shiftName: '其他'},
				],
			 	rules: {
		          	shiftType: [
		            	{ required: true, message: '调动类型不能为空', trigger: 'blur' }
	          		],
		          	shiftCameTime: [
		          		{ required: true, message: '生效日期不能为空', trigger: 'blur' }
		          	],
		          	newOrgId: [
		          		{ required: true, message: '新公司名不能为空', trigger: 'blur' }
		          	],
		          	newDeprtId: [
	          			{ required: true, message: '新部门名不能为空', trigger: 'blur' }
		          	],
					newLineManager: [
						{ required: true, message: '新直线经理不能为空', trigger: 'blur' }
					],
					newPost: [
						{ required: true, message: '新岗位不能为空', trigger: 'blur' }
					],
					newClass: [
						{ required: true, message: '新职级不能为空', trigger: 'blur' }
					],
					shiftReason: [
						{ required: true, message: '调动原因不能为空', trigger: 'blur' }
					]
				}
			}
		},
		components: {
			current
		},
		created() {
			let userNo = this.$route.params.userNo;
			let workhisId = this.$route.params.workhisId;
			let params = {
				userNo: userNo,
				workhisId: workhisId
			}
			//查询调动列表
			this.queryCustShifthisInfo(params);
			//查询公司列表
			this.queryCompList();
		},
		computed: {
			addFormdata: function(){
				const self = this;
				return {
				    workhisId: self.formdata.workhisId,
					oldOrgId: self.formdata.oldOrgId,
					oldDeprtId: self.formdata.oldDeprtId,
					newOrgId: self.formdata.newOrgId,
					newDeprtId: self.formdata.newDeprtId,
//					custName: self.formdata.custName,
					userNo: self.formdata.userNo,
					shiftType: self.formdata.shiftType,
					shiftCameTime: self.formdata.shiftCameTime,
					oldLineManager: self.formdata.oldLineManager,
					newLineManager: self.formdata.newLineManager,
					oldPost: self.formdata.oldPost,
					newPost: self.formdata.newPost,
					oldClass: self.formdata.oldClass,
					newClass: self.formdata.newClass,
					shiftReason: self.formdata.shiftReason,
					attachm: self.formdata.attachm
				}
			}
		},
		methods: {
	      	changeShiftCameTime(time) {
	      		console.log('time',time)
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
	      			this.$router.push('/detail_transfer');
	      		}
	      		
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						self.$refs.upload.submit();
						if(!self.fileFlag) {
							let params = {
								workhisId: self.formdata.workhisId,
								oldOrgId: self.formdata.oldOrgId,
								oldDeprtId: self.formdata.oldDeprtId,
								newOrgId: self.formdata.newOrgId,
								newDeprtId: self.formdata.newDeprtId,
	//							custName: self.formdata.custName,
								userNo: self.formdata.userNo,
								shiftType: self.formdata.shiftType,
								shiftCameTime: self.formdata.shiftCameTime,
								oldLineManager: self.formdata.oldLineManager,
								newLineManager: self.formdata.newLineManager,
								oldPost: self.formdata.oldPost,
								newPost: self.formdata.newPost,
								oldClass: self.formdata.oldClass,
								newClass: self.formdata.newClass,
								shiftReason: self.formdata.shiftReason,
								attachm: self.formdata.attachm
							}
							//无附件时修改
							self.updateCustShif(params);
						}
						

					} else {
						return false;
					}
				});
			},
			updateCustShif(params) {
				let self = this;
				self.$axios.post(baseURL+'/custShifthis/updateCustShifthis',params)
				.then(function(res) {
					console.log('addCustShif',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCustShifthisInfo(params) {
				let self = this;
				self.$axios.get(baseURL+'/custShifthis/queryCustShifthisDetail', {params: params})
				.then(function(res) {
					console.log('CustShifthisDetail',res);
					self.formdata = res.data.data;
					self.formdata.shiftCameTime = moment(self.formdata.shiftCameTime).format('YYYY-MM-DD hh:mm:ss');
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
			},
		}
	};
</script>

<style>
.edit_transfer {
	padding: 0 0 20px 20px;
}
</style>