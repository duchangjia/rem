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
                <el-form :inline="true" :model="editRoleMsg" :rules="editRoleRules" ref="editRoleForm" label-width="80px">
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
                                <el-radio-button v-for="menu in menus" :label="menu.menuNo" class="menu-item">{{menu.menuName}}</el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="submenu" v-if="menuRadioFlag">
                            <el-checkbox-button v-model="checkSubAll" :indeterminate="isSubIndeterminate" @change="handleSubAllChange" label="全部" class="menu-item"></el-checkbox-button>
                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubsChange">
                                <el-checkbox-button v-for="submenu in submenus" :label="submenu" class="menu-item">{{submenu.menuName}}</el-checkbox-button>
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
                            <el-col :span="6" v-for="(funcs, index) in funcsList">
                                <div class="funcs-content">
                                    <el-checkbox :value="checkFuncsAll[index]" :indeterminate="!isFuncsIndeterminate[index]" @change="handleFuncsAllChange($event,index)" class="func-checkall">{{ funcs.menuName }}</el-checkbox>
                                    <el-checkbox-group v-model="checkFuncs" @change="handleCheckedFuncsChange($event,index)"  class="func-item">
                                        <el-checkbox v-for="funcsDtl in funcs.bsns" :label="funcsDtl.bsnNo" v-bind:title="funcsDtl.interfaceName" >{{ funcsDtl.interfaceName }}</el-checkbox>
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
      roleDetail: {},
      editRoleMsg: {
        roleNo: "",
        roleName: "",
        status: "",
        roleDescr: "",
        roleFuncSet: []
      },
      menuRadio: "",
      menuRadioFlag: false,
      menus: [],

      checkSubAll: {},
      checkedSubmenusFlag: false,
      checkedSubmenus: [],
      submenus: [],
      isSubIndeterminate: true,

      funcsList: [],
      checkFuncsAll: {},
      checkFuncs: [],
      isFuncsIndeterminate: {},

      editRoleRules: {
        roleName: [{ required: true, message: "角色名称不能为空", trigger: "blur" }],
        status: [{ required: true, message: '请选择状态', trigger: 'change' }],
        roleDescr: [{ required: true, message: "角色描述不能为空", trigger: "blur" }]
      }
    };
  },
  components: {
    current
  },
  created() {
    this.queryRoleDetail(); // 查询角色详情
    this.queryParentMenu(); // 查询父级菜单
  },
  methods: {
    queryRoleDetail() {
      const self = this;
      let params = {
        roleNo: self.$route.params.roleNo
      };
      console.log(params);
      self.$axios.get('/iem_hrm/role/queryRoleDetail', { params })
        .then(res => {
          console.log("roleDetail", res);
          self.roleDetail = res.data.data;
          self.editRoleMsg.roleNo = self.roleDetail.roleNo;
          self.editRoleMsg.roleName = self.roleDetail.roleName;
          self.editRoleMsg.roleDescr = self.roleDetail.roleDescr;
          self.editRoleMsg.status = self.roleDetail.status;

          self.roleDetail.roleFuncSet.forEach(function(ele) {
             self.checkFuncs.push(ele.bsnNo);
             self.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
          }, this);
          console.log("選中的功能：" , self.checkFuncs);

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
    // 父级菜单-单选
    handleRadioMenusChange(value) {
      this.menuRadioFlag = true;
      this.checkedSubmenusFlag = false;
      this.checkedSubmenus = [];
      this.funcsList = [];
      console.log(this.funcsList);
      this.menuRadio = value;
      let params = {
        upMenuNo: this.menuRadio
      };
      this.$axios
        .get("/iem_hrm/role/queryChildMenuAndFunc", { params: params })
        .then(res => {
          this.submenus = res.data.data;
          this.checkSubAll = false;
        })
        .catch(() => {
          console.log("error");
        });
    },
    // 次级菜单 多选
    handleSubAllChange(event) {
      this.checkSubAll = event.target.checked;
      if (this.checkSubAll == true) {
        this.checkedSubmenus = this.submenus;
        this.isSubIndeterminate = true;
      } else {
        this.checkedSubmenus = [];
        this.isSubIndeterminate = false;
      }
      this.checkedSubmenus.length > 0 ? (this.checkedSubmenusFlag = true) : (this.checkedSubmenusFlag = false);
      this.funcsList = this.checkedSubmenus;
      console.log("这是全选的checkedSubmenus", this.funcsList);
    },
    handleCheckedSubsChange(val) {
      let checkedCount = val.length;
      this.isSubIndeterminate = checkedCount > 0 && checkedCount < this.submenus.length;
      checkedCount > 0 ? (this.checkedSubmenusFlag = true) : (this.checkedSubmenusFlag = false);
      checkedCount == this.submenus.length ? (this.checkSubAll = true) : (this.checkSubAll = false);
      this.funcsList = val;
      console.log("这是checkedSubmenus", this.funcsList);
    },
    // 功能权限 多选
    handleFuncsAllChange(event, index) {
      this.checkFuncsAll[index] = event.target.checked;
      let targetFucsList = [];
      this.funcsList[index].bsns.forEach(function(ele) {
        targetFucsList.push(ele.bsnNo);
      }, this);
      if (this.checkFuncsAll[index] == true) {
        this.$set(this.isFuncsIndeterminate, index, true);
        targetFucsList.forEach(function(ele) {
          if (JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(JSON.stringify({ bsnNo: ele })) == -1) {
            this.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
          }
          if ( !this.isInArray(this.checkFuncs, ele) ) {
            this.checkFuncs.push(ele);
          }
        }, this);
      } else {
        this.$set(this.isFuncsIndeterminate, index, false);
        targetFucsList.forEach(function(ele) {
          if (JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(JSON.stringify({ bsnNo: ele })) != -1) {
            this.editRoleMsg.roleFuncSet.splice(JSON.stringify(this.editRoleMsg.roleFuncSet).indexOf(JSON.stringify({ bsnNo: ele }))-1, 1);
          }
          if ( this.isInArray(this.checkFuncs, ele) ) {
            this.checkFuncs.splice(this.checkFuncs.indexOf(ele), 1);
          }
        }, this);
      }
      console.log("这是全选的checkFuncs", this.checkFuncs);
      console.log("roleFuncSet", this.editRoleMsg.roleFuncSet);
    },
    handleCheckedFuncsChange(val, index) {
      if (val.length == this.funcsList[index].bsns.length) {
        this.checkFuncsAll[index] = true;
        this.$set(this.isFuncsIndeterminate, index, true);
      } else {
        this.checkFuncsAll[index] = false;
        this.$set(this.isFuncsIndeterminate, index, false);
      }
      this.editRoleMsg.roleFuncSet = [];
      val.forEach(function(ele) {
        this.editRoleMsg.roleFuncSet.push({ bsnNo: ele });
      }, this);
      console.log("roleFuncSet", this.editRoleMsg.roleFuncSet);
    },

    handleSave(editRoleForm) {
      this.$refs[editRoleForm].validate(valid => {
        if (valid) {
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
              } else this.$message.error("操作失败！");
            })
            .catch(() => {
              this.$message.error("操作失败！");
            });
        } else {
          console.log("error submit!!");
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
