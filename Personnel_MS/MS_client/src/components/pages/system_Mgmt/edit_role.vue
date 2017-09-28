<template>
    <div class="edit_role">
        <current yiji="系统管理" erji="角色管理" sanji="编辑角色">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">编辑角色</span>
                <el-button type="primary" @click="handleEdit" class="toolBtn">保存</el-button>
            </div>
            <div class="edit-wrapper">
                <el-col :span="24" class="item-title">角色信息</el-col>
                <el-form :inline="true" :model="formRoleMsg" label-width="80px" :rules="editRoleRules" ref="editForm">
                    <el-col :span="12">
                        <el-form-item label="名称" prop="roleName">
                            <el-input v-model="formRoleMsg.roleName" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="岗位">
                            <el-select v-model="formRoleMsg.job">
                                <el-option label="普通员工" value="普通员工"></el-option>
                                <el-option label="系统管理员" value="系统管理员"></el-option>
                                <el-option label="经理" value="经理"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="formRoleMsg.descript"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="状态">
                            <el-radio-group v-model="formRoleMsg.status">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>

                </el-form>
            </div>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
export default {
    data() {
        return {
            formRoleMsg: {
                roleName: '',
                job: '',
                descript: '',
                status: ''
            },
            editRoleRules: {
                roleName: [
                    { required: true, message: '请输入名称', trigger: 'blur' }
                ]
            },
        };
    },
    components: {
        current,
    },
    methods: {
        handleEdit() {
            let editRole = {};
            editRole.roleName = this.formRoleMsg.roleName;
            editRole.job = this.formRoleMsg.job;
            editRole.descript = this.formRoleMsg.descript;
            editRole.status = this.formRoleMsg.status;
            console.dir(editRole);
        }
    }
}
</script>


<style>
.edit_role {
    padding: 0 0 20px 20px;
    ;
}

.edit_role .content-wrapper {
    background: #ffffff;
    padding: 0 20px 20px;
    color: #333333;
    clear: both;
}

.edit-wrapper {
    clear: both;
} 

.edit-wrapper form {
    font-size: 0;
}

.edit-wrapper form>div {
    float: none;
    display: inline-block;
} 

.edit-wrapper .item-title {
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    padding-left: 8px;
}

.edit-wrapper label {
    font-weight: 400;
    color: #999999;
    margin-bottom: 0;
    /* margin-right: 14px; */
}

.edit-wrapper .el-input__inner {
    border-radius: 0;
    width: 300px;
}

.edit-wrapper .el-textarea {
    width: 300px;
}

.edit-wrapper .el-textarea__inner {
    border-radius: 0;
}
</style>
