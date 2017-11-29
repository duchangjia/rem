<template>
    <div class="agency_argument query_wrapper">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">机构CCC管理</span>
                <div class="titleBtn_wrapper">
                    <el-button class="btn-primary" @click="add">新增</el-button>
                </div>
            </div>
            <div class="queryContent_inner">
                <el-form class="demo-ruleForm" :inline="true">
                    <el-col :sm="12" :md="6">
                        <el-form-item label="公司名称">
                            <el-select v-model="searchValue" placeholder="请选择机构名称">
                                <el-option v-for="item in searchValueOption" :label="item" :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <div class="queryButton_wrapper">
                            <el-button class="resetform btn-default" @click="reset">重置</el-button>
                            <el-button class="btn-primary" @click="search(searchValue)">查询</el-button>
                        </div>
                    </el-col>
                </el-form>
                <el-table :data="table.td" border stripe style="width: 100%">
                    <el-table-column prop="organNo" label="机构ID">
                        <!--<template scope="scope">-->
                        <!--<span class="link" @click="handleEdit(scope.$index, scope.row)">{{ scope.row.applyNo }}</span>-->
                        <!--</template>-->
                    </el-table-column>
                    <el-table-column prop="organName" label="机构名称"></el-table-column>
                    <el-table-column prop="costType" label="CCC类型" :formatter="percentRateFormatter"></el-table-column>
                    <el-table-column prop="costCode" label="CCC值"></el-table-column>
                    <el-table-column prop="descr" label="备注"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <!--<i class="icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>-->
                            <i class="el-icon-edit" @click="link(scope.row.organNo, scope.row.costType)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="el-icon-delete2" @click="del(scope.row.organNo, scope.row.costType)"></i>
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
    export default {
        data() {
            return {
                searchValue:'',
                searchValueOption:'',
                table: {
                    th:['机构ID', '机构名称', 'CCC类型', 'CCC值', '备注', '操作'],
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
          self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
              .then(res => {
                  self.fenye.total = res.data.data.total
                  self.fenye.pageNum = res.data.data.pageNum
                  self.table.td = res.data.data.list.map(item=>{
                      return {
                          costCode:item.costCode,
                          costType:item.costType,
                          descr:item.descr,
                          organName:item.organName,
                          organNo:item.organNo,
                      }
                  })
              })
              .catch(e => {
                  console.log('获取ccc列表失败',e)
              })
          self.$axios.get('/iem_hrm/organ/getOrganName')
              .then(res => {
                  this.searchValueOption = res.data.data
              })
              .catch(e => {
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
                    pageSize:this.fenye.pageSize,
                    pageNum: val,
                    organName:this.searchValue
                }
                this.$axios.get('/iem_hrm/organ/queryOrgCCCList',{params:data})
                    .then(res=>{
                        self.fenye.total = res.data.data.total
//                        self.fenye.pageNum = res.data.data.pageNum
                        this.table.td = res.data.data.list.map(item=>{
                            return {
                                costCode:item.costCode,
                                costType:item.costType,
                                descr:item.descr,
                                organName:item.organName,
                                organNo:item.organNo,
                            }
                        })
                    })
                    .catch(e=>{
                        console.log('获取分页失败',e)
                    })
            },
            reset() {
                let self = this
                this.searchValue = ''
                self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
                    .then(res => {
                        self.fenye.total = res.data.data.total
//                        self.fenye.pageNum = res.data.data.pageNum
                        self.table.td = res.data.data.list.map(item=>{
                            return {
                                costCode:item.costCode,
                                costType:item.costType,
                                descr:item.descr,
                                organName:item.organName,
                                organNo:item.organNo,
                            }
                        })
                    })
                    .catch(e => {
                        console.log('获取ccc列表失败',e)
                    })
            },
            search(value) {
                let self = this
                self.$axios.get('/iem_hrm/organ/queryOrgCCCList',{params:{organName:value}})
                    .then(res => {
                        let result = res.data.retMsg
                        if("没有此信息!"==result){
                            self.$message({
                                type: 'info',
                                message: result
                            });
                            self.table.td = []
                            self.fenye.total = 0
                        }else {
                            self.fenye.total = res.data.data.total
                            self.fenye.pageNum = res.data.data.pageNum
                            self.table.td = res.data.data.list.map(item=>{
                                return {
                                    costCode:item.costCode,
                                    costType:item.costType,
                                    descr:item.descr,
                                    organName:item.organName,
                                    organNo:item.organNo,
                                }
                            })
                        }
                    })
                    .catch(e => {
                        console.log('获取ccc列表失败',e)
                    })
            },
            add() {
                this.$router.push('add_agency')
            },
            link(num, type) {
                this.$router.push({
                    name: 'modify_agency',
                    query: {
                        organNo: num,
                        costType: type,
                    }
                })
            },
            del(num,costType) {
                let self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.get(`/iem_hrm/organ/delOrgCCC/${num}/${costType}`)
                        .then(res => {
                            let result = res.data.retMsg
                            if(result==="操作成功"){
                                self.$message({
                                    type: 'success',
                                    message: result
                                });
                                self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
                                    .then(res => {
                                        self.fenye.total = res.data.data.total
                                        self.fenye.pageNum = res.data.data.pageNum
                                        self.table.td = res.data.data.list.map(item=>{
                                            return {
                                                costCode:item.costCode,
                                                costType:item.costType,
                                                descr:item.descr,
                                                organName:item.organName,
                                                organNo:item.organNo,
                                            }
                                        })
                                    })
                                    .catch(e => {
                                        console.log('获取ccc列表失败',e)
                                    })

                            }else{
                                self.$message({
                                    type: 'error',
                                    message: result
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
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            percentRateFormatter(row, column) {
                return row.costType ==='01'?'管理CCC':row.costType==='02'?'售前CCC':'项目CCC';
            },
        },
        components: {
            current,
        }
    }
</script>

<!--<style>-->
    <!--.agency_argument {-->
        <!--padding: 0 0 20px 20px;-->
        <!--overflow: hidden;-->
        <!--position: relative;-->
    <!--}-->
    <!--.agency_argument .test{-->
        <!--padding-left: 10px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper{-->
        <!--background: #fff;-->
        <!--padding-left: 20px;-->
        <!--padding-right: 20px;-->
        <!--height: 746px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .title{-->
        <!--font-family: PingFangSC-Regular;-->
        <!--font-size: 16px;-->
        <!--color: #333333;-->
        <!--letter-spacing: 0;-->
        <!--height: 50px;-->
        <!--line-height: 50px;-->
        <!--border-bottom: 1px solid #f4f4f4;-->
        <!--position: relative;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .title .text{-->
        <!--border-bottom:2px solid black;-->
        <!--display: inline-block;-->
        <!--height: 50px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .title .add{-->
        <!--width: 120px;-->
        <!--height: 30px;-->
        <!--background: #FF9900;-->
        <!--border: 1px solid #FF9900;-->
        <!--outline: none;-->
        <!--border-radius: 4px;-->
        <!--font-family: PingFangSC-Regular;-->
        <!--font-size: 14px;-->
        <!--color: #FFFFFF;-->
        <!--line-height: 30px;-->
        <!--text-align: center;-->
        <!--position: absolute;-->
        <!--right: 0px;-->
        <!--bottom: 10px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content{-->
        <!--padding-top: 30px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search{-->
        <!--/*vertical-align: middle;*/-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search .text{-->
        <!--font-family: PingFangSC-Regular;-->
        <!--font-size: 14px;-->
        <!--color: #999999;-->
        <!--letter-spacing: 0;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search .el-select{-->
        <!--margin: 0 20px 0 10px;-->
        <!--width: 165px;-->
        <!--height: 30px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search .el-select .el-input__inner{-->
        <!--width: 100%;-->
        <!--height: 30px;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search input:hover{-->
        <!--border: 1px solid orange;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search .toolBtn2{-->
        <!--border-radius: 0;-->
        <!--height: 30px;-->
        <!--width: 120px;-->
        <!--background: #FF9900;-->
        <!--border: none;-->
        <!--border-radius: 4px;-->
        <!--font-family: PingFangSC-Regular;-->
        <!--font-size: 14px;-->
        <!--color: #FFFFFF;-->
    <!--}-->
    <!--.agency_argument .content-wrapper .content .search .reset{-->
        <!--background: #fff;-->
        <!--border: 1px solid #f90;-->
        <!--color: #f90;-->
        <!--margin-right: 7px;-->
    <!--}-->
    <!--.agency_argument .content table{-->
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
    <!--}-->
    <!--.agency_argument .content table td{-->
        <!--border: 1px solid #f0f0f0;-->
        <!--overflow: hidden;-->
        <!--white-space: nowrap;-->
        <!--text-overflow: ellipsis;-->
    <!--}-->
    <!--.agency_argument .content table tr{-->
        <!--width: 100%;-->
        <!--height: 40px;-->
        <!--display: flex;-->
        <!--line-height: 40px;-->
    <!--}-->
    <!--.agency_argument .content table tr:nth-child(odd){-->
        <!--background: #F8F8F8;-->
    <!--}-->
    <!--.agency_argument .content table tr:hover{-->
        <!--width: 100%;-->
        <!--height: 40px;-->
        <!--display: flex;-->
        <!--line-height: 40px;-->
        <!--background: #EEF1F6;-->
    <!--}-->
    <!--.agency_argument .content table tr:first-child{-->
        <!--background: #F4F4F4;-->
        <!--box-shadow: inset 0 1px 0 0 #EEEEEE;-->
        <!--color: #666;-->
    <!--}-->
    <!--.agency_argument .content table tr td{-->
        <!--flex: 1;-->
        <!--text-align: center;-->
    <!--}-->
    <!--.agency_argument .content table tr td:nth-child(2){-->
        <!--flex:2;-->
    <!--}-->
    <!--.agency_argument .agency_argument .el-pagination{-->
        <!--position: absolute;-->
        <!--right: 0;-->
        <!--bottom:40px;-->
    <!--}-->
    <!--.agency_argument .content .el-icon-delete2, .content .el-icon-edit{-->
        <!--color: #ff9900;-->
        <!--cursor: pointer;-->
    <!--}-->
    <!--.agency_argument _:-ms-lang(x), td {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: center;-->
    <!--}-->
    <!--.agency_argument .el-pagination{-->
        <!--position: absolute;-->
        <!--right: 81px;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pagination__total{-->
        <!--height: 24px;-->
    <!--}-->
    <!--.agency_argument .el-pagination .btn-prev, .agency_argument .el-pagination .el-pagination__jump, .agency_argument .el-pagination .btn-next{-->
        <!--height: 24px;-->
        <!--width: 24px;-->
        <!--line-height: 24px;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pager li{-->
        <!--height: 24px;-->
        <!--width: 24px;-->
        <!--line-height: 24px;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pager li.active{-->
        <!--background: #ff9900;-->
        <!--border: 1px solid #ff9900;-->
        <!--color: #fff !important;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pager li:hover, .agency_argument .el-pagination button:hover{-->
        <!--color: #ff9900;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pagination__jump .el-pagination__editor{-->
        <!--width: 24px;-->
        <!--height: 24px;-->
        <!--line-height: 24px;-->
        <!--margin: 0 3px;-->
        <!--text-indent: 0;-->
    <!--}-->
    <!--.agency_argument .el-pagination .el-pagination__editor:focus{-->
        <!--outline: none;-->
        <!--border-color: #ff9900;-->
    <!--}-->
<!--</style>-->
