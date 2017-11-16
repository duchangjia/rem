<template>
    <div class="detail_pactRenew">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同续签详情" :activeTab="activeName" :pactNo="pactNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同续签详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="合同编号">
                            <el-input v-model="basicPactMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同名称">
                            <el-input v-model="basicPactMsg.pactName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="上次生效时间" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="上次到期时间" prop="pactStopTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">员工信息</el-col>
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="工号">
                            <el-input v-model="basicPactMsg.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input v-model="basicPactMsg.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证">
                            <el-input v-model="basicPactMsg.cert" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司">
                            <el-input v-model="basicPactMsg.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门">
                            <el-input v-model="basicPactMsg.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位">
                            <el-input v-model="basicPactMsg.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务">
                            <el-input v-model="basicPactMsg.post" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="custClass">
                            <el-input v-model="_custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">合同续签信息</el-col>
                <el-form :inline="true" :model="detailPRenewMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="续签时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="续签类别" prop="renewType">
                            <el-input v-model="_renewType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="续签生效时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="续签失效时间" prop="renewEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPRenewMsg.renewTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="续签内容">
                            <el-input type="textarea" v-model="detailPRenewMsg.renewContent" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件" prop="attachm">
					        <el-button class="downloadBtn" @click="downloadFile">下载</el-button>
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
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      detailPRenewMsg: {}
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = this.$route.params.pactNo;
    this.renewId = this.$route.params.renewId;
    this.getPactDtl(this.pactNo);
    this.getPRenewDtl();
  },
  computed: {
    _custClass: function() {
      if (this.basicPactMsg.custClass == "B10") {
        return "B10-初级软件工程师";
      } else if (this.basicPactMsg.custClass == "B11") {
        return "B11-中级软件工程师";
      } else if (this.basicPactMsg.custClass == "B12") {
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
    getPactDtl(pactNo) {
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
    getPRenewDtl(pactNo) {
      const self = this;
      let params = {
        pactNo: self.pactNo,
        renewId: self.renewId
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactRenewDetail", { params: params })
        .then(res => {
          console.log(res);
          self.detailPRenewMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    downloadFile() {}
  }
};
</script>

<style>
.detail_pactRenew {
  padding: 0 0 20px 20px;
}
</style>
