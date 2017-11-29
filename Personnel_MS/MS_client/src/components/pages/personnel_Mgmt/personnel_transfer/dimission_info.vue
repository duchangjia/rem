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
						    <el-select v-model="formdata.organNo" value-key="organNo" @change="changeValue">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="部门名称">
						    <el-select v-model="formdata.derpNo" value-key="derpNo">
								<el-option v-for="item in departList" :key="item.derpNo" :label="item.derpName" :value="item"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="工号">
						    <el-input v-model="formdata.userNo"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="姓名">
						    <el-input v-model="formdata.custName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="身份证">
						    <el-input v-model="formdata.certNo"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="岗位">
						    <el-input v-model="formdata.custPost"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata.custClass"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="直线经理">
						    <el-input v-model="formdata.lineManager"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">离职信息</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="离职时间">
						    <el-input v-model="formdata.dimTime"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="离职类型">
						    <el-select v-model="formdata.dimType" value-key="dimType">
								<el-option v-for="item in dimTypeList" :key="item.dimTypeNo" :label="item.dimTypeName" :value="item.dimTypeNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="去向">
						    <el-input v-model="formdata.hasGone"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="工资截止日">
						    <el-input v-model="formdata.payEndTime"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :span="24">
						<el-form-item label="离职原因" style="width:100%;">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.dimReason">
							</el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新人">
						    <el-input v-model="formdata.updatedBy"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="最新更新时间">
						    <el-input v-model="formdata.updatedDate"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width:100%;">
						    <el-button class="downloadBtn" @click="handleDownload">下载</el-button>
					  		<el-checkbox v-model="formdata.dimProveFlag">是否需要出具离职证明</el-checkbox>
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
				formdata: {
					organNo: "xxx",
					organName: "xxx",
					derpName: "xxx",
					derpNo: "xxx",
					custName: "xxx",
					userNo: "xxx",
					certNo: "xxx",
					custPost: "xxx",
					custClass: "xxx",
					lineManager: "xxx",
					dimTime: "xxx",
					dimType: "xxx",
					hasGone: "xxx",
					payEndTime: "xxx",
					dimReason: "xxx",
					updatedBy: "xxx",
					updatedDate: "xxx",
					dimProveFlag: "xxx"
				},
				
				comp: {
					organName: '',
					organNo: 'p1'
				},
				newcomp: {
					organName: '',
					organNo: ''
				},
				depart: {
					derpName: '',
					derpNo: ''
				},
				newdepart: {
					derpName: '',
					derpNo: ''
				},
				//部门列表
				departList: [
					{derpName: "上海魔方分公司",derpNo: '01'},
					{derpName: "魔方分公司深圳分公司",derpNo: 'p1'},
					{derpName: "深圳前海橙色魔方信息技术有限公司",derpNo: '0'}
				],
				//公司列表
				compList: [
					{organName: "上海魔方分公司",organNo: '01'},
					{organName: "魔方分公司深圳分公司",organNo: 'p1'},
					{organName: "深圳前海橙色魔方信息技术有限公司",organNo: '0'}
				],
				dimTypeList: [
					{dimTypeName:'辞退',dimTypeNo: "01"},
					{dimTypeName:'退休',dimTypeNo: "02"},
					{dimTypeName:'外调',dimTypeNo: "03"},
					{dimTypeName:'辞职',dimTypeNo: "04"},
					{dimTypeName:'裁员',dimTypeNo: "05"},
				],
			};
		},
		components: {
			current
		},
		created() {
			let userNo = this.$route.params.userNo;
			let workhisId = this.$route.params.workhisId;
			let params = {
				userNo: userNo,
				workhisId: workhisId
			}
			//人事调动详情查询
			this.queryCustDimhisDetail(params); 
			//查询公司列表
			this.queryCompList();
		},
		methods: {
			changeValue(value) {
		 		const self = this;
	            console.log('value',value);
	      	},
	      	handleDownload() {
	      		const self = this;
	      		let params = {
	      			filePath: self.formdata2.attachm,
	      			isOnLine: "false"
	      		}
	      		//下载附件
				self.downloadFile(params);
	      	},
	      	queryCustDimhisDetail(params) {
				let self = this;
				self.$axios.get(baseURL+'/custDimhis/queryCustDimhisDetail', {params: params})
				.then(function(res) {
					console.log('CustShifthisDetail',res);
					self.formdata = res.data.data;
//					self.formdata.shiftCameTime = moment(self.formdata.shiftCameTime).format('YYYY-MM-DD hh:mm:ss');
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryOrganByUserNo')
				.then(function(res) {
					console.log('CompList',res);
					if(res.data.code === "S00000") {
						self.compList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			queryDerpList(params) {
				let self = this;
				self.$axios.get(baseURL+'/wage/queryDerpByUserNo', {params: params})
				.then(function(res) {
					console.log('DerpList',res);
					if(res.data.code === "S00000") {
						self.departList = res.data.data;
					}
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/leave/downLoadFile?filePath='+params.filePath +"&isOnLine=" + params.isOnLine, {
				responseType: 'blob'
 				})
                .then((response) => {
                    const fileName = params.filePath.substr(params.filePath.lastIndexOf("/")+1); 
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

</style>