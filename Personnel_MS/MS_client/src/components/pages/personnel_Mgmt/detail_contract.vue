<template>
    <div class="detail_contract">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情">
        </current>
        <div class="content-wrapper">
            <!-- <el-button type="primary" class="toolBtn">保存</el-button> -->
            <el-tabs v-model="activeName" @tab-click="handleTabClick">
                <el-tab-pane label="合同基本情况" name="basicPactMsg">
                    <div class="add-wrapper">
                        <el-form :inline="true" :model="basicPactMsg" :rules="rules" ref="basicPactMsg" :label-position="labelPosition" label-width="110px">
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
                                    <el-select v-model="basicPactMsg.organName">
                                        <el-option label="总公司" value="1"></el-option>
                                        <el-option label="深圳分公司" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="部门名称" prop="derpName">
                                    <el-select v-model="basicPactMsg.derpName">
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
                                    <el-input v-model="basicPactMsg.custName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="性别" prop="sex" :disabled="true">
                                    <el-select v-model="basicPactMsg.sex">
                                        <el-option label="男" value="1"></el-option>
                                        <el-option label="女" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="身份证" prop="cert" :disabled="true">
                                    <el-input v-model="basicPactMsg.cert" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同类型" prop="pactType">
                                    <el-select v-model="basicPactMsg.pactType">
                                        <el-option label="劳动合同" value="1"></el-option>
                                        <el-option label="保密协议" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="签订日期" prop="signTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同开始日期" prop="pactStartTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStartTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同结束日期" prop="pactEndTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactEndTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同状态" prop="pactStatus">
                                    <el-select v-model="basicPactMsg.pactStatus">
                                        <el-option label="已生效" value="1"></el-option>
                                        <el-option label="未生效" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同年限" prop="pactExpires">
                                    <el-input v-model="basicPactMsg.pactExpires"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="终止日期" prop="pactStopTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同附件" prop="attachm">
                                    <!-- <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
                                                                                                                    <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                                                                                                                </el-upload> -->
                                    <el-input v-model="basicPactMsg.attachm"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="终止原因" prop="stopReason">
                                    <el-input type="textarea" v-model="basicPactMsg.stopReason"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="备注" prop="remark">
                                    <el-input type="textarea" v-model="basicPactMsg.remark"></el-input>
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
                        <el-button type="text" class="addBtn">新增</el-button>
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
                    </div>
                </el-tab-pane>

                <el-tab-pane label="合同续签情况" name="renewPactMsg">
                    <div class="subtitlebar">
                        <span class="title-text">合同续签情况</span>
                        <el-button type="text" class="addBtn">新增</el-button>
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
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      activeName: "",
      labelPosition: "right",
      pactNo: "",
      basicPactMsg: {},
      pageIndex: 1,
      pageRows: 7,
      totalRows: 20,
      PChangeListInfo: [],
      PRenewListInfo: [],
      checked: "",
      rules: {
        pactType: [{ required: true, message: "请选择合同类型", trigger: "blur" }],
        signTime: [{ required: true, message: "请选择签订日期", trigger: "blur" }],
        pactStartTime: [
          { required: true, message: "请选择合同开始日期", trigger: "blur" }
        ],
        pactEndTime: [
          { required: true, message: "请选择合同结束日期", trigger: "blur" }
        ],
        pactStatus: [{ required: true, message: "请选择合同状态", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.activeName = "basicPactMsg";
    this.pactNo = this.$route.params.pactNo;
    // 初始查合同基本详情
    this.getPactDtl(this.pactNo);
  },
  methods: {
    handleTabClick(tab, event) {
      console.log(tab.name);
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
        .get("ifdp/querPactDtl", { params: params })
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
        pageIndex: self.pageIndex,
        pageRows: self.pageRows,
        pactNo: this.pactNo,
        changeId: ""
      };
      self.$axios
        .get("ifdp/queryPChangeList", { params: params })
        .then(res => {
          self.PChangeListInfo = res.data.data.PChangeListArray;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getPRenewList() {
      const self = this;
      let params = {
        pageIndex: self.pageIndex,
        pageRows: self.pageRows,
        pactNo: this.pactNo,
        renewId: ""
      };
      self.$axios
        .get("ifdp/queryPRenewList", { params: params })
        .then(res => {
          self.PRenewListInfo = res.data.data.PRenewListArray;
        })
        .catch(() => {
          console.log("error");
        });
    },
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
    handleDelete(index, row) {},
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
    }
  }
};
</script>

<style>
.detail_contract {
  padding: 0 0 20px 20px;
}

.el-tabs__item {
  padding: 0 10px;
}

.el-tabs__item.is-active {
  color: #333333;
}

.el-tabs__active-bar {
  background-color: #333333;
  height: 2px;
}

.el-tabs__item:first-of-type {
  padding-left: 0;
}

.el-tabs__header {
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .subtitlebar {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-family: "PingFangSC Regular";
  padding-left: 10px;
  margin: 20px 0;
}

.content-wrapper .subtitlebar .title-text {
  display: inline-block;
  height: 24px;
  position: relative;
  color: #333333;
}

.content-wrapper .subtitlebar .addBtn {
  float: right;
  color: #ff9900;
  border: none;
  padding: 5px;
  padding-right: 0;
}

.icon-edit {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/edit.png") center no-repeat;
}

.icon-delete {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/delete.png") center no-repeat;
}

.icon-edit:hover,
.icon-delete:hover {
  cursor: pointer;
}
</style>
