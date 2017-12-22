<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">人事调动</span>
                <div class="titleBtn_wrapper">
                  <el-button type="primary" class="btn-primary" @click="handleAdd">新增客户</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :sm="12" :md="6">
                  <el-form-item label="姓名">
                      <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <el-form-item label="合同类型">
                        <el-select v-model="filters.pactType">
                            <el-option label="劳动合同" value="01"></el-option>
                            <el-option label="保密协议" value="02"></el-option>
                            <el-option label="其他" value="99"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="handleQuery" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
				      </el-form>
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
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
            </el-pagination>

            </div>

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
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
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
    sessionStorage.setItem("contractInfo_activeName", ""); // 设置activeName为空
    sessionStorage.setItem("contractInfo_pactSubFlag", "false"); // 设置pactSubFlag为false
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
      this.$router.push("/add_contract");
    },
    handlePactDetail(index, row) {
      sessionStorage.setItem('contractInfo_pactNo', row.pactNo); // 暂存当前pactNo
      sessionStorage.setItem('contractInfo_userNo', row.userNo); // 暂存当前userNo
      this.$router.push("/detail_contract");
    },
    handleEdit(index, row) {
      sessionStorage.setItem('contractInfo_pactNo', row.pactNo); // 暂存当前pactNo
      this.$router.push("/edit_contract");
    },
    handleDelete(index, row) {
      this.$confirm("此操作将会删除该条合同, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/pact/deletePact?pactNo=" + row.pactNo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.getPactList();
              } else this.$message.error(res.data.retMsg);
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
      sessionStorage.setItem('contractInfo_pactNo', row.pactNo); // 暂存当前pactNo
      sessionStorage.setItem('contractInfo_userNo', row.userNo); // 暂存当前userNo
      this.$router.push("/add_pactChange");
    },
    handlePRenew(index, row) {
      sessionStorage.setItem('contractInfo_pactNo', row.pactNo); // 暂存当前pactNo
      sessionStorage.setItem('contractInfo_userNo', row.userNo); // 暂存当前userNo
      this.$router.push("/add_pactRenew");
    },
    handleTerminate(index, row) {},
    handleProbation(index, row) {}
  }
};
</script>

<style>
</style>
