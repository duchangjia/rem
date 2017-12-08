<template>
	<div class="leave_query">
		<current yiji="项目管理" erji="售前立项"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">售前立项</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
                    <el-button type="primary" class="btn-primary" @click="handleDownloadTemplate">立项文件模板下载</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :sm="12" :md="6">
							<el-form-item label="机会号">
								<el-input v-model="ruleForm2.jihuihao"></el-input>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="审批状态">
								<el-select v-model="ruleForm2.projApplySta">
									<el-option v-for="item in projApplyStaList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="收入类型">
								<el-select v-model="ruleForm2.projIncmType">
									<el-option v-for="item in projIncmTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
                        <el-col :sm="12" :md="6">
							<el-form-item label="项目类型">
								<el-select v-model="ruleForm2.projType">
									<el-option v-for="item in projTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</div>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm()">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="projdataList" border stripe style="width: 100%">
						<el-table-column prop="deptName" label="部门"></el-table-column>
						<el-table-column prop="jihuihao" label="机会号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.jihuihao }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="projName" label="项目名称"></el-table-column>
						<el-table-column prop="projApplySta" label="审批状态" :formatter="projApplyStaFormatter"></el-table-column>
						<el-table-column prop="projIncmType" label="收入类型" :formatter="projIncmTypeFormatter"></el-table-column>
						<el-table-column prop="projType" label="项目类型" :formatter="projTypeFormatter"></el-table-column>
						<el-table-column prop="preSaleStartTime" label="预售开始日期" :formatter="preSaleStartTimeFormatter"></el-table-column>
						<el-table-column prop="preSaleEndTime" label="预售结束日期" :formatter="preSaleEndTimeFormatter"></el-table-column>
						<el-table-column label="操作" width="100">
							<template scope="scope">
								<i class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></i>
							</template>	
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
import current from '../../../common/current_position.vue'
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			ruleForm2: {
				projApplySta: '',
				jihuihao: '',
				projIncmType: '',
				projType: ''
			},
			projdataList: [
				{
					jihuihao: "00002",
					companyName: "",
					deptName: "1232",
					projApplySta: "01", 
					projIncmType: "T&M",
					preSaleStartTime: "2017-10-10",
					preSaleEndTime: "2017-10-11",
					projName: "33212",
					projType: "SSI",
					createdBy: "",
					createdDate: ""
				}
            ],
			//审批状态列表
			projApplyStaList: [
                {paraShowMsg: '审批通过',paraValue: '00'},
                {paraShowMsg: '审批失败',paraValue: '99'},
                {paraShowMsg: '审批中',paraValue: '02'},
                {paraShowMsg: '未提交',paraValue: '01'}
            ],
            //收入类型列表
            projIncmTypeList: [
                {paraValue: '01',paraShowMsg: 'Pipeline'},
                {paraValue: '02',paraShowMsg: 'EATP'},
                {paraValue: '03',paraShowMsg: 'Frotlog'},
                {paraValue: '04',paraShowMsg: 'Backlog'}
            ],
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
			rules: {}
		}
	},
	components: {
		current
	},
	created() {
		this.ruleForm2.projApplySta = '';
		this.ruleForm2.jihuihao = '';
		this.ruleForm2.projIncmType = '';
		this.ruleForm2.projType = '';
		//查询售前立项列表
		// this.queryprojList();
		//查询审批状态列表
		// this.queryprojApplyStaList();
		// //查询收入类型列表
		// this.queryprojIncmTypeList();
		// //查询项目类型列表
		// this.queryprojTypeList()
	},
	methods: {
		preSaleStartTimeFormatter(row, column) {
	      return row.preSaleStartTime ? moment(row.preSaleStartTime).format('YYYY-MM-DD') : null;
	   	},
		preSaleEndTimeFormatter(row, column) {
	      return row.preSaleEndTime ? moment(row.preSaleEndTime).format('YYYY-MM-DD') : null;
	   	}, 
	    handleAdd() {
	    	this.$router.push('/add_preSale');
        },
        handleDownloadTemplate() {
            //下载模版
            this.downloadFile();
        },
		handleEdit(index, row) {
			sessionStorage.setItem('jihuihao',row.jihuihao);
            this.$router.push("/");
		},
		handleInfo(index, row) {
			sessionStorage.setItem('jihuihao',row.jihuihao);
			this.$router.push("/")
			
		},
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					//售前立项列表查询
					self.queryprojList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
            console.log('reset',this.ruleForm2.jihuihao)
			this.ruleForm2.projApplySta = '';
            this.ruleForm2.jihuihao = '';
            this.ruleForm2.projIncmType = '';
            this.ruleForm2.projType = '';
            console.log('reset',this.ruleForm2.jihuihao)
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//分页列表查询
			this.queryprojList();
		},
		queryprojList() {
			let self = this;
			let params = {
				
			};
			self.$axios.get(baseURL+'/leave/queryprojList', {params: params})
			.then((res) => {
				console.log('LeaveList',res);
				if(res.data.code === "S00000") {
					self.projdataList = res.data.data.models;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch((err) => {
				console.log(err);
			})
		},
		queryprojApplyStaList() {
			let self = this;
			self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ _APPLY_STA')
			.then(function(res) {
				console.log('projApplyStaList',res);
				if(res.data.code === "S00000") {
					self.projApplyStaList = res.data.data;
				}
				
			}).catch(function(err) {
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
		projApplyStaFormatter(row, column) {
			return row.projApplySta=='00'? '审批通过' : row.projApplySta=='99' ? '审批失败' : row.projApplySta=='02' ? '审批中' : row.projApplySta=='01' ? '未提交' : null;
		},
		projIncmTypeFormatter(row, column) {
			return row.projIncmType=='01'? 'Pipeline' : row.projIncmType=='02' ? 'EATP' : row.projIncmType=='03' ? 'Frotlog' : row.projIncmType=='04' ? 'Backlog' : null;
		},
		projTypeFormatter(row, column) {
	    	let projType = '';
	    	switch(row.projType){
				case 'ASD':
				  projType = '应用系统开发'
				  break;
				case 'SPD':
				  projType = '软件产品开发'
				  break;
				case 'APM':
				  projType = '应用维护升级'
				  break;
				case 'SSI':
				  projType = '系统集成'
				  break;
				case 'ISS':
				  projType = '信息系统安全'
				  break;
				case 'ASC':
				  projType = '咨询服务'
				  break;
				case 'OTH':
				  projType = '其他'
				  break;
				default:
			}
	    	return projType;
        },
        downloadFile() {
            const self = this;
            self.$axios.get(baseURL+'/file/downloadTemplate?templateName=立项文件基本信息模板', {
                    responseType: 'blob'
                })
                .then((response) => {
                console.log(response);
                    const fileName = "立项文件信息模板.xlsx"; 
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
        }
	}
}
</script>

<style scoped>
.leave_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}
.icon_delete {
	width: 14px;
	height: 16px;
	cursor: pointer;
	display: inline-block;
	margin-left: 20px;
	background: url(../../../../../static/img/common/delete.png);
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>