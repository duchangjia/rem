<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">调薪查询</span>
                <div class="titleBtn_wrapper">
                  <el-button type="primary" class="btn-primary" @click="handleAdd">调薪</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :sm="12" :md="6">
                   <el-form-item label="开始时间" prop="startTime">
                        <el-date-picker type="date" placeholder="选择日期" v-model="filters.startTime" @change="startTimeChange" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <el-form-item label="结束时间" prop="endTime">
                        <el-date-picker type="date" placeholder="选择日期" v-model="filters.endTime" :picker-options="endTimeOption" @change="endTimeChange" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="handleQuery" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
				      </el-form>
              <el-table stripe :data="payChangeInfoList" border>
                <el-table-column align="center" label="调薪编号">
                    <template scope="scope">
                        <span @click="handlePayChangeInfoDetail(scope.$index, scope.row)" class="link">{{ scope.row.applyNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="userNo" label="工号">
                </el-table-column>
                <el-table-column align="center" prop="custName" label="姓名">
                </el-table-column>
                <el-table-column align="center" prop="nWagesBase" label="调整后基本工资">
                </el-table-column>
                <el-table-column align="center" prop="nWagesPerf" label="调整后绩效工资">
                </el-table-column>
                <el-table-column align="center" prop="nPostPension" label="调整后岗位津贴">
                </el-table-column>
                <el-table-column align="center" prop="nOtherPension" label="调整后其他补贴">
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
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
            </el-pagination>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    let that = this;
    return {
      filters: {
        startTime: "",
        endTime: ""
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      payChangeInfoList: [],
      userNo: "",
      endTimeOption: {
        disabledDate(time) {
          return time.getTime() < new Date(that.filters.startTime).getTime();
        }
      },
    };
  },
  components: {
    current
  },
  created() {
    this.filters.startTime = "";
    this.filters.endTime = "";
    this.userNo = sessionStorage.getItem('payChangeInfo_userNo');
    this.getPayChangeInfoList(); //初始查询薪酬基数列表
  },
  methods: {
    getPayChangeInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        startTime: self.filters.startTime,
        endTime: self.filters.endTime,
        userNo: self.userNo
      };
      self.$axios
        .get("/iem_hrm/epPayChageInf/queryEpPayChageInfList", { params: params })
        .then(res => {
          console.log('payChangeInfoList',res);
          self.payChangeInfoList = res.data.data.list;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getPayChangeInfoList(); //分页查询调薪基数列表
    },

    startTimeChange(val) {
      this.filters.startTime = val;
    },
    endTimeChange(val) {
      this.filters.endTime = val;
    },
    handleReset() {
      this.filters.startTime = "";
      this.filters.endTime = "";
    },
    handleQuery() {
      this.getPayChangeInfoList(); //根据条件查询调薪基数列表
    },
    handleAdd() {
      this.$router.push("/add_payChangeInfo");
    },
    handlePayChangeInfoDetail(index, row) {
      sessionStorage.setItem('payChangeInfo_applyNo', row.applyNo); // 暂存当前applyNo
      this.$router.push({
        name: "detail_payChangeInfo",
        params: {
          applyNo: row.applyNo,
          userNo: row.userNo
        }
      });
    },
    handleEdit(index, row) {
      sessionStorage.setItem('payChangeInfo_applyNo', row.applyNo); // 暂存当前applyNo
      this.$router.push({
        name: "edit_payChangeInfo",
        params: {
          applyNo: row.applyNo,
          userNo: row.userNo
        }
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将会删除该条调薪信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/epPayChageInf/delEpPayChageInf?applyNo=" + row.applyNo + "&userNo=" + row.userNo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.getPayChangeInfoList();
              }
              else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消操作！");
        });
    }
  }
};
</script>


<style>
</style>
