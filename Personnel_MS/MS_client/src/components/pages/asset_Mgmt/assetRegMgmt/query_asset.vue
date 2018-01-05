<template>
    <div class="container-wrap">
        <current yiji="资产管理" erji="资产登记管理">
        </current>
        <div class="queryContent_wrapper">
            <!-- <el-col :span="24" class="titlebar">
                <span class="title-text">资产信息查询</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增</el-button>
            </el-col> -->
            <div class="titleBar">
                <span class="title-text">资产信息查询</span>
                <div class="titleBtn_wrapper">
                    <el-button class="btn-primary" @click="handleAdd">新增</el-button>
                </div>
            </div>

            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :span="6">
                  <el-form-item label="资产编号">
                        <el-input v-model="filters.assetNo" placeholder="请输入资产编号"></el-input>
                      </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="资产类型">
                        <el-select v-model="filters.assetType">
                            <el-option label="全部" value=""></el-option>
                            <el-option label="办公用品" value="01"></el-option>
                            <el-option label="电脑" value="02"></el-option>
                            <el-option label="手机" value="03"></el-option>
                            <el-option label="后勤用品" value="04"></el-option>
                            <el-option label="数码相机" value="05"></el-option>
                        </el-select>
                      </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="资产名称">
                        <el-input v-model="filters.assetName" placeholder="请输入资产名称"></el-input>
                      </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="资产状态">
                        <el-select v-model="filters.status">
                            <el-option label="全部" value=""></el-option>
                            <el-option label="有效" value="1"></el-option>
                            <el-option label="无效" value="0"></el-option>
                        </el-select>
                      </el-form-item>
                </el-col>
                <div class="queryButton_wrapper">
                  <el-button class="btn-default" @click="handleReset">重置</el-button>
                  <el-button class="btn-primary" @click="handleQuery">查询</el-button>
                </div>
              </el-form>
              <el-table stripe :data="assetInfoList" border>
                <el-table-column align="center" label="资产编号">
                    <template scope="scope">
                        <span @click="handleAssetInfoDetail(scope.$index, scope.row)" class="link">{{ scope.row.assetNo }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="assetType" label="资产类型" :formatter="assetTypeFormatter">
                </el-table-column>
                <el-table-column align="center" prop="assetName" label="资产名称">
                </el-table-column>
                <el-table-column align="center" prop="buyUnitPrice" label="购买单价">
                </el-table-column>
                <el-table-column align="center" prop="buyNum" label="购买数量">
                </el-table-column>
                <el-table-column align="center" prop="buyAmount" label="购买金额">
                </el-table-column>
                <el-table-column align="center" prop="stockNum" label="当前库存">
                </el-table-column>
                <el-table-column align="center" prop="organName" label="公司名称">
                </el-table-column>
                <el-table-column align="center" prop="derpName" label="申请部门">
                </el-table-column>
                <el-table-column align="center" prop="applyUserNo" label="申请人">
                </el-table-column>
                <el-table-column align="center" prop="createdDate" label="登记时间">
                </el-table-column>
                <el-table-column align="center" label="操作" width="170">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="handleAssetUse(scope.$index, scope.row)">使用管理</el-button>                        
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
            </el-pagination>

            </div>
            
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
export default {
  data() {
    let that = this;
    return {
      filters: {
        assetNo: "",
        assetType: "",
        assetName: "",
        status: ""
      },
      rules: {
        assetNo: [],
        assetType: [],
        assetName: [],
        status: []
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      assetInfoList: [],
      assetTypeList: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.assetNo = "";
    this.filters.assetType = "";
    this.filters.assetName = "";
    this.filters.status = "";
    this.getAssetInfoList(); //初始查询资产信息列表
    this.getAssetTypeList(); //查询资产类型
  },
  methods: {
    getAssetTypeList() {
      let self = this;
      self.$axios
        .get("/iem_hrm/sysParamMgmt/queryPubAppParams?paraCode=ASSET_TYPE")
        .then(res => {
          if (res.data.code === "S00000") {
            self.assetTypeList = res.data.data;
            console.log("assetTypeList",self.assetTypeList);
          }
        })
        .catch(err => {
          console.log("error");
        });
    },
    getAssetInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        assetNo: self.filters.assetNo,
        assetType: self.filters.assetType,
        assetName: self.filters.assetName,
        status: self.filters.status
      };
      self.$axios
        .get("/iem_hrm/EpAssetInf/queryEpAssetInfList", { params: params })
        .then(res => {
          console.log(res);
          self.assetInfoList = res.data.data.list;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    assetTypeFormatter(row, column) {
      let assetType = "";
      this.assetTypeList.forEach(function(item) {
        if (row.assetType == item.paraValue) {
          assetType = item.paraShowMsg;
        }
      }, this);
      return assetType;
    },
    
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getAssetInfoList(); //分页查询资产信息列表
    },
    handleReset() {
      this.filters.assetNo = "";
      this.filters.assetType = "";
      this.filters.assetName = "";
      this.filters.status = "";
    },
    handleQuery() {
      this.getAssetInfoList(); //根据条件查询资产信息列表
    },
    handleAdd() {
      this.$router.push("/add_asset");
    },
    handleAssetInfoDetail(index, row) {
      sessionStorage.setItem('assetInfo_assetNo', row.assetNo); // 暫存assetNo
      sessionStorage.setItem('assetInfo_applyUserNo', row.applyUserNo); // 暫存applyUserNo
      this.$router.push("/detail_asset");
    },
    handleEdit(index, row) {
      sessionStorage.setItem('assetInfo_assetNo', row.assetNo); // 暫存assetNo
      sessionStorage.setItem('assetInfo_applyUserNo', row.applyUserNo); // 暫存applyUserNo
      this.$router.push("/edit_asset");
    },
    handleAssetUse(index, row) {
      sessionStorage.setItem('assetInfo_assetNo', row.assetNo); // 暫存assetNo
      this.$router.push({
        name: "query_assetUse",
        params: {
          assetNo: row.assetNo
        }
      });
    }
  }
};
</script>


<style>

</style>
