<template>
  <div class="container-wrap">
    <current yiji="人事事务" erji="人事合同" sanji="合同修改">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">合同修改</span>
        <el-button type="primary" @click="handleSave('editPactMsgRules')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="editPactMsg" :rules="pactMsgRules" ref="editPactMsgRules" :label-position="labelPosition"
          label-width="122px">
          <el-col :sm="24" :md="12">
            <el-form-item label="工号">
              <el-input v-model="editPactMsg.userNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="员工姓名">
              <el-input v-model="editPactMsg.custName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="性别">
              <el-input v-model="_sex" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="身份证">
              <el-input v-model="editPactMsg.certNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="公司名称">
              <el-input v-model="editPactMsg.organName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="部门名称">
              <el-input v-model="editPactMsg.derpName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同主体">
              <el-input v-model="editPactMsg.pactSubject" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同编号">
              <el-input v-model="editPactMsg.pactNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="纸质合同编号">
              <el-input v-model="editPactMsg.paperPactNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同名称" prop="pactName">
              <el-input v-model="editPactMsg.pactName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同类型" prop="pactType">
              <el-select v-model="editPactMsg.pactType">
                <el-option label="劳动合同" value="01"></el-option>
                <el-option label="保密协议" value="02"></el-option>
                <el-option label="其他" value="99"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="签订日期" prop="signTime">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPactMsg.signTime" @change="signTimeChange" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同开始日期" prop="pactStartTime">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPactMsg.pactStartTime" :picker-options="pactStartTimeOption"
                @change="pactStartTimeChange" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同结束日期" prop="pactEndTime">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPactMsg.pactEndTime" :picker-options="pactEndTimeOption" @change="pactEndTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同状态" prop="pactStatus">
              <el-select v-model="editPactMsg.pactStatus">
                <el-option label="试用" value="01"></el-option>
                <el-option label="有效" value="02"></el-option>
                <el-option label="提前解除" value="03"></el-option>
                <el-option label="到期解除" value="04"></el-option>
                <el-option label="其他" value="99"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同年限" prop="pactExpires">
              <el-input v-model="editPactMsg.pactExpires"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="终止日期" prop="pactStopTime">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPactMsg.pactStopTime" :picker-options="pactStopTimeOption" @change="pactStopTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同附件">
              <el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple 
                  :on-remove="handleRemove"
                  :beforeUpload="beforeAvatarUpload" 
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
        <el-form :model="editPactMsg" :label-position="labelPosition" label-width="122px" style="margin-top:0;">
          <el-col :span="24">
            <el-form-item label="终止原因" prop="stopReason">
              <el-input type="textarea" v-model="editPactMsg.stopReason"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="remark">
              <el-input type="textarea" v-model="editPactMsg.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label=" " prop="autoudFlag">
              <el-checkbox v-model="_autoudFlag">自动更新员工资料</el-checkbox>
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
    let that = this;
    let validateStartTime = (rule, value, callback) => {
      if (value < that.editPactMsg.signTime) {
        callback(new Error("合同开始日期不能早于签订日期"));
      } else {
        callback();
      }
    };
    let validateEndTime = (rule, value, callback) => {
      if (value < that.editPactMsg.pactStartTime) {
        callback(new Error("合同结束日期不能早于开始日期"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      pactNo: "",
      custInfo: {},
      editPactMsg: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      triRemoveFlag: true,
      pactStartTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.signTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactEndTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.pactStartTime).getTime() -
              3600 * 1000 * 24
          );
        }
      },
      pactStopTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.pactEndTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactMsgRules: {
        pactName: [
          {
            required: true,
            message: "合同名称不能为空",
            trigger: "blur"
          }
        ],
        pactType: [
          {
            required: true,
            message: "合同类型不能为空",
            trigger: "change"
          }
        ],
        signTime: [
          {
            required: true,
            message: "签订日期不能为空",
            trigger: "change"
          }
        ],
        pactStartTime: [
          {
            required: true,
            message: "合同开始日期不能为空",
            trigger: "change"
          },
          {
            type: "date",
            validator: validateStartTime,
            trigger: "change"
          }
        ],
        pactEndTime: [
          {
            required: true,
            message: "合同结束日期不能为空",
            trigger: "change"
          },
          {
            type: "date",
            validator: validateEndTime,
            trigger: "change"
          }
        ],
        pactStatus: [
          {
            required: true,
            message: "合同状态不能为空",
            trigger: "change"
          }
        ],
        pactExpires: [
          {
            required: true,
            message: "合同年限不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
    // 初始查合同基本详情
    this.getPactDetail();
  },
  computed: {
    _sex: function() {
      if (this.editPactMsg.sex == "01") {
        return "男";
      } else if (this.editPactMsg.sex == "02") {
        return "女";
      } else if (this.editPactMsg.sex == "99") {
        return "其他";
      } else {
        return "";
      }
    },
    _autoudFlag: {
      get: function() {
        if (
          this.editPactMsg.autoudFlag == "01" ||
          this.editPactMsg.autoudFlag == true
        ) {
          return true;
        } else if (
          this.editPactMsg.autoudFlag == "02" ||
          this.editPactMsg.autoudFlag == false
        ) {
          return false;
        }
      },
      set: function(val) {
        if (val == true) {
          this.editPactMsg.autoudFlag = "01";
        } else {
          this.editPactMsg.autoudFlag = "02";
        }
      }
    }
  },
  methods: {
    getPactDetail() {
      const self = this;
      let params = {
        pactNo: this.pactNo
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactDetail", {
          params: params
        })
        .then(res => {
          self.editPactMsg = res.data.data;
          console.log("pactDetailMsg:", self.editPactMsg);
          if (
            self.editPactMsg.epFileManageList &&
            self.editPactMsg.epFileManageList.length >= 1
          ) {
            self.editPactMsg.epFileManageList.forEach(function(ele) {
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
    // 附件上传
    beforeAvatarUpload(file) {
      // const extension = file.name.split('.')[1] === 'xls'
      // const extension2 = file.name.split('.')[1] === 'xlsx'
      // const extension3 = file.name.split('.')[1] === 'doc'
      // const extension4 = file.name.split('.')[1] === 'docx'
      // if (!extension && !extension2 && !extension3 && !extension4) {
      // 		console.log('上传文件只能是 xls、xlsx、doc、docx 格式!')
      // }

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message({ message: "上传文件大小不能超过 10MB!", type: "error" });
        this.triRemoveFlag = false;
      } else {
        this.triRemoveFlag = true;
      }
      return isLt2M; //extension || extension2 || extension3 || extension4 &&
    },
    handleFileUpload(file, fileList) {
      this.fileList = fileList;
      console.log("选中的this.fileList:", this.fileList);
    },
    handleRemove(file, fileList) {
      if (this.triRemoveFlag) {
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
      }
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
    signTimeChange(val) {
      this.editPactMsg.signTime = val;
    },
    pactStartTimeChange(val) {
      this.editPactMsg.pactStartTime = val;
    },
    pactEndTimeChange(val) {
      this.editPactMsg.pactEndTime = val;
    },
    pactStopTimeChange(val) {
      this.editPactMsg.pactStopTime = val;
    },
    handleSave(editPactMsgRules) {
      this.$refs[editPactMsgRules].validate(valid => {
        if (valid) {
          let fileIds = [];
          for (let k in this.fileList) {
            fileIds.push(this.fileList[k].fileId);
          }
          console.log("fileIds", fileIds);
          let editPact = {};
          editPact.pactNo = this.editPactMsg.pactNo;
          editPact.paperPactNo = this.editPactMsg.paperPactNo;
          editPact.pactName = this.editPactMsg.pactName;
          editPact.userNo = this.editPactMsg.userNo;
          editPact.pactSubject = this.editPactMsg.pactSubject;
          editPact.pactType = this.editPactMsg.pactType;
          editPact.signTime = this.editPactMsg.signTime;
          editPact.pactStartTime = this.editPactMsg.pactStartTime;
          editPact.pactEndTime = this.editPactMsg.pactEndTime;
          editPact.pactStatus = this.editPactMsg.pactStatus;
          editPact.pactExpires = this.editPactMsg.pactExpires;
          editPact.pactStopTime = this.editPactMsg.pactStopTime;
          editPact.attachm = this.editPactMsg.attachm;
          editPact.stopReason = this.editPactMsg.stopReason;
          editPact.remark = this.editPactMsg.remark;
          editPact.autoudFlag = this.editPactMsg.autoudFlag;
          editPact.fileIds = fileIds;
          console.log(editPact);
          this.$axios
            .put("/iem_hrm/pact/updatePact", editPact)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.$router.push("/personnel_contract");
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