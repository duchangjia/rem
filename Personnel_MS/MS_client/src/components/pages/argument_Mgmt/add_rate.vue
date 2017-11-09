<template>
	<div class="add_rateGroup">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="个人所得税税率详情" wuji="税率新增"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">税率新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata" :rules="rules" :model="formdata" label-width="80px">
					<el-form-item label="组名称" prop="groupName">
					    <el-input v-model="formdata.groupName" :disabled="true"></el-input>
				  	</el-form-item>
				  	<el-form-item label="下限" prop="groupLowerLimit">
					    <el-input v-model="formdata.groupLowerLimit"></el-input>
				  	</el-form-item>
					<el-form-item label="上限" prop="groupLimit">
					    <el-input v-model="formdata.groupLimit"></el-input>
				  	</el-form-item>
				  	<el-form-item label="百分率" prop="percentRate">
					    <el-input v-model="formdata.percentRate"></el-input>
					    <span class="percent_icon">%</span>
				  	</el-form-item>
				  	<el-form-item label="速算扣除数" prop="quickCal">
					    <el-input v-model="formdata.quickCal"></el-input>
				  	</el-form-item>
				  	<el-form-item label="备注" prop="remark">
					    <el-input v-model="formdata.remark"></el-input>
				  	</el-form-item>
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
	        } else if (!(/^[0-9]*$/.test(value))) {
	          	callback(new Error('请输入数字'));
	        }else if (Number(value) <= Number(this.formdata.groupLowerLimit)) {
	          	callback(new Error('上限值必须大于下限值!'));
	        } else {
	          	callback();
	        }
      	};
      	var checkgroupLowerLimit = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('下限不能为空'));
	        } else if (!(/^[0-9]*$/.test(value))) {
	          	callback(new Error('请输入数字'));
	        } else {
	          	callback();
	        }
      	};
      	var checkpercentRate = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('百分率不能为空'));
	        } else if (!(/^[0-9]*$/.test(value))) {
	          	callback(new Error('请输入数字'));
	        } else {
	          	callback();
	        }
      	};
      	var checkquickCal = (rule, value, callback) => {
	        if (value === '') {
	          	callback(new Error('速算扣除数不能为空'));
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
					{ required: true, validator: checkgroupLowerLimit, trigger: 'blur' }
				],
				percentRate: [
					{ required: true, validator: checkpercentRate, trigger: 'blur' }
				],
				quickCal: [
					{ required: true, validator: checkquickCal, trigger: 'blur' }
				]
			}
		}
	},
	components: {
		current
	},
	created() {
		this.formdata.groupName = sessionStorage.getItem('groupName');
		this.formdata.groupId = sessionStorage.getItem('groupId');
	},
	methods: {
		save(formName) {
		 	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		const self = this;
	          		let params = {
	          			groupId: self.formdata.groupId,
	          			remark: "xxxx",
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
  				self.formdata.applyNo = res.data.data;
  				this.$message({ message: '操作成功', type: 'success' });
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
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
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
	padding: 30px 0px;
}
.add_rateGroup .conserve {
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
.add_rateGroup .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
    margin-left: 30px;
}
.add_rateGroup .el-date-editor.el-input {
    width: 300px;
    margin-left: 30px;
}
.add_rateGroup .el-date-editor.el-input .el-input__inner {
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
.add_rateGroup .el-input__inner:hover {
    border-color: #FF9900;
}
.add_rateGroup .el-input.is-disabled .el-input__inner:hover {
    border-color: #d1dbe5;
}
.add_rateGroup .el-form-item__error {
    padding-left: 30px;
}
.add_rateGroup .percent_icon {
    position: absolute;
    top: 0px;
    left: 340px;
}
</style>