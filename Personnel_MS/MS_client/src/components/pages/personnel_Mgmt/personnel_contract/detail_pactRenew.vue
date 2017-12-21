<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同续签详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同续签详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="detailPRenewMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同编号">
                            <el-input v-model="detailPRenewMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同名称">
                            <el-input v-model="detailPRenewMsg.pactName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="上次生效时间">
                            <el-date-picker type="date" v-model="detailPRenewMsg.renewCameTimeLast" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="上次到期时间">
                            <el-date-picker type="date" v-model="detailPRenewMsg.renewLostTimeLast" :disabled="true" style="width: 100%;"></el-date-picker>
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
                <el-form :inline="true" :model="detailPRenewMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签类别" prop="renewType">
                            <el-input v-model="_renewType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签生效时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewCameTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="续签失效时间" prop="renewEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewLostTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="续签内容">
                            <el-input type="textarea" v-model="detailPRenewMsg.renewContent" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
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
      activeName: "renewPactMsg",
      userNo: "",
      pactNo: "",
      changeId: "",
      custInfo: {},
      detailPRenewMsg: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
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
    this.getCustInfo(); // 用户信息
    this.getPRenewDetail(); // 合同续签信息
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
      if (this.detailPRenewMsg.renewType == "01") {
        return "合同延期";
      } else if (this.detailPRenewMsg.renewType == "99") {
        return "其他";
      } else {
        return "";
      }
    }
  },
  methods: {
    getPRenewDetail(pactNo) {
      const self = this;
      let params = {
        pactNo: self.pactNo,
        renewId: self.renewId
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactRenewDetail", { params: params })
        .then(res => {
          self.detailPRenewMsg = res.data.data;
          console.log("detailPRenewMsg", self.detailPRenewMsg);
          if (
            self.detailPRenewMsg.epFileManageList &&
            self.detailPRenewMsg.epFileManageList.length >= 1
          ) {
            self.fileList = self.detailPRenewMsg.epFileManageList;
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
    // 附件下载
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
          this.$message({ message: "下载附件失败", type: "error" });
        });
    }
  }
};
</script>

<style>

</style>
