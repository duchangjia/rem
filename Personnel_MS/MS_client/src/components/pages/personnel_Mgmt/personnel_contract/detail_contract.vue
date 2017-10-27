<template>
    <div class="detail_contract">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情">
        </current>
        <div class="content-wrapper">
            <!-- <el-button type="primary" class="toolBtn">保存</el-button> -->
            <el-tabs v-model="activeName" @tab-click="handleTabClick">
                <el-tab-pane label="合同基本情况" name="basicPactMsg">
                    <div class="add-wrapper">
                        <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px">
                            <el-col :span="24">
                                <el-form-item label="合同编号" prop="pactNo">
                                    <el-input v-model="basicPactMsg.pactNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="纸质合同编号" prop="paperPactNo">
                                    <el-input v-model="basicPactMsg.paperPactNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同名称" prop="pactName">
                                    <el-input v-model="basicPactMsg.pactName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="公司名称" prop="organName">
                                    <el-select v-model="basicPactMsg.organName" :disabled="true">
                                        <el-option label="总公司" value="1"></el-option>
                                        <el-option label="深圳分公司" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="部门名称" prop="derpName">
                                    <el-select v-model="basicPactMsg.derpName" :disabled="true">
                                        <el-option label="财务部" value="1"></el-option>
                                        <el-option label="技术部" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="工号" prop="userNo">
                                    <el-input v-model="basicPactMsg.userNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="员工姓名" prop="custName">
                                    <el-input v-model="basicPactMsg.custName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="性别" prop="sex">
                                    <el-select v-model="basicPactMsg.sex" :disabled="true">
                                        <el-option label="男" value="1"></el-option>
                                        <el-option label="女" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="身份证" prop="cert">
                                    <el-input v-model="basicPactMsg.cert" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同类型" prop="pactType">
                                    <el-select v-model="basicPactMsg.pactType" :disabled="true">
                                        <el-option label="劳动合同" value="1"></el-option>
                                        <el-option label="保密协议" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="签订日期" prop="signTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同开始日期" prop="pactStartTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStartTime" :disabled="true" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同结束日期" prop="pactEndTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactEndTime" :disabled="true" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同状态" prop="pactStatus">
                                    <el-select v-model="basicPactMsg.pactStatus" :disabled="true">
                                        <el-option label="已生效" value="1"></el-option>
                                        <el-option label="未生效" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同年限" prop="pactExpires">
                                    <el-input v-model="basicPactMsg.pactExpires" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="终止日期" prop="pactStopTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="附件" prop="attachm">
					                <el-button class="downloadBtn" @click="downloadFile">下载</el-button>
				  	            </el-form-item>
                            </el-col>
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
                                <el-form-item label=" " prop="autoupFlag">
                                    <el-checkbox v-model="checked">自动更新员工资料</el-checkbox>
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
                        <el-pagination class="toolbar" @current-change="handlePChangePage" :current-page.sync="pChangePage.pageNum" :page-size="pChangePage.pageSize" layout="prev, pager, next, jumper" :total="pChangePage.totalRows" v-show="pChangePage.totalRows>pChangePage.pageSize">
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
                        <el-pagination class="toolbar" @current-change="handlePRenewPage" :current-page.sync="pRenewPage.pageNum" :page-size="pRenewPage.pageSize" layout="prev, pager, next, jumper" :total="pRenewPage.totalRows" v-show="pRenewPage.totalRows>pRenewPage.pageSize">
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
      labelPosition: "right",
      pactNo: "",
      basicPactMsg: {},
      PChangeListInfo: [],
      PRenewListInfo: [],
      pChangePage: {
        pageNum: 1,
        pageSize: 7,
        totalRows: 20
      },
      pRenewPage: {
        pageNum: 1,
        pageSize: 7,
        totalRows: 20
      },
      checked: ""
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = this.$route.params.pactNo;
    if (this.$route.params.activeTab) {
      this.activeName = this.$route.params.activeTab;
      if (this.activeName == "changePactMsg") this.getPChangeList();
      if (this.activeName == "renewPactMsg") this.getPRenewList();
    } else {
      this.activeName = "basicPactMsg";
      this.getPactDtl(this.pactNo); // 初始查合同基本详情
    }
  },
  methods: {
    handleTabClick(tab, event) {
      console.log(tab.name);
      this.activeName = tab.name;
      if (tab.name == "changePactMsg") this.getPChangeList();
      if (tab.name == "renewPactMsg") this.getPRenewList();
      if (tab.name == "basicPactMsg") this.getPactDtl(this.pactNo);
    },
    getPactDtl(pactNo) {
      const self = this;
      let params = {
        pactNo: pactNo
      };
      self.$axios
        // .get("/iem_hrm/pact/queryPactDetail", { params: params })
        .get("/iem_hrm/queryPactDetail", { params: params })        
        .then(res => {
          console.log(res);
          self.basicPactMsg = res.data.data;
          self.checked = res.data.data.autoupFlag;
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
        pactNo: self.pactNo,
        changeId: ""
      };
      self.$axios
        // .get("/iem_hrm/pact/queryPactChangeList", { params: params })
        .get("/iem_hrm/queryPactChangeList", { params: params })        
        .then(res => {
          console.log(res);
        //   self.PChangeListInfo = res.data.data.list;
          self.PChangeListInfo = res.data.data.PChangeListArray;          
          self.pChangePage.totalRows = res.data.total;
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
        // pactNo: self.pactNo,
        pactNo: "0001",
        renewId: ""
      };
      self.$axios
        // .get("/iem_hrm/pact/queryPactRenewList", { params: params })
        .get("/iem_hrm/queryPactRenewList", { params: params })        
        .then(res => {
          console.log(res);
        //   self.PRenewListInfo = res.data.data.list;
          self.PRenewListInfo = res.data.data.PRenewListArray;          
          self.pRenewPage.totalRows = res.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    downloadFile() {},
    changeTypeFormatter(row, column) {
      return row.changeType == 1 ? "条款变更" : row.changeType == 0 ? "啥啥变更" : "异常";
    },
    renewTypeFormatter(row, column) {
      return row.renewType == 1 ? "合同延期" : row.renewType == 0 ? "啥啥续签" : "异常";
    },
    handleEdit(index, row) {
      if (this.activeName == "changePactMsg")
        this.$router.push({
          name: "edit_pactChange",
          params: {
            pactNo: row.pactNo,
            changeId: row.changeId
          }
        });
      if (this.activeName == "renewPactMsg")
        this.$router.push({
          name: "edit_pactRenew",
          params: {
            pactNo: row.pactNo,
            renewId: row.renewId
          }
        });
    },
    handleDelete(index, row) {
      if (this.activeName == "changePactMsg") {
        let targetPChange = {};
        targetPChange.pactNo = row.pactNo;
        targetPChange.changeId = row.changeId;
        console.log(targetPChange);
        this.$confirm("此操作将会删除该条合同变更, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$axios
              .delete(
                "/iem_hrm/pact/deletePactChange?pactNo=" +
                  targetPChange.pactNo +
                  "&changeId=" +
                  targetPChange.changeId,
                targetPChange
              )
              .then(res => {
                console.log(res);
                if (res.data.code == "S00000")
                  this.$message({ type: "success", message: "删除成功!" });
                else this.$message.error("删除合同变更失败！");
              })
              .catch(() => {
                this.$message.error("删除合同变更失败！");
              });
          })
          .catch(() => {
            this.$message("您已取消删除合同变更！");
          });
      }
      if (this.activeName == "renewPactMsg") {
        let targetPRenew = {};
        targetPRenew.pactNo = row.pactNo;
        targetPRenew.renewId = row.renewId;
        console.log(targetPRenew);
        this.$confirm("此操作将会删除该条合同续签, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$axios
              .delete(
                "/iem_hrm/pact/deletePactRenew?pactNo=" +
                  targetPRenew.pactNo +
                  "&renewId=" +
                  targetPRenew.renewId,
                targetPRenew
              )
              .then(res => {
                console.log(res);
                if (res.data.code == "S00000")
                  this.$message({ type: "success", message: "删除成功!" });
                else this.$message.error("删除合同续签失败！");
              })
              .catch(() => {
                this.$message.error("删除合同续签失败！");
              });
          })
          .catch(() => {
            this.$message("您已取消删除合同续签！");
          });
      }
    },
    handleAddPChange() {
      this.$router.push({
        name: "add_pactChange",
        params: {
          pactNo: this.pactNo
        }
      });
    },
    handleAddPRenew() {
      this.$router.push({
        name: "add_pactRenew",
        params: {
          pactNo: this.pactNo
        }
      });
    },
    handlePChangeDetail(index, row) {
      this.$router.push({
        name: "detail_pactChange",
        params: {
          pactNo: row.pactNo,
          changeId: row.changeId
        }
      });
    },
    handlePRenewDetail(index, row) {
      this.$router.push({
        name: "detail_pactRenew",
        params: {
          pactNo: row.pactNo,
          renewId: row.renewId
        }
      });
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
.detail_contract {
  padding: 0 0 20px 20px;
}
</style>
