<template>
  <div class="container-wrap">
    <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同续签修改">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">合同续签修改</span>
        <el-button type="primary" @click="handleSave('pactMsgRules')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="editPRenewMsg" :label-position="labelPosition" label-width="122px">
          <el-col :sm="24" :md="12">
            <el-form-item label="合同编号">
              <el-input v-model="editPRenewMsg.pactNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同名称">
              <el-input v-model="editPRenewMsg.pactName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="上次生效时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewCameTimeLast" :disabled="true" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="上次到期时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewLostTimeLast" :disabled="true" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <div class="add-wrapper">
        <el-col :span="24" class="item-title">员工信息</el-col>
        <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="122px">
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
        <el-col :span="24" class="item-title">合同续签信息</el-col>
        <el-form :inline="true" :model="editPRenewMsg" :rules="pactMsgRules" ref="pactMsgRules1" :label-position="labelPosition" label-width="122px"
          style="margin-top:0;overflow:visible;">
          <el-col :sm="24" :md="12">
            <el-form-item label="续签时间">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPRenewMsg.renewTime" @change="renewTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="续签类别" prop="renewType">
              <el-input v-model="_renewType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="续签生效时间">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPRenewMsg.renewCameTime" :picker-options="renewCameTimeOption"
                @change="renewCameTimeChange" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="续签失效时间">
              <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="editPRenewMsg.renewLostTime" :picker-options="renewLostTimeOption"
                @change="renewLostTimeChange" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form>
        <el-form :model="editPRenewMsg" :rules="pactMsgRules" ref="pactMsgRules2" :label-position="labelPosition" label-width="122px"
          style="margin-top:0;">
          <el-col :span="24">
            <el-form-item label="续签内容" prop="renewContent">
              <el-input type="textarea" v-model="editPRenewMsg.renewContent"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <el-form :inline="true" :model="editPRenewMsg" :label-position="labelPosition" label-width="122px" style="margin-top:0;">
          <el-col :span="24">
            <el-form-item label="附件">
              <el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple :on-remove="handleRemove"
                :beforeUpload="beforeAvatarUpload" :on-change="handleFileUpload" :on-success="successUpload" :limit="3" :on-exceed="handleExceed"
                :headers="token" :file-list="fileList" :show-file-list="true">
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
      let that = this;
      let validateRenewCameTime = (rule, value, callback) => {
        if (value < that.editPRenewMsg.renewTime) {
          callback(new Error("续签生效日期不能早于续签日期"));
        } else {
          callback();
        }
      };
      let validateRenewLostTime = (rule, value, callback) => {
        if (value < that.editPRenewMsg.renewCameTime) {
          callback(new Error("续签失效日期不能早于续签生效日期"));
        } else {
          callback();
        }
      };
      return {
        labelPosition: "right",
        activeName: "renewPactMsg",
        userNo: "",
        pactNo: "",
        renewId: "",
        custInfo: {},
        editPRenewMsg: {},
        fileList: [],
        token: {
          Authorization: `Bearer ` + localStorage.getItem("access_token")
        },
        triRemoveFlag: true,
        custPostList: [],
        custClassList: [],
        renewCameTimeOption: {
          disabledDate(time) {
            return (
              time.getTime() <
              new Date(that.editPRenewMsg.renewTime).getTime() - 3600 * 1000 * 24
            );
          }
        },
        renewLostTimeOption: {
          disabledDate(time) {
            return (
              time.getTime() <
              new Date(that.editPRenewMsg.renewCameTime).getTime() -
              3600 * 1000 * 24
            );
          }
        },
        pactMsgRules: {
          renewTime: [{
            required: true,
            message: "请选择续签日期",
            trigger: "change"
          }],
          renewCameTime: [{
              required: true,
              message: "请选择续签生效日期",
              trigger: "change"
            },
            {
              type: "date",
              validator: validateRenewCameTime,
              trigger: "change"
            }
          ],
          renewLostTime: [{
              required: true,
              message: "请选择续签失效日期",
              trigger: "change"
            },
            {
              type: "date",
              validator: validateRenewLostTime,
              trigger: "change"
            }
          ],
          renewType: [{
            required: true,
            message: "请选择续签类别",
            trigger: "blur"
          }],
          renewContent: [{
            required: true,
            message: "请输入续签内容",
            trigger: "blur"
          }]
        }
      };
    },
    components: {
      current
    },
    created() {
      this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
      this.userNo = sessionStorage.getItem("contractInfo_userNo");
      this.renewId = sessionStorage.getItem("contractInfo_renewId");
      this.getCustInfo();
      this.getPRenewDetail();
      this.getCustPostList(); //查询岗位列表
      this.getCustClassList(); //查询职级列表
    },
    computed: {
      _renewType: function () {
        if (this.editPRenewMsg.renewType == "01") {
          return "合同延期";
        } else if (this.editPRenewMsg.renewType == "99") {
          return "其他";
        } else {
          return "";
        }
      }
    },
    methods: {
      getPRenewDetail() {
        const self = this;
        let params = {
          pactNo: self.pactNo,
          renewId: self.renewId
        };
        self.$axios
          .get("/iem_hrm/pact/queryPactRenewDetail", {
            params: params
          })
          .then(res => {
            self.editPRenewMsg = res.data.data;
            console.log("editPRenewMsg", self.editPRenewMsg);
            if (
              self.editPRenewMsg.epFileManageList &&
              self.editPRenewMsg.epFileManageList.length >= 1
            ) {
              self.editPRenewMsg.epFileManageList.forEach(function (ele) {
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

      renewTimeChange(val) {
        this.editPRenewMsg.renewTime = val;
      },
      renewCameTimeChange(val) {
        this.editPRenewMsg.renewCameTime = val;
      },
      renewLostTimeChange(val) {
        this.editPRenewMsg.renewLostTime = val;
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
          this.$message({
            message: "上传文件大小不能超过 10MB!",
            type: "error"
          });
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
      handleSave(pactMsgRules) {
        let rulesValid1 = false;
        let rulesValid2 = false;

        this.$refs.pactMsgRules1.validate(valid => {
          if (valid) {
            rulesValid1 = true;
          } else {
            console.log("error submit!!");
            this.$message({
              type: "error",
              message: "请确保必填信息填写正确!"
            });
            return false;
          }
        });
        this.$refs.pactMsgRules2.validate(valid => {
          if (valid) {
            rulesValid2 = true;
          } else {
            console.log("error submit!!");
            if (rulesValid1 == true) {
              this.$message({
                type: "error",
                message: "请确保必填信息填写正确!"
              });
            }
            return false;
          }
        });
        if (rulesValid1 && rulesValid2) {
          let fileIds = [];
          for (let k in this.fileList) {
            fileIds.push(this.fileList[k].fileId);
          }
          console.log("fileIds", fileIds);
          let newPRenew = {};
          newPRenew.pactNo = this.pactNo;
          newPRenew.renewId = this.renewId;
          newPRenew.renewTime = this.editPRenewMsg.renewTime;
          newPRenew.renewCameTime = this.editPRenewMsg.renewCameTime;
          newPRenew.renewLostTime = this.editPRenewMsg.renewLostTime;
          newPRenew.renewType = this.editPRenewMsg.renewType;
          newPRenew.renewContent = this.editPRenewMsg.renewContent;
          newPRenew.attachm = this.editPRenewMsg.attachm;
          newPRenew.fileIds = fileIds;
          console.log("newPRenew:", newPRenew);
          this.$axios
            .put("/iem_hrm/pact/updatePactRenew", newPRenew)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.$router.push("/detail_contract");
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        }
      }
    }
  };
</script>

<style>

</style>