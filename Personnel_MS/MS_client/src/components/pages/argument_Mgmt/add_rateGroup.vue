<template>
	<div class="add_rateGroup">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="税率组新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">税率组新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :rules="rules" :model="formdata" label-width="80px">
					<el-form-item label="组名称" prop="groupName">
					    <el-input v-model="formdata.groupName"></el-input>
				  	</el-form-item>
				  	<el-form-item label="起征点" prop="taxThreshold">
					    <el-input v-model="formdata.taxThreshold"></el-input>
				  	</el-form-item>
				  	<el-form-item label="生效日期" prop="startTime">
			        	<el-date-picker type="date" v-model="formdata.startTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="失效日期" prop="endTime">
			        	<el-date-picker type="date" v-model="formdata.endTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="备注">
					    <el-input v-model="formdata.remark"></el-input>
				  	</el-form-item>
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
					{  required: true, message: '起征点不能为空', trigger: 'change' }
				],
				startTime: [
					{  required: true, message: '生效日期不能为空', trigger: 'change' }
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
	            	this.$message.error('新增失败');
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
.add_rateGroup .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_rateGroup .content .title {
border-bottom: 1px solid #EEEEEE;
}

.add_rateGroup .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
	letter-spacing: 0;
}

.add_rateGroup .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_rateGroup .content-inner {
	padding: 40px 0px;
}
.add_rateGroup .conserve {
	float: right;
	margin-top: 20px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 40px;
}
.add_rateGroup .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.el-date-editor.el-input {
    width: 300px;
    margin-left: 30px;
}
.el-date-editor.el-input .el-input__inner {
    margin-left: 0px;
}
.add_rateGroup .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.add_rateGroup .el-form-item__error {
    padding-left: 30px;
}
</style>