<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="调薪管理">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">调薪管理</span>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :sm="12" :md="5">
                   <el-form-item label="工号">
                      <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <el-form-item label="姓名">
                        <el-input v-model="filters.custName" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :sm="12" :md="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="handleQuery" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
				      </el-form>
              <el-table stripe :data="custInfoList" border>
                <el-table-column align="center" label="工号">
                    <template scope="scope">
                        <span @click="handleCustInfoDetail(scope.$index, scope.row)" class="link">{{ scope.row.userNo }}</span>
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
                <el-table-column align="center" prop="custPost" label="岗位" :formatter="custPostFormatter">
                </el-table-column>
                <el-table-column align="center" prop="custClass" label="职级" :formatter="custClassFormatter">
                </el-table-column>
                <el-table-column align="center" prop="mobileNo" label="手机">
                </el-table-column>
                <el-table-column align="center" prop="custStatus" label="状态"  :formatter="custStatusFormatter">
                </el-table-column>
                <el-table-column align="center" label="操作">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="handlePayChange(scope.$index, scope.row)">调薪</el-button>
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
    return {
      filters: {
        userNo: "",
        custName: ""
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      custInfoList: [],
      custPostList: [],
      custClassList: [],
      custStatusList: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.userNo = "";
    this.filters.custName = "";
    this.getCustInfoList(); //初始查询员工列表
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
    this.getCustStatusList(); //查询员工状态
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
        .get("/iem_hrm/CustInfo/queryCustInfList", { params: params })
        .then(res => {
          console.log('custInfoList',res);
          self.custInfoList = res.data.data.list;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getCustPostList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST")
        .then(res => {
          if (res.data.code === "S00000") {
            self.custPostList = res.data.data;
          }
        })
        .catch(err => {
          console.log("error");
        });
    },
    getCustClassList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED")
        .then(res => {
          if (res.data.code === "S00000") {
            self.custClassList = res.data.data;
          }
        })
        .catch(err => {
          console.log("error");
        });
    },
    getCustStatusList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_STATUS")
        .then(res => {
          if (res.data.code === "S00000") {
            self.custStatusList = res.data.data;
          }
        })
        .catch(err => {
          console.log("error");
        });
    },
    
    custSexFormatter(row, column) {
      return row.sex == "01" ? "男" : row.sex == "02" ? "女": row.sex == "99" ? "其他" : "";
    },
    custPostFormatter(row, column) {
      let custPost = ""
      this.custPostList.forEach(function(item) {
        if(row.custPost == item.paraValue) {
            custPost =  item.paraShowMsg;
        }
      }, this);
      return custPost;
    },
    custClassFormatter(row, column) {
      let custClass = ""
      this.custClassList.forEach(function(item) {
        if(row.custClass == item.paraValue) {
            custClass =  item.paraShowMsg;
        }
      }, this);
      return custClass;
    },
    custStatusFormatter(row, column) {
      let custStatus = ""
      this.custStatusList.forEach(function(item) {
        if(row.custStatus == item.paraValue) {
            custStatus =  item.paraShowMsg;
        }
      }, this);
      return custStatus;
    },
    handleCustInfoDetail(index, row) {
      let userNo = row.userNo;
      this.$router.push({
        name:'archives_detail',
        query:{ userNo }
      });
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
        "userNo:" + this.filters.userNo + " custName:" + this.filters.custName
      );
      this.getCustInfoList(); //根据条件查询员工列表
    },
    handlePayChange(index, row) {
      sessionStorage.setItem('payChangeInfo_userNo', row.userNo); // 暂存当前userNo
      
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
</style>
