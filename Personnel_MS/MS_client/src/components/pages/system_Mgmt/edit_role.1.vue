<template>
    <div class="container-wrap">
        <current yiji="系统管理" erji="角色管理" sanji="编辑角色">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">编辑角色</span>
                <el-button type="primary" @click="handleSave('editRoleForm')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper role-msg">
                <el-col :span="24" class="item-title">角色信息</el-col>
                <el-form :inline="true" :model="editRoleMsg" :rules="editRoleRules" ref="editRoleForm"
                         label-width="80px">
                    <el-col :span="12">
                        <el-form-item label="角色ID">
                            <el-input v-model="editRoleMsg.roleNo" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="名称" prop="roleName">
                            <el-input v-model="editRoleMsg.roleName" auto-complete="off" :maxlength="30"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="状态" prop="status">
                            <el-radio-group v-model="editRoleMsg.status">
                                <el-radio label="1">有效</el-radio>
                                <el-radio label="0">无效</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="描述" prop="roleDescr">
                            <el-input type="textarea" v-model="editRoleMsg.roleDescr" :maxlength="30"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper auth-assign">
                <el-col :span="24" class="item-title">权限分配</el-col>
                <div class="context-menu">
                    <el-col :span="2" class="leftside">
                        <div>关联菜单</div>
                    </el-col>
                    <el-col :span="22" class="rightside">
                        <div class="menu">
                            <el-radio-group v-model="menuRadio" @change="handleRadioMenusChange">
                                <el-radio-button v-for="menu in menus" :key="menu.menuNo" :label="menu.menuNo"
                                                 class="menu-item">{{menu.menuName}}
                                </el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="submenu" v-if="menuRadioFlag">
                            <el-checkbox-button v-model="checkSubAll"
                                                @change="handleSubAllChange(checkSubAll)" label="全部"
                                                class="menu-item"></el-checkbox-button>
                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubsChange">
                                <el-checkbox-button v-for="submenu in submenus" :key='submenu.menuName' :label="submenu.menuName"
                                                    class="menu-item">
                                </el-checkbox-button>
                            </el-checkbox-group>
                        </div>
                    </el-col>
                </div>
                <div class="func-permission" v-if="checkedSubmenusFlag">
                    <el-col :span="2" class="leftside">
                        <div>功能权限</div>
                    </el-col>
                    <el-col :span="22" class="rightside">
                        <el-row :gutter="20">
                            <el-col :span="6" v-for="(funcs, index) in funcsList" :key="index" v-show='funcsList2.indexOf(funcs.menuName)!=-1'>
                                <div class="funcs-content">
                                    <el-checkbox v-model="checkFuncsAll[index]" :indeterminate="isIndeterminate[index]"
                                                 @change="handleFuncsAllChange(checkFuncsAll[index],funcs,index)" class="func-checkall">
                                        {{ funcs.menuName }}
                                    </el-checkbox>
                                    <el-checkbox-group v-model="checkFuncs[index]"
                                                       @change="handleCheckedFuncsChange($event,funcs,index)"
                                                       class="func-item">
                                        <el-checkbox v-for="funcsDtl in funcs.bsns" :key="funcsDtl.bsnNo"
                                                     :label="funcsDtl.bsnNo" v-bind:title="funcsDtl.interfaceName">
                                            {{ funcsDtl.interfaceName }}
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </div>

            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";

