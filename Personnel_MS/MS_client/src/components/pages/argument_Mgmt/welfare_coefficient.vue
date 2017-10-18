<template>
	<div class="welfare_coefficient">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">福利缴纳系数设置</span>
				<el-button type="primary" @click="addWelfare()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-table :data="dataList" border stripe style="width: 100%">
					<el-table-column prop="modelNo" label="模版编号">
						<template scope="scope">
					        <span @click="handleEdit(scope.$index, scope.row)">{{ scope.row.modelNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="modelName" label="模版名称"></el-table-column>
					<el-table-column prop="beiz" label="备注"></el-table-column>
					<el-table-column prop="ID" label="创建ID"></el-table-column>
					<el-table-column prop="time" label="创建时间"></el-table-column>
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
					modelNo: "00001",
					modelName: "广州地区缴纳",
					beiz: "",
					ID: "",
					time: ""
				},
				{
					modelNo: "00002",
					modelName: "深圳地区缴纳",
					beiz: "",
					ID: "",
					time: "",
					caoz: ""
				},
				{
					modelNo: "00003",
					modelName: "东莞地区缴纳",
					beiz: "",
					ID: "",
					time: "",
					caoz: ""
				}
			]
		}
	},
	components: {
		current
	},
	methods: {
		addWelfare() {
			this.$router.push('/add_welfare');
		},
		handleEdit(index, row) {
			console.log('index:'+index,'row.modelNo:'+row.modelNo);
            this.$router.push('/welfare_info');
		},
		handleDelete(index, row) {
            console.log('index',index);
            console.log('row',row);
            this.$confirm('此操作将会删除该条模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
               this.$message({ type: 'success', message: '删除成功!' });
            }).catch(() => {
                this.$message('您已取消删除模版！');
            });
        },
        handleCurrentChange(val) {
			console.log('当前页',val);
		}
	}
}
</script>

<style>
.welfare_coefficient {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.welfare_coefficient .content {
	width: 100%;
	min-height: 510px;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.welfare_coefficient .content .title {
border-bottom: 1px solid #EEEEEE;
}

.welfare_coefficient .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.welfare_coefficient .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.welfare_coefficient .content-inner {
	padding: 40px 0px;
}
.welfare_coefficient .el-button {
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

.welfare_coefficient .el-button.resetform {
	margin-right: 20px;
}

.welfare_coefficient .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.welfare_coefficient .content-inner {
	padding: 40px 0px;
}
/*.welfare_coefficient .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.welfare_coefficient .el-table__footer-wrapper thead div,
.welfare_coefficient .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.welfare_coefficient .el-table td,
.welfare_coefficient .el-table th {
	text-align: center;
}
.welfare_coefficient .el-table td:first-child{
	cursor: pointer;
}
.welfare_coefficient .el-table td:first-child:hover{
	color: #FF9900;
}
/*.welfare_coefficient .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.welfare_coefficient .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.welfare_coefficient .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}

/*.welfare_coefficient .el-table--border td,
.welfare_coefficient .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.welfare_coefficient .el-table td,
.welfare_coefficient .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.welfare_coefficient .el-table::after,
.welfare_coefficient .el-table::before {
	content: '';
	position: absolute;
	background-color: transparent;
}*/
.welfare_coefficient .icon-delete {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('../../../../static/img/common/delete.png') center no-repeat;
}

.welfare_coefficient .icon-edit:hover,
.welfare_coefficient .icon-delete:hover {
    cursor: pointer;
}
.welfare_coefficient .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.welfare_coefficient .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.welfare_coefficient .el-pager li {
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

.welfare_coefficient .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.welfare_coefficient .el-pagination button,
.welfare_coefficient .el-pagination span {
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

.welfare_coefficient .el-pager li:hover {
	color: #FF9900;
}
.welfare_coefficient .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.welfare_coefficient .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.welfare_coefficient .el-pagination button:hover {
	color: #FF9900;
}
.welfare_coefficient .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.welfare_coefficient .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.welfare_coefficient .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.welfare_coefficient .el-pagination .btn-next,
.welfare_coefficient .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.welfare_coefficient .el-autocomplete-suggestion__wrap,
.welfare_coefficient .el-pager li {
	border: 1px solid #EEEEEE;
}

.welfare_coefficient .el-pager li.btn-quicknext,
.welfare_coefficient .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
</style>