<template>
    <div class="query_asset">
        <current yiji="资产管理" erji="资产登记管理" sanji="资产信息查询">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">资产信息查询</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增</el-button>
            </el-col>

            <el-col :span="24" class="querybar" style="padding:20px 0 0 0;">
                <el-form :inline="true" :model="filters">
                    <el-col :span="8">
                      <el-form-item label="资产编号">
                        <el-input v-model="filters.assetNo" placeholder="请输入"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="资产类型">
                        <el-select v-model="filters.assetType">
                            <el-option label="全部" value="01"></el-option>
                            <el-option label="办公用品" value="02"></el-option>
                            <el-option label="电脑" value="03"></el-option>
                            <el-option label="手机" value="04"></el-option>
                            <el-option label="后勤用品" value="05"></el-option>
                            <el-option label="数码相机" value="06"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="资产名称">
                        <el-input v-model="filters.assetName" placeholder="请输入"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="资产状态">
                        <el-select v-model="filters.assetStatus">
                            <el-option label="全部" value="01"></el-option>
                            <el-option label="已领用" value="02"></el-option>
                            <el-option label="已核销" value="03"></el-option>
                            <el-option label="在库" value="04"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="24" class="button-wrap">
                      <el-button class="resetBtn" @click="handleReset">重置</el-button>
						          <el-button class="queryBtn" @click="handleQuery">查询</el-button>
                    </el-col>
                </el-form> 
            </el-col>

            <el-table stripe :data="assetInfoList" border>
                <el-table-column align="center" label="资产编号">
                    <template scope="scope">
                        <span @click="handleAssetInfoDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.assetNo }}</span>
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
                <el-table-column align="center" prop="organNo" label="公司名称" :formatter="organFormatter">
                </el-table-column>
                <el-table-column align="center" prop="derpNo" label="申请部门" :formatter="derpFormatter">
                </el-table-column>
                <el-table-column align="center" prop="applyUserNo" label="申请人">
                </el-table-column>
                <el-table-column align="center" prop="updateDate" label="登记时间">
                </el-table-column>
                <el-table-column align="center" label="操作" width="170">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button size="small" @click="handleAssetUse(scope.$index, scope.row)">使用管理</el-button>                        
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
            </el-pagination>
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
        assetStatus: ""
      },
      rules: {
        assetNo: [],
        assetType: [],
        assetName: [],
        assetStatus: []
      },
      pageNum: 1,
      pageSize: 7,
      totalRows: 30,
      assetInfoList: []
    };
  },
  components: {
    current
  },
  created() {
    this.filters.assetNo = "";
    this.filters.assetType = "";
    this.filters.assetName = "";
    this.filters.assetStatus = "";
    this.getAssetInfoList(); //初始查询资产信息列表
  },
  methods: {
    getAssetInfoList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        assetNo: self.filters.assetNo,
        assetType: self.filters.assetType,
        assetName: self.filters.assetName,
        assetStatus: self.filters.assetStatus
      };
      self.$axios
        // .get("/iem_hrm/EpAssetInf/queryEpAssetInfs", { params: params })
        .get("/iem_hrm/queryEpAssetInfs", { params: params })
        .then(res => {
          console.log(res);
          self.assetInfoList = res.data.data.list;
        })
        .catch(() => {
          console.log("error");
        });
    },
    assetTypeFormatter(row, column) {
      return row.assetType == "01"
        ? "全部"
        : row.assetType == "02"
          ? "办公用品"
          : row.assetType == "03"
            ? "电脑"
            : row.assetType == "04" ? "后勤用品" : "异常";
    },
    organFormatter(row, column) {
      return row.organNo == "001"
        ? "总公司"
        : row.organNo == "002" ? "深圳分公司" : "异常";
    },
    derpFormatter(row, column) {
      return row.derpNo == "001" ? "技术部" : row.derpNo == "002" ? "财务部" : "异常";
    },
    handleAssetInfoDetail(index, row) {
      this.$router.push({
        name: "detail_asset",
        params: {
          assetNo: row.assetNo
        }
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getAssetInfoList(); //分页查询资产信息列表
    },
    handleReset() {
      this.filters.assetNo = "";
      this.filters.assetType = "";
      this.filters.assetName = "";
      this.filters.assetStatus = "";
    },
    handleQuery() {
      this.getAssetInfoList(); //根据条件查询资产信息列表
    },
    handleAdd() {
      this.$router.push({
        name: "add_asset",
        params: {}
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        name: "edit_asset",
        params: {
          assetNo: row.assetNo
        }
      });
    },
    handleAssetUse(index, row) {}
  }
};
</script>


<style>
.query_asset {
  padding: 0 0 20px 20px;
}
</style>
