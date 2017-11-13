<template>
    <div class="add_contract">
        <current yiji="人事事务" erji="人事合同" sanji="合同新增">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同新增</span>
                <el-button type="primary" @click="handleSave('addPactMsgRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="addPactMsg" :rules="rules" ref="addPactMsgRules" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="纸质合同编号" prop="paperPactNo">
                            <el-input v-model="addPactMsg.paperPactNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同名称" prop="pactName">
                            <el-input v-model="addPactMsg.pactName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司名称" prop="organNo">
                            <el-select v-model="addPactMsg.organNo">
                                <el-option label="总公司" value="0001"></el-option>
                                <el-option label="深圳分公司" value="0002"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门名称" prop="derpNo">
                            <el-select v-model="addPactMsg.derpNo">
                                <el-option label="财务部" value="0001"></el-option>
                                <el-option label="技术部" value="0002"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="addPactMsg.userNo">
                                <el-button slot="append" icon="search" @click="searchUserNo"></el-button>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="员工姓名" prop="custName">
                            <el-input v-model="addPactMsg.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="性别" prop="sex">
                            <el-select v-model="addPactMsg.sex">
                                <el-option label="男" value="01"></el-option>
                                <el-option label="女" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="身份证" prop="cert">
                            <el-input v-model="addPactMsg.cert"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同类型" prop="pactType">
                            <el-select v-model="addPactMsg.pactType">
                                <el-option label="劳动合同" value="01"></el-option>
                                <el-option label="保密协议" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="签订日期" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.signTime" @change="signTimeChange" :picker-options="pactSignOption" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同开始日期" prop="pactStartTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactStartTime" @change="pactStartTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同结束日期" prop="pactEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactEndTime" @change="pactEndTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同状态" prop="pactStatus">
                            <el-select v-model="addPactMsg.pactStatus">
                                <el-option label="已生效" value="01"></el-option>
                                <el-option label="未生效" value="02"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同年限" prop="pactExpires">
                            <el-input v-model="addPactMsg.pactExpires"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="终止日期" prop="pactStopTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactStopTime" @change="pactStopTimeChange" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同附件" prop="attachm">
				  		    <el-input v-model="addPactMsg.attachm"></el-input>
				  		    <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                            </el-upload>
				  	    </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24">
                        <el-form-item label="终止原因" prop="stopReason">
                            <el-input type="textarea" v-model="addPactMsg.stopReason"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input type="textarea" v-model="addPactMsg.remark"></el-input>
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
      addPactMsg: {
        paperPactNo: "",
        pactName: "",
        organName: "",
        derpName: "",
        userNo: "",
        custName: "",
        sex: "",
        cert: "",
        pactType: "",
        signTime: "",
        pactStartTime: "",
        pactEndTime: "",
        pactStatus: "",
        pactExpires: "",
        pactStopTime: "",
        attachm: "",
        stopReason: "",
        remark: ""
      },
      rules: {
        userNo: [{ required: true, message: "工号不能为空", trigger: "blur" }],
        pactType: [{ required: true, message: "合同类型不能为空", trigger: "change" }],
        signTime: [{ type: "date", required: true, message: "签订日期不能为空", trigger: "change" }],
        pactStartTime: [{ type: "date", required: true, message: "合同开始日期不能为空", trigger: "change"}],
        pactEndTime: [{ type: "date", required: true, message: "合同结束日期不能为空", trigger: "change" }],
        pactStatus: [{ required: true, message: "合同状态不能为空", trigger: "change" }]
      }
    };
  },
  components: {
    current
  },
  methods: {
    searchUserNo() {
      // 查询工号
    },
    signTimeChange(val) {
      this.addPactMsg.signTime = val;
    },
    pactStartTimeChange(val) {
      this.addPactMsg.pactStartTime = val;
    },
    pactEndTimeChange(val) {
      this.addPactMsg.pactEndTime = val;
    },
    pactStopTimeChange(val) {
      this.addPactMsg.pactStopTime = val;
    },
    handleFileUpload(file, fileList) {
      // this.fileList3 = fileList.slice(-3);
      console.log(file);
      this.addPactMsg.attachm = file.name;
    },
    handleSave(addPactMsgRules) {
      this.$refs[addPactMsgRules].validate(valid => {
        if (valid) {
          let newPact = {};
          newPact.paperPactNo = this.addPactMsg.paperPactNo;
          newPact.pactName = this.addPactMsg.pactName;
          newPact.organName = this.addPactMsg.organName;
          newPact.signTime = this.addPactMsg.signTime;
          console.log(newPact);
          this.$axios
            .post("/iem_hrm/pact/addPact", newPact)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000")
                this.$router.push("/personnel_contract");
              else this.$message.error("合同新增失败！");
            })
            .catch(() => {
              this.$message.error("合同新增失败！");
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
.add_contract {
  padding: 0 0 20px 20px;
}
</style>
