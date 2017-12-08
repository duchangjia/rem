<template>
	<div class="info_wrapper">
		<current yiji="项目管理" erji="售前立项" sanji="售前立项新增">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">售前立项新增</span>
				<el-button type="primary" class="toolBtn" @click="save('formdata1')">保存</el-button>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata1" :inline="true"  :rules="rules1" :model="formdata1" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="项目名称">
							<el-input v-model="formdata1.projName" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入类型">
							<el-input v-model="formdata1.projIncmType" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="客户">
						    <el-input v-model="formdata1.userNo" :disabled="true"></el-input>
					 	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="服务管理模式">
						    <el-input v-model="formdata1.fuwuModel" :disabled="true"></el-input>
					  	</el-form-item>
					</el-col>		
					<el-col :sm="24" :md="12">
						<el-form-item label="项目类型">
						    <el-select v-model="formdata1.projType" :disabled="true">
								<el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="收入确认类型">
						    <el-select v-model="formdata1.incmConfim" :disabled="true">
								<el-option v-for="item in incmConfimList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	
						  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计合同金额" prop="yijiHTMony">
                            <el-input v-model.number="formdata1.yijiHTMony"></el-input>
					  	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="订单类型" prop="dindanType">
						    <el-select v-model="formdata1.dindanType">
								<el-option v-for="item in dindanTypeList" :key="item.workotNo" :label="item.label" :value="item.workotNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>	 
				  	<el-col :span="24">
				  		<el-form-item class="xiangmuDidian" label="项目交付地" prop="xiangmuDidian">
						    <el-input type="textarea" v-model="formdata1.xiangmuDidian"></el-input>
					  	</el-form-item>
				  	</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="预计合同签订时间" prop="yijiHTTime">
				        	<el-date-picker type="datetime" v-model="formdata1.yijiHTTime" @change="changeYujiHTTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                    <el-col :sm="24" :md="12">
						<el-form-item label="预计结束时间" prop="yijiStartTime">
				        	<el-date-picker type="datetime" v-model="formdata1.yijiStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>	  	
					<el-col :sm="24" :md="12">
						<el-form-item label="预计结束时间" prop="yijiEndTime">
				        	<el-date-picker type="datetime" v-model="formdata1.yijiEndTime" @change="changeEndTime" style="width:100%;"></el-date-picker>
				      	</el-form-item>
					</el-col>
                </el-form>
                <el-col :span="24" class="item-title">销售信息</el-col>  
                <el-form ref="formdata2" :inline="true"  :rules="rules2" :model="formdata2" label-width="110px">
					
				  	<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
				  		 	<el-input v-model="formdata1.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="formdata"
					  			 :on-change="changeUpload"
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/workot/modifyWorkOtInfo" 
					  			 :show-file-list="false" 
					  			 :auto-upload="false"
					  			 :headers="token"
					  		>
	                            <el-button slot="trigger" type="primary" class="uploadBtn">选取文件</el-button>
	                        </el-upload>
					  	</el-form-item>
					</el-col>
				</el-form>
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
		        } else if (this.formdata1.yijiEndTime && value >= this.formdata1.yijiEndTime) {
		          	callback(new Error('请输入正确的开始时间'));
		        } else {
		          	callback();
		        }
	      	};
			var checkWorkotEndTime = (rule, value, callback) => {
		        if (value == '') {
		          	callback(new Error('预计结束时间不能为空'));
		        } else if (this.formdata1.yijiStartTime && value <= this.formdata1.yijiStartTime) {
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
                    yijiHTTime: "", //2017-10-12-21 10:20:20
                    yijiStartTime: "",
					yijiEndTime: "",
					yijiHTMony: "",
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
				//项目类型列表
                projTypeList: [],
                //收入类型列表
                projIncmType: [
                    {}
                ],
				//收入确认类型列表
                incmConfimList: [],
                //订单类型列表
				dindanTypeList: [
					{label: '有薪加班', workotNo: '01'},
					{label: '调休加班', workotNo: '02'}
				],
			 	rules1: {
			 		yijiStartTime: [
		            	{ required: true, validator: checkWorkotStartTime, trigger: 'change' }
	          		],
					yijiEndTime: [
		            	{ required: true, validator: checkWorkotEndTime, trigger: 'change' }
	          		],
		          	yijiHTMony: [
		            	{ required: true, message: '出差类型不能为空', trigger: 'blur' }
	          		],
	          		dindanType: [
		            	{ required: true, type: 'number', message: '预计累计工时不能为空', trigger: 'blur' }
	          		],
	          		xiangmuDidian: [
	          			{ min: 0, max: 512, message: '长度在 0 到 512 个字符之间', trigger: 'blur' }
	          		]
                },
                rules2: {
					
				}
			}
		},
		components: {
			current
		},
		created() {
			
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
	    			"yijiHTTime": self.formdata1.yijiHTTime, 
	    			"yijiEndTime": self.formdata1.yijiEndTime,
	    			"yijiHTMony": self.formdata1.yijiHTMony, 
	    			"dindanType": self.formdata1.dindanType, 
	    			"xiangmuDidian": self.formdata1.xiangmuDidian,
	    			attachm: self.formdata1.attachm
				}
			}
		},
		methods: {
            changeYujiHTTime(time) {
				this.formdata1.yijiHTtTime = time;
			},
			changeStartTime(time) {
				this.formdata1.yijiStartTime = time;
			},
			changeEndTime(time) {
				this.formdata1.yijiEndTime = time;
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
					this.$router.push('/overtime_management');
	      		}
	      	},
	      	save(formName) {
				const self = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						self.$refs.upload.submit();
						if(!self.fileFlag) {
							let params = {
								"applyNo": self.formdata1.applyNo, 
								"userNo": self.formdata1.userNo,
				    			"yijiHTTime": self.formdata1.yijiHTTime, 
				    			"yijiEndTime": self.formdata1.yijiEndTime,
				    			"yijiHTMony": self.formdata1.yijiHTMony, 
				    			"dindanType": self.formdata1.dindanType, 
				    			"xiangmuDidian": self.formdata1.xiangmuDidian,
				    			attachm: self.formdata1.attachm
							}
							//修改加班详细信息
							self.modifyTravelInfo(params);
						}
							
						
					} else {
						return false;
					}
				});
			},
			modifyTravelInfo(params) {
				let self = this;
				self.$axios.post(baseURL+'/workot/modifyWorkOtInfo',params)
				.then((res) => {
					console.log('modifyTravelInfo',res);
					if(res.data.code === "S00000") {
		      			self.$message({ message: '操作成功', type: 'success' });
						self.$router.push('/overtime_management');
		      		}
				}).catch((err) => {
					console.log('error');
				})
            },
            //查询收入金额列表
            queryprojIncmTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_INCM_TYPE')
                .then(function(res) {
                    console.log('projIncmTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projIncmTypeList = res.data.data;
                    }
                    
                }).catch(function(err) {
                    console.log('error');
                })
            },
			//查询收入确认金额列表
            queryincmConfimList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=INCM_CONFIM')
                .then(function(res) {
                    console.log('incmConfimList',res);
                    if(res.data.code === "S00000") {
                        self.incmConfimList = res.data.data;
                    }
                    
                }).catch(function(err) {
                    console.log('error');
                })
            },
            //查询项目类型列表
            queryprojTypeList() {
                let self = this;
                self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ_TYPE')
                .then(function(res) {
                    console.log('projTypeList',res);
                    if(res.data.code === "S00000") {
                        self.projTypeList = res.data.data;
                    }
                    
                }).catch(function(err) {
                    console.log('error');
                })
            },
		}
	};
</script>

<style>

</style>