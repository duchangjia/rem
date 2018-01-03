<template>
    <div class="proIncome_query ">
        <current yiji="项目管理" erji="项目收入"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">项目收入</span>
            </div>
            <div class="queryContent_inner">
                <el-form :model="ruleForm" ref="ruleForm">
                    <el-col :sm="12" :md="9">
                        <el-form-item label="机会号／项目编号／名称" class="large-label">
                            <el-input v-model="ruleForm.jihuihao" class="search_large"  placeholder="机会号／项目编号／名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="收入类型">
                            <el-input v-model="ruleForm.proNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                            <el-form-item label="项目类型">
                                <el-select v-model="ruleForm.projType">
                                    <el-option label="应用系统开发" value="01"></el-option>
                                    <el-option label="软件产品开发" value="02"></el-option>
                                    <el-option label="应用维护升级" value="03"></el-option>
                                    <el-option label="系统集成" value="04"></el-option>
                                    <el-option label="信息系统安全" value="05"></el-option>
                                    <el-option label="咨询服务" value="06"></el-option>
                                    <el-option label="其他" value="07"></el-option>
                                </el-select>
                            </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="9">
                        <el-form-item label="项目经理(PM)" class="large-label">
                            <el-input v-model="ruleForm.department" placeholder="请输入项目经理(PM)" class="search_large"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6" style="text-indent: 1.6em">
                        <el-form-item label="部门">
                            <el-input v-model="ruleForm.manager" placeholder="请输入部门" style="text-indent: 0em"></el-input>
                        </el-form-item>
                    </el-col>
                    <div class="queryButton_wrapper">
                        <el-button class="btn-default" @click="resetForm('ruleForm')">重置</el-button>
                        <el-button class="btn-primary" @click="queryForm">查询</el-button>
                    </div>
                </el-form>
                <el-table :data="projdataList" border stripe style="width: 100%">
                    <el-table-column prop="deptName" label="部门"></el-table-column>
                    <el-table-column prop="proNo" label="机会号">
                        <template scope="scope">
                            <span class="link" @click="handleInfo(scope.row.proNo)">{{ scope.row.proNo }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="projName" label="项目编号"></el-table-column>
                    <el-table-column prop="projset" label="项目名称" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="projstatus" label="项目状态" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="shouru" label="收入确认类型" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column prop="manager" label="账单确认日期" :formatter="projApplyStaFormatter"></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template scope="scope">
                            <el-dropdown @command="handleCommand" trigger="click">
                                <span class="el-dropdown-link cur-pointer">
                                    下拉菜单
                                </span>
                                <el-dropdown-menu slot="dropdown" >
                                    <el-dropdown-item :command="item.url" v-for="item in dropDownList" :key="item.url">{{item.name}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next, jumper" :total="fenye.total">
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
                },
            dropDownList:[
                {
                    name:'导入账单',
                    url:'/importBills'
                },
                {
                    name:'查询账单',
                    url:'/queryBills'
                },
                {
                    name:'收入申报',
                    url:'/incomeDeclaration'
                }
            ]
            };
        },
        created() {

        },
        methods: {
            // 重至查询项
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 查询
            queryForm() {},
            // 分页
            handleCurrentChange() {},
            // 格式化显示表格
            projApplyStaFormatter() {},
            // 下拉菜单
            handleCommand(command){
                this.$router.push(command)
            },
        },
        components: {
            current
        }
    };
</script>

<style>

</style>