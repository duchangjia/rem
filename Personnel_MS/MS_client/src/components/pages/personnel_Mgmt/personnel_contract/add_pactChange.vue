<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同变更">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更</span>
                <el-button type="primary" @click="handleSave" class="toolBtn btn-primary">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="122px">
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
                            <el-date-picker type="date" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同终止时间">
                            <el-date-picker type="date" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
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
                <el-col :span="24" class="item-title">合同变更信息</el-col>
                <el-form :inline="true" :model="addPChangeMsg" :rules="pactMsgRules" ref="pactMsgRules1" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" :editable="false" v-model="addPChangeMsg.changeTime" @change="changeTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更类别" prop="changeType">
                            <el-select v-model="addPChangeMsg.changeType">
                                <el-option label="条款变更" value="01"></el-option>
                                <el-option label="其他" value="99"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :model="addPChangeMsg" :rules="pactMsgRules" ref="pactMsgRules2" :label-position="labelPosition" label-width="122px" style="margin-top:0;">                
                    <el-col :span="24">
                        <el-form-item label="变更内容" prop="changeContent">
                            <el-input type="textarea" v-model="addPChangeMsg.changeContent"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="addPChangeMsg" :label-position="labelPosition" label-width="122px" style="margin-top:0;"> 
                    <el-col :span="24">
                        <el-form-item label="附件" prop="attachm">
                            <el-input v-model="addPChangeMsg.attachm"></el-input>
                            <el-upload class="upload-demo" style="height:0;" ref="upload" name="files" action="/iem_hrm/pact/addPactChange" 
                                    :headers="token"
                                    :data="addPChangeMsg"
                                    :beforeUpload="beforeAvatarUpload" 
                                    :on-change="handleFileUpload" 
                                    :on-success="successUpload" 
                                    :auto-upload="false"
                                    :show-file-list="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
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
      pactSubFlag: "false",
      activeName: "",
      userNo: "",
      pactNo: "",
      custInfo: {},
      basicPactMsg: {},
      addPChangeMsg: {
        pactNo: "",
        userNo: "",
        changeTime: "",
        changeType: "",
        changeContent: "",
        attachm: ""
      },
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      custPostList: [],
      custClassList: [],
      pactMsgRules: {
        changeTime: [
          {
            required: true,
            message: "请选择变更日期",
            trigger: "change"
          }
        ],
        changeType: [
          {
            required: true,
            message: "请选择变更类别",
            trigger: "blur"
          }
        ],
        changeContent: [
          {
            required: true,
            message: "请输入变更内容",
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
    this.userNo = sessionStorage.getItem("contractInfo_userNo");
    if (sessionStorage.getItem("contractInfo_pactSubFlag") == "true") {
      this.pactSubFlag = sessionStorage.getItem("contractInfo_pactSubFlag");
      this.activeName = "changePactMsg";
    }
    this.addPChangeMsg.pactNo = this.pactNo;
    this.addPChangeMsg.userNo = this.userNo;
    this.getPactDetail();
    this.getCustInfo();
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  methods: {
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

    changeTimeChange(val) {
      this.addPChangeMsg.changeTime = val;
    },
    // 文件上传
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
      }
      return isLt2M; //extension || extension2 || extension3 || extension4 &&
    },
    handleFileUpload(file, fileList) {
      this.addPChangeMsg.attachm = file.name;
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_response", res);
      if (res.code == "S00000") {
        this.$message({ type: "success", message: "操作成功!" });
        if (this.pactSubFlag == "true") {
          this.$router.push("/detail_contract");
        } else {
          this.$router.push("/query_contract");
        }
      } else this.$message.error(res.retMsg);
    },
    handleSave() {
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
        if (this.addPChangeMsg.attachm != "") {
          this.$refs.upload.submit(); // 触发上传文件
        } else {
          console.log("newPChange", this.addPChangeMsg);
          this.$axios
            .post("/iem_hrm/pact/addPactChange", this.addPChangeMsg)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                if (this.pactSubFlag == "true") {
                  this.$router.push("/detail_contract");
                } else {
                  this.$router.push("/query_contract");
                }
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        }
      }
      // this.$refs[pactMsgRules].validate(valid => {
      //   if (valid) {
      //   } else {
      //     console.log("error submit!!");
      //     this.$message({
      //       type: "error",
      //       message: "请确保必填信息填写正确!"
      //     });
      //     return false;
      //   }
      // });
    }
  }
};
</script>

<style>

</style>