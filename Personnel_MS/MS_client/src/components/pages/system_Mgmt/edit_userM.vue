<template>
	<div class="user-info">
		<current yiji="系统管理" erji="用户管理" sanji="用户信息"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">用户信息</span>
				<div class="btn-wrap">
					<el-button type="primary" class="reset" @click="resetPass()">密码重置</el-button>
					<el-button type="primary" class="conserve" @click="conserve('userDetail')">保存</el-button>
				</div>
			</div>
			<div class="content-inner">
				<el-form :inline="true" :model="userDetail" :rules="rules" ref="userDetail" label-width="80px">
					<el-col :span="12">
						<el-form-item label="姓名" prop="userName">
							<el-input v-model="userDetail.userName" ref="user" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="工号" prop="userNo">
							<el-input v-model="userDetail.userNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<!--<el-col :span="12">
						<el-form-item label="所属公司">
							<el-select v-model="comp" value-key="compOrgNo" placeholder="所属公司" @change="changeValue" :disabled="true">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属部门" prop="departOrgNo">
							<el-select v-model="depart" value-key="departOrgNo" placeholder="所属部门" @change="changeValue" :disabled="true">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :span="12">
						<el-form-item label="所属公司">
							<el-input v-model="userDetail.compName" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属部门" prop="departOrgNo">
							<el-input v-model="userDetail.departName" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="角色" prop="roleNo">
							<el-select v-model="userDetail.roles" multiple value-key="roleNo" class="bg-white" @change="changeValue">
								<el-option v-for="(item,k) in roleList" :key="item.roleNo" :label="item.roleName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userDetail.status" class="bg-white">
								<el-option label="正常" value="1"></el-option>
								<el-option label="停用" value="0"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="手机" prop="mobile">
							<el-input v-model="userDetail.mobile" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="userDetail.email" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="身份证" prop="certNo">
							<el-input v-model="userDetail.certNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="userDetail.remark" class="bg-white"></el-input>
						</el-form-item>
					</el-col>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from '../../../common/Bus.js'
	import current from '../../common/current_position.vue'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			var checkUserName = (rule, value, callback) => {
				let  NAME_REG = /(^[\u4E00-\u9FA5]{2,7}$)|(^[a-zA-Z]{3,10}$)/;
		        if (!value) {
		          	callback(new Error('用户名不能为空'));
		        } else if (!NAME_REG.test(value)) {
		        		callback(new Error('用户名由2~7个汉字或3~10个字母组成'));
		        }else {
	              	callback();
	            }
	      	};
			return {
				oldStatus: 1,
				olduserDetail: {},
				//用户详细信息
				userDetail: {
					userName: '',
					userNo: '',
					compName: '',
					compOrgNo: '',
					departName: '',
					departOrgNo: '',
					roles: [{roleName: "",roleNo: ""}],
					status: '',
					mobile: '',
					email: '',
					certNo: '',
					remark: ''
				},
				comp: {
					compName: '',
					compOrgNo: ''	
				},
				depart: {
					departName: '',
					departOrgNo: ''
				},
				role: {
					roleName: '',
					roleNo: ''
				},
				//角色列表
				roleList: [
					{roleName: "",roleNo: ""},
					{roleName: "",roleNo: ""},
					{roleName: "",roleNo: ""},
					{roleName: "",roleNo: ""}
				],
				//部门列表
				departList: [
					{departName: "上海魔方分公司",departOrgNo: '01'},
					{departName: "魔方分公司深圳分公司",departOrgNo: 'p1'},
					{departName: "魔方分公司",departOrgNo: 'p0'}
				],
				//公司列表
				compList: [
					{compName: "上海魔方分公司",compOrgNo: '01'},
					{compName: "魔方分公司深圳分公司",compOrgNo: 'p1'},
					{compName: "魔方分公司",compOrgNo: 'p0'}
				],
				rules: {
					userName: [
//			            { required: true, message: '请输入姓名', trigger: 'blur' },
//			            { validator: checkUserName, trigger: 'blur' }
		          	],
					email: [
//						{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
//    					{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
					],
//					mobile: [
////						{ validator: checkMobile, trigger: 'blur'}
//					],
					remark: [
						{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
					]
				}
			}
		},
		components: {
			current
		},
		created(){
			const self = this;
			let user = self.$route.params.user;
			//查询用户详情
			self.queryUserDetail(user);
			//查询角色列表
			self.queryRoleList();
			
		},
		methods: {
		 	changeValue(value) {
		 		const self = this;
				self.userDetail.compName = self.comp.compName;
				self.userDetail.compOrgNo = self.comp.compOrgNo;
				self.userDetail.departName = self.depart.departName;
				self.userDetail.departOrgNo = self.depart.departOrgNo;
				self.userDetail.roleName = self.role.roleName;
				self.userDetail.roleNo = self.role.roleNo;
	       },
			//密码重置
			resetPass() {
				const self = this;
				self.$confirm('此操作将重置该用户登陆密码为身份证后6位，是否继续?', '提示', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning'
		      	}).then(() => {
		          	let params = {
		          		userNo: self.userDetail.userNo
		          	};
		      		//重置密码
		          	self.resetPassword(params);
		        }).catch(() => {
		          	self.$message({
		            	type: 'info',
		            	message: '已取消操作'
		          	});          
		        });
			},
			//保存
			conserve(formName) {
				const self = this;
				self.$refs[formName].validate((valid) => {
					if(valid) {
						let detailChange = false;
						let roles = self.userDetail.roles;
						let roleNoes = [];
						for(let k in roles) {
							roleNoes.push(roles[k].roleNo);
						}
						let params = {
							"roleNoes": roleNoes,
							"userNo": self.userDetail.userNo,
							status: self.userDetail.status,
							"remark": self.userDetail.remark
						}
						for(let k in self.userDetail){
							if(self.olduserDetail[k]!==self.userDetail[k]){
								detailChange = true;
							}
						}
						if(detailChange===true){//判断是否有修改信息
							//修改用户信息
							self.updateUserInfo(params);

						}else{
							self.$alert('你还未修改信息', '提示', {
					          	confirmButtonText: '确定'
				        	});
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			queryUserDetail(user) {
				const self = this;
				self.$axios.get(baseURL+'/user/queryUserDetail/'+user)
				.then(function(res){
					self.userDetail = res.data.data;
					self.oldStatus = self.userDetail.status;
					self.comp = {
		        		compOrgNo: res.data.data.compOrgNo,
		        		compName: res.data.data.compName
		        	}
					self.depart = {
						departName: res.data.data.departName,
						departOrgNo: res.data.data.departOrgNo
					}
					self.role = {
						roleName: res.data.data.roleName,
						roleNo: res.data.data.roleNo
					}
					for(var i in self.userDetail){
						self.olduserDetail[i] = self.userDetail[i];
					}
				})
				.catch(function(err){
					console.log(err)
				})
			},
			updateUserInfo(params) {
				const self = this;
				self.$axios.put(baseURL+'/user/updateUserInfo',params)
				.then(function(res){
					if(res.data.code=="S00000"){
			        	self.$message({ message: '操作成功', type: 'success' });
//			        	self.$router.push('/management_user');
					} else {
						console.log('error');
					}
				})
				.catch(function(err){
					console.log('error');
				})
			},
			queryRoleList() {
				let self = this;
				self.$axios.get(baseURL+'/role/queryRoleByUid')
				.then(function(res) {
					console.log('RoleList',res);
					self.roleList = res.data.data;
				}).catch(function(err) {
					console.log('error');
				})
			},
			resetPassword(params) {
				const self = this;
				self.$axios.put(baseURL+'/user/resetPassword', params)
	          	.then(function(res){
	          		console.log('resetPassword',res);
	          		if(res.data.code=="S00000") {
	          			self.$message({ message: '操作成功', type: 'success' });
	          		}
	          			
	          	}).catch(function(err){
	          		console.log('error');
	          	})
			}
		}
	}
</script>

<style>
	.user-info {
		padding-left: 20px;
	    padding-bottom: 20px;
		width: 100%;
		position: relative;
	}
	
	.user-info .back {
		position: absolute;
		right: 20px;
		top: 29px;
		width: 19px;
		height: 12px;
		cursor: pointer;
		background: url(../../../../static/img/common/back.png);
	}
	
	.user-info .content {
		width: 100%;
		/*min-height: 530px;*/
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.user-info .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.user-info .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 14px 0px;
		font-size: 16px;
		height: 50px;
	}
	
	.user-info .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.user-info .content .title .btn-wrap {
		float: right;
		margin-top: 10px;
	}
	
	.user-info .el-button {
		border-radius: 0px;
	    padding: 0;
	}
	
	.user-info .btn-wrap .reset {
		background: #FFFFFF;
		border: 1px solid #FF9900;
		font-size: 14px;
		color: #FF9900;
		margin-right: 20px;
		width: 120px;
		height: 30px;
	}
	
	.user-info .btn-wrap .conserve {
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 30px;
	}
	
	.user-info .content-inner {
		padding: 30px 0px;
	}
	
	.user-info form {
		font-size: 0px;
	}
	
	.user-info form>div {
		float: none;
		display: inline-block;
	}
	
	.user-info .el-input,
	.user-info .el-input__inner {
		width: 300px;
		display: inline-block;
	}
	
	.user-info .el-form-item__label {
		color: #999999;
	    margin-right: 18px;
	}
	
	.user-info .el-input__inner {
		border: 1px solid #eeeeee;
		color: #333333;
		background: #f4f4f4;
		height: 40px;
	}
	
	.user-info .bg-white .el-input__inner {
		background: #FFFFFF;
	}
	
	.user-info .el-select:hover .el-input__inner {
		border-color: #ff9900;
	}
	.user-info .el-input__inner:hover {
	    border-color: #ff9900;
	}
	.user-info .el-input.is-disabled .el-input__inner:hover {
	    border-color: #d1dbe5;
	}
	.el-select-dropdown__item.selected.hover {
	    background-color: #f4f4f4;
	}
	.el-select-dropdown__item.selected {
	    color: #333333;
	    background-color: #f4f4f4;
	}
</style>