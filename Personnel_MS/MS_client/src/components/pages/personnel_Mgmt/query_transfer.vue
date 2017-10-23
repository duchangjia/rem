<template>
    <div class="pact_mgmt">
        <current yiji="人事事务" erji="人事调动">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">人事调动</span>
            </el-col>

            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item label="工号">
                        <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                    	<el-input v-model="filters.userName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-left:10px;">
                        <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <el-table stripe :data="pactListInfo" border>
                <el-table-column align="center" label="工号">
                    <template scope="scope">
                        <span @click="handlePactDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="userName" label="姓名">
                </el-table-column>
                <el-table-column align="center" prop="compName" label="公司名称">
                </el-table-column>
                <el-table-column align="center" prop="departName" label="部门名称">
                </el-table-column>
                <el-table-column align="center" prop="xingbie" label="性别">
                </el-table-column>
                <el-table-column align="center" prop="custPost" label="岗位">
                </el-table-column>
                <el-table-column align="center" prop="perendmFixed" label="职级">
                </el-table-column>
                <el-table-column align="center" prop="mobile" label="手机">
                </el-table-column>
                <el-table-column align="center" prop="status" label="状态">
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">调动</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">离职</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
            </el-pagination>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 5,
      totalRows: 1,
      filters: {
        userName: "",
        userNo: ""
      },
      pactListInfo: [
      	{
      		userNo: "0001",
      		userName: "小李",
      		compName: "广州分公司",
      		departName: "xxx",
      		xingbie: "男",
      		custPost: "java",
      		perendmFixed: "B9",
      		mobile: "1313131333",
      		status: "在职"
      		
      	}
      ]
    };
  },
  components: {
    current
  },
  created() {
    this.filters.name = "";
    this.filters.pactType = "";
    this.getPactList(); //初始查询合同列表
  },
  methods: {
    getPactList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        custName: self.filters.name,
        pactType: self.filters.pactType
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactList", { params: params })
        .then(res => {
          console.log(res);
          self.pactListInfo = res.data.data.list;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
//  pactStatusFormatter(row, column) {
//    return row.pactStatus == 1 ? "已生效" : row.pactStatus == 0 ? "未生效" : "异常";
//  },
    dateFormat(row, column) {
      
    },
    handlePactDetail(index, row) {
      this.$router.push({
        name: "detail_contract",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getPactList(); //分页查询合同列表
    },
    handleQuery() {
      console.log(
        "name:" + self.filters.name + " pactType:" + self.filters.pactType
      );
//    this.getPactList(); //根据条件查询列表
    },
    handleEdit(index, row) {
      this.$router.push({
        name: "edit_contract",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handleDelete(index, row) {
      
    }
};
</script>


<style>
.pact_mgmt {
  padding: 0 0 20px 20px;
}
</style>
