<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数新增" :userNo="userNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数新增</span>
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
                <el-form :inline="true" :model="oldPayBaseInfo" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="oldPayBaseInfo.wagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="oldPayBaseInfo.wagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="oldPayBaseInfo.postPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴">
                            <el-input v-model="oldPayBaseInfo.phonePension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴">
                            <el-input v-model="oldPayBaseInfo.trafficPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴">
                            <el-input v-model="oldPayBaseInfo.livingPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="oldPayBaseInfo.attendanceBonus" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="oldPayBaseInfo.seniorityPay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资">
                            <el-input v-model="oldPayBaseInfo.overtimePay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="oldPayBaseInfo.otherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="oldPayBaseInfo.endmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="oldPayBaseInfo.mediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="oldPayBaseInfo.unemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="oldPayBaseInfo.emplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="oldPayBaseInfo.mateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="oldPayBaseInfo.houseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="oldPayBaseInfo.welcoeNo" :disabled="true">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="newPayChangeInfo" :rules="payChangeInfoRules" ref="newPayChangeInfoRules1" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资" prop="nWagesBase">
                            <el-input v-model="newPayChangeInfo.nWagesBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资" prop="nWagesPerf">
                            <el-input v-model="newPayChangeInfo.nWagesPerf" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴" prop="nPostPension">
                            <el-input v-model="newPayChangeInfo.nPostPension" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴" prop="nPhonePension">
                            <el-input v-model="newPayChangeInfo.nPhonePension" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴" prop="nTrafficPension">
                            <el-input v-model="newPayChangeInfo.nTrafficPension" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴" prop="nLivingPension">
                            <el-input v-model="newPayChangeInfo.nLivingPension" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖" prop="nAttendanceBonus">
                            <el-input v-model="newPayChangeInfo.nAttendanceBonus" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖" prop="nSeniorityPay">
                            <el-input v-model="newPayChangeInfo.nSeniorityPay" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资" prop="nOvertimePay">
                            <el-input v-model="newPayChangeInfo.nOvertimePay" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴" prop="nOtherPension">
                            <el-input v-model="newPayChangeInfo.nOtherPension" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数" prop="nEndmBase">
                            <el-input v-model="newPayChangeInfo.nEndmBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数" prop="nMediBase">
                            <el-input v-model="newPayChangeInfo.nMediBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数" prop="nUnemBase">
                            <el-input v-model="newPayChangeInfo.nUnemBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数" prop="nEmplBase">
                            <el-input v-model="newPayChangeInfo.nEmplBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数" prop="nMateBase">
                            <el-input v-model="newPayChangeInfo.nMateBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数" prop="nHouseBase">
                            <el-input v-model="newPayChangeInfo.nHouseBase" placeholder="0.00"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准" prop="nWelcoeNo">
                            <el-select v-model="newPayChangeInfo.nWelcoeNo" @change="nWelcoeNoChange">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(个人)">
                            <el-input v-model="_perEndm" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险(单位)">
                            <el-input v-model="_comEndm" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(个人)">
                            <el-input v-model="_perMedi" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险(单位)">
                            <el-input v-model="_comMedi" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(个人)">
                            <el-input v-model="_perUnem" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险(单位)">
                            <el-input v-model="_comUnem" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(个人)">
                            <el-input v-model="_perEmpl" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险(单位)">
                            <el-input v-model="_comEmpl" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(个人)">
                            <el-input v-model="_perMate" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险(单位)">
                            <el-input v-model="_comMate" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(个人)">
                            <el-input v-model="_perHouse" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金(单位)">
                            <el-input v-model="_comHouse" :readonly="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="newPayChangeInfo" :rules="payChangeInfoRules" ref="newPayChangeInfoRules2" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="调薪说明" prop="remark">
                            <el-input type="textarea" v-model="newPayChangeInfo.remark"></el-input>
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
      custInfo: {},
      oldPayBaseInfo: {
        wagesBase: "",
        wagesPerf: "",
        postPension: "",
        phonePension: "",
        trafficPension: "",
        livingPension: "",
        attendanceBonus: "",
        seniorityPay: "",
        overtimePay: "",
        otherPension: "",
        endmBase: "",
        mediBase: "",
        unemBase: "",
        emplBase: "",
        mateBase: "",
        houseBase: "",
        welcoeNo: ""
      },
      newPayChangeInfo: {
        nWagesBase: "",
        nWagesPerf: "",
        nPostPension: "",
        nPhonePension: "",
        nTrafficPension: "",
        nLivingPension: "",
        nAttendanceBonus: "",
        nSeniorityPay: "",
        nOvertimePay: "",
        nOtherPension: "",
        nEndmBase: "",
        nMediBase: "",
        nUnemBase: "",
        nEmplBase: "",
        nMateBase: "",
        nHouseBase: "",
        nProbRatio: "",
        nWelcoeNo: "",
        updFlag: "02",
        chageStatus: "01"
      },
      custPostList: [],
      custClassList: [],
      insurancePayTemplates: [],
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
    console.log("接到的userNo", this.userNo);
    this.getCustInfo(); // 查询用户信息
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
    this.getPayBaseInfoDetail(); // 查询获取调整前薪酬信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
  },
  computed: {
    _updFlag: {
      get: function() {
        if (
          this.newPayChangeInfo.updFlag == "01" ||
          this.newPayChangeInfo.updFlag == true
        ) {
          return true;
        } else if (
          this.newPayChangeInfo.updFlag == "02" ||
          this.newPayChangeInfo.updFlag == false
        ) {
          return false;
        }
      },
      set: function(val) {
        if (val == true) {
          this.newPayChangeInfo.updFlag = "01";
        } else {
          this.newPayChangeInfo.updFlag = "02";
        }
      }
    },
    _perEndm: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nEndmBase) *
            this.insurancePayTemp.perEndmRate +
            this.insurancePayTemp.perEndmFixed) *
            10
        ) / 10 || 0
      );
    },
    _comEndm: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nEndmBase) *
            this.insurancePayTemp.comEndmRate +
            this.insurancePayTemp.comEndmFixed) *
            10
        ) / 10 || 0
      );
    },
    _perMedi: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nMediBase) *
            this.insurancePayTemp.perMediRate +
            this.insurancePayTemp.perMediFixed) *
            10
        ) / 10 || 0
      );
    },
    _comMedi: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nMediBase) *
            this.insurancePayTemp.comMediRate +
            this.insurancePayTemp.comMediFixed) *
            10
        ) / 10 || 0
      );
    },
    _perUnem: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nUnemBase) *
            this.insurancePayTemp.perUnemRate +
            this.insurancePayTemp.perUnemFixed) *
            10
        ) / 10 || 0
      );
    },
    _comUnem: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nUnemBase) *
            this.insurancePayTemp.comUnemRate +
            this.insurancePayTemp.comUnemFixed) *
            10
        ) / 10 || 0
      );
    },
    _perEmpl: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nEmplBase) *
            this.insurancePayTemp.perEmplRate +
            this.insurancePayTemp.perEmplFixed) *
            10
        ) / 10 || 0
      );
    },
    _comEmpl: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nEmplBase) *
            this.insurancePayTemp.comEmplRate +
            this.insurancePayTemp.comEmplFixed) *
            10
        ) / 10 || 0
      );
    },
    _perMate: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nMateBase) *
            this.insurancePayTemp.perMateRate +
            this.insurancePayTemp.perMateFixed) *
            10
        ) / 10 || 0
      );
    },
    _comMate: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nMateBase) *
            this.insurancePayTemp.comMateRate +
            this.insurancePayTemp.comMateFixed) *
            10
        ) / 10 || 0
      );
    },
    _perHouse: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nHouseBase) *
            this.insurancePayTemp.perHousRate +
            this.insurancePayTemp.perHousFixed) *
            10
        ) / 10 || 0
      );
    },
    _comHouse: function() {
      return (
        Math.round(
          (Number(this.newPayChangeInfo.nHouseBase) *
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
    getPayBaseInfoDetail() {
      const self = this;
      let userNo = self.userNo;
      self.$axios
        .get("/iem_hrm/pay/queryPayBaseInfoDetail/" + userNo)
        .then(res => {
          console.log("调整前基数", res);
          if (res.data.data != null) {
            self.oldPayBaseInfo = res.data.data;
          } else {
            sessionStorage.setItem(
              "addPayChangeInfo_custInfo",
              JSON.stringify(self.custInfo)
            ); // 暂存当前custInfo
            let aaa = sessionStorage.getItem("addPayChangeInfo_custInfo");
            console.log("暂存的custInfo", aaa);
            this.$confirm("当前用户不存在薪酬基数，请先前往设置。", "提示", {
              type: "warning"
            })
              .then(() => {
                self.$router.push("/add_payBaseInfo");
              })
              .catch(() => {
                self.$router.push("/query_payChangeInfo");
              });
          }
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
          console.log("保险缴纳模板", self.insurancePayTemplates);
        })
        .catch(() => {
          console.log("error");
        });
    },
    getInsurancePayTemp() {
      const self = this;
      let applyNo = self.newPayChangeInfo.nWelcoeNo;
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
      this.newPayChangeInfo.nWelcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值计算保险缴纳标准
    },
    handleSave() {
      let rulesValid1 = false;
      let rulesValid2 = false;

      this.$refs.newPayChangeInfoRules1.validate(valid => {
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
      this.$refs.newPayChangeInfoRules2.validate(valid => {
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
        let newPayChangeDetail = {};
        newPayChangeDetail.userNo = this.userNo;
        newPayChangeDetail.oWagesBase = this.oldPayBaseInfo.wagesBase;
        newPayChangeDetail.oWagesPerf = this.oldPayBaseInfo.wagesPerf;
        newPayChangeDetail.oPostPension = this.oldPayBaseInfo.postPension;
        newPayChangeDetail.oPhonePension = this.oldPayBaseInfo.phonePension;
        newPayChangeDetail.oTrafficPension = this.oldPayBaseInfo.trafficPension;
        newPayChangeDetail.oLivingPension = this.oldPayBaseInfo.livingPension;
        newPayChangeDetail.oAttendanceBonus = this.oldPayBaseInfo.attendanceBonus;
        newPayChangeDetail.oSeniorityPay = this.oldPayBaseInfo.seniorityPay;
        newPayChangeDetail.oOvertimePay = this.oldPayBaseInfo.overtimePay;
        newPayChangeDetail.oOtherPension = this.oldPayBaseInfo.otherPension;
        newPayChangeDetail.oEndmBase = this.oldPayBaseInfo.endmBase;
        newPayChangeDetail.oMediBase = this.oldPayBaseInfo.mediBase;
        newPayChangeDetail.oUnemBase = this.oldPayBaseInfo.unemBase;
        newPayChangeDetail.oEmplBase = this.oldPayBaseInfo.emplBase;
        newPayChangeDetail.oMateBase = this.oldPayBaseInfo.mateBase;
        newPayChangeDetail.oHouseBase = this.oldPayBaseInfo.houseBase;
        newPayChangeDetail.oWelcoeNo = this.oldPayBaseInfo.welcoeNo;
        for (var name in this.newPayChangeInfo) {
          if (this.newPayChangeInfo[name]) {
            newPayChangeDetail[name] = this.newPayChangeInfo[name];
          }
        }
        console.log(newPayChangeDetail);
        this.$axios
          .post("/iem_hrm/epPayChageInf/addEpPayChageInf", newPayChangeDetail)
          .then(res => {
            console.log(res);
            if (res.data.code == "S00000") {
              this.$message({ type: "success", message: "操作成功!" });
              this.$router.push("/query_payChangeInfo");
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
