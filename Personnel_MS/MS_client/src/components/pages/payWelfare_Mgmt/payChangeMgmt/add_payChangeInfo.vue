<template>
    <div class="add_paybaseinfo">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数新增">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数新增</span>
                <el-button type="primary" @click="handleSave('newPayChangeInfoRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organNo">
                            <el-select v-model="custInfo.organNo">
                                <el-option label="总公司" value="0"></el-option>
                                <el-option label="深圳分公司" value="01"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="申请部门" prop="derpNo">
                            <el-select v-model="custInfo.derpNo">
                                <el-option label="财务部" value="01"></el-option>
                                <el-option label="技术部" value="001"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="custInfo.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="custInfo.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custPost">
                            <el-input v-model="custInfo.custPost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="custClass">
                            <el-input v-model="custInfo.custClass"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整前薪酬基数信息</el-col>
                <el-form :inline="true" :model="oldPayBaseInfo" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="wagesBase">
                            <el-input v-model="oldPayBaseInfo.wagesBase"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="oldPayBaseInfo.wagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="oldPayBaseInfo.postPension"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                        <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="oldPayBaseInfo.otherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="oldPayBaseInfo.endmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="oldPayBaseInfo.mediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="oldPayBaseInfo.unemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="oldPayBaseInfo.emplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="oldPayBaseInfo.mateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="oldPayBaseInfo.houseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="oldPayBaseInfo.welcoeNo">
                                <el-option label="广州标准" value="1"></el-option>
                                <el-option label="深圳标准" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="newPayChangeInfo" :rules="rules" ref="newPayChangeInfoRules" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
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
                <el-form :inline="true" :model="newPayChangeInfo" :rules="rules" ref="newPayChangeInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="调薪说明" prop="remark">
                            <el-input type="textarea" v-model="newPayChangeInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" " prop="autoupFlag">
                            <el-checkbox v-model="checked">数据更新到薪酬基数设置</el-checkbox>
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
      checked: "true",
      custInfo: {},
      oldPayBaseInfo: {},
      newPayChangeInfo: {
        nWagesBase: "",
        nWagesPerf: "",
        nPostPension: "",
        nOtherPension: "",
        nEndmBase: "",
        nMediBase: "",
        nUnemBase: "",
        nEmplBase: "",
        nMateBase: "",
        nHouseBase: "",
        nProbRatio: "",
        nWelcoeNo: ""
      },
      insurancePayTemp: {},
      rules: {
        nWagesBase: [
          { required: true, message: "基本工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nWagesPerf: [
          { required: true, message: "绩效工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nPostPension: [
          { required: true, message: "岗位补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nOtherPension: [
          { required: true, message: "其他补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nEndmBase: [
          { required: true, message: "养老保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nMediBase: [
          { required: true, message: "医疗保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nUnemBase: [
          { required: true, message: "失业保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nEmplBase: [
          { required: true, message: "工伤保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nMateBase: [
          { required: true, message: "生育保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        nHouseBase: [
          { required: true, message: "公积金基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "格式为如:0.80" }
        ],
        nWelcoeNo: [
          { required: true, message: "请选择保险缴纳标准", trigger: "change" }
        ],
        remark: [{ required: true, message: "输入调薪说明", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.getCustInfo(); // 查询获取用户信息
    this.getPayBaseInfoDetail(); // 查询获取用户信息
  },
  methods: {
    getCustInfo() {
      const self = this;
      let userNo = self.userNo;
      //   self.$axios
      //     .get("/iem_hrm/CustInfo/queryCustInfoByUserNo/" + userNo)
      //     .then(res => {
      //       console.log(res);
      //       self.custInfo = res.data.data;
      //     })
      //     .catch(() => {
      //       console.log("error");
      //     });
      self.custInfo = {
        userNo: "P000001",
        custName: "王二狗",
        organNo: "0",
        derpNo: "001",
        custPost: "软件开发工程师",
        custClass: "B2",
        custStatus: "02"
      };
    },
    getPayBaseInfoDetail() {
      const self = this;
      let userNo = self.userNo;
      //   self.$axios
      //     .get("/iem_hrm/pay/queryPayBaseInfoDetail/" + userNo)
      //     .then(res => {
      //       self.oldPayBaseInfo = res.data.data;
      //     })
      //     .catch(() => {
      //       console.log("error");
      //     });
      self.oldPayBaseInfo = {
        wagesBase: "5000",
        wagesPerf: "3000",
        postPension: "1500",
        otherPension: "800",
        endmBase: "3000",
        mediBase: "5000",
        unemBase: "2300",
        emplBase: "5000",
        mateBase: "5000",
        houseBase: "3000",
        probRatio: "0.80",
        welcoeNo: "1"
      };
    },
    getInsurancePayTemp() {
      const self = this;
      let applyNo = self.newPayChangeInfo.nWelcoeNo;
      self.$axios
        .get(
          "/iem_hrm/InsurancePayTemplate/queryInsurancePayTemplate/" + applyNo
        )
        .then(res => {
          console.log("已经请求保险缴纳标准回来了", res);
          self.insurancePayTemp = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    nWelcoeNoChange(val) {
      this.newPayChangeInfo.nWelcoeNo = val;
      console.log("新值变化：" + this.newPayChangeInfo.nWelcoeNo);
      if (val == null) return false;
      else this.getInsurancePayTemp(); //根据参数值计算保险缴纳标准
    },
    handleSave(newPayChangeInfoRules) {
      this.$refs[newPayChangeInfoRules].validate(valid => {
        if (valid) {
          let newPayChangeDetail = {};
          newPayChangeDetail.userNo = this.userNo;
          newPayChangeDetail.oWagesBase = this.oldPayBaseInfo.wagesBase;
          newPayChangeDetail.oWagesPerf = this.oldPayBaseInfo.wagesPerf;
          newPayChangeDetail.oPostPension = this.oldPayBaseInfo.postPension;
          newPayChangeDetail.oOtherPension = this.oldPayBaseInfo.otherPension;
          newPayChangeDetail.oEndmBase = this.oldPayBaseInfo.endmBase;
          newPayChangeDetail.oMediBase = this.oldPayBaseInfo.mediBase;
          newPayChangeDetail.oUnemBase = this.oldPayBaseInfo.unemBase;
          newPayChangeDetail.oEmplBase = this.oldPayBaseInfo.emplBase;
          newPayChangeDetail.oMateBase = this.oldPayBaseInfo.mateBase;
          newPayChangeDetail.oHouseBase = this.oldPayBaseInfo.houseBase;
          newPayChangeDetail.oWelcoeNo = this.oldPayBaseInfo.welcoeNo;
          newPayChangeDetail.nWagesBase = this.newPayChangeInfo.nWagesBase;
          newPayChangeDetail.nWagesPerf = this.newPayChangeInfo.nWagesPerf;
          newPayChangeDetail.nPostPension = this.newPayChangeInfo.nPostPension;
          newPayChangeDetail.nOtherPension = this.newPayChangeInfo.nOtherPension;
          newPayChangeDetail.nEndmBase = this.newPayChangeInfo.nEndmBase;
          newPayChangeDetail.nMediBase = this.newPayChangeInfo.nMediBase;
          newPayChangeDetail.nUnemBase = this.newPayChangeInfo.nUnemBase;
          newPayChangeDetail.nEmplBase = this.newPayChangeInfo.nEmplBase;
          newPayChangeDetail.nMateBase = this.newPayChangeInfo.nMateBase;
          newPayChangeDetail.nHouseBase = this.newPayChangeInfo.nHouseBase;
          newPayChangeDetail.nWelcoeNo = this.newPayChangeInfo.nWelcoeNo;
          console.log(newPayChangeDetail);
          this.$axios
            .post("/iem_hrm/epPayChageInf/addEpPayChageInf", newPayChangeDetail)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "调薪基数新增成功!" });
                this.$router.push("/query_payChangeInfo");
              } else this.$message.error("调薪基数新增失败！");
            })
            .catch(() => {
              this.$message.error("调薪基数新增失败！");
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
