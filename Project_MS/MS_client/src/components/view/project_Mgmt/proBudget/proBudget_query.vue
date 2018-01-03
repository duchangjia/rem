<template>
	<div class="leave_query">
		<current yiji="项目管理" erji="项目预算"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">项目预算</span>
			</div>
			<div class="queryContent_inner">
				<el-form :model="queryForm" :rules="rules" ref="queryForm" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :sm="12" :md="9">
							<el-form-item label="项目编号/名称" prop="proName">
								<el-input v-model="queryForm.proName"></el-input>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="项目状态" prop="proStatus">
								<el-select v-model="queryForm.proStatus">
									<el-option v-for="item in proStatusList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="收入类型" prop="incomeType">
								<el-select v-model="queryForm.incomeType">
									<el-option v-for="item in incomeTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="9">
							<el-form-item label="部门（项目实施部门)" prop="proSection">
								<el-input v-model="queryForm.proSection"></el-input>
							</el-form-item>
						</el-col>
                        <el-col :sm="12" :md="6">
							<el-form-item label="项目类型" prop="proType">
								<el-select v-model="queryForm.proType">
									<el-option v-for="item in proTypeList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>						
						<el-col :sm="12" :md="6">
							<el-form-item label="项目经理" prop="proManage">
								<el-input v-model="queryForm.proManage"></el-input>
							</el-form-item>
						</el-col>
					</div>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('queryForm')">重置</el-button>
						<el-button class="btn-primary" @click="queryFormBtn('queryForm')">查询</el-button>
					</div>
				</el-form>
				<div class="info">
					<el-table :data="querydataList" border stripe style="width: 100%">
						<el-table-column prop="deptName" label="部门"></el-table-column>
						<el-table-column prop="jihuihao" label="机会号">
						</el-table-column>
						<el-table-column prop="projName" label="项目编号"></el-table-column>
						<el-table-column prop="projApplySta" label="项目名称" :formatter="projApplyStaFormatter"></el-table-column>
						<el-table-column prop="projIncmType" label="项目状态" :formatter="projIncmTypeFormatter"></el-table-column>
						<el-table-column prop="projType" label="收入确认类型" :formatter="projTypeFormatter"></el-table-column>
						<el-table-column prop="projSell" label="销售" :formatter="projSellFormatter"></el-table-column>
						<el-table-column prop="preSaleStartTime" label="预计开始日期" :formatter="preSaleStartTimeFormatter"></el-table-column>
						<el-table-column prop="preSaleEndTime" label="预计结束日期" :formatter="preSaleEndTimeFormatter"></el-table-column>
						<el-table-column label="操作" width="100">
							<template scope="scope">
	                            <el-dropdown @command="handleCommand" trigger="hover">
									<span class="el-dropdown-link cur-pointer">
								        下拉菜单
								    </span>
								    <el-dropdown-menu slot="dropdown">
								        <el-dropdown-item v-for="item in dropDownList" :command="item.url" :key="item.url">{{item.name}}</el-dropdown-item>
								     </el-dropdown-menu>
	                            </el-dropdown>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../../common/current_position.vue'
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			queryForm: {
				proName: '',
				proStatus: '',
				incomeType: '',
				proType: '',
				proSection:'',
				proManage:'',
			},
			querydataList: [
				{
					jihuihao: "00002",
					companyName: "",
					projSell:"丽丽",
					deptName: "1232",
					projApplySta: "01", 
					projIncmType: "01",
					preSaleStartTime: "2017-10-10",
					preSaleEndTime: "2017-10-11",
					projName: "33212",
					projType: "SSI",
					createdBy: "",
					createdDate: ""
				}
            ],
			//项目状态列表
			proStatusList: [
                {paraShowMsg: '售前',paraValue: '00'},
                {paraShowMsg: '实施',paraValue: '99'},
                {paraShowMsg: '结束',paraValue: '02'},
            ],
            //收入类型列表
            incomeTypeList: [
                {paraValue: '01',paraShowMsg: 'Pipeline'},
                {paraValue: '02',paraShowMsg: 'EATP'},
                {paraValue: '03',paraShowMsg: 'Frotlog'},
                {paraValue: '04',paraShowMsg: 'Backlog'}
            ],
			//项目类型列表
			proTypeList: [
                {paraValue: 'ASD',paraShowMsg: '应用系统开发'},
                {paraValue: 'SPD',paraShowMsg: '软件产品开发'},
                {paraValue: 'APM',paraShowMsg: '应用维护升级'},
                {paraValue: 'SSI',paraShowMsg: '系统集成'},
                {paraValue: 'ISS',paraShowMsg: '信息系统安全'},
                {paraValue: 'ASC',paraShowMsg: '咨询服务'},
                {paraValue: 'OTH',paraShowMsg: '其他'}
            ],
            //下拉列表
            dropDownList:[
                {
                    name:'编辑预算',
                    url:'/proBudget_edit'
                },
                {
                    name:'预算详情',
                    url:'/proBudget_detail'
                },
                {
                    name:'历史版本',
                    url:'/proBudget_history'
                },
                {
                    name:'提交预算',
                    url:'/proBudget_submit'
                },
            ],
			rules: {}
		}
	},
	components: {
		current
	},
	created() {
		/*this.queryForm.projApplySta = '';
		this.queryForm.jihuihao = '';
		this.queryForm.projIncmType = '';
		this.queryForm.projType = '';*/
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
	    	this.$router.push('add_preSale');
        },
        handleDownloadTemplate() {
            //下载模版
            this.downloadFile();
        },
		handleEdit(index, row) {
			sessionStorage.setItem('jihuihao',row.jihuihao);
            this.$router.push("/edit_preSale");
		},
		handleInfo(index, row) {
			sessionStorage.setItem('jihuihao',row.jihuihao);
			this.$router.push("/preSale_info");
			
		},
		//查询
		queryFormBtn(formName) {
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
		//handleCommand表格操作
		handleCommand(command){
            this.$router.push(command);
		},
		//重置
		resetForm(queryForm) {
			//alert(queryForm)
			this.$refs[queryForm].resetFields();
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//分页列表查询
			this.queryprojList();
		},
		//查询售前立项列表
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
		//查询审批状态列表
		queryprojApplyStaList() {
			let self = this;
			self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=PROJ _APPLY_STA')
			.then((res) => {
				console.log('projApplyStaList',res);
				if(res.data.code === "S00000") {
					self.projApplyStaList = res.data.data;
				}
				
			}).catch((err) => {
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
        projSellFormatter(row,columu){

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

</style>