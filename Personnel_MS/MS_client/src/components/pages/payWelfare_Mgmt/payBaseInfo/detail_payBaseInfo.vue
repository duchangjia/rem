<template>
    <div class="detail_paybaseinfo">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公司">
                            <el-input v-model="custInfo.organName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门">
                            <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
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
                        <el-form-item label="职务">
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-input v-model="_custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">薪酬基数信息</el-col>
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="payBaseInfoDetail.wagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                      <el-form-item label="绩效工资">
                            <el-input v-model="payBaseInfoDetail.wagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                      <el-form-item label="岗位补贴">
                            <el-input v-model="payBaseInfoDetail.postPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴">
                            <el-input v-model="payBaseInfoDetail.phonePension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴">
                            <el-input v-model="payBaseInfoDetail.trafficPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴">
                            <el-input v-model="payBaseInfoDetail.livingPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="payBaseInfoDetail.attendanceBonus" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="payBaseInfoDetail.seniorityPay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资">
                            <el-input v-model="payBaseInfoDetail.overtimePay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :sm="24" :md="12">
                      <el-form-item label="其他补贴">
                            <el-input v-model="payBaseInfoDetail.otherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                      <el-form-item label="养老保险基数">
                            <el-input v-model="payBaseInfoDetail.endmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="医疗保险基数">
                            <el-input v-model="payBaseInfoDetail.mediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="失业保险基数">
                            <el-input v-model="payBaseInfoDetail.unemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="工伤保险基数">
                            <el-input v-model="payBaseInfoDetail.emplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="生育保险基数">
                            <el-input v-model="payBaseInfoDetail.mateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="公积金基数">
                            <el-input v-model="payBaseInfoDetail.houseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="试用期工资">
                            <el-input v-model="payBaseInfoDetail.wagesProb" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="保险缴纳标准">
                            <el-select v-model="payBaseInfoDetail.welcoeNo" @change="welcoeNoChange">
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(个人)">
                            <el-input v-model="insurancePayTemp.perEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="养老保险(单位)">
                            <el-input v-model="insurancePayTemp.comEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="医疗保险(个人)">
                            <el-input v-model="insurancePayTemp.perMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="医疗保险(单位)">
                            <el-input v-model="insurancePayTemp.comMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="失业保险(个人)">
                            <el-input v-model="insurancePayTemp.perUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="失业保险(单位)">
                            <el-input v-model="insurancePayTemp.comUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="工伤保险(个人)">
                            <el-input v-model="insurancePayTemp.perEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="工伤保险(单位)">
                            <el-input v-model="insurancePayTemp.comEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="生育保险(个人)">
                            <el-input v-model="insurancePayTemp.perMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="生育保险(单位)">
                            <el-input v-model="insurancePayTemp.comMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="公积金(个人)">
                            <el-input v-model="insurancePayTemp.perHousFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="公积金(单位)">
                            <el-input v-model="insurancePayTemp.comHousFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明">
                            <el-input type="textarea" v-model="payBaseInfoDetail.remark" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新人">
                            <el-input v-model="payBaseInfoDetail.updateBy" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新时间">
                            <el-date-picker type="date" v-model="payBaseInfoDetail.updateDate" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件" prop="attachm" style="width:100%;">
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
      userNo: "",
      custInfo: {},
      payBaseInfoDetail: {},
      insurancePayTemplates: {},
      insurancePayTemp: {}
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.getCustInfo(); //初始查询用户信息
    this.getPayBaseInfoDetail(); //初始查询薪酬基数信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getInsurancePayTemp(); //初始查询保险缴纳标准
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
    getPayBaseInfoDetail() {
      const self = this;
      let userNo = self.userNo;
      self.$axios
        .get("/iem_hrm/pay/queryPayBaseInfoDetail/" + userNo)
        .then(res => {
          console.log(res);
          self.payBaseInfoDetail = res.data.data;
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
      let applyNo = self.payBaseInfoDetail.welcoeNo;
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
    welcoeNoChange(val) {
      this.payBaseInfoDetail.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值查询保险缴纳标准
    },
    downloadFile() {}
  }
};
</script>

<style>
.detail_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
