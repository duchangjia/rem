<template>
  <div class="container-wrap">
    <current yiji="客户关系" erji="客户一览" sanji="客户详细信息">
    </current>
    <div class="content-wrapper">
      <div class="titlebar">
        <span class="title-text">客户详细信息</span>
      </div>
      <div class="add-wrapper">
        <el-form :inline="true" :model="detailCustMsg" :label-position="labelPosition" label-width="80px">
          <el-col :sm="24" :md="12">
            <el-form-item label="客户编号">
              <el-input type="text" v-model="detailCustMsg.custNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称">
              <el-input type="text" v-model="detailCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-input type="text" v-model="detailCustMsg.custInd"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别">
              <el-input type="text" v-model="detailCustMsg.custType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别">
              <el-input type="text" v-model="detailCustMsg.custLevel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="所属地区">
              <el-input type="text" v-model="detailCustMsg.custCity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="detailCustMsg.signAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址">
              <el-input type="text" v-model="detailCustMsg.contactAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="detailCustMsg.postCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="detailCustMsg.setUpTime" @change="pickSetUpTimeTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表">
              <el-input type="text" v-model="detailCustMsg.Legal"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-input type="text" v-model="detailCustMsg.comScale"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      
      <div class="add-wrapper">
        <el-col :span="24" class="subtitlebar"><span class="title-text">客户联系人</span>
        </el-col>
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
        </el-table>
        <el-pagination class="toolbar" @current-change="handleCustContactPage" :page-size="custContactPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="custContactPage.totalRows">
        </el-pagination>
      </div>
      
      <div class="add-wrapper">
        <el-col :span="24" class="subtitlebar"><span class="title-text">公司销售信息</span>
        </el-col>
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
        </el-table>
        <el-pagination class="toolbar" @current-change="handleSalesInfoPage" :page-size="salesInfoPage.pageSize" layout="total, prev, pager, next, jumper"
          :total="salesInfoPage.totalRows">
        </el-pagination>
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
      detailCustMsg: {},
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
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    this.getCustomerDetail();
  },
  methods: {
    // 客户详情
    getCustomerDetail() {
        const self = this;
        let params = {
          coocustNo: self.$route.params.coocustNo
        };
        console.log(self.$route.params.coocustNo);
        self.$axios
          .get(basicUrl+"/queryCocustDetail", { params: params })
          .then(res => {
            res=res.data;
            if(res.retMsg=="操作成功"){
              self.detailCustMsg=res.data;
              /*self.custInfoList=res.data.list;
              self.totalRows=res.data.total;*/
            }
          })
          .catch(() => {
            console.log("error");
        });
    },
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
  }
};
</script>

<style>

</style>