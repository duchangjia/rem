<template>
	<div class="dimission_info">
		<current yiji="人事事务" erji="人事调动" sanji="员工离职明细查询" siji="员工离职详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">员工离职详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :model="formdata" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata.organName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
							<el-input v-model="formdata.derpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata.userNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata.custName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata.certNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-select v-model="formdata.custPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-select v-model="formdata.custClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata.lineManagerName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">离职信息</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间">
						    <el-date-picker type="date" v-model="formdata.dimTime" @change="changeDimTime" style="width: 100%;" :disabled="true"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型">
						    <el-select v-model="formdata.dimType" :disabled="true">
								<el-option v-for="item in dimTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="去向">
						    <el-input v-model="formdata.hasGone" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资截止日">
						    <el-date-picker type="date" v-model="formdata.payEndTime" @change="changePayEndTime" style="width: 100%;" :disabled="true"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="离职原因" style="width:100%;">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.dimReason" :disabled="true">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新人">
						    <el-input v-model="formdata.updatedBy" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新时间">
						    <el-date-picker type="datetime" v-model="formdata.updatedDate" style="width: 100%;" :disabled="true"></el-date-picker>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width:100%;">
						    <!-- <el-button class="downloadBtn" @click="handleDownload">下载</el-button> -->
							<ul>
								<li v-for="item in fileList" :key="item.fileId">
									<span class="fileText">{{item.name}}</span>
									<el-button class="downBtn" @click="handleDownloadFile(item)">下载</el-button>
								</li>
							</ul>
					  		<el-checkbox v-model="formdata.dimProveFlag" :disabled="true">是否需要出具离职证明</el-checkbox>
					  	</el-form-item>
					</el-col>  	
					  	
					  	
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	import moment from 'moment'
	const baseURL = 'iem_hrm'
	export default {
		data() {
			return {
				fileList: [],
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//离职类型列表
				dimTypeList: [],
			};
		},
		components: {
			current
		},
		created() {
			
			//人事离职详情查询
			this.queryCustDimhisDetail(); 
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询离职类型列表
			this.querydimTypeList();
		},
		methods: {
			changeDimTime(time) {
				this.formdata.dimTime = time;
			},
			changePayEndTime(time) {
				this.formdata.payEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	handleDownloadFile(file) {
				console.log(file);
				let params = {
					name: file.name,
					fileId: file.fileId
				}
				this.downloadFile(params);
			},
	      	queryCustDimhisDetail() {
				let self = this;
				let userNo = sessionStorage.getItem('infoDimission_userNo');
				let dimId = sessionStorage.getItem('infoDimission_dimId');
				let params = {
					userNo: userNo,
					dimId: dimId
				}
				self.$axios.get(baseURL+'/custDimhis/queryCustDimhisDetail', {params: params})
				.then((res) => {
					console.log('dimDetail',res);
					self.formdata = res.data.data;
					self.formdata.dimProveFlag = self.formdata.dimProveFlag=='01' ? true: false;
					if (
						self.formdata2.epFileManageList &&
						self.formdata2.epFileManageList.length >= 1
					) {
						self.formdata2.epFileManageList.forEach(function(ele) {
						self.fileList.push({
							name: ele.fileName + "." + ele.fileSuffix,
							url: ele.fileAddr,
							fileId: ele.fileId
						});
						}, this);
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
				.then((res) => {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectChildDeparment', {params: params})
				.then((res) => {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.departList = res.data.data;
					}
					
				}).catch((err) => {
					console.log(err);
				})
			},
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/file/downloadFile/'+params.fileId, {
				responseType: 'blob' 
				})
				.then((response) => {
					const fileName = params.name;
					const blob = response.data;

					if (window.navigator && window.navigator.msSaveOrOpenBlob) {

						 window.navigator.msSaveOrOpenBlob(blob, fileName);
					} else {

						let elink = document.createElement('a'); // 创建a标签
						elink.download = fileName;
						elink.style.display = 'none';
						elink.href = URL.createObjectURL(blob);
						document.body.appendChild(elink);
						elink.click(); // 触发点击a标签事件
						document.body.removeChild(elink);
					}
				}).catch((e) => {
					console.error(e)
					this.$message({ message: '下载附件失败', type: 'error' });
				})
			},
			queryCustPostList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res) => {
					console.log('CustPost',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCustClassList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.custClassList = res.data.data;
					}
				}).catch((err) => {
					console.log('error');
				})
			},
			querydimTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=DIM_TYPE')
				.then((res) => {
					console.log('dimType',res);
					if(res.data.code === "S00000") {
						self.dimTypeList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.dimission_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.dimission_info .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
}
.dimission_info .el-checkbox__inner:hover {
    border-color: #20a0ff;
}
.dimission_info .fileText {
	color: #999999;
	font-size: 14px;
	padding-right: 20px;
}
.dimission_info .downBtn {
	color: #ffffff;
	background: #ff9900;
}
.dimission_info .el-button.downBtn:focus, .el-button.downBtn:hover {
    color: #ffffff;
    border-color: #ff9900;
}
</style>