<template>
    <div class="agency_argument">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">机构CCC管理</span><button class="add" @click="add">新增</button></div>
                <div class="content">
                    <div class="search">
                        <span class="text">查询条件</span>
                        <input type="text">
                        <el-button class="toolBtn">查询</el-button>
                    </div>
                    <table>
                        <tr><td v-for="th in table.th">{{th}}</td></tr>
                        <tr v-for="tds in table.td">
                            <td>{{tds.organNo}}</td>
                            <td>{{tds.organName}}</td>
                            <td>{{tds.costType==='01'?'管理CCC':tds.costType==='02'?'售前CCC':'项目CCC'}}</td>
                            <td>{{tds.costCode}}</td>
                            <td>{{tds.descr}}</td>
                            <td><i class="el-icon-edit" @click="link(tds.organNo, tds.costType)"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="el-icon-delete2" @click="del(tds.organNo)"></i></td>
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
                table: {
                    th:['机构ID', '机构名称', 'CCC类型', 'CCC值', '备注', '操作'],
                    td:[
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                        {
                            id: '001',
                            name: '机构名称机构名称机构名称',
                            type: '管理',
                            zhi: 'XXXXXXXXXX',
                            mark: 'XXX',
                        },
                    ]
                }
            }
        },
        created() {
          let self = this
          self.$axios.get('/iem_hrm/organ/queryOrgCCCList')
              .then(res => {
                  console.log(res)
                  this.table.td = res.data.data.models.map(item=>{
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
        methods: {
            handleSizeChange(val) {
                console.log(val)
            },
            handleCurrentChange(val) {
                console.log(val)
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
            del(num) {
                let self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.get(`/iem_hrm/organ/delOrgCCC/${num}`)
                        .then(res => {
                            let result = res.data.retMsg
                            if(result==="操作成功"){
                                self.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }else{
                                self.$message({
                                    type: 'error',
                                    message: result
                                });
                            }

                        })
                        .catch(e => {
                            this.$message({
                                type: 'info',
                                message: '删除失败!'
                            });
                            console.log(e)
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        components: {
            current,
        }
    }
</script>

<style scoped>
    .agency_argument {
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
    }
    .agency_argument .test{
        padding-left: 10px;
    }
    .content-wrapper{
        background: #fff;
        padding-left: 20px;
        padding-right: 20px;
        height: 746px;
    }
    .content-wrapper .title{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #f4f4f4;
        position: relative;
    }
    .content-wrapper .title .text{
        border-bottom:2px solid black;
        display: inline-block;
        height: 80px;
    }
    .content-wrapper .title .add{
        width: 120px;
        height: 40px;
        background: #FF9900;
        border: 1px solid #FF9900;
        outline: none;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 40px;
        text-align: center;
        position: absolute;
        right: 0px;
        bottom: 20px;
    }
    .content-wrapper .content{
        padding-top: 42px;
    }
    .content-wrapper .content .search{
    }
    .content-wrapper .content .search .text{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
    }
    .content-wrapper .content .search input{
        margin: 0 20px 0 30px;
        width: 300px;
        height: 40px;
        border: 1px solid #EEEEEE;
        border-radius: 4px;
        text-indent: 1em;
        outline: none;
        vertical-align: middle;
    }
    .content-wrapper .content .search input:hover{
        border: 1px solid orange;
    }
    .content-wrapper .content .search .toolBtn{
        border-radius: 0;
        height: 40px;
        width: 120px;
        background: #FF9900;
        border: none;
        vertical-align: middle;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
    }
    .content table{
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
    }
    .content table td{
        border: 1px solid #f0f0f0;
    }
    .content table tr{
        width: 100%;
        height: 40px;
        display: flex;
        line-height: 40px;
    }
    .content table tr:nth-child(odd){
        background: #F8F8F8;
    }
    .content table tr:hover{
        width: 100%;
        height: 40px;
        display: flex;
        line-height: 40px;
        background: #EEF1F6;
    }
    .content table tr:first-child{
        background: #F4F4F4;
        box-shadow: inset 0 1px 0 0 #EEEEEE;
        color: #666;
    }
    .content table tr td{
        flex: 1;
        text-align: center;
    }
    .content table tr td:nth-child(2){
        flex:2;
    }
    .agency_argument .el-pagination{
        position: absolute;
        right: 0;
        bottom:40px;
    }
    .content .el-icon-delete2, .content .el-icon-edit{
        color: #ff9900;
        cursor: pointer;
    }
    _:-ms-lang(x), td {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
