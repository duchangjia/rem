<template>
    <div class="content-wrapper">
        <el-col :span="24" class="titlebar">
            <span class="title">角色管理</span>
            <el-button type="primary" @click="handleAdd" class="toolBtn">新增角色</el-button>
        </el-col>
        <el-table stripe :data="tableData" border>
            <el-table-column align="center" prop="roleID" label="角色ID" width="260">
            </el-table-column>
            <el-table-column align="center" prop="roleName" label="角色名称" width="260">
            </el-table-column>
            <el-table-column align="center" prop="status" label="状态">
            </el-table-column>
            <el-table-column align="center" prop="descript" label="描述">
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
                <template scope="scope">
                    <i class="icon-edit"></i>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="toolbar" layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
        </el-pagination>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            tableData: [
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                }
            ],
            filters: {
                roleName: ''
            },
            users: [],
            total: 150,
            page: 1,
            sels: []//列表选中列
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.page = val;
            this.getRoles();
        },
        getRoles() {
            return false;
        },

        handleAdd() {
            this.$router.replace('/management_role/add_role');
        }

    }
}
</script>

<style scoped>
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
    margin-bottom: 20px;
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
.toolbar.el-pagination {
    text-align: right;
    float: none !important;
    margin-top: 20px;
}

.icon-edit {
    display: inline-block;
    width: 20px;
    height: 18px;
    background: url('../../../../static/img/common/edit.png');
}
</style>
