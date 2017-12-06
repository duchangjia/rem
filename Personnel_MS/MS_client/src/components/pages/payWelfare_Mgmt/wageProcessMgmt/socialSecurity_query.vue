<template>
	<div class="payroll_query">
		<current yiji="薪酬福利" erji="工资流程管理" sanji="社保数据查询"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">社保数据查询</span>
				<div class="titleBtn_wrapper">
                   	<el-button class="btn-primary" @click="handleSocial">导入</el-button>
					<el-button class="btn-primary" @click="handleExport">导出</el-button>
				</div>
				
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司名称">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" @change="changeComp">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<el-form-item label="身份证号">
							<el-input v-model="ruleForm2.idCard" placeholder="请输入身份证号"></el-input>
						</el-form-item>
					</el-col>
					<el-col :sm="24" :md="12">
						<el-form-item label="社保数据周期" prop="welfareStartTime">
							<el-date-picker
						      v-model="ruleForm2.welfareStartTime"
						      type="month"
						      placeholder="选择日期"
						      @change="changeStartTime"
						     >
						   	</el-date-picker> -
							<el-date-picker
						      v-model="ruleForm2.welfareEndTime"
						      type="month"
						      placeholder="选择日期"
						      @change="changeEndTime"
						     >
						   </el-date-picker>
						</el-form-item>
					</el-col>
					<div class="queryButton_wrapper">
						<el-button class="btn-default" @click="resetForm('ruleForm2')">重置</el-button>
						<el-button class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
					</div>
				</el-form>
				<el-table :data="welfareList" border stripe style="width: 100%">
					<el-table-column prop="companyName" label="公司名称"></el-table-column>
					<el-table-column prop="custName" label="姓名"></el-table-column>
					<el-table-column prop="idCard" label="身份证号"></el-table-column>
					<el-table-column prop="month" label="社保数据周期" min-width="100"></el-table-column>
					<el-table-column prop="perEndmPay" label="养老(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comEndmPay" label="养老(公司)" min-width="100"></el-table-column>
					<el-table-column prop="endmTotal" label="养老合计" ></el-table-column>
					<el-table-column prop="perMediPay" label="医疗(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comMediPay" label="医疗(公司)" min-width="100"></el-table-column>
					<el-table-column prop="mediTotal" label="医疗合计" ></el-table-column>
					<el-table-column prop="perUnemPay" label="失业(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comUnemPay" label="失业(公司)" min-width="100"></el-table-column>
					<el-table-column prop="unemTotal" label="失业合计" ></el-table-column>
					<el-table-column prop="perMatePay" label="生育(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comMatePay" label="生育(公司)" min-width="100"></el-table-column>
					<el-table-column prop="mateTotal" label="生育合计" ></el-table-column>
					<el-table-column prop="perEmplPay" label="工伤(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comEmplPay" label="工伤(公司)" min-width="100"></el-table-column>
					<el-table-column prop="emplTotal" label="工伤合计" ></el-table-column>
					<el-table-column prop="perHousePay" label="公积金(个人)" min-width="100"></el-table-column>
					<el-table-column prop="comHousePay" label="公积金(公司)" min-width="100"></el-table-column>
					<el-table-column prop="houseTotal" label="公积金合计" ></el-table-column>
					<el-table-column prop="createdBy" label="录入人"></el-table-column>
					<el-table-column prop="createdDate" label="录入时间" :formatter="createdDateFormatter"></el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
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
			token: {
				Authorization:`Bearer `+localStorage.getItem('access_token'),
			},
			pageNum: 1,
			pageSize: 10,
			totalRows: 2,
			queryFormFlag: false,
			ruleForm2: {
				organNo: '',
				idCard: '',
				welfareStartTime: "",
				welfareEndTime: ''
			},
			welfareList: [
				{
					companyName: "",
					custName: "",
					idCard: "",
					month: "",
					endmTotal: "",
					mediTotal: "",
					unemTotal: "",
					mateTotal: "",
					emplTotal: "",
					houseTotal: "",
					createdBy: "",
					createdDate: ""
				}
			],
			//部门列表
			departList: [],
			//公司列表
			compList: [],
			rules: {
				welfareStartTime: [
				]
			}
		}
	},
	components: {
		current
	},
	created() {
		this.queryFormFlag = false;
		this.ruleForm2.organNo = '';
		this.ruleForm2.idCard = '';
		this.ruleForm2.welfareStartTime = '';
		this.ruleForm2.welfareEndTime = '';
		//社保列表查询
		this.queryWelfareList();
		//公司列表查询
		this.queryCompList();
	},
	methods: {
		monthFormatter(row, column) {
	      return row.month ? moment(row.month).format('YYYY-MM') : null;
	   	},
	   	createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		changeStartTime(val) {
			this.ruleForm2.welfareStartTime = val;
			console.log(val)
		},
		changeEndTime(val) {
			this.ruleForm2.welfareEndTime = val;
		},
		changeComp(val) {
			console.log(val);
		},
		handleSocial() {
			this.$router.push('/import_socialSecurity');
		},
		handleExport() {
			let self = this;
			let params = {
				organNo: self.ruleForm2.organNo,
				idCard: self.ruleForm2.idCard,
				welfareStartTime: self.ruleForm2.welfareStartTime,
				welfareEndTime: self.ruleForm2.welfareEndTime
			}
			this.exportFile(params);
		},
		//查询
		queryForm(formName) {
			const self = this;
			self.$refs[formName].validate((valid) => {
				if (valid) {
					
					//条件社保列表查询
					this.queryWelfareList();
					
				} else {
					return false;
				}
			});
		},
		//重置
		resetForm() {
			this.ruleForm2.organNo = '';
			this.ruleForm2.idCard = '';
			this.ruleForm2.welfareStartTime = '';
			this.ruleForm2.welfareEndTime = '';
		},
		handleCurrentChange(val) {
			this.pageNum = val;
			//分页社保列表查询
			this.queryWelfareList();
		},
		queryWelfareList() {
			let self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				organNo: self.ruleForm2.organNo,
				idCard: self.ruleForm2.idCard,
				welfareStartTime: self.ruleForm2.welfareStartTime,
				welfareEndTime: self.ruleForm2.welfareEndTime
			};
			self.$axios.get(baseURL+'/welfare/queryWelfareList', {params: params})
			.then(function(res) {
				console.log('WelfareList',res);
				if(res.data.code === "S00000") {
					self.welfareList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then(function(res) {
				console.log('CompList',res);
				if(res.data.code === "S00000") {
					self.compList = res.data.data;
				}
				
			}).catch(function(err) {
				console.log(err);
			})
		},
		//导出
		exportFile(params) {
			const self = this;
			self.$axios.get(baseURL+'/welfare/exportWelfareInfoByModel',{
					params: params,
                    responseType: 'blob'
                })
                .then((response) => {
					console.log('response',response);
                    const fileName = "社保信息.xlsx"; 
                    const blob = response.data;
//					debugger
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {

                        window.navigator.msSaveOrOpenBlob(blob, fileName);
                    } else {

                        let elink = document.createElement('a'); // 创建a标签
                        elink.download = fileName;
                        elink.style.display = 'none';
                        elink.href = URL.createObjectURL(blob);
//						console.log('href',elink.href);
                        document.body.appendChild(elink);
                        elink.click(); // 触发点击a标签事件
                        document.body.removeChild(elink);
                    }
                }).catch((e) => {
                    console.error(e)
                    self.$message({ message: '导出社保信息失败', type: 'error' });
                })
		},
	}
}
</script>


<style scoped>
.payroll_query {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.payroll_query .imExport-btn-item {
    margin-right: 20px;
}
.titleBtn_wrapper {
	float: right;
}
.titleBar .btn-primary {
	float: none;
}
.el-button + .el-button {
    margin-left: 20px;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>