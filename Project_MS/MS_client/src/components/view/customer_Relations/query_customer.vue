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
                <el-option label="全部" value=""></el-option>
                <el-option label="金融" value="01"></el-option>
                <el-option label="制造" value="02"></el-option>
                <el-option label="医疗" value="03"></el-option>
                <el-option label="航空" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户类别" prop="custType">
              <el-select v-model="filters.custType">
                <el-option label="全部" value=""></el-option>
                <el-option label="普通客户" value="01"></el-option>
                <el-option label="重要客户" value="02"></el-option>
                <el-option label="软件供应商" value="03"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户级别" prop="custLevel">
              <el-select v-model="filters.custLevel">
                <el-option label="全部" value=""></el-option>
                <el-option label="重点客户" value="01"></el-option>
                <el-option label="普通客户" value="02"></el-option>
                <el-option label="低价值客户" value="03"></el-option>
                <el-option label="黑名单客户" value="04"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <div class="queryButton_wrapper">
            <el-button class="btn-default" @click="handleReset('filters')">重置</el-button>
            <el-button class="btn-primary" @click="handleQuery">查询</el-button>
          </div>
        </el-form>
        <el-table stripe :data="custInfoList" border>
          <el-table-column align="center" prop="custNo" label="客户编码">
          </el-table-column>
          <el-table-column align="center" prop="custName" label="客户名称">
          </el-table-column>
          <el-table-column align="center" prop="custDistrict" label="地区">
          </el-table-column>
          <el-table-column align="center" prop="custIndustry" label="行业">
          </el-table-column>
          <el-table-column align="center" prop="custType" label="类别">
          </el-table-column>
          <el-table-column align="center" prop="contact" label="客户联系人">
          </el-table-column>
          <el-table-column align="center" prop="sales" label="销售">
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
        totalRows: 1,//当前页有几条数据
        custInfoList: []
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
          custIndustry: self.filters.custIndustry,
          custType: self.filters.custType,
          custLevel: self.filters.custLevel
        };
        // self.$axios
        //   .get("/iem_hrm/EpAssetInf/queryEpAssetInfList", { params: params })
        //   .then(res => {
        //     console.log(res);
        //     self.custInfoList = res.data.data.list;
        //     self.totalRows = res.data.data.total;
        //   })
        //   .catch(() => {
        //     console.log("error");
        //   });
        self.custInfoList = [{
          custNo: "C000001",
          custName: "中国平安",
          custDistrict: "深圳市福田区农林路69号深国投广场1栋7楼",
          custIndustry: "01",
          custType: "02",
          contact: "张黎东 13300110010",
          sales: "赵琪"
        }];
      },

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
        this.$router.push({
          name: "detail_customer",
          params: {}
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