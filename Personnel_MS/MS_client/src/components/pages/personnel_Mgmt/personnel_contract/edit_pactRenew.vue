<template>
    <div class="edit_pactRenew">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同续签修改" :activeTab="activeName">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同续签修改</span>
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
                <el-col :span="24" class="item-title">合同续签信息</el-col>
                <el-form :inline="true" :model="editPRenewMsg" :rules="rules" ref="editPRenewMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="续签生效时间" prop="renewTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="续签失效时间" prop="renewEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPRenewMsg.renewTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="续签类别" prop="renewType">
                            <el-select v-model="editPRenewMsg.renewType">
                                <el-option label="合同延期" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="续签内容" prop="renewContent">
                            <el-input type="textarea" v-model="editPRenewMsg.renewContent"></el-input>
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
      activeName: "renewPactMsg",
      pactNo: "",
      renewId: "",
      basicPactMsg: {},
      editPRenewMsg: {},
      rules: {
        renewTime: [{ type: 'date', required: true, message: '请选择续签生效日期', trigger: 'change' }],
        renewEndTime: [{ type: 'date', required: true, message: '请选择续签失效日期', trigger: 'change' }],
        renewType: [{ required: true, message: "请选择续签类别", trigger: "blur" }],
        renewContent: [{ required: true, message: "请输入续签内容", trigger: "blur" }]
      }
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
          self.editPRenewMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleSave() {
      let newPRenew = {};
      newPRenew.pactNo = this.pactNo;
      newPRenew.renewId = this.renewId;
      newPRenew.renewTime = this.editPRenewMsg.renewTime;
      newPRenew.renewType = this.editPRenewMsg.renewType;
      newPRenew.renewContent = this.editPRenewMsg.renewContent;
      this.$axios
        .post("/iem_hrm/pact/updatePactRenew", newPRenew)
        .then(res => {
          console.log(res);
          if (res.data.code == "S00000")
            this.$router.push({
              name: "personnel_contract",
              params: {
                pactNo: this.pactNo,
                activeTab: this.activeName
              }
            });
          else this.$message.error("合同续签修改失败！");
        })
        .catch(() => {
          this.$message.error("合同续签修改失败！");
        });
    }
  }
};
</script>

<style>
.edit_pactRenew {
  padding: 0 0 20px 20px;
}
</style>
