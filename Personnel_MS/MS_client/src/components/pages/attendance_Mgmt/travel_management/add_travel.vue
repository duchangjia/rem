<template>
	<div class="content_wrap">
		<current yiji="考勤管理" erji="出差管理" sanji="出差新增">
		</current>
		<div class="content">
			<div class="title">
				<span class="title-text">出差新增</span>
				<el-button type="primary" class="conserve" @click="save('formdata2')">保存</el-button>
			</div>
			<div class="content-inner">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="100px">
					<el-form-item label="公司名称">
					    <el-select v-model="formdata2.orgId" value-key="compOrgNo" @change="changeValue">
							<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
						</el-select>
				  	</el-form-item>
					<el-form-item label="申请部门名称">
					    <el-select v-model="formdata2.deprtId" value-key="departOrgNo" @change="changeValue">
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

				  	<div class="info-title">出差信息</div>
				  	<el-form-item label="出差开始时间" prop="travelStartTime">
			        	<el-date-picker type="date" v-model="formdata2.travelStartTime" @change="changeStartTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差结束时间" prop="travelEndTime">
			        	<el-date-picker type="date" v-model="formdata2.travelEndTime" @change="changeEndTime"></el-date-picker>
			      	</el-form-item>
				  	<el-form-item label="出差类型" prop="travelType">
					    <el-select v-model="formdata2.travelType" value-key="travelType" @change="changeValue">
							<el-option v-for="item in travelTypeList" :key="item" :label="item" :value="item"></el-option>
						</el-select>
				  	</el-form-item>
				  	<el-form-item label="出差城市">
					    <el-input class="travelCity" v-model="formdata2.travelStartCity" placeholder="出发城市"></el-input>
					    <span class="travelCity_line" >-</span>
					    <el-input class="travelCity" v-model="formdata2.travelArrivalCity" placeholder="到达城市"></el-input>
				  	</el-form-item>
				  	<el-form-item label="出差天数">
					    <el-input v-model="formdata2.travelDays"></el-input>
				  	</el-form-item>
				  	<el-form-item label="差补标准">
					    <el-input v-model="formdata2.travelSTD"></el-input>
				  	</el-form-item>
				  	<el-form-item class="remark" label="出差备注" prop="remark">
					    <el-input
						  type="textarea"
						  :autosize="{ minRows: 5, maxRows: 5}"
						  placeholder="请输入内容"
						  v-model="formdata2.remark">
						</el-input>
				  	</el-form-item>
				  	<el-form-item label="附件" style="width: 100%;">
			  		 	<el-input v-model="formdata2.attachm"></el-input>
				  		<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
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
					orgId: "01",
					deprtId: "",
					travelStartTime: "",
					travelEndTime: "",
					travelType: "",
					travelStartCity: "",
					travelArrivalCity: "",
					travelDays: "",
					travelSTD: "",
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
				travelTypeList: ['业务拓展','项目实施','会议','其他'],
			 	rules: {
		          	travelType: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
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
			changeStartTime(time) {
				this.formdata2.travelStartTime = time;
			},
			changeEndTime(time) {
				this.formdata2.travelEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	queryUserInfo() {
	      		this.formdata1.userNo;
	      		
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('valid');
						let params = {
							
						}
						self.addTravelInfo(params);
						
					} else {
						this.$message.error('failvalid');
						return false;
					}
				});
			},
			addTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/travel/addTravelInfo',params)
				.then(function(res) {
					console.log('addTravelInfo',res);
					
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