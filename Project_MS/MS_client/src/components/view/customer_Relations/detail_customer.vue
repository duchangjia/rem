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
              <el-input type="text" v-model="detailCustMsg.coocustNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="客户名称">
              <el-input type="text" v-model="detailCustMsg.custName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="行业">
              <el-select v-model="detailCustMsg.custInd">
                <el-option v-for="item in custIndustryList" :label="item.custIndustryMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="类别">
              <el-select v-model="detailCustMsg.custType">
                <el-option v-for="item in custTypeList" :label="item.custTypeMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="级别">
              <el-select v-model="detailCustMsg.custLevel">
                <el-option v-for="item in custLevelList" :label="item.custLevelMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="所属地区">
              <el-input type="text" v-model="detailCustMsg.custCity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="注册地址">
              <el-input type="text" v-model="detailCustMsg.regstAddr" class="w_full"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="通讯地址"><!-- 字段缺失 -->
              <el-input type="text" v-model="detailCustMsg.contactAddr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="邮编">
              <el-input type="text" v-model="detailCustMsg.contPstCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="成立时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="detailCustMsg.regstDate" @change="pickSetUpTimeTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="法人代表"><!-- 字段缺失 -->
              <el-input type="text" v-model="detailCustMsg.custScale"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-form-item label="企业规模">
              <el-input type="text" v-model="detailCustMsg.custScale"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      
      <div class="add-wrapper">
        <el-col :span="24" class="subtitlebar"><span class="title-text">客户联系人</span>
        </el-col>
        <el-table stripe :data="custContactList" border>
          <el-table-column align="center" prop="attnName" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="attnDept" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="attnDuty" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="attnOfftel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="attnMail" label="邮箱">
          </el-table-column>
          <el-table-column align="center" prop="attnMob" label="手机号码">
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
          <el-table-column align="center" prop="salesName" label="姓名">
          </el-table-column>
          <el-table-column align="center" prop="salesDept" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="salesDuty" label="职务">
          </el-table-column>
          <el-table-column align="center" prop="salesOfftel" label="办公电话">
          </el-table-column>
          <el-table-column align="center" prop="salesMob" label="手机号码">
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
        pageSize: 5,
        totalRows: 1
      },
      salesInfoPage: {
        pageNum: 1,
        pageSize: 5,
        totalRows: 1
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
      //客户类别
      custTypeList:[
        {visitorID:"",custTypeMsg:"全部"},
        {visitorID:"1",custTypeMsg:"客户"},
        {visitorID:"2",custTypeMsg:"供应商"},
      ],
      //客户级别
      custLevelList:[
        {visitorID:"",custLevelMsg:"全部"},
        {visitorID:"01",custLevelMsg:"重点客户"},
        {visitorID:"02",custLevelMsg:"普通客户"},
        {visitorID:"02",custLevelMsg:"低价值客户"},
        {visitorID:"02",custLevelMsg:"黑名单客户"},
      ],
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    this.getCustomerDetail();
    this.getSalesInfoList();
    this.getCustContactList();
  },
  methods: {
    // 客户详情
    getCustomerDetail() {
        const self = this;
        let params = {
          coocustNo: self.$route.query.coocustNo
        };
        self.$axios
          .get(basicUrl+"/crmCoopcustInfo/queryCocustDetail", { params: params })
          .then(res => {
            res=res.data;
            if(res.retMsg=="操作成功"){
              self.detailCustMsg=res.data;
              //self.detailCustMsg.
            }
          })
          .catch(() => {
            console.log("error");
        });
    },
    //客户联系人
    getCustContactList() {
      const self=this;
      let params = {
        coocustNo: self.$route.query.coocustNo,
        pageNum:self.custContactPage.pageNum,
        pageSize:self.custContactPage.pageSize,
      };
      self.$axios
        .get(basicUrl+"/crmCustAttn/queryCocustLinkman", { params: params })
        .then(res => {
          res=res.data;
          if(res.retMsg=="操作成功"){
            self.custContactList=res.data.list;
            self.custContactPage.totalRows=res.data.total
            //self.detailCustMsg.
          }
        })
        .catch(() => {
          console.log("error");
      });
    },
    getSalesInfoList() {
      const self=this;
      let params = {
        coocustNo: self.$route.query.coocustNo,
        pageNum:self.salesInfoPage.pageNum,
        pageSize:self.salesInfoPage.pageSize,
      };
      self.$axios
        .get(basicUrl+"/crmSalesAttn/queryCocustSales", { params: params })
        .then(res => {
          res=res.data;
          if(res.retMsg=="操作成功"){
            self.salesInfoList=res.data.list;
            self.salesInfoPage.totalRows=res.data.total
            //self.detailCustMsg.
          }
        })
        .catch(() => {
          console.log("error");
      });
    }, // 公司销售信息列表
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