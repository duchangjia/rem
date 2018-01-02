<template>
	<div class="leave_query">
		<current yiji="项目管理" erji="项目预算"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">项目预算</span>
				<!-- <div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
                    <el-button type="primary" class="btn-primary" @click="handleDownloadTemplate">立项文件模板下载</el-button>
				</div> -->
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :sm="12" :md="6">
							<el-form-item label="项目编号/名称">
								<el-input v-model="ruleForm2.projNo"></el-input>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="项目状态">
								<el-select v-model="ruleForm2.projApplySta">
									<el-option v-for="item in projApplyStaList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :sm="12" :md="6">
							<el-form-item label="收入类型">
								<el-select v-model="ruleForm2.incmConfim">
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
                        <el-col :sm="12" :md="6">
							<el-form-item label="项目实施部门">
								<el-input v-model="ruleForm2.projDerpNo"></el-input>
							</el-form-item>
						</el-col>
                        <el-col :sm="12" :md="6">
							<el-form-item label="项目经理(PM)">
								<el-input v-model="ruleForm2.projPM"></el-input>
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
						<el-table-column prop="projNo" label="机会号">
							<template scope="scope">
						        <span class="link" @click="handleInfo(scope.$index, scope.row)">{{ scope.row.projNo }}</span>
					      	</template>
						</el-table-column>
						<el-table-column prop="projNo" label="项目编号"></el-table-column>
						<el-table-column prop="projName" label="项目名称"></el-table-column>
						<el-table-column prop="projApplySta" label="项目状态" :formatter="projApplyStaFormatter"></el-table-column>
						<el-table-column prop="incmConfim" label="收入确认类型" :formatter="incmConfimFormatter"></el-table-column>
						<el-table-column prop="projXiaosouName" label="销售"></el-table-column>
						<el-table-column prop="preSaleStartTime" label="预计开始日期" :formatter="preSaleStartTimeFormatter"></el-table-column>
						<el-table-column label="操作" width="100">
                            <template scope="scope">
                                <el-dropdown @command="handleCommand" trigger="click">
                                    <span class="el-dropdown-link cur-pointer">
                                        下拉菜单
                                    </span>
                                    <el-dropdown-menu slot="dropdown" >
                                        <el-dropdown-item :command="item.url" v-for="item in dropDownList" :key="item.url">{{item.name}}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
							<!-- <template scope="scope">
								<i class="icon_edit" @click="handleEdit(scope.$index, scope.row)"></i>
							</template>	 -->
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
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
				projNo: '',
				incmConfim: '',
				projType: ''
			},
			projdataList: [
				{
					projNo: "00002",
					companyName: "",
					deptName: "1232",
					projApplySta: "01", 
                    incmConfim: "T&M",
                    projXiaosouName: 'P0000001',
					preSaleStartTime: "2017-10-10",
					projName: "33212",
					projType: "SSI",
					createdBy: "",
					createdDate: ""
				}
            ],
            dropDownList:[
                {
                    name:'预算编辑',
                    url:'/proBudget_edit'
                },
                {
                    name:'预算详情',
                    url:'/proBudget_info'
                },
                {
                    name:'历史版本',
                    url:'/proBHistory'
                },
                {
                    name:'提交预算',
                    url:'/saveProBudget'
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
		this.ruleForm2.projNo = '';
		this.ruleForm2.incmConfim = '';
        this.ruleForm2.projType = '';
        this.ruleForm2.projDerpNo = '';
        this.ruleForm2.projPM = '';
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
        saveItem(row, event, column){
            window.localStorage.setItem('preCheckOppoNo',row.oppoNo);
        },
        handleCommand(command){
            let self = this,
            oppoNo =  localStorage.getItem('preCheckOppoNo');
            console.log(command,oppoNo);
            if(command == 'saveProBudget'){
                // self.$confirm('确定项目已经结束，不再进行预算、收入申报','确认项目关闭',{
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'warning'
                // }).then(() => {
                //     //关闭项目
                //     self.closeProj();
                // }).catch(() => {
                //     self.$message({ type: 'info', message: '已取消操作' });          
                // });
            }else{
                self.$router.push(command);
            }
            
        }, 
	    handleAdd() {
	    	this.$router.push('add_preSale');
        },
        handleDownloadTemplate() {
            //下载模版
            this.downloadFile();
        },
		handleEdit(index, row) {
			sessionStorage.setItem('projNo',row.projNo);
            this.$router.push("/edit_preSale");
		},
		handleInfo(index, row) {
			sessionStorage.setItem('projNo',row.projNo);
			this.$router.push("/preSale_info");
			
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
            this.ruleForm2 = {};
			// this.ruleForm2.projApplySta = '';
            // this.ruleForm2.projNo = '';
            // this.ruleForm2.incmConfim = '';
            // this.ruleForm2.projType = '';
            // this.ruleForm2.projDerpNo = '';
            // this.ruleForm2.projPM = '';
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
		incmConfimFormatter(row, column) {
			return row.incmConfim=='T&M'? '外包' : row.incmConfim=='FIX' ? '固定金额' : null;
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

</style>