<template>
    <div class="container-wrap">
        <current yiji="系统管理" erji="角色管理" sanji="新增角色">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">新增角色</span>
                <el-button type="primary" @click="handleSave('editRoleForm')" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper role-msg">
                <el-col :span="24" class="item-title">角色信息</el-col>
                <el-form :inline="true" :model="addRoleMsg" :rules="editRoleRules" ref="editRoleForm"
                         :label-position="labelPosition" label-width="80px">
                    <el-col :span="12">
                        <el-form-item label="名称" prop="roleName">
                            <el-input v-model="addRoleMsg.roleName" auto-complete="off" :maxlength="30"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="状态" prop="status">
                            <el-select v-model="addRoleMsg.status">
                                <el-option label="有效" value="1"></el-option>
                                <el-option label="无效" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="描述" prop="roleDescr">
                            <el-input type="textarea" v-model="addRoleMsg.roleDescr" :maxlength="30"></el-input>
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
                                <el-radio-button v-for="menu in menus" :label="menu.menuNo" class="menu-item">
                                    {{menu.menuName}}
                                </el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="submenu" v-if="menuRadioFlag">
                            <el-checkbox-button v-model="checkSubAll" @change="handleSubAllChange(checkSubAll)"
                                                class="menu-item">全部
                            </el-checkbox-button>
                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubsChange">
                                <el-checkbox-button v-for="submenu in submenus" :label="submenu.menuName"
                                                    :key='submenu.menuName' class="menu-item"></el-checkbox-button>
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
                            <el-col :span="6" v-for="(funcs, index) in funcsList" :key="index"
                                    v-show='funcsList2.indexOf(funcs.menuName)!=-1'>
                                <div class="funcs-content">
                                    <el-checkbox v-model="checkFuncsAll[index]" :indeterminate="isIndeterminate[index]"
                                                 @change="handleFuncsAllChange(checkFuncsAll[index],funcs,index)"
                                                 class="func-checkall">{{ funcs.menuName }}
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
import Vue from "vue";

export default {
  data() {
    return {
      labelPosition: "right",
      addRoleMsg: {
        roleName: "",
        status: "1",
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
    const self = this;
    self.$axios
      .get("/iem_hrm/role/queryParentMenu")
      .then(res => {
        self.menus = res.data.data;
      })
      .catch(() => {
        console.log("error");
      });
    for (let i = 0; i < 10; i++) {
      this.$set(this.isIndeterminate, i, true);
      this.$set(this.checkFuncsAll, i, false);
      this.$set(this.checkFuncs, i, []);
    }
  },
  methods: {
    // 第一级change
    handleRadioMenusChange(value) {
      console.log(value, 222);
      // 重至第二级数据
      this.menuRadioFlag = true;
      this.submenus = [];
      this.checkSubAll = false;
      this.checkedSubmenus = [];
      //重至第三级数据
      for (name in this.isIndeterminate) {
        this.isIndeterminate[name] = true;
      }
      for (name in this.checkFuncsAll) {
        this.checkFuncsAll[name] = false;
      }
      for (name in this.checkFuncs) {
        this.checkFuncs[name] = [];
      }
      this.funcsList = [];
      this.funcsList2 = "";
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
      console.log("funcs", funcs);
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
            JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(
              JSON.stringify({ bsnNo: ele })
            ) == -1
          ) {
            this.addRoleMsg.roleFuncSet.push({ bsnNo: ele });
          }
        }, this);
      } else {
        targetFucsList.forEach(function(ele, index) {
          if (
            JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(
              JSON.stringify({ bsnNo: ele })
            ) != -1
          ) {
            this.addRoleMsg.roleFuncSet.splice(
              JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(
                JSON.stringify({ bsnNo: ele })
              ) - 1,
              1
            );
          }
        }, this);
      }
      console.log("这是全选的checkFuncs", this.checkFuncs[index]);
      console.log("roleFuncSet", this.addRoleMsg.roleFuncSet);
    },
    handleCheckedFuncsChange(val, funcs, index) {
      if (val.length == funcs.bsns.length) {
        this.isIndeterminate[index] = false;
        this.checkFuncsAll[index] = true;
      } else {
        this.isIndeterminate[index] = true;
        this.checkFuncsAll[index] = false;
      }
      val.forEach(function(ele) {
        if (
          JSON.stringify(this.addRoleMsg.roleFuncSet).indexOf(
            JSON.stringify({ bsnNo: ele })
          ) == -1
        ) {
          this.addRoleMsg.roleFuncSet.push({ bsnNo: ele });
        }
      }, this);
      console.log("roleFuncSet", this.addRoleMsg.roleFuncSet);
    },

    handleSave(editRoleForm) {
      this.$refs[editRoleForm].validate(valid => {
        if (valid) {
          if (this.addRoleMsg.roleFuncSet.length >= 1) {
            let newRole = {};
            newRole.roleName = this.addRoleMsg.roleName;
            newRole.status = this.addRoleMsg.status;
            newRole.roleDescr = this.addRoleMsg.roleDescr;
            newRole.roleFuncSet = this.addRoleMsg.roleFuncSet;
            console.log(newRole);
            this.$axios
              .post("/iem_hrm/role/addRoleInfo", newRole)
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
.add_role .el-textarea__inner {
  width: 300px;
}
</style>
