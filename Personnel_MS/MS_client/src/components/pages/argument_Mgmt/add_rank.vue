<template>
	<div class="add_rank">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置" siji="职级薪酬标准新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">职级薪酬标准新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :rules="rules" :model="formdata" label-width="120px">
					<el-form-item label="公司名称" prop="compName">
					    <el-input v-model="formdata.compName"></el-input>
				  	</el-form-item>
					<el-form-item label="模版名称" prop="modelName">
					    <el-input v-model="formdata.modelName" placeholder="yyyy-mm-dd"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级" prop="ranks">
				  		<el-select v-model="formdata.ranks">
							<el-option v-for="item in ranksList" :key="item" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="薪资标准下线" prop="min_level">
					    <el-input v-model="formdata.min_level"></el-input>
				  	</el-form-item>
				  	<el-form-item label="薪资标准上线" prop="max_level">
					    <el-input v-model="formdata.max_level"></el-input>
				  	</el-form-item>
				  	<el-form-item label="出差标准（人/天）">
					    <el-input v-model="formdata.busStandard"></el-input>
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
		var checkMax_level = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('请输入薪资标准上线'));
	        } else if (Number(value) <= Number(this.formdata.min_level)) {
	          	callback(new Error('上限值必须大于下限值!'));
	        } else {
	          	callback();
	        }
      	};
		return {
			formdata: {
				compName: '',
				modelName: "",
				ranks: '',
				min_level: '5000',
				max_level: '10000',
				busStandard: '',
				beiz: ""
			},
			ranksList: ['B10-高级开发软件工程师','B5-中级开发软件工程师','B5-UI'],
			rules: {
				compName: [
					{ required: true, message: '公司名称不能为空', trigger: 'blur' }
				],
				modelName: [
					{ required: true, message: '模版名称不能为空', trigger: 'blur' }
				],
				ranks: [
					{ required: true, message: '职级不能为空', trigger: 'blur' }
				],
				min_level: [
					{ required: true, message: '薪资标准下线不能为空', trigger: 'blur' }
				],
				max_level: [
					{ validator: checkMax_level, trigger: 'blur' }
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
.add_rank {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.add_rank .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.add_rank .content .title {
border-bottom: 1px solid #EEEEEE;
}

.add_rank .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
	letter-spacing: 0;
}

.add_rank .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.add_rank .content-inner {
	padding: 40px 0px;
}
.add_rank .conserve {
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
.add_rank .el-form-item {
    margin-bottom: 22px;
    float: left;
    width: 50%;
}
.add_rank .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.add_rank .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.add_rank .el-form-item__error {
    padding-left: 30px;
}
</style>