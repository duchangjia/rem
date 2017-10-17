<template>
	<div class="tax_rate">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">个人所得税税率设置</span>
				<el-button type="primary" @click="addtax()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-table :data="dataList" border stripe style="width: 100%">
					<el-table-column prop="name" label="组名称">
						<template scope="scope">
					        <span @click="handleEdit(scope.$index, scope.row)">{{ scope.row.name }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="beiz" label="备注"></el-table-column>
					<el-table-column prop="create_date" label="生效日期"></el-table-column>
					<el-table-column prop="del_date" label="失效日期"></el-table-column>
					<el-table-column prop="createdId" label="创建ID"></el-table-column>
					<el-table-column prop="create_time" label="创建时间"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageRows" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>2*pageRows">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import current from '../../common/current_position.vue'
export default {
	data() {
		return {
			pageIndex: 1,
			pageRows: 2,
			totalRows: 10,
			dataList: [
				{
					name: "1600起征",
					beiz: "xxxx",
					create_date: "",
					del_date: "",
					createdId: '',
					create_time: ''
				},
				{
					name: "3500起征",
					beiz: "xxxx",
					create_date: "",
					del_date: "",
					createdId: '',
					create_time: ''
				}
			]
		}
	},
	components: {
		current
	},
	methods: {
		addtax() {
			this.$router.push('/add_tax');
		},
		handleEdit(index, row) {
			console.log('index:'+index,'row.modelNo:'+row.modelNo);
            this.$router.push('/rate_info');
		},
		handleDelete(index, row) {
            console.log('index',index);
            console.log('row',row);
            this.$confirm('此操作将会删除该条模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            	//操作
               this.$message({ type: 'success', message: '删除成功!' });
            }).catch(() => {
                this.$message('您已取消删除模版！');
            });
        },
        handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
}
</script>

<style>
.tax_rate {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.tax_rate .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.tax_rate .content .title {
border-bottom: 1px solid #EEEEEE;
}

.tax_rate .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
	letter-spacing: 0;
}

.tax_rate .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.tax_rate .content-inner {
	padding: 40px 0px;
}
.tax_rate .el-button {
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

.tax_rate .el-button.resetform {
	margin-right: 20px;
}

.tax_rate .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.tax_rate .content-inner {
	padding: 40px 0px;
}
/*.tax_rate .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.tax_rate .el-table__footer-wrapper thead div,
.tax_rate .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.tax_rate .el-table td,
.tax_rate .el-table th {
	text-align: center;
}
.tax_rate .el-table td:first-child{
	cursor: pointer;
}
.tax_rate .el-table td:first-child:hover{
	color: #FF9900;
}
/*.tax_rate .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.tax_rate .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.tax_rate .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}

/*.tax_rate .el-table--border td,
.tax_rate .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.tax_rate .el-table td,
.tax_rate .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.tax_rate .el-table::after,
.tax_rate .el-table::before {
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

.tax_rate .icon-edit:hover,
.tax_rate .icon-delete:hover {
    cursor: pointer;
}
.tax_rate .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.tax_rate .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.tax_rate .el-pager li {
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

.tax_rate .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.tax_rate .el-pagination button,
.tax_rate .el-pagination span {
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

.tax_rate .el-pager li:hover {
	color: #FF9900;
}
.tax_rate .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.tax_rate .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.tax_rate .el-pagination button:hover {
	color: #FF9900;
}
.tax_rate .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.tax_rate .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.tax_rate .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.tax_rate .el-pagination .btn-next,
.tax_rate .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.tax_rate .el-autocomplete-suggestion__wrap,
.tax_rate .el-pager li {
	border: 1px solid #EEEEEE;
}

.tax_rate .el-pager li.btn-quicknext,
.tax_rate .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>