export default {
  data() {
    return {
      roleNo: "",
      roleDetail: {},
      editRoleMsg: {
        roleNo: "",
        roleName: "",
        status: "",
        roleDescr: "",
        roleFuncSet: []
      },
      // 控制第一级
      menuRadio: "",
      menus: [],
      // 控制第二级
      menuRadioFlag: false,
      submenus: [],
      checkSubAll: false,
      checkedSubmenus: [],
      // 控制第三级
      checkedSubmenusFlag: false,
      isIndeterminate: {},
      checkFuncsAll: {},
      funcsList: [],
      funcsList2: [],
      checkFuncs: {},

      editRoleRules: {
        roleName: [{ required: true, message: "角色名称不能为空", trigger: "blur" }],
        status: [{ required: true, message: "请选择状态", trigger: "change" }],
        roleDescr: [{ required: true, message: "角色描述不能为空", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.roleNo = sessionStorage.getItem("roleMgmt_roleNo");
    this.queryRoleDetail(); // 查询角色详情
    this.queryParentMenu(); // 查询父级菜单
    for (let i = 0; i < 10; i++) {
      this.$set(this.isIndeterminate, i, true);
      this.$set(this.checkFuncsAll, i, false);
      this.$set(this.checkFuncs, i, []);
    }
  },
  methods: {
    queryRoleDetail() {
      const self = this;
      let params = {
        roleNo: self.roleNo
      };
      console.log(params);
      self.$axios
        .get("/iem_hrm/role/queryRoleDetail", { params })
        .then(res => {
          console.log("roleDetail", res);
          self.roleDetail = res.data.data;
          self.editRoleMsg.roleNo = self.roleDetail.roleNo;
          self.editRoleMsg.roleName = self.roleDetail.roleName;
          self.editRoleMsg.roleDescr = self.roleDetail.roleDescr;
          self.editRoleMsg.status = self.roleDetail.status;

          if (
            self.roleDetail.roleFuncSet &&
            self.roleDetail.roleFuncSet.length >= 1
          ) {
            self.roleDetail.roleFuncSet.forEach(function(ele) {
              self.checkFuncs.push(ele.bsnNo);
              self.editRoleMsg.roleFuncSet.push({ bsnNo: ele.bsnNo });
            }, this);
          }

          console.log("当前选中的功能：", self.checkFuncs);
          console.log("当前的roleFuncSet：", self.editRoleMsg.roleFuncSet);
        })
        .catch(() => {
          console.log("error");
        });
    },
    queryParentMenu() {
      const self = this;
      self.$axios
        .get("/iem_hrm/role/queryParentMenu")
        .then(res => {
          self.menus = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    // 第一级change
    handleRadioMenusChange(value) {
      // 重置第二级数据
      this.menuRadioFlag = true;
      this.submenus = [];
      this.checkSubAll = false;
      this.checkedSubmenus = [];
      //重置第三级数据
      for (name in this.isIndeterminate) {
        this.isIndeterminate[name] = true;
      }
      for (name in this.checkFuncsAll) {
        this.checkFuncsAll[name] = false;
      }
      // for (name in this.checkFuncs) {
      //   this.checkFuncs[name] = [];
      // }
      // this.funcsList = [];
      // this.funcsList2 = "";
      this.checkedSubmenusFlag = false;
      let params = {
        upMenuNo: value
      };
      this.$axios
        .get("/iem_hrm/role/queryChildMenuAndFunc", { params: params })
        .then(res => {
          this.submenus = this.funcsList = res.data.data;
        })
        .catch(() => {
          console.log("error");
        });
    },
    // 次级菜单 多选
    // 第二级控制全选
    handleSubAllChange(val) {
      let arr = [];
      this.submenus.forEach(item => {
        arr.push(item.menuName);
      });
      this.checkedSubmenus = val ? arr : [];
      if (val) {
        this.checkedSubmenusFlag = true;
        this.funcsList2 = arr;
      } else {
        this.checkedSubmenusFlag = false;
        this.funcsList2 = [];
      }
    },
    // 第二级change
    handleCheckedSubsChange(val) {
      let checkedCount = val.length;
      this.checkSubAll = checkedCount === this.submenus.length;
      this.funcsList2 = val;
      if (this.funcsList2.length > 0) {
        this.checkedSubmenusFlag = true;
      } else {
        this.checkedSubmenusFlag = false;
      }
    },
    // 功能权限 多选
    handleFuncsAllChange(val, funcs, index) {
      let arr = [];
      funcs.bsns.forEach(item => {
        arr.push(item.bsnNo);
      });
      this.checkFuncs[index] = val ? arr : [];
      this.isIndeterminate[index] = false;

      let targetFucsList = [];
      funcs.bsns.forEach(function(ele) {
        targetFucsList.push(ele.bsnNo);
      }, this);
      if (this.checkFuncsAll[index] == true) {
        targetFucsList.forEach(function(ele) {
          if (
            JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(
              JSON.stringify({ bsnNo: ele })
            ) == -1
          ) {
            this.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
          }
        }, this);
      } else {
        targetFucsList.forEach(function(ele, index) {
          if (
            JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(
              JSON.stringify({ bsnNo: ele })
            ) != -1
          ) {
            this.editRoleMsg.roleFuncSet.splice(
              JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(
                JSON.stringify({ bsnNo: ele })
              ) - 1,
              1
            );
          }
        }, this);
      }
      console.log("这是全选的checkFuncs", this.checkFuncs[index]);
      console.log("roleFuncSet", this.editRoleMsg.roleFuncSet);
    },
    handleCheckedFuncsChange(val, funcs, index) {
      if (val.length == funcs.bsns.length) {
        this.isIndeterminate[index] = false;
        this.checkFuncsAll[index] = true;
      } else {
        this.isIndeterminate[index] = true;
        this.checkFuncsAll[index] = false;
      }
      this.editRoleMsg.roleFuncSet = [];
      val.forEach(function(ele) {
        this.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
      }, this);
      console.log("roleFuncSet", this.editRoleMsg.roleFuncSet);
    },
    handleCheckedFuncsChange(val, funcs, index) {
      console.log(val, funcs, index);
      if (val.length == funcs.bsns.length) {
        this.isIndeterminate[index] = false;
        this.checkFuncsAll[index] = true;
      } else {
        this.isIndeterminate[index] = true;
        this.checkFuncsAll[index] = false;
      }
      val.forEach(function(ele) {
        if (
          JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(
            JSON.stringify({ bsnNo: ele })
          ) == -1
        ) {
          this.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
        }
      }, this);
      console.log("roleFuncSet", this.editRoleMsg.roleFuncSet);
    },
    handleSave(editRoleForm) {
      this.$refs[editRoleForm].validate(valid => {
        if (valid) {
          if (this.editRoleMsg.roleFuncSet.length >= 1) {
            let editRole = {};
            editRole.roleNo = this.editRoleMsg.roleNo;
            editRole.roleName = this.editRoleMsg.roleName;
            editRole.roleDescr = this.editRoleMsg.roleDescr;
            editRole.status = this.editRoleMsg.status;
            editRole.roleFuncSet = this.editRoleMsg.roleFuncSet;
            console.dir(editRole);
            this.$axios
              .put("/iem_hrm/role/modifyRoleInfo", editRole)
              .then(res => {
                console.log(res);
                if (res.data.code == "S00000") {
                  this.$message({ type: "success", message: "操作成功!" });
                  this.$router.push("/management_role");
                } else this.$message.error(res.data.retMsg);
              })
              .catch(() => {
                this.$message.error("操作失败！");
              });
          } else {
            this.$alert("角色权限分配为必填项，请先选择", "提示", {
              confirmButtonText: "确定",
              type: "warning"
            });
          }
        } else {
          console.log("error submit!!");
          this.$message({
            type: "error",
            message: "请确保必填信息填写正确!"
          });
          return false;
        }
      });
    },
    isInArray(arr, val) {
      let testStr = "," + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    }
  }
};
</script>


<style>
.edit_role .el-textarea__inner {
  width: 300px;
}
</style>
