<template>
    <div class="query_wrapper">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护"></current>
            <div class="queryContent_wrapper clearfix">
                 <div class="titleBar">
                    <span class="title-text">公司开票信息维护</span>
                    <div class="titleBtn_wrapper">
                        <el-button  @click="add" class="btn-primary">新增</el-button>
                    </div>
                </div>
                <div class="queryContent_inner clearfix">
                    <el-form :model="custInfo" :inline="true" ref="ruleForm2">
                        <el-form-item label="公司名称">
                        <el-select v-model="custInfo.organNo"  placeholder="所属公司" @change="changeCompany" class="m-select">
                                <el-option v-for="item in companyName" 
                                :key="item.organNo" 
                                :label="item.organName" 
                                :value="item.organNo">
                                </el-option>
                        </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn-default" @click="reset()">重置</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="btn-primary" @click="getList()">查询</el-button>
                        </el-form-item>
                    </el-form>
                    <el-table stripe :data="argumentInfoList" >
                        <el-table-column align="center" prop="organName" label="公司名称" >
                        </el-table-column>
                        <el-table-column align="center" prop="organTaxNo" label="纳税人识别号" >
                        </el-table-column>
                        <el-table-column align="center" prop="organAcct" label="银行账户" >
                        </el-table-column>
                        <el-table-column align="center" prop="organAcctname" label="账户名称" >
                        </el-table-column>
                        <el-table-column align="center" prop="isDelete" label="生效状态" :formatter="deleteType">
                        </el-table-column>
                        <el-table-column align="center" prop="" label="操作" >
                            <template scope="scope">
                                <i class="el-icon-edit" @click="edit(scope.row)"></i>
                                <i class="el-icon-delete2" @click="del(scope.row)"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :page-size="pagination.pageSize"
                        layout="total,prev, pager, next, jumper"
                        :total="pagination.total"
                        v-show="pagination.total>pagination.pageSize"
                        >
                    </el-pagination>
                </div>
            </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
            return {
               pagination: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 100
                },
               custInfo: {
                    organName: "",
                    organNo:''
                },
                argumentInfoList:[],
                companyName:[]
                
            }
        },
        mounted(){
             this.getCompanyName()
             this.getList();
        },
        methods: {
            getList(){
                let self = this,
                    params = {};
                    params.organNo = this.custInfo.organNo
                    params.pageNum = this.pagination.pageNum
                    params.pageSize = this.pagination.pageSize
                    // argumentInfoList
                    self.$axios.get('/iem_hrm/organBillInfo/queryBillInfoByName',{ params: params })
                        .then(res => {
                            // console.log(res)
                            console.log(res.data.data.list,'列表信息')
                            self.pagination.total = res.data.data.total
                            self.pagination.pageSize = res.data.data.pageSize
                            self.argumentInfoList = res.data.data.list
                        })
                        .catch(e => {
                            console.log(e)
                        })
            },
            getCompanyName(){
                let self = this;
                    self.$axios.get("/iem_hrm/organ/queryAllCompany").then(res => {
                    let result = res.data.data;
                    self.companyName = result;
                    console.log(self.companyName,'公司名')
                });
            },
            deleteType(row, column){
                 return row.isDelete == "01"
                    ? "生效"
                    : row.isDelete == "02"
                    ?"失效":"异常"
            },
            changeCompany(value){
                let self = this,
                    companyArray = this.companyName;
                for (let i = 0; i < companyArray.length; i++) {
                    if (companyArray[i].organName == value) {
                       self.custInfo.organNo = companyArray[i].organNo;
                    }
                }
            },
            reset(){
                 this.custInfo.organNo = ''
            },           
            handleCurrentChange(val) {
                let self = this;
                    self.pagination.pageNum = val
                    self.getList()
            },
            add() {
                this.$router.push('add_ticket')
            },
            edit(row) {
                console.log(row)
                this.$router.push({name: 'edit_ticket', query:{organNo:row.organNo}})

            },
            del(row){
                let self = this;
                self.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(()=>{
                     self.$axios
                    .put("/iem_hrm/organBillInfo/delBillInf/" + row.organNo)
                    .then(res => {
                    let result = res.data.retMsg;
                    if ("操作成功" === result) {
                        self.$message({
                        message: "删除成功",
                        type: "success"
                        });
                    this.getList()
                    } else {
                        self.$message({
                        message: result,
                        type: "error"
                        });
                    }
                    })
                    .catch(e => {
                    console.log(e);
                    });
                })
                console.log(row);
            }
        },
        components: {
            current,
        }
    }
</script>