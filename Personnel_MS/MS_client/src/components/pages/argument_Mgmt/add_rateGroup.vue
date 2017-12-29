<template>
	<div class="add_rateGroup">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="税率组新增"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">税率组新增</span>
				<el-button type="primary" class="toolBtn btn-primary" @click="save('formdata')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :rules="rules" :model="formdata" label-width="80px">
					<el-col :sm="24" :md="12">
						<el-form-item label="组名称" prop="groupName">
						    <el-input v-model="formdata.groupName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="起征点" prop="taxThreshold">
						    <el-input v-model="formdata.taxThreshold"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="生效日期" prop="startTime">
				        	<el-date-picker type="date" v-model="formdata.startTime" @change="changeStartTime" :editable="false" style="width: 100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="失效日期" prop="endTime">
				        	<el-date-picker type="date" v-model="formdata.endTime" @change="changeEndTime" placeholder="如无，则不填" :editable="false" style="width: 100%;"></el-date-picker>
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
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		var checkEndTime = (rule, value, callback) => {
	        if (value === '') {
	          	callback();
	        } else if (value < this.formdata.startTime) {
	          	callback(new Error('失效日期必须大于等于生效日期'));
	        } else {
	          	callback();
	        }
      	};
		return {
			formdata: {
				groupName: "",
				groupId: "",
				startTime: "",
				endTime: "",
				remark: "",
				taxThreshold: ""
			},
			rules: {
				groupName: [
					{ required: true, message: '组名称不能为空', trigger: 'blur' }
				],
				taxThreshold: [
					{ required: true, message: '起征点不能为空', trigger: 'blur' },
					{ pattern: /^\d{1,14}(\.\d{1,2})?$/, message: "请输入正确的金额" }
				],
				startTime: [
					{ required: true, message: '生效日期不能为空', trigger: 'change' }
				],
				endTime: [
					{ validator: checkEndTime, trigger: 'change' }
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
	methods: {
		changeStartTime(time) {
			this.formdata.startTime = time;
			console.log(this.formdata.startTime)
		},
		changeEndTime(time) {
			this.formdata.endTime = time;
		},
		save(formName) {
			const self = this;
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		let params = {
	          			groupName: self.formdata.groupName,
						startTime: self.formdata.startTime,
						endTime: self.formdata.endTime,
						remark: self.formdata.remark,
						isDelete: "1",
						taxThreshold: self.formdata.taxThreshold
	          		};
	          		
	          		self.insertTaxRateGroup(params);
	          		
	          	} else {
	            	return false;
	          	}
	        });
		},
		insertTaxRateGroup(params) {
			const self = this;
			self.$axios.post(baseURL+'/taxRateGroup/addRGroup', params)
  			.then((res) => {
  				console.log(res);
  				if(res.data.code === "S00000") {
  					self.$message({ message: '税率组新增成功', type: 'success' });
  					self.$router.push('/tax_rate');
  				} else {
					this.$message.error(res.data.retMsg);
				}
  				
  			}).catch((err) => {
  				console.log('error');
  			})
		}
	}
}
</script>

<style>
.add_rateGroup {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

</style>