<template>
        <div class="holiday_argument query_wrapper">
            <current yiji="参数管理" erji="业务参数" sanji="免签节假日维护"></current>
            <div class="queryContent_wrapper">
                <div class="titleBar">
                    <span class="title-text">免签节假日维护</span>
                    <div class="titleBtn_wrapper">
                        <el-button class="btn-primary" @click="add">新增</el-button>
                    </div>
                </div>
                <div class="queryContent_inner">
                    <el-form class="demo-ruleForm">
                        <el-col :sm="24" :md="9">
                            <el-form-item label="日期">
                                <el-date-picker type="date" placeholder="选择日期" v-model="content.date1">

                                </el-date-picker><i>&nbsp;&nbsp;-&nbsp;&nbsp;</i><el-date-picker type="date" v-model="content.date2" placeholder="选择日期">

                            </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="12" :md="6">
                            <el-form-item label="类型">
                                <el-select v-model="content.value" placeholder="选择日期类型">
                                    <el-option
                                            label="全部"
                                            value="99">
                                    </el-option>
                                    <el-option
                                            label="法定节假日"
                                            value="1">
                                    </el-option>
                                    <el-option
                                            label="正常工作日"
                                            value="2">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <div class="queryButton_wrapper">
                            <el-button class="resetform btn-default" @click="reset">重置</el-button>
                            <el-button class="btn-primary" @click="search(content.date1, content.date2, content.value)">查询</el-button>
                        </div>
                    </el-form>

                    <el-table :data="table.td" border stripe style="width: 100%">
                        <el-table-column prop="dayDate" label="日期" :formatter="formatDate1">
                            <!--<template scope="scope">-->
                                <!--<span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>-->
                            <!--</template>-->
                        </el-table-column>
                        <el-table-column prop="dayFlag" label="类型" :formatter="percentRateFormatter"></el-table-column>
                        <el-table-column prop="remark" label="备注"></el-table-column>
                        <el-table-column prop="createdBy" label="创建ID"></el-table-column>
                        <el-table-column prop="createdDate" label="创建时间"></el-table-column>
                        <el-table-column label="操作">
                            <template scope="scope">
                                <!--<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>-->
                                <i class="el-icon-delete2" @click="del(scope.row.dayDate)"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-size="fenye.pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="fenye.total">
                    </el-pagination>
                </div>
            </div>
        </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    import moment from 'moment'
    export default {
        data() {
          return {
              content: {
                date1: '',
                date2: '',
                value: '',
              },
              table: {
                  th:['日期', '类型', '备注', '创建ID', '创建时间', '操作'],
                  td:[

                  ]
              },
              fenye: {
                  total:0,
                  pageSize: 10,
              }
          }
        },
        created() {
          let self = this
          self.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList')
              .then(res => {
                  self.table.td = res.data.data.list.map(item=>{
                      return {
                          createdBy: item.createdBy,
                          createdDate: item.createdDate ,
                          dayDate: item.dayDate,
                          dayFlag: item.dayFlag,
                          remark: item.remark,
                      }
                  })
                  self.fenye.total = res.data.data.total
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
                let self = this
                let data = {
                    pageNum: val,
                    pageSize: self.fenye.pageSize,
                    startDate: this.content.date1==''?'':moment(this.content.date1).format('YYYYMMDD'),
                    endDate: this.content.date2==''?'':moment(this.content.date2).format('YYYYMMDD'),
                    dayFlag: this.content.value=='99'?'':this.content.value,
                }
                self.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList',{params:data})
                    .then(res => {
                        self.table.td = res.data.data.list.map(item=>{
                            return {
                                createdBy: item.createdBy,
                                createdDate: item.createdDate ,
                                dayDate: item.dayDate,
                                dayFlag: item.dayFlag,
                                remark: item.remark,
                            }
                        })
                        self.fenye.total = res.data.data.total
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            search(value1,value2,type) {
                let self = this
                let data = {
                    startDate: value1==''?'':moment(value1).format('YYYYMMDD'),
                    endDate: value2==''?'':moment(value2).format('YYYYMMDD'),
                    dayFlag: type=='99'?'':type,
                }
                this.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList', {params:data})
                    .then(res => {
                        console.log(res,data)
                        if(res.data.data==''){
                            self.$message({
                                message: res.data.retMsg,
                                type: 'info'
                            });
                            self.table.td = []
                            self.fenye.total = 0
                        }else {
                            self.table.td = res.data.data.list.map(item=>{
                                return {
                                    createdBy: item.createdBy,
                                    createdDate: item.createdDate ,
                                    dayDate: item.dayDate,
                                    dayFlag: item.dayFlag,
                                    remark: item.remark,
                                }
                            })
                            self.fenye.total = res.data.data.total
                        }
                    })
                    .catch(e => {
                        self.$message({
                            message: '查询失败,请稍后再试',
                            type: 'error'
                        });
                        console.log(e)
                    })
            },
            reset() {
                this.content.date1 = ''
                this.content.date2 = ''
                this.content.value = ''
                let self = this
                self.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList')
                    .then(res => {
                        self.table.td = res.data.data.list.map(item=>{
                            return {
                                createdBy: item.createdBy,
                                createdDate: item.createdDate ,
                                dayDate: item.dayDate,
                                dayFlag: item.dayFlag,
                                remark: item.remark,
                            }
                        })
                        self.fenye.total = res.data.data.total
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            add() {
                this.$router.push('add_holiday')
            },
            del(value) {
                let self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let date = moment(value).format('YYYYMMDD')
                    this.$axios.get(`/iem_hrm/visaFreeHoliday/deleteVisaFreeHoliday/${date}`)
                        .then(res => {
                            let result = res.data.retMsg
                            if('操作成功'===result){
                                self.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                self.$axios.get('/iem_hrm/visaFreeHoliday/queryVisaFreeHoliayList')
                                    .then(res => {
                                        self.table.td = res.data.data.list.map(item=>{
                                            return {
                                                createdBy: item.createdBy,
                                                createdDate: item.createdDate ,
                                                dayDate: item.dayDate,
                                                dayFlag: item.dayFlag,
                                                remark: item.remark,
                                            }
                                        })
                                        self.fenye.total = res.data.data.total
                                    })
                                    .catch(e=>{
                                        console.log(e)
                                    })
                            }else{
                                self.$message({
                                    message: result,
                                    type: 'error'
                                });
                            }
                        })
                        .catch(e => {
                            this.$message({
                                type: 'error',
                                message: '删除失败,请稍后再试'
                            });
                            console.log(e)
                        })
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            },
            percentRateFormatter(row, column) {
                return row.dayFlag == '1' ? '法定节假日' : '正常工作日';
            },
            formatDate1(row, column) {
                return moment(row.dayDate).format('YYYY-MM-DD')
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

<!--<style lang='stylus' rel='stylesheet/stylus'>-->
    <!--.holiday_argument-->
        <!--padding: 0 0 20px 20px;-->
        <!--overflow: hidden;-->
        <!--position: relative;-->
        <!--.test-->
            <!--padding-left: 10px;-->
        <!--.content-wrapper-->
            <!--background: #fff;-->
            <!--padding-left: 20px;-->
            <!--padding-right 20px-->
            <!--height: 824px;-->
            <!--.title-->
                <!--font-family: PingFangSC-Regular;-->
                <!--font-size: 16px;-->
                <!--color: #333333;-->
                <!--letter-spacing: 0;-->
                <!--height: 50px;-->
                <!--line-height: 50px;-->
                <!--border-bottom: 1px solid #f4f4f4;-->
                <!--position relative-->
                <!--.text-->
                    <!--border-bottom:2px solid black;-->
                    <!--display: inline-block;-->
                    <!--height: 50px;-->
                <!--.add-->
                    <!--width: 120px-->
                    <!--height 30px-->
                    <!--background: #FF9900;-->
                    <!--border: 1px solid #FF9900;-->
                    <!--outline none-->
                    <!--border-radius 4px-->
                    <!--font-family: PingFangSC-Regular;-->
                    <!--font-size: 14px;-->
                    <!--color: #FFFFFF;-->
                    <!--line-height 30px-->
                    <!--text-align center-->
                    <!--position absolute-->
                    <!--right 0px-->
                    <!--bottom 10px-->
            <!--.content-->
                <!--padding-top: 30px;-->
                <!--.search-->
                    <!--i-->
                        <!--margin 0 10px-->
                    <!--span-->
                        <!--margin-right 10px-->
                        <!--color #999-->
                    <!--.special-->
                        <!--margin-left 80px-->
                    <!--.el-date-editor-->
                        <!--width: 165px-->
                        <!--height: 30px-->
                        <!--.el-input__inner-->
                            <!--width 100%-->
                            <!--height 100%-->
                            <!--&:hover-->
                                <!--border-color #ff9900-->
                            <!--&:focus-->
                                <!--border-color #ff9900-->
                    <!--.el-select-->
                        <!--width 165px-->
                        <!--height 30px-->
                        <!--.el-input-->
                            <!--height 100%-->
                            <!--.el-input__inner-->
                                <!--width 100%-->
                                <!--height 100%-->
                                <!--&:hover-->
                                    <!--border-color #ff9900-->
                                <!--&:focus-->
                                    <!--border-color #ff9900-->
                <!--.button-->
                    <!--margin 0px 0 30px 0-->
                    <!--text-align center-->
                    <!--clear both-->
                    <!--button-->
                        <!--width: 120px-->
                        <!--height 30px-->
                        <!--background: #FF9900;-->
                        <!--border: 1px solid #FF9900;-->
                        <!--outline none-->
                        <!--border-radius 4px-->
                        <!--font-family: PingFangSC-Regular;-->
                        <!--font-size: 14px;-->
                        <!--color: #FFFFFF;-->
                        <!--line-height 30px-->
                        <!--text-align center-->
                    <!--.special_1-->
                        <!--background: #FFFFFF;-->
                        <!--color #FF9900-->
                        <!--margin-right 20px-->
                <!--table-->
                    <!--display: flex;-->
                    <!--width: 100%;-->
                    <!--margin-top: 30px;-->
                    <!--margin-bottom: 30px;-->
                    <!--font-family: PingFangSC-Regular;-->
                    <!--font-size: 14px;-->
                    <!--color: #333;-->
                    <!--letter-spacing: 0;-->
                    <!--flex-wrap: wrap;-->
                    <!--border: 1px solid #f0f0f0;-->
                    <!--border-collapse: collapse;-->
                    <!--td-->
                        <!--border: 1px solid #f0f0f0;-->
                    <!--tr-->
                        <!--width: 100%;-->
                        <!--min-height: 40px;-->
                        <!--display: flex;-->
                        <!--line-height @min-height-->
                    <!--tr:nth-child(odd)-->
                        <!--background: #F8F8F8;-->
                    <!--tr:hover-->
                        <!--width: 100%;-->
                        <!--min-height: 40px;-->
                        <!--display: flex;-->
                        <!--background: #EEF1F6;-->
                        <!--line-height @min-height-->
                    <!--tr:first-child-->
                        <!--background: #F4F4F4;-->
                        <!--box-shadow: inset 0 1px 0 0 #EEEEEE;-->
                        <!--color #666-->
                    <!--td-->
                        <!--flex: 1;-->
                        <!--text-align center-->
                <!--.el-icon-delete2-->
                    <!--color: #ff9900;-->
                    <!--cursor pointer-->
        <!--.el-pagination-->
            <!--position: absolute;-->
            <!--right: 81px;-->
            <!--/*bottom:40px;*/-->
            <!--.el-pagination__total-->
                <!--height 24px-->
            <!--.btn-prev, .el-pagination__jump, .btn-next-->
                <!--height 24px-->
                <!--width 24px-->
                <!--line-height 24px-->
            <!--.el-pager li-->
                <!--width: 24px-->
                <!--height: 24px-->
                <!--line-height 24px-->
            <!--.el-pager li.active-->
                <!--background: #ff9900;-->
                <!--border 1px solid #ff9900-->
            <!--.el-pager li:hover, button:hover-->
                <!--color #ff9900-->
            <!--.el-pagination__jump-->
                <!--.el-pagination__editor-->
                    <!--width: 24px-->
                    <!--height: 24px-->
                    <!--line-height 24px-->
                    <!--margin 0 3px-->
                    <!--text-indent 0-->
            <!--.el-pagination__editor:focus-->
                <!--outline none-->
                <!--border-color #ff9900-->
        <!--_:-ms-lang(x), td-->
            <!--display: flex;-->
            <!--align-items center-->
            <!--justify-content center-->

<!--</style>-->
