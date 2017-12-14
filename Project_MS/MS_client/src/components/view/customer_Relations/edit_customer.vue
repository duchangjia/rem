<template>
  <div class="container-wrap">
    <current yiji="客户关系" erji="客户一览" sanji="客户详细编辑">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">客户详细编辑</span>
        <el-button type="primary" @click="handleSave('editCustForm')" class="toolBtn">保存</el-button>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="editCustMsg" :rules="custInfoRules" ref="addCustForm" :label-position="labelPosition" label-width="80px">
          <el-col :sm="24" :md="12">
            <el-form-item label="客户编号">
              <el-input type="text" v-model="editCustMsg.custNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称">
              <el-input type="text" v-model="editCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-select v-model="editCustMsg.custIndustry">
                <el-option label="金融" value="01"></el-option>
                <el-option label="制造" value="02"></el-option>
                <el-option label="医疗" value="03"></el-option>
                <el-option label="航空" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别">
              <el-select v-model="editCustMsg.custType">
                <el-option label="普通客户" value="01"></el-option>
                <el-option label="重要客户" value="02"></el-option>
                <el-option label="软件供应商" value="03"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别">
              <el-select v-model="editCustMsg.custLevel">
                <el-option label="重点客户" value="01"></el-option>
                <el-option label="普通客户" value="02"></el-option>
                <el-option label="低价值客户" value="03"></el-option>
                <el-option label="黑名单客户" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="所属地区">
              <el-input type="text" v-model="editCustMsg.custDistrict"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="editCustMsg.signAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址">
              <el-input type="text" v-model="editCustMsg.contactAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="editCustMsg.postCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="editCustMsg.setUpTime" @change="pickSetUpTimeTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表">
              <el-input type="text" v-model="editCustMsg.Legal"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-input type="text" v-model="editCustMsg.comScale"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <div class="add-wrapper">
        <el-table stripe :data="custContactList" border>
          <el-table-column align="center" prop="userNo" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="derpName" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="custPost" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="comTel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="email" label="邮箱">
          </el-table-column>
          <el-table-column align="center" prop="phoneTel" label="手机号码">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template scope="scope">
              <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="toolbar" @current-change="handleCustContactPage" :page-size="custContactPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="custContactPage.totalRows">
        </el-pagination>
      </div>
      <div class="add-wrapper">
        <el-table stripe :data="salesInfoList" border>
          <el-table-column align="center" prop="userNo" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="derpName" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="custPost" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="comTel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="phoneTel" label="手机号码">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template scope="scope">
              <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="toolbar" @current-change="handleSalesInfoPage" :page-size="salesInfoPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="salesInfoPage.totalRows">
        </el-pagination>
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
      editCustMsg: {},
      custContactList: [],
      salesInfoList: [],
      custContactPage: {
        pageNum: 1,
        pageSize: 10,
        totalRows: 1
      },
      salesInfoPage: {
        pageNum: 1,
        pageSize: 10,
        totalRows: 1
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
    getCustomerDetail() {}, // 客户详情
    getCustContactList() {}, // 联系人列表
    getSalesInfoList() {}, // 公司销售信息列表
    handleEdit(index, row) {},
    handleCustContactPage(val) {
      this.custContactPage.pageNum = val;
      this.getCustContactList(); //分页查询联系人列表
    },
    handleSalesInfoPage(val) {
      this.salesInfoPage.pageNum = val;
      this.getSalesInfoList(); //分页查询公司销售信息列表
    },
    handleSave(editCustForm) {
      this.$refs[editCustForm].validate(valid => {
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

<style>

</style>