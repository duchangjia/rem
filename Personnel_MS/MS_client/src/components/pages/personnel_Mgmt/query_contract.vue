<template>
    <div class="pact_mgmt">
        <current yiji="人事事务" erji="人事合同">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">人事合同</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增合同</el-button>
            </el-col>

            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item label="姓名">
                        <el-input v-model="filters.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="合同类型">
                        <el-select v-model="filters.pactType">
                            <el-option label="劳动合同" value="1"></el-option>
                            <el-option label="保密协议" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-left:10px;">
                        <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <el-table stripe :data="pactListInfo" border>
                <el-table-column align="center" label="合同编号">
                    <template scope="scope">
                        <span @click="handlePactDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.pactNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="pactName" label="合同名称">
                </el-table-column>
                <el-table-column align="center" prop="userNo" label="工号">
                </el-table-column>
                <el-table-column align="center" prop="custName" label="姓名">
                </el-table-column>
                <el-table-column align="center" prop="organName" label="公司名称">
                </el-table-column>
                <el-table-column align="center" prop="derpName" label="部门名称">
                </el-table-column>
                <el-table-column align="center" prop="pactType" label="合同类型" :formatter="pactTypeFormatter">
                </el-table-column>
                <el-table-column align="center" prop="pactStatus" label="合同状态" :formatter="pactStatusFormatter">
                </el-table-column>
                <el-table-column align="center" prop="signTime" label="签订日期">
                </el-table-column>
                <el-table-column align="center" prop="pactStartTime" label="合同开始日期">
                </el-table-column>
                <el-table-column align="center" prop="pactEndTime" label="合同结束日期">
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button size="small" @click="handleChange(scope.$index, scope.row)">变更</el-button>
                        <el-button size="small" @click="handleRenew(scope.$index, scope.row)">续签</el-button>
                        <!-- <el-button size="small" @click="handleTerminate(scope.$index, scope.row)">解除</el-button>
                        <el-button size="small" @click="handleProbation(scope.$index, scope.row)">试用</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageRows" layout="prev, pager, next, jumper" :total="totalRows">
            </el-pagination>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      filters: {
        name: "",
        pactType: ""
      },
      pageIndex: 1,
      pageRows: 7,
      totalRows: 20,
      pactListInfo: []
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    self.filters.name = "";
    self.filters.pactType = "";
    //初始查询合同列表
    self.getPactList();
  },
  methods: {
    getPactList() {
      const self = this;
      let params = {
        pageIndex: self.pageIndex,
        pageRows: self.pageRows,
        custName: self.filters.name,
        pactType: self.filters.pactType
      };
      self.$axios
        .get("ifdp/queryPactList", { params: params })
        .then(res => {
          self.pactListInfo = res.data.data.pactListArray;
        })
        .catch(() => {
          console.log("error");
        });
    },
    pactTypeFormatter(row, column) {
      return row.pactType == 1 ? "劳动合同" : row.pactType == 0 ? "保密协议" : "异常";
    },
    pactStatusFormatter(row, column) {
      return row.pactStatus == 1 ? "已生效" : row.pactStatus == 0 ? "未生效" : "异常";
    },
    handlePactDetail(index, row) {
      let params = {
        pactNo: row.pactNo
      };
      this.$router.push({
        name: "detail_contract",
        params: params
      });
    },
    handleCurrentChange(val) {
      const self = this;
      self.pageIndex = val;
      //分页查询合同列表
      self.getPactList();
    },
    handleQuery() {
      const self = this;
      console.log(
        "name:" + self.filters.name + " pactType:" + self.filters.pactType
      );
      //根据条件查询合同列表
      self.getPactList();
    },
    handleAdd() {
      this.$router.push({
        name: "add_contract"
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        name: "edit_contract",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handleDelete(index, row) {},
    handleChange(index, row) {
      this.$router.push({
        name: "add_pactChange",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handleRenew(index, row) {
      this.$router.push({
        name: "add_pactRenew",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handleTerminate(index, row) {},
    handleProbation(index, row) {}
  }
};
</script>


<style>
.pact_mgmt {
  padding: 0 0 20px 20px;
}
</style>
