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
                <el-form :inline="true" :model="formRoleMsg" :label-position="labelPosition" label-width="80px">
                    <el-col :span="12">
                        <el-form-item label="角色ID">
                            <el-input v-model="formRoleMsg.roleID"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="名称">
                            <el-input v-model="formRoleMsg.roleName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="状态">
                            <el-input v-model="formRoleMsg.status"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="描述">
                            <el-input v-model="formRoleMsg.descript"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper auth-assign">
                <el-col :span="24" class="item-title">权限分配</el-col>
                <el-col :span="2" class="leftside">
                    <div>关联菜单</div>
                </el-col>
                <el-col :span="22" class="rightside">
                    <el-radio-group v-model="menuRadio" @change="handleCheckedMenusChange" class="menu">
                        <el-radio-button label="系统管理" class="menu-item"></el-radio-button>
                        <el-radio-button label="参数管理" class="menu-item"></el-radio-button>
                        <el-radio-button label="客户关系" class="menu-item"></el-radio-button>
                        <el-radio-button label="项目管理" class="menu-item"></el-radio-button>
                        <el-radio-button label="业务管理" class="menu-item"></el-radio-button>
                        <el-radio-button label="运营报表" class="menu-item"></el-radio-button>
                    </el-radio-group>

                    <div class="submenu">
                        <el-checkbox-button :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" label="全部"></el-checkbox-button>
                        <el-checkbox-group v-model="submenuCheckboxGroup" @change="handleCheckedSubmenusChange">
                            <el-checkbox-button v-for="submenu in submenus" :label="submenu" :key="submenu" class="menu-item">{{submenu}}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                </el-col>
                <el-col :span="2" class="leftside">
                    <div>功能权限</div>
                </el-col>
                <el-col :span="22" class="rightside">

                </el-col>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
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
            formRoleMsg: {
                roleID: '',
                roleName: '',
                status: '',
                descript: ''
            },
            menuRadio: '系统管理',

            checkAll: false,
            checkedCities: ['组织架构', '用户管理'],
            submenus: submenuOptions1,
            isIndeterminate: true,
            submenuCheckboxGroup: []
        };
    },
    components: {
        current,
    },
    methods: {
        handleCheckedMenusChange(value) {
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
            this.submenuCheckboxGroup = event.target.checked ? this.submenus : [];
            this.isIndeterminate = false;
        },
        handleCheckedSubmenusChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.submenus.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.submenus.length;
        },
        handleAdd() {
            console.log('暂时没用')
        }
    }
}
</script>


<style>
.add_role {
    padding: 0 20px 20px;
}

.content-wrapper {
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
}

.content-wrapper .titlebar .title-text {
    display: inline-block;
    height: 80px;
    position: relative;
}

.content-wrapper .titlebar .title-text::after {
    content: '';
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
    line-height: 40px;
    width: 120px;
    background: #FF9900;
    border: none;
}

.el-button {
    padding: 0;
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
    padding: 10px 0 10px 8px;
    color: #999999;
}

.add-wrapper .rightside {
    float: none;
    display: inline-block;
}

.add-wrapper label {
    font-weight: 400;
    color: #999999;
    margin-right: 14px;
}

.add-wrapper .el-input__inner {
    border-radius: 0;
    width: 300px;
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
</style>
