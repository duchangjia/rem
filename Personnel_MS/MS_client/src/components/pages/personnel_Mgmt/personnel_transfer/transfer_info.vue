<template>
	<div class="transfer_info">
		<current yiji="人事事务" erji="人事调动" sanji="人事调动明细查询" siji="人事调动详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">人事调动详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true" :model="formdata" label-width="122px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata.oldOrganName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
							<el-input v-model="formdata.oldDerpName" :disabled="true"></el-input>
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
					<el-col :span="24" class="item-title">调动信息</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动类型">
						    <el-select v-model="formdata.shiftType" value-key="shiftType" @change="changeValue" :disabled="true">
								<el-option v-for="item in shiftTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="调动生效时间">
						    <el-input v-model="formdata.shiftCameTime" style="width:100%;" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原公司名称">
							<el-input v-model="formdata.oldOrganName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新公司名称">
							<el-input v-model="formdata.newOrganName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原部门名称">
							<el-input v-model="formdata.oldDerpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新部门名称">
							<el-input v-model="formdata.newDerpName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原直线经理">
						    <el-input v-model="formdata.oldLineManager" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新直线经理">
						    <el-input v-model="formdata.newLineManager" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原岗位">
						    <el-select v-model="formdata.oldPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新岗位">
						    <el-select v-model="formdata.newPost" :disabled="true">
								<el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="原职级">
						    <el-select v-model="formdata.oldClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="新职级">
						    <el-select v-model="formdata.newClass" :disabled="true">
								<el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  
				</el-form>
				<el-form :model="formdata" ref="formdata" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
					<el-col :span="24">
						<el-form-item label="调动原因">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.shiftReason" :disabled="true">
							</el-input>
					  	</el-form-item>
					</el-col>         
				</el-form>	
				<el-form ref="formdata" :inline="true" :model="formdata" label-width="122px" style="margin-top:0;overflow:visible;">	 	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" >
						    <ul>
								<li v-for="item in fileList" :key="item.fileId">
									<span class="fileText">{{item.name}}</span>
									<el-button class="downBtn" @click="handleDownloadFile(item)">下载</el-button>
								</li>
							</ul>
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
	const baseURL = 'iem_hrm';
	export default {
		data() {
			return {
      			labelPosition: "right",
				fileList: [],
				//员工信息
				formdata: {},
				//部门列表
				departList: [],
				//公司列表
				compList: [],
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//调动类型列表
				shiftTypeList: [],
			};
		},
		components: {
			current
		},
		created() {
			
			//人事调动详情查询
			this.queryCustShifthisInfo();
			//查询公司列表
			this.queryCompList();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询调动类型列表
			this.queryShiftTypeList();
		},
		methods: {
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
			  },
			  //下载附件
	      	handleDownloadFile(file) {
				console.log(file);
				let params = {
					name: file.name,
					fileId: file.fileId
				}
				this.downloadFile(params);
			},
			queryCustShifthisInfo() {
				let self = this;
				let userNo = sessionStorage.getItem('infoTransfer_userNo');
				let workhisId = sessionStorage.getItem('infoTransfer_workhisId');
				let params = {
					userNo: userNo,
					workhisId: workhisId
				}
				self.$axios.get(baseURL+'/custShifthis/queryCustShifthisDetail', {params: params})
				.then((res) => {
					console.log('CustShifthisDetail',res);
					self.formdata = res.data.data;
					self.formdata.shiftCameTime = moment(self.formdata.shiftCameTime).format('YYYY-MM-DD hh:mm:ss');
					if (
						self.formdata.epFileManageList &&
						self.formdata.epFileManageList.length >= 1
					) {
						self.formdata.epFileManageList.forEach(function(ele) {
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
			queryShiftTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=SHIFT_TYPE')
				.then((res) => {
					console.log('shiftTypeList',res);
					if(res.data.code === "S00000") {
						self.shiftTypeList = res.data.data;
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.transfer_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.transfer_info .fileText {
	color: #999999;
	font-size: 14px;
	padding-right: 20px;
}
.transfer_info .downBtn {
	color: #ffffff;
	background: #ff9900;
}
.transfer_info .el-button.downBtn:focus, .el-button.downBtn:hover {
    color: #ffffff;
    border-color: #ff9900;
}
</style>