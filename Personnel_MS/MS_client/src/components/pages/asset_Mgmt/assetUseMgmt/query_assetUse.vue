<template>
    <div class="assetUse_query">
        <current yiji="资产管理" erji="资产使用管理"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">资产使用管理</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="search">
                        <el-col :span="6">
                            <span class="text">资产名称</span><el-input class="search_common" v-model="searchInfo.assetName"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">资产类型</span><el-select class="search_common" v-model="searchInfo.assetType">
                            <el-option label="办公用品" value="01"></el-option>
                            <el-option label="电脑" value="02"></el-option>
                            <el-option label="手机" value="03"></el-option>
                            <el-option label="后勤用品" value="04"></el-option>
                            <el-option label="数码相机" value="05"></el-option>
                        </el-select>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">资产编号</span><el-input class="search_common" v-model="searchInfo.assetNo"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">工号</span><el-input class="search_common" v-model="searchInfo.applyUserNo"></el-input>
                        </el-col>
                        <el-button class="toolBtn" @click="search">查询</el-button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th">{{th}}</td></tr>
                        <tr v-for="tds in table.td">
                            <td @click="link(tds.applyNo)">{{tds.applyNo}}</td>
                            <td>{{tds.assetNo}}</td>
                            <td>{{tds.assetType}}</td>
                            <td>{{tds.assetName}}</td>
                            <td>{{tds.applyNum}}</td>
                            <td>{{tds.applyType}}</td>
                            <td>{{tds.organNo}}</td>
                            <td>{{tds.derpNo}}</td>
                            <td>{{tds.applyUserNo}}</td>
                            <td>{{tds.custName}}</td>
                            <td>{{tds.applyTime | formatDate}}</td>
                            <td><i class="el-icon-edit" @click="edit(tds.applyNo)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="el-icon-delete2" @click="del(tds.applyNo)"></i></td>
                        </tr>
                    </table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-size="fenye.pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="fenye.total">
                    </el-pagination>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue"
    import moment from 'moment'
    export default {
        data() {
            return {
                searchInfo:{
                    assetName:'',
                    assetType:'',
                    assetNo:'',
                    applyUserNo:'',
                },
                table: {
                    th: ['使用编号', '资产编号', '资产类型', '资产名称', '数量', '使用类型', '公司名称', '申请部门', '工号', '姓名', '发生时间', '操作'],
                    td: [
                        {
                            num:  1111
                        }
                    ]
                },
                fenye: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 100,
                },
            }
        },
        created() {
          let self = this
          self.$axios.get('/iem_hrm/assetUse/queryAssUseList')
              .then(res=>{
                  self.table.td = res.data.data.list
                  self.fenye.total = res.data.data.total
                  self.fenye.pageSize = res.data.data.pageSize
                  self.fenye.pageNum = res.data.data.pageNum
              })
              .catch(e=>{
                  console.log(e)
              })
        },
        methods: {
            handleSizeChange() {

            },
            handleCurrentChange() {

            },
            search() {
                let self = this
                let params = {}
                params.assetName = this.searchInfo.assetName
                params.assetType = this.searchInfo.assetType
                params.assetNo = this.searchInfo.assetNo
                params.applyUserNo = this.searchInfo.applyUserNo
                var data = {}
                for(var name in params) {
                    if(params[name]) {
                        data[name] = params[name]
                    }
                }
                console.log(data)
                this.$axios.get('/iem_hrm/assetUse/queryAssUseList', {params:data})
                    .then(res=>{
                        console.log(1111)
                        console.log(res)
                        self.table.td = res.data.data.list
                        self.fenye.total = res.data.data.total
                        self.fenye.pageSize = res.data.data.pageSize
                        self.fenye.pageNum = res.data.data.pageNum
                    })
                    .catch(e=>{
                        console.log(e)
                    })
//                if(!assetName&&assetType&&!assetNo&&!applyUserNo){
//                    this.$axios.get('/iem_hrm/assetUse/queryAssUseList', {params:{assetType}})
//                        .then(res=>{
//                            self.table.td = res.data.data.list
//                            self.fenye.total = res.data.data.total
//                            self.fenye.pageSize = res.data.data.pageSize
//                            self.fenye.pageNum = res.data.data.pageNum
//                        })
//                        .catch(e=>{
//                            console.log(e)
//                        })
//                }
//                if(!assetName&&!assetType&&assetNo&&!applyUserNo){
//                    this.$axios.get('/iem_hrm/assetUse/queryAssUseList', {params:{assetNo}})
//                        .then(res=>{
//                            self.table.td = res.data.data.list
//                            self.fenye.total = res.data.data.total
//                            self.fenye.pageSize = res.data.data.pageSize
//                            self.fenye.pageNum = res.data.data.pageNum
//                        })
//                        .catch(e=>{
//                            console.log(e)
//                        })
//                }

            },
            link(applyNo) {
                this.$router.push({name:'detail_assetUse', query:{applyNo}})
            },
            edit(applyNo) {
                this.$router.push({name:'edit_assetUse', query:{applyNo}})
            },
            del(value) {
                let self = this
                this.$axios.get('/iem_hrm/assetUse/delAssUse/'+value)
                    .then(res=>{
                        let result = res.data.retMsg
                        if("操作成功"===result){
                            self.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            self.$axios.get('/iem_hrm/assetUse/queryAssUseList')
                                .then(res=>{
                                    self.table.td = res.data.data.list
                                    self.fenye.total = res.data.data.total
                                    self.fenye.pageSize = res.data.data.pageSize
                                    self.fenye.pageNum = res.data.data.pageNum
                                })
                                .catch(e=>{
                                    console.log(e)
                                })
                        }else {
                            self.$message({
                                message: result,
                                type: 'error'
                            });
                        }
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            add() {
              this.$router.push('add_assetUse')
            },
        },
        filters: {
            formatDate1(time) {
                return moment(time).format('YYYY-MM-DD')
            },
            formatDate(time) {
                return moment(time).format('YYYY-MM-DD hh:mm:ss')
            }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .assetUse_query
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            height: 746px;
            .title
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 80px;
                .add
                    width: 120px
                    height 40px
                    background: #FF9900;
                    border: 1px solid #FF9900;
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height 40px
                    text-align center
                    position absolute
                    right 0px
                    bottom 20px
            .content
                padding-top: 42px;
                overflow hidden
                .search
                    overflow hidden
                    text-align center
                    .text
                        color #999
                        font-size 14px
                        margin-right 10px
                    .el-input, .el-select
                        width 200px
                        .el-input__inner
                            width 100%
                        .el-input__inner:hover
                            border-color #f90
                    .toolBtn
                        border-radius: 0;
                        height: 40px;
                        width: 120px;
                        background: #FF9900;
                        border: none;
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color #fff
                        margin 40px auto 0 auto
                table
                    display: flex;
                    width: 100%;
                    margin-top: 40px;
                    margin-bottom: 40px;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #333;
                    letter-spacing: 0;
                    flex-wrap: wrap;
                    border: 1px solid #f0f0f0;
                    border-collapse: collapse;
                    td
                        border: 1px solid #f0f0f0;
                    tr
                        width: 100%;
                        height: 40px;
                        display: flex;
                        box-sizing border-box
                        line-height: 40px;
                    tr:nth-child(odd)
                        background: #F8F8F8;
                    tr:hover
                        background: #EEF1F6;
                    tr:first-child
                        background: #F4F4F4;
                        font-size: 14px;
                        box-shadow: inset 0 1px 0 0 #EEEEEE;
                        color #999
                    td
                        flex: 3
                        text-align: center;
                    td:nth-child(5)
                        flex 2
                    td:nth-child(12)
                        flex 2
                    td:nth-child(7)
                        flex 5
                    td:nth-child(8)
                        flex 5
                    td:nth-child(11)
                        flex 5
                    td:nth-child(1)
                        flex 4
                .el-icon-delete2, .el-icon-edit
                    color: #ff9900;
                    cursor pointer
                    text-decoration underline
        .el-pagination
            position: absolute;
            right: 45px;
            bottom:40px;
            .el-pagination__total
                height 24px
            .btn-prev, .el-pagination__jump, .btn-next
                height 24px
                width 24px
                line-height 24px
            .el-pager li
                width: 24px
                height: 24px
                line-height 24px
            .el-pager li.active
                background: #ff9900;
                border 1px solid #ff9900
            .el-pager li:hover, button:hover
                color #ff9900
            .el-pagination__jump
                .el-pagination__editor
                    width: 24px
                    height: 24px
                    line-height 24px
                    margin 0 3px
                    text-indent 0
            .el-pagination__editor:focus
                outline none
                border-color #ff9900
        _:-ms-lang(x), td
            display: flex;
            align-items center
            justify-content center



</style>
