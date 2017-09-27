<template>
    <div class="role_mgmt">
        <current yiji="系统管理" erji="角色管理">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">角色管理</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">新增角色</el-button>
            </el-col>
            <el-table stripe :data="tableData" border>
                <el-table-column align="center" prop="roleID" label="角色ID">
                </el-table-column>
                <el-table-column align="center" prop="roleName" label="角色名称">
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
            <el-pagination class="toolbar" layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
            </el-pagination>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
export default {
    data() {
        return {
            tableData: [
                {
                    roleID: '10001',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10002',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10003',
                    roleName: '财务',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10004',
                    roleName: '出纳',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10005',
                    roleName: '人事',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10006',
                    roleName: '部门经理',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10007',
                    roleName: '部门经理',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10008',
                    roleName: '普通员工',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10009',
                    roleName: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10010',
                    roleName: '普通员工',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10011',
                    roleName: '普通员工',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10012',
                    roleName: '普通员工',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
                {
                    roleID: '10013',
                    roleName: '普通员工',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述'
                },
            ],
            users: [],
            total: 100,
            page: 1,
            sels: []//列表选中列
        }
    },
    components: {
        current,
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
            this.$router.push('/add_role');
        }
    }
}
</script>

<style>
.role_mgmt {
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
    margin-bottom: 20px;
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

.content-wrapper .titlebar .el-button {
    padding: 0;
}

.content-wrapper .el-table th {
    background-color: #F4F4F4 !important;
}

.toolbar.el-pagination {
    text-align: right;
    float: none !important;
    margin-top: 20px;
}

.content-wrapper .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}

.content-wrapper .el-pager li {
    padding: 0 4px;
    border-right: 0;
    background: #fff;
    font-size: 12px;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
}

.el-pagination button,
.el-pagination span {
    display: inline-block;
    font-size: 12px;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    vertical-align: top;
    box-sizing: border-box;
}

.el-pager li:hover {
    color: #FF9900;
}

.icon-edit {
    display: inline-block;
    width: 20px;
    height: 18px;
    background: url('../../../../static/img/common/edit.png');
}
</style>
