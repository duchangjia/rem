<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更详情</span>
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
                        <el-form-item label="合同签约时间" prop="signTime">
                            <el-date-picker type="date" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同终止时间" prop="pactStopTime">
                            <el-date-picker type="date" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
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
                <el-form :inline="true" :model="detailPChangeMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPChangeMsg.changeTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="变更类别" prop="changeType">
                            <el-input v-model="_changeType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="变更内容">
                            <el-input type="textarea" v-model="detailPChangeMsg.changeContent" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新人">
                            <el-input v-model="detailPChangeMsg.updatedBy" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新时间" prop="updatedDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPChangeMsg.updatedDate" :disabled="true" style="width: 100%;"></el-date-picker>
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
      activeName: "changePactMsg",
      userNo: "",
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      custInfo: {},
      detailPChangeMsg: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      custPostList: [],
      custClassList: []
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
    this.userNo = sessionStorage.getItem("contractInfo_userNo");
    this.changeId = sessionStorage.getItem("contractInfo_changeId");
    this.getPactDetail(); // 合同基本信息
    this.getCustInfo(); // 用户信息
    this.getPChangeDetail(); // 合同变更信息
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  computed: {
    _changeType: function() {
      if (this.detailPChangeMsg.changeType == "01") {
        return "条款变更";
      } else if (this.detailPChangeMsg.changeType == "99") {
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
          self.detailPChangeMsg = res.data.data;
          console.log("detailPChangeMsg", self.detailPChangeMsg);
          if (
            self.detailPChangeMsg.epFileManageList &&
            self.detailPChangeMsg.epFileManageList.length >= 1
          ) {
            self.fileList = self.detailPChangeMsg.epFileManageList;
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
