<template>
    <div class="container-wrap">
        <current yiji="人事事务" erji="人事合同" sanji="合同修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同修改</span>
                <el-button type="primary" @click="handleSave('editPactMsgRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="editPactMsg" :rules="pactMsgRules" ref="editPactMsgRules" :label-position="labelPosition" label-width="110px">
                    <el-col :span="24">
                        <el-form-item label="合同编号">
                            <el-input v-model="editPactMsg.pactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="纸质合同编号">
                            <el-input v-model="editPactMsg.paperPactNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同名称">
                            <el-input v-model="editPactMsg.pactName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称">
                            <el-input v-model="editPactMsg.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门名称">
                            <el-input v-model="editPactMsg.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工号">
                            <el-input v-model="editPactMsg.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="员工姓名">
                            <el-input v-model="editPactMsg.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="性别">
                            <el-input v-model="_sex" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="身份证">
                            <el-input v-model="editPactMsg.certNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同类型" prop="pactType">
                            <el-select v-model="editPactMsg.pactType">
                                <el-option label="劳动合同" value="01"></el-option>
                                <el-option label="保密协议" value="02"></el-option>
                                <el-option label="其他" value="99"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="签订日期" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.signTime" @change="signTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同开始日期" prop="pactStartTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactStartTime" :picker-options="pactStartTimeOption" @change="pactStartTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同结束日期" prop="pactEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactEndTime" :picker-options="pactEndTimeOption" @change="pactEndTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同状态" prop="pactStatus">
                            <el-select v-model="editPactMsg.pactStatus">
                                <el-option label="试用" value="01"></el-option>
                                <el-option label="有效" value="02"></el-option>
                                <el-option label="提前解除" value="03"></el-option>
                                <el-option label="到期解除" value="04"></el-option>
                                <el-option label="其他" value="99"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同年限" prop="pactExpires">
                            <el-input v-model="editPactMsg.pactExpires"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="终止日期" prop="pactStopTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editPactMsg.pactStopTime" :picker-options="pactStopTimeOption" @change="pactStopTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同附件">
				  		    <el-input v-model="editPactMsg.attachm"></el-input>
				  		    <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                            </el-upload>
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
                        <el-form-item label=" " prop="autoudFlag">
                            <el-checkbox v-model="_autoudFlag">自动更新员工资料</el-checkbox>
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
      custInfo: {},
      editPactMsg: {},
      pactStartTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.signTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactEndTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.pactStartTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactStopTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.editPactMsg.pactEndTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactMsgRules: {
        pactType: [{ required: true, message: "合同类型不能为空", trigger: "change" }],
        signTime: [
          {
            required: true,
            message: "签订日期不能为空",
            trigger: "change"
          }
        ],
        pactStartTime: [
          {
            required: true,
            message: "合同开始日期不能为空",
            trigger: "change"
          }
        ],
        pactEndTime: [
          {
            required: true,
            message: "合同结束日期不能为空",
            trigger: "change"
          }
        ],
        pactStatus: [{ required: true, message: "合同状态不能为空", trigger: "change" }],
        pactExpires: [{ required: true, message: "合同年限不能为空", trigger: "change" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    // this.pactNo = this.$route.params.pactNo;
    this.pactNo = sessionStorage.getItem("contractInfo_pactNo");
    // 初始查合同基本详情
    this.getPactDetail();
  },
  computed: {
    _sex: function() {
      if (this.editPactMsg.sex == "01") {
        return "男";
      } else if (this.editPactMsg.sex == "02") {
        return "女";
      } else if (this.editPactMsg.sex == "99") {
        return "其他";
      } else {
        return "";
      }
    },
    _autoudFlag: {
      get: function() {
        if (
          this.editPactMsg.autoudFlag == "01" ||
          this.editPactMsg.autoudFlag == true
        ) {
          return true;
        } else if (
          this.editPactMsg.autoudFlag == "02" ||
          this.editPactMsg.autoudFlag == false
        ) {
          return false;
        }
      },
      set: function(val) {
        if (val == true) {
          this.editPactMsg.autoudFlag = "01";
        } else {
          this.editPactMsg.autoudFlag = "02";
        }
      }
    }
  },
  methods: {
    getPactDetail() {
      const self = this;
      let params = {
        pactNo: this.pactNo
      };
      self.$axios
        .get("/iem_hrm/pact/queryPactDetail", { params: params })
        .then(res => {
          console.log("pactDetailMsg:", res);
          self.editPactMsg = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.editPactMsg.attachm = file.name;
    },
    signTimeChange(val) {
      this.editPactMsg.signTime = val;
    },
    pactStartTimeChange(val) {
      this.editPactMsg.pactStartTime = val;
    },
    pactEndTimeChange(val) {
      this.editPactMsg.pactEndTime = val;
    },
    pactStopTimeChange(val) {
      this.editPactMsg.pactStopTime = val;
    },
    handleSave(editPactMsgRules) {
      this.$refs[editPactMsgRules].validate(valid => {
        if (valid) {
          let editPact = {};
          editPact.pactNo = this.editPactMsg.pactNo;
          editPact.paperPactNo = this.editPactMsg.paperPactNo;
          editPact.pactName = this.editPactMsg.pactName;
          editPact.userNo = this.editPactMsg.userNo;
          editPact.pactType = this.editPactMsg.pactType;
          editPact.signTime = this.editPactMsg.signTime;
          editPact.pactStartTime = this.editPactMsg.pactStartTime;
          editPact.pactEndTime = this.editPactMsg.pactEndTime;
          editPact.pactStatus = this.editPactMsg.pactStatus;
          editPact.pactExpires = this.editPactMsg.pactExpires;
          editPact.pactStopTime = this.editPactMsg.pactStopTime;
          editPact.attachm = this.editPactMsg.attachm;
          editPact.stopReason = this.editPactMsg.stopReason;
          editPact.remark = this.editPactMsg.remark;
          editPact.autoudFlag = this.editPactMsg.autoudFlag;
          console.log(editPact);
          this.$axios
            .put("/iem_hrm/pact/updatePact", editPact)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" });
                this.$router.push("/personnel_contract");
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
