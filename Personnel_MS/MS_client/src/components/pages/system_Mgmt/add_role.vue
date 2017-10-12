<template>
    <div class="add_role">
        <current yiji="系统管理" erji="角色管理" sanji="新增角色">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">新增角色</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper role-msg">
                <el-col :span="24" class="item-title">角色信息</el-col>
                <el-form :inline="true" :model="addRoleMsg" :label-position="labelPosition" label-width="80px">
                    <!-- <el-col :span="12">
                                <el-form-item label="角色ID">
                                    <el-input v-model="addRoleMsg.roleNo"></el-input>
                                </el-form-item>
                            </el-col> -->
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
                            <el-input v-model="addRoleMsg.roleDescr"></el-input>
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
        handleAdd() {
            let newRole = {};
            newRole.roleName = this.addRoleMsg.roleName;
            newRole.status = this.addRoleMsg.status;
            newRole.roleDescr = this.addRoleMsg.roleDescr;
            console.log(newRole);
            this.$axios.post('iemrole/role/addRoleInfo', { newRole })
                .then(function(res) {
                    console.log(res);
                    this.$router.push('/management_role');
                }).catch(function(err) {
                    console.log('error');
                })
        }
    }
}
</script>


<style>
.add_role {
    padding: 0 0 20px 20px;
}

.add_role .content-wrapper {
    background: #ffffff;
    padding: 0 20px 0;
    color: #333333;
    clear: both;
}

.add-wrapper .item-title {
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    padding-left: 8px;
}

.add-wrapper form {
    font-size: 0;
}

.add-wrapper form>div {
    float: none;
    display: inline-block;
}

.add-wrapper .leftside {
    display: inline-block;
    padding: 7px 0 7px 8px;
    color: #999999;
}

.add-wrapper .rightside {
    float: none;
    display: inline-block;
}

.add-wrapper label {
    font-weight: 400;
    color: #999999;
    margin-bottom: 0;
}

.add-wrapper.role-msg label {
    margin-right: 14px;
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
    background-color: #FF9900;
}

.add-wrapper .el-input__inner {
    border-radius: 0;
    width: 300px;
}

.add-wrapper .el-input__inner:focus {
    border-color: #ff9900;
}

.add-wrapper .menu-item {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    font-family: "PingFangSC-Regular";
}

.add-wrapper .el-radio-button__inner {
    background: #F4F4F4;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.add-wrapper .el-radio-button__inner:hover {
    color: #FF9900;
}

.add-wrapper .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
    border-radius: 2px;
}

.add-wrapper .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 2px;
}

.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #FF9900;
    box-shadow: none;
}

.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover {
    color: #ffffff;
}

.add-wrapper .submenu {
    padding: 10px;
    margin-bottom: 20px;
    background: #F4F4F4;
}

.add-wrapper .submenu .menu-item {
    margin-bottom: 0;
    font-family: "PingFangSC-Light";
}

.add-wrapper .submenu .el-checkbox-group {
    display: inline-block;
}

.add-wrapper .submenu .el-checkbox-button__inner {
    background: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button:first-child .el-checkbox-button__inner {
    border-left: none;
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner {
    background-color: #FF9900;
    box-shadow: none;
}

.add-wrapper .submenu .el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button__inner:hover {
    color: #FF9900;
}

.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner:hover {
    color: #ffffff;
}


.add-wrapper .func-permission .funcs-content {
    background: #F8F8F8;
    height: 312px;
    margin-bottom: 20px;
    /* padding: 0 20px; */
}

.add-wrapper .func-permission .funcs-content label {
    color: #333333;
}

.add-wrapper .func-permission .funcs-content .func-item {
    margin-top: 8px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox {
    display: block;
    line-height: 36px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox+.el-checkbox {
    margin-left: 0;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__input {
    float: right;
    margin-top: 8px;
    margin-right: 20px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__label {
    padding-left: 0;
    font-family: "PingFangSC-Light";
    margin-left: 20px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F1F1F1;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__input {
    margin-top: 10px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__label {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff8d00;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__inner {
    border-radius: 0;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__inner:hover,
.add-wrapper .func-permission .funcs-content .el-checkbox__inner:focus {
    border-color: #ff8d00;
}
</style>
