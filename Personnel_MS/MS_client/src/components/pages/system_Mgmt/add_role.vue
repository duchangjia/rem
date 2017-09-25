<template>
    <div class="content-wrapper">
        <el-col :span="24" class="titlebar">
            <span class="title">新增角色</span>
            <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
        </el-col>
        <div class="add-wrapper role-msg">
            <span>角色信息</span>
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
            <span>权限分配</span>
            
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
            }
        };
    }
}
</script>

<style>
.content-wrapper {
    background: #ffffff;
    padding: 0 20px 20px;
}

.content-wrapper .titlebar {
    float: none;
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    font-family: "PingFang SC";
    border-bottom: 1px solid #eeeeee;
    /* margin-bottom: 20px; */
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

.add-wrapper>span {
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    padding-left: 8px;
}

label {
    font-weight: 400;
}
.el-input__inner {
    border-radius: 0;
    width: 300px;
}
</style>
