<template>
	<div class="rate_info">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="个人所得税税率详情"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">个人所得税税率详情</span>
				<el-button type="primary" @click="addRate()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-table :data="taxRateList" border stripe style="width: 100%">
					<el-table-column prop="groupNo" label="组名称">
						<template scope="scope">
					        <span @click="handleEdit(scope.$index, scope.row)">{{ scope.row.groupNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="GroupLowerLimit" label="下限"></el-table-column>
					<el-table-column prop="GroupLimit" label="上限"></el-table-column>
					<el-table-column prop="percentRate" label="百分比率（%）"></el-table-column>
					<el-table-column prop="quickCal" label="速算扣除数"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageRows" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
const baseURL = 'ifdp'
export default {
	data() {
		return {
			pageIndex: 1,
			pageRows: 2,
			totalRows: 10,
			taxRateList: [
				{
					"groupNo": "1600起征",
					"groupId": "01001",
					"applyNo": "0001",
					"GroupLimit": "10000",
					"GroupLowerLimit": "5000",
					"remark": "xxxx",
					"percentRate": "5%",
					"quickCal": "0"
				},
				{
					groupNo: "3500起征",
					GroupLowerLimit: "3500",
					GroupLimit: "5000",
					percentRate: '7%',
					quickCal: '0.00'
				}
			]
		}
	},
	components: {
		current
	},
	created() {
		const self = this;
		let groupNo = self.$route.params.groupNo;
		let groupId = self.$route.params.groupId;
		let pageNum = 1;
		let pageSize = 2;
		let params = {
			"pageNum": pageNum,
			"pageSize": pageSize
		};
		self.selectTaxRateCtrl(pageNum, pageSize, params);
	},
	methods: {
		addRate() {
			this.$router.push('/add_rate');
		},
		handleEdit(index, row) {
			console.log('row:',row);
            this.$router.push({
            	name: 'edit_rate',
            	params: {
            		groupNo: row.groupNo,
            		groupId: row.groupId,
            		applyNo: row.applyNo,
            		GroupLimit: row.GroupLimit,
            		GroupLowerLimit: row.GroupLowerLimit,
            		remark: row.remark,
            		percentRate: row.percentRate,
            		quickCal: row.quickCal
            	}
            });
		},
		handleDelete(index, row) {
        	const self = this;
            console.log('index',index);
            console.log('row',row);
            self.$confirm('此操作将会删除该条税率模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            	let params = {
            		groupId: self.taxRateList.groupId,
            		applyId: self.taxRateList.applyId
            	};
            	self.deleteTaxRateCtrl(params);
            	
            }).catch(() => {
                self.$message('您已取消操作！');
            });
        },
        handleCurrentChange(val) {
			const self = this;
			let groupNo = sessionStorage.getItem('groupNo');
			let pageNum = val;
			let pageSize = 2;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize,
				groupNo: groupNo
			};
			self.selectTaxRateCtrl(pageNum, pageSize, params);
		},
		//查询个税列表
		selectTaxRateCtrl(pageNum,pageSize,params) {
			const self = this;
			self.$axios.get(baseURL+'/selectTaxRateCtrl', { params: params})
				.then(function(res) {
					console.log(res);
					self.taxRateList = res.data.data.list;
					self.pageIndex = pageNum;
					self.pageRows = pageSize;
					self.totalRows = Number(res.data.data.total);
				}).catch(function(err) {
					console.log(err);
				})
		},
		//删除个税税率
		deleteTaxRateCtrl(params) {
			const self = this;
			self.$axios.delete(baseURL+'/deleteTaxRateCtrl')
    		.then((res) => {
    			console.log(res);
    			this.$message({ type: 'success', message: '删除成功!' });
    		}).catch((err) => {
    			console.log(err);
    		})
		}
	}
}
</script>

<style>
.rate_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.rate_info .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.rate_info .content .title {
border-bottom: 1px solid #EEEEEE;
}

.rate_info .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
	letter-spacing: 0;
}

.rate_info .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.rate_info .content-inner {
	padding: 40px 0px;
}
.rate_info .el-button {
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

.rate_info .el-button.resetform {
	margin-right: 20px;
}

.rate_info .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.rate_info .content-inner {
	padding: 40px 0px;
}
/*.rate_info .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.rate_info .el-table__footer-wrapper thead div,
.rate_info .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.rate_info .el-table td,
.rate_info .el-table th {
	text-align: center;
}
.rate_info .el-table td:first-child span{
	cursor: pointer;
	color: #FF9900;
}
/*.rate_info .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.rate_info .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.rate_info .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}

/*.rate_info .el-table--border td,
.rate_info .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.rate_info .el-table td,
.rate_info .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.rate_info .el-table::after,
.rate_info .el-table::before {
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

.rate_info .icon-edit:hover,
.rate_info .icon-delete:hover {
    cursor: pointer;
}
.rate_info .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.rate_info .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.rate_info .el-pager li {
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

.rate_info .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.rate_info .el-pagination button,
.rate_info .el-pagination span {
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

.rate_info .el-pager li:hover {
	color: #FF9900;
}
.rate_info .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.rate_info .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.rate_info .el-pagination button:hover {
	color: #FF9900;
}
.rate_info .el-pagination button.disabled {
    color: #e4e4e4;
}
.rate_info .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.rate_info .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.rate_info .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.rate_info .el-pagination .btn-next,
.rate_info .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.rate_info .el-autocomplete-suggestion__wrap,
.rate_info .el-pager li {
	border: 1px solid #EEEEEE;
}

.rate_info .el-pager li.btn-quicknext,
.rate_info .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>