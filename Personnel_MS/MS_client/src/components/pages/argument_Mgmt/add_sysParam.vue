<template>
	<div class="add_sysParam">
        
		<current yiji="参数管理" erji="系统参数" sanji="参数新增" ></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">参数新增</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="100px">
					<el-col :sm="24" :md="12">
						<el-form-item label="参数名称" prop="paraName">
						    <el-input v-model="formdata.paraName"></el-input>
					  	</el-form-item>
					</el-col>  
					<el-col :sm="24" :md="12">
						<el-form-item label="参数代码" prop="paraCode">
						    <el-input v-model="formdata.paraCode"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="参数值" prop="paraValue">
						    <el-input v-model="formdata.paraValue"></el-input>
					  	</el-form-item>
					</el-col>    	
					<el-col :sm="24" :md="12">
						<el-form-item label="参数显示信息" prop="paraShowMsg">
						    <el-input v-model="formdata.paraShowMsg"></el-input>
					  	</el-form-item>
					</el-col> 
					 
					<!-- <el-col :sm="24" :md="12">
						<el-form-item label="参数类别" prop="paraClass">
						    <el-input v-model="formdata.paraClass"></el-input> 
							<el-select  v-model="formdata.paraClass">
								<el-option label="系统参数" value="1"></el-option>
								<el-option label="业务参数" value="2"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  -->
					<!-- <el-col :sm="24" :md="12">
						<el-form-item label="参数语种" prop="paraLang">
						    <el-input v-model="formdata.percentRate"></el-input>
					  	</el-form-item>
					</el-col> 	 -->
					   	
					<el-col :sm="24" :md="12">
						<el-form-item label="参数状态" prop="paraStatus">
							<el-select  v-model="formdata.paraStatus">
								<el-option label="启用" value="1"></el-option>
								<el-option label="停用" value="2"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>    	
					<el-col :sm="24" :md="12">
						<el-form-item label="参数描述" prop="paraDesc">
						    <el-input v-model="formdata.paraDesc"></el-input>
					  	</el-form-item>
					</el-col>  	
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			formdata: {
				groupName: '',
				groupId: "",
				applyNo: "",
				groupLimit: '',
				groupLowerLimit: '',
				percentRate: '',
				quickCal: '',
				remark: ''
			},
			rules: {
				paraCode: [
					{ required: true, message: '参数代码不能为空', trigger: 'blur' }
				],
				paraValue: [
					{ required: true, message: '参数值不能为空', trigger: 'blur' }
				],
				paraLang: [
					{ required: true, message: '参数语种不能为空', trigger: 'blur' }
				],
				paraName: [
					{ required: true, message: '参数名称不能为空', trigger: 'blur' }
				],
				paraClass: [
					{ required: true, message: '参数类别不能为空', trigger: 'blur' }
				],
				paraShowMsg: [
					{ required: true, message: '参数显示信息不能为空', trigger: 'blur' }
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
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		const self = this;
	          		let params = {
	          			paraName: self.formdata.paraName,
	          			paraCode: self.formdata.paraCode,
						paraValue: self.formdata.paraValue,
						paraShowMsg: self.formdata.paraShowMsg,
						paraClass: self.formdata.paraClass,
						paraDesc: self.formdata.paraDesc
						// percentRate: self.formdata.pers
						// isDelete: "1"
	          		};
	          		self.addSysParamMgmt(params);
	          		
	          	} else {
	            	return false;
	          	}
	        });
		},
		//新增
		addSysParamMgmt(params) {
			const self = this;
			self.$axios.post(baseURL+'/sysParamMgmt/addSysParamMgmt', params)
  			.then((res) => {
  				console.log("addRate",res);
  				if(res.data.code === "S00000") {
  					// self.formdata.applyNo = res.data.data;
	  				self.$message({ message: '操作成功', type: 'success' });
	  				self.$router.push('/argument_1');
  				} else {
					this.$message.error(res.data.retMsg);
				}
	  				
  			})
		}
	}
}
</script>

<style scoped>
.add_sysParam {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.add_sysParam .percent_icon {
    position: absolute;
    top: 0px;
    left: 320px;
}
</style>