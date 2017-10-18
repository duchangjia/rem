<template>
	<div class="add_tax">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="税率组新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">税率组新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :rules="rules" :model="formdata" label-width="80px">
					<el-form-item label="组名称" prop="name">
					    <el-input v-model="formdata.name"></el-input>
				  	</el-form-item>
				  	<el-form-item label="生效日期" prop="create_date">
			        	<el-date-picker type="date" v-model="formdata.create_date"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="失效日期" prop="del_date">
			        	<el-date-picker type="date" placeholder="如无，则不填" v-model="formdata.del_date"></el-date-picker>
			      	</el-form-item>
					<el-form-item label="上限" prop="max_lev">
					    <el-input v-model="formdata.max_lev"></el-input>
				  	</el-form-item>
				  	<el-form-item label="下限" prop="min_lev">
					    <el-input v-model="formdata.min_lev"></el-input>
				  	</el-form-item>
				  	<el-form-item label="百分率" prop="percent">
					    <el-input v-model="formdata.percent"></el-input>
				  	</el-form-item>
				  	<el-form-item label="速算扣除率" prop="quickC">
					    <el-input v-model="formdata.quickC" placeholder='自动计算'></el-input>
				  	</el-form-item>
				  	<el-form-item label="备注">
					    <el-input v-model="formdata.beiz"></el-input>
				  	</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
export default {
	data() {
		return {
			formdata: {
				name: "",
				create_date: "",
				del_date: "",
				beiz: "",
				max_lev: '',
				min_lev: '',
				percent: '',
				quickC: ''
			},
			rules: {
				name: [
					{ required: true, message: '组名称不能为空', trigger: 'blur' }
				],
				create_date: [
					{ type: 'date', required: true, message: '生效日期不能为空', trigger: 'blur' }
				],
				max_lev: [
					{ required: true, message: '上限不能为空', trigger: 'blur' }
				],
				min_lev: [
					{ required: true, message: '下限不能为空', trigger: 'blur' }
				],
				percent: [
					{ required: true, message: '百分率不能为空', trigger: 'blur' }
				]
			}
		}
	},
	components: {
		current
	},
	methods: {
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		//操作
	           	 	this.$message({
			          	message: '税率组新增成功',
			          	type: 'success'
			        });
	          	} else {
	            	this.$message.error('新增失败');
	            	return false;
	          	}
	        });
		}
	}
}
</script>

<style>
.add_tax {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_tax .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_tax .content .title {
border-bottom: 1px solid #EEEEEE;
}

.add_tax .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
	letter-spacing: 0;
}

.add_tax .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_tax .content-inner {
	padding: 40px 0px;
}
.add_tax .conserve {
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
.add_tax .el-input__inner {
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
.add_tax .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.add_tax .el-form-item__error {
    padding-left: 30px;
}
</style>