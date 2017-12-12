<template>
	<div class="edit_fun">
		<current yiji="系统管理" erji="功能管理" sanji="功能编辑"></current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">功能编辑</span>
				<el-button type="primary" class="toolBtn" @click="conserve('userMsg')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form :inline="true" :model="userMsg" ref="userMsg" label-width="80px">
					<el-col :sm="24" :md="12">
						<el-form-item label="系统名称" prop="sysNo">
							<el-input v-model="userMsg.paraShowmsg" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="功能编号" prop="bsnNo">
							<el-input v-model="userMsg.bsnNo" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="功能名称" prop="methodName">
							<el-input v-model="userMsg.methodName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="接口方法" prop="interfaceName">
							<el-input v-model="userMsg.interfaceName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="服务URL" prop="bsnUrl">
							<el-input v-model="userMsg.bsnUrl"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="状态" prop="status">
							<el-select v-model="userMsg.status" class="bg-white">
								<el-option label="停用" value="0"></el-option>
								<el-option label="正常" value="1"></el-option>
								<el-option label="锁定" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="创建人" prop="createdBy">
							<el-input v-model="userMsg.createdBy" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="创建时间" prop="createdDate">
							<el-input v-model="userMsg.createdDate" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="更新人" prop="updatedBy">
							<el-input v-model="userMsg.updatedBy" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="更新时间" prop="updatedDate">
							<el-input v-model="userMsg.updatedDate" :disabled="true"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="userMsg.remark"></el-input>
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
			return {
				userMsg: {
					sysNo: '',
					bsnNo: '',
					methodName: '',
					bsnUrl: '',
					interfaceName: '',
					status: '',
					remark: '',
					createdDate: "",
					createdBy: '',
					updatedBy: '',
					updatedDate: ''
					
					
					
				}
			}
		},
		components: {
			current
		},
		created() {
			let bsnNo = sessionStorage.getItem('editFun_bsnNo');
			let params = {
				bsnNo: bsnNo
			}
			this.getUserInfo(params);
		},
		methods: {
			//保存
			conserve(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let params = {
							bsnNo: this.userMsg.bsnNo,
							methodName: this.userMsg.methodName,
							bsnUrl: this.userMsg.bsnUrl,
							interfaceName: this.userMsg.interfaceName,
							status: this.userMsg.status,
							remark: this.userMsg.remark
						}
						this.updateUserInfo(params);
					} else {
						return false;
					}
				});
			},
			getUserInfo(params) {
				const self = this;
				self.$axios.get(baseURL+'/function/queryFuncInfo',{params: params})
				.then((res) => {
					console.log('UserInfo',res);
					if(res.data.code=="S00000"){
						self.userMsg = res.data.data;
						self.userMsg.createdDate = moment(self.userMsg.createdDate).format('YYYY-MM-DD hh:mm:ss');
						self.userMsg.updatedDate = moment(self.userMsg.updatedDate).format('YYYY-MM-DD hh:mm:ss');
					} else {
						console.log('error');
					}
				})
				.catch((err) => {
					console.log('error');
					
				})
			},
			updateUserInfo(params) {
				const self = this;
				self.$axios.put(baseURL+'/function/modifyFuncInfo',params)
				.then((res) => {
					console.log('update',res);
					if(res.data.code=="S00000"){
						self.$message({ message: '操作成功', type: 'success' });
			        	self.$router.push('/management_fun');
					} else {
						console.log('error')
					}
				})
				.catch((err) => {
					console.log('error')
				})
			},
		}
	}
</script>

<style>
.edit_fun {
	padding-left: 20px;
	width: 100%;
	position: relative;
}

</style>