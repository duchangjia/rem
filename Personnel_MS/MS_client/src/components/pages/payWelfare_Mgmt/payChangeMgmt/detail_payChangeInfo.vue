<template>
    <div class="add_paybaseinfo">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="申请部门">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
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
                <el-col :span="24" class="item-title">调整前薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="payChangeDetail.oWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="payChangeDetail.oWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="payChangeDetail.oPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="payChangeDetail.oOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="payChangeDetail.oEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="payChangeDetail.oMediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="payChangeDetail.oUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="payChangeDetail.oEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="payChangeDetail.oMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="payChangeDetail.oHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="payChangeDetail.oWelcoeNo" :disabled="true">
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="payChangeDetail.nWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="payChangeDetail.nWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="payChangeDetail.nPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="payChangeDetail.nOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="payChangeDetail.nEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="payChangeDetail.nMediBase" :disabled="true"</el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="payChangeDetail.nUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="payChangeDetail.nEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="payChangeDetail.nMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="payChangeDetail.nHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="payChangeDetail.nWelcoeNo" @change="nWelcoeNoChange" :disabled="true">
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                        <el-form-item label="养老保险(个人)">
                            <el-input v-model="insurancePayTemp.perEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="养老保险(单位)">
                            <el-input v-model="insurancePayTemp.comEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险(个人)">
                            <el-input v-model="insurancePayTemp.perMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险(单位)">
                            <el-input v-model="insurancePayTemp.comMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险(个人)">
                            <el-input v-model="insurancePayTemp.perUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险(单位)">
                            <el-input v-model="insurancePayTemp.comUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险(个人)">
                            <el-input v-model="insurancePayTemp.perEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险(单位)">
                            <el-input v-model="insurancePayTemp.comEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险(个人)">
                            <el-input v-model="insurancePayTemp.perMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险(单位)">
                            <el-input v-model="insurancePayTemp.comMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金(个人)">
                            <el-input v-model="insurancePayTemp.perHousFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金(单位)">
                            <el-input v-model="insurancePayTemp.comHousFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="调薪说明" prop="remark">
                            <el-input type="textarea" v-model="payChangeDetail.remark" :disabled="true"></el-input>
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
      applyNo: "",
      custInfo: {},
      payChangeDetail: {},
      insurancePayTemplates: {},
      insurancePayTemp: {}
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.applyNo = this.$route.params.applyNo;
    this.getCustInfo(); // 查询用户信息
    this.getPayChangeDetail(); //初始查询调薪基数信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getInsurancePayTemp(); // 初始查询保险缴纳标准
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
    _updFlag: {
      get: function() {
        if (
          this.payChangeDetail.updFlag == "01" ||
          this.payChangeDetail.updFlag == true
        ) {
          return true;
        } else if (
          this.payChangeDetail.updFlag == "02" ||
          this.payChangeDetail.updFlag == false
        ) {
          return false;
        }
      },
      set: function(val) {
        if (val == true) {
          this.payChangeDetail.updFlag = "01";
        } else {
          this.payChangeDetail.updFlag = "02";
        }
      }
    }
  },
  methods: {
    getCustInfo() {
      const self = this;
      let userNo = self.userNo;
      self.$axios
        .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/" + userNo)
        .then(res => {
          console.log(res);
          self.custInfo = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getPayChangeDetail() {
      const self = this;
      let params = {
        userNo: self.userNo,
        applyNo: self.applyNo
      };
      self.$axios
        .get("/iem_hrm/epPayChageInf/queryDetailEpPayChageInf", {
          params: params
        })
        .then(res => {
          console.log(res);
          self.payChangeDetail = res.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getAllInsurancePayTemplate() {
      const self = this;
      self.$axios
        .get("/iem_hrm/InsurancePayTemplate/queryAllInsurancePayTemplate")
        .then(res => {
          self.insurancePayTemplates = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getInsurancePayTemp() {
      const self = this;
      let applyNo = self.payChangeDetail.nWelcoeNo;
      self.$axios
        .get(
          "/iem_hrm/InsurancePayTemplate/queryInsurancePayTemplate/" + applyNo
        )
        .then(res => {
          self.insurancePayTemp = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    nWelcoeNoChange(val) {
      this.payChangeDetail.nWelcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值计算保险缴纳标准
    },
  }
};
</script>

<style>
.add_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
