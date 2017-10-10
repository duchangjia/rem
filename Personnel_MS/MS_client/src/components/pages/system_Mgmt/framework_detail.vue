<template>
    <div class="content-right">
        <div class="title">
            <span class="text">互联网中心</span>
            <div class="button-wrapper" style="display: flex">
                <el-button class="del">删除</el-button>
                <el-button type="primary" @click="handleAdd('edit_department')" class="toolBtn">编辑</el-button>
            </div>
        </div>
        <div class="form1-wrapper">
            <span>上级机构</span><input type="text" value="上海分公司"><br>
            <span>主管</span><input type="text" value="上海分公司"><br>
            <span>类型</span><select value="">
            <option value="一级部门">一级部门</option>
            <option value="一级部门">一级部门</option>
            <option value="一级部门">一级部门</option></select><br>
            <span>状态</span><input type="text" value="上海分公司">
        </div>
        <div class="title" style="margin-top: 36px;">
            <span class="text">下级机构</span>
            <el-button type="primary" @click="handleAdd('add_junior')" class="toolBtn">新增</el-button>
        </div>
        <div class="table-wrapper" style="margin-top: 13px; text-align: right;">
            <!--<table>-->
            <!--<tr><td>名称</td><td>类型</td><td>主管</td><td>状态</td></tr>-->
            <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
            <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
            <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
            <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
            <!--<tr><td>研发部</td><td>三级部门</td><td>老王</td><td>正常</td></tr>-->
            <!--</table>-->
            <template>
                <el-table
                        :data="tableData"
                        border
                        stripe
                >
                    <el-table-column
                            prop="date"
                            label="名称"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="类型"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="主管"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="状态"
                            align="center">
                    </el-table-column>
                </el-table>
            </template>
            <div class="block" style="margin-top: 40px; display: inline-block;">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
        <div class="title" style="margin-top: 36px;">
            <span class="text">机构人员</span>
            <el-button type="primary" @click="handleAdd('add_person')" class="toolBtn">新增</el-button>
        </div>
        <div class="table-wrapper" style="margin-top: 13px; text-align: right;">
            <template>
                <el-table
                        :data="tableData2"
                        border
                        stripe
                >
                    <el-table-column
                            prop="user_name"
                            label="姓名"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="user_num"
                            label="工号"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="position"
                            label="职位"
                            align="center"
                            width="170"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="手机"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center">
                        <template scope="scope">
                            <i class="el-icon-delete" style="color: #FF9900"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <div class="block" style="margin-top: 40px; display: inline-block;">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleAdd(tt) {
                this.$router.push(tt);
            },
        }
    }
</script>

<style>

</style>
