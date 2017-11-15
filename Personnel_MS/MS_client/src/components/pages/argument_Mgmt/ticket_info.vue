<template>
    <div class="ticket_argument">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">公司开票信息维护</span><button class="add" @click="add()">新增</button></div>
                <div class="content">
                    <div class="search">
                        <span class="text">公司名称</span>
                        <el-input type="text" placeholder="公司名称" v-model="organName"></el-input>
                        <el-button class="toolBtn2 resetBtn" @click="reset()">重置</el-button>
                        <el-button class="toolBtn2" @click="getList()">查询</el-button>
                    </div>
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
                            <el-table-column align="center" prop="" label="操作" >
                                <template scope="scope">
                                    <i class="el-icon-edit" @click="edit(row.organNo)"></i>
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
                organName:'',
                argumentInfoList:[]
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList(){
                let self = this,
                    params = {};
                    params.organName = this.organName
                    params.pageNum = this.pagination.pageNum
                    params.pageSize = this.pagination.pageSize
                    // argumentInfoList
                    this.$axios.get('/iem_hrm/organBillInfo/queryBillInfoByName',{ params: params })
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
            reset(){
                 this.organName = ''
            },           
            handleCurrentChange(val) {
                let self = this;
                    self.pagination.pageNum = val
                    self.getList()
            },

            add() {
                this.$router.push('add_ticket')
            },
            edit(value) {
                // this.$router.push({name: 'edit_ticket', query:{organNo:value}})
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
                padding-top: 30px;
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
                    border:1px solid  #ff9900
                 .resetBtn
                    background:#fff
                    color:#ff9900
                .el-table
                    margin-top:30px;
                .el-icon-delete2, .el-icon-edit
                    color: #ff9900;
                    cursor pointer
                    text-decoration underline
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
    }
</style>
