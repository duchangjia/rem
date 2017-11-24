<template>
    <div class="query_wrapper">
        <current yiji="资产管理" erji="资产使用管理"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">资产使用管理</span>
                <div class="titleBtn_wrapper">
                  <el-button  @click="add" class="btn-primary">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner clearfix">
                <el-form :inline="true">
                    <el-col :span="6">
                        <el-form-item label="资产名称">
                            <el-input class="search_common" v-model="searchInfo.assetName" placeholder="请输入资产名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="资产类型">
                            <el-select class="search_common" v-model="searchInfo.assetType">
                            <el-option label="办公用品" value="01"></el-option>
                            <el-option label="电脑" value="02"></el-option>
                            <el-option label="手机" value="03"></el-option>
                            <el-option label="后勤用品" value="04"></el-option>
                            <el-option label="数码相机" value="05"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="资产编号">
                            <el-input class="search_common" v-model="searchInfo.assetNo" placeholder="请输入资产编号"></el-input>
                        </el-form-item>
                    </el-col>
                        <el-col :span="6">
                        <el-form-item label="工号" >
                            <el-input class="search_common" v-model="searchInfo.applyUserNo" placeholder="请输入工号"></el-input>
                        </el-form-item>
                    </el-col>
                    <div class="queryButton_wrapper">
                        <el-button class="resetform btn-default" @click="resetForm()">重置</el-button>
                        <el-button class="btn-primary" @click="search">查询</el-button>
                    </div>   
                </el-form>
                <el-table stripe :data="assetInfoList" >
                    <el-table-column align="center" prop="applyNo" label="使用编号" >
                        <template scope="scope">
                            <span @click="handleAssetInfoDetail(scope.$index, scope.row)" class="linkSpan cur-pointer">{{ scope.row.applyNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="assetNo" label="资产编号" >
                    </el-table-column>
                    <el-table-column align="center" prop="assetType" label="资产类型" :formatter="assetTypeFormatter">
                    </el-table-column>
                    <el-table-column align="center" prop="assetName" label="资产名称" >
                    </el-table-column>
                    <el-table-column align="center" prop="applyNum" label="数量">
                    </el-table-column>
                    <el-table-column align="center" prop="applyType" label="使用类型" :formatter="applyTypeFormatter" >
                    </el-table-column>
                    <el-table-column align="center" prop="organName" label="公司名称" >
                    </el-table-column>
                    <el-table-column align="center" prop="derpName" label="申请部门" >
                    </el-table-column>
                    <el-table-column align="center" prop="applyUserNo" label="工号" >
                    </el-table-column>
                    <el-table-column align="center" prop="custName" label="姓名">
                    </el-table-column>
                    <el-table-column align="center" prop="applyTime" label="发生时间">
                    </el-table-column>
                    <el-table-column align="center"  label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit" @click="edit(scope.row)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="el-icon-delete2" @click="del(scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size="pagination.pageSize"
                    :total="pagination.total"
                    layout="total,prev, pager, next, jumper"
                    v-show="pagination.total>pagination.pageSize">
                </el-pagination>     
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../../common/current_position.vue";
import messageBox from "../../../common/messageBox-components.vue";
import moment from "moment";
import api from '../../../../common/api/api.js'
let {assetUseQueryAssUseList,delAssUse} = api
export default {
  data() {
    return {
      searchInfo: {
        assetName: "",
        assetType: "",
        assetNo: "",
        applyUserNo: ""
      },
      assetInfoList: [],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  created() {
    let self = this;
    if (self.$route.params) {
      self.searchInfo.assetNo = self.$route.params.assetNo;
    }
    self.search();
  },
  methods: {
    handleCurrentChange(val) {
      this.pagination.pageNum = val;
      this.search();
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
    applyTypeFormatter(row, column) {
      return row.applyType == "01"
        ? "发放领用"
        : row.applyType == "02"
          ? "归还"
          : row.applyType == "03"
            ? "出借"
            : row.applyType == "04"
              ? "出售"
              : row.applyType == "05" ? "盘余" : applyType == "06" ? "盘亏" : "异常";
    },
    search() {
      let self = this;
      let params = {};
      params.assetName = self.searchInfo.assetName;
      params.assetType = self.searchInfo.assetType;
      params.assetNo = self.searchInfo.assetNo;
      params.applyUserNo = self.searchInfo.applyUserNo;
      params.pageNum = self.pagination.pageNum;
      params.pageSize = self.pagination.pageSize;
      
      self.$axios
        .get(assetUseQueryAssUseList, { params: params })
        .then(res => {
          self.assetInfoList = res.data.data.list;
          self.pagination.pageNum = res.data.data.pageNum;
           self.pagination.total = res.data.data.total;
          console.log(res.data.data, "列表数据");
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm() {
      let self = this;
      self.searchInfo = {};
    },
    handleAssetInfoDetail(index, row) {
      this.$router.push({
        name: "detail_assetUse",
        query: { applyNo: row.applyNo }
      });
    },
    edit(row) {
      console.log(row.applyNo);
      this.$router.push({
        name: "edit_assetUse",
        query: { applyNo: row.applyNo }
      });
    },
    del(row) {
      let self = this;
      self
        .$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          self.$axios
            .get(delAssUse + row.applyNo)
            .then(res => {
              let result = res.data.retMsg;
              if ("操作成功" === result) {
                self.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.search();
              } else {
                self.$message({
                  message: result,
                  type: "error"
                });
              }
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(() => {
          self.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      this.$router.push("add_assetUse");
    }
  },
  filters: {
    formatDate1(time) {
      return moment(time).format("YYYY-MM-DD");
    },
    formatDate(time) {
      return moment(time).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  components: {
    current,
    messageBox
  }
};
</script>

