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
                            <el-radio-group v-model="menuRadio" @change="handleCheckedMenusChange">
                                <el-radio-button v-for="menu in menus" :label="menu" :key="menu" class="menu-item"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="submenu" v-if="menuRadioFlag">
                            <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" label="全部" class="menu-item"></el-checkbox-button>
                            <el-checkbox-group v-model="checkedSubmenus" @change="handleCheckedSubmenusChange">
                                <el-checkbox-button v-for="submenu in submenus" :label="submenu" :key="submenu" class="menu-item">{{submenu}}</el-checkbox-button>
                            </el-checkbox-group>
                        </div>
                    </el-col>
                </div>
                <div class="func-permission" v-if="menuRadioFlag">
                    <el-col :span="2" class="leftside">
                        <div>功能权限</div>
                    </el-col>
                    <el-col :span="22" class="rightside">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <div class="funcs-content">
                                    <el-checkbox class="func-checkall">组织架构</el-checkbox>
                                    <el-checkbox-group class="func-item">
                                        <el-checkbox>新增机构信息</el-checkbox>
                                        <el-checkbox>删除机构信息</el-checkbox>
                                        <el-checkbox>新增机构信息</el-checkbox>
                                        <el-checkbox>修改机构信息</el-checkbox>
                                        <el-checkbox>查询机构列表</el-checkbox>
                                        <el-checkbox>新增机构信息</el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="funcs-content">
                                    <el-checkbox class="func-checkall">用户管理</el-checkbox>
                                    <el-checkbox-group class="func-item">
                                        <el-checkbox>用户管理1</el-checkbox>
                                        <el-checkbox>用户管理2</el-checkbox>
                                        <el-checkbox>用户管理3</el-checkbox>
                                        <el-checkbox>用户管理4</el-checkbox>
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
const menuOptions = ['系统管理', '参数管理', '客户关系', '项目管理', '业务管理', '运营报表'];
const submenuOptions1 = ['组织架构', '用户管理', '角色管理', '功能管理'];
const submenuOptions2 = ['参数管理1', '参数管理2', '参数管理3'];
const submenuOptions3 = ['客户关系1', '客户关系2', '客户关系3'];
const submenuOptions4 = ['项目管理1', '项目管理2', '项目管理3', '项目管理4'];
const submenuOptions5 = ['业务管理1', '业务管理2', '业务管理3', '业务管理4'];
const submenuOptions6 = ['运营报表1', '运营报表2', '运营报表3', '运营报表4'];
import current from '../../common/current_position.vue'
export default {
    data() {
        return {
            labelPosition: 'right',
            addRoleMsg: {
                roleNo: '',
                roleName: '',
                status: '',
                roleDescr: ''
            },
            menuRadio: '系统管理',
            menuRadioFlag: true,
            menus: menuOptions,

            checkAll: false,
            checkedSubmenus: ['组织架构', '用户管理'],
            submenus: submenuOptions1,
            isIndeterminate: true
        };
    },
    components: {
        current,
    },
    // created() {
    //     const self = this;
    //     let params = {};
    //     self.$axios.get('/iem_hrm/role/setRoleFunc', { params: params })
    //         .then(function(res) {
    //             console.log(res);
    //         }).catch(function(err) {
    //             console.log('error');
    //         })
    // },
    methods: {
        handleCheckedMenusChange(value) {
            if (value !== null) {
                this.menuRadioFlag = true;
            } else {
                this.menuRadioFlag = false;
            }
            if (value == '系统管理') {
                this.checkAll = false;
                this.submenus = submenuOptions1;
            } else if (value == '参数管理') {
                this.checkAll = false;
                this.submenus = submenuOptions2;
            } else if (value == '客户关系') {
                this.checkAll = false;
                this.submenus = submenuOptions3;
            } else if (value == '项目管理') {
                this.checkAll = false;
                this.submenus = submenuOptions4;
            } else if (value == '业务管理') {
                this.checkAll = false;
                this.submenus = submenuOptions5;
            } else if (value == '运营报表') {
                this.checkAll = false;
                this.submenus = submenuOptions6;
            }
        },
        handleCheckAllChange(event) {
            this.checkedSubmenus = event.target.checked ? this.submenus : [];
            this.isIndeterminate = false;
        },
        handleCheckedSubmenusChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.submenus.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.submenus.length;
        },
        handleSave() {
            let newRole = {};
            newRole.roleName = this.addRoleMsg.roleName;
            newRole.status = this.addRoleMsg.status;
            newRole.roleDescr = this.addRoleMsg.roleDescr;
            console.log(newRole);
            this.$axios.post('/iem_hrm/role/addRoleInfo', newRole)
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 'S00000') this.$router.push('/management_role');
                    else this.$message.error('新增角色失败！');
                }).catch(() => {
                    this.$message.error('新增角色失败！');
                })
        }
    }
}
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
