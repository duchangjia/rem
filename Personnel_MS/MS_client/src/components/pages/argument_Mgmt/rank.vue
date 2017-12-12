<template>
	<div class="query_wrapper">
		<current yiji="参数管理" erji="业务参数" sanji="职级薪酬标准设置"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">职级薪酬标准设置</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="addWelfare()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-form :model="ruleForm2" :inline="true" ref="ruleForm2" class="demo-ruleForm">
					<el-col :sm="12" :md="6">
						<el-form-item label="公司名称" prop="organNo">
							<el-select v-model="ruleForm2.organNo" value-key="organNo">
								<el-option v-for="item in compList" :key="item.organNo" :label="item.organName" :value="item.organNo"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :sm="12" :md="6">
						<div class="queryButton_wrapper">
							<el-button class="btn-default" @click="resetForm()">重置</el-button>
							<el-button type="primary" class="btn-primary" @click="queryForm('ruleForm2')">查询</el-button>
						</div>
					</el-col>
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
				<el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows">
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
			ruleForm2: {
				organNo: ""
			},
			dataList: [
				{
					applyNo: "",
					applyName: "",
					organName: '',
					rank: '',
					salaryFloor: '',
					salaryTop: '',
					businessStandard: '',
					remark: "",
					createdBy: "",
					createdDate: ""
				}
			],
			//公司列表
			compList: []
		}
	},
	created() {
		this.ruleForm2.organNo = '';
		//查询职级薪酬列表
		this.queryCParmList();
		//查询公司列表
		this.queryCompList();
	},
	components: {
		current
	},
	methods: {
		remarkFormatter(row,column) {
			return row.remark.length>10?(row.remark.substr(0,10)+'......'):row.remark;
		},
		createdDateFormatter(row, column) {
	      return row.createdDate ? moment(row.createdDate).format('YYYY-MM-DD') : null;
	    },
		addWelfare() {
			this.$router.push('/add_rank');
		},
		resetForm() {
			this.ruleForm2.organNo = '';
		},
		queryForm() {
			//查询职级薪酬列表
			this.queryCParmList();
			
		},
		handleEdit(index, row) {
			sessionStorage.setItem('editRank_applyNo', row.applyNo);
			sessionStorage.setItem('editRank_organNo', row.organNo);
            this.$router.push('/edit_rank');
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
			this.pageNum = val;
			//分页查询职级薪酬列表
			this.queryCParmList();
			
		},
		queryCParmList() {
			const self = this;
			let params = {
				"pageNum": self.pageNum,
				"pageSize": self.pageSize,
				organNo: self.ruleForm2.organNo
			};
			self.$axios.get(baseURL+'/RankSalaryTemplate/queryCParmList', {params: params})
			.then((res) => {
				console.log('list',res);
				self.dataList = res.data.data.list;
				self.pageNum = params.pageNum;
				self.totalRows = Number(res.data.data.total);
			}).catch((err) => {
				console.log(err);
			})
		},
		deleteCparm(params) {
			const self = this;
			self.$axios.delete(baseURL + '/RankSalaryTemplate/delCparm/' + params.organNo + '/'+params.applyNo)
    		.then((res) => {
    			console.log('del',res);
    			if(res.data.code === "S00000") {
    				self.$message({ type: 'success', message: '操作成功!' });
					
    				//查询职级薪酬列表
					self.queryCParmList();
    			}
    			
    		}).catch((err) => {
    		})
		},
		queryCompList() {
			let self = this;
			self.$axios.get(baseURL+'/organ/selectCompanyByUserNo')
			.then((res) => {
				console.log('CompList',res);
				self.compList = res.data.data;
			}).catch((err) => {
				console.log(err);
			})
		},
	}
}
</script>

<style scoped>

.icon-delete {
    display: inline-block;
    width: 24px;
    height: 24px;
	cursor: pointer;
    background: url('../../../../static/img/common/delete.png') center no-repeat;
}
.link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
</style>