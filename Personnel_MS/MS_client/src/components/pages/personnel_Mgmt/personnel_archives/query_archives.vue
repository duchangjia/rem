<template>
    <div class="query_archives">
        <current yiji="人事事务" erji="人事档案"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">人事档案</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="item-wrapper">
                        <span class="text">公司</span><el-select v-model="searchInfo.organName" class="common"></el-select>
                        <span class="text">部门</span><el-select v-model="searchInfo.derpName" class="common"></el-select>
                        <span class="text">姓名</span><el-input placeholder="请输入姓名或工号" v-model="searchInfo.userNoOrcustName"></el-input>
                        <!--<span class="text">工号</span><el-input placeholder="请输入工号" v-model="searchInfo.userNoOrcustName"></el-input>-->
                    </div>
                    <div class="item-wrapper">
                        <span class="text">状态</span><el-select v-model="searchInfo.custStatus" class="common">
                        <el-option label="总公司" value="01"></el-option>
                        <el-option label="分公司" value="02"></el-option>
                        <el-option label="办事处" value="03"></el-option>
                        <el-option label="部门" value="04"></el-option>
                    </el-select>
                    </div>
                    <div class="button">
                        <button class="special_1" @click="reset">重置</button>
                        <button @click="search">查询</button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th" >{{th}}</td></tr>
                        <tr v-for="tds in table.td">
                            <td :title="tds.userNo" @click="detailInfo(tds.userNo)">{{tds.userNo}}</td>
                            <td :title="tds.custName">{{tds.custName}}</td>
                            <td :title="tds.organName">{{tds.organName}}</td>
                            <td :title="tds.derpName">{{tds.derpName}}</td>
                            <td :title="tds.sex">{{tds.sex=='01'?'男':'女'}}</td>
                            <td :title="tds.custPost">{{tds.custPost}}</td>
                            <td :title="tds.mobileNo">{{tds.mobileNo}}</td>
                            <td :title="tds.entryTime">{{tds.entryTime}}</td>
                            <td :title="tds.custStatus">{{tds.custStatus}}</td>
                            <td @click="see" class="see">查看</td></tr>
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
        <div class="dialog-wrapper">

            <el-dialog title="个人资产查询" :visible.sync="dialogTableVisible">
                <div class="tishi">若实际使用的IT资产情况与以下显示信息不符，还请及时与XXXXXX联系核实并更改以确保您名下资产的准确性</div>
                <el-table :data="gridData"
                          stripe
                          border
                          max-height="250"
                          >
                    <el-table-column property="num" label="序号" align="center"></el-table-column>
                    <el-table-column property="propp" label="资产属性" align="center"></el-table-column>
                    <el-table-column property="oldaddress" label="旧编码" align="center"></el-table-column>
                    <el-table-column property="newaddress" label="资产编码" align="center" min-width="150"></el-table-column>
                    <el-table-column property="company" label="公司" align="center"  min-width="250"></el-table-column>
                    <el-table-column property="momey" label="资产类型" align="center" min-width="150"></el-table-column>
                    <el-table-column property="city" label="存放城市" align="center"></el-table-column>
                    <el-table-column property="people" label="使用人" align="center"></el-table-column>
                </el-table>
            </el-dialog>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    export default {
        data() {
          return {
              dialogTableVisible: false,
              gridData: [
                  {
                      num: '111289',
                      propp: 'IT资产',
                      oldaddress: '',
                      newaddress: 'BAB1400898 1518 弄',
                      company: '深圳前海橙色魔方技术有限公司 1518 弄',
                      momey: '笔记本电脑',
                      city: '深圳 1518 弄',
                      people: '张三 1518 弄',
                  },
              ],
              searchInfo: {
                  organName: '',
                  derpName: '',
                  userNoOrcustName: '',
                  custStatus: '',
              },
              table: {
                  th:['工号', '姓名', '公司名称', '部门名称', '性别', '岗位', '手机', '入职时间', '状态', '资产'],
                  td:[
                      {
                          user_No: 'P0000008',
                          user_name: '张三李四王老五',
                          company_name: '深圳前海橙色魔方技术有限公司深圳前海橙色魔方技术有限公司',
                          department_name: '部门名称部门名称',
                          sex: '男',
                          position: 'JAVA开发',
                          phone: '13333333333',
                          in_time: '2019/01/01',
                          status: '离职',
                      },
                      {
                          user_No: 'P0000008',
                          user_name: '张三李四王老五',
                          company_name: '深圳前海橙色魔方技术有限公司',
                          department_name: '部门名称部门名称',
                          sex: '男',
                          position: 'JAVA开发',
                          phone: '13333333333',
                          in_time: '2019/01/01',
                          status: '离职',
                      },]  },
              fenye: {
                  total:0,
                  pageSize:10
              }
          }
        },
        created() {
            let self = this
            self.$axios.get('/iem_hrm/CustInfo/queryCustInfList')
                .then(res => {
                    console.log(res)
                    self.table.td = res.data.data.list
                    this.fenye.total = res.data.data.total
                    this.fenye.pageSize = res.data.data.pageSize
                })
                .catch(e=>{
                    console.log(e)
                })
        },
        components: {
            current
        },
        methods: {
            add() {
                this.$router.push('add_archives')
            },
            handleSizeChange() {

            },
            handleCurrentChange(val) {
                let self = this
                self.$axios.get('/iem_hrm/CustInfo/queryCustInfList',{params:{pageNum:val}})
                    .then(res => {
                        self.table.td = res.data.data.list
                        this.fenye.total = res.data.data.total
                        this.fenye.pageSize = res.data.data.pageSize
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            see() {
                let self = this
                this.dialogTableVisible = true
                self.$axios.get('/iem_hrm/CustInfo/queryCustInfWithAsset/userNo')
                    .then(res => {
                        console.log(res)
                        self.table.td = res.data.data.list
                        this.fenye.total = res.data.data.total
                        this.fenye.pageSize = res.data.data.pageSize
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            detailInfo(userNo) {
                this.$router.push({name:'archives_detail',query:{userNo}})
            },
            reset() {
                let self = this
                self.searchInfo.organName = ''
                self.searchInfo.derpName = ''
                self.searchInfo.userNoOrcustName = ''
                self.searchInfo.custStatus = ''
//                let organNo = '01'
//                let organType = '02'
//                self.$axios.get('/iem_hrm/CustInfo/queryCustInfList/'+organNo+'/'+organType)
//                    .then(res => {
//                        console.log(res)
//                        self.table.td = res.data.data.list
//                        this.fenye.total = res.data.data.total
//                        this.fenye.pageSize = res.data.data.pageSize
//                    })
//                    .catch(e=>{
//                        console.log(e)
//                    })
            },
            search() {
                let self = this
                let custName = self.searchInfo.userNoOrcustName
//                let custStatus = self.searchInfo.custStatus
                console.log(custName)
                self.$axios.get('/iem_hrm/CustInfo/advQueryCustInf', {params:{custName}})
                    .then(res => {
                        console.log(res,111)
                        self.table.td = res.data.data.list
                        this.fenye.total = res.data.data.total
                        this.fenye.pageSize = res.data.data.pageSize
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            }
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .query_archives
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .dialog-wrapper
            .el-dialog--small
                width 85%
                .el-dialog__header
                    background: #f4f4f4;
                    height 60px
                    .el-dialog__close
                        color #f90
            .tishi
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #FF6666;
                padding-bottom 30px
            .el-table .cell, .el-table th>div
                padding 0
        .test
            padding-left: 10px;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            height: 886px;
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
                .item-wrapper
                    padding 0 22px 0 28px
                    margin-bottom 20px
                    .text
                        margin-right 30px
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                    .common
                        margin-right 108px
                    .el-input
                        width 200px
                        height 40px
                        .el-input__inner
                            width 100%
                            height 100%
                            &:hover
                                border-color #ff9900
                            &:focus
                                border-color #ff9900
                    .el-select
                        width 200px
                        height 40px
                        .el-input
                            height 100%
                            .el-input__inner
                                width 100%
                                height 100%
                                &:hover
                                    border-color #ff9900
                                &:focus
                                    border-color #ff9900
                .button
                    margin 40px 0
                    padding-left 380px
                    button
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
                    .special_1
                        background: #FFFFFF;
                        color #FF9900
                        margin-right 20px
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
                    table-layout: fixed
                    td
                        border: 1px solid #f0f0f0;
                        /*white-space: nowrap*/
                        /*overflow hidden*/
                        /*text-overflow ellipsis*/
                    tr
                        width: 100%;
                        min-height: 40px;
                        display: flex;
                        vertical-align middle
                        /*line-height: 40px;*/
                        td:first-child:hover
                            text-decoration underline
                            cursor pointer
                    tr:nth-child(odd)
                        background: #F8F8F8;
                    tr:hover
                        width: 100%;
                        min-height: 40px;
                        display: flex;
                        /*line-height: 40px;*/
                        background: #EEF1F6;
                    tr:first-child
                        background: #F4F4F4;
                        box-shadow: inset 0 1px 0 0 #EEEEEE;
                        color #666
                        td:first-child:hover
                            text-decoration none
                            cursor auto
                    td
                        flex: 1;
                        text-align center
                    td:nth-child(3)
                        flex 4
                    td:nth-child(4)
                        flex 4
                    td:nth-child(1)
                        flex 2
                    td:nth-child(2)
                        flex 2
                    td:nth-child(6)
                        flex 2
                    td:nth-child(7)
                        flex 2
                    td:nth-child(8)
                        flex 2
                    .see
                        color #ff9900
                        cursor pointer
                        &:hover
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
