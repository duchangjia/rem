<template>
    <div class="content-wrapper">
        <el-col :span="24" class="titlebar">
            <span class="title">新增角色</span>
            <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
        </el-col>
        <div class="add-wrapper role-msg">
            <el-col :span="24" class="item-title">角色信息</el-col>
            <el-form :inline="true" :model="formRoleMsg" :label-position="right" label-width="80px">
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
            <el-col :span="2" class="left">
                <div>关联菜单</div>
            </el-col>
            <el-col :span="22" class="right">
                <el-radio-group v-model="menuRadio" class="menu">
                    <el-radio-button label="系统管理" class="menu-item"></el-radio-button>
                    <el-radio-button label="参数管理" class="menu-item"></el-radio-button>
                    <el-radio-button label="客户关系" class="menu-item"></el-radio-button>
                    <el-radio-button label="项目管理" class="menu-item"></el-radio-button>
                    <el-radio-button label="业务管理" class="menu-item"></el-radio-button>
                    <el-radio-button label="运营报表" class="menu-item"></el-radio-button>
                </el-radio-group>

                <div class="submenu">
                    <el-button class="menu-item">全部</el-button>
                    <el-checkbox-group v-model="menuCheckboxGroup">
                        <el-checkbox-button label="组织架构" class="menu-item"></el-checkbox-button>
                        <el-checkbox-button label="用户管理" class="menu-item"></el-checkbox-button>
                        <el-checkbox-button label="角色管理" class="menu-item"></el-checkbox-button>
                        <el-checkbox-button label="功能管理" class="menu-item"></el-checkbox-button>
                    </el-checkbox-group>
                </div>
            </el-col>
            <el-col :span="2" class="left">
                <div>功能权限</div>
            </el-col>
            <el-col :span="22" class="right">
                
            </el-col>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            formRoleMsg: {
                roleID: '',
                roleName: '',
                status: '',
                descript: ''
            },
            menuRadio: '系统管理',
            menuCheckboxGroup: []
        };
    }
}
</script>

<style>
.content-wrapper {
    background: #ffffff;
    padding: 0 20px 20px;
    color: #333333;
}

.content-wrapper .titlebar {
    float: none;
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    font-family: "PingFang SC";
    border-bottom: 1px solid #eeeeee;
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
    float: none;
}

.add-wrapper form {
    font-size: 0;
}

.add-wrapper form>div {
    float: none;
    display: inline-block;
}

.add-wrapper .left {
    display: inline-block;
    padding: 10px 0 10px 8px;
    color: #999999;
}

.add-wrapper .right {
    float: none;
    display: inline-block;
}

label {
    font-weight: 400;
    color: #999999;
    margin-right: 14px;
}

.el-input__inner {
    border-radius: 0;
    width: 300px;
}

.menu-item {
    display: inline-block;
    /* padding: 10px; */
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    font-family: "PingFangSC-Regular";
}
.menu-item > span {
    display: inline-block;
    padding: 10px;
}
.el-radio-button__inner {
    background: #F4F4F4;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.el-radio-button__inner:hover {
    color: #FF9900;
}

.el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
    border-radius: 2px;
}

.el-radio-button:last-child .el-radio-button__inner {
    border-radius: 2px;
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #FF9900;
}

.submenu {
    padding: 10px;
    background: #F4F4F4;
}

.submenu .menu-item {
    margin-bottom: 0;
    font-family: "PingFangSC-Light";
}
.submenu .el-checkbox-group {
    display: inline-block;
}

.submenu .el-button {
    border: none;
    color: #999999;
}
.submenu .el-button:active {
    color: #ffffff;
    background: #FF9900;
}
.submenu .el-checkbox-button__inner {
    background: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.submenu .el-checkbox-button:first-child .el-checkbox-button__inner {
    border-left: none;
    border-radius: 2px;
}
.submenu .el-checkbox-button.is-checked .el-checkbox-button__inner {
    box-shadow: none;
}
.submenu .el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 2px;
}

.submenu .el-checkbox-button__inner:hover {
    color: #FF9900;
}
.submenu .el-checkbox-button.is-checked .el-checkbox-button__inner:hover {
    color: #ffffff;
}


</style>
