<template>
    <div class="edit_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更修改" :activeTab="activeName">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更修改</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="合同编号" prop="pactNo">
                            <el-input v-model="basicPactMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同名称" prop="pactName">
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
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="basicPactMsg.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="basicPactMsg.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证" prop="cert">
                            <el-input v-model="basicPactMsg.cert" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organName">
                            <el-select v-model="basicPactMsg.organName" :disabled="true">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门" prop="derpName">
                            <el-select v-model="basicPactMsg.derpName" :disabled="true">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位" prop="custPost">
                            <el-input v-model="basicPactMsg.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custClass">
                            <el-input v-model="basicPactMsg.custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="rank">
                            <el-input v-model="basicPactMsg.rank" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">合同变更信息</el-col>
                <el-form :inline="true" :model="editPChangeMsg" :rules="rules" ref="editPChangeMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="变更时间" prop="changeTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPChangeMsg.changeTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="变更类别" prop="changeType">
                            <el-select v-model="editPChangeMsg.changeType">
                                <el-option label="条款变更" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="变更内容" prop="changeContent">
                            <el-input type="textarea" v-model="editPChangeMsg.changeContent"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件" prop="attachm">
                            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
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
      pactNo: "",
      changeId: "",
      basicPactMsg: {},
      editPChangeMsg: {},
      rules: {
        changeTime: [{ type: 'date', required: true, message: '请选择变更日期', trigger: 'change' }],
        changeType: [{ required: true, message: "请选择变更类别", trigger: "blur" }],
        changeContent: [{ required: true, message: "请输入变更内容", trigger: "blur" }]
      }
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
          self.editPChangeMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleSave() {
      let newPChange = {};
      newPChange.pactNo = this.pactNo;
      newPChange.changeId = this.changeId;
      newPChange.changeTime = this.editPChangeMsg.changeTime;
      newPChange.changeType = this.editPChangeMsg.changeType;
      newPChange.changeContent = this.editPChangeMsg.changeContent;
      this.$axios
        .post("/iem_hrm/pact/updatePactChange", newPChange)
        .then(res => {
          console.log(res);
          if (res.data.code == "S00000")
            this.$router.push({
                    name: 'personnel_contract',
                    params: {
                        pactNo:this.pactNo,
                        activeTab: this.activeName
                    }
                });
          else this.$message.error("合同变更修改失败！");
        })
        .catch(() => {
          this.$message.error("合同变更修改失败！");
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
