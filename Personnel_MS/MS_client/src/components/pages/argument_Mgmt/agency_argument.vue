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
                            <el-select v-model="searchValue" placeholder="请选择公司名称" @change="selectDep(searchValue)">
                                <el-option v-for="item in searchValueOption" :label="item.organName" :value="item.organNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <el-form-item label="部门名称">
                            <el-select v-model="searchValue2" placeholder="请选择部门名称">
                                <el-option v-for="item in searchValueOption2" :label="item.derpName" :value="item.derpNo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="12" :md="6">
                        <div class="queryButton_wrapper">
                            <el-button class="resetform btn-default" @click="reset">重置</el-button>
                            <el-button class="btn-primary" @click="search(searchValue,searchValue2)">查询</el-button>
                        </div>
                    </el-col>
                </el-form>
                <el-table :data="table.td" border stripe style="width: 100%">
                    <el-table-column prop="derpNo" label="部门ID">
                    </el-table-column>
                    <el-table-column prop="derpName" label="部门名称"></el-table-column>
                    <el-table-column prop="organNo" label="公司ID" v-if="false"></el-table-column>
                    <el-table-column prop="organName" label="公司名称"></el-table-column>
                    <el-table-column prop="costType" label="CCC类型" :formatter="percentRateFormatter"></el-table-column>
                    <el-table-column prop="costCode" label="CCC值"></el-table-column>
                    <el-table-column prop="descr" label="备注"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit" @click="link(scope.row.derpNo, scope.row.costType,scope.row.organNo)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="el-icon-delete2" @click="del(scope.row.derpNo, scope.row.costType,scope.row.organNo)"></i>
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
    import getDeepDerp from '../../../common/GetDeepDerp'
    export default {
        data() {
            return {
                searchValue:'',
                searchValueOption:'',
                searchValue2:'',
                searchValueOption2:'',
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
                  console.log(res.data.data,777777777)
                  if(res.data.data){
                      self.fenye.total = res.data.data.total
                      self.fenye.pageNum = res.data.data.pageNum
                      self.table.td = res.data.data.list.map(item=>{
                          return {
                              costCode:item.costCode,
                              costType:item.costType,
                              descr:item.descr,
                              derpName:item.derpName,
                              organName:item.organName,
                              organNo:item.organNo,
                              derpNo:item.derpNo,
                          }
                      })
                  }
              })
              .catch(e => {
                  console.log('获取ccc列表失败',e)
              })
          self.$axios.get('/iem_hrm/organ/selectCompanyByUserNo')
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
                    organNo:this.searchValue,
                    derpNo:this.searchValue2,
                }
                this.$axios.get('/iem_hrm/organ/queryOrgCCCList',{params:data})
                    .then(res=>{
                        self.fenye.total = res.data.data.total
                        this.table.td = res.data.data.list.map(item=>{
                            return {
                                costCode:item.costCode,
                                costType:item.costType,
                                descr:item.descr,
                                derpName:item.derpName,
                                organName:item.organName,
                                organNo:item.organNo,
                                derpNo:item.derpNo,
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
                this.searchValue2 = ''
                self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
                    .then(res => {
                        self.fenye.total = res.data.data.total
                        self.table.td = res.data.data.list.map(item=>{
                            return {
                                costCode:item.costCode,
                                costType:item.costType,
                                descr:item.descr,
                                derpName:item.derpName,
                                organName:item.organName,
                                organNo:item.organNo,
                                derpNo:item.derpNo,
                            }
                        })
                    })
                    .catch(e => {
                        console.log('获取ccc列表失败',e)
                    })
            },
            selectDep(organNo) {
                let self = this
                self.searchValueOption2 = []
                let data = {organNo}
                this.$axios.get('/iem_hrm/organ/selectChildDeparment',{params:data})
                    .then(res=>{
                        this.searchValue2 = ''
                        res.data.data.forEach(item=>{
                            this.searchValueOption2.push({
                                derpName: item.derpName,
                                derpNo: item.derpNo,
                            })
                            if(item.depList.length!=0){
                                getDeepDerp(item.depList,this.searchValueOption2)
                            }
                        })
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            },
            search(organNo,derpNo) {
                let self = this
                let data = {
                    organNo,derpNo
                }
                self.$axios.get('/iem_hrm/organ/queryOrgCCCList',{params:data})
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
                                    derpName:item.derpName,
                                    organName:item.organName,
                                    organNo:item.organNo,
                                    derpNo:item.derpNo,
                                }
                            })
                        }
                    })
                    .catch(e => {
                        console.log('获取ccc列表失败',e)
                        self.$message({
                            type: 'error',
                            message: '网络超时,请稍后重试！'
                        });
                    })
            },
            add() {
                this.$router.push('add_agency')
            },
            link(num, type,organNo) {
                this.$router.push({
                    name: 'modify_agency',
                    query: {
                        derpNo: num,
                        costType: type,
                        organNo: organNo,
                    }
                })
            },
            del(num,costType,organNo) {
                let self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.get(`/iem_hrm/organ/delOrgCCC/${organNo}/${num}/${costType}`)
                        .then(res => {
                            let result = res.data.retMsg
                            if(result==="操作成功"){
                                self.$message({
                                    type: 'success',
                                    message: result
                                });
                                self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
                                    .then(res => {
                                        if(res.data.data) {
                                            self.fenye.total = res.data.data.total
                                            self.fenye.pageNum = res.data.data.pageNum
                                            self.table.td = res.data.data.list.map(item=>{
                                                return {
                                                    costCode:item.costCode,
                                                    costType:item.costType,
                                                    descr:item.descr,
                                                    derpName:item.derpName,
                                                    organName:item.organName,
                                                    organNo:item.organNo,
                                                    derpNo:item.derpNo,
                                                }
                                            })
                                        }else {
                                            self.table.td = []
                                        }
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

