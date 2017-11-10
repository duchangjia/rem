<template>
	<div class="rank_wrap">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">职级薪酬标准设置</span>
				<el-button type="primary" @click="addWelfare()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-form :model="ruleForm2" :inline="true" ref="ruleForm2" class="demo-ruleForm">
					<div class="input-wrap">
						<el-col :span="6">
							<el-form-item label="公司名称" prop="organNo">
								<el-select v-model="ruleForm2.organNo" value-key="organNo" placeholder="所属公司" @change="test">
									<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<div class="button-wrap">
							<el-button class="resetform" @click="resetForm()">重置</el-button>
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
					<el-table-column prop="organName" label="公司名称"></el-table-column>
					<el-table-column prop="rank" label="职级"></el-table-column>
					<el-table-column prop="salaryFloor" label="薪资标准下限"></el-table-column>
					<el-table-column prop="salaryTop" label="薪资标准上限"></el-table-column>
					<el-table-column prop="businessStandard" label="出差标准（人/天）"></el-table-column>
					<el-table-column prop="remark" label="备注" :formatter="remarkFormatter"></el-table-column>
					<el-table-column prop="createdBy" label="创建ID"></el-table-column>
					<el-table-column prop="createdDate" label="创建时间" :formatter="createdDateFormatter"></el-table-column>
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
import moment from 'moment'
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			pageNum: 1,
			pageSize: 10,
			totalRows: 1,
			queryFormFlag: false,
			ruleForm2: {
				organNo: ""
			},
			dataList: [
				{
					applyNo: "00001",
					applyName: "xxxxxx",
					organName: 'xxxx',
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
					organName: 'xxxx',
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
				{organName: "上海分公司",organNo: '01'},
				{organName: "魔方分公司深圳分公司",organNo: 'p1'},
				{organName: "深圳前海橙色魔方信息技术有限公司5666666666666",organNo: '0'},
				{organName: "上海魔方分公司",organNo: '1002'},
				{organName: "魔方南山分公司",organNo: '1001'}
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
		//查询公司列表
		self.queryCompList();
	},
	components: {
		current
	},
	methods: {
		remarkFormatter(row,column) {
			return row.remark.length>10?(row.remark.substr(0,10)+'......'):row.remark;
		},
		createdDateFormatter(row, column) {
	      return moment(row.createdDate).format('YYYY-MM-DD')
	    },
		test() {
			console.log(this.ruleForm2.organNo)
		},
		addWelfare() {
			this.$router.push('/add_rank');
		},
		resetForm() {
			this.ruleForm2.organNo = '';
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
			//查询职级薪酬列表
			self.queryCParmList(pageNum,pageSize,params);
			self.queryFormFlag = true;
			
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
			if(self.queryFormFlag) {
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
    				let pageNum = self.pageNum;
					let pageSize = self.pageSize;
					let params = {
						"pageNum": pageNum,
						"pageSize": pageSize,
						organNo: self.ruleForm2.organNo
					};
    				//查询职级薪酬列表
					self.queryCParmList(pageNum,pageSize,params);
    			}
    			
    		}).catch(function(err) {
    			self.$message.error('删除模版失败！');
    		})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then(function(res) {
				console.log('CompList',res);
				self.compList = res.data.data;
			}).catch(function(err) {
				console.log(err);
			})
		},
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
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
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
	padding: 30px 0px;
}
.rank_wrap .el-form-item__content {
     line-height: normal; 
}
.rank_wrap .el-form-item__label {
    color: #999999;
	font-weight: normal;
	padding: 8px 10px 8px 0;
	margin: 0;
}
.rank_wrap .el-input,
.rank_wrap .el-input__inner {
	width: 164px;
	height: 30px;
	display: inline-block;
}
.rank_wrap .el-input__inner {
	border: 1px solid #EEEEEE;
	color: #333333;
}
.rank_wrap .el-input__inner:hover {
    border-color: #FF9900;
}
.rank_wrap .el-button {
	border: 1px solid #FF9900;
	color: #FF9900;
	float: right;
	padding: 7px 45px;
	height: 30px;
	border-radius: 0px;
	margin-top: 10px;
}

.rank_wrap .el-button.queryForm,
.rank_wrap .el-button.resetform  {
	margin-top: 0px;
	float: left;
}

.rank_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.rank_wrap .content-inner {
	padding: 30px 0px;
}
.rank_wrap .button-wrap {
	display: inline-block;
	width: 260px;
	clear: both;
	font-size: 0px;
}
.rank_wrap .el-button.resetform {
	/*margin-right: 20px;*/
}
.rank_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.rank_wrap .el-button+.el-button {
    margin-left: 20px;
}
.rank_wrap .el-table td,
.rank_wrap .el-table th {
	text-align: center;
}
.rank_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.rank_wrap .el-table th {
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.rank_wrap .el-table .cell, 
.rank_wrap .el-table th>div {
    padding-left: 10px;
    padding-right: 10px;
}
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