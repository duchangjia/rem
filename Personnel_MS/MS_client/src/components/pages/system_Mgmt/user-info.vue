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
							<el-input v-model="userDetail.userName" ref="user"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="工号" prop="userNo">
							<el-input v-model="userDetail.userNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属公司" prop="compOrgNo">
							<el-select v-model="userDetail.compOrgNo" placeholder="所属公司">
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属部门" prop="departOrgNo">
							<el-select v-model="userDetail.departOrgNo" placeholder="所属部门">
								<el-option v-for="item in departList" :key="item.departOrgNo" :label="item.departName" :value="item.departOrgNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="角色" prop="roleName">
							<el-select v-model="userDetail.roleName" class="bg-white">
								<el-option v-for="(item,k) in roleList" :key="item.roleNo" :label="item.roleName" :value="item.roleNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userDetail.status" class="bg-white">
								<el-option label="正常" value="1" checked></el-option>
								<el-option label="停用" value="0"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="手机" prop="mobile">
							<el-input v-model="userDetail.mobile" :disabled="false"></el-input>
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
		  <!--<el-select v-model="value2" value-key  placeholder="请选择" @change="test()">
		    <el-option
		      v-for="item in options2"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value"
		      :disabled="item.disabled">
		    </el-option>
		  </el-select>-->
	</div>
</template>

<script>
	import Bus from '../../../common/Bus.js'
	import current from '../../common/current_position.vue'
	const baseURL = 'iem'
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
//	      	var checkMobile = (rule, value, callback) => {
//	      		let MOCILE_REG = /^[1][3578]\\d{9}$/;
//	      		if (!value) {
//	      			callback(new Error('手机号不能为空'));
//	      		} else if (!MOCILE_REG.test(value)) {
//	      			callback(new Error('请输入正确的手机号'))
//	      		}else {
//	              	callback();
//	            }
//	      	};
			return {
				oldStatus: 1,
				olduserDetail: {},
				//用户详细信息
				userDetail: {
					userName: 'aaaaa',
					userNo: '1',
					compName: '1',
					compOrgNo: 'p1',
					departName: '1',
					departOrgNo: 'p1',
					roleName: '1',
					status: '1',
					mobile: '13513513513',
					email: '123@123.com',
					certNo: '1',
					remark: '1'
				},
				//角色列表
				roleList: [
					{roleName: '行政经理',roleNo: '01'},
					{roleName: '财务经理',roleNo: '02'},
					{roleName: '行政文员',roleNo: '03'}
				],
				//部门列表
				departList: [
					{departName: '行政部',departOrgNo: 'p1'},
					{departName: '财务部',departOrgNo: 'p2'}
				],
				//公司列表
				compList: [
					{compName: '上海分公司',compOrgNo: 'p1'},
					{compName: '深圳分公司',compOrgNo: 'p2'},
					{compName: '广州分公司',compOrgNo: 'p3'}
				],
				rules: {
					userName: [
//			            { required: true, message: '请输入姓名', trigger: 'blur' },
			            { validator: checkUserName, trigger: 'blur' }
		          	],
					email: [
						{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
      					{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
					],
//					mobile: [
////						{ validator: checkMobile, trigger: 'blur'}
//					]
				},
//				 options2: [{
//		          value: '选项1',
//		          label: '黄金糕'
//		        }, {
//		          value: '选项2',
//		          label: '双皮奶',
//		          disabled: true
//		        }, {
//		          value: '选项3',
//		          label: '蚵仔煎'
//		        }, {
//		          value: '选项4',
//		          label: '龙须面'
//		        }, {
//		          value: '选项5',
//		          label: '北京烤鸭'
//		        }],
//		        value2: ''
			}
		},
		components: {
			current
		},
		created(){
			const self = this;
			let user = sessionStorage.getItem('user');
			let userMsg = JSON.parse(sessionStorage.getItem('userMsg'));
			if(userMsg){
//				console.log('userMsg',userMsg);
				self.userDetail = userMsg;
			}else {
//				console.log('user',user);
				self.$axios.get(baseURL+'/user/queryUserDetail/'+user)
				.then(function(res){
					console.log('UserDetail',res);
					self.userDetail = res.data.data;
					self.oldStatus = self.userDetail.status;
					for(var i in self.userDetail){
						self.olduserDetail[i] = self.userDetail[i];
					}
				})
				.catch(function(err){
					console.log(err)
				})
			}
			
		},
		methods: {
			test(){
				console.log(this.value2);
				console.log(this.value2);
			},
			//密码重置
			resetPass() {
				const self = this;
				self.$confirm('此操作后将无法找回原密码, 是否继续?', '提示', {
		          	confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning'
		      	}).then(() => {
		          	self.$axios.put(baseURL+'/resetPassword',{userNo: self.userDetail.userNo})
		          	.then(function(res){
		          		console.log('resetPassword',res);
		          		if (res.status===200){
		          			self.$message({
				            	type: 'success',
				            	message: '新密码已发送至邮箱，请查收!'
				          	});
		          		} else {
		          			self.$message.error('密码重置失败');
		          		}
		          	}).catch(function(err){
		          		self.$message.error('密码重置失败');
		          	})
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
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let detailChange = false;
						let params = {
							"organCompanyNo": self.userDetail.compOrgNo,
							"organDepartmentNo": self.userDetail.departOrgNo,
							"roleNo": self.userDetail.roleNo,
							"userNo": self.userDetail.userNo,
							"userName": self.userDetail.userName,
							"certNo": self.userDetail.certNo,
							"mobile": self.userDetail.mobile,
							"email": self.userDetail.email,
							"remark": self.userDetail.remark,
							"status": self.userDetail.status
						}
						for(let k in self.userDetail){
							if(self.olduserDetail[k]!==self.userDetail[k]){
								detailChange = true;
							}
						}
						if(detailChange===true){//判断是否有修改信息
							console.log('compName',self.userDetail.compName)
							console.log('compOrgNo',self.userDetail.compOrgNo)
							self.$axios.put(baseURL+'/user/updateUserInfo',params)
							.then(function(res){
								console.log('updateUserInfo',res);
								if(res.data.code=="S00000"){
									self.$alert('信息修改成功', '提示', {
							          	confirmButtonText: '确定'
						        	});
								} else {
									self.$message.error('信息修改失败');
								}
							})
							.catch(function(err){
								self.$message.error('信息修改失败');
							})
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
		padding: 29px 0px;
		font-size: 16px;
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
		margin-top: 20px;
	}
	
	.user-info .el-button {
		border-radius: 0px;
	}
	
	.user-info .btn-wrap .reset {
		background: #FFFFFF;
		border: 1px solid #FF9900;
		font-size: 14px;
		color: #FF9900;
		margin-right: 20px;
		width: 120px;
		height: 40px;
	}
	
	.user-info .btn-wrap .conserve {
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 40px;
	}
	
	.user-info .content-inner {
		padding: 40px 0px;
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
	.el-select-dropdown__item.selected.hover {
	    background-color: #f4f4f4;
	}
	.el-select-dropdown__item.selected {
	    color: #333333;
	    background-color: #f4f4f4;
	}
</style>