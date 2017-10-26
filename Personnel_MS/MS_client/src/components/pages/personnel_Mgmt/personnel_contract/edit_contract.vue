<template>
    <div class="edit_contract">
        <current yiji="人事事务" erji="人事合同" sanji="合同修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同修改</span>
                <el-button type="primary" @click="handleSave('editPactMsgRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="editPactMsg" :rules="rules" ref="editPactMsgRules" :label-position="labelPosition" label-width="110px">
                    <el-col :span="24">
                        <el-form-item label="合同编号" prop="pactNo">
                            <el-input v-model="editPactMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="纸质合同编号" prop="paperPactNo">
                            <el-input v-model="editPactMsg.paperPactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同名称" prop="pactName">
                            <el-input v-model="editPactMsg.pactName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司名称" prop="organName">
                            <el-select v-model="editPactMsg.organName">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门名称" prop="derpName">
                            <el-select v-model="editPactMsg.derpName">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="editPactMsg.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="员工姓名" prop="custName">
                            <el-input v-model="editPactMsg.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="性别" prop="sex">
                            <el-select v-model="editPactMsg.sex">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证" prop="cert">
                            <el-input v-model="editPactMsg.cert"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同类型" prop="pactType">
                            <el-select v-model="editPactMsg.pactType">
                                <el-option label="劳动合同" value="1"></el-option>
                                <el-option label="保密协议" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="签订日期" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.signTime" :picker-options="pactSignOption" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同开始日期" prop="pactStartTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactStartTime" :picker-options="pactStartOption" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同结束日期" prop="pactEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactEndTime" :picker-options="pactEndOption" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同状态" prop="pactStatus">
                            <el-select v-model="editPactMsg.pactStatus">
                                <el-option label="已生效" value="1"></el-option>
                                <el-option label="未生效" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同年限" prop="pactExpires">
                            <el-input v-model="editPactMsg.pactExpires"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="终止日期" prop="pactStopTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactStopTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同附件" prop="attachm">
                            <!-- <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
                                                                                                            <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                                                                                                        </el-upload> -->
                            <el-input v-model="editPactMsg.attachm"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="终止原因" prop="stopReason">
                            <el-input type="textarea" v-model="editPactMsg.stopReason"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input type="textarea" v-model="editPactMsg.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" " prop="autoupFlag">
                            <el-checkbox v-model="checked">自动更新员工资料</el-checkbox>
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
    return {
      labelPosition: "right",
      pactNo: "",
      editPactMsg: {},
      pactSignOption: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      pactStartOption: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      pactEndOption: {
        disabledDate(time) {
          return (
            time.getTime() < Date.now() - 8.64e7 ||
            time.getTime() < new Date(that.editPactMsg.pactStartTime).getTime()
          );
        }
      },
      rules: {
        pactType: [{ required: true, message: "合同类型不能为空", trigger: "change" }],
        signTime: [{ type: "date", required: true, message: "签订日期不能为空", trigger: "change" }],
        pactStartTime: [{ type: "date", required: true, message: "合同开始日期不能为空", trigger: "change" }],
        pactEndTime: [{ type: "date", required: true, message: "合同结束日期不能为空", trigger: "change"}],
        pactStatus: [{ required: true, message: "合同状态不能为空", trigger: "change" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.pactNo = this.$route.params.pactNo;
    // 初始查合同基本详情
    this.getPactDtl();
  },
  methods: {
    getPactDtl() {
      const self = this;
      let params = {
        pactNo: this.pactNo
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactDetail", { params: params })
        .then(res => {
          console.log(res);
          self.editPactMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleSave(editPactMsgRules) {
      this.$refs[editPactMsgRules].validate(valid => {
        if (valid) {
          let editPact = {};
          editPact.pactNo = this.editPactMsg.pactNo;
          editPact.paperPactNo = this.editPactMsg.paperPactNo;
          editPact.pactName = this.editPactMsg.pactName;
          console.log(editPact);
          this.$axios
            .post("/iem_hrm/pact/updatePact", editPact)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000")
                this.$router.push("/personnel_contract");
              else this.$message.error("合同修改失败！");
            })
            .catch(() => {
              this.$message.error("合同修改失败！");
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
.edit_contract {
  padding: 0 0 20px 20px;
}
</style>
