<template>
	<div class="edit_rate">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="个人所得税税率详情" wuji="税率修改"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">税率修改</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('rateInfo')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="rateInfo" :inline="true" :rules="rules" :model="rateInfo" label-width="100px">
					<el-col :sm="24" :md="12">
						<el-form-item label="编号" prop="applyNo">
						    <el-input v-model="rateInfo.applyNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  
					<el-col :sm="24" :md="12">
						<el-form-item label="下限" prop="groupLowerLimit">
						    <el-input v-model="rateInfo.groupLowerLimit"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="上限" prop="groupLimit">
						    <el-input v-model="rateInfo.groupLimit"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="百分率" prop="percentRate">
						    <el-input v-model="rateInfo.percentRate"></el-input>
					  		<span class="percent_icon">%</span>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="速算扣除数" prop="quickCal">
						    <el-input v-model="rateInfo.quickCal"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="备注" prop="remark">
						    <el-input v-model="rateInfo.remark"></el-input>
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
	        }else if (Number(value) <= Number(this.rateInfo.groupLowerLimit)) {
	          	callback(new Error('上限值必须大于下限值!'));
	        } else {
	          	callback();
	        }
      	};
      	var checkgroupLowerLimit = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('下限不能为空'));
	        }else {
	          	callback();
	        }
      	};
      	var checkPercentRate = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('百分率不能为空'));
	        }else {
	          	callback();
	        }
      	};
      	var checkQuickCal= (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('速算扣除数不能为空'));
	        }else {
	          	callback();
	        }
      	};
		return {
			rateInfo: {
				applyNo: "",
				groupLimit: '',
				groupLowerLimit: '',
				percentRate: '',
				quickCal: ''
			},
			rules: {
				applyNo: [
					{ required: true, message: '编号不能为空', trigger: 'blur' }
				],
				startTime: [
					{ type: 'date', required: true, message: '生效日期不能为空', trigger: 'blur' }
				],
				groupLimit: [
					{ required: true, validator: checkgroupLimit, trigger: 'blur' }
				],
				groupLowerLimit: [
					{ required: true, validator: checkgroupLowerLimit, trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额" }
				],
				percentRate: [
					{ required: true, validator: checkPercentRate, trigger: 'blur' },
					{ pattern: /^\d{1,2}(\.\d{1,6})?$/, message: "请输入一百以内的数，可精确到小数点后6位" }
				],
				quickCal: [
					{ required: true, validator: checkQuickCal, trigger: 'blur' },
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
		this.rateInfo = JSON.parse(sessionStorage.getItem('editRate_rateInfo'));
		this.rateInfo.percentRate = this.rateInfo.percentRate*100;
	},
	methods: {
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		const self = this;
	          		let params = {
	          			applyNo: self.rateInfo.applyNo,
	          			groupId: self.rateInfo.groupId,
						groupLimit: self.rateInfo.groupLimit,
						groupLowerLimit: self.rateInfo.groupLowerLimit,
						percentRate: self.rateInfo.percentRate/100,
						quickCal: self.rateInfo.quickCal,
						remark: self.rateInfo.remark,
						isDelete: "1"
	          		};
	          		self.modifyRate(params);
	          		
	          	} else {
	            	return false;
	          	}
	        });
		},
		//修改税率
		modifyRate(params) {
			const self = this;
			self.$axios.put(baseURL+'/taxRateCtrl/modRate', params)
  			.then((res) => {
  				console.log(res);
  				if(res.data.code === "S00000") {
  					self.$message({ message: res.data.retMsg, type: 'success' });
  					self.$router.push('/rate_info');
  				} else {
					this.$message.error(res.data.retMsg);
				}
  				
  			}).catch((err) => {
  				console.log('error')
  			})
		}
	}
}
</script>

<style scoped>
.edit_rate {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.edit_rate .percent_icon {
    position: absolute;
    top: 0px;
    left: 320px;
}
</style>