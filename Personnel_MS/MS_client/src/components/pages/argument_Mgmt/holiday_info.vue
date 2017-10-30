<template>
    <div class="holiday_argument">
        <current yiji="参数管理" erji="业务参数" sanji="免签节假日维护" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">免签节假日维护</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="search"><span>日期</span><el-date-picker type="date" placeholder="选择日期" v-model="content.date1"></el-date-picker><i>-</i><el-date-picker type="date" v-model="content.date2" placeholder="选择日期"></el-date-picker>
                        <span class="special">类型</span><el-select v-model="value"></el-select>
                    </div>
                    <div class="button">
                        <button class="special_1">重置</button>
                        <button>查询</button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th">{{th}}</td></tr>
                        <tr v-for="tds in table.td">
                            <td>{{tds.dayDate}}</td>
                            <td>{{tds.dayFlag}}</td>
                            <td>{{tds.remark}}</td>
                            <td>{{tds.createdBy}}</td>
                            <td>{{tds.createdDate}}</td>
                            <td><i class="el-icon-delete2" @click="del"></i></td>
                        </tr>
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
              value: '',
              content: {
                date1: '',
                date2: '',
              },
              table: {
                  th:['日期', '类型', '备注', '创建ID', '创建时间', '操作'],
                  td:[
                      {
                          data: '2010-1-1',
                          type: 'xxx',
                          mark: 'TTT',
                          createId: 'XXXXXXXXXX',
                          createTime: '2010-1-1',
                      },
                      {
                          data: '2010-1-1',
                          type: 'xxx',
                          mark: 'TTT',
                          createId: 'XXXXXXXXXX',
                          createTime: '2010-1-1',
                      },]  }
          }
        },
        created() {
          let self = this
          self.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList')
              .then(res => {
                console.log(res)
                  self.table.td = res.data.data.models.map(item=>{
                      return {
                          createdBy: item.createdBy,
                          createdDate: item.createdDate,
                          dayDate: item.dayDate,
                          dayFlag: item.dayFlag,
                          remark: item.remark,
                      }
                  })
              })
              .catch(e=>{
                  console.log(e)
              })
        },
        methods: {
            handleSizeChange(val) {
                console.log(val)
            },
            handleCurrentChange(val) {
                console.log(val)
            },
            add() {
                this.$router.push('add_holiday')
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
    .holiday_argument
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            height: 824px;
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
                .search
                    i
                        margin 0 10px
                    span
                        margin-right 30px
                    .special
                        margin-left 80px
                    .el-date-editor
                        width: 200px
                        height: 40px
                        .el-input__inner
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
                                height 100%
                                &:hover
                                    border-color #ff9900
                                &:focus
                                    border-color #ff9900
                .button
                    padding-left 380px
                    margin 40px 0px
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
                        flex: 1;
                        text-align center
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
