<template>
	<div class="rank_wrap">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">职级薪酬标准设置</span>
				<el-button type="primary" @click="addWelfare()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :inline="true" ref="ruleForm2" label-width="58px" class="demo-ruleForm">
					<div class="input-wrap">
						<el-form-item label="机构" prop="organNo">
							<el-select v-model="ruleForm2.organNo" value-key="compOrgNo" placeholder="所属公司" >
								<el-option v-for="item in compList" :key="item.compOrgNo" :label="item.compName" :value="item.compOrgNo"></el-option>
							</el-select>
						</el-form-item>
						<div class="button-wrap">
							<el-button type="primary" class="queryForm" @click="queryForm('ruleForm2')">查询</el-button>
						</div>
					</div>
				</el-form>
				<el-table :data="dataList" border stripe style="width: 100%">
					<el-table-column prop="applyNo" label="模版编号">
						<template scope="scope">
					        <span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="applyName" label="模版名称"></el-table-column>
					<el-table-column prop="compName" label="公司名称"></el-table-column>
					<el-table-column prop="rank" label="职级"></el-table-column>
					<el-table-column prop="salaryFloor" label="薪资标准下线"></el-table-column>
					<el-table-column prop="salaryTop" label="薪资标准上线"></el-table-column>
					<el-table-column prop="businessStandard" label="出差标准（人/天）"></el-table-column>
					<el-table-column prop="remark" label="备注"></el-table-column>
					<el-table-column prop="createdBy" label="创建ID"></el-table-column>
					<el-table-column prop="createdDate" label="创建时间"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 5,
			totalRows: 1,
			queryFormFlag: false,
			ruleForm2: {
				organNo: ""
			},
			dataList: [
				{
					applyNo: "00001",
					applyName: "xxxxxx",
					compName: 'xxxx',
					rank: 'B10-高级开发软件工程师',
					salaryFloor: '5000.00',
					salaryTop: '10000.00',
					businessStandard: '50',
					remark: "",
					createdBy: "001",
					createdDate: ""
				},
				{
					applyNo: "00002",
					applyName: "xxxxx",
					compName: 'xxxx',
					rank: 'B5-UI中级',
					salaryFloor: '4000',
					salaryTop: '70000',
					businessStandard: '60',
					remark: "",
					createdBy: "002",
					createdDate: ""
				}
			],
			//公司列表
			compList: [
				{compName: "上海魔方分公司",compOrgNo: '01'},
				{compName: "魔方分公司深圳分公司",compOrgNo: '03'},
				{compName: "深圳前海橙色魔方信息技术有限公司",compOrgNo: '02'}
			]
		}
	},
	created() {
		const self = this;
		self.queryFormFlag = false;
		let pageNum = self.pageNum;
		let pageSize = self.pageSize;
		let params = {
			"pageNum": pageNum,
			"pageSize": pageSize
		};
		//查询职级薪酬列表
		self.queryCParmList(pageNum,pageSize,params);
	},
	components: {
		current
	},
	methods: {
		addWelfare() {
			this.$router.push('/add_rank');
		},
		queryForm() {
			const self = this;
			let pageNum = self.pageNum;
			let pageSize = self.pageSize;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize,
				organNo: self.ruleForm2.organNo
			};
			if(self.ruleForm2.organNo) {
				//查询职级薪酬列表
				self.queryFormFlag = true;
				self.queryCParmList(pageNum,pageSize,params);
			}
			
		},
		handleEdit(index, row) {
            this.$router.push({
            	name: 'edit_rank',
            	params: {
            		applyNo: row.applyNo,
            		organNo: row.organNo
            	}
            });
		},
		handleDelete(index, row) {
            const self = this;
            self.$confirm('此操作将会删除该条模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            	let params = {
            		organNo: row.organNo,
            		applyNo: row.applyNo
            	};
            	//删除职级模版
            	self.deleteCparm(params);
               	
            }).catch(() => {
            	self.$message({ type: 'info', message: '您已取消操作!' });
            })
        },
        handleCurrentChange(val) {
			const self = this;
			let pageNum = val;
			let pageSize = self.pageSize;
			let params = {};
			console.log('queryFormFlag',self.queryFormFlag);
			if(self.queryFormFlag) {
				console.log('1');
				params = {
					"pageNum": pageNum,
					"pageSize": pageSize,
					organNo: self.ruleForm2.organNo	
				};
			} else {
				params = {
					"pageNum": pageNum,
					"pageSize": pageSize
				};
				console.log(params);
			}
			
			//分页查询职级薪酬列表
			self.queryCParmList(pageNum,pageSize,params);
			
		},
		queryCParmList(pageNum,pageSize,params) {
			const self = this;
			self.$axios.get(baseURL+'/RankSalaryTemplate/queryCParmList', {params: params})
			.then((res) => {
				console.log('list',res);
				self.dataList = res.data.data.list;
				self.pageNum = pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch((err) => {
				console.log(err);
			})
		},
		deleteCparm(params) {
			const self = this;
			self.$axios.delete(baseURL + '/RankSalaryTemplate/delCparm/' + params.organNo + '/'+params.applyNo)
    		.then(function(res) {
    			console.log('del',res);
    			if(res.data.code === "S00000") {
    				self.$message({ type: 'success', message: '删除成功!' });
    			}
    			
    		}).catch(function(err) {
    			self.$message.error('删除模版失败！');
    		})
		}
	}
}
</script>

<style>
.rank_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.rank_wrap .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.rank_wrap .content .title {
border-bottom: 1px solid #EEEEEE;
}

.rank_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.rank_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.rank_wrap .content-inner {
	padding: 40px 0px;
}
.rank_wrap .el-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #FF9900;
	color: #FF9900;
	float: right;
    margin-top: 20px;
	padding: 12px 45px;
	border-radius: 0px;
}

.rank_wrap .el-button.queryForm {
	margin-top: 0px;
}

.rank_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.rank_wrap .content-inner {
	padding: 40px 0px;
}
.rank_wrap .button-wrap {
	display: inline-block;
	width: 260px;
	clear: both;
	font-size: 0px;
}
/*.rank_wrap .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.rank_wrap .el-table__footer-wrapper thead div,
.rank_wrap .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.rank_wrap .el-table td,
.rank_wrap .el-table th {
	text-align: center;
}
/*.rank_wrap .el-table td:first-child span {
	cursor: pointer;
	color: #FF9900;
}*/
.rank_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
/*.rank_wrap .el-table td:first-child:hover{
	color: #FF9900;
}*/
/*.rank_wrap .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.rank_wrap .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.rank_wrap .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}

/*.rank_wrap .el-table--border td,
.rank_wrap .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.rank_wrap .el-table td,
.rank_wrap .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.rank_wrap .el-table::after,
.rank_wrap .el-table::before {
	content: '';
	position: absolute;
	background-color: transparent;
}*/
.icon-delete {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('../../../../static/img/common/delete.png') center no-repeat;
}

.icon-edit:hover,
.icon-delete:hover {
    cursor: pointer;
}
.el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.el-pager li {
	padding: 0 4px;
	border-right: 0;
	background: #fff;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	line-height: 24px;
	text-align: center;
}

.el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.el-pagination button,
.el-pagination span {
	display: inline-block;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	color: #282828;
	line-height: 24px;
	vertical-align: top;
	box-sizing: border-box;
}

.el-pager li:hover {
	color: #FF9900;
}
.el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.el-pagination button:hover {
	color: #FF9900;
}
.el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.el-pagination .btn-next,
.el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.el-autocomplete-suggestion__wrap,
.el-pager li {
	border: 1px solid #EEEEEE;
}

.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>