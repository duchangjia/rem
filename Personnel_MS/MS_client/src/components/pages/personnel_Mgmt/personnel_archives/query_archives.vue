<template>
    <div class="query_archives query_wrapper">
        <current yiji="人事事务" erji="人事档案"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">人事档案</span>
                <div class="titleBtn_wrapper">
                    <el-button class="btn-primary" @click="add">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
                <el-form class="demo-ruleForm">
                    <el-col :sm="12" :md="6">
                        <el-form-item label="公司">
                            <el-select v-model="searchInfo.organNo" placeholder="请选择公司名称" @change="selectDep(searchInfo.organNo)">
                                <el-option :label="item.organName" :value="item.organNo" v-for="item in basicInfo.company"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="部门">
                            <el-select v-model="searchInfo.derpNo" placeholder="请选择部门名称">
                                <el-option :label="item.derpName" :value="item.derpNo" v-for="item in basicInfo.department"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="姓名">
                            <el-input placeholder="请输入工号或姓名" v-model="searchInfo.nameOrNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="状态">
                            <el-select v-model="searchInfo.custStatus">
                                <el-option label="试用期" value="01"></el-option>
                                <el-option label="合同期" value="02"></el-option>
                                <el-option label="已退休" value="03"></el-option>
                                <el-option label="已离职" value="04"></el-option>
                                <el-option label="停薪留职" value="05"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <div class="queryButton_wrapper">
                        <el-button class="resetform btn-default" @click="reset">重置</el-button>
                        <el-button class="btn-primary" @click="search">查询</el-button>
                    </div>
                </el-form>
                <el-table :data="table.td" border stripe style="width: 100%">
                    <el-table-column prop="userNo" label="工号">
                        <template scope="scope">
                        <span class="link" @click="detailInfo(scope.row.userNo)">{{ scope.row.userNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="custName" label="姓名"></el-table-column>
                    <el-table-column prop="organName" label="公司名称"></el-table-column>
                    <el-table-column prop="derpName" label="部门名称"></el-table-column>
                    <el-table-column prop="sex" label="性别" :formatter="percentRateFormatter"></el-table-column>
                    <el-table-column prop="custPost" label="岗位" :formatter="percentRateFormatter3"></el-table-column>
                    <el-table-column prop="mobileNo" label="手机"></el-table-column>
                    <el-table-column prop="entryTime" label="入职时间"></el-table-column>
                    <el-table-column prop="custStatus" label="状态" :formatter="percentRateFormatter2"></el-table-column>
                    <el-table-column label="资产">
                        <template scope="scope">
                            <el-button type="text" class="special" size="small" @click="see(scope.row.userNo)">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="fenye.pageSize"
                        layout="total,prev, pager, next, jumper"
                        :total="fenye.total">
                </el-pagination>
            </div>
            <div class="dialog-wrapper">
                <el-dialog title="个人资产查询" :visible.sync="dialogTableVisible">
                    <div class="tishi">若实际使用的IT资产情况与以下显示信息不符，还请及时与XXXXXX联系核实并更改以确保您名下资产的准确性</div>
                    <el-table :data="gridData"
                              stripe
                              border
                    >
                        <!--<el-table-column property="num" label="序号" align="center"></el-table-column>-->
                        <!--<el-table-column property="propp" label="资产属性" align="center"></el-table-column>-->
                        <!--<el-table-column property="oldaddress" label="旧编码" align="center"></el-table-column>-->
                        <el-table-column property="assetName" label="资产名称" align="center"></el-table-column>
                        <el-table-column property="assetNo" label="资产编码" align="center"></el-table-column>
                        <el-table-column property="organName" label="公司" align="center"></el-table-column>
                        <el-table-column property="assetType" label="资产类型" align="center" :formatter="assetTypeFormatter"></el-table-column>
                        <!--<el-table-column property="city" label="存放城市" align="center"></el-table-column>-->
                        <el-table-column property="custName" label="使用人" align="center"></el-table-column>
                    </el-table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange2"
                            :page-size="fenye2.pageSize"
                            small
                            layout="total, prev, pager, next"
                            :total="fenye2.total">
                    </el-pagination>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      dialogTableVisible: false,
      basicInfo: {
        company: "",
        department: ""
      },
      gridData: [],
      searchInfo: {
        organNo: "",
        derpNo: "",
        nameOrNo: "",
        custStatus: ""
      },
      table: {
        th: ["工号", "姓名", "公司名称", "部门名称", "性别", "岗位", "手机", "入职时间", "状态", "资产"],
        td: []
      },
      fenye: {
        total: 0,
        pageSize: 10
      },
      fenye2: {
        total: 0,
        pageSize: 5
      },
      custPostList: [],
      custStatusList: [],
      assetTypeList: []
    };
  },
  created() {
    let self = this;
    self.$axios
      .get("/iem_hrm/CustInfo/queryCustInfList")
      .then(res => {
        self.table.td = res.data.data.list;
        this.fenye.total = res.data.data.total;
        this.fenye.pageSize = res.data.data.pageSize;
      })
      .catch(e => {
        console.log(e);
      });
    self.$axios
      .get("/iem_hrm/organ/selectCompanyByUserNo")
      .then(res => {
        self.basicInfo.company = res.data.data;
      })
      .catch(e => {
        console.log(e);
      });
    self.getCustPostList(); //查询岗位列表
    self.getCustStatusList(); //查询员工状态
    self.getAssetTypeList(); //查询资产类型
  },
  components: {
    current
  },
  methods: {
    add() {
      this.$router.push("add_archives");
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
    getAssetTypeList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=ASSET_TYPE")
        .then(res => {
          if (res.data.code === "S00000") {
            self.assetTypeList = res.data.data;
          }
        })
        .catch(err => {
          console.log("error");
        });
    },

    handleSizeChange() {},
    handleCurrentChange(val) {
      let self = this;
      let organNo = self.searchInfo.organNo;
      let derpNo = self.searchInfo.derpNo;
      let nameOrNo = self.searchInfo.nameOrNo;
      let custStatus = self.searchInfo.custStatus;
      let data = {
        organNo,
        derpNo,
        nameOrNo,
        custStatus,
        pageNum: val
      };
      for (var name in data) {
        if (data[name] == "") {
          delete data[name];
        }
      }
      //                let loadingInstance = this.$loading({
      //                    target: '.form-content',
      //                    lock: true,
      //                    text: '加载中',
      //                    customClass: 'loading-bg'
      //                })
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfList", { params: data })
        .then(res => {
          //                        loadingInstance.close()
          self.table.td = res.data.data.list;
          this.fenye.total = res.data.data.total;
          this.fenye.pageSize = res.data.data.pageSize;
        })
        .catch(e => {
          console.log(e);
        });
    },
    selectDep(organNo) {
      let data = { organNo };
      this.$axios
        .get("/iem_hrm/organ/selectChildDeparment", { params: data })
        .then(res => {
          this.searchInfo.derpNo = "";
          this.basicInfo.department = res.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    see(userNo) {
      let self = this;
      let data = {
        noNameEmail: userNo,
        pageSize: 5
      };
      this.dialogTableVisible = true;
      self.$axios
        .get("/iem_hrm/CustInfo/queryAllCustAsset", { params: data })
        .then(res => {
          self.gridData = res.data.data.list;
          self.gridData.userNo = userNo;
          self.fenye2.total = res.data.data.total;
          self.fenye2.pageSize = res.data.data.pageSize;
        })
        .catch(e => {
          console.log(e);
        });
    },
    detailInfo(userNo) {
      this.$router.push({ name: "archives_detail", query: { userNo } });
    },
    reset() {
      let self = this;
      self.searchInfo.organNo = "";
      self.searchInfo.derpNo = "";
      self.searchInfo.nameOrNo = "";
      self.searchInfo.custStatus = "";
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfList")
        .then(res => {
          self.table.td = res.data.data.list;
          this.fenye.total = res.data.data.total;
          this.fenye.pageSize = res.data.data.pageSize;
        })
        .catch(e => {
          console.log(e);
        });
    },
    search() {
      let self = this;
      let organNo = self.searchInfo.organNo;
      let derpNo = self.searchInfo.derpNo;
      let nameOrNo = self.searchInfo.nameOrNo;
      let custStatus = self.searchInfo.custStatus;
      let data = {
        organNo,
        derpNo,
        nameOrNo,
        custStatus
      };
      for (var name in data) {
        if (data[name] == "") {
          delete data[name];
        }
      }
      //                let loadingInstance = this.$loading({
      //                            target: '.form-content',
      //                            lock: true,
      //                            text: '加载中',
      //                            customClass: 'loading-bg'
      //                        })
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfList", { params: data })
        .then(res => {
          console.log(res);
          //                        loadingInstance.close()
          let length = res.data.data.list.length;
          if (!length) {
            self.$message({
              type: "error",
              message: "没有此信息"
            });
            self.table.td = res.data.data.list;
            this.fenye.total = res.data.data.total;
            this.fenye.pageSize = res.data.data.pageSize;
          } else {
            self.table.td = res.data.data.list;
            this.fenye.total = res.data.data.total;
            this.fenye.pageSize = res.data.data.pageSize;
          }
        })
        .catch(e => {
          //                        loadingInstance.close()
          self.$message({
            type: "error",
            message: "系统繁忙，请稍后再试"
          });
          console.log(e);
        });
    },

    handleSizeChange(val) {},
    handleCurrentChange2(val) {
      let self = this;
      let userNo = self.gridData.userNo;
      let data = {
        noNameEmail: userNo,
        pageNum: val,
        pageSize: 5
      };
      self.$axios
        .get("/iem_hrm/CustInfo/queryAllCustAsset", { params: data })
        .then(res => {
          self.gridData = res.data.data.list;
          self.gridData.userNo = userNo;
          self.fenye2.total = res.data.data.total;
          self.fenye2.pageSize = res.data.data.pageSize;
        })
        .catch(e => {
          console.log(e);
        });
    },
    percentRateFormatter(row, column) {
      return row.sex == "01"
        ? "男"
        : row.sex == "02" ? "女" : row.sex == "99" ? "其他" : "";
    },
    percentRateFormatter2(row, column) {
      let custStatus = "";
      this.custStatusList.forEach(function(item) {
        if (row.custStatus == item.paraValue) {
          custStatus = item.paraShowMsg;
        }
      }, this);
      return custStatus;
    },
    percentRateFormatter3(row, column) {
      let custPost = "";
      this.custPostList.forEach(function(item) {
        if (row.custPost == item.paraValue) {
          custPost = item.paraShowMsg;
        }
      }, this);
      return custPost;
    },
    assetTypeFormatter(row, column) {
      let assetType = "";
      this.assetTypeList.forEach(function(item) {
        if (row.assetType == item.paraValue) {
          assetType = item.paraShowMsg;
        }
      }, this);
      return assetType;
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.query_archives {
    .dialog-wrapper {
        .el-dialog--small {
            width: 85%;

            .el-dialog__header {
                background: #f4f4f4;
                height: 60px;

                .el-dialog__close {
                    color: #f90;
                }
            }

            .el-dialog__body {
                padding: 10px 20px 40px 20px;
                position: relative;

                .el-pagination {
                    position: absolute;
                    right: 23px;
                    bottom: 5px;
                }
            }
        }

        .tishi {
            font-family: PingFangSC-Light;
            font-size: 14px;
            color: #FF6666;
            margin-bottom: 8px;
        }

        .el-table .cell, .el-table th>div {
            padding: 0;
        }
    }

    .special {
        color: #f90;
    }
}
</style>

