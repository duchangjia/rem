<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">人事合同</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增合同</el-button>
            </el-col>

            <el-col :span="24" class="querybar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                  <el-col :span="5">
                    <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="合同类型">
                        <el-select v-model="filters.pactType">
                            <el-option label="劳动合同" value="01"></el-option>
                            <el-option label="保密协议" value="02"></el-option>
                        </el-select>
                    </el-form-item>
                  </el-col>
                  <div class="queryButton_wrapper">
                    <el-form-item>
                      <el-button @click="handleReset" class="btn-default">重置</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-button @click="handleQuery" class="btn-primary">查询</el-button>
                    </el-form-item>
                  </div>
                  
                </el-form>
            </el-col>
            <el-table stripe :data="pactListInfo" border>
                <el-table-column align="center" label="合同编号">
                    <template scope="scope">
                        <span @click="handlePactDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.pactNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="paperPactNo" label="纸质合同编号">
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
                <el-table-column align="center" label="操作" width="120">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="handlePChange(scope.$index, scope.row)">变更</el-button>
                        <el-button type="text" size="small" @click="handlePRenew(scope.$index, scope.row)">续签</el-button>
                        <!-- <el-button size="small" @click="handleTerminate(scope.$index, scope.row)">解除</el-button>
                        <el-button size="small" @click="handleProbation(scope.$index, scope.row)">试用</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
            </el-pagination>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      filters: {
        custName: "",
        pactType: ""
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      pactListInfo: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.custName = "";
    this.filters.pactType = "";
    this.getPactList(); //初始查询合同列表
  },
  methods: {
    getPactList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        custName: self.filters.custName,
        pactType: self.filters.pactType
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactList", { params: params })
        .then(res => {
          console.log(res);
          self.pactListInfo = res.data.data.models;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    pactTypeFormatter(row, column) {
      return row.pactType == "01"
        ? "劳动合同"
        : row.pactType == "02" ? "保密协议" : "其他";
    },
    pactStatusFormatter(row, column) {
      return row.pactStatus == "01"
        ? "试用"
        : row.pactStatus == "02"
          ? "有效"
          : row.pactStatus == "03"
            ? "提前解除"
            : row.pactStatus == "04" ? "到期解除" : "其他";
    },
    dateFormat(row, column) {},
    handlePactDetail(index, row) {
      this.$router.push({
        name: "detail_contract",
        params: {
          pactNo: row.pactNo,
          userNo: row.userNo
        }
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getPactList(); //分页查询合同列表
    },
    handleReset() {
      this.filters.custName = "";
      this.filters.pactType = "";
    },
    handleQuery() {
      this.getPactList(); //根据条件查询合同列表
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
    handleDelete(index, row) {
      this.$confirm("此操作将会删除该条合同, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .put("/iem_hrm/pact/deletePact?pactNo=" + row.pactNo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.getPactList();
              } else this.$message.error("操作失败");
            })
            .catch(() => {
              this.$message.error("操作失败");
            });
        })
        .catch(() => {
          this.$message("您已取消删除！");
        });
    },
    handlePChange(index, row) {
      this.$router.push({
        name: "add_pactChange",
        params: {
          pactNo: row.pactNo,
          userNo: row.userNo
        }
      });
    },
    handlePRenew(index, row) {
      this.$router.push({
        name: "add_pactRenew",
        params: {
          pactNo: row.pactNo,
          userNo: row.userNo
        }
      });
    },
    handleTerminate(index, row) {},
    handleProbation(index, row) {}
  }
};
</script>

<style>
</style>
