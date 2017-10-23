<template>
    <div class="pact_mgmt">
        <current yiji="薪酬福利" erji="薪酬基数设置">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">薪酬基数设置</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增</el-button>
            </el-col>

            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item label="工号">
                        <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-left:10px;">
                        <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <el-table stripe :data="payBaseInfoList" border>
                <el-table-column align="center" label="工号">
                    <template scope="scope">
                        <span @click="handlePactDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.userNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="custName" label="姓名">
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
                <el-table-column align="center" prop="entryTime" label="录入时间">
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        // .get("/iem_hrm/pay/queryPayBaseInfoList", { params: params })
        .get("/iem_hrm/queryPayBaseInfoList", { params: params })
        .then(res => {
          console.log(res);
          self.payBaseInfoList = res.data.data.payBaseInfoArray;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handlePayBaseInfoDetail(index, row) {},
    handleCurrentChange(val) {},
    handleQuery() {},
    handleAdd() {
      this.$router.push({
        name: "add_payBaseInfo"
      });
    },
    handleEdit(index, row) {},
    handleDelete(index, row) {}
  }
};
</script>


<style>
.pact_mgmt {
  padding: 0 0 20px 20px;
}
</style>
