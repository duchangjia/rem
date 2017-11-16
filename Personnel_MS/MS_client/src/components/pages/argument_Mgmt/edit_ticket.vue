<template>
    <div class="add_ticket clearfix">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护" siji="开票信息新增"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="titlebar"><span class="title-text">开票信息修改</span><el-button type="primary" @click="save()" class="toolBtn">保存</el-button></div>
                <div class="add-wrapper">
                    <el-form :inline="true" label-width="110px" :rules="rules" :model="custInfo" ref="info">
                        <el-col :sm="24" :md="12">
                            <el-form-item label="公司" prop="organName"  >
                                <el-select v-model="custInfo.organName" disabled="disabled">
                                    <el-option
                                      v-for="item in companyName"
                                      :key="item.organName"
                                      :label="item.organName"
                                      :value="item.organName">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="机构号" prop="organNo">
                                 <el-input v-model="custInfo.organNo" placeholder="请输入机构号" disabled="disabled"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="纳税人编号" prop="organTaxNo">
                                 <el-input v-model="custInfo.organTaxNo" placeholder="请输入纳税人编号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="电话" prop="organTel">
                                 <el-input v-model="custInfo.organTel" placeholder="请输入电话"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="账号" prop="organAcct">
                                 <el-input v-model="custInfo.organAcct" placeholder="请输入账号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="账户名称" prop="organAcctname">
                                 <el-input v-model="custInfo.organAcctname"  placeholder="请输入账户名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="24" :md="12">
                            <el-form-item label="地址" prop="organAddr">
                                 <el-input v-model="custInfo.organAddr"  placeholder="请输入地址"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    let checkTel = (rule, value, callback) => {
        let ret  = /^[1][3578]\d{9}$/
        if(!ret.test(value)&&value!==''){
           return  callback('请输入正确的手机号码');
        }else{
            callback()
        }
    }
    return {
      custInfo: {
        organName: "",
        organNo: "",
        organTaxNo: "",
        organTel:"",        
        organAcct: "",
        organAcctname: "",
        organAddr: ""
      },
      rules: {
        organName: [{ required: true, message: "请选择公司名称", trigger: "change" }],
        organNo: [{ required: true, message: "请输入机构号", trigger: "blur" }],
        organTaxNo: [{ required: true, message: "请输入纳税人编号", trigger: "blur" }],
        organTel:[{validator:checkTel,trigger: 'blur'}]
      },
      companyName: []
    };
  },
  created() {
    let self = this;
    this.$axios
      .get(
        "/iem_hrm/organBillInfo/queryBillInfDtl/" + this.$route.query.organNo
      )
      .then(res => {
        self.custInfo.organName = res.data.data.organName;
        self.custInfo.organNo = res.data.data.organNo;
        self.custInfo.organTaxNo = res.data.data.organTaxNo;
         self.custInfo.organTel = res.data.data.organTel
        self.custInfo.organAcct = res.data.data.organAcct;
        self.custInfo.organAcctname = res.data.data.organAcctname;
        self.custInfo.organAddr = res.data.data.organAddr;

        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    save() {
      console.log(this.info);
      let self = this;

      self.$refs.info.validate((valid) => {
          console.log(self.custInfo,'传入的对象');
        if (valid) {
          self.$axios
            .put("/iem_hrm/organBillInfo/modBillInf", self.custInfo)
            .then(res => {
              let result = res.data;
              if ((result.code = "S00000")) {
                self.$message({
                  message: result.retMsg,
                  type: "success"
                });
              } else {
                self.$message({
                  message: result.retMsg,
                  type: "error"
                });
              }
            })
            .catch(e => {
              self.$message({
                message: e.retMsg,
                type: "error"
              });
            });
        }
      });
    }
  },
  components: {
    current
  }
};
</script>

<style>
.add_ticket {
  padding: 0 0 20px 20px;
}
.content-wrapper {
  background: #ffffff;
  padding: 0 20px 20px;
  color: #333333;
  clear: both;
  min-height: 746px;
  overflow: hidden;
}

.content-wrapper .titlebar {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .titlebar .title-text {
  display: inline-block;
  height: 50px;
  position: relative;
}

.content-wrapper .titlebar .title-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #333333;
}

.content-wrapper .toolBtn {
  float: right;
  margin-top: 10px;
  height: 30px;
  width: 120px;
  background: #ff9900;
  border: none;
  padding: 0;
}

.pact_mgmt .el-button {
  padding: 0;
}

.el-input__inner {
  height: 40px;
  width: 180px;
}

.add-wrapper .el-input__inner {
  width: 300px;
}

.el-input__inner:focus,
.el-textarea__inner:focus,
.el-select .el-input__inner:focus,
.el-input-group__append:focus,
.el-input-group__prepend:focus {
  border-color: #ff9900;
}

.el-input-group--append .el-input__inner {
  width: 253px;
}

/* .el-input-group--prepend .el-input__inner,
.el-input-group__append {
  border-radius: 0;
} */

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
  background-color: #ff9900;
}

label {
  font-weight: 400;
  margin-bottom: 0;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-form-item__label {
  font-family: "PingFangSC Regular";
  color: #999999;
  padding: 13px 12px 13px 0;
}

.el-table th > .cell {
  padding: 0 15px;
}

.el-button--small {
  margin: 4px;
  /* padding: 7px 9px !important; */
}

.el-button,
.el-button + .el-button {
  margin-left: 0;
}

table .el-button {
  color: #ff9900;
  border-color: #ff9900;
}
table .el-button:focus,
table .el-button:hover,
table .el-button:active {
  color: #ff9900;
}

table .el-button--danger:focus,
table .el-button--danger:hover,
table .el-button--danger:active {
  color: #fff;
  background-color: #ff4949;
  border-color: #ff4949;
}

.linkSpan {
  color: #337ab7;
  text-decoration: underline;
}

.linkSpan:hover {
  cursor: pointer;
}

.add-wrapper {
  overflow: hidden;
}
.add-wrapper form {
  font-size: 0;
  margin-top: 30px;
}

.add-wrapper .item-title {
  font-size: 14px;
  height: 56px;
  line-height: 56px;
  padding-left: 8px;
}

.add-wrapper .el-form-item__label {
  margin-right: 14px;
}
.el-form-item.is-required .el-form-item__label:before {
  content: "*";
  color: #ff4949;
  margin-right: 4px;
}
</style>
