<template>
    <div class="paybaseinfo_mgmt">
        <current yiji="薪酬福利" erji="薪酬基数设置">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">薪酬基数设置</span>
                <div style="float:right;">
                  <el-upload class="upload-demo span-icon" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
                    <el-button class="icon-import" @click="handleImport" title="批量导入"></el-button>
                  </el-upload>
                  <el-button class="span-icon icon-export" @click="handleExport" title="导出"></el-button>
                  <el-button class="span-icon icon-download" @click="handleDownload" title="模板下载"></el-button>                  
                  <el-button type="primary" @click="handleAdd" class="toolBtn">新增</el-button>
                </div>
            </el-col>
            <el-col :span="24" class="querybar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                  <el-col :span="5">
                    <el-form-item label="工号">
                        <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-form-item>
                      <el-button @click="handleReset" class="resetBtn">重置</el-button>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                  </el-form-item>
                </el-form>
            </el-col>

            <el-table stripe :data="payBaseInfoList" border>
                <el-table-column align="center" label="工号">
                    <template scope="scope">
                        <span @click="handlePayBaseInfoDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="userName" label="姓名">
                </el-table-column>
                <el-table-column align="center" prop="wagesBase" label="基本工资">
                </el-table-column>
                <el-table-column align="center" prop="wagesPerf" label="绩效工资">
                </el-table-column>
                <el-table-column align="center" prop="postPension" label="岗位津贴">
                </el-table-column>
                <el-table-column align="center" prop="otherPension" label="其他补贴">
                </el-table-column>
                <el-table-column align="center" prop="endmBase" label="养老保险基数">
                </el-table-column>
                <el-table-column align="center" prop="houseBase" label="公积金基数">
                </el-table-column>
                <el-table-column align="center" prop="createdDate" label="录入时间">
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template scope="scope">
                        <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
                        <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
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
        userNo: "",
        custName: ""
      },
      pageNum: 1,
      pageSize: 7,
      totalRows: 30,
      payBaseInfoList: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.userNo = "";
    this.filters.custName = "";
    this.getPayBaseInfoList(); //初始查询薪酬基数列表
  },
  methods: {
    getPayBaseInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        userNo: self.filters.userNo,
        custName: self.filters.custName
      };
      self.$axios
        .get("/iem_hrm/pay/queryPayBaseInfoList", { params: params })
        .then(res => {
          console.log(res);
          self.payBaseInfoList = res.data.data.models;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handlePayBaseInfoDetail(index, row) {
      this.$router.push({
        name: "detail_payBaseInfo",
        params: {
          userNo: row.userNo
        }
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getPayBaseInfoList(); //分页查询薪酬基数列表
    },
    handleReset() {
      this.filters.userNo = "";
      this.filters.custName = "";
    },
    handleQuery() {
      console.log(
        "userNo:" + this.filters.userNo + " custName:" + this.filters.custName
      );
      this.getPayBaseInfoList(); //根据条件查询薪酬基数列表
    },
    handleImport() {},
    handleExport() {
      const self = this;
      self.$axios
        .get("/iem_hrm/pay/payBaseDataExport", { params: params })
        .then(res => {
          console.log(res);
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleDownload() {},
    handleAdd() {
      this.$router.push({
        name: "add_payBaseInfo"
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        name: "edit_payBaseInfo",
        params: {
          userNo: row.userNo
        }
      });
    },
    handleDelete(index, row) {
      const self = this;
      let userNo = row.userNo;
      this.$confirm("此操作将会删除该条薪酬基数信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/pay/deletePayBaseInfo/" + userNo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "删除成功!" });
                this.getPayBaseInfoList();
              }
              else this.$message.error("删除薪酬基数信息失败！");
            })
            .catch(() => {
              this.$message.error("删除薪酬基数信息失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消删除薪酬基数信息！");
        });
    }
  }
};
</script>


<style>
.paybaseinfo_mgmt {
  padding: 0 0 20px 20px;
}
</style>
