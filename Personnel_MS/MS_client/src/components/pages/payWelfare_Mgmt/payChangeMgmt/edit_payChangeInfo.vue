<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数修改" :userNo="userNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数修改</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
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
                            <!-- <el-input v-model="_custPost" :disabled="true"></el-input> -->
                            <el-select v-model="custInfo.custPost" :disabled="true">
                              <el-option v-for="item in custPostList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <!-- <el-input v-model="_custClass" :disabled="true"></el-input> -->
                            <el-select v-model="custInfo.custClass" :disabled="true">
                              <el-option v-for="item in custClassList" :key="item.paraValue" :label="item.paraShowMsg" :value="item.paraValue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整前薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
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
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :rules="payChangeInfoRules" ref="payChangeDetailRules1" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资" prop="nWagesBase">
                            <el-input v-model="payChangeDetail.nWagesBase"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资" prop="nWagesPerf">
                            <el-input v-model="payChangeDetail.nWagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴" prop="nPostPension">
                            <el-input v-model="payChangeDetail.nPostPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴" prop="nPhonePension">
                            <el-input v-model="payChangeDetail.nPhonePension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴" prop="nTrafficPension">
                            <el-input v-model="payChangeDetail.nTrafficPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴" prop="nLivingPension">
                            <el-input v-model="payChangeDetail.nLivingPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖" prop="nAttendanceBonus">
                            <el-input v-model="payChangeDetail.nAttendanceBonus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖" prop="nSeniorityPay">
                            <el-input v-model="payChangeDetail.nSeniorityPay"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资" prop="nOvertimePay">
                            <el-input v-model="payChangeDetail.nOvertimePay"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴" prop="nOtherPension">
                            <el-input v-model="payChangeDetail.nOtherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数" prop="nEndmBase">
                            <el-input v-model="payChangeDetail.nEndmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数" prop="nMediBase">
                            <el-input v-model="payChangeDetail.nMediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数" prop="nUnemBase">
                            <el-input v-model="payChangeDetail.nUnemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数" prop="nEmplBase">
                            <el-input v-model="payChangeDetail.nEmplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数" prop="nMateBase">
                            <el-input v-model="payChangeDetail.nMateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数" prop="nHouseBase">
                            <el-input v-model="payChangeDetail.nHouseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准" prop="nWelcoeNo">
                            <el-select v-model="payChangeDetail.nWelcoeNo" @change="nWelcoeNoChange">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(个人)">
                            <el-input v-model="_perEndm"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(单位)">
                            <el-input v-model="_comEndm"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(个人)">
                            <el-input v-model="_perMedi"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(单位)">
                            <el-input v-model="_comMedi"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(个人)">
                            <el-input v-model="_perUnem"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(单位)">
                            <el-input v-model="_comUnem"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(个人)">
                            <el-input v-model="_perEmpl"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(单位)">
                            <el-input v-model="_comEmpl"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(个人)">
                            <el-input v-model="_perMate"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(单位)">
                            <el-input v-model="_comMate"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(个人)">
                            <el-input v-model="_perHouse"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(单位)">
                            <el-input v-model="_comHouse"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="payChangeDetail" :rules="payChangeInfoRules" ref="payChangeDetailRules2" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="调薪说明" prop="remark">
                            <el-input type="textarea" v-model="payChangeDetail.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" " prop="updFlag">
                            <el-checkbox v-model="_updFlag">数据更新到薪酬基数设置</el-checkbox>
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
      insurancePayTemp: {},
      payChangeInfoRules: {
        nWagesBase: [
          { required: true, message: "基本工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nWagesPerf: [
          { required: true, message: "绩效工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nPostPension: [
          { required: true, message: "岗位补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nPhonePension: [
          { required: true, message: "通讯补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nTrafficPension: [
          { required: true, message: "交通补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nLivingPension: [
          { required: true, message: "生活补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nAttendanceBonus: [
          { required: true, message: "全勤奖不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nSeniorityPay: [
          { required: true, message: "工龄奖不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nOvertimePay: [
          { required: true, message: "加班工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nOtherPension: [
          { required: true, message: "其他补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nEndmBase: [
          { required: true, message: "养老保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nMediBase: [
          { required: true, message: "医疗保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nUnemBase: [
          { required: true, message: "失业保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nEmplBase: [
          { required: true, message: "工伤保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nMateBase: [
          { required: true, message: "生育保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        nHouseBase: [
          { required: true, message: "公积金基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "格式为如:0.80" }
        ],
        nWelcoeNo: [
          { required: true, message: "请选择保险缴纳标准", trigger: "change" }
        ],
        remark: [{ required: true, message: "调薪说明不能为空", trigger: "blur" }]
      }
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
    this.getPayChangeDetail(); //查询调薪基数信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
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
            10
        ) / 10 || 0
      );
    },
    _comEndm: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEndmBase) *
            this.insurancePayTemp.comEndmRate +
            this.insurancePayTemp.comEndmFixed) *
            10
        ) / 10 || 0
      );
    },
    _perMedi: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMediBase) *
            this.insurancePayTemp.perMediRate +
            this.insurancePayTemp.perMediFixed) *
            10
        ) / 10 || 0
      );
    },
    _comMedi: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMediBase) *
            this.insurancePayTemp.comMediRate +
            this.insurancePayTemp.comMediFixed) *
            10
        ) / 10 || 0
      );
    },
    _perUnem: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nUnemBase) *
            this.insurancePayTemp.perUnemRate +
            this.insurancePayTemp.perUnemFixed) *
            10
        ) / 10 || 0
      );
    },
    _comUnem: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nUnemBase) *
            this.insurancePayTemp.comUnemRate +
            this.insurancePayTemp.comUnemFixed) *
            10
        ) / 10 || 0
      );
    },
    _perEmpl: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEmplBase) *
            this.insurancePayTemp.perEmplRate +
            this.insurancePayTemp.perEmplFixed) *
            10
        ) / 10 || 0
      );
    },
    _comEmpl: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nEmplBase) *
            this.insurancePayTemp.comEmplRate +
            this.insurancePayTemp.comEmplFixed) *
            10
        ) / 10 || 0
      );
    },
    _perMate: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMateBase) *
            this.insurancePayTemp.perMateRate +
            this.insurancePayTemp.perMateFixed) *
            10
        ) / 10 || 0
      );
    },
    _comMate: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nMateBase) *
            this.insurancePayTemp.comMateRate +
            this.insurancePayTemp.comMateFixed) *
            10
        ) / 10 || 0
      );
    },
    _perHouse: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nHouseBase) *
            this.insurancePayTemp.perHousRate +
            this.insurancePayTemp.perHousFixed) *
            10
        ) / 10 || 0
      );
    },
    _comHouse: function() {
      return (
        Math.round(
          (Number(this.payChangeDetail.nHouseBase) *
            this.insurancePayTemp.comHousRate +
            this.insurancePayTemp.comHousFixed) *
            10
        ) / 10 || 0
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
    },
    handleSave() {
      let rulesValid1 = false;
      let rulesValid2 = false;

      this.$refs.payChangeDetailRules1.validate(valid => {
        if (valid) {
          rulesValid1 = true;
        } else {
          console.log("error submit!!");
          this.$message({
            type: "error",
            message: "请确保必填信息填写正确!"
          });
          return false;
        }
      });
      this.$refs.payChangeDetailRules2.validate(valid => {
        if (valid) {
          rulesValid2 = true;
        } else {
          console.log("error submit!!");
          if (rulesValid1 == true) {
            this.$message({
              type: "error",
              message: "请确保必填信息填写正确!"
            });
          }
          return false;
        }
      });
      if (rulesValid1 && rulesValid2) {
        let editPayChangeDetail = {};
        editPayChangeDetail.userNo = this.userNo;
        editPayChangeDetail.applyNo = this.payChangeDetail.applyNo;
        editPayChangeDetail.nWagesBase = this.payChangeDetail.nWagesBase;
        editPayChangeDetail.nWagesPerf = this.payChangeDetail.nWagesPerf;
        editPayChangeDetail.nPostPension = this.payChangeDetail.nPostPension;
        editPayChangeDetail.nPhonePension = this.payChangeDetail.nPhonePension;
        editPayChangeDetail.nTrafficPension = this.payChangeDetail.nTrafficPension;
        editPayChangeDetail.nLivingPension = this.payChangeDetail.nLivingPension;
        editPayChangeDetail.nAttendanceBonus = this.payChangeDetail.nAttendanceBonus;
        editPayChangeDetail.nSeniorityPay = this.payChangeDetail.nSeniorityPay;
        editPayChangeDetail.nOvertimePay = this.payChangeDetail.nOvertimePay;
        editPayChangeDetail.nOtherPension = this.payChangeDetail.nOtherPension;
        editPayChangeDetail.nEndmBase = this.payChangeDetail.nEndmBase;
        editPayChangeDetail.nMediBase = this.payChangeDetail.nMediBase;
        editPayChangeDetail.nUnemBase = this.payChangeDetail.nUnemBase;
        editPayChangeDetail.nEmplBase = this.payChangeDetail.nEmplBase;
        editPayChangeDetail.nMateBase = this.payChangeDetail.nMateBase;
        editPayChangeDetail.nHouseBase = this.payChangeDetail.nHouseBase;
        editPayChangeDetail.nWelcoeNo = this.payChangeDetail.nWelcoeNo;
        editPayChangeDetail.remark = this.payChangeDetail.remark;
        editPayChangeDetail.updFlag = this.payChangeDetail.updFlag;
        editPayChangeDetail.chageStatus = this.payChangeDetail.chageStatus;
        console.log(editPayChangeDetail);
        this.$axios
          .put("/iem_hrm/epPayChageInf/modEpPayChageInf", editPayChangeDetail)
          .then(res => {
            console.log(res);
            if (res.data.code == "S00000") {
              this.$message({ type: "success", message: "操作成功!" });
              this.$router.push({
                name: "query_payChangeInfo",
                params: {
                  userNo: this.userNo
                }
              });
            } else this.$message.error(res.data.retMsg);
          })
          .catch(() => {
            this.$message.error("操作失败！");
          });
      }
    }
  }
};
</script>

<style>

</style>
