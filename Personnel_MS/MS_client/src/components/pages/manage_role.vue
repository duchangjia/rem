<template>
    <section class="role_mgmt">
        <div class="location-wrapper">
            <el-col :span="24">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </div>

        <div class="content-wrapper">
            <el-table stripe :data="tableData" border>
                <el-table-column align="center" prop="ID" label="角色ID" width="260">
                </el-table-column>
                <el-table-column align="center" prop="name" label="角色名称" width="260">
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

            <div class="toolbar">
                <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
                </el-pagination>
            </div>
        </div>

    </section>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            tableData: [
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                },
                {
                    ID: '10001',
                    name: '系统管理员',
                    status: '启动',
                    descript: '我是描述是描述是描述是描述是描述'
                }
            ],
            filters: {
                name: ''
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

        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.role_mgmt {
    padding: 0 20px 20px;
}

.location-wrapper {
    height: 70px;
    line-height: 70px;
    font-size: 12px;
}

.location-wrapper .title {
    color: #475669;
    vertical-align: middle;
}

.location-wrapper .breadcrumb-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}

.content-wrapper {
    background: #ffffff;
    padding: 20px;
    /* padding-bottom: 0; */
}
.toolbar {
    text-align: right;
}
.toolbar .el-pagination {
    float: none !important;
    margin-top: 20px;
}

.icon-edit {
    display: inline-block;
    width: 20px;
    height: 18px;
    background: url('../../../static/img/common/edit.png');
}
</style>
