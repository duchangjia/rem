<template>
	<div class="add_preSale">
		<current yuji="项目管理" erji="售前立项" sanji="售前立项详情">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">售前立项详情</span>
				<span class="preSaleStatusMsg">立项审批状态：{{formdata1.projApplyMsg}}</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules1" :model="formdata1" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="机会号">
							<el-input v-model="formdata1.oppoNo" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="项目名称">
							<el-input v-model="formdata1.projName"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入类型">
							<el-select v-model="formdata1.projIncmConfim">
								<el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="客户">
							<el-input v-model="formdata1.coocustNo"></el-input>
							<!-- <el-select v-model="formdata1.coocustNo">
								<el-option v-for="item in userNoList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select> -->
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="服务管理模式">
							<el-select v-model="formdata1.projSrvMngmode">
								<el-option v-for="item in fuwuModelList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="项目类型">
						    <el-select v-model="formdata1.projType">
								<el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入确认类型">
						    <el-select v-model="formdata1.projIncmType">
								<el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
						  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同金额" prop="projPreconAmt">
                            <el-input v-model.number="formdata1.projPreconAmt"></el-input>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="订单类型" prop="projOrdType">
						    <el-select v-model="formdata1.projOrdType">
								<el-option v-for="item in dindanTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	 
				  	<el-col :sm="24" :md="12">
				  		<el-form-item class="projImplePla" label="项目交付地" prop="projImplePla">
						    <el-input type="text" v-model="formdata1.projImplePla"></el-input>
					  	</el-form-item>
				  	</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="预计合同签订时间" prop="porjPreconDate">
				        	<el-date-picker type="datetime" v-model="formdata1.porjPreconDate" @change="changePorjPreconDate" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="预计结束时间" prop="projImpBegdate">
				        	<el-date-picker type="datetime" v-model="formdata1.projImpBegdate" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计结束时间" prop="projImpEndate">
				        	<el-date-picker type="datetime" v-model="formdata1.projImpEndate" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                </el-form>
                <el-col :span="24" class="item-title">销售信息</el-col>  
                <el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata1" label-width="130px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="销售" prop="projSaleName">
						    <el-input type="text" v-model="formdata1.projSaleName"></el-input>
					  	</el-form-item>
				  	</el-col>
					  <el-col :sm="24" :md="12">
				  		<el-form-item label="销售主管" prop="projSaleLinemgrno">
						    <el-input type="text" v-model="formdata1.projSaleLinemgrno"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :span="24">
				  		<el-form-item label="项目说明" prop="remark">
							<el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata1.remark">
							</el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
				<el-col :span="24" class="item-title">立项预算</el-col>
				<el-form ref="formdata3" :inline="true"  :rules="rules3" :model="formdata2" label-width="130px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="总工作量" prop="projBudTalwork">
						    <el-input type="text" v-model="formdata2.projBudTalwork"></el-input>
					  	</el-form-item>
				  	</el-col>
					  <el-col :sm="24" :md="12">
				  		<el-form-item label="人力成本" prop="projBudHrcost">
						    <el-input type="text" v-model="formdata2.projBudHrcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="费用成本" prop="projBudExpcost">
						    <el-input type="text" v-model="formdata2.projBudExpcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="分包成本" prop="projBudSubcost">
						    <el-input type="text" v-model="formdata2.projBudSubcost"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="税金" prop="projBudTax">
						    <el-input type="text" v-model="formdata2.projBudTax"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="总收入" prop="projBudTalinc">
						    <el-input type="text" v-model="formdata2.projBudTalinc"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="毛利润(GM)%" prop="projGrsMarg">
						    <el-input type="text" v-model="formdata2.projGrsMarg"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="净利润(GM)%" prop="projNetMarg">
						    <el-input type="text" v-model="formdata2.projNetMarg"></el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
				<el-col :span="24" class="item-title">审批历史</el-col>
				<!-- <el-col :span="24"> -->
					<ul class="shenpiList">
						<li v-for="item in formdata1.projApplyStatusList" :key="item.projApplyStatusName">
							<span>{{item.projApplyStatusTime}}</span>
							<span>{{item.projApplyStatusName}}</span>
							<span>{{item.projApplyStatusMsg}}</span>
						</li>
					</ul>
				<!-- </el-col> -->
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	const baseURL = 'iem_pmg';
	export default {
		data() {
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计开始时间不能为空'));
		        } else if (this.formdata1.projImpEndate && value >= this.formdata1.projImpEndate) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计结束时间不能为空'));
		        } else if (this.formdata1.projImpBegdate && value <= this.formdata1.projImpBegdate) {
		          	callback(new Error('请输入正确的结束时间'));
		        } else {
		          	callback();
		        }
	      	};
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				fileFlag: '',
				formdata1: {
					projName: "",
					projIncmConfim: "",
					coocustNo: "",
					projSrvMngmode: "",
					projType: "",
					projIncmType: "",
					applyNo: "",
                    porjPreconDate: "", //2017-10-12-21 10:20:20
                    projImpBegdate: "",
					projImpEndate: "",
					projPreconAmt: "",
					workotStartCity: "",
					workotArrivalCity: "",
					projOrdType: "",
					workotSTD: "",
					projImplePla: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				formdata2: {

				},
				// formdata1: {

				// },
				//项目类型列表
                projTypeList: [
					{paraValue: 'ASD',paraShowMsg: '应用系统开发'},
					{paraValue: 'SPD',paraShowMsg: '软件产品开发'},
					{paraValue: 'APM',paraShowMsg: '应用维护升级'},
					{paraValue: 'SSI',paraShowMsg: '系统集成'},
					{paraValue: 'ISS',paraShowMsg: '信息系统安全'},
					{paraValue: 'ASC',paraShowMsg: '咨询服务'},
					{paraValue: 'OTH',paraShowMsg: '其他'}
				],
                //收入类型列表
				projIncmTypeList: [
					{paraValue: '01',paraShowMsg: 'Pipeline'},
					{paraValue: '02',paraShowMsg: 'EATP'},
					{paraValue: '03',paraShowMsg: 'Frotlog'},
					{paraValue: '04',paraShowMsg: 'Backlog'}
				],
				//客户列表
				userNoList: [
					{paraValue: '01',paraShowMsg: '中国平安'},
					{paraValue: '02',paraShowMsg: '招商银行'}
				],
				//服务管理模式列表
				fuwuModelList: [
					{paraValue: '01',paraShowMsg: '项目外包'},
					{paraValue: '02',paraShowMsg: '人力外包'},
					{paraValue: '03',paraShowMsg: '解决方案'},
					{paraValue: '04',paraShowMsg: '其他'}
				],
				//收入确认类型列表
                incmConfimList: [
					{paraValue: 'T&M',paraShowMsg: '外包'},
					{paraValue: 'FIX',paraShowMsg: '固定金额'}
				],
                //订单类型列表
				dindanTypeList: [
					{paraShowMsg: 'NEW SELL', paraValue: 'NS'},
					{paraShowMsg: 'UP SELL', paraValue: 'US'},
					{paraShowMsg: 'RE NEW', paraValue: 'RN'}
				],
			 	rules1: {
			 		
                },
                rules2: {
					
				},
                rules3: {
					
				}
			}
		},
		components: {
			current
		},
		created() {
			//查询详情
			this.queryUserDetail();
			//查询详情
			this.queryperSDetail();
            // //查询收入金额列表
            // this.queryprojIncmTypeList()
			// //查询收入确认金额列表
            // this.queryincmConfimList();
            // //查询项目类型列表
            // this.queryprojTypeList();
		},
		computed: {
			formdata: function(){
				const self = this;
				return {
					"applyNo": self.formdata1.applyNo, 
					"coocustNo": self.formdata1.coocustNo,
	    			"porjPreconDate": self.formdata1.porjPreconDate, 
	    			"projImpEndate": self.formdata1.projImpEndate,
	    			"projPreconAmt": self.formdata1.projPreconAmt, 
	    			"projOrdType": self.formdata1.projOrdType, 
	    			"projImplePla": self.formdata1.projImplePla,
	    			attachm: self.formdata1.attachm
				}
			}
		},
		methods: {
            changePorjPreconDate(time) {
				this.formdata1.porjPreconDate = time;
			},
			changeStartTime(time) {
				this.formdata1.projImpBegdate = time;
			},
			changeEndTime(time) {
				this.formdata1.projImpEndate = time;
			},
			changeValue(value) {
		 		const self = this;
	      	},
	      	changeUpload(file, fileList) {
		 		this.fileFlag = file;
		 		this.formdata1.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: '操作成功', type: 'success' });
					// this.$router.push('/');
	      		}
			},
			queryUserDetail() {
				const self = this;
				let oppoNo = sessionStorage.getItem('preSaleInfo_oppoNo');
				self.$axios.get(baseURL+'/presale/queryPresaleProjDetial/'+ oppoNo)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.formdata1 = res.data.data;
						self.formdata1.projApplyMsg = '等待赵总审批';
						self.formdata1.projApplyStatusList = [
							{projApplyStatusTime: '2017-12-01 9:10:00',projApplyStatusName: '李总',projApplyStatusMsg: '审批通过'},
							{projApplyStatusTime: '2017-12-01 9:00:00',projApplyStatusName: '刘总',projApplyStatusMsg: '审批通过'},
						];
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
			},
			queryperSDetail() {
				const self = this;
				let oppoNo = sessionStorage.getItem('preSaleInfo_oppoNo');
				self.$axios.get(baseURL+'budget/queryProjBudgetInfo/'+ oppoNo)
				.then((res) => {
					console.log('presaledtl', res);
					if(res.data.code == 'S00000') {
						self.formdata2 = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
			},
            //查询收入金额列表
            queryprojIncmTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_INCM_TYPE')
                .then((res) => {
                    console.log('projIncmTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projIncmTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
			//查询收入确认金额列表
            queryincmConfimList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=INCM_CONFIM')
                .then((res) => {
                    console.log('incmConfimList',res);
                    if(res.data.code === "S00000") {
                        self.incmConfimList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
            //查询项目类型列表
            queryprojTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_TYPE')
                .then((res) => {
                    console.log('projTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projTypeList = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log('error');
                })
            },
		}
	};
</script>

<style>
.add_preSale {
	padding: 0 0 20px 20px;
}
.addPreSaleButton_wrapper {
	width: 400px;
	margin: 0 auto;
}
.shenpiList {
	padding-left: 20px;
    color: #999999;
    font-size: 14px;
	clear: both;
}
.shenpiList li {
	padding: 15px 0;
}
.preSaleStatusMsg {
	float: right;
	margin-right: 130px;
}
</style>