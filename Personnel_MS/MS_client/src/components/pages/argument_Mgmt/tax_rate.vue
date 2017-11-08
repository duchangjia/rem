<template>
	<div class="tax_rate">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置"></current>
		<div class="content">
			<div class="title">
				<span class="title-text">个人所得税税率设置</span>
				<el-button type="primary" @click="addRateGroup()">新增</el-button>
			</div>
			<div class="content-inner">
				<el-table :data="taxRateGroupList" border stripe style="width: 100%">
					<el-table-column prop="groupName" label="组名称">
						<template scope="scope">
					        <span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.groupName }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="remark" label="备注"></el-table-column>
					<el-table-column prop="startTime" label="生效日期"></el-table-column>
					<el-table-column prop="endTime" label="失效日期"></el-table-column>
					<el-table-column prop="createdBy" label="创建ID"></el-table-column>
					<el-table-column prop="createdDate" label="创建时间" :formatter="travelTimeFormatter"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
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
			taxRateGroupList: [
				{
					groupName: "1600起征",
					remark: "xxxx",
					startTime: "",
					endTime: "",
					createdBy: '',
					createdDate: ''
				},
				{
					groupName: "3500起征",
					remark: "xxxx",
					startTime: "",
					endTime: "",
					createdBy: '',
					createdDate: ''
				}
			]
		}
	},
	components: {
		current
	},
	created() {
		const self = this;
		let pageNum = self.pageNum;
		let pageSize = self.pageSize;
		let params = {
			"pageNum": pageNum,
			"pageSize": pageSize,
			isDelete: "1"
		};
		self.selectTaxRateGroup(pageNum, pageSize, params);
	},
	methods: {
		travelTimeFormatter(row, column) {
			let time = row.createdDate;
			return moment(time).format('YYYY-MM-DD hh:mm:ss');
		},
		addRateGroup() {
			this.$router.push('/add_rateGroup');
		},
		handleEdit(index, row) {
			
            this.$router.push({
            	name: 'rate_info',
            	params: {
            		groupName: row.groupName,
            		groupId: row.groupId
            	}
            });
		},
		handleDelete(index, row) {
            this.$confirm('此操作将会删除该条模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            	const self = this;
            	let params = {
            		groupId: row.groupId
            	};
            	self.deleteTaxRateGroup(params);
            }).catch(() => {
                this.$message('您已取消操作！');
            });
        },
        handleCurrentChange(val) {
			const self = this;
			let pageNum = val;
			let pageSize = self.pageSize;
			let params = {
				"pageNum": pageNum,
				"pageSize": pageSize
			};
			self.selectTaxRateGroup(pageNum,pageSize,params);
		},
		//查询个税组列表
		selectTaxRateGroup(pageNum,pageSize,params) {
			const self = this;
			self.$axios.get(baseURL+'/taxRateGroup/queryRGroupList',{params: params})
				.then(function(res) {
					console.log("queryRGroupList",res);
					self.taxRateGroupList = res.data.data.list;
					self.pageNum = pageNum;
					self.totalRows = Number(res.data.data.total);
				}).catch(function(err) {
					console.log(err)
				})
		},
		//删除个税组
		deleteTaxRateGroup(params) {
			const self = this;
        	self.$axios.put(baseURL+'/taxRateGroup/delRGroup',params)
    		.then((res) => {
    			console.log("queryRateList",res);
    			if(res.data.code==="S00000") {
    				this.$message({ type: 'success', message: res.data.retMsg });
    			} else {
    				console.log('error');
    			}
    			
    		}).catch((err) => {
    			console.log('error');
    		})
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

.tax_rate .el-table td,
.tax_rate .el-table th {
	text-align: center;
}
.tax_rate .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.tax_rate .el-table th {
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.tax_rate .el-table .cell, 
.tax_rate .el-table th>div {
    padding-left: 10px;
    padding-right: 10px;
}
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
.tax_rate .el-pagination button.disabled {
    color: #e4e4e4;
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