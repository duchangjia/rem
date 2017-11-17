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
						<el-form-item label="系统编号" prop="sysNo">
							<el-input v-model="userMsg.sysNo" :disabled="true"></el-input>
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
			let bsnNo = this.$route.params.bsnNo;
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
				.then(function(res){
					console.log('UserInfo',res);
					if(res.data.code=="S00000"){
						self.userMsg = res.data.data;
						self.userMsg.createdDate = moment(self.userMsg.createdDate).format('YYYY-MM-DD hh:mm:ss');
						self.userMsg.updatedDate = moment(self.userMsg.updatedDate).format('YYYY-MM-DD hh:mm:ss');
					} else {
						console.log('error');
					}
				})
				.catch(function(err){
					console.log('error');
					
				})
			},
			updateUserInfo(params) {
				const self = this;
				self.$axios.put(baseURL+'/function/modifyFuncInfo',params)
				.then(function(res){
					console.log('update',res);
					if(res.data.code=="S00000"){
						self.$message({ message: '操作成功', type: 'success' });
			        	self.$router.push('/management_fun');
					} else {
						console.log('error')
					}
				})
				.catch(function(err){
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

	
	/*.edit_fun .back {
		position: absolute;
		right: 20px;
		top: 29px;
		width: 19px;
		height: 12px;
		cursor: pointer;
		background: url(../../../../static/img/common/back.png);
	}
	
	.edit_fun .content {
		padding: 0px 20px;
		background: #ffffff;
		clear: both;
	}
	
	.edit_fun .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.edit_fun .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 14px 0px;
		font-size: 16px;
		height: 50px;
	}
	
	.edit_fun .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.edit_fun .content .title .btn-wrap {
		float: right;
		margin-top: 10px;
	}
	
	.edit_fun .el-button {
		border-radius: 0px;
		padding: 0;
	}
	
	.edit_fun .btn-wrap .reset {
		background: #FFFFFF;
		border: 1px solid #FF9900;
		font-size: 14px;
		color: #FF9900;
		margin-right: 20px;
		width: 120px;
		height: 30px;
	}
	
	.edit_fun .btn-wrap .conserve {
		background: #F4F4F4;
		border: 1px solid #F4F4F4;
		font-size: 14px;
		color: #333333;
		width: 120px;
		height: 30px;
	}
	
	.edit_fun .el-button:focus,
	.edit_fun .el-button:hover {
	}
	
	.edit_fun .content-inner {
		padding: 30px 0px;
	}
	
	.edit_fun form {
		font-size: 0px;
	}
	
	.edit_fun form>div {
		float: none;
		display: inline-block;
	}
	
	.edit_fun .el-input,
	.edit_fun .el-input__inner {
		width: 300px;
		display: inline-block;
	}
	
	.edit_fun .el-form-item__label {
		color: #999999;
	    margin-right: 18px;
	}
	
	.edit_fun .el-input__inner {
		border: 1px solid #eeeeee;
		color: #333333;
		height: 40px;
	}
	
	.edit_fun .bg-white .el-input__inner {
		background: #FFFFFF;
	}
	
	.edit_fun .el-select:hover .el-input__inner {
		border-color: #ff9900;
	}
	
	.edit_fun .el-input__inner:hover {
		border-color: #ff9900;
	}
	.el-select-dropdown__item.selected.hover {
	    background-color: #f4f4f4;
	}
	.el-select-dropdown__item.selected {
	    color: #333333;
	    background-color: #f4f4f4;
	}*/
</style>