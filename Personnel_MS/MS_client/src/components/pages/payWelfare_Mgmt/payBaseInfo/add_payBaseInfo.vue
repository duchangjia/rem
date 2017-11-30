<template>
    <div class="add_paybaseinfo">
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
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="custInfo.custName" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职务" prop="custPost">
                            <el-input v-model="custInfo.custPost" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="职级">
                            <el-input v-model="_custClass" :disabled="true"></el-input>
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
                                <el-option v-for="item in insurancePayTemplates" :label="item.applyName" :value="item.applyNo"></el-option>
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
                <el-form :inline="true" :model="addPayBaseInfo" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">                
                    <el-col :span="24">
                        <el-form-item label="薪资超限说明" prop="remark">
                            <el-input type="textarea" v-model="addPayBaseInfo.remark"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="附件">
				  		    <el-input v-model="addPayBaseInfo.attachm"></el-input>
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
import messageBox from "../../../common/messageBox-components.vue";
export default {
  data() {
    return {
      labelPosition: "right",
      custInfo: {
        userNo: "",
        custName: "",
        organNo: "",
        derpNo: "",
        custpost: "",
        custClass: ""
      },
      addPayBaseInfo: {
        userNo: "",
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
        wagesProb: "",
        welcoeNo: "",
        attachm: "",
        remark: ""
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

      insurancePayTemplates: {},
      insurancePayTemp: {},
      payBaseInfoRules: {
        wagesBase: [
          { required: true, message: "基本工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        wagesPerf: [
          { required: true, message: "绩效工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        postPension: [
          { required: true, message: "岗位补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        phonePension: [
          { required: true, message: "通讯补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        trafficPension: [
          { required: true, message: "交通补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        livingPension: [
          { required: true, message: "生活补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        overtimePay: [
          { required: true, message: "加班工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        otherPension: [
          { required: true, message: "其他补贴不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        endmBase: [
          { required: true, message: "养老保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        mediBase: [
          { required: true, message: "医疗保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        unemBase: [
          { required: true, message: "失业保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        emplBase: [
          { required: true, message: "工伤保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        mateBase: [
          { required: true, message: "生育保险基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        houseBase: [
          { required: true, message: "公积金基数不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
        ],
        wagesProb: [
          { required: true, message: "试用期工资不能为空", trigger: "blur" },
          { pattern: /^([1-9]\d*|0)(\.\d{2})?$/, message: "可精确到小数点后2位的正数" }
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
    _perEndm: function() {
        return Number(this.addPayBaseInfo.endmBase) * this.insurancePayTemp.perEndmRate + this.insurancePayTemp.perEndmFixed || 0;
    },
    _comEndm: function() {
        return Number(this.addPayBaseInfo.endmBase) * this.insurancePayTemp.comEndmRate + this.insurancePayTemp.comEndmFixed || 0;
    },
    _perMedi: function() {
        return Number(this.addPayBaseInfo.mediBase) * this.insurancePayTemp.perMediRate + this.insurancePayTemp.perMediFixed || 0;
    },
    _comMedi: function() {
        return Number(this.addPayBaseInfo.mediBase) * this.insurancePayTemp.comMediRate + this.insurancePayTemp.comMediFixed || 0;
    },
    _perUnem: function() {
        return Number(this.addPayBaseInfo.unemBase) * this.insurancePayTemp.perUnemRate + this.insurancePayTemp.perUnemFixed || 0;
    },
    _comUnem: function() {
        return Number(this.addPayBaseInfo.unemBase) * this.insurancePayTemp.comUnemRate + this.insurancePayTemp.comUnemFixed || 0;
    },
    _perEmpl: function() {
        return Number(this.addPayBaseInfo.emplBase) * this.insurancePayTemp.perEmplRate + this.insurancePayTemp.perEmplFixed || 0;
    },
    _comEmpl: function() {
        return Number(this.addPayBaseInfo.emplBase) * this.insurancePayTemp.comEmplRate + this.insurancePayTemp.comEmplFixed || 0;
    },
    _perMate: function() {
        return Number(this.addPayBaseInfo.mateBase) * this.insurancePayTemp.perMateRate + this.insurancePayTemp.perMateFixed || 0;
    },
    _comMate: function() {
        return Number(this.addPayBaseInfo.mateBase) * this.insurancePayTemp.comMateRate + this.insurancePayTemp.comMateFixed || 0;
    },
    _perHouse: function() {
        return Number(this.addPayBaseInfo.houseBase) * this.insurancePayTemp.perHousRate + this.insurancePayTemp.perHousFixed || 0;
    },
    _comHouse: function() {
        return Number(this.addPayBaseInfo.houseBase) * this.insurancePayTemp.comHousRate + this.insurancePayTemp.comHousFixed || 0;
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
          console.log('insurancePayTemp',res);
          self.insurancePayTemp = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    wagesBaseChange() {
      let salaryTop = 1500; // 该职级薪资上限，应从接口查出
      console.log(Number(this.addPayBaseInfo.wagesBase) > salaryTop);
      if (Number(this.addPayBaseInfo.wagesBase) > salaryTop) {
        this.payBaseInfoRules.remark.push({
          required: true,
          message: "请输入薪资超限说明",
          trigger: "blur"
        });
        console.log(this.payBaseInfoRules.remark);
      }
    },
    welcoeNoChange(val) {
      this.addPayBaseInfo.welcoeNo = val;
      this.getInsurancePayTemp(); //根据参数值计算保险缴纳标准
    },
    handleFileUpload(file, fileList) {
      console.log(file);
      this.addPayBaseInfo.attachm = file.name;
    },
    handleSave(addPayBaseInfoRules) {
      this.$refs[addPayBaseInfoRules].validate(valid => {
        if (valid) {
          let newPayBaseInfo = this.addPayBaseInfo;
          console.log('newPayBaseInfo',newPayBaseInfo);
          this.$axios
            .post("/iem_hrm/pay/addPayBaseInfo", newPayBaseInfo)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                  this.$message({ type: "success", message: "操作成功!" });
                  this.$router.push("/payBaseInfo_setting");
              }
              else this.$message.error(res.data.retMsg);
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
.el-dialog__body {
  padding: 0 20px 30px 20px;
}
.el-dialog__body .el-input__inner {
  width: 164px;
}
.item-box .button-box .restBtn {
  margin-right: 5px;
}
</style>
