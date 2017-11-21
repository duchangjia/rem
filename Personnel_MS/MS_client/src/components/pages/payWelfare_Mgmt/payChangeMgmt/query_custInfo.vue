<template>
    <div class="paybaseinfo_mgmt">
        <current yiji="薪酬福利" erji="调薪管理">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">调薪管理</span>
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
                      <el-button @click="handleReset" class="resetBtn" style="margin-right: 10px;">重置</el-button>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                  </el-form-item>
                </el-form>
            </el-col>

            <el-table stripe :data="custInfoList" border>
                <el-table-column align="center" label="工号">
                    <template scope="scope">
                        <span @click="handleCustInfoDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="custName" label="姓名">
                </el-table-column>
                <el-table-column align="center" prop="organName" label="公司名称">
                </el-table-column>
                <el-table-column align="center" prop="derpName" label="部门名称">
                </el-table-column>
                <el-table-column align="center" prop="sex" label="性别" :formatter="custSexFormatter">
                </el-table-column>
                <el-table-column align="center" prop="custPost" label="岗位">
                </el-table-column>
                <el-table-column align="center" prop="custClass" label="职级" :formatter="custClassFormatter">
                </el-table-column>
                <el-table-column align="center" prop="mobileNo" label="手机">
                </el-table-column>
                <el-table-column align="center" prop="custStatus" label="状态"  :formatter="custStatusFormatter">
                </el-table-column>
                <el-table-column align="center" label="操作">
                  <template scope="scope">
                    <el-button size="small" @click="handlePayChange(scope.$index, scope.row)">调薪</el-button>
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
      pageSize: 10,
      totalRows: 1,
      custInfoList: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.userNo = "";
    this.filters.custName = "";
    this.getCustInfoList(); //初始查询员工列表
  },
  methods: {
    getCustInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        userNo: self.filters.userNo,
        custName: self.filters.custName
      };
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfList")
        .then(res => {
          console.log('custInfoList',res);
          self.custInfoList = res.data.data.list;
        })
        .catch(() => {
          console.log("error");
        });
    },
    
    custSexFormatter(row, column) {
      return row.sex == "01" ? "男" : row.sex == "02" ? "女": row.sex == "99" ? "其他" : "";
    },
    custClassFormatter(row, column) {
      return row.custClass == "B10" ? "B10-初级软件工程师" : row.custClass == "B11" ? "B11-中级软件工程师": row.custClass == "B12" ? "B12-高级软件工程师" : "";
    },
    custStatusFormatter(row, column) {
      return row.custStatus == "01"
        ? "试用"
        : row.custStatus == "02"
          ? "在职"
          : row.custStatus == "03"
            ? "退休"
            : row.custStatus == "04"
              ? "离职"
              : row.custStatus == "05" ? "停薪留职" : "";
    },
    handleCustInfoDetail(index, row) {
      //   this.$router.push({
      //     name: "detail_payBaseInfo",
      //     params: {
      //       userNo: row.userNo
      //     }
      //   });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getCustInfoList(); //分页查询员工列表
    },
    handleReset() {
      this.filters.userNo = "";
      this.filters.custName = "";
    },
    handleQuery() {
      console.log(
        "userNo:" + self.filters.userNo + " custName:" + self.filters.custName
      );
      this.getCustInfoList(); //根据条件查询员工列表
    },
    handlePayChange(index, row) {
      this.$router.push({
        name: "query_payChangeInfo",
        params: {
          userNo: row.userNo
        }
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
