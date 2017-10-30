<template>
    <div class="add_paybaseinfo">
        <current yiji="薪酬福利" erji="调薪管理" sanji="调薪查询" siji="调薪基数详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">调薪基数详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organNo">
                            <el-select v-model="payChangeDetail.organNo" :disabled="true">
                                <el-option label="总公司" value="0"></el-option>
                                <el-option label="深圳分公司" value="01"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="申请部门" prop="derpNo">
                            <el-select v-model="payChangeDetail.derpNo" :disabled="true">
                                <el-option label="财务部" value="01"></el-option>
                                <el-option label="技术部" value="001"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="payChangeDetail.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="payChangeDetail.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custPost">
                            <el-input v-model="payChangeDetail.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="custClass">
                            <el-input v-model="payChangeDetail.custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整前薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="oWagesBase">
                            <el-input v-model="payChangeDetail.oWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资" prop="oWagesPerf">
                            <el-input v-model="payChangeDetail.oWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴" prop="oPostPension">
                            <el-input v-model="payChangeDetail.oPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                        <el-form-item label="其他补贴" prop="oOtherPension">
                            <el-input v-model="payChangeDetail.oOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数" prop="oEndmBase">
                            <el-input v-model="payChangeDetail.oEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数" prop="oMediBase">
                            <el-input v-model="payChangeDetail.oMediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数" prop="oUnemBase">
                            <el-input v-model="payChangeDetail.oUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数" prop="oEmplBase">
                            <el-input v-model="payChangeDetail.oEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数" prop="oMateBase">
                            <el-input v-model="payChangeDetail.oMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数" prop="oHouseBase">
                            <el-input v-model="payChangeDetail.oHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="保险缴纳标准" prop="oWelcoeNo">
                            <el-select v-model="payChangeDetail.oWelcoeNo" :disabled="true">
                                <el-option label="广州标准" value="1"></el-option>
                                <el-option label="深圳标准" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">调整后薪酬基数信息</el-col>
                <el-form :inline="true" :model="payChangeDetail" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="nWagesBase">
                            <el-input v-model="payChangeDetail.nWagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="绩效工资" prop="nWagesPerf">
                            <el-input v-model="payChangeDetail.nWagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位补贴" prop="nPostPension">
                            <el-input v-model="payChangeDetail.nPostPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                        <el-form-item label="其他补贴" prop="nOtherPension">
                            <el-input v-model="payChangeDetail.nOtherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                        <el-form-item label="养老保险基数" prop="nEndmBase">
                            <el-input v-model="payChangeDetail.nEndmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险基数" prop="nMediBase">
                            <el-input v-model="payChangeDetail.nMediBase" :disabled="true"</el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险基数" prop="nUnemBase">
                            <el-input v-model="payChangeDetail.nUnemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险基数" prop="nEmplBase">
                            <el-input v-model="payChangeDetail.nEmplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险基数" prop="nMateBase">
                            <el-input v-model="payChangeDetail.nMateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金基数" prop="nHouseBase">
                            <el-input v-model="payChangeDetail.nHouseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="24">
                        <el-form-item label="保险缴纳标准" prop="nWelcoeNo">
                            <el-select v-model="payChangeDetail.nWelcoeNo">
                                <el-option label="广州标准" value="1"></el-option>
                                <el-option label="深圳标准" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="12">
                        <el-form-item label="养老保险(个人)" prop="perEndmFixed">
                            <el-input v-model="insurancePayTemp.perEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="养老保险(单位)" prop="comEndmFixed">
                            <el-input v-model="insurancePayTemp.comEndmFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险(个人)" prop="perMediFixed">
                            <el-input v-model="insurancePayTemp.perMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="医疗保险(单位)" prop="comMediFixed">
                            <el-input v-model="insurancePayTemp.comMediFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险(个人)" prop="perUnemFixed">
                            <el-input v-model="insurancePayTemp.perUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="失业保险(单位)" prop="comUnemFixed">
                            <el-input v-model="insurancePayTemp.comUnemFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险(个人)" prop="perEmplFixed">
                            <el-input v-model="insurancePayTemp.perEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="工伤保险(单位)" prop="comEmplFixed">
                            <el-input v-model="insurancePayTemp.comEmplFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险(个人)" prop="perMateFixed">
                            <el-input v-model="insurancePayTemp.perMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="生育保险(单位)" prop="comMateFixed">
                            <el-input v-model="insurancePayTemp.comMateFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金(个人)" prop="perHousFixed">
                            <el-input v-model="insurancePayTemp.perHousFixed" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                        <el-form-item label="公积金(单位)" prop="comHousFixed">
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
      checked: "true",
      payChangeDetail: {},
      insurancePayTemp: {}
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.applyNo = this.$route.params.applyNo;
    this.getPayChangeDetail(); //初始查询调薪基数信息
    this.getInsurancePayTemp(); // 初始查询保险缴纳标准
  },
  methods: {
    getPayChangeDetail() {
      const self = this;
      let params = {
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
    getInsurancePayTemp() {
      const self = this;
      let params = {
        applyNo: self.payChangeDetail.nWelcoeNo
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
    }
    
  }
};
</script>

<style>
.add_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
