<template>
	<div class="workotC_wrap">
		<current yiji="考勤管理" erji="加班管理" sanji="加班新增">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">加班新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata2.organNo" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
					    <el-select v-model="formdata2.deptNo" value-key="departOrgNo" @change="changeValue">
							<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">  	
					<el-form-item label="工号">
					    <el-input v-model="formdata1.userNo"></el-input>
					    <el-button class="queryUserBtn" type="primary" @click="queryUserInfo">查询</el-button>
				 	</el-form-item>
				  	<el-form-item label="姓名">
					    <el-input v-model="formdata1.custName"></el-input>
				  	</el-form-item>
				  	<el-form-item label="岗位">
					    <el-input v-model="formdata1.custPost"></el-input>
				  	</el-form-item>
				  	<el-form-item label="职级">
					    <el-input v-model="formdata1.custClass"></el-input>
				  	</el-form-item>
				</el-form>

				  	<div class="info-title">加班信息</div>
				  	<el-form-item label="加班开始时间" prop="workotStartTime">
			        	<el-date-picker type="datetime" v-model="formdata2.workotStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="加班结束时间" prop="workotEndTime">
			        	<el-date-picker type="datetime" v-model="formdata2.workotEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="加班类型" prop="workotType">
					    <el-select v-model="formdata2.workotType" value-key="workotType" @change="changeValue">
							<el-option v-for="item in workotTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="加班累计工时">
					    <el-input v-model="formdata2.timeSheet"></el-input>
				  	</el-form-item>
				  	<el-form-item class="remark" label="加班备注" prop="remark">
					    <el-input
						  type="textarea"
						  :autosize="{ minRows: 5, maxRows: 5}"
						  placeholder="请输入内容"
						  v-model="formdata2.remark">
						</el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" :on-change="changefile" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
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
				formdata1: {
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
				},
				formdata2: {
					organNo: "01",
					deptNo: "",
					workotStartTime: "",
					workotEndTime: "",
					workotType: "",
					timeSheet: "",
					remark: "",
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
				workotTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
			 	rules: {
		          	workotType: [
		            	{ required: true, message: '加班类型不能为空', trigger: 'blur' }
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
			changefile(file, fileList) {
				console.log(file);
				this.formdata2.attachm = file.name;
			},
			changeStartTime(time) {
				this.formdata2.workotStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.workotEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	queryUserInfo() {
	      		let userNo = this.formdata1.userNo;
	      		let params = {
	      			userNo: userNo
	      		}
	      		//根据员工编号查询员工信息
	      		this.getUseInfoByUserNo(params);
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						let params = {
							
						}
						//新增加班信息
						self.addLeaveInfo(params);
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			getUseInfoByUserNo(params) {
				let self = this;
				self.$axios.get(baseURL+'/workot/getUseInfoByUserNo/',{params: params})
				.then(function(res) {
					console.log('getUseInfoByUserNo',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			addLeaveInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/workot/addWorkOtInfo',params)
				.then(function(res) {
					console.log('addLeaveInfo',res);
					
				}).catch(function(err) {
					console.log('error');
				})
			}
		}
	};
</script>

<style scoped>

.queryUserBtn {
    position: absolute;
    right: 0;
    top: 0;
    height: 40px;
}
</style>