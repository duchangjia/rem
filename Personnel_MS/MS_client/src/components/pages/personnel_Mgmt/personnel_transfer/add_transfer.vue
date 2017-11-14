<template>
	<div class="add_transfer">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动新增">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">人事调动新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :inline="true"  :rules="rules" :model="formdata" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata.oldOrgId" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="部门名称">
					    <el-select v-model="formdata.oldDeprtId" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="工号">
					    <el-input v-model="formdata.userNo"></el-input>
				  	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata.custName"></el-input>
				  	</el-form-item>
				  	<div class="info-title">调动信息</div>
				  	<el-form-item label="调动类型" prop="shiftType">
					    <el-select v-model="formdata.shiftType" value-key="shiftType" @change="changeValue">
							<el-option v-for="item in shiftTypeList" :key="item.shiftType" :label="item.shiftName" :value="item.shiftType"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="调动生效时间" prop="shiftCameTime">
					    <el-input v-model="formdata.shiftCameTime"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原公司名称">
					    <el-select v-model="formdata.oldOrgId" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="新公司名称" prop="newcompOrgNo">
					    <el-select v-model="formdata.newOrgId" value-key="newcompOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="原部门名称">
					    <el-select v-model="formdata.oldDeprtId" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="新部门名称" prop="newdepartOrgNo">
					    <el-select v-model="formdata.newDeprtId" value-key="newdepartOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="原直线经理">
					    <el-input v-model="formdata.oldLineManager"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新直线经理" prop="newLineManager">
					    <el-input v-model="formdata.newLineManager"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原岗位">
					    <el-input v-model="formdata.oldPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新岗位" prop="newPost">
					    <el-input v-model="formdata.newPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="原职级">
					    <el-input v-model="formdata.oldClass"></el-input>
				  	</el-form-item>
				  	<el-form-item label="新职级" prop="newClass">
					    <el-input v-model="formdata.newClass"></el-input>
				  	</el-form-item>
				  	<el-form-item label="调动原因" prop="shiftReason">
					    <el-input
						  type="textarea"
						  :autosize="{ minRows: 5, maxRows: 5}"
						  placeholder="请输入内容"
						  v-model="formdata.shiftReason">
						</el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width: 100%;">
				  		<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
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
				formdata: {
					oldOrgId: "",
//					compName: "",
//					departName: "",
					oldDeprtId: "",
					newOrgId: "",
//					newcompName: "",
//					newdepartName: "",
					newDeprtId: "",
					custName: "",
					userNo: "",
					shiftType: "",
					shiftCameTime: "",
					oldLineManager: "",
					newLineManager: "",
					oldPost: "",
					newPost: "",
					oldClass: "",
					newClass: "",
					shiftReason: "",
					attachm: ""
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
			
		},
		methods: {
			handleRemove(file, fileList) {
		        console.log(file, fileList);
	      	},
	      	handlePreview(file) {
		        console.log(file);
	      	},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	            console.log(this.formdata.newDeprtId)
	      	},
	      	download() {
		      	
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						let params = {
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
						//人事调动添加
						self.addCustShif(params);
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			addCustShif(params) {
				let self = this;
				self.$axios.post(baseURL+'/custShifthis/addCustShifthis',params)
				.then(function(res) {
					console.log('addCustShif',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.add_transfer {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_transfer .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_transfer .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.add_transfer .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.add_transfer .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_transfer .content-inner {
	padding: 30px 0px;
}	
.add_transfer .info-title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}
.add_transfer .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.add_transfer .el-form-item {
	padding-left: 20px;
}
.add_transfer .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
    font-weight: normal;
}
.add_transfer .el-textarea__inner {
    margin-left: 30px;
}
.add_transfer .file_button {
	color: #FF9900;
	font-size: 14px;
}
.add_transfer .el-form-item__error {
    left: 30px;
}
.add_transfer .uploadBtn {
  position: absolute;
  height: 38px;
  top: 0;
  right: 0;
  margin: 0;
  border: 1px solid #ff9900;
  border-radius: 0;
  background: #ff9900;
  font-family: "PingFang SC";
}
.add_transfer .el-upload__input {
    margin-left: 30px;
    border: 1px solid #eeeeee;
}
.add_transfer .conserve {
	float: right;
	margin-top: 10px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 30px;
	padding: 0;
}
</style>