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
                <el-form :inline="true" :model="editPRenewMsg" :label-position="labelPosition" label-width="110px">
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
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职务">
                            <el-input v-model="custInfo.post" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-input v-model="_custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">合同续签信息</el-col>
                <el-form :inline="true" :model="editPRenewMsg" :rules="pactMsgRules" ref="pactMsgRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewTime" @change="renewTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签类别" prop="renewType">
                            <el-input v-model="_renewType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签生效时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewCameTime" :picker-options="renewCameTimeOption" @change="renewCameTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签失效时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewLostTime" :picker-options="renewLostTimeOption" @change="renewLostTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="续签内容" prop="renewContent">
                            <el-input type="textarea" v-model="editPRenewMsg.renewContent"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件">
				  		    <el-input v-model="editPRenewMsg.attachm"></el-input>
				  		    <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
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
        renewTime: [
          { required: true, message: "请选择续签日期", trigger: "change" }
        ],
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
    this.renewId = sessionStorage.getItem("contractInfo_renewId");
    this.getCustInfo();
    this.getPRenewDetail();
  },
  computed: {
    _custClass: function() {
      if (this.custInfo.custClass == "B10") {
        return "B10-初级软件工程师";
      } else if (this.custInfo.custClass == "B11") {
        return "B11-中级软件工程师";
      } else if (this.custInfo.custClass == "B12") {
        return "B12-高级软件工程师";
      } else {
        return "";
      }
    },
    _renewType: function() {
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
        .get("/iem_hrm/pact/queryPactRenewDetail", { params: params })
        .then(res => {
          console.log("editPRenewMsg", res);
          self.editPRenewMsg = res.data.data;
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

    renewTimeChange(val) {
      this.editPRenewMsg.renewTime = val;
    },
    renewCameTimeChange(val) {
      this.editPRenewMsg.renewCameTime = val;
    },
    renewLostTimeChange(val) {
      this.editPRenewMsg.renewLostTime = val;
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.editPRenewMsg.attachm = file.name;
    },
    handleSave(pactMsgRules) {
      this.$refs[pactMsgRules].validate(valid => {
        if (valid) {
          let newPRenew = {};
          newPRenew.pactNo = this.pactNo;
          newPRenew.renewId = this.renewId;
          newPRenew.renewTime = this.editPRenewMsg.renewTime;
          newPRenew.renewCameTime = this.editPRenewMsg.renewCameTime;
          newPRenew.renewLostTime = this.editPRenewMsg.renewLostTime;
          newPRenew.renewType = this.editPRenewMsg.renewType;
          newPRenew.renewContent = this.editPRenewMsg.renewContent;
          newPRenew.attachm = this.editPRenewMsg.attachm;
          console.log("newPRenew:", newPRenew);
          this.$axios
            .put("/iem_hrm/pact/updatePactRenew", newPRenew)
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
          return false;
        }
      });
    }
  }
};
</script>

<style>

</style>
