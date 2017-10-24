<template>
    <div class="ticket_argument">
        <current yiji="参数管理" erji="业务参数" sanji="公司开票信息维护" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">公司开票信息维护</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="search">
                        <span class="text">查询条件</span>
                        <input type="text">
                        <el-button class="toolBtn">查询</el-button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th">{{th}}</td></tr>
                        <tr v-for="tds in table.td"><td v-for="td in tds">{{td}}</td><td><i class="el-icon-delete2" @click="del"></i></td></tr>
                    </table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-size="10"
                            layout="total,prev, pager, next, jumper"
                            :total="100">
                    </el-pagination>
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
                test222:[
                    {
                        color:'orange',
                        content: 1
                    },
                    {
                        color:'yellow',
                        content: 1
                    },
                    {
                        color:'gold',
                        content: 1
                    }
                ],
                table: {
                    th:['公司名称', '纳税人识别号', '银行账户', '账户名称', '操作'],
                    td:[
                        {
                            companyId: '001',
                            userId: '机构名称机构名称机构名称',
                            account: '管理',
                            accountName: 'XXXXXXXXXX',
                        },
                        {
                            companyId: '001',
                            userId: '机构名称机构名称机构名称',
                            account: '管理',
                            accountName: 'XXXXXXXXXX',
                        },]  }
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(val)
            },
            handleCurrentChange(val) {
                console.log(val)
            },
            add() {
                this.$router.push('add_ticket')
            },
            del() {

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
                .text
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #999999;
                    letter-spacing: 0;
                input
                    margin: 0 20px 0 30px;
                    width: 300px;
                    height: 40px;
                    border: 1px solid #EEEEEE;
                    border-radius: 4px;
                    text-indent: 1em;
                    outline: none;
                    vertical-align: middle;
                input:hover
                    border: 1px solid orange;
                .toolBtn
                    border-radius: 0;
                    height: 40px;
                    width: 120px;
                    background: #FF9900;
                    border: none;
                    vertical-align: middle;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
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
                .el-icon-delete2
                    color: #ff9900;
                    cursor pointer
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
