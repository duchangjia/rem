<template>
  <div class="container-wrap">
    <current yiji="客户关系" erji="客户一览" sanji="新增客户">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">新增客户</span>
        <el-button type="primary" @click="handleSave('addCustForm')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="addCustMsg" :rules="custInfoRules" ref="addCustForm" :label-position="labelPosition" label-width="80px">
          <el-col :sm="24" :md="12">
            <el-form-item label="客户编号">
              <el-input type="text" v-model="addCustMsg.custNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称">
              <el-input type="text" v-model="addCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-select v-model="addCustMsg.custIndustry">
                <el-option label="金融" value="01"></el-option>
                <el-option label="制造" value="02"></el-option>
                <el-option label="医疗" value="03"></el-option>
                <el-option label="航空" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别">
              <el-select v-model="addCustMsg.custType">
                <el-option label="普通客户" value="01"></el-option>
                <el-option label="重要客户" value="02"></el-option>
                <el-option label="软件供应商" value="03"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别">
              <el-select v-model="addCustMsg.custLevel">
                <el-option label="重点客户" value="01"></el-option>
                <el-option label="普通客户" value="02"></el-option>
                <el-option label="低价值客户" value="03"></el-option>
                <el-option label="黑名单客户" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="所属地区">
              <el-input type="text" v-model="addCustMsg.custDistrict"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="addCustMsg.signAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址">
              <el-input type="text" v-model="addCustMsg.contactAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="addCustMsg.postCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="addCustMsg.setUpTime"  @change="pickSetUpTimeTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表">
              <el-input type="text" v-model="addCustMsg.Legal"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-input type="text" v-model="addCustMsg.comScale"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
import Vue from "vue";
export default {
  data() {
    return {
      labelPosition: "right",
      addCustMsg: {
        custNo: "",
        custName: "",
        custDistrict: "",
        custIndustry: "",
        custType: "",
        contact: "",
        sales: "",
        signAddr: "",
        contactAddr: "",
        postCode: "",
        setUpTime: "",
        Legal: "",
        comScale: ""

      },
      custInfoRules: {}
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
  },
  methods: {
    pickSetUpTimeTime(val) {
      this.addCustMsg.setUpTime = val;
    },
    handleSave(addCustForm) {
      this.$refs[addCustForm].validate(valid => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.content-wrapper .add-wrapper .el-select .el-input__inner {
  width: 150px;
}
</style>