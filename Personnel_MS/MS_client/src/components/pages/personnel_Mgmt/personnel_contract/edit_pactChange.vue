<template>
    <div class="edit_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更修改" :activeTab="activeName">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更修改</span>
                <el-button type="primary" @click="handleSave('pactMsgRules')" class="toolBtn">保存</el-button>
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
                        <el-form-item label="合同签约时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同终止时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">员工信息</el-col>
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="工号">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证">
                            <el-input v-model="custInfo.cert" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位">
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务">
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级">
                            <el-input v-model="_custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">合同变更信息</el-col>
                <el-form :inline="true" :model="editPChangeMsg" :rules="pactMsgRules" ref="pactMsgRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPChangeMsg.changeTime" @change="changeTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
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
				  		    <el-input v-model="editPChangeMsg.attachm"></el-input>
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
    return {
      labelPosition: "right",
      activeName: "changePactMsg",
      userNo: "",
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      custInfo: {},
      editPChangeMsg: {},
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
    this.userNo = this.$route.params.userNo;
    this.pactNo = this.$route.params.pactNo;
    this.changeId = this.$route.params.changeId;
    this.getPactDetail();
    this.getCustInfo(); 
    this.getPChangeDetail();
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
          console.log('PChangeDtl',res);
          self.editPChangeMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    changeTimeChange(val) {
      this.editPChangeMsg.changeTime = val;
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.editPChangeMsg.attachm = file.name;
    },
    handleSave(pactMsgRules) {
      this.$refs[pactMsgRules].validate(valid => {
        if (valid) {
          let newPChange = {};
          newPChange.pactNo = this.pactNo;
          newPChange.changeId = this.changeId;
          newPChange.changeTime = this.editPChangeMsg.changeTime;
          newPChange.changeType = this.editPChangeMsg.changeType;
          newPChange.changeContent = this.editPChangeMsg.changeContent;
          newPChange.attachm = this.editPChangeMsg.attachm;
          this.$axios
            .put("/iem_hrm/pact/updatePactChange", newPChange)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.$router.push({
                  name: "personnel_contract",
                  params: {
                    pactNo: this.pactNo,
                    activeTab: this.activeName
                  }
                });
              } else this.$message.error("操作失败！");
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
.edit_pactChange {
  padding: 0 0 20px 20px;
}
</style>
