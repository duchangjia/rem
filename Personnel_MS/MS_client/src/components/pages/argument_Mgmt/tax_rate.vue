<template>
	<div class="tax_rate">
		<current yiji="参数管理" erji="业务参数" sanji="个人所得税税率设置"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">个人所得税税率设置</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="addRateGroup()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-table :data="taxRateGroupList" border stripe style="width: 100%">
					<el-table-column prop="groupName" label="组名称">
						<template scope="scope">
					        <span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.groupName }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="remark" label="备注"></el-table-column>
					<el-table-column prop="startTime" label="生效日期" :formatter="startTimeFormatter"></el-table-column>
					<el-table-column prop="endTime" label="失效日期" :formatter="endTimeFormatter"></el-table-column>
					<el-table-column prop="createdBy" label="创建ID"></el-table-column>
					<el-table-column prop="createdDate" label="创建时间" :formatter="createdDateFormatter"></el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
						</template>	
					</el-table-column>
				</el-table>
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
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
					groupName: "",
					remark: "",
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
		this.selectTaxRateGroup();
	},
	methods: {
		startTimeFormatter(row, column) {
			let time = row.startTime;
			return time ? moment(time).format('YYYY-MM-DD') : null;
		},
		endTimeFormatter(row, column) {
			let time = row.endTime;
			return time ? moment(time).format('YYYY-MM-DD') : null;
		},
		createdDateFormatter(row, column) {
			let time = row.createdDate;
			return  time ? moment(time).format('YYYY-MM-DD') : null;
		},
		addRateGroup() {
			this.$router.push('/add_rateGroup');
		},
		handleEdit(index, row) {
			sessionStorage.setItem('groupId',row.groupId);
			sessionStorage.setItem('groupName',row.groupName);
            this.$router.push({
            	name: 'rate_info',
				// 如果这里你测试不成功，就把params改用query,对应页面用query接收
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
			this.pageNum = val;
			this.selectTaxRateGroup();
		},
		//查询个税组列表
		selectTaxRateGroup() {
			const self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				isDelete: "1"
			};
			self.$axios.get(baseURL+'/taxRateGroup/queryRGroupList',{params: params})
				.then(function(res) {
					console.log("queryRGroupList",res);
					self.taxRateGroupList = res.data.data.list;
					self.pageNum = params.pageNum;
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
    				self.$message({ type: 'success', message: res.data.retMsg });
					//查询个税组列表
					self.selectTaxRateGroup();
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

<style scoped>
.tax_rate {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.icon-delete {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('../../../../static/img/common/delete.png') center no-repeat;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>