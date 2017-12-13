<template>
    <div class="historicalsalary_mgmt">
        <current yiji="历史薪酬查询" erji="工资查询">
        </current>
        <div class="content-wrapper">
            <el-col :span="24" class="titlebar">
                <span class="title-text">工资查询</span>
                <el-button type="primary" @click="handleExport" class="toolBtn">导出</el-button>
            </el-col>
            <el-col :span="24" class="querybar" style="padding:10px 0 0 0;">
                <el-form :inline="true" :model="filters">
                    <el-col :span="6">
                        <el-form-item label="类别">
                            <el-select v-model="filters.batchType" clearable placeholder="请选择类别">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="名称">
                            <el-input v-model="filters.batchName" placeholder="请输入名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="工号">
                            <el-input v-model="filters.userNo" placeholder="请输入工号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="姓名">
                            <el-input v-model="filters.userName" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :span="6">
                    <el-form-item style="margin-left:10px;">
                        <el-button type="primary" @click="handleQuery" class="queryBtn">查询</el-button>
                    </el-form-item>
                    </el-col> -->
                    <el-col :span="24" class="button-wrap">
                        <el-button class="resetBtn" @click="handleReset">重置</el-button>
                        <el-button class="queryBtn" @click="handleQuery">查询</el-button>
                    </el-col>
                </el-form>
            </el-col>
            <el-table stripe :data="assetInfoList" border stripe style="width: 100%">
                <el-table-column align="center" prop="batchName" label="名称" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="userNo" label="工号" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="userName" label="姓名" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="wagesBase" label="基础工资" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="wagesPerf" label="绩效工资" min-width = "120px">   
                </el-table-column>
                <el-table-column align="center" prop="payBonus" label="当月奖金(+)" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="pension" label="当月补贴(+)"  min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="otherPension" label="其他奖金和补贴"  min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="payCut" label="当月扣款(-)" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="payAdjust" label="当月调整(+)" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="perPublicFund" label="个人公积金"  min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="perSocialPay" label="个人社保" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="payTax" label="个人扣税部分" min-width = "120px">
                </el-table-column>
                <el-table-column align="center" prop="realHair" label="合计(实发)" min-width = "120px">
                </el-table-column>
            </el-table>
            <el-pagination class="toolbar" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="total,prev, pager, next, jumper" :total="totalRows">
            </el-pagination>
            <!-- <el-pagination class="toolbar" @current-change="handleCurrentChange" :page-size="pageSize" layout="prev, pager, next, jumper" :total="totalRows" >
            </el-pagination> -->
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
import current from "../../common/current_position.vue";
export default {
    data() {
        return {
            filters: {
                batchType: "",
                batchName: "",
                userNo: "",
                userName: ""
            },
            pageNum: 1,
            pageSize: 10,
            totalRows: 0,
            exportParams: {},
            assetInfoList: [],
            options: [{
                value: '01',
                label: '工资'
            }, {
                value: '02',
                label: '奖金'
            }, {
                value: '03',
                label: '福利'
            }],
            value: ''
        };
    },
    components: {
        current
    },
    created() {
        this.filters.userNo = "";
        this.filters.userName = "";
        this.filters.batchType = "";
        this.filters.batchName = "";
        this.getHistoricalSalary(); //初始查询历史薪酬
    },
    methods: {
        getHistoricalSalary() {
            const self = this;
            let params = {
                pageNum: self.pageNum,
                pageSize: self.pageSize,
                userNo: self.filters.userNo,
                userName: self.filters.userName,
                batchType: self.filters.batchType,
                batchName: self.filters.batchName
            };
            console.log("batchType:" + params.batchType);
            console.log("pageNum:" + params.pageNum + "pageSize" + params.pageSize);
            self.$axios
                .get("/iem_hrm/EpCustPayFlow/queryEpCustPayFlows", { params: params })
                .then(res => {
                    console.log(res);
                    self.assetInfoList = res.data.data.list;
                    self.pageNum = params.pageNum;
                    self.pageSize = res.data.data.pageSize;
                    self.totalRows = res.data.data.total;
                    self.exportParams = params;
                    console.log(self.assetInfoList);

                    // self.totalRows = Number(res.data.data.total);
                })
                .catch(() => {
                    console.log("error");
                });
        },

        handleCurrentChange(val) {
            this.pageNum = val;
            this.getHistoricalSalary(); //分页查询员工列表
        },
        handleQuery() {
            // console.log(
            //  "userNo:" + self.filters.userNo + " userName:" + self.filters.userName
            //  );
            this.getHistoricalSalary(); //根据条件查询员工列表
        },
        handleExport() {
            const self = this;
            console.log("执行导出" + this.exportParams.pageNum);
            this.$axios
                .get("/iem_hrm/EpCustPayFlow/exportEpCustPayFlows", { params: this.exportParams, responseType: 'blob' })
                .then((response) => {
                    console.log(response);
                    const fileName = "历史薪酬查询.xls"; 
                    const blob = response.data;

                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {

                        window.navigator.msSaveOrOpenBlob(blob, fileName);
                    } else {
                        let elink = document.createElement('a'); // 创建a标签
                        elink.download = fileName;
                        elink.style.display = 'none';
                        elink.href = URL.createObjectURL(blob);
                        document.body.appendChild(elink);
                        elink.click(); // 触发点击a标签事件
                        document.body.removeChild(elink);
                    }
                }).catch((e) => {
                    console.error(e)
                    self.$message({ message: '下载失败', type: 'error' });
                })
        },
        handleReset(){
             this.filters.userNo = "";
             this.filters.userName = "";
              this.filters.batchType = "";
             this.filters.batchName = "";
        }
    }
};
</script>
<style>
.historicalsalary_mgmt {
    padding: 0 0 20px 20px;
}
</style>