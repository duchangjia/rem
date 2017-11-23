<template>
    <div class="ticket_argument">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护"></current>
        <el-col :span="24">
            <div class="content-wrapper clearfix">
                <div class="title"><span class="text">公司开票信息维护</span><button class="add" @click="add()">新增</button></div>
                <div class="content clearfix">
                        <el-form :model="custInfo" :inline="true" ref="ruleForm2" class="demo-ruleForm">
                            <el-form-item label="公司名称">
                            <el-select v-model="custInfo.organNo"  placeholder="所属公司" @change="changeCompany" class="m-select">
                                    <el-option v-for="item in companyName" 
                                    :key="item.organNo" 
                                    :label="item.organName" 
                                    :value="item.organNo">
                                    </el-option>
                            </el-select>
                            </el-form-item>
                            <el-button class="toolBtn2 resetBtn" @click="reset()">重置</el-button>
                            <el-button class="toolBtn2" @click="getList()">查询</el-button>
                        </el-form>
                    <el-col :span="24">
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
                    </el-col>
                   <el-col :span="24">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :page-size="pagination.pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="pagination.total"
                            v-show="pagination.total>pagination.pageSize"
                            >
                    </el-pagination>
                    </el-col>
                </div>
            </div>
        </el-col>
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

<style lang='stylus' rel='stylesheet/stylus'>
    .ticket_argument
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .demo-ruleForm
            .el-form-item
                margin-bottom:0
        .test
            padding-left: 10px;
        .content-wrapper
            background: #fff
            padding-left: 20px
            padding-right 20px
            .title
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 50px;
                .add
                    width: 120px
                    height 30px
                    margin-top:10px
                    background: #FF9900;
                    border: 1px solid #FF9900;
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height 30px
                    text-align center
                    padding:0
                    float:right
                    border-radius:4px
            .content
                padding: 30px 0;
                .m-select
                    width:330px;
                    .el-input
                        width:330px;
                .text
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #999999;
                    letter-spacing: 0;
                .el-input
                    margin: 0 20px 0 10px;
                    width: 165px;
                    height: 30px;
                    .el-input__inner
                        height 100%
                        &:hover
                            border: 1px solid orange;
                .toolBtn2
                    border-radius: 0;
                    height: 30px;
                    width: 120px;
                    background: #FF9900;
                    border: none;
                    vertical-align: middle;
                    border-radius 4px
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 30px;
                    padding: 0;
                    margin-left:20px;
                    border:1px solid  #ff9900;
                    margin-top: 4px;
                 .resetBtn
                    background:#fff
                    color:#ff9900
                .el-table
                    margin-top:20px;
                .el-icon-delete2, .el-icon-edit
                    color: #ff9900;
                    cursor pointer
                    text-decoration underline
                .el-icon-delete2
                    margin-left 20px
                .el-pagination {
                        text-align:right;
                        margin-top:30px;
                        padding-right:45px;
                .el-pagination__total {
                    height: 24px;
                }
                .btn-prev, .el-pagination__jump, .btn-next {
                    height: 24px;
                    width: 24px;
                    line-height: 24px;
                }

                .el-pager li {
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                }

                .el-pager li.active {
                    background: #ff9900;
                    border: 1px solid #ff9900;
                }

                .el-pager li:hover, button:hover {
                    color: #ff9900;
                }

                .el-pagination__jump {
                    .el-pagination__editor {
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        margin: 0 3px;
                        text-indent: 0;
                    }
                }
                .el-message-box__btns .el-button--primary{
                    background:#ff9900;
                    border-color:#ff900;
                    color:#fff;
                }
                
    }
</style>
