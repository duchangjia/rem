<template>
    <div class="container-wrap">
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
                            <el-select v-model="payBaseInfoDetail.welcoeNo" @change="welcoeNoChange" :disabled="true">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :model="insurancePayTemp" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
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
                <el-form :inline="true" :model="payBaseInfoDetail" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明">
                            <el-input type="textarea" v-model="payBaseInfoDetail.remark" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新人">
                            <el-input v-model="payBaseInfoDetail.updatedBy" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="最新更新时间">
                            <el-date-picker type="date" v-model="payBaseInfoDetail.updatedDate" :disabled="true" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
                            <el-button class="downloadBtn" @click="downloadFile">批量下载</el-button>
                            <el-upload class="upload-demo uploadDisabled" ref="upload" name="file"  action="/iem_hrm/file/addFile" multiple
                                :headers="token"
                                :file-list="fileList"
                                :show-file-list="true"
                                :auto-upload="false"
                                :http-request="downLoadOnly">
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
      custInfo: {},
      payBaseInfoDetail: {},
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
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
    this.userNo = sessionStorage.getItem("payBaseInfo_userNo");
    this.getCustInfo(); //初始查询用户信息
    this.getPayBaseInfoDetail(); //初始查询薪酬基数信息
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getInsurancePayTemp(); //初始查询保险缴纳标准
  },
  computed: {
    _perEndm: function() {
      return (
        Number(this.payBaseInfoDetail.endmBase) *
          this.insurancePayTemp.perEndmRate +
          this.insurancePayTemp.perEndmFixed || 0.0
      );
    },
    _comEndm: function() {
      return (
        Number(this.payBaseInfoDetail.endmBase) *
          this.insurancePayTemp.comEndmRate +
          this.insurancePayTemp.comEndmFixed || 0.0
      );
    },
    _perMedi: function() {
      return (
        Number(this.payBaseInfoDetail.mediBase) *
          this.insurancePayTemp.perMediRate +
          this.insurancePayTemp.perMediFixed || 0.0
      );
    },
    _comMedi: function() {
      return (
        Number(this.payBaseInfoDetail.mediBase) *
          this.insurancePayTemp.comMediRate +
          this.insurancePayTemp.comMediFixed || 0.0
      );
    },
    _perUnem: function() {
      return (
        Number(this.payBaseInfoDetail.unemBase) *
          this.insurancePayTemp.perUnemRate +
          this.insurancePayTemp.perUnemFixed || 0.0
      );
    },
    _comUnem: function() {
      return (
        Number(this.payBaseInfoDetail.unemBase) *
          this.insurancePayTemp.comUnemRate +
          this.insurancePayTemp.comUnemFixed || 0.0
      );
    },
    _perEmpl: function() {
      return (
        Number(this.payBaseInfoDetail.emplBase) *
          this.insurancePayTemp.perEmplRate +
          this.insurancePayTemp.perEmplFixed || 0.0
      );
    },
    _comEmpl: function() {
      return (
        Number(this.payBaseInfoDetail.emplBase) *
          this.insurancePayTemp.comEmplRate +
          this.insurancePayTemp.comEmplFixed || 0.0
      );
    },
    _perMate: function() {
      return (
        Number(this.payBaseInfoDetail.mateBase) *
          this.insurancePayTemp.perMateRate +
          this.insurancePayTemp.perMateFixed || 0.0
      );
    },
    _comMate: function() {
      return (
        Number(this.payBaseInfoDetail.mateBase) *
          this.insurancePayTemp.comMateRate +
          this.insurancePayTemp.comMateFixed || 0.0
      );
    },
    _perHouse: function() {
      return (
        Number(this.payBaseInfoDetail.houseBase) *
          this.insurancePayTemp.perHousRate +
          this.insurancePayTemp.perHousFixed || 0.0
      );
    },
    _comHouse: function() {
      return (
        Number(this.payBaseInfoDetail.houseBase) *
          this.insurancePayTemp.comHousRate +
          this.insurancePayTemp.comHousFixed || 0.0
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
          console.log("custInfo_res", res);
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
          console.log("payBaseInfoDetail_res", res);
          self.payBaseInfoDetail = res.data.data;

          if (
            self.payBaseInfoDetail.epFileManageList &&
            self.payBaseInfoDetail.epFileManageList.length >= 1
          ) {
            self.payBaseInfoDetail.epFileManageList.forEach(function(ele) {
              self.fileList.push({
                name: ele.fileName + "." + ele.fileSuffix,
                url: ele.fileAddr
              });
            }, this);
          }
          console.log("当前的fileList", self.fileList);
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
    // 批量下载
    downloadFile() {
      let data = {
        fileId: "000000000000"
      };
      this.$axios
        // /iem_hrm/file/downloadFile/{fileId}
        .get("/iem_hrm/file/downloadFile", {
          params: data,
          responseType: "blob"
        })
        .then(res => {
          const blob = res.data;
          console.log(res);
          let elink = document.createElement("a"); // 创建a标签
          elink.download = this.userNo + ".zip";
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click(); // 触发点击a标签事件
          document.body.removeChild(elink);
        })
        .catch(e => {
          console.log(e);
          this.$message({ message: "批量下载文件失败", type: "error" });
        });
    },
    downLoadOnly(aaa) {
        console.log('moren', aaa);
    }
  }
};
</script>

<style>

</style>
