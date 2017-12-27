<template>
  <div class="container-wrap">
    <current yiji="人事事务" erji="人事合同" sanji="合同详情">
    </current>
    <div class="content-wrapper">
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="合同基本情况" name="basicPactMsg">
          <div class="add-wrapper">
            <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="122px">
              <el-col :sm="24" :md="12">
                <el-form-item label="工号">
                  <el-input v-model="basicPactMsg.userNo" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="员工姓名">
                  <el-input v-model="basicPactMsg.custName" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="性别">
                  <el-input v-model="_sex" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="身份证">
                  <el-input v-model="basicPactMsg.certNo" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="公司名称">
                  <el-input v-model="basicPactMsg.organName" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="部门名称">
                  <el-input v-model="basicPactMsg.derpName" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同主体">
                  <el-input v-model="basicPactMsg.pactSubject" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同编号">
                  <el-input v-model="basicPactMsg.pactNo" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="纸质合同编号">
                  <el-input v-model="basicPactMsg.paperPactNo" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同名称">
                  <el-input v-model="basicPactMsg.pactName" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同类型" prop="pactType">
                  <el-input v-model="_pactType" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="签订日期" prop="signTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同开始日期" prop="pactStartTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStartTime" :disabled="true" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同结束日期" prop="pactEndTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactEndTime" :disabled="true" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同状态" prop="pactStatus">
                  <el-input v-model="_pactStatus" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="合同年限" prop="pactExpires">
                  <el-input v-model="basicPactMsg.pactExpires" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="终止日期" prop="pactStopTime">
                  <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :sm="24" :md="12">
                <el-form-item label="附件" prop="attachm">
                  <ul>
                    <li v-for="item in fileList" :key="item.fileId">
                      <span class="fileText">{{item.fileName + "." + item.fileSuffix}}</span>
                      <el-button class="downBtn" @click="handleDownloadFile(item)">下载</el-button>
                    </li>
                  </ul>
                </el-form-item>
              </el-col>
            </el-form>
            <el-form :model="basicPactMsg" :label-position="labelPosition" label-width="122px" style="margin-top:0;">
              <el-col :span="24">
                <el-form-item label="终止原因" prop="stopReason">
                  <el-input type="textarea" v-model="basicPactMsg.stopReason" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注" prop="remark">
                  <el-input type="textarea" v-model="basicPactMsg.remark" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label=" " prop="autoudFlag">
                  <el-checkbox v-model="_autoudFlag">自动更新员工资料</el-checkbox>
                </el-form-item>
              </el-col>
            </el-form>
          </div>
        </el-tab-pane>

        <el-tab-pane label="合同变更情况" name="changePactMsg">
          <div class="subtitlebar">
            <span class="title-text">合同变更情况</span>
            <el-button type="text" @click="handleAddPChange" class="addBtn">新增</el-button>
          </div>
          <div class="add-wrapper">
            <el-table stripe :data="PChangeListInfo" border>
              <el-table-column align="center" prop="pactNo" label="合同编号">
              </el-table-column>
              <el-table-column align="center" prop="pactName" label="合同名称">
              </el-table-column>
              <el-table-column align="center" label="变更编号">
                <template scope="scope">
                  <span @click="handlePChangeDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.changeId }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="custName" label="姓名">
              </el-table-column>
              <el-table-column align="center" prop="organName" label="公司名称">
              </el-table-column>
              <el-table-column align="center" prop="derpName" label="部门名称">
              </el-table-column>
              </el-table-column>
              <el-table-column align="center" prop="changeType" label="变更类型" :formatter="changeTypeFormatter">
              </el-table-column>
              <el-table-column align="center" prop="changeTime" label="变更时间">
              </el-table-column>
              <el-table-column align="center" label="操作" width="150">
                <template scope="scope">
                  <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
                  <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handlePChangePage" :page-size="pChangePage.pageSize" layout="total, prev, pager, next, jumper"
              :total="pChangePage.totalRows">
            </el-pagination>
          </div>
        </el-tab-pane>

        <el-tab-pane label="合同续签情况" name="renewPactMsg">
          <div class="subtitlebar">
            <span class="title-text">合同续签情况</span>
            <el-button type="text" @click="handleAddPRenew" class="addBtn">新增</el-button>
          </div>
          <div class="add-wrapper">
            <el-table stripe :data="PRenewListInfo" border>
              <el-table-column align="center" prop="pactNo" label="合同编号">
              </el-table-column>
              <el-table-column align="center" prop="pactName" label="合同名称">
              </el-table-column>
              <el-table-column align="center" label="续签编号">
                <template scope="scope">
                  <span @click="handlePRenewDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.renewId }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="custName" label="姓名">
              </el-table-column>
              <el-table-column align="center" prop="organName" label="公司名称">
              </el-table-column>
              <el-table-column align="center" prop="derpName" label="部门名称">
              </el-table-column>
              <el-table-column align="center" prop="renewType" label="续签类型" :formatter="renewTypeFormatter">
              </el-table-column>
              <el-table-column align="center" prop="renewTime" label="续签时间">
              </el-table-column>
              <el-table-column align="center" label="操作" width="150">
                <template scope="scope">
                  <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
                  <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handlePRenewPage" :page-size="pRenewPage.pageSize" layout="total, prev, pager, next, jumper"
              :total="pRenewPage.totalRows">
            </el-pagination>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import current from "../../../common/current_position.vue";
  export default {
    data() {
      return {
        activeName: "",
        pactSubFlag: "false",
        labelPosition: "right",
        userNo: "",
        pactNo: "",
        basicPactMsg: {},
        fileList: [],
        token: {
          Authorization: `Bearer ` + localStorage.getItem("access_token")
        },
        PChangeListInfo: [],
        PRenewListInfo: [],
        pChangePage: {
          pageNum: 1,
          pageSize: 10,
          totalRows: 1
        },
        pRenewPage: {
          pageNum: 1,
          pageSize: 10,
          totalRows: 1
        }
      };
    },
    components: {
      current
    },
    created() {
      this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
      this.userNo = sessionStorage.getItem("contractInfo_userNo");
      if (sessionStorage.getItem("contractInfo_activeName") != "") {
        this.activeName = sessionStorage.getItem("contractInfo_activeName");
        if (this.activeName == "changePactMsg") this.getPChangeList();
        if (this.activeName == "renewPactMsg") this.getPRenewList();
      } else {
        this.activeName = "basicPactMsg";
        this.getPactDetail(); // 初始查合同基本详情
      }
      console.log("详情页当前的activeTab", this.activeName);
    },
    computed: {
      _sex: function () {
        if (this.basicPactMsg.sex == "01") {
          return "男";
        } else if (this.basicPactMsg.sex == "02") {
          return "女";
        } else if (this.basicPactMsg.sex == "99") {
          return "其他";
        } else {
          return "";
        }
      },
      _pactType: function () {
        if (this.basicPactMsg.pactType == "01") {
          return "劳动合同";
        } else if (this.basicPactMsg.pactType == "02") {
          return "保密协议";
        } else if (this.basicPactMsg.pactType == "99") {
          return "其他";
        } else {
          return "";
        }
      },
      _pactStatus: function () {
        if (this.basicPactMsg.pactStatus == "01") {
          return "试用";
        } else if (this.basicPactMsg.pactStatus == "02") {
          return "有效";
        } else if (this.basicPactMsg.pactStatus == "03") {
          return "提前解除";
        } else if (this.basicPactMsg.pactStatus == "04") {
          return "到期解除";
        } else if (this.basicPactMsg.pactStatus == "99") {
          return "其他";
        } else {
          return "";
        }
      },
      _autoudFlag: {
        get: function () {
          if (
            this.basicPactMsg.autoudFlag == "01" ||
            this.basicPactMsg.autoudFlag == true
          ) {
            return true;
          } else if (
            this.basicPactMsg.autoudFlag == "02" ||
            this.basicPactMsg.autoudFlag == false
          ) {
            return false;
          }
        },
        set: function (val) {
          if (val == true) {
            this.basicPactMsg.autoudFlag = "01";
          } else {
            this.basicPactMsg.autoudFlag = "02";
          }
        }
      }
    },
    methods: {
      handleTabClick(tab, event) {
        console.log(tab.name);
        this.activeName = tab.name;
        sessionStorage.setItem("contractInfo_activeName", this.activeName); // 暂存当前activeName
        if (tab.name == "changePactMsg") this.getPChangeList();
        if (tab.name == "renewPactMsg") this.getPRenewList();
        if (tab.name == "basicPactMsg") this.getPactDetail();
      },
      getPactDetail() {
        const self = this;
        let params = {
          pactNo: self.pactNo
        };
        self.$axios
          .get("/iem_hrm/pact/queryPactDetail", {
            params: params
          })
          .then(res => {
            self.basicPactMsg = res.data.data;
            console.log("basicPactMsg", self.basicPactMsg);
            if (
              self.basicPactMsg.epFileManageList &&
              self.basicPactMsg.epFileManageList.length >= 1
            ) {
              self.fileList = self.basicPactMsg.epFileManageList;
            }
          })
          .catch(() => {
            console.log("error");
          });
      },
      getPChangeList() {
        const self = this;
        let params = {
          pageNum: self.pChangePage.pageNum,
          pageSize: self.pChangePage.pageSize,
          pactNo: self.pactNo
        };
        self.$axios
          .get("/iem_hrm/pact/queryPactChangeList", {
            params: params
          })
          .then(res => {
            console.log("pChangeList", res);
            self.PChangeListInfo = res.data.data.models;
            self.pChangePage.totalRows = res.data.data.total;
          })
          .catch(() => {
            console.log("error");
          });
      },
      getPRenewList() {
        const self = this;
        let params = {
          pageNum: self.pRenewPage.pageNum,
          pageSize: self.pRenewPage.pageSize,
          pactNo: self.pactNo
        };
        self.$axios
          .get("/iem_hrm/pact/queryPactRenewList", {
            params: params
          })
          .then(res => {
            console.log("pRenewList", res);
            self.PRenewListInfo = res.data.data.models;
            self.pRenewPage.totalRows = res.data.data.total;
          })
          .catch(() => {
            console.log("error");
          });
      },
      // 合同附件下载
      handleDownloadFile(file) {
        console.log(file);
        let params = {
          name: file.fileName + "." + file.fileSuffix,
          fileId: file.fileId
        };
        this.downloadFile(params);
      },
      downloadFile(params) {
        const self = this;
        self.$axios
          .get("/iem_hrm/file/downloadFile/" + params.fileId, {
            responseType: "blob"
          })
          .then(response => {
            const fileName = params.name;
            const blob = response.data;

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(blob, fileName);
            } else {
              let elink = document.createElement("a"); // 创建a标签
              elink.download = fileName;
              elink.style.display = "none";
              elink.href = URL.createObjectURL(blob);
              document.body.appendChild(elink);
              elink.click(); // 触发点击a标签事件
              document.body.removeChild(elink);
            }
          })
          .catch(e => {
            console.error(e);
            this.$message({
              message: "下载附件失败",
              type: "error"
            });
          });
      },

      changeTypeFormatter(row, column) {
        return row.changeType == "01" ?
          "条款变更" :
          row.changeType == "99" ? "其他" : "";
      },
      renewTypeFormatter(row, column) {
        return row.renewType == "01" ? "合同延期" : row.renewType == "99" ? "其他" : "";
      },
      handleEdit(index, row) {
        if (this.activeName == "changePactMsg") {
          sessionStorage.setItem("contractInfo_changeId", row.changeId); // 暂存当前changeId
          this.$router.push("/edit_pactChange");
        }
        if (this.activeName == "renewPactMsg") {
          sessionStorage.setItem("contractInfo_renewId", row.renewId); // 暂存当前renewId
          this.$router.push("/edit_pactRenew");
        }
      },
      handleDelete(index, row) {
        if (this.activeName == "changePactMsg") {
          this.$confirm("此操作将会删除该条合同变更, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
            .then(() => {
              this.$axios
                .put(
                  "/iem_hrm/pact/deletePactChange?pactNo=" +
                  row.pactNo +
                  "&changeId=" +
                  row.changeId
                )
                .then(res => {
                  console.log(res);
                  if (res.data.code == "S00000") {
                    this.$message({
                      type: "success",
                      message: "操作成功!"
                    });
                    this.getPChangeList();
                  } else this.$message.error(res.data.retMsg);
                })
                .catch(() => {
                  this.$message.error("操作失败！");
                });
            })
            .catch(() => {
              this.$message("您已取消删除！");
            });
        }
        if (this.activeName == "renewPactMsg") {
          this.$confirm("此操作将会删除该条合同续签, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
            .then(() => {
              this.$axios
                .put(
                  "/iem_hrm/pact/deletePactRenew?pactNo=" +
                  row.pactNo +
                  "&renewId=" +
                  row.renewId
                )
                .then(res => {
                  console.log(res);
                  if (res.data.code == "S00000") {
                    this.$message({
                      type: "success",
                      message: "操作成功!"
                    });
                    this.getPRenewList();
                  } else this.$message.error(res.data.retMsg);
                })
                .catch(() => {
                  this.$message.error("操作失败！");
                });
            })
            .catch(() => {
              this.$message("您已取消删除！");
            });
        }
      },
      handleAddPChange() {
        this.pactSubFlag = "true"; // 标记新增页为四级页面
        sessionStorage.setItem("contractInfo_pactSubFlag", this.pactSubFlag); // 暂存当前pactSubFlag
        this.$router.push("/add_pactChange");
      },
      handleAddPRenew() {
        this.pactSubFlag = "true"; // 标记新增页为四级页面
        sessionStorage.setItem("contractInfo_pactSubFlag", this.pactSubFlag); // 暂存当前pactSubFlag
        this.$router.push("/add_pactRenew");
      },
      handlePChangeDetail(index, row) {
        sessionStorage.setItem("contractInfo_changeId", row.changeId); // 暂存当前changeId
        this.$router.push("/detail_pactChange");
      },
      handlePRenewDetail(index, row) {
        sessionStorage.setItem("contractInfo_renewId", row.renewId); // 暂存当前renewId
        this.$router.push("/detail_pactRenew");
      },
      handlePChangePage(val) {
        this.pChangePage.pageNum = val;
        this.getPChangeList(); //分页查询合同变更列表
      },
      handlePRenewPage(val) {
        this.pRenewPage.pageNum = val;
        this.getPRenewList(); //分页查询合同变更列表
      }
    }
  };
</script>

<style scoped>

</style>