<template>
    <div class="container-wrap">
        <current yiji="薪酬福利" erji="薪酬基数设置" sanji="薪酬基数新增">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">薪酬基数新增</span>
                <el-button type="primary" @click="handleSave('addPayBaseInfoRules')" class="toolBtn">保存</el-button>
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
                            <el-input v-model="custInfo.userNo" placeholder="请选择员工编号">
                                <el-button slot="append" icon="search" @click="userNoSelect"></el-button>
                            </el-input>
                            <messageBox 
                                :title="boxTitle"
                                :tableOption.sync="tableOption"  
                                :inputFirstOption.sync="inputFirstOption" 
                                :inputSecOption.sync="inputSecOption"
                                :searchData.sync="searchData" 
                                :searchUrl="searchUrl"
                                :dialogVisible.sync="dialogVisible"
                                :pagination.sync="msgPagination"
                                @dialogConfirm="dialogConfirm"
                                ></messageBox>
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
                <el-col :span="24" class="item-title">薪酬基数信息</el-col>
                <el-form :inline="true" :model="addPayBaseInfo" :rules="payBaseInfoRules" ref="addPayBaseInfoRules" :label-position="labelPosition"  label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="基本工资" prop="wagesBase">
                            <el-input v-model="addPayBaseInfo.wagesBase" @blur="wagesBaseChange"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="绩效工资" prop="wagesPerf">
                            <el-input v-model="addPayBaseInfo.wagesPerf"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="岗位补贴" prop="postPension">
                            <el-input v-model="addPayBaseInfo.postPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="通讯补贴" prop="phonePension">
                            <el-input v-model="addPayBaseInfo.phonePension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="交通补贴" prop="trafficPension">
                            <el-input v-model="addPayBaseInfo.trafficPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生活补贴" prop="livingPension">
                            <el-input v-model="addPayBaseInfo.livingPension"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :sm="24" :md="12">
                        <el-form-item label="全勤奖">
                            <el-input v-model="addPayBaseInfo.attendanceBonus"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工龄奖">
                            <el-input v-model="addPayBaseInfo.seniorityPay"></el-input>
                        </el-form-item>
                    </el-col> -->
                    <el-col :sm="24" :md="12">
                        <el-form-item label="加班工资" prop="overtimePay">
                            <el-input v-model="addPayBaseInfo.overtimePay"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="其他补贴" prop="otherPension">
                            <el-input v-model="addPayBaseInfo.otherPension"></el-input>
                        </el-form-item>
                    </el-col>  
                    <el-col :sm="24" :md="12">
                        <el-form-item label="养老保险基数" prop="endmBase">
                            <el-input v-model="addPayBaseInfo.endmBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="医疗保险基数" prop="mediBase">
                            <el-input v-model="addPayBaseInfo.mediBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="失业保险基数" prop="unemBase">
                            <el-input v-model="addPayBaseInfo.unemBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="工伤保险基数" prop="emplBase">
                            <el-input v-model="addPayBaseInfo.emplBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="生育保险基数" prop="mateBase">
                            <el-input v-model="addPayBaseInfo.mateBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="公积金基数" prop="houseBase">
                            <el-input v-model="addPayBaseInfo.houseBase"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="试用期工资" prop="wagesProb">
                            <el-input v-model="addPayBaseInfo.wagesProb"></el-input>
                        </el-form-item>
                    </el-col> 
                    <el-col :sm="24" :md="12">
                        <el-form-item label="保险缴纳标准" prop="welcoeNo">
                            <el-select v-model="addPayBaseInfo.welcoeNo" @change="welcoeNoChange">
                                <el-option v-for="(item, index) in insurancePayTemplates" :key="index" :label="item.applyName" :value="item.applyNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                </el-form>
                <el-form :inline="true" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
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
                <el-form :inline="true" :model="addPayBaseInfo" :rules="payBaseInfoRules" ref="addPayBaseInfoRules" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="addPayBaseInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
				  		              <el-input v-model="addPayBaseInfo.attachm"></el-input>
                            <el-upload class="upload-demo" ref="upload" action="/iem_hrm/pay/addPayBaseInfo" 
                                :data="addPayBaseInfo"
                                :on-change="handleFileUpload" 
                                :on-success="successUpload"
                                :show-file-list="false" 
                                :auto-upload="false"
                                :headers="token"
                                :name="filesName"
                                :multiple="true">
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
import messageBox from "../../../common/messageBox-components.vue";
export default {
  data() {
    let validateWagesProb = (rule, value, callback) => {
      if (Number(value) > Number(this.addPayBaseInfo.wagesBase)) {
        callback(new Error("试用期工资应小于基本工资"));
      } else if (value.match(/^([1-9]\d*|0)(\.\d{2})?$/) == null) {
        callback(new Error("可精确到小数点后2位的正数"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      custInfo: {
        organName: "",
        derpName: "",
        userNo: "",
        custName: "",
        custPost: "",
        custClass: ""
      },
      addPayBaseInfo: {
        userNo: "",
        wagesBase: "0.00",
        wagesPerf: "0.00",
        postPension: "0.00",
        phonePension: "0.00",
        trafficPension: "0.00",
        livingPension: "0.00",
        attendanceBonus: "0.00",
        seniorityPay: "0.00",
        overtimePay: "0.00",
        otherPension: "0.00",
        endmBase: "0.00",
        mediBase: "0.00",
        unemBase: "0.00",
        emplBase: "0.00",
        mateBase: "0.00",
        houseBase: "0.00",
        wagesProb: "0.00",
        welcoeNo: "",
        attachm: "",
        remark: ""
      },
      salaryTop: 0,
      filesName: "files",
      fileList: [],
      token: {
        Authorization: `Bearer ` + localStorage.getItem("access_token")
      },

      dialogVisible: false,
      boxTitle: "",
      numType: "",
      tableOption: [],
      inputFirstOption: {},
      inputSecOption: {},
      msgPagination: {},
      searchData: {},
      searchUrl: "",
      saveUrl: "",

      custPostList: [],
      custClassList: [],
      insurancePayTemp: {},
      insurancePayTemplates: {},
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
        wagesProb: [
          { validator: validateWagesProb, trigger: "blur" }
        ],
        welcoeNo: [{ required: true, message: "请选择保险缴纳标准", trigger: "change" }],
        remark: []
      }
    };
  },
  components: {
    current,
    messageBox
  },
  created() {
    console.log('接到的custInfo', sessionStorage.getItem("addPayChangeInfo_custInfo"));
    if(sessionStorage.getItem("addPayChangeInfo_custInfo")) {
      this.custInfo = sessionStorage.getItem("addPayChangeInfo_custInfo");
      this.addPayBaseInfo.userNo = this.custInfo.userNo;
    }
    // console.log('当前custInfo', this.custInfo);
    this.getAllInsurancePayTemplate(); // 查询保险缴纳标准模板
    this.getCustPostList(); //查询岗位列表
    this.getCustClassList(); //查询职级列表
  },
  computed: {
    _perEndm: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.endmBase) *
            this.insurancePayTemp.perEndmRate +
            this.insurancePayTemp.perEndmFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comEndm: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.endmBase) *
            this.insurancePayTemp.comEndmRate +
            this.insurancePayTemp.comEndmFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _perMedi: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.mediBase) *
            this.insurancePayTemp.perMediRate +
            this.insurancePayTemp.perMediFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comMedi: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.mediBase) *
            this.insurancePayTemp.comMediRate +
            this.insurancePayTemp.comMediFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _perUnem: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.unemBase) *
            this.insurancePayTemp.perUnemRate +
            this.insurancePayTemp.perUnemFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comUnem: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.unemBase) *
            this.insurancePayTemp.comUnemRate +
            this.insurancePayTemp.comUnemFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _perEmpl: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.emplBase) *
            this.insurancePayTemp.perEmplRate +
            this.insurancePayTemp.perEmplFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comEmpl: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.emplBase) *
            this.insurancePayTemp.comEmplRate +
            this.insurancePayTemp.comEmplFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _perMate: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.mateBase) *
            this.insurancePayTemp.perMateRate +
            this.insurancePayTemp.perMateFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comMate: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.mateBase) *
            this.insurancePayTemp.comMateRate +
            this.insurancePayTemp.comMateFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _perHouse: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.houseBase) *
            this.insurancePayTemp.perHousRate +
            this.insurancePayTemp.perHousFixed) *
            10
        ) / 10 || 0.00
      );
    },
    _comHouse: function() {
      return (
        Math.round(
          (Number(this.addPayBaseInfo.houseBase) *
            this.insurancePayTemp.comHousRate +
            this.insurancePayTemp.comHousFixed) *
            10
        ) / 10 || 0.00
      );
    }
  },
  methods: {
    userNoSelect() {
      //table
      this.tableOption = [
        {
          thName: "工号", //table 表头
          dataKey: "userNo" //table-col所绑定的prop值
        },
        {
          thName: "姓名", //table 表头
          dataKey: "custName" //table-col所绑定的prop值
        }
      ];
      //input 第一个搜索框的配置项
      (this.inputFirstOption = {
        labelName: "姓名", //label头
        placeholder: "请输入姓名" //input placeholder
      }),
        //input 第二个搜索框的配置项
        (this.inputSecOption = {
          labelName: "工号",
          placeholder: "请输入工号"
        }),
        //搜索所需传值
        (this.searchData = {
          custName: "",
          userNo: ""
        });
      //table分页所需传值
      this.msgPagination = {
        pageNum: 1,
        pageSize: 5,
        totalRows: 1
      };
      this.numType = 1; //点击确定后需要修改的对象 numType为changeNo方法所改变的type
      this.dialogVisible = true; //dialog打开
      this.searchUrl = "/iem_hrm/CustInfo/queryCustBasicInfList"; //查询接口
      this.saveUrl = "/iem_hrm/CustInfo/queryCustInfoByUserNo/"; //点击确定后根据号码查询用户信息借口 没有则为空
      this.boxTitle = "员工编号选择"; //dialog标题
    },
    dialogConfirm(ajaxInfo) {
      const self = this;
      let userNo = ajaxInfo.stateNo;
      self.$axios
        .get(self.saveUrl + userNo)
        .then(res => {
          if (res.data.code == "S00000") {
            self.dialogVisible = false;
            self.custInfo = res.data.data;
            self.addPayBaseInfo.userNo = self.custInfo.userNo;
            console.log("custInfo", self.custInfo);
          }
        })
        .catch(e => {
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
        .get(
          "/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=PER_ENDM_FIXED"
        )
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
      let applyNo = self.addPayBaseInfo.welcoeNo;
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
      console.log("填入的基本工资", this.addPayBaseInfo.wagesBase);
      const self = this;
      let userNo = self.custInfo.userNo;
      self.$axios
        .get("/iem_hrm/pay/querUserSalaryTop/" + userNo)
        .then(res => {
          self.salaryTop = res.data.data;
          console.log("salaryTop", self.salaryTop);
          if (Number(this.addPayBaseInfo.wagesBase) > self.salaryTop) {
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
      this.addPayBaseInfo.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值计算保险缴纳标准
    },
    // 文件上传
    handleFileUpload(file, fileList) {
      this.fileList = fileList;
      this.addPayBaseInfo.attachm = "";
      fileList.forEach(function(item) {
        this.addPayBaseInfo.attachm += item.name + " ";
      }, this);
      console.log("选中的fileList", fileList);
      console.log("选中的this.fileList:", this.fileList);
    },
    successUpload(res, file, fileList) {
      console.log("upload_response", res);
      if (res.code == "S00000") {
        this.$message({ type: "success", message: "操作成功!" });
        this.$router.push("/payBaseInfo_setting");
      } else this.$message.error(res.retMsg);
    },
    handleSave(addPayBaseInfoRules) {
      this.$refs[addPayBaseInfoRules].validate(valid => {
        if (valid) {
          console.log("触发上传时的addPayBaseInfo", this.addPayBaseInfo);
          console.log("触发上传时的this.fileList:", this.fileList);
          if (this.fileList.length != 0) {
            this.$refs.upload.submit(); // 触发上传文件
          } else {
            let newPayBaseInfo = this.addPayBaseInfo;
            console.log("newPayBaseInfo", newPayBaseInfo);
            this.$axios
              .post("/iem_hrm/pay/addPayBaseInfo", newPayBaseInfo)
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

</style>
