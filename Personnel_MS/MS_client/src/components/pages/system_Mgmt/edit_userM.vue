<template>
	<div class="user-info">
		<current yiji="系统管理" erji="用户管理" sanji="用户信息"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">用户信息</span>
				<el-button type="primary" class="toolBtn" @click="conserve('userDetail')">保存</el-button>
				<el-button type="primary" class="resetBtn" @click="resetPass()">密码重置</el-button>
			</div>
			<div class="add-wrapper">
				<el-form :inline="true" :model="userDetail" :rules="rules" ref="userDetail" label-width="80px">
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名" prop="userName">
							<el-input v-model="userDetail.userName" ref="user" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="工号" prop="userNo">
							<el-input v-model="userDetail.userNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<!--<el-col :sm="24" :md="12">
						<el-form-item label="所属公司">
							<el-select v-model="comp" value-key="compOrgNo" placeholder="所属公司" @change="changeValue" :disabled="true">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="所属部门" prop="departOrgNo">
							<el-select v-model="depart" value-key="departOrgNo" placeholder="所属部门" @change="changeValue" :disabled="true">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>-->
					<el-col :sm="24" :md="12">
						<el-form-item label="所属公司">
							<el-input v-model="userDetail.compName" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="所属部门" prop="departOrgNo">
							<el-input v-model="userDetail.departName" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col  :sm="24" :md="12">
						<el-form-item label="角色" prop="roleNo">
							<el-select v-model="userDetail.roles" multiple value-key="roleNo" class="bg-white" @change="changeValue">
								<el-option v-for="(item,k) in roleList" :key="item.roleNo" :label="item.roleName" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userDetail.status" class="bg-white">
								<el-option label="正常" value="1"></el-option>
								<el-option label="停用" value="0"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="手机" prop="mobile">
							<el-input v-model="userDetail.mobile" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="userDetail.email" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证" prop="certNo">
							<el-input v-model="userDetail.certNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
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
				roleList: [],
				//部门列表
				departList: [],
				//公司列表
				compList: [],
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
		          	self.$message({ type: 'info', message: '已取消操作' });          
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
			        	self.$router.push('/management_user');
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
.content-wrapper {
  background: #ffffff;
  padding: 0 20px 20px;
  color: #333333;
  clear: both;
}

.content-wrapper .titlebar {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .titlebar .title-text {
  display: inline-block;
  height: 50px;
  position: relative;
}

.content-wrapper .titlebar .title-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #333333;
}

.content-wrapper .toolBtn {
  float: right;
  margin-top: 10px;
  height: 30px;
  width: 120px;
  background: #ff9900;
  border: none;
  padding: 0;
}

.content-wrapper .button-wrap {
  margin: 15px auto 30px;
  font-size: 0px;
  text-align: center;
}

.content-wrapper .resetBtn {
  color: #ff9900;
  height: 30px;
  width: 120px;
  padding: 0;
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  background: #FFFFFF;
  border: 1px solid #ff9900;
}

.content-wrapper .queryBtn {
  /* border-radius: 0; */
  height: 30px;
  width: 120px;
  padding: 0;
  background: #ff9900;
  border: none;
}

.pact_mgmt .el-button {
  padding: 0;
}

.el-input__inner {
  height: 40px;
  /*width: 180px;*/
}

.add-wrapper .el-input__inner {
  width: 300px;
}

.el-input__inner:focus,
.el-textarea__inner:focus,
.el-select .el-input__inner:focus {
  border-color: #ff9900;
}

.el-input-group--append .el-input__inner {
  width: 253px;
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
  background-color: #ff9900;
}

label {
  font-weight: 400;
  margin-bottom: 0;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-form-item__label {
  font-family: "PingFangSC Regular";
  color: #999999;
  padding: 13px 12px 13px 0;
}

.el-table th > .cell {
  padding: 0 15px;
}

.el-button--small {
  margin: 4px;
}

.el-button,
.el-button + .el-button {
  margin-left: 0;
}

.add-wrapper {
  overflow: hidden;
}
.add-wrapper form {
  font-size: 0;
  margin-top: 30px;
}

.add-wrapper .item-title {
  font-size: 14px;
  height: 56px;
  line-height: 56px;
  padding-left: 8px;
}

.add-wrapper .el-form-item__label {
  margin-right: 14px;
}

.querybar .el-form--inline .el-form-item {
  margin-right: 0;
}

.querybar .el-form-item__label {
  padding: 10px 8px 10px 0;
}
.querybar .el-input__inner {
  width: 164px;
  height: 30px;
  border-radius: 4px;
}
.querybar .el-form-item {
  margin-bottom: 15px;
}

.add-wrapper .upload-demo {
  height: 0;
}

.add-wrapper .el-upload__input {
  display: none;
}


.add-wrapper .el-textarea__inner {
  min-width: 790px;
  min-height: 100px;
}


</style>