<template>
	<div class="import_socialSecurity">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="社保数据查询" siji="社保数据导入">
		</current>
		<div class="content-wrapper">
			<div class="titlebar">
				<span class="title-text">社保数据导入</span>
				<div class="imExport-btn">
                    <span class="icon-import imExport-btn-item" title="导入" @click="handleImport"></span>
					<span class="icon-download imExport-btn-item" title="下载模版" @click="handleDownloadTemplate"></span>
				</div>
			</div>
			<div class="add-wrapper">
				<el-form ref="formdata2" :inline="true"  :rules="rules" :model="formdata2" label-width="110px">
					<el-col :sm="24" :md="12">
						<el-form-item label="公司名称" prop="companyNo">
							<el-select v-model="formdata2.companyNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
					  	</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="社保数据周期" prop="wageMonth">
							<el-date-picker v-model="formdata2.wageMonth" type="month" placeholder="请选择" @change="changeWageMonth"  style="width:100%;" >
						   	</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="附件" style="width: 100%;">
				  		 	<el-input v-model="formdata2.attachm"></el-input>
					  		<el-upload class="upload-demo" ref="upload" name="file"
					  			 :data="formdata"
					  			 :on-change="changeUpload" 
					  			 :on-success="successUpload"
					  			 action="/iem_hrm/welfare/batchimport" 
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
	import messageBox from "../../../common/messageBox-components.vue";
	const baseURL = 'iem_hrm';
	export default {
		data() {
			return {
				token: {
					Authorization:`Bearer `+localStorage.getItem('access_token'),
				},
				formdata2: {
					companyName: "",
					companyNo: "",
					wageMonth: "",
					attachm: ""
				},
				//公司列表
				compList: [],
			 	rules: {
			 		companyNo: [
			 			{ required: true, message: '公司名称不能为空', trigger: 'blur' }
			 		],
			 		wageMonth: [
			 			{ required: true, message: '社保数据周期不能为空', trigger: 'change' }
			 		]
				}
			}
		},
		components: {
			current
		},
		computed: {
			formdata: function(){
				return {
					organNo: this.formdata2.companyNo,
					month: this.formdata2.wageMonth
				}
			}
		},
		created() {
			//查询公司列表
			this.queryCompList();
		},
		methods: {
			changeWageMonth(time) {
				this.formdata2.wageMonth = time;
			},
			changeUpload(file, fileList) {
		 		this.fileFlag = file;
		 		this.formdata2.attachm = file.name;
	      	},
	      	successUpload(response, file, fileList) {
	      		if(response.code === "S00000") {
	      			this.$message({ message: response.retMsg, type: 'success' });
	      			this.$router.push('/socialSecurity_query');
	      		} else {
	      			this.$message({ message: response.retMsg, type: 'error' });
	      		}
	      		
	      	},
	      	handleDownloadTemplate() {
	      		//下载社保信息模版
	      		this.downloadFile();
	      	},
	      	handleImport(formName) {
				const self = this;
				self.$refs.formdata2.validate(valid => {
			        if (valid) {
			          	self.$refs.upload.submit();
			        }
		       })
			},
			queryCompList() {
				let self = this;
				self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
				.then((res) => {
					console.log('CompList',res);
					self.compList = res.data.data;
				}).catch((err) => {
					console.log(err);
				})
			},
			downloadFile() {
				const self = this;
				self.$axios.get(baseURL+'/file/downloadTemplate?templateName=社保基本信息模板', {
	                    responseType: 'blob'
	                })
	                .then((response) => {
						console.log(response);
	                    const fileName = "社保基本信息模板.xlsx"; 
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
	                    self.$message({ message: '下载模版失败', type: 'error' });
	                })
			},
		}
	};
</script>

<style scoped>
.import_socialSecurity  {
	padding: 0 0 20px 20px;
}
.import_socialSecurity .range {
	width: 300px;
	height: 100px;
	border: 1px solid #bfcbd9;
	border-radius: 4px;
	margin-bottom: 0px;
    overflow-y: auto;
}
.import_socialSecurity .range .range-item {
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
}
.import_socialSecurity .el-button--small {
  margin: 4px;
  padding: 7px 9px;
  border: none;
  font-size: 14px;
  width: auto;
}
.import_socialSecurity .addBtn {
	background: #FF9900;
}
.import_socialSecurity .clearBtn {
	color: #ff9900;
    background: #FFFFFF;
    border: 1px solid #FF9900;
}
.import_socialSecurity .imExport-btn {
	float: right;
	margin-top: 0px;
}
.import_socialSecurity .imExport-btn-item{
	display: inline-block;
	margin-left: 30px;
	cursor: pointer;
	vertical-align: middle;
}
.import_socialSecurity .icon-import {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-import0.png);
}
.import_socialSecurity .icon-export {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/batch-export0.png);
}
.import_socialSecurity .icon-download {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../../../../../static/img/common/template-download0.png);
}
.import_socialSecurity .importBtn_wrapper {
	margin-left: 103px;
}
.import_socialSecurity .el-button, .el-button + .el-button {
    margin-left: 20px;
    float: none;
}
</style>