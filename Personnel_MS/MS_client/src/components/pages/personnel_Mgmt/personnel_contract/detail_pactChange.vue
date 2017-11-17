<template>
    <div class="detail_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更详情" :activeTab="activeName" :pactNo="pactNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更详情</span>
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
                        <el-form-item label="合同签约时间" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同终止时间" prop="pactStopTime">
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
                <el-col :span="24" class="item-title">合同变更信息</el-col>
                <el-form :inline="true" :model="detailPChangeMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPChangeMsg.changeTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="变更类别" prop="changeType">
                            <el-input v-model="_changeType" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="变更内容">
                            <el-input type="textarea" v-model="detailPChangeMsg.changeContent" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="最新更新人">
                            <el-input v-model="detailPChangeMsg.updateBy" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="最新更新时间" prop="updateDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="detailPChangeMsg.updateDate" :disabled="true" style="width: 100%;"></el-date-picker>
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
      activeName: "changePactMsg",
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      detailPChangeMsg: {}
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = this.$route.params.pactNo;
    this.changeId = this.$route.params.changeId;
    this.getPactDtl(this.pactNo);
    this.getPChangeDtl();
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
    getPChangeDtl(pactNo) {
      const self = this;
      let params = {
        pactNo: self.pactNo,
        changeId: self.changeId
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactChangeDetail", { params: params })
        .then(res => {
          console.log(res);
          self.detailPChangeMsg = res.data.data;
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
.detail_pactChange {
  padding: 0 0 20px 20px;
}
</style>
