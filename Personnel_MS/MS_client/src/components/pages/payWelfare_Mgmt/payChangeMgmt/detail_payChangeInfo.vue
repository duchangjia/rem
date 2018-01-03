<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数详情" :userNo="userNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="122px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工号">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="姓名">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申请部门">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职务">
                            <el-select v-model="custInfo.custPost" :disabled="true">
                              <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-select v-model="custInfo.custClass" :disabled="true">
                              <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整前薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="122px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="payChangeDetail.oWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="payChangeDetail.oWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="payChangeDetail.oPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴">
                            <el-input v-model="payChangeDetail.oPhonePension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴">
                            <el-input v-model="payChangeDetail.oTrafficPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴">
                            <el-input v-model="payChangeDetail.oLivingPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="payChangeDetail.oAttendanceBonus" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="payChangeDetail.oSeniorityPay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资">
                            <el-input v-model="payChangeDetail.oOvertimePay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="payChangeDetail.oOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="payChangeDetail.oEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="payChangeDetail.oMediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="payChangeDetail.oUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="payChangeDetail.oEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="payChangeDetail.oMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="payChangeDetail.oHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="payChangeDetail.oWelcoeNo" :disabled="true">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="122px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="payChangeDetail.nWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="payChangeDetail.nWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="payChangeDetail.nPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴">
                            <el-input v-model="payChangeDetail.nPhonePension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴">
                            <el-input v-model="payChangeDetail.nTrafficPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴">
                            <el-input v-model="payChangeDetail.nLivingPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="payChangeDetail.nAttendanceBonus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="payChangeDetail.nSeniorityPay"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资">
                            <el-input v-model="payChangeDetail.nOvertimePay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="payChangeDetail.nOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="payChangeDetail.nEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="payChangeDetail.nMediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="payChangeDetail.nUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="payChangeDetail.nEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="payChangeDetail.nMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="payChangeDetail.nHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="payChangeDetail.nWelcoeNo"  @change="nWelcoeNoChange" :disabled="true">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(个人)">
                            <el-input v-model="_perEndm" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(单位)">
                            <el-input v-model="_comEndm" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(个人)">
                            <el-input v-model="_perMedi" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(单位)">
                            <el-input v-model="_comMedi" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(个人)">
                            <el-input v-model="_perUnem" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(单位)">
                            <el-input v-model="_comUnem" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(个人)">
                            <el-input v-model="_perEmpl" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(单位)">
                            <el-input v-model="_comEmpl" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(个人)">
                            <el-input v-model="_perMate" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(单位)">
                            <el-input v-model="_comMate" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(个人)">
                            <el-input v-model="_perHouse" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(单位)">
                            <el-input v-model="_comHouse" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :model="payChangeDetail" :label-position="labelPosition" label-width="122px" style="margin-top:0;overflow:visible;">                
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
      custPostList: [],
      custClassList: [],
      insurancePayTemplates: {},
      insurancePayTemp: {}
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = sessionStorage.getItem("payChangeInfo_userNo");
    this.applyNo = sessionStorage.getItem("payChangeInfo_applyNo");
    this.getCustInfo(); // 查询用户信息
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
    this.getPayChangeDetail(); //初始查询调薪基数信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getInsurancePayTemp(); // 初始查询保险缴纳标准
  },
  computed: {
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
    },
    _perEndm: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEndmBase) *
          this.insurancePayTemp.perEndmRate +
          this.insurancePayTemp.perEndmFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comEndm: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEndmBase) *
          this.insurancePayTemp.comEndmRate +
          this.insurancePayTemp.comEndmFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _perMedi: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMediBase) *
          this.insurancePayTemp.perMediRate +
          this.insurancePayTemp.perMediFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comMedi: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMediBase) *
          this.insurancePayTemp.comMediRate +
          this.insurancePayTemp.comMediFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _perUnem: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nUnemBase) *
          this.insurancePayTemp.perUnemRate +
          this.insurancePayTemp.perUnemFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comUnem: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nUnemBase) *
          this.insurancePayTemp.comUnemRate +
          this.insurancePayTemp.comUnemFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _perEmpl: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEmplBase) *
          this.insurancePayTemp.perEmplRate +
          this.insurancePayTemp.perEmplFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comEmpl: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEmplBase) *
          this.insurancePayTemp.comEmplRate +
          this.insurancePayTemp.comEmplFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _perMate: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMateBase) *
          this.insurancePayTemp.perMateRate +
          this.insurancePayTemp.perMateFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comMate: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMateBase) *
          this.insurancePayTemp.comMateRate +
          this.insurancePayTemp.comMateFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _perHouse: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nHouseBase) *
          this.insurancePayTemp.perHousRate +
          this.insurancePayTemp.perHousFixed) *
            100
        ) / 100 || 0.00
      );
    },
    _comHouse: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nHouseBase) *
          this.insurancePayTemp.comHousRate +
          this.insurancePayTemp.comHousFixed) *
            100
        ) / 100 || 0.00
      );
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
    getCustPostList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST")
        .then(res => {
          console.log("CustPost", res);
          if (res.data.code === "S00000") {
            self.custPostList = res.data.data;
          }
        })
        .catch(err => {
          console.log("error");
        });
    },
    getCustClassList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED")
        .then(res => {
          console.log("CustClass", res);
          if (res.data.code === "S00000") {
            self.custClassList = res.data.data;
          }
        })
        .catch(err => {
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
    }
  }
};
</script>

<style>

</style>
