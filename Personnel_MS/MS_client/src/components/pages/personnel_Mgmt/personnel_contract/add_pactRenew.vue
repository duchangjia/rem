<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同续签">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同续签</span>
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
                        <el-form-item label="上次生效时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStartTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="上次到期时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactEndTime" :disabled="true" style="width: 100%;"></el-date-picker>
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
                <el-col :span="24" class="item-title">合同续签信息</el-col>
                <el-form :inline="true" :model="addPRenewMsg" :rules="pactMsgRules" ref="pactMsgRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPRenewMsg.renewTime" @change="renewTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签类别" prop="renewType">
                            <el-select v-model="addPRenewMsg.renewType">
                                <el-option label="合同延期" value="01"></el-option>
                                <el-option label="其他" value="99"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签生效时间" prop="renewCameTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPRenewMsg.renewCameTime" :picker-options="renewCameTimeOption" @change="renewCameTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签失效时间" prop="renewLostTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPRenewMsg.renewLostTime" :picker-options="renewLostTimeOption" @change="renewLostTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="续签内容" prop="renewContent">
                            <el-input type="textarea" v-model="addPRenewMsg.renewContent"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件" prop="attachm">
                          <el-input v-model="addPRenewMsg.attachm"></el-input>
                          <el-upload class="upload-demo" style="height:0;" ref="upload" name="files" action="/iem_hrm/pact/addPactRenew" 
                                  :headers="token"
                                  :data="addPRenewMsg"
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
    let that = this;
    let validateRenewCameTime = (rule, value, callback) => {
      if (value < that.addPRenewMsg.renewTime) {
        callback(new Error("续签生效日期不能早于续签日期"));
      } else {
        callback();
      }
    };
    let validateRenewLostTime = (rule, value, callback) => {
      if (value < that.addPRenewMsg.renewCameTime) {
        callback(new Error("续签失效日期不能早于续签生效日期"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      pactSubFlag: "false",
      activeName: "",
      userNo: "",
      pactNo: "",
      custInfo: {},
      basicPactMsg: {},
      addPRenewMsg: {
        pactNo: "",
        renewTime: "",
        renewCameTime: "",
        renewLostTime: "",
        renewType: "",
        renewContent: "",
        attachm: ""
      },
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      custPostList: [],
      custClassList: [],
      renewCameTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.addPRenewMsg.renewTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      renewLostTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.addPRenewMsg.renewCameTime).getTime() -
              3600 * 1000 * 24
          );
        }
      },
      pactMsgRules: {
        renewTime: [{ required: true, message: "请选择续签日期", trigger: "change" }],
        renewCameTime: [
          { required: true, message: "请选择续签生效日期", trigger: "change" },
          { type: "date", validator: validateRenewCameTime, trigger: "change" }
        ],
        renewLostTime: [
          { required: true, message: "请选择续签失效日期", trigger: "change" },
          { type: "date", validator: validateRenewLostTime, trigger: "change" }
        ],
        renewType: [{ required: true, message: "请选择续签类别", trigger: "blur" }],
        renewContent: [{ required: true, message: "请输入续签内容", trigger: "blur" }]
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
      this.activeName = "renewPactMsg";
    }
    this.addPRenewMsg.pactNo = this.pactNo;
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
        .get("/iem_hrm/pact/queryPactDetail", { params: params })
        .then(res => {
          console.log("basicPactMsg", res);
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
    renewTimeChange(val) {
      this.addPRenewMsg.renewTime = val;
    },
    renewCameTimeChange(val) {
      this.addPRenewMsg.renewCameTime = val;
    },
    renewLostTimeChange(val) {
      this.addPRenewMsg.renewLostTime = val;
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
      this.addPRenewMsg.attachm = file.name;
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_response", res);
      if (res.code == "S00000") {
        this.$message({ type: "success", message: "操作成功!" });
        if (this.pactSubFlag == "true") {
          this.$router.push("/detail_contract");
        }
        this.$router.push("/query_contract");
      } else this.$message.error(res.retMsg);
    },
    handleSave(pactMsgRules) {
      this.$refs[pactMsgRules].validate(valid => {
        if (valid) {
          if (this.addPRenewMsg.attachm != "") {
            this.$refs.upload.submit(); // 触发上传文件
          } else {
            console.log("newPRenew:", this.addPRenewMsg);
            this.$axios
              .post("/iem_hrm/pact/addPactRenew", this.addPRenewMsg)
              .then(res => {
                console.log(res);
                if (res.data.code == "S00000") {
                  this.$message({ type: "success", message: "操作成功!" });
                  this.$router.push("/query_contract");
                  if (this.pactSubFlag == "true") {
                    this.$router.push("/detail_contract");
                  }
                } else this.$message.error(res.data.retMsg);
              })
              .catch(() => {
                this.$message.error("操作失败！");
              });
          }
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
