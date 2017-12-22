<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更修改</span>
                <el-button type="primary" @click="handleSave('pactMsgRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                            <el-input v-model="basicPactMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同名称">
                            <el-input v-model="basicPactMsg.pactName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同签约时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同终止时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">员工信息</el-col>
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工号">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="姓名">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="身份证">
                            <el-input v-model="custInfo.certNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位">
                            <el-select v-model="custInfo.custPost" :disabled="true">
                                <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职务">
                            <el-select v-model="custInfo.custPost" :disabled="true">
                                <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-select v-model="custInfo.custClass" :disabled="true">
                                <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">合同变更信息</el-col>
                <el-form :inline="true" :model="editPChangeMsg" :rules="pactMsgRules" ref="pactMsgRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPChangeMsg.changeTime" @change="changeTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更类别" prop="changeType">
                            <el-input v-model="_changeType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="变更内容" prop="changeContent">
                            <el-input type="textarea" v-model="editPChangeMsg.changeContent"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件">
                            <el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple 
                                :on-remove="handleRemove"
                                :on-change="handleFileUpload" 
                                :on-success="successUpload" 
                                :limit="3" 
                                :on-exceed="handleExceed" 
                                :headers="token"
                                :file-list="fileList" 
                                :show-file-list="true">
                                <el-button size="small" type="primary">选取文件</el-button>
                            </el-upload>
				  	            </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    return {
      labelPosition: "right",
      activeName: "changePactMsg",
      userNo: "",
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      custInfo: {},
      editPChangeMsg: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      custPostList: [],
      custClassList: [],
      pactMsgRules: {
        changeTime: [{ required: true, message: "请选择变更日期", trigger: "change" }],
        changeType: [{ required: true, message: "请选择变更类别", trigger: "blur" }],
        changeContent: [{ required: true, message: "请输入变更内容", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
    this.userNo = sessionStorage.getItem("contractInfo_userNo");
    this.changeId = sessionStorage.getItem("contractInfo_changeId");
    this.getPactDetail();
    this.getCustInfo();
    this.getPChangeDetail();
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  computed: {
    _changeType: function() {
      if (this.editPChangeMsg.changeType == "01") {
        return "条款变更";
      } else if (this.editPChangeMsg.changeType == "99") {
        return "其他";
      } else {
        return "";
      }
    }
  },
  methods: {
    getPactDetail() {
      const self = this;
      let params = {
        pactNo: self.pactNo
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactDetail", { params: params })
        .then(res => {
          self.basicPactMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getCustInfo() {
      const self = this;
      let userNo = self.userNo;
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/" + userNo)
        .then(res => {
          console.log("cusInfo", res);
          self.custInfo = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getPChangeDetail() {
      const self = this;
      let params = {
        pactNo: self.pactNo,
        changeId: self.changeId
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactChangeDetail", { params: params })
        .then(res => {
          self.editPChangeMsg = res.data.data;
          console.log("PChangeDtl", self.editPChangeMsg);
          if (
            self.editPChangeMsg.epFileManageList &&
            self.editPChangeMsg.epFileManageList.length >= 1
          ) {
            self.editPChangeMsg.epFileManageList.forEach(function(ele) {
              self.fileList.push({
                name: ele.fileName + "." + ele.fileSuffix,
                url: ele.fileAddr,
                fileId: ele.fileId
              });
            }, this);
          }
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
    changeTimeChange(val) {
      this.editPChangeMsg.changeTime = val;
    },
    // 附件上传
    handleFileUpload(file, fileList) {
      this.fileList = fileList;
      console.log("选中的this.fileList:", this.fileList);
    },
    handleRemove(file, fileList) {
      console.log("移除的file", file);
      console.log("移除的fileList", fileList);
      let index = this.fileList.indexOf(file);
      fileList.splice(index, 0, file);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/file/deleteFile/" + file.fileId)
            .then(res => {
              let result = res.data.retMsg;
              if ("操作成功" == result) {
                this.$message({
                  type: "success",
                  message: result
                });
                fileList.splice(index, 1);
              } else {
                this.$message({
                  type: "error",
                  message: result
                });
              }
            })
            .catch(e => {
              console.log(e);
              this.$message({
                type: "error",
                message: e.retMsg
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleExceed(files, fileList) {
      // 文件超出数量
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      );
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_res_fileList", fileList);
      if (res.code == "S00000") {
        file.fileId = res.data;
        this.$message({
          type: "success",
          message: "文件上传成功!"
        });
      } else this.$message.error(res.retMsg);
    },
    handleSave(pactMsgRules) {
      this.$refs[pactMsgRules].validate(valid => {
        if (valid) {
          let fileIds = [];
          for (let k in this.fileList) {
            fileIds.push(this.fileList[k].fileId);
          }
          console.log("fileIds", fileIds);
          let newPChange = {};
          newPChange.pactNo = this.pactNo;
          newPChange.changeId = this.changeId;
          newPChange.changeTime = this.editPChangeMsg.changeTime;
          newPChange.changeType = this.editPChangeMsg.changeType;
          newPChange.changeContent = this.editPChangeMsg.changeContent;
          newPChange.attachm = this.editPChangeMsg.attachm;
          newPChange.fileIds = fileIds;
          this.$axios
            .put("/iem_hrm/pact/updatePactChange", newPChange)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.$router.push("/detail_contract");
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        } else {
          console.log("error submit!!");
          this.$message({
            type: "error",
            message: "请确保必填信息填写正确!"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style>

</style>
