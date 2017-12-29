<template>
    <div class="container-wrap" id="pactMgmt">
        <current yiji="参数管理" erji="系统参数">
        </current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
              <span class="title-text">系统参数</span>
                <div class="titleBtn_wrapper">
                  <el-button type="primary" class="btn-primary" @click="addParam">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
              <el-form :inline="true" :model="filters" class="demo-ruleForm">
                <el-col :span="6">
                    <el-form-item label="参数代码">
                      <el-input v-model="filters.paraCode" placeholder="请输入参数代码"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="参数名称">
						        <el-input v-model="filters.paraName" placeholder="参数名称"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="参数状态">
                    <el-select v-model="filters.status" >
                        <el-option label="启用" value="1"></el-option>
                        <el-option label="关闭" value="0"></el-option>
                    </el-select> 
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <div class="queryButton_wrapper">
                    <el-button @click="handleReset" class="btn-default">重置</el-button>
                    <el-button @click="getParamList" class="btn-primary">查询</el-button>
                  </div>
                </el-col>
			        </el-form>
              <el-table stripe :data="paramList" border>
                <el-table-column align="center"  prop="paraCode" label="参数代码">
                    <!-- <template scope="scope">
                        <span @click="handleParamDetail(scope.$index, scope.row)" class="linkSpan">{{ scope.row.pactNo }}</span>
                    </template> -->
                </el-table-column>
                <el-table-column align="center" prop="paraName" label="参数名称">
                </el-table-column>
                <el-table-column align="center" prop="paraValue" label="参数值">
                </el-table-column>
                <el-table-column align="center" prop="paraShowMsg" label="显示信息">
                </el-table-column>
                <el-table-column align="center" prop="paraClass" label="参数类型" :formatter="paraClassFormatter">
                </el-table-column>
                <el-table-column align="center" prop="status" label="参数状态" :formatter="paraStatusFormatter">
                </el-table-column>
                <el-table-column align="center" prop="paraDesc" label="参数描述">
                </el-table-column>
                <el-table-column align="center" label="操作" width="120">
					        <template scope="scope">
                      <i class="el-icon-edit" @click="handleEdit(scope.$index,scope.row)"></i>
                      <!-- <i class="el-icon-delete2" @click="handleDel(scope.$index,scope.row)"></i> -->
                  </template>
                </el-table-column>
            </el-table>
            <el-pagination
              class="toolbar" 
              @current-change="handleCurrentChange" 
              :current-page="pageNum" 
              :page-size="pageSize" 
              layout="total, prev, pager, next, jumper" 
              :total="totalRows">
            </el-pagination>

            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      filters: {
        paraCode: "",
        status: "",
        paraName: ""
      },
      pageNum: 1,
      pageSize: 10,
      totalRows: 0,
      paramList: [],
      pactListInfo: []
    };
  },
  components: {
    current
  },
  mounted() {
    let self = this;
    self.filters.paraCode = '';
    self.filters.paraName = '';
    self.filters.status = '';
    self.getParamList(); //初始化查询参数列表
  },
  methods: {
    getParamList() {
      let self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize,
        paraCode: self.filters.paraCode,
        paraName: self.filters.paraName,
        status: self.filters.status
      };
      self.$axios
        .get("/iem_hrm/sysParamMgmt/querySysParMgmtList", { params: params })
        .then(res => {
          console.log('paramList',res);
          //   self.pageNum = res.data.data.pageNum;此处不能要，不然会无限查询
          self.pageSize = res.data.data.pageSize;
          self.totalRows = res.data.data.total;
          self.paramList = res.data.data.list;
          return;
        })
        .catch(() => {
          console.log("error");
        });
    },
    paraClassFormatter(row, column) {
      return row.paraClass == "1" ? "系统参数" : row.paraClass == "2" ? "业务参数" : "";
    },
    paraStatusFormatter(row, column) {
      return row.status == "1" ? "启用" : row.status == "0" ? "关闭" : "";
    },
    // dateFormat(row, column) {},

    handleCurrentChange(val) {
      this.pageNum = val;
      this.getParamList(); //分页查询参数列表
    },
    handleReset() {
      this.filters.paraCode = '';
      this.filters.paraName = '';
      this.filters.status = '';
    },
    addParam() {
      this.$router.push("add_sysParam");
    },
    handleEdit(index, row) {
      console.log(row);
      sessionStorage.setItem("paramInfo_paraValue", row.paraValue); // 暂存当前paraValue
      // sessionStorage.setItem("paramInfo_paraName", row.paraName); // 暂存当前paraValue
      sessionStorage.setItem("paramInfo_paraCode", row.paraCode); // 暂存当前paraCode
      sessionStorage.setItem("paramInfo_paraLang", row.paraLang); // 暂存当前paraLang
      this.$router.push("/edit_sysParam");
    }
  }
};
</script>

<style>

</style>
