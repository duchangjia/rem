<template>
    <div class="container-wrap">
        <current yiji="系统管理" erji="角色管理">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">角色管理</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增角色</el-button>
            </el-col>
            <el-table stripe :data="roleListInfo" border>
                <el-table-column align="center" prop="roleNo" label="角色ID">
                </el-table-column>
                <el-table-column align="center" prop="roleName" label="角色名称">
                </el-table-column>
                <el-table-column align="center" prop="status" label="状态" :formatter="statusFormatter">
                </el-table-column>
                <el-table-column align="center" prop="roleDescr" label="描述">
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                    <template scope="scope">
                        <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
                        <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalRows">
            </el-pagination>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      totalRows: 1,
      roleListInfo: []
    };
  },
  components: {
    current
  },
  created() {
    this.getRoleList(); //初始查询角色列表
  },
  methods: {
    getRoleList() {
      const self = this;
      let params = {
        pageNum: self.pageNum,
        pageSize: self.pageSize
      };
      self.$axios
        .get("/iem_hrm/role/queryRoleList", { params: params })
        .then((res) => {
          console.log('roleList',res);
          self.roleListInfo = res.data.data.models;
          self.totalRows = res.data.data.total;
        })
        .catch(() => {
          console.log("error");
        });
    },
    statusFormatter(row, column) {
      return row.status == "1" ? "有效" : row.status == "0" ? "无效" : "";
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getRoleList(); //分页查询角色列表
    },
    handleAdd() {
      this.$router.push("/add_role");
    },
    handleEdit(index, row) {
      sessionStorage.setItem("roleMgmt_roleNo", row.roleNo); // 暂存当前roleNo
      this.$router.push("/edit_role");
    },
    handleDelete(index, row) {
      this.$confirm("此操作将会删除该条角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete( "/iem_hrm/role/deleteRoleInfo?roleNo=" + row.roleNo )
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000") {
                this.$message({ type: "success", message: "操作成功!" })
                this.getRoleList();
              }
              else this.$message.error(res.data.retMsg);
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消操作！");
        });
    }
  }
};
</script>


<style>
</style>
