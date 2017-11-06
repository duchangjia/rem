<template>
    <div class="add_role">
        <current yiji="系统管理" erji="角色管理" sanji="新增角色">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">新增角色</span>
                <el-button type="primary" @click="handleSave" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper role-msg">
                <el-col :span="24" class="item-title">角色信息</el-col>
                <el-form :inline="true" :model="addRoleMsg" :label-position="labelPosition" label-width="80px">
                    <el-col :span="12">
                        <el-form-item label="名称">
                            <el-input v-model="addRoleMsg.roleName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="状态">
                            <el-select v-model="addRoleMsg.status">
                                <el-option label="有效" value="1"></el-option>
                                <el-option label="无效" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="addRoleMsg.roleDescr"></el-input>
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
                                    <el-checkbox v-model="checkFuncsAll['aa'+index]" :indeterminate="isFuncsIndeterminate" @change="handleFuncsAllChange($event,index)" class="func-checkall">{{ funcs.menuName }}</el-checkbox>
                                    <el-checkbox-group v-model="checkFuncs" @change="handleCheckedFuncsChange(value, index)"  class="func-item">
                                        <el-checkbox v-for="funcsDtl in funcs.bsns">{{ funcsDtl.interfaceName }}</el-checkbox>
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
      labelPosition: "right",
      addRoleMsg: {
        roleNo: "",
        roleName: "",
        status: "",
        roleDescr: ""
      },
      menuRadio: "",
      menuRadioFlag: false,
      menus: [],

      checkSubAll: false,
      checkedSubmenusFlag: false,
      checkedSubmenus: [],
      submenus: [],
      isSubIndeterminate: true,

      funcsList: [],
      checkFuncsAll: false,
      checkFuncs: [],
      isFuncsIndeterminate: true
    };
  },
  components: {
    current
  },
  created() {
    const self = this;
    self.$axios
      //   .get("/iem_hrm/role/queryParentMenu")
      .get("/iem_hrm/queryParentMenu")
      .then(res => {
        // self.menus = res.data.data;
        self.menus = res.data.data.data;
        console.log("这是menus" ,self.menus);
      })
      .catch(() => {
        console.log("error");
      });
  },
  methods: {
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
        // .get("/iem_hrm/role/queryChildMenuAndFunc", { params: params })
        .get("/iem_hrm/queryChildMenuAndFunc", { params: params })
        .then(res => {
          //   this.submenus = res.data.data;
          this.submenus = res.data.data.data;
          this.checkSubAll = false;
          console.log("这是submenus" , this.submenus);
        })
        .catch(() => {
          console.log("error");
        });
    },
    // 次级菜单 多选
    handleSubAllChange(event) {
      this.checkSubAll = event.target.checked;
      if ((this.checkSubAll == true)) {
        this.submenus.forEach(function(v, k) {
          this.checkedSubmenus.push(v.menuName);
        });
      } else {
        this.checkedSubmenus = [];
      }
      this.checkedSubmenus.length > 0 ? (this.checkedSubmenusFlag = true) : (this.checkedSubmenusFlag = false);
      this.isSubIndeterminate = false;
      this.funcsList = this.checkedSubmenus;
      console.log("这是全选的checkedSubmenus", this.funcsList);
    },
    handleCheckedSubsChange(value) {
      let checkedCount = value.length;
      this.isSubIndeterminate = checkedCount > 0 && checkedCount < this.submenus.length;
      checkedCount > 0 ? (this.checkedSubmenusFlag = true) : (this.checkedSubmenusFlag = false);
      checkedCount == this.submenus.length ? (this.checkSubAll = true) : (this.checkSubAll = false);
      this.funcsList = value;
      console.log("这是checkedSubmenus", this.funcsList);
    },
    // 功能权限 多选
    handleFuncsAllChange(event, index) {
        console.log('event:' + event);
        console.log('index:' + index);
      this.checkFuncsAll['aa'+index] = event.target.checked;
      if ((checkFuncsAll['aa'+index] == true)) {
        // this.submenus.forEach(function(v, k) {
        //   this.checkFuncs.push(v.menuName);
        // });
        this.checkFuncs = this.funcsList;
      } else {
        this.checkFuncs = [];
      }
      this.isFuncsIndeterminate = false;
      console.log("这是全选的checkFuncs" , this.checkFuncs);
    },
    handleCheckedFuncsChange(val) {
      this.checkFuncs = val;
      console.log("这是checkFuncs" , val);
    },

    handleSave() {
      let newRole = {};
      newRole.roleName = this.addRoleMsg.roleName;
      newRole.status = this.addRoleMsg.status;
      newRole.roleDescr = this.addRoleMsg.roleDescr;
      console.log(newRole);
      this.$axios
        .post("/iem_hrm/role/addRoleInfo", newRole)
        .then(res => {
          console.log(res);
          if (res.data.code == "S00000") this.$router.push("/management_role");
          else this.$message.error("新增角色失败！");
        })
        .catch(() => {
          this.$message.error("新增角色失败！");
        });
    }
  }
};
</script>

<style>
.add_role {
  padding: 0 0 20px 20px;
}

.add_role .el-textarea__inner {
  width: 300px;
}

.add_role .content-wrapper {
  padding: 0 20px 0;
}
</style>
