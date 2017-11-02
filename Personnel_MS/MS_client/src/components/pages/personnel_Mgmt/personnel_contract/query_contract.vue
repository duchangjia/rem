<template>
    <div class="pact_mgmt">
        <current yiji="人事事务" erji="人事合同">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">人事合同</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增合同</el-button>
            </el-col>
            
            <el-col :span="24" class="querybar" style="padding:20px 0 0 0;">
                <el-form :inline="true" :model="filters">
                    <el-col :span="8">
                      <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="合同类型">
                        <el-select v-model="filters.pactType">
                            <el-option label="劳动合同" value="01"></el-option>
                            <el-option label="保密协议" value="02"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="合同状态">
                        <el-select v-model="filters.pactStatus">
                            <el-option label="已生效" value="01"></el-option>
                            <el-option label="未生效" value="02"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="24" class="button-wrap">
                      <el-button class="resetBtn" @click="handleReset">重置</el-button>
						          <el-button class="queryBtn" @click="handleQuery">查询</el-button>
                    </el-col>
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
                <el-table-column align="center" prop="organNo" label="公司名称" :formatter="organFormatter">
                </el-table-column>
                <el-table-column align="center" prop="derpNo" label="部门名称" :formatter="derpFormatter">
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
                        <el-button size="small" @click="handlePChange(scope.$index, scope.row)">变更</el-button>
                        <el-button size="small" @click="handlePRenew(scope.$index, scope.row)">续签</el-button>
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
        pactType: "",
        pactStatus: ""
      },
      pageNum: 1,
      pageSize: 7,
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
    this.filters.pactStatus = "";
    this.getPactList(); //初始查询合同列表
  },
  methods: {
    getPactList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        custName: self.filters.custName,
        pactType: self.filters.pactType,
        pactStatus: self.filters.pactStatus        
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
    organFormatter(row, column) {
      return row.organNo == "0001" ? "总公司" : row.organNo == "0002" ? "深圳分公司" : "异常";
    },
    derpFormatter(row, column) {
      return row.derpNo == "0001" ? "技术部" : row.derpNo == "0002" ? "财务部" : "异常";
    },
    pactTypeFormatter(row, column) {
      return row.pactType == "01" ? "劳动合同" : row.pactType == "02" ? "保密协议" : "异常";
    },
    pactStatusFormatter(row, column) {
      return row.pactStatus == "01" ? "已生效" : row.pactStatus == "02" ? "未生效" : "异常";
    },
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
        "custName:" + this.filters.custName + " pactType:" + this.filters.pactType
      );
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
      let targetPact = {};
      targetPact.pactNo = row.pactNo;
      console.log(targetPact);
      this.$confirm("此操作将会删除该条合同, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/pact/deletePact?pactNo=" + targetPact.pactNo, targetPact)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000")
                this.$message({ type: "success", message: "删除成功!" });
              else this.$message.error("删除合同失败！");
            })
            .catch(() => {
              this.$message.error("删除合同失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消删除合同！");
        });
    },
    handlePChange(index, row) {
      this.$router.push({
        name: "add_pactChange",
        params: {
          pactNo: row.pactNo
        }
      });
    },
    handlePRenew(index, row) {
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
