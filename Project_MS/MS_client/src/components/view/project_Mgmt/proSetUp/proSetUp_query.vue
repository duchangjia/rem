<template>
    <div class="proSetUp_query ">
        <current yiji="项目管理" erji="项目立项"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">项目立项</span>
                <div class="titleBtn_wrapper">
                    <el-button type="primary" class="btn-primary" @click="handleAdd">新增</el-button>
                    <el-button type="primary" class="btn-primary" @click="handleDownloadTemplate">立项文件模板下载</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
                <el-form :model="ruleForm" ref="ruleForm">
                    <el-col :sm="12" :md="6">
                        <el-form-item label="机会号">
                            <el-input v-model="ruleForm.oppoNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="项目编号">
                            <el-input v-model="ruleForm.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="项目名称">
                            <el-input v-model="ruleForm.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="部门">
                            <el-input v-model="ruleForm.projImpDepNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="项目经理">
                            <el-input v-model="ruleForm.projImpPm"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="立项状态">
                            <el-select v-model="ruleForm.projAppState">
                                <el-option value="01">xxxx</el-option>
                                <el-option value="01">xxxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <div class="queryButton_wrapper">
                        <el-button class="btn-default" @click="resetForm('ruleForm')">重置</el-button>
                        <el-button class="btn-primary" @click="queryForm">查询</el-button>
                    </div>
                </el-form>
                <el-table :data="projdataList" border stripe style="width: 100%">
                    <el-table-column prop="deptName" label="部门"></el-table-column>
                    <el-table-column prop="proNo" label="项目编号">
                        <template scope="scope">
                            <span class="link" @click="handleInfo(scope.row.proNo)">{{ scope.row.proNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="projName" label="项目名称"></el-table-column>
                    <el-table-column prop="projAppState" label="立项状态" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projstatus" label="项目状态"
                                     :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projIncmConfim" label="收入确认类型" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projImpPmnm" label="项目经理"></el-table-column>
                    <el-table-column prop="sale" label="销售" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projBegDate" label="预计开始日期"
                                     :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projEndDate" label="预计结束日期" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template scope="scope">
                            <i class="el-icon-edit" @click="handleEdit(scope.row.proNo)"></i>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next, jumper"
                               :total="fenye.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import current from "../../../common/current_position.vue";

    const baseURL = "iem_hrm";
    export default {
        data() {
            return {
                ruleForm: {
                    jihuihao: "",
                    proNo: "",
                    proName: "",
                    department: "",
                    manager: "",
                    status: ""
                },
                projdataList: [
                    {
                        deptName: "开发部",
                        proNo: "1111",
                        projName: "前海湾工程",
                        projset: "01",
                        projstatus: "01",
                        shouru: "自费",
                        manager: "马老板",
                        sale: "33212",
                        statrTime: "xxxx",
                        endTime: "xxxx"
                    }
                ],
                fenye: {
                    pageSize: 10,
                    total: 0
                }
            };
        },
        methods: {
            // 新增
            handleAdd() {
                this.$router.push("proSetUp_add");
            },
            // 下载模版
            handleDownloadTemplate() {
            },
            // 重至查询项
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 查询
            queryForm() {
            },
            // 分页
            handleCurrentChange() {
            },
            // 详情
            handleInfo(proNo) {
                console.log(proNo);
                this.$router.push("proSetUp_detail");
            },
            // 编辑
            handleEdit(proNo) {
                this.$router.push("proSetUp_edit");
            },
            // 格式化显示表格
            projApplyStaFormatter() {
            }
        },
        components: {
            current
        }
    };
</script>

<style>

</style>