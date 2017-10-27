<template>
    <div class="edit_paybaseinfo">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数修改</span>
                <el-button type="primary" @click="handleSave('editPayBaseInfoRules')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="custInfo" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organNo">
                            <el-select v-model="custInfo.organNo">
                                <el-option label="总公司" value="p0"></el-option>
                                <el-option label="深圳分公司" value="p01"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门" prop="derpNo">
                            <el-select v-model="custInfo.derpNo">
                                <el-option label="财务部" value="p1"></el-option>
                                <el-option label="技术部" value="p01"></el-option>
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
                <el-col :span="24" class="item-title">薪酬基数信息</el-col>
                <el-form :inline="true" :model="editPayBaseInfo" :rules="rules" ref="editPayBaseInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="基本工资" prop="wagesBase">
                            <el-input v-model="editPayBaseInfo.wagesBase"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="editPayBaseInfo.wagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="editPayBaseInfo.postPension"></el-input>
                        </el-form-item>
                    </el-col>   
                    <el-col :span="12">
                      <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="editPayBaseInfo.otherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :span="12">
                      <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="editPayBaseInfo.endmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="editPayBaseInfo.mediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="editPayBaseInfo.unemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="editPayBaseInfo.emplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="editPayBaseInfo.mateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="editPayBaseInfo.houseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="试用期比例" prop="probRatio">
                            <el-input v-model="editPayBaseInfo.probRatio"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="12">
                      <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="editPayBaseInfo.welcoeNo" @change="welcoeNoChange">
                                <el-option label="广州标准" value="0001"></el-option>
                                <el-option label="深圳标准" value="0002"></el-option>
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
                <el-form :inline="true" :model="editPayBaseInfo" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="editPayBaseInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="附件" prop="attachm">
				  		    <el-input v-model="editPayBaseInfo.attachm"></el-input>
				  		    <el-upload class="upload-demo" :on-change="handleFileUpload" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :auto-upload="false">
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
      custInfo: {},
      editPayBaseInfo: {},
      insurancePayTemp: {},
      rules: {
        wagesBase: [
          { required: true, message: "基本工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        wagesPerf: [
          { required: true, message: "绩效工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        postPension: [
          { required: true, message: "岗位补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        otherPension: [
          { required: true, message: "其他补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        endmBase: [
          { required: true, message: "养老保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        mediBase: [
          { required: true, message: "医疗保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        unemBase: [
          { required: true, message: "失业保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        emplBase: [
          { required: true, message: "工伤保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        mateBase: [
          { required: true, message: "生育保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "只能输入两位小数点" }
        ],
        houseBase: [
          { required: true, message: "公积金基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "格式为如:0.80" }
        ],
        probRatio: [
          { required: true, message: "使用期比例不能为空", trigger: "blur" },
          { pattern: /^(0)+(.[0-9]{1,2})?$/, message: "格式为如:0.87" }
        ],
        welcoeNo: [{ required: true, message: "请选择保险缴纳标准", trigger: "change" }],
        remark: []
      }
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = this.$route.params.userNo;
    this.getCustInfo(); //初始查询用户信息
    this.getPayBaseInfoDetail(); //初始查询薪酬基数详情
    this.getInsurancePayTemp(); //初始查询保险缴纳标准
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
          self.editPayBaseInfo = res.data.data;
          console.log(self.editPayBaseInfo);
        })
        .catch(() => {
          console.log("error");
        });
    },
    getInsurancePayTemp() {
      const self = this;
      let applyNo = self.editPayBaseInfo.welcoeNo;
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
    welcoeNoChange(val) {
      const self = this;
      console.log(val);
      self.editPayBaseInfo.welcoeNo = val;
      self.getInsurancePayTemp(); //根据参数值查询保险缴纳标准
    },
    handleFileUpload(file, fileList) {
      // this.fileList3 = fileList.slice(-3);
      console.log(file);
      this.addPayBaseInfo.attachm = file.name;
    },
    handleSave(editPayBaseInfoRules) {
      this.$refs[editPayBaseInfoRules].validate(valid => {
        if (valid) {
          let editPayBaseInfo = {};
          editPayBaseInfo.userNo = this.editPayBaseInfo.userNo;
          editPayBaseInfo.wagesBase = this.editPayBaseInfo.wagesBase;
          editPayBaseInfo.wagesPerf = this.editPayBaseInfo.wagesPerf;
          editPayBaseInfo.postPension = this.editPayBaseInfo.postPension;
          editPayBaseInfo.otherPension = this.editPayBaseInfo.otherPension;
          editPayBaseInfo.endmBase = this.editPayBaseInfo.endmBase;
          editPayBaseInfo.mediBase = this.editPayBaseInfo.mediBase;
          editPayBaseInfo.unemBase = this.editPayBaseInfo.unemBase;
          editPayBaseInfo.emplBase = this.editPayBaseInfo.emplBase;
          editPayBaseInfo.mateBase = this.editPayBaseInfo.mateBase;
          editPayBaseInfo.houseBase = this.editPayBaseInfo.houseBase;
          editPayBaseInfo.probRatio = this.editPayBaseInfo.probRatio;    
          editPayBaseInfo.welcoeNo = this.editPayBaseInfo.welcoeNo;   
          editPayBaseInfo.remark = this.editPayBaseInfo.remark;                
          console.log(editPayBaseInfo);
          this.$axios
            .put("/iem_hrm/pay/updatePayBaseInfo", editPayBaseInfo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000")
                this.$router.push("/payBaseInfo_setting");
              else this.$message.error("薪酬基数修改失败！");
            })
            .catch(() => {
              this.$message.error("薪酬基数修改失败！");
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
.edit_paybaseinfo {
  padding: 0 0 20px 20px;
}
</style>
