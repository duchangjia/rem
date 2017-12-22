<template>
  <div class="container-wrap">
    <current yiji="人事事务" erji="人事合同" sanji="合同新增">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">合同新增</span>
        <el-button type="primary" @click="handleSave('addPactMsgRules')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper clearfix">
        <el-form :inline="true" :model="addPactMsg" :rules="pactMsgRules" ref="addPactMsgRules" :label-position="labelPosition" label-width="110px">
          <el-col :sm="24" :md="12">
            <el-form-item label="纸质合同编号">
              <el-input v-model="addPactMsg.paperPactNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同名称">
              <el-input v-model="addPactMsg.pactName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="公司名称">
              <el-input v-model="custInfo.organName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="部门名称">
              <el-input v-model="custInfo.derpName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="工号" prop="userNo">
              <el-input readonly="readonly" v-model="custInfo.userNo" placeholder="请选择员工编号">
                <el-button slot="append" icon="search" @click="userNoSelect"></el-button>
              </el-input>
              <messageBox :title="boxTitle" :tableOption.sync="tableOption" :inputFirstOption.sync="inputFirstOption" :inputSecOption.sync="inputSecOption"
                :searchData.sync="searchData" :searchUrl="searchUrl" :dialogVisible.sync="dialogVisible" :pagination.sync="msgPagination"
                @dialogConfirm="dialogConfirm"></messageBox>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="员工姓名">
              <el-input v-model="custInfo.custName" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="性别">
              <el-input v-model="_sex" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="身份证">
              <el-input v-model="custInfo.certNo" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同类型">
              <el-select v-model="addPactMsg.pactType">
                <el-option label="劳动合同" value="01"></el-option>
                <el-option label="保密协议" value="02"></el-option>
                <el-option label="其他" value="99"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="签订日期" prop="signTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.signTime" @change="signTimeChange" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同开始日期" prop="pactStartTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactStartTime" :picker-options="pactStartTimeOption" @change="pactStartTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同结束日期" prop="pactEndTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactEndTime" :picker-options="pactEndTimeOption" @change="pactEndTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同状态" prop="pactStatus">
              <el-select v-model="addPactMsg.pactStatus">
                <el-option label="试用" value="01"></el-option>
                <el-option label="有效" value="02"></el-option>
                <el-option label="提前解除" value="03"></el-option>
                <el-option label="到期解除" value="04"></el-option>
                <el-option label="其他" value="99"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同年限" prop="pactExpires">
              <el-input v-model="addPactMsg.pactExpires"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="终止日期" prop="pactStopTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactStopTime" :picker-options="pactStopTimeOption" @change="pactStopTimeChange"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="合同附件" prop="attachm">
              <el-input v-model="addPactMsg.attachm"></el-input>
              <el-upload class="upload-demo" style="height:0;" ref="upload" name="files" action="/iem_hrm/pact/addPact" 
                  :headers="token"
                  :data="addPactMsg"
                  :beforeUpload="beforeAvatarUpload" 
                  :on-change="handleFileUpload" 
                  :on-success="successUpload"
                  :auto-upload="false"
                  :show-file-list="false" >
                  <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="终止原因" prop="stopReason">
              <el-input type="textarea" v-model="addPactMsg.stopReason"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="remark">
              <el-input type="textarea" v-model="addPactMsg.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label=" " prop="autoudFlag">
              <el-checkbox v-model="_autoudFlag">自动更新员工资料</el-checkbox>
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
    let that = this;
    let validateStartTime = (rule, value, callback) => {
      if (value < that.addPactMsg.signTime) {
        callback(new Error("合同开始日期不能早于签订日期"));
      } else {
        callback();
      }
    };
    let validateEndTime = (rule, value, callback) => {
      if (value < that.addPactMsg.pactStartTime) {
        callback(new Error("合同结束日期不能早于开始日期"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      custInfo: {},
      addPactMsg: {
        paperPactNo: "",
        pactName: "",
        userNo: "",
        pactType: "",
        signTime: "",
        pactStartTime: "",
        pactEndTime: "",
        pactStatus: "",
        pactExpires: "",
        pactStopTime: "",
        attachm: "",
        stopReason: "",
        remark: "",
        autoudFlag: "02"
      },
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

      pactStartTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.addPactMsg.signTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactEndTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.addPactMsg.pactStartTime).getTime() - 3600 * 1000 * 24
          );
        }
      },
      pactStopTimeOption: {
        disabledDate(time) {
          return (
            time.getTime() <
            new Date(that.addPactMsg.pactEndTime).getTime() - 3600 * 1000 * 24
          );
        }
      },

      pactMsgRules: {
        userNo: [
          {
            required: true,
            message: "工号不能为空",
            trigger: "blur"
          }
        ],
        pactType: [
          {
            required: true,
            message: "合同类型不能为空",
            trigger: "change"
          }
        ],
        signTime: [
          {
            required: true,
            message: "签订日期不能为空",
            trigger: "change"
          }
        ],
        pactStartTime: [
          {
            required: true,
            message: "合同开始日期不能为空",
            trigger: "change"
          },
          {
            type: "date",
            validator: validateStartTime,
            trigger: "change"
          }
        ],
        pactEndTime: [
          {
            required: true,
            message: "合同结束日期不能为空",
            trigger: "change"
          },
          {
            type: "date",
            validator: validateEndTime,
            trigger: "change"
          }
        ],
        pactStatus: [
          {
            required: true,
            message: "合同状态不能为空",
            trigger: "change"
          }
        ],
        pactExpires: [
          {
            required: true,
            message: "合同年限不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    current,
    messageBox
  },
  computed: {
    _sex: function() {
      if (this.custInfo.sex == "01") {
        return "男";
      } else if (this.custInfo.sex == "02") {
        return "女";
      } else if (this.custInfo.sex == "99") {
        return "其他";
      } else {
        return "";
      }
    },
    _autoudFlag: {
      get: function() {
        if (
          this.addPactMsg.autoudFlag == "01" ||
          this.addPactMsg.autoudFlag == true
        ) {
          return true;
        } else if (
          this.addPactMsg.autoudFlag == "02" ||
          this.addPactMsg.autoudFlag == false
        ) {
          return false;
        }
      },
      set: function(val) {
        if (val == true) {
          this.addPactMsg.autoudFlag = "01";
        } else {
          this.addPactMsg.autoudFlag = "02";
        }
      }
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
            self.addPactMsg.userNo = self.custInfo.userNo;
            console.log("custInfo", self.custInfo);
          }
        })
        .catch(e => {
          console.log("error");
        });
    },

    signTimeChange(val) {
      this.addPactMsg.signTime = val;
    },
    pactStartTimeChange(val) {
      this.addPactMsg.pactStartTime = val;
    },
    pactEndTimeChange(val) {
      this.addPactMsg.pactEndTime = val;
    },
    pactStopTimeChange(val) {
      this.addPactMsg.pactStopTime = val;
    },
    // 文件上传
    beforeAvatarUpload(file) {
      // const extension = file.name.split('.')[1] === 'xls'
      // const extension2 = file.name.split('.')[1] === 'xlsx'
      // const extension3 = file.name.split('.')[1] === 'doc'
      // const extension4 = file.name.split('.')[1] === 'docx'
      // if (!extension && !extension2 && !extension3 && !extension4) {
      // 		console.log('上传文件只能是 xls、xlsx、doc、docx 格式!')
      // }
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message({ message: "上传文件大小不能超过 10MB!", type: "error" });
      }
      return isLt2M; //extension || extension2 || extension3 || extension4 &&
    },
    handleFileUpload(file, fileList) {
      this.addPactMsg.attachm = file.name;
    },
    successUpload(res, file, fileList) {
      // 文件成功上传
      console.log("upload_response", res);
      if (res.code == "S00000") {
        this.$message({ type: "success", message: "操作成功!" });
        this.$router.push("/personnel_contract");
      } else this.$message.error(res.retMsg);
    },
    
    handleSave(addPactMsgRules) {
      this.$refs[addPactMsgRules].validate(valid => {
        if (valid) {
          console.log('newPact',this.addPactMsg);
          if (this.addPactMsg.attachm != "") {
            this.$refs.upload.submit(); // 触发上传文件
          } else {
            this.$axios
            .post("/iem_hrm/pact/addPact", this.addPactMsg)
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.$router.push("/personnel_contract");
              } else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
          }
          
        } else {
          console.log("error submit!!");
          this.$message({
            type: "error",
            message: "请确保必填信息填写正确!"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style>

</style>