<template>
	<div class="rate_info">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置" siji="个人所得税税率详情"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">个人所得税税率详情</span>
				<div class="titleBtn_wrapper">
					<el-button class="btn-primary" @click="handleAdd()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-table :data="taxRateList" border stripe style="width: 100%">
					<el-table-column prop="applyNo" label="编号">
						<template scope="scope">
					        <span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="groupLowerLimit" label="下限"></el-table-column>
					<el-table-column prop="groupLimit" label="上限"></el-table-column>
					<el-table-column prop="percentRate" label="百分比率（%）" :formatter="percentRateFormatter"></el-table-column>
					<el-table-column prop="quickCal" label="速算扣除数"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows">
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
			pageSize: 10,
			totalRows: 0,
			taxRateList: [
				{
					"applyNo": "",
					"groupId": "",
					"applyNo": "",
					"groupLimit": "",
					"groupLowerLimit": "",
					"remark": "",
					"percentRate": "5",
					"quickCal": ""
				}
			]
		}
	},
	components: {
		current
	},
	created() {
		//查询税率列表
		this.queryRateList();
	},
	methods: {
		percentRateFormatter(row, column) {
	      return row.percentRate==0 ? 0 : row.percentRate*100;
	    },
		handleAdd() {
			let groupName = sessionStorage.getItem('rateInfo_groupName');
			let groupId = sessionStorage.getItem('rateInfo_groupId');
			this.$router.push('/add_rate');
		},
		handleEdit(index, row) {
			sessionStorage.setItem('editRate_rateInfo', JSON.stringify(row));
            this.$router.push('/edit_rate');
		},
		handleDelete(index, row) {
        	const self = this;
            self.$confirm('此操作将会删除该条税率模版, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
            	let params = {
            		groupId: row.groupId,
            		applyNo: row.applyNo
            	};
            	//删除税率信息
            	self.deleteTaxRateCtrl(params);
            	
            }).catch(() => {
                self.$message('您已取消操作！');
            });
        },
        handleCurrentChange(val) {
			this.pageNum = val;
			//分页查询税率列表
			this.queryRateList();
		},
		//查询个税列表
		queryRateList() {
			const self = this;
			let groupId = sessionStorage.getItem('rateInfo_groupId');
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				groupId: groupId
			};
			self.$axios.get(baseURL+'/taxRateCtrl/queryRateList', { params: params})
				.then((res) => {
					console.log("queryRateList",res);
					self.taxRateList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}).catch((err) => {
					console.log(err);
				})
		},
		//删除个税税率
		deleteTaxRateCtrl(params) {
			const self = this;
			self.$axios.put(baseURL+'/taxRateCtrl/delRate', params)
    		.then((res) => {
    			console.log(res);
    			if(res.data.code === "S00000") {
    				self.$message({ type: 'success', message: '删除成功!' });
    				
					//查询税率列表
					self.queryRateList();
    			} else {
    				console.log(err);
    			}
    			
    		}).catch((err) => {
    			console.log(err);
    		})
		}
	}
}
</script>

<style scoped>
.rate_info {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.icon-delete {
    display: inline-block;
    width: 24px;
    height: 24px;
	cursor: pointer;
    background: url('../../../../static/img/common/delete.png') center no-repeat;
}

</style>