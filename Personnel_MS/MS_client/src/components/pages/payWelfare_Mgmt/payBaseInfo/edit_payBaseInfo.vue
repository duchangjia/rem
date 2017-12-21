<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数修改</span>
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
                <el-form :inline="true" :model="editPayBaseInfo" :rules="payBaseInfoRules" ref="editPayBaseInfoRules1" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                      <el-form-item label="基本工资" prop="wagesBase">
                         <el-input v-model="editPayBaseInfo.wagesBase" @blur="wagesBaseChange"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                      <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="editPayBaseInfo.wagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                      <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="editPayBaseInfo.postPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴" prop="phonePension">
                            <el-input v-model="editPayBaseInfo.phonePension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴" prop="trafficPension">
                            <el-input v-model="editPayBaseInfo.trafficPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴" prop="livingPension">
                            <el-input v-model="editPayBaseInfo.livingPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="editPayBaseInfo.attendanceBonus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="editPayBaseInfo.seniorityPay"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12" prop="overtimePay">
                        <el-form-item label="加班工资">
                            <el-input v-model="editPayBaseInfo.overtimePay"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="editPayBaseInfo.otherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                      <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="editPayBaseInfo.endmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="editPayBaseInfo.mediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="editPayBaseInfo.unemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="editPayBaseInfo.emplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="editPayBaseInfo.mateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="editPayBaseInfo.houseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="试用期工资" prop="wagesProb">
                            <el-input v-model="editPayBaseInfo.wagesProb"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                      <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="editPayBaseInfo.welcoeNo" @change="welcoeNoChange">
                                <el-option v-for="(item, index) in insurancePayTemplates" :label="item.applyName" :key="index" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
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
                        <el-form-item label="公积金(单位)" :readonly="true">
                            <el-input v-model="_comHouse"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
                <el-form :inline="true" :model="editPayBaseInfo" :rules="payBaseInfoRules" ref="editPayBaseInfoRules2" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="editPayBaseInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
                            <el-upload class="upload-demo" ref="upload" name="file" action="/iem_hrm/file/addFile" multiple
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :on-change="handleFileUpload" 
                                :on-success="successUpload"
                                :limit="3"
                                :on-exceed="handleExceed"
                                :headers="token"
                                :file-list="fileList"
                                :show-file-list="true">
                                <el-button size="small" type="primary">选取文件</el-button>
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
    let validateWagesProb = (rule, value, callback) => {
      if (typeof value == "string") {
        if (Number(value) > Number(this.editPayBaseInfo.wagesBase)) {
          callback(new Error("试用期工资应小于基本工资"));
        } else if (
          value != "" &&
          value.match(/^([1-9]\d*|0)(\.\d{2})?$/) == null
        ) {
          callback(new Error("可精确到小数点后2位的正数"));
        }
      } else if (typeof value == "number") {
        callback();
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      userNo: "",
      custInfo: {},
      editPayBaseInfo: {},
      salaryTop: 0,
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },
      // fileIds: [],
      custPostList: [],
      custClassList: [],
      insurancePayTemplates: {},
      insurancePayTemp: {},
      payBaseInfoRules: {
        wagesBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        wagesPerf: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        postPension: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        phonePension: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        trafficPension: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        livingPension: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        overtimePay: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        otherPension: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        endmBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        mediBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        unemBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        emplBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        mateBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        houseBase: [
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        wagesProb: [{ validator: validateWagesProb, trigger: "blur" }],
        welcoeNo: [{ required: true, message: "请选择保险缴纳标准", trigger: "change" }],
        remark: []
      }
    };
  },
  components: {
    current
  },
  created() {
    this.userNo = sessionStorage.getItem("payBaseInfo_userNo");
    this.getCustInfo(); //初始查询用户信息
    this.getPayBaseInfoDetail(); //初始查询薪酬基数详情
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getInsurancePayTemp(); //初始查询保险缴纳标准
  },
  computed: {
    _perEndm: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.endmBase) *
            this.insurancePayTemp.perEndmRate +
            this.insurancePayTemp.perEndmFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comEndm: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.endmBase) *
            this.insurancePayTemp.comEndmRate +
            this.insurancePayTemp.comEndmFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _perMedi: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.mediBase) *
            this.insurancePayTemp.perMediRate +
            this.insurancePayTemp.perMediFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comMedi: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.mediBase) *
            this.insurancePayTemp.comMediRate +
            this.insurancePayTemp.comMediFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _perUnem: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.unemBase) *
            this.insurancePayTemp.perUnemRate +
            this.insurancePayTemp.perUnemFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comUnem: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.unemBase) *
            this.insurancePayTemp.comUnemRate +
            this.insurancePayTemp.comUnemFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _perEmpl: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.emplBase) *
            this.insurancePayTemp.perEmplRate +
            this.insurancePayTemp.perEmplFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comEmpl: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.emplBase) *
            this.insurancePayTemp.comEmplRate +
            this.insurancePayTemp.comEmplFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _perMate: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.mateBase) *
            this.insurancePayTemp.perMateRate +
            this.insurancePayTemp.perMateFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comMate: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.mateBase) *
            this.insurancePayTemp.comMateRate +
            this.insurancePayTemp.comMateFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _perHouse: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.houseBase) *
            this.insurancePayTemp.perHousRate +
            this.insurancePayTemp.perHousFixed) *
            10
        ) / 10 || 0.0
      );
    },
    _comHouse: function() {
      return (
        Math.round(
          (Number(this.editPayBaseInfo.houseBase) *
            this.insurancePayTemp.comHousRate +
            this.insurancePayTemp.comHousFixed) *
            10
        ) / 10 || 0.0
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
          console.log("editPayBaseInfo", self.editPayBaseInfo);
          if (
            self.editPayBaseInfo.epFileManageList &&
            self.editPayBaseInfo.epFileManageList.length >= 1
          ) {
            self.editPayBaseInfo.epFileManageList.forEach(function(ele) {
              self.fileList.push({
                name: ele.fileName + "." + ele.fileSuffix,
                url: ele.fileAddr,
                fileId: ele.fileId
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
      let applyNo = self.editPayBaseInfo.welcoeNo;
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
    wagesBaseChange(event) {
      console.log("填入的基本工资", this.editPayBaseInfo.wagesBase);
      const self = this;
      let userNo = self.custInfo.userNo;
      self.$axios
        .get("/iem_hrm/pay/querUserSalaryTop/" + userNo)
        .then(res => {
          self.salaryTop = res.data.data;
          console.log("salaryTop", self.salaryTop);
          if (Number(this.editPayBaseInfo.wagesBase) > self.salaryTop) {
            this.payBaseInfoRules.remark = [];
            this.payBaseInfoRules.remark.push({
              required: true,
              message: "请输入薪资超限说明",
              trigger: "blur"
            });
          } else {
            this.payBaseInfoRules.remark = [];
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
    welcoeNoChange(val) {
      this.editPayBaseInfo.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值查询保险缴纳标准
    },

    // 附件上传
    handleFileUpload(file, fileList) {
      this.fileList = fileList;
      console.log("选中的this.fileList:", this.fileList);
    },
    handleRemove(file, fileList) {
      console.log("移除的file", file);
      console.log("移除的fileList", fileList);
      let index = this.fileList.indexOf(file);
      fileList.splice(index, 0, file);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete("/iem_hrm/file/deleteFile/" + file.fileId)
            .then(res => {
              let result = res.data.retMsg;
              if ("操作成功" == result) {
                this.$message({
                  type: "success",
                  message: result
                });
                fileList.splice(index, 1);
              } else {
                this.$message({
                  type: "error",
                  message: result
                });
              }
            })
            .catch(e => {
              console.log(e);
              this.$message({
                type: "error",
                message: e.retMsg
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handlePreview(file) {
      console.log(file); // 点击已上传的文件链接时
    },
    handleExceed(files, fileList) {
      // 文件超出数量
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      );
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_res_fileList", fileList);
      if (res.code == "S00000") {
        file.fileId = res.data;
        this.$message({ type: "success", message: "文件上传成功!" });
        // this.fileIds.push(res.data);
        // console.log("this.fileIds", this.fileIds);
      } else this.$message.error(res.retMsg);
    },

    handleSave() {
      let rulesValid1 = false;
      let rulesValid2 = false;

      this.$refs.editPayBaseInfoRules1.validate(valid => {
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
      this.$refs.editPayBaseInfoRules2.validate(valid => {
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
        let fileIds = [];
        for (let k in this.fileList) {
          fileIds.push(this.fileList[k].fileId);
        }
        console.log("fileIds", fileIds);
        let editPayBaseInfo = {};
        editPayBaseInfo.userNo = this.editPayBaseInfo.userNo;
        editPayBaseInfo.wagesBase = this.editPayBaseInfo.wagesBase;
        editPayBaseInfo.wagesPerf = this.editPayBaseInfo.wagesPerf;
        editPayBaseInfo.postPension = this.editPayBaseInfo.postPension;
        editPayBaseInfo.phonePension = this.editPayBaseInfo.phonePension;
        editPayBaseInfo.trafficPension = this.editPayBaseInfo.trafficPension;
        editPayBaseInfo.livingPension = this.editPayBaseInfo.livingPension;
        editPayBaseInfo.overtimePay = this.editPayBaseInfo.overtimePay;
        editPayBaseInfo.otherPension = this.editPayBaseInfo.otherPension;
        editPayBaseInfo.endmBase = this.editPayBaseInfo.endmBase;
        editPayBaseInfo.mediBase = this.editPayBaseInfo.mediBase;
        editPayBaseInfo.unemBase = this.editPayBaseInfo.unemBase;
        editPayBaseInfo.emplBase = this.editPayBaseInfo.emplBase;
        editPayBaseInfo.mateBase = this.editPayBaseInfo.mateBase;
        editPayBaseInfo.houseBase = this.editPayBaseInfo.houseBase;
        editPayBaseInfo.wagesProb = this.editPayBaseInfo.wagesProb;
        editPayBaseInfo.welcoeNo = this.editPayBaseInfo.welcoeNo;
        editPayBaseInfo.remark = this.editPayBaseInfo.remark;
        editPayBaseInfo.fileIds = fileIds;
        console.log(editPayBaseInfo);
        this.$axios
          .put("/iem_hrm/pay/updatePayBaseInfo", editPayBaseInfo)
          .then(res => {
            console.log(res);
            if (res.data.code == "S00000") {
              this.$message({ type: "success", message: "操作成功!" });
              this.$router.push("/payBaseInfo_setting");
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
