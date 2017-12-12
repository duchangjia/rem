<template>
	<div class="add_rateGroup">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="个人所得税税率详情" wuji="税率新增"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">税率新增</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="100px">
					<el-col :sm="24" :md="12">
						<el-form-item label="组名称" prop="groupName">
						    <el-input v-model="formdata.groupName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  
					<el-col :sm="24" :md="12">
						<el-form-item label="下限" prop="groupLowerLimit">
						    <el-input v-model="formdata.groupLowerLimit"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="上限" prop="groupLimit">
						    <el-input v-model="formdata.groupLimit"></el-input>
					  	</el-form-item>
					</el-col>    	
					<el-col :sm="24" :md="12">
						<el-form-item label="百分率" prop="percentRate">
						    <el-input v-model="formdata.percentRate"></el-input>
						    <span class="percent_icon">%</span>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="速算扣除数" prop="quickCal">
						    <el-input v-model="formdata.quickCal"></el-input>
					  	</el-form-item>
					</el-col>    	
					<el-col :sm="24" :md="12">
						<el-form-item label="备注" prop="remark">
						    <el-input v-model="formdata.remark"></el-input>
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
		var checkgroupLimit = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('上限不能为空'));
	        } else if (!(/^\d{1,14}(\.\d{1,2})?$/.test(value))) {
	          	callback(new Error('请输入正确的金额'));
	        }else if (Number(value) <= Number(this.formdata.groupLowerLimit)) {
	          	callback(new Error('上限值必须大于下限值!'));
	        } else {
	          	callback();
	        }
      	};
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
				groupId: [
					{ required: true, message: '组名称不能为空', trigger: 'blur' }
				],
				startTime: [
					{ type: 'date', required: true, message: '生效日期不能为空', trigger: 'blur' }
				],
				groupLimit: [
					{ required: true, validator: checkgroupLimit, trigger: 'blur' }
				],
				groupLowerLimit: [
					{ required: true, message: '下限不能为空', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额" }
				],
				percentRate: [
					{ required: true, message: '百分率不能为空', trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				quickCal: [
					{ required: true, message: '数算扣除数不能为空', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额" }
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
	created() {
		this.formdata.groupName = sessionStorage.getItem('rateInfo_groupName');
		this.formdata.groupId = sessionStorage.getItem('rateInfo_groupId');
	},
	methods: {
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		const self = this;
	          		let params = {
	          			groupId: self.formdata.groupId,
	          			remark: self.formdata.remark,
						GroupLimit: self.formdata.groupLimit,
						GroupLowerLimit: self.formdata.groupLowerLimit,
						percentRate: self.formdata.percentRate/100,
						quickCal: self.formdata.quickCal,
						isDelete: "1"
	          		};
	          		self.insertTaxRateCtrl(params);
	          		
	          	} else {
	            	return false;
	          	}
	        });
		},
		//新增税率
		insertTaxRateCtrl(params) {
			const self = this;
			self.$axios.post(baseURL+'/taxRateCtrl/addRate', params)
  			.then((res) => {
  				console.log("addRate",res);
  				if(res.data.code === "S00000") {
  					self.formdata.applyNo = res.data.data;
	  				self.$message({ message: '操作成功', type: 'success' });
	  				self.$router.push('/rate_info');
  				}
	  				
  			})
		}
	}
}
</script>

<style scoped>
.add_rateGroup {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.add_rateGroup .percent_icon {
    position: absolute;
    top: 0px;
    left: 320px;
}
</style>