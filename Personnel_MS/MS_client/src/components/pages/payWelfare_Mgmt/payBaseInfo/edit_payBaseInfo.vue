<template>
    <div class="add_contract">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数修改</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="editPayBaseInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organName">
                            <el-select v-model="editPayBaseInfo.organName">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门" prop="derpName">
                            <el-select v-model="editPayBaseInfo.derpName">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="editPayBaseInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="editPayBaseInfo.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custClass">
                            <el-input v-model="editPayBaseInfo.custClass"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="rank">
                            <el-input v-model="editPayBaseInfo.rank"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">薪酬基数信息</el-col>
                <el-form :inline="true" :model="editPayBaseInfo" :rules="rules" ref="addPayBaseInfo" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="wagesBase">
                            <el-input v-model="editPayBaseInfo.wagesBase"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="editPayBaseInfo.wagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="editPayBaseInfo.postPension"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                      <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="editPayBaseInfo.otherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                      <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="editPayBaseInfo.endmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="editPayBaseInfo.mediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="editPayBaseInfo.unemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="editPayBaseInfo.emplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="editPayBaseInfo.mateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="editPayBaseInfo.houseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="试用期比例" prop="probRatio">
                            <el-input v-model="editPayBaseInfo.probRatio"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="editPayBaseInfo.welcoeNo" @change="welcoeNoChange">
                                <el-option label="广州标准" value="1"></el-option>
                                <el-option label="深圳标准" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                      <el-form-item label="养老保险(个人)" prop="perEndmFixed">
                            <el-input v-model="insurancePayTemp.perEndmFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="养老保险(单位)" prop="comEndmFixed">
                            <el-input v-model="insurancePayTemp.comEndmFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="医疗保险(个人)" prop="perMediFixed">
                            <el-input v-model="insurancePayTemp.perMediFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="医疗保险(单位)" prop="comMediFixed">
                            <el-input v-model="insurancePayTemp.comMediFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="失业保险(个人)" prop="perUnemFixed">
                            <el-input v-model="insurancePayTemp.perUnemFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="失业保险(单位)" prop="comUnemFixed">
                            <el-input v-model="insurancePayTemp.comUnemFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="工伤保险(个人)" prop="perEmplFixed">
                            <el-input v-model="insurancePayTemp.perEmplFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="工伤保险(单位)" prop="comEmplFixed">
                            <el-input v-model="insurancePayTemp.comEmplFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="生育保险(个人)" prop="perMateFixed">
                            <el-input v-model="insurancePayTemp.perMateFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="生育保险(单位)" prop="comMateFixed">
                            <el-input v-model="insurancePayTemp.comMateFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="公积金(个人)" prop="perHousFixed">
                            <el-input v-model="insurancePayTemp.perHousFixed"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="公积金(单位)" prop="comHousFixed">
                            <el-input v-model="insurancePayTemp.comHousFixed"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="editPayBaseInfo" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="editPayBaseInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="附件" prop="attachm">
                            <el-upload class="upload-demo" ref="upload" action="" :show-file-list="false" :auto-upload="false">
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
      userNo: "",
      editPayBaseInfo: {},
      insurancePayTemp: {},
      rules: {
        wagesBase: [{ required: true, message: "请输入基本工资", trigger: "blur" }],
        wagesPerf: [{ required: true, message: "请输入绩效工资", trigger: "blur" }],
        postPension: [{ required: true, message: "请输入岗位补贴", trigger: "blur" }],
        otherPension: [{ required: true, message: "请输入其他补贴", trigger: "blur" }],
        endmBase: [{ required: true, message: "请输入养老保险基数", trigger: "blur" }],
        mediBase: [{ required: true, message: "请输入医疗保险基数", trigger: "blur" }],
        unemBase: [{ required: true, message: "请输入失业保险基数", trigger: "blur" }],
        emplBase: [{ required: true, message: "请输入工伤保险基数", trigger: "blur" }],
        mateBase: [{ required: true, message: "请输入生育保险基数", trigger: "blur" }],
        houseBase: [{ required: true, message: "请输入公积金基数", trigger: "blur" }],
        probRatio: [{ required: true, message: "请输入试用期比例", trigger: "blur" }],
        welcoeNo: [{ required: true, message: "请选择保险缴纳标准", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.getPayBaseInfoDetail(); //初始查询薪酬基数详情
    this.getInsurancePayTemp(); //初始查询保险缴纳标准
  },
  methods: {
    getPayBaseInfoDetail() {
      const self = this;
      let params = {
        userNo: self.userNo
      };
      self.$axios
        // .get("/iem_hrm/pay/queryPayBaseInfoDetail", { params: params })
        .get("/iem_hrm/queryPayBaseInfoDetail", { params: params })
        .then(res => {
          console.log(res);
          self.editPayBaseInfo = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getInsurancePayTemp() {
      const self = this;
      let params = {
        applyNo: self.editPayBaseInfo.welcoeNo
      };
      self.$axios
        // .get("/iem_hrm/InsurancePayTemplate/queryInsurancePayTemplate", { params: params })
        .get("/iem_hrm/queryInsurancePayTemplate", { params: params })
        .then(res => {
          console.log("已经请求保险缴纳标准回来了", res);
          self.insurancePayTemp = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    welcoeNoChange(val) {
      this.editPayBaseInfo.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值查询保险缴纳标准
    },
    handleSave() {
      let editPayBaseInfo = this.editPayBaseInfo;
      console.log(editPayBaseInfo);
      this.$axios
        // .post("/iem_hrm/pay/updatePayBaseInfo", editPayBaseInfo)
        .post("/iem_hrm/updatePayBaseInfo", editPayBaseInfo)
        .then(res => {
          console.log(res);
          if (res.data.code == "S00000")
            this.$router.push("/payBaseInfo_setting");
          else this.$message.error("薪酬基数修改失败！");
        })
        .catch(() => {
          this.$message.error("薪酬基数修改失败！");
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
