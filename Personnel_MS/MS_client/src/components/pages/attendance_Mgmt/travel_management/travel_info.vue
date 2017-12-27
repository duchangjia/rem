<template>
	<div class="travel_info">
		<current yiji="考勤管理" erji="出差管理" sanji="出差详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">出差详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true"  :rules="rules" :model="formdata" label-width="100px">
					
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
						<el-form-item label="公司名称">
							<el-input v-model="formdata.companyName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata.deptName" :disabled="true"></el-input>
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
					<el-col :span="24" class="item-title">出差信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差开始时间" prop="travelStartTime">
				        	<el-date-picker type="datetime" v-model="formdata.travelStartTime" @change="changeStartTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差结束时间" prop="travelEndTime">
				        	<el-date-picker type="datetime" v-model="formdata.travelEndTime" @change="changeEndTime" style="width:100%;" :disabled="true"></el-date-picker>
				      	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差类型" prop="travelType">
						    <el-select v-model="formdata.travelType" :disabled="true">
								<el-option v-for="item in travelTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item class="travelCity_wrap" label="出差城市" prop="travelStartCity">
						    <el-input class="travelCity" v-model="formdata.travelStartCity" placeholder="出发城市" :disabled="true"></el-input>
					  	</el-form-item>
					  	<span class="travelCity_line" >-</span>
					  	<el-form-item class="travelCity_wrap2" prop="travelArrivalCity">
						    <el-input class="travelCity" v-model="formdata.travelArrivalCity" placeholder="到达城市" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差天数">
						    <el-input v-model="formdata.travelDays" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="差补标准">
						    <el-input v-model="formdata.travelSTD" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>  	
				  	<el-col :span="24">
				  		<el-form-item class="remark" label="出差备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.remark" :disabled="true">
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
						    <el-input v-model="formdata.updatedDate" :disabled="true"></el-input>
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
				fileList: [],
				custPostName: '',
				custClass: '',
				formdata: {},
				//岗位列表
				custPostList: [],
				//职级列表
				custClassList: [],
				//出差类型列表
				travelTypeList: [],
			 	rules: {}
			}
		},
		components: {
			current
		},
		created() {
			
			//查询出差详情
			this.queryTravelInfo();
			//查询岗位列表
			this.queryCustPostList();
			//查询职级列表
			this.queryCustClassList();
			//查询出差类型列表
			this.queryTravelTypeList();
		},
		methods: {
			changeStartTime(time) {
//				this.formdata.travelStartTime = time;
			},
			changeEndTime(time) {
//				this.formdata.travelEndTime = time;
			},
	      	handleDownloadFile(file) {
				console.log(file);
				let params = {
					name: file.name,
					fileId: file.fileId
				}
				this.downloadFile(params);
			},
			queryTravelInfo() {
				const self = this;
				let applyNo = sessionStorage.getItem('InfoTravel_applyNo');
				let params = {
					applyNo: applyNo
				}
				self.$axios.get(baseURL+'/travel/getTravelInfoByApplyNo',{params: params})
				.then((res) => {
					console.log('travelInfo',res);
					if(res.data.code === "S00000") {
						self.formdata = res.data.data;
						// self.formdata.travelDays = self.formdata2.travelDays + '';
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
					}

				}).catch((err) => {
					console.log('error');
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
			queryTravelTypeList() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=TRAVEL_TYPE')
				.then((res) => {
					console.log('CustClass',res);
					if(res.data.code === "S00000") {
						self.travelTypeList = res.data.data;
					}
				}).catch((err) => {
					console.log('error');
				})
			}
		}
	};
</script>

<style>
.travel_info {
	padding: 0 0 20px 20px;
}
.travel_info .travelCity_wrap2{
	padding-left: 0;
}
.travel_info .travelCity_line {
    width: 10px;
    height: 1px;
    display: inline-block;
    background: #8391a5;
    margin: 17px 5px;
}
.travel_info .travelCity_wrap .el-form-item__content,
.travel_info .travelCity_wrap2 .el-form-item__content,
.travel_info .travelCity_wrap .el-input__inner,
.travel_info .travelCity_wrap2 .el-input__inner {
	width: 130px!important;
}
.travel_info .travelCity_wrap2 .el-form-item__content {
	margin-left: 10px;
}
.travel_info .fileText {
	color: #999999;
	font-size: 14px;
	padding-right: 20px;
}
.travel_info .downBtn {
	color: #ffffff;
	background: #ff9900;
}
.travel_info .el-button.downBtn:focus, .el-button.downBtn:hover {
    color: #ffffff;
    border-color: #ff9900;
}
</style>