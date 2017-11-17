<template>
	<div class="info_wrapper">
		<current yiji="考勤管理" erji="出差管理" sanji="出差详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">出差详情</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata" :inline="true"  :rules="rules" :model="formdata" label-width="100px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称">
							<el-input v-model="formdata.companyName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="申请部门名称">
							<el-input v-model="formdata.deptName"></el-input>
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
						<el-form-item label="岗位">
						    <el-input v-model="formdata.custPost"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="职级">
						    <el-input v-model="formdata.custClass"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :span="24" class="item-title">出差信息</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差开始时间" prop="travelStartTime">
				        	<el-date-picker type="datetime" v-model="formdata.travelStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="出差结束时间" prop="travelEndTime">
				        	<el-date-picker type="datetime" v-model="formdata.travelEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差类型" prop="travelType">
						    <el-select v-model="formdata.travelType">
								<el-option v-for="item in travelTypeList" :key="item.travelNo" :label="item.label" :value="item.travelNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item class="travelCity_wrap" label="出差城市" prop="travelStartCity">
						    <el-input class="travelCity" v-model="formdata.travelStartCity" placeholder="出发城市"></el-input>
					  	</el-form-item>
					  	<span class="travelCity_line" >-</span>
					  	<el-form-item class="travelCity_wrap2" prop="travelArrivalCity">
						    <el-input class="travelCity" v-model="formdata.travelArrivalCity" placeholder="到达城市"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="出差天数">
						    <el-input v-model="formdata.travelDays"></el-input>
					  	</el-form-item>
					</el-col>  	
					<el-col :sm="24" :md="12">
						<el-form-item label="差补标准">
						    <el-input v-model="formdata.travelSTD"></el-input>
					  	</el-form-item>
					</el-col>  	
				  	<el-col :span="24">
				  		<el-form-item class="remark" label="出差备注" prop="remark">
						    <el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata.remark">
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
				formdata: {
					organNo: "01",
					deptNo: "",
					userNo: "",
					custName: "",
					custPost: "",
					custClass: "",
					travelStartTime: "",
					travelEndTime: "",
					travelType: "",
					travelStartCity: "",
					travelArrivalCity: "",
					travelDays: "",
					travelSTD: "",
					remark: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				travelTypeList: [
					{label: "业务拓展", travelNo: "01"},
					{label: "项目实施", travelNo: "02"},
					{label: "会议", travelNo: "03"},
					{label: "其他", travelNo: "99"}
				],
			 	rules: {}
			}
		},
		components: {
			current
		},
		created() {
			let applyNo = this.$route.params.applyNo;
			let userNo = this.$route.params.userNo;
			let params = {
				applyNo: applyNo
			}
			//查询出差详情
			this.queryTravelInfo(params);
		},
		methods: {
			changeStartTime(time) {
//				this.formdata.travelStartTime = time;
			},
			changeEndTime(time) {
//				this.formdata.travelEndTime = time;
			},
			changeValue(value) {
		 		const self = this;
	      	},
	      	handleDownload() {
	      		const self = this;
	      		let params = {
	      			filePath: self.formdata.attachm,
	      			isOnLine: "false"
	      		}
	      		//下载附件
				self.downloadFile(params);
	      	},
			queryTravelInfo(params) {
				const self = this;
				self.$axios.get(baseURL+'/travel/getTravelInfoByApplyNo',{params: params})
				.then(function(res) {
					console.log('travelInfo',res);
					self.formdata = res.data.data;
				}).catch(function(err) {
					console.log('error');
				})
			},
			downloadFile(params) {
				const self = this;
				self.$axios.get(baseURL+'/travel/downloadFile?filePath='+params.filePath +"&isOnLine=" + params.isOnLine, {
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

</style>