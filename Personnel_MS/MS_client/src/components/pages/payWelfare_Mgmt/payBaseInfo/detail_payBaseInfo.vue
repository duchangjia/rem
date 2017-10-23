<template>
    <div class="detail_paybaseinfo">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数详情</span>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organName">
                            <el-select v-model="payBaseInfoDetail.organName" :disabled="true">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门" prop="derpName">
                            <el-select v-model="payBaseInfoDetail.derpName" :disabled="true">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="payBaseInfoDetail.userNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="payBaseInfoDetail.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务" prop="custClass">
                            <el-input v-model="payBaseInfoDetail.custClass" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级" prop="rank">
                            <el-input v-model="payBaseInfoDetail.rank" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">薪酬基数信息</el-col>
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="wagesBase">
                            <el-input v-model="payBaseInfoDetail.wagesBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="payBaseInfoDetail.wagesPerf" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="payBaseInfoDetail.postPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                      <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="payBaseInfoDetail.otherPension" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                      <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="payBaseInfoDetail.endmBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="payBaseInfoDetail.mediBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="payBaseInfoDetail.unemBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="payBaseInfoDetail.emplBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="payBaseInfoDetail.mateBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="payBaseInfoDetail.houseBase" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="试用期比例" prop="probRatio">
                            <el-input v-model="payBaseInfoDetail.probRatio" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="payBaseInfoDetail.welcoeNo" @change="welcoeNoChange">
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
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="payBaseInfoDetail.remark" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="最新更新人" prop="updateBy">
                            <el-input v-model="payBaseInfoDetail.updateBy" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="最新更新时间" prop="updateDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="payBaseInfoDetail.updateDate" :disabled="true" style="width: 100%;"></el-date-picker>
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
      payBaseInfoDetail: {},
      insurancePayTemp: {}
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.getPayBaseInfoDetail(); //初始查询薪酬基数列表
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
          self.payBaseInfoDetail = res.data.data;
          // self.welcoeNo = self.payBaseInfoDetail.welcoeNo;
        })
        .catch(() => {
          console.log("error");
        });
    },
    getInsurancePayTemp() {
      const self = this;
      let params = {
        applyNo: self.payBaseInfoDetail.welcoeNo
      };
      self.$axios
        // .get("/iem_hrm/InsurancePayTemplate/queryInsurancePayTemplate", { params: params })
        .get("/iem_hrm/queryInsurancePayTemplate", { params: params })
        .then(res => {
          console.log('已经请求保险缴纳标准回来了', res);
          self.insurancePayTemp = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    welcoeNoChange(val) {
      this.payBaseInfoDetail.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值查询保险缴纳标准
    }
  }
};
</script>

<style>
.detail_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
