<template>
    <div class="assetUse_query">
        <current yiji="资产管理" erji="资产使用管理"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">资产使用管理</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="search">
                        <el-col :span="6">
                            <span class="text">资产名称</span><el-input class="search_common"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">资产类型</span><el-select v-model="value" class="search_common"></el-select>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">资产编号</span><el-input class="search_common"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <span class="text">工号</span><el-input class="search_common"></el-input>
                        </el-col>
                        <el-button class="toolBtn" @click="search">查询</el-button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th">{{th}}</td></tr>
                        <tr v-for="tds in table.td">

                            <td><i class="el-icon-edit" @click="link"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="el-icon-delete2" @click="del"></i></td>
                        </tr>
                    </table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="fenye.pageNum"
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
    export default {
        data() {
            return {
                value: '',
                table: {
                    th: ['使用编号', '资产编号', '资产类型', '资产名称', '数量', '使用类型', '公司名称', '申请部门', '工号', '姓名', '发生时间', '操作'],
                    td: []
                },
                fenye: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 100,
                },
            }
        },
        methods: {
            handleSizeChange() {

            },
            handleCurrentChange() {

            },
            search() {

            },
            link() {

            },
            del() {

            },
            add() {
              this.$router.push('add_assetUse')
            },
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
                    font-size: 14px;
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
                        line-height: 40px;
                    tr:nth-child(odd)
                        background: #F8F8F8;
                    tr:hover
                        width: 100%;
                        height: 40px;
                        display: flex;
                        line-height: 40px;
                        background: #EEF1F6;
                    tr:first-child
                        background: #F4F4F4;
                        box-shadow: inset 0 1px 0 0 #EEEEEE;
                        color #666
                    td
                        flex: 2
                        text-align: center;
                    td:nth-child(1)
                        flex:3
                    td:nth-child(3)
                        flex 3
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
