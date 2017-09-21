<template>
    <div class="role_mgmt">
        <div class="location-wrapper">
            <span class="current-location">当前位置：角色管理</span>
            <span class="search"><input type="text" class="search-text">
                <i class="search-icon"></i>
            </span>
        </div>
        <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>

        <div class="content-wrapper item-pro">
            <el-table stripe :data="tableData" border>
                <el-table-column align="center" prop="ID" label="角色ID" width="260">
                </el-table-column>
                <el-table-column align="center" prop="name" label="角色名称" width="260">
                </el-table-column>
                <el-table-column align="center" label="状态">
                    <template scope="scope">
                        <el-progress :percentage="scope.row.progress"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="descript" label="描述">
                </el-table-column>
                <el-table-column align="center" prop="operation" label="操作">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            tableData: [{
                ID: '10001',
                name: '系统管理员',
                progress: 70,
                descript: '我是描述是描述是描述是描述是描述是描述是描述是描述是描述是描述是描述',
                operation: ''
            }]
        }
    }
}
</script>

<style scoped>
.role_mgmt * {
    padding: 0;
    margin: 0;
}

.role_mgmt {
    padding: 20px;
}
</style>
