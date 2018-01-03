<template>
  <div class="container-wrap">
    <current yiji="客户关系" erji="客户一览">
    </current>
    <div class="queryContent_wrapper">
      <div class="titleBar">
        <span class="title-text">客户一览</span>
        <div class="titleBtn_wrapper">
          <el-button type="primary" class="btn-primary" @click="handleAdd">新增客户</el-button>
        </div>
      </div>
      <div class="queryContent_inner">
        <el-form :inline="true" :model="filters" ref="filters" class="demo-ruleForm">
          <el-col :span="6">
            <el-form-item label="客户名称" prop="custName">
              <el-input v-model="filters.custName" placeholder="请输入客户名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户行业" prop="custIndustry">
              <el-select v-model="filters.custIndustry">
                <el-option v-for="item in custIndustryList" :label="item.custIndustryMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户类别" prop="custType">
              <el-select v-model="filters.custType">
                <el-option v-for="item in custTypeList" :label="item.custTypeMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户级别" prop="custLevel">
              <el-select v-model="filters.custLevel">
                <el-option v-for="item in custLevelList" :label="item.custLevelMsg" :value="item.visitorID"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <div class="queryButton_wrapper">
            <el-button class="btn-default" @click="handleReset('filters')">重置</el-button>
            <el-button class="btn-primary" @click="handleQuery">查询</el-button>
          </div>
        </el-form>
        <el-table stripe :data="custInfoList" border>
          <el-table-column align="center" prop="coocustNo" label="客户编码">
          </el-table-column>
          <el-table-column align="center" prop="custName" label="客户名称">
          </el-table-column>
          <el-table-column align="center" prop="custCity" label="地区">
          </el-table-column>
          <el-table-column align="center" prop="custInd" :formatter="custIndFormatter" label="行业">
          </el-table-column>
          <el-table-column align="center" prop="custType":formatter="custTypeFormatter" label="类别">
          </el-table-column>
          <el-table-column align="center" label="客户联系人">
            <template scope="scope">
              <p>{{scope.row.attnName}}<br>{{scope.row.attnMobile}}</p>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="salesName" label="销售">
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template scope="scope">
              <el-button type="text" size="small" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button type="text" size="small" @click="handleBilllingTemp(scope.$index, scope.row)">账单模板维护</el-button>
              <el-button type="text" size="small" @click="handleCustUnitPrice(scope.$index, scope.row)">客户单价维护</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper"
          :total="totalRows">
        </el-pagination>
      </div>

    </div>


  </div>
</template>

<script>
  import current from "../../common/current_position.vue";
  const basicUrl="crmCoopcustInfo";
  export default {
    data() {
      let that = this;
      return {
        filters: {
          custName: "",
          custIndustry: "",
          custType: "",
          custLevel: ""
        },
        pageNum: 1,//当前页
        pageSize: 10,//显示几条数据
        totalRows: 1,//所有数据条数
        custInfoList: [],
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
          {visitorID:"01",custTypeMsg:"客户"},
          {visitorID:"02",custTypeMsg:"供应商"},
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
      this.filters.custName = "";
      this.filters.custIndustry = "";
      this.filters.custType = "";
      this.filters.custLevel = "";
      this.getcustInfoList(); //初始查询客户信息列表
    },
    methods: {
      getcustInfoList() {
        const self = this;
        let params = {
          pageNum: self.pageNum,
          pageSize: self.pageSize,
          custName: self.filters.custName,
          custInd: self.filters.custIndustry,
          custType: self.filters.custType,
          custLevel: self.filters.custLevel
        };

        self.$axios
          .get(basicUrl+"/queryCocustList", { params: params })
          .then(res => {
            res=res.data;
            if(res.retMsg=="操作成功"){
              //console.log(res.data)
              self.custInfoList=res.data.list;
              self.totalRows=res.data.total;
            }
          })
          .catch(() => {
            console.log("error");
        });
      },
      //判断表格行业
      custIndFormatter(row, column){
        return row.custInd=='A'? "农、林、牧、渔业" :
               row.custInd=='B' ? '审批失败' :
               row.custInd=='C' ? '采掘业' :
               row.custInd=='D' ? '制造业' :
               row.custInd=='E' ? '电力、煤气、热水的生产和供应业' :
               row.custInd=='F' ? '建筑业' :
               row.custInd=='N' ? '批发和零售业' :
               row.custInd=='G' ? '地质勘查业、水利管理业' :
               row.custInd=='H' ? '交通运输、仓储和邮电通信业' :
               row.custInd=='I' ? '信息传输、软件和信息技术服务业' :
               row.custInd=='J' ? '金融、保险业' : null;
      },
      //判断表格类别
      custTypeFormatter(row,column){
        return row.custType=='1'? "客户" :
               row.custType=='2' ? '供应商' :null;
      },
      //
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getcustInfoList(); //分页查询
      },
      handleReset(formName) {
        this.$refs[formName].resetFields();
      },
      handleQuery() {
        this.getcustInfoList(); //根据条件查询资产信息列表
      },
      handleAdd() {
        this.$router.push({
          name: "add_customer",
          params: {}
        });
      },
      handleDetail(index, row) {
        //console.log(index, row)
        //console.log()
        this.$router.push({
          name: "detail_customer",
          params: {coocustNo:row.coocustNo}
        });
      },
      handleEdit(index, row) {
        this.$router.push({
          name: "edit_customer",
          params: {}
        });
      },
      handleBilllingTemp(index, row) {
        this.$router.push({
          name: "billlingTemp_maintain",
          params: {}
        });
      },
      handleCustUnitPrice(index, row) {
        this.$router.push({
          name: "custUnitPrice_maintain",
          params: {}
        });
      }
    }
  };
</script>


<style>

</style>