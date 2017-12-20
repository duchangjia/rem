<template>
	<div class="add_preSale">
		<current yuji="项目管理" erji="项目验收">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">项目验收</span>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules1" :model="formdata1" label-width="130px">
					<el-col :sm="24" :md="12">
						<el-form-item label="项目名称">
							<el-input v-model="formdata1.projName"></el-input>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="项目编号">
							<el-input v-model="formdata1.projNo"></el-input>
					  	</el-form-item>
					</el-col>		
					<!-- <el-col :sm="24" :md="12">
						<el-form-item label="收入类型">
							<el-select v-model="formdata1.projIncmType">
								<el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>			 -->
					<!-- <el-col :sm="24" :md="12">
						<el-form-item label="机会号">
							<el-input v-model="formdata1.jihuihao"></el-input>
					  	</el-form-item>
					</el-col>		 -->
					<el-col :sm="24" :md="12">
						<el-form-item label="客户">
							<el-select v-model="formdata1.userNo">
								<el-option v-for="item in userNoList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="服务管理模式">
							<el-select v-model="formdata1.fuwuModel">
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
						    <el-select v-model="formdata1.incmConfim">
								<el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
						  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同金额" prop="yujiHTMony">
                            <el-input v-model.number="formdata1.yujiHTMony"></el-input>
					  	</el-form-item>
					</el-col>	  	
				  	<el-col :sm="24" :md="12">
				  		<el-form-item label="合同编号" prop="hetongNo">
						    <el-input type="text" v-model="formdata1.hetongNo"></el-input>
					  	</el-form-item>
				  	</el-col>
                </el-form>
                <el-col :span="24" class="item-title">验收信息</el-col>  
                <el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="项目经理" prop="xiaoshouManger">
						    <el-input type="text" v-model="formdata2.xiaoshouManger"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="销售" prop="xiaoshou">
						    <el-input type="text" v-model="formdata2.xiaoshou"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="预计验收时间" prop="yujiEndTime">
				        	<el-date-picker type="datetime" v-model="formdata1.yujiEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
					<el-col :span="24">
				  		<el-form-item label="项目说明" prop="xiangmuRemark">
							<el-input
							  type="textarea"
							  :autosize="{ minRows: 5, maxRows: 5}"
							  placeholder="请输入内容"
							  v-model="formdata2.xiangmuRemark">
							</el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
				<el-col :span="24" class="item-title">客户方联系人</el-col>
				<el-form ref="formdata3" :inline="true"  :rules="rules3" :model="formdata3" label-width="110px">
					<el-col :sm="24" :md="12">
				  		<el-form-item label="客户方联系人" prop="kehufName">
						    <el-input type="text" v-model="formdata3.kehufName"></el-input>
					  	</el-form-item>
				  	</el-col>
					  <el-col :sm="24" :md="12">
				  		<el-form-item label="联系电话" prop="phone">
						    <el-input type="text" v-model="formdata3.phone"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="联系邮箱" prop="email">
						    <el-input type="text" v-model="formdata3.email"></el-input>
					  	</el-form-item>
				  	</el-col>
				<el-col :span="24" class="item-title">验收材料</el-col>	  
					<el-col :sm="24" :md="12">
				  		<el-form-item label="验收报告" prop="fenbaoCB">
						    <el-input type="text" v-model="formdata3.fenbaoCB"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="税金" prop="shuijing">
						    <el-input type="text" v-model="formdata3.shuijing"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="总收入" prop="shouruTotal">
						    <el-input type="text" v-model="formdata3.shouruTotal"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="毛利润(GM)%" prop="maolirun">
						    <el-input type="text" v-model="formdata3.maolirun"></el-input>
					  	</el-form-item>
				  	</el-col>
					<el-col :sm="24" :md="12">
				  		<el-form-item label="净利润(GM)%" prop="jinglirun">
						    <el-input type="text" v-model="formdata3.jinglirun"></el-input>
					  	</el-form-item>
				  	</el-col>
				</el-form>
				<div class="addPreSaleButton_wrapper">
					<el-button class="btn-primary" @click="saveAndSubmit">保存提交审批</el-button>
					<el-button class="btn-primary" @click="saveNotSbumit">保存暂不提交审批</el-button>
					<el-button class="btn-primary" @click="notSave">取消</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import current from "../../../common/current_position.vue";
	const baseURL = 'iem_hrm';
	export default {
		data() {
			var checkWorkotStartTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计开始时间不能为空'));
		        } else if (this.formdata1.yujiEndTime && value >= this.formdata1.yujiEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计结束时间不能为空'));
		        } else if (this.formdata1.yujiStartTime && value <= this.formdata1.yujiStartTime) {
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
					projIncmType: "",
					userNo: "",
					fuwuModel: "",
					projType: "",
					incmConfim: "",
					applyNo: "",
                    yujiHTTime: "", //2017-10-12-21 10:20:20
                    yujiStartTime: "",
					yujiEndTime: "",
					yujiHTMony: "",
					workotStartCity: "",
					workotArrivalCity: "",
					dindanType: "",
					workotSTD: "",
					xiangmuDidian: "",
					attachm: "",
					updateBy: "",
					updateTime: ""
				},
				formdata2: {

				},
				formdata3: {

				},
				//项目类型列表
                projTypeList: [
					{paraValue: '01',paraShowMsg: '应用系统开发'},
					{paraValue: '02',paraShowMsg: '软件产品开发'},
					{paraValue: '03',paraShowMsg: '应用维护升级'},
					{paraValue: '04',paraShowMsg: '系统集成'},
					{paraValue: '05',paraShowMsg: '信息系统安全'},
					{paraValue: '06',paraShowMsg: '咨询服务'},
					{paraValue: '07',paraShowMsg: '其他'},
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
					{paraValue: '01',paraShowMsg: '外包'},
					{paraValue: '02',paraShowMsg: '固定金额'},
				],
                //订单类型列表
				dindanTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
			 	rules1: {
			 		yujiStartTime: [
		            	{ required: true, validator: checkWorkotStartTime, trigger: 'change' }
	          		],
					yujiEndTime: [
		            	{ required: true, validator: checkWorkotEndTime, trigger: 'change' }
	          		],
		          	yujiHTMony: [
		            	{ required: true, message: '不能为空', trigger: 'blur' }
	          		],
	          		dindanType: [
		            	{ required: true, type: 'number', message: '预计累计工时不能为空', trigger: 'blur' }
	          		],
	          		xiangmuDidian: [
	          			{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
	          		]
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
			// this.queryUserDetail();
            //查询收入金额列表
            //this.queryprojIncmTypeList()
			//查询收入确认金额列表
            // this.queryincmConfimList();
            // //查询项目类型列表
            // this.queryprojTypeList()
		},
		computed: {
			formdata: function(){
				const self = this;
				return {
					"applyNo": self.formdata1.applyNo, 
					"userNo": self.formdata1.userNo,
	    			"yujiHTTime": self.formdata1.yujiHTTime, 
	    			"yujiEndTime": self.formdata1.yujiEndTime,
	    			"yujiHTMony": self.formdata1.yujiHTMony, 
	    			"dindanType": self.formdata1.dindanType, 
	    			"xiangmuDidian": self.formdata1.xiangmuDidian,
	    			attachm: self.formdata1.attachm
				}
			}
		},
		methods: {
            changeYujiHTTime(time) {
				this.formdata1.yujiHTtTime = time;
			},
			changeStartTime(time) {
				this.formdata1.yujiStartTime = time;
			},
			changeEndTime(time) {
				this.formdata1.yujiEndTime = time;
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
			//保存提交审批
			saveAndSubmit() {
				let self = this;
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          	self.$refs.formdata2.validate(valid => {
							if (valid) {
								self.$refs.formdata3.validate(valid => {
									if (valid) {
										let params = {

										}
										//更新(保存+提交)
										self.saveAndSubmitInfo(params);
									}
								})
							}
						})
					}
				})

			},
			//保存不提交审批
			saveNotSbumit() {
				let self = this;
				self.$refs.formdata1.validate(valid => {
			        if (valid) {
			          	self.$refs.formdata2.validate(valid => {
							if (valid) {
								self.$refs.formdata3.validate(valid => {
									if (valid) {
										let params = {

										}
										//更新(保存不提交)
										self.saveutNotSubmitInfo(params);
									}
								})
							}
						})
					}
				})	
			},
			//取消
			notSave() {

			},
			//查询详情
			queryUserDetail() {
				const self = this;
				let params = {

				};
				self.$axios.get(baseURL+'', params)
				.then((res) => {
					console.log('dtl', res);
					if(res.data.code == 'S00000') {
						self.formdata1 = res.data.data;
					}
					
				})
				.catch((err) => {
					console.log(err)
				})
			},
			//更新(保存+提交)
			saveAndSubmitInfo(params) {
				const self = this;
				self.$axios.put(baseURL+'',params)
				.then((res) => {
					console.log('保存+提交', res);
					if(res.data.code=="S00000"){
			        	self.$message({ message: '操作成功', type: 'success' });
			        	// self.$router.push('/preSale_query');
					} else {
						console.log('error');
					}
				})
				.catch((err) => {
					console.log('error');
				})
			},
			//更新(保存不提交)
			saveutNotSubmitInfo(params) {
				const self = this;
				self.$axios.put(baseURL+'',params)
				.then((res) => {
					console.log('保存不提交',res);
					if(res.data.code=="S00000"){
			        	self.$message({ message: '操作成功', type: 'success' });
			        	// self.$router.push('/preSale_query');
					} else {
						console.log('error');
					}
				})
				.catch((err) => {
					console.log('error');
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
.add_preSale .item-title .uploadBtn {
	right: 151px!important;
	border-radius: 4px;
}
</style>