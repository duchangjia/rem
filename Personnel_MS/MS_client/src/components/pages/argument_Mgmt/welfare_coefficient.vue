<template>
	<div class="welfare_coefficient">
		<current yiji="参数管理" erji="业务参数" sanji="福利缴纳系数设置"></current>
		<div class="queryContent_wrapper">
			<div class="titleBar">
				<span class="title-text">福利缴纳系数设置</span>
				<div class="titleBtn_wrapper">
					<el-button type="primary" class="btn-primary" @click="addWelfare()">新增</el-button>
				</div>
			</div>
			<div class="queryContent_inner">
				<el-table :data="payTemplatesList" border stripe style="width: 100%">
					<el-table-column prop="applyNo" label="模版编号">
						<template scope="scope">
					        <span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>
				      	</template>
					</el-table-column>
					<el-table-column prop="applyName" label="模版名称"></el-table-column>
					<el-table-column prop="remark" label="备注"></el-table-column>
					<el-table-column prop="createdBy" label="创建createdBy"></el-table-column>
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
			payTemplatesList: [
				{
					applyNo: "00001",
					applyName: "广州地区缴纳",
					remark: "",
					createdBy: "",
					createdDate: ""
				},
				{
					applyNo: "00002",
					applyName: "深圳地区缴纳",
					remark: "",
					createdBy: "",
					createdDate: ""
				},
				{
					applyNo: "00003",
					applyName: "东莞地区缴纳",
					remark: "",
					createdBy: "",
					createdDate: ""
				}
			]
		}
	},
	components: {
		current
	},
	created() {
		
		//查询福利缴纳系数模版列表
		this.queryInsurancePayTemplates();
	},
	methods: {
		createdDateFormatter(row, column) {
			let time = row.createdDate;
			return moment(time).format('YYYY-MM-DD');
		},
		addWelfare() {
			this.$router.push('/add_welfare');
		},
		handleEdit(index, row) {
            this.$router.push({
            	name: 'welfare_info',
            	params: {
            		applyNo: row.applyNo
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
            		applyNo: row.applyNo
            	};
            	//删除福利系数模版
            	self.deleteInsurancePayTemplate(params);
            	
            }).catch(() => {
                self.$message('您已取消操作！');
            });
        },
        handleCurrentChange(val) {
			this.pageNum = val;
			//分页查询福利缴纳系数模版列表
			this.queryInsurancePayTemplates();
		},
		//查询福利缴纳系数模版列表
		queryInsurancePayTemplates() {
			const self = this;
			let params = {
				pageNum: self.pageNum,
				pageSize: self.pageSize
			}
			self.$axios.get(baseURL+'/InsurancePayTemplate/queryInsurancePayTemplates/'+ params.pageNum + '/' + params.pageSize)
			.then(function(res) {
				console.log('res',res);
				if(res.data.code === "S00000") {
					self.payTemplatesList = res.data.data.list;
					self.pageNum = params.pageNum;
					self.totalRows = Number(res.data.data.total);
				}
				
			}).catch(function(err) {
				console.log(err)
			})
		},
		//删除保险系数缴纳模板
		deleteInsurancePayTemplate(params) {
			const self = this;
			self.$axios.delete(baseURL+'/InsurancePayTemplate/deleteInsurancePayTemplate/' + params.applyNo)
    		.then(function(res) {
    			console.log(res);
    			if(res.data.code === "S00000") {
    				self.$message({ type: 'success', message: res.data.retMsg });
					
					//查询福利缴纳系数模版列表
					self.queryInsurancePayTemplates(params);
    			}
    			
    		}).catch(function(err) {
    		})
		}
	}
}
</script>

<style scoped>
.welfare_coefficient {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.welfare_coefficient .icon-delete {
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