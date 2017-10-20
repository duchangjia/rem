<template>
    <div class="role_mgmt">
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
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" v-show="totalRows>pageSize">
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
      pageSize: 7,
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
        .then(function(res) {
          console.log(res);
          self.roleListInfo = res.data.data.models;
          self.pageNum = Number(res.data.data.pageNum);
          self.totalRows = Number(res.data.data.total);
        })
        .catch(function(err) {
          console.log("error");
        });
    },
    statusFormatter(row, column) {
      return row.status == 1 ? "有效" : row.status == 0 ? "无效" : "异常";
    },
    handleCurrentChange(val) {
      const self = this;
      self.pageNum = val;
      self.getRoleList(); //分页查询角色列表
    },
    handleAdd() {
      this.$router.push("/add_role");
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/edit_role",
        name: "edit_role",
        params: {
          roleNo: row.roleNo,
          status: row.status
        }
      });
    },
    handleDelete(index, row) {
      let targetRole = {};
      targetRole.roleNo = row.roleNo;
      console.log(targetRole);
      this.$confirm("此操作将会删除该条角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete(
              "/iem_hrm/role/deleteRoleInfo?roleNo=" + row.roleNo,
              targetRole
            )
            .then(res => {
              console.log(res);
              if (res.data.code == "S00000")
                this.$message({ type: "success", message: "删除成功!" });
              else this.$message.error("删除角色失败！");
            })
            .catch(() => {
              this.$message.error("删除角色失败！");
            });
        })
        .catch(() => {
          this.$message("您已取消删除角色！");
        });
    }
  }
};
</script>


<style>
.role_mgmt {
  padding: 0 0 20px 20px;
}

.role_mgmt .content-wrapper {
  background: #ffffff;
  padding: 0 20px 20px;
  color: #333333;
  clear: both;
}

.content-wrapper .titlebar {
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .titlebar .title-text {
  display: inline-block;
  height: 80px;
  position: relative;
}

.content-wrapper .titlebar .title-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #333333;
}

.content-wrapper .titlebar .toolBtn {
  float: right;
  margin-top: 20px;
  border-radius: 0;
  height: 40px;
  /* line-height: 40px; */
  width: 120px;
  background: #ff9900;
  border: none;
}

.content-wrapper .titlebar .el-button {
  padding: 0;
}

.content-wrapper .el-table th {
  background-color: #f4f4f4 !important;
}

.toolbar.el-pagination {
  text-align: right;
  margin-top: 20px;
}

.content-wrapper .el-pager li.active {
  border-color: #ff9900;
  background-color: #ff9900;
  color: #fff;
  cursor: default;
}

.content-wrapper .el-pager li {
  padding: 0 4px;
  border-right: 0;
  background: #fff;
  font-size: 12px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}

.el-pagination button,
.el-pagination span {
  display: inline-block;
  font-size: 12px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  vertical-align: top;
  box-sizing: border-box;
}

.el-pager li:hover {
  color: #ff9900;
}

.el-pager li.active:hover {
  cursor: pointer;
  color: #ffffff;
}

.icon-edit {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/edit.png") center no-repeat;
}

.icon-delete {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/delete.png") center no-repeat;
}

.icon-edit:hover,
.icon-delete:hover {
  cursor: pointer;
}

.el-message-box__btns .el-button {
  border-radius: 2px;
}

.el-message-box__btns .el-button:hover {
  color: #ff9900;
  border-color: #ff9900;
  opacity: 0.5;
}

.el-message-box__btns .el-button--primary,
.el-message-box__btns .el-button--primary:focus,
.el-message-box__btns .el-button--primary:hover {
  background: #ff9900;
  border-color: #ff9900;
  color: #fff;
}

.el-message-box__headerbtn:focus .el-message-box__close,
.el-message-box__headerbtn:hover .el-message-box__close {
  color: #ff9900;
}
</style>
