<template>
    <div class="add_paybaseinfo">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数新增" :userNo="userNo">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数新增</span>
                <el-button type="primary" @click="handleSave('newPayChangeInfoRules')" class="toolBtn">保存</el-button>
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
                <el-form :inline="true" :model="oldPayBaseInfo" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资">
                            <el-input v-model="oldPayBaseInfo.wagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资">
                            <el-input v-model="oldPayBaseInfo.wagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴">
                            <el-input v-model="oldPayBaseInfo.postPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="通讯补贴">
                            <el-input v-model="oldPayBaseInfo.phonePension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="交通补贴">
                            <el-input v-model="oldPayBaseInfo.trafficPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="生活补贴">
                            <el-input v-model="oldPayBaseInfo.livingPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :span="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="oldPayBaseInfo.attendanceBonus" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="oldPayBaseInfo.seniorityPay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :span="12">
                        <el-form-item label="加班工资">
                            <el-input v-model="oldPayBaseInfo.overtimePay" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="其他补贴">
                            <el-input v-model="oldPayBaseInfo.otherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数">
                            <el-input v-model="oldPayBaseInfo.endmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数">
                            <el-input v-model="oldPayBaseInfo.mediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数">
                            <el-input v-model="oldPayBaseInfo.unemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数">
                            <el-input v-model="oldPayBaseInfo.emplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数">
                            <el-input v-model="oldPayBaseInfo.mateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数">
                            <el-input v-model="oldPayBaseInfo.houseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="保险缴纳标准">
                            <el-select v-model="oldPayBaseInfo.welcoeNo" :disabled="true">
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="newPayChangeInfo" :rules="payChangeInfoRules" ref="newPayChangeInfoRules" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="nWagesBase">
                            <el-input v-model="newPayChangeInfo.nWagesBase"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资" prop="nWagesPerf">
                            <el-input v-model="newPayChangeInfo.nWagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴" prop="nPostPension">
                            <el-input v-model="newPayChangeInfo.nPostPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="通讯补贴" prop="nPhonePension">
                            <el-input v-model="newPayChangeInfo.nPhonePension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="交通补贴" prop="nTrafficPension">
                            <el-input v-model="newPayChangeInfo.nTrafficPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="生活补贴" prop="nLivingPension">
                            <el-input v-model="newPayChangeInfo.nLivingPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :span="12">
                        <el-form-item label="全勤奖" prop="nAttendanceBonus">
                            <el-input v-model="newPayChangeInfo.nAttendanceBonus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工龄奖" prop="nSeniorityPay">
                            <el-input v-model="newPayChangeInfo.nSeniorityPay"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :span="12">
                        <el-form-item label="加班工资" prop="nOvertimePay">
                            <el-input v-model="newPayChangeInfo.nOvertimePay"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="其他补贴" prop="nOtherPension">
                            <el-input v-model="newPayChangeInfo.nOtherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数" prop="nEndmBase">
                            <el-input v-model="newPayChangeInfo.nEndmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数" prop="nMediBase">
                            <el-input v-model="newPayChangeInfo.nMediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数" prop="nUnemBase">
                            <el-input v-model="newPayChangeInfo.nUnemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数" prop="nEmplBase">
                            <el-input v-model="newPayChangeInfo.nEmplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数" prop="nMateBase">
                            <el-input v-model="newPayChangeInfo.nMateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数" prop="nHouseBase">
                            <el-input v-model="newPayChangeInfo.nHouseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准" prop="nWelcoeNo">
                            <el-select v-model="newPayChangeInfo.nWelcoeNo" @change="nWelcoeNoChange">
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
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
                <el-form :inline="true" :model="newPayChangeInfo" :rules="payChangeInfoRules" ref="newPayChangeInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
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
      oldPayBaseInfo: {},
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
        updFlag: "",
        chageStatus: "01"
      },
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
    this.userNo = this.$route.params.userNo;
    // this.userNo = "P0000015";
    this.getCustInfo(); // 查询用户信息
    this.getPayBaseInfoDetail(); // 查询获取调整前薪酬信息
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
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
          self.oldPayBaseInfo = res.data.data;
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
    handleSave(newPayChangeInfoRules) {
      this.$refs[newPayChangeInfoRules].validate(valid => {
        if (valid) {
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
                this.$router.push({
                  name: "query_payChangeInfo",
                  params: {
                    userNo: this.userNo
                  }
                });
              } else this.$message.error("操作失败！");
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
.add_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
