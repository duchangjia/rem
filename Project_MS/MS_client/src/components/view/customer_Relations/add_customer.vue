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
          <!-- <el-col :sm="24" :md="12">
            <el-form-item label="客户编号">
              <el-input type="text" v-model="addCustMsg.coocustNo"></el-input>
            </el-form-item>
          </el-col> -->
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称" prop="custName">
              <el-input type="text" v-model="addCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-select v-model="addCustMsg.custInd">
                <el-option v-for="item in custIndustryList" :label="item.custIndustryMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别" prop="custType">
              <el-select v-model="addCustMsg.custType">
                <el-option label="客户" value="1"></el-option>
                <el-option label="供应商" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别" prop="custLevel">
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
              <el-input type="text" v-model="addCustMsg.custCity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="addCustMsg.regstAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址">
              <el-input type="text" v-model="addCustMsg.contAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="addCustMsg.contPstCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="addCustMsg.regstDate"  value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表">
              <el-input type="text" v-model="addCustMsg.Legal"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-select v-model="addCustMsg .custScale">
                <el-option label="100人以下" value="1"></el-option>
                <el-option label="100人以上" value="2"></el-option>
                <el-option label="500人以上" value="3"></el-option>
                <el-option label="1000人以上" value="4"></el-option>
                <el-option label="5000人以上" value="5"></el-option>
                <el-option label="10000人以上" value="6"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
import current from "../../common/current_position.vue";
import Vue from "vue";
const basicUrl="crmCoopcustInfo";
export default {
  data() {
    return {
      labelPosition: "right",
      addCustMsg: {
        coocustNo: "",
        custName: "",
        custInd: "",
        custType: "",
        custLevel: "",
        custCity: "",
        regstAddr: "",
        contAddr: "",
        contPstCode: "",
        regstDate: "",
        Legal: "",
        custScale: ""
      },
      custInfoRules: {
        custName: [
          { required: true, message: '请输入客户名称', trigger: 'blur' }
        ],
        custType: [
          { required: true, message: '请输入客户类型', trigger: 'blur' }
        ],
        custLevel: [
          { required: true, message: '请输入客户级别', trigger: 'blur' }
        ]
      },
      //客户行业列表
        custIndustryList:[
          {visitorID:"",custIndustryMsg:"全部"},
          {visitorID:"A",custIndustryMsg:"农、林、牧、渔业"},
          {visitorID:"B",custIndustryMsg:"采掘业"},
          {visitorID:"C",custIndustryMsg:"制造业"},
          {visitorID:"D",custIndustryMsg:"电力、煤气、热水的生产和供应业"},
          {visitorID:"E",custIndustryMsg:"建筑业"},
          {visitorID:"F",custIndustryMsg:"批发和零售业"},
          {visitorID:"N",custIndustryMsg:"地质勘查业、水利管理业"},
          {visitorID:"G",custIndustryMsg:"交通运输、仓储和邮电通信业"},
          {visitorID:"H",custIndustryMsg:"住宿和餐饮业"},
          {visitorID:"I",custIndustryMsg:"信息传输、软件和信息技术服务业"},
          {visitorID:"J",custIndustryMsg:"金融、保险业"},
          {visitorID:"K",custIndustryMsg:"房地产业"},
          {visitorID:"M",custIndustryMsg:"科学研究和综合技术服务业"},
          {visitorID:"P",custIndustryMsg:"教育"},
        ],
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
      this.addCustMsg.regstDate = val;
    },
    handleSave(addCustForm) {
      const vm = this
      this.$refs[addCustForm].validate(valid => {
        if (valid) {
          delete vm.addCustMsg.createdDate;
          delete vm.addCustMsg.updatedDate;
          vm.$axios.post(basicUrl+"/crmCoopcustInfo/addCocustInfo",vm.addCustMsg )
            .then(res => {
              this.$message('添加成功');
            })
            .catch(err =>{
            })
        } else {
          return;
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
form>div{
    min-height:63px;
}
</style>