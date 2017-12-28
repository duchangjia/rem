<template>
    <div class="framework-content-wrapper">
        <current yiji="系统管理" erji="组织架构"></current>
        <div class="framework-content">
            <el-col :span="6">
                <div class="content-left">
                    <div class="content-left-title" v-show="companies.organName"><img height="21px" src="../../../../static/img/common/home_logo.png" /><span class="head_quarters" @click="getInfo(companies.organNo)" :title="companies.organName">{{companies.organName}}</span></div>
                    <ul class="list " v-show="companies.childrenList" >
                        <li class="shanghai common L" v-for="(company, $index) in companies.childrenList" :key="$index" @click.stop.prevent="collapse(company.organNo, $event, null)" :class="`L${company.organNo}`">{{company.organName}}<span class="count">({{company.childrenList.length}})</span>
                            <ul class="common-list" v-show="company.childrenList">
                                <li class="common dot X" v-for="(department, index) in company.childrenList" :key="index" @click.stop.prevent="collapse(department.organNo, $event, company.organNo)" :class="`X${department.organNo}`">{{department.organName}}<span class="count">({{department.childrenList.length}})</span>
                                    <ul class="common-list-item" v-show="department.childrenList">
                                        <li class="common dot J" v-for="(childDepartment,index) in department.childrenList" :key="index" @click.stop.prevent="collapse(childDepartment.organNo, $event, company.organNo)" :class="`J${childDepartment.organNo}`">{{childDepartment.organName}}<span class="count">({{childDepartment.childrenList.length}})</span>
                                            <ul class="common-list-item" v-show="childDepartment.childrenList">
                                                <li class="common dot W" v-for="(WchildDepartment,index) in childDepartment.childrenList" :key="index" @click.stop.prevent="collapse(WchildDepartment.organNo, $event, company.organNo)" :class="`W${WchildDepartment.organNo}`">{{WchildDepartment.organName}}<span class="count">({{WchildDepartment.childrenList.length}})</span>
                                                    <ul class="common-list-item" v-show="WchildDepartment.childrenList">
                                                        <li class="common dot A" v-for="(AchildDepartment,index) in WchildDepartment.childrenList" :key="index" @click.stop.prevent="collapse(AchildDepartment.organNo, $event, company.organNo)" :class="`A${AchildDepartment.organNo}`">{{AchildDepartment.organName}}<span class="count">({{AchildDepartment.childrenList.length}})</span>
                                                            <ul class="common-list-item" v-show="AchildDepartment.childrenList">
                                                                <li class="common dot C" v-for="(CchildDepartment,index) in AchildDepartment.childrenList" :key="index" @click.stop.prevent="collapse(CchildDepartment.organNo, $event, company.organNo)" :class="`C${CchildDepartment.organNo}`">{{CchildDepartment.organName}}<span class="count">({{CchildDepartment.childrenList.length}})</span>
                                                                    <ul class="common-list-item" v-show="CchildDepartment.childrenList">
                                                                        <li class="common dot B" v-for="(BchildDepartment,index) in CchildDepartment.childrenList" :key="index" @click.stop.prevent="collapse(BchildDepartment.organNo, $event, company.organNo)" :class="`B${BchildDepartment.organNo}`">{{BchildDepartment.organName}}<span class="count">({{BchildDepartment.childrenList.length}})</span>
                                                                            <ul class="common-list-item" v-show="BchildDepartment.childrenList">
                                                                                <li class="common dot D" v-for="(DchildDepartment,index) in BchildDepartment.childrenList" :key="index" @click.stop.prevent="collapse(DchildDepartment.organNo, $event, company.organNo)" :class="`D${DchildDepartment.organNo}`">{{DchildDepartment.organName}}<span class="count">({{DchildDepartment.childrenList.length}})</span>

                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </el-col>
           <el-col :span="18">
               <div class="content-right">
                   <div class="title">
                       <span class="text text_special" v-show="content.organName" :title="content.organName">{{content.organName}}</span>
                       <div class="button-wrapper" style="display: flex">
                           <el-button class="del" @click="del(content.organNo)">删除</el-button>
                           <el-button type="primary" @click="handleAdd('edit_department', content.organNo)" class="toolBtn">编辑</el-button>
                       </div>
                   </div>
                   <div class="form1-wrapper">
                       <span>上级机构</span><el-input v-model="content.organParentName" disabled></el-input><br>
                       <span>主管</span><el-input v-model="content.organMgeName" disabled></el-input><br>
                       <span>类型</span><el-select v-model="content.organType" disabled>
                       <el-option label="总公司" value="01"></el-option>
                       <el-option label="分公司" value="02"></el-option>
                       <el-option label="办事处" value="03"></el-option>
                       <el-option label="部门" value="04"></el-option>
                   </el-select><br>
                       <span>状态</span><el-select v-model="content.status" disabled>
                       <el-option label="启用" value="1"></el-option>
                       <el-option label="停用" value="2"></el-option>
                   </el-select>
                   </div>
                   <div class="title" style="margin-top: 36px;">
                       <span class="text">下级机构</span>
                       <el-button type="primary" @click="handleAdd('add_junior', content.organNo)" class="toolBtn">新增</el-button>
                   </div>
                   <div class="table-wrapper" style="margin-top: 13px; text-align: right;" v-show="tableData.list">
                       <template>
                           <el-table
                                   :data="tableData.list"
                                   border
                                   stripe
                           >
                               <el-table-column
                                       prop="organChildName"
                                       label="名称"
                                       align="center"
                               >
                               </el-table-column>
                               <el-table-column
                                       label="类型"
                                       align="center">
                                   <template scope="scope">
                                       <span>{{ scope.row.organType === '01' ? '总公司': scope.row.organType === '02' ? '分公司': scope.row.organType === '03' ? '办事处': '部门'}}</span>
                                   </template>
                               </el-table-column>
                               <el-table-column
                                       prop="organMgeName"
                                       label="主管"
                                       align="center"
                               >
                               </el-table-column>
                               <el-table-column
                                       label="状态"
                                       align="center">
                                   <template scope="scope">
                                       <span>{{ scope.row.status === '1' ? '启用': '停用' }}</span>
                                   </template>
                               </el-table-column>
                           </el-table>
                       </template>
                       <div class="block" style="margin-top: 40px; display: inline-block; position: relative" v-show="tableData.total">
                           <el-pagination
                                   @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :page-size="tableData.pageSize"
                                   layout="total,prev, pager, next, jumper"
                                   :total="tableData.total">
                           </el-pagination>
                       </div>
                   </div>
                   <!--<div class="title" style="margin-top: 36px;">-->
                   <!--<span class="text">机构人员</span>-->
                   <!--<el-button type="primary" @click="handleAdd('add_person', content.organNo)" class="toolBtn">新增</el-button>-->
                   <!--</div>-->
                   <!--<div class="table-wrapper" style="margin-top: 13px; text-align: right;" v-show="tableData2.list">-->
                   <!--<template>-->
                   <!--<el-table-->
                   <!--:data="tableData2.list"-->
                   <!--border-->
                   <!--stripe-->
                   <!--max-height="400"-->
                   <!--&gt;-->
                   <!--<el-table-column-->
                   <!--prop="userName"-->
                   <!--label="姓名"-->
                   <!--align="center"-->
                   <!--&gt;-->
                   <!--</el-table-column>-->
                   <!--<el-table-column-->
                   <!--prop="userNo"-->
                   <!--label="工号"-->
                   <!--align="center"-->
                   <!--&gt;-->
                   <!--</el-table-column>-->
                   <!--<el-table-column-->
                   <!--prop="remark"-->
                   <!--label="职位"-->
                   <!--align="center"-->
                   <!--width="170"-->
                   <!--&gt;-->
                   <!--</el-table-column>-->
                   <!--<el-table-column-->
                   <!--prop="mobileTEL"-->
                   <!--label="手机"-->
                   <!--align="center">-->
                   <!--</el-table-column>-->
                   <!--<el-table-column-->
                   <!--label="操作"-->
                   <!--align="center">-->
                   <!--<template scope="scope">-->
                   <!--<i class="el-icon-delete" style="color: #FF9900"></i>-->
                   <!--</template>-->
                   <!--</el-table-column>-->
                   <!--</el-table>-->
                   <!--</template>-->
                   <!--<div class="block" style="margin-top: 40px; display: inline-block;" v-show="tableData2.total">-->
                   <!--<el-pagination-->
                   <!--@size-change="handleSizeChange"-->
                   <!--@current-change="handleCurrentChange2"-->
                   <!--:page-size="tableData2.pageSize"-->
                   <!--layout="total, prev, pager, next, jumper"-->
                   <!--:total="tableData2.total">-->
                   <!--</el-pagination>-->
                   <!--</div>-->
                   <!--</div>-->
               </div>
           </el-col>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    import $ from '../../../../static/bower_components/jquery/dist/jquery.min'
    export default {
        data() {
            return {
                content:{
                    organType:'',
                    status:'',
                    organName: '',
                },
                companies: {

                },
                tableData: '',
                tableData2: ''
            }
        },
        created() {
           let self = this
            self.$axios.get('/iem_hrm/organ/queryOrganList')
              .then( res => {
                  console.log(res)
                  self.companies = res.data.data[0]
                  if(!self.companies){
                      self.companies = '',
                      this.$message('请点击新增按钮添加机构');
                    return
                  }else {
                      self.$axios.get('/iem_hrm/organ/queryCurrentAndParentOrganDetail/'+self.companies.organNo)
                          .then( res => {
                              self.content = res.data.data
                          })
                          .catch( res=> {
                              console.log('请求公司详情数据超时')
                          })
                      self.$axios.get('/iem_hrm/organ/queryChildOrganDetail/'+self.companies.organNo)
                          .then( res => {
                              self.tableData = res.data.data
                          })
                          .catch( res=> {
                              console.log('请求公司下级详情数据超时')
                          })
                  }
                  self.$nextTick(function () {
                      var ulObj = $('.common-list')
                      let length = ulObj.length
                      for (let index=0;index<length;index++) {
                          let obj = ulObj[index]
//                          if (index!=1) {
                              $(obj).slideUp(0)
//                          }
                      }
//                      $('.list>li:nth-child(2)').addClass('active')
                      $('.head_quarters').addClass('active')

                  })
              })
              .catch( res=> {
                  console.log('请求公司数据超时')
              })

//            self.$axios.get('/iem_hrm/organ/queryOrganMember/0')
//                .then( res => {
//                    self.tableData2 = res.data.data
//                })
//                .catch( res=> {
//                    console.log('请求公司员工数据超时')
//                    return false
//                })
        },
//        watch: {
//            companies: '_reload',
//        },
        beforeMount() {
//            let self = this
//           setTimeout(function () {
//               self.content.title = $('.L0 .X0')[0].childNodes[0].nodeValue
//               $('.L0 .X0').addClass('active')
//               $('.L0').addClass('active')
//               self.content.super = $('.L0')[0].childNodes[0].nodeValue
//               self.tableData = []
//               var lenght = $('.L0 .X0 li').length
//               for (let i=0;i<lenght;i++) {
//                   var dep = $('.L0 .X0 li')[i].childNodes[0].nodeValue
//                   var obj = {
//                       dep: dep,
//                       name: '方清丽',
//                       state: '正常',
//                       type: '三级部门'
//                   }
//                   self.tableData.push(obj)
//               }
//           },200)
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                let index = this.content.organNo
                console.log(val,index)
                let _self = this
                    _self.$axios.get(`/iem_hrm/organ/queryChildOrganDetail/${index}`, {params:{pageNum: val}})
                        .then( res => {
                            _self.tableData = res.data.data
                        })
                        .catch( res=> {
                            console.log('请求公司下级详情数据超时222')
                        })
            },
            handleCurrentChange2(val) {
                let index = this.content.organNo
                let _self = this
                _self.$axios.get(`/iem_hrm/organ/queryOrganMember/${index}`, {params:{pageNum: val}})
                    .then( res => {
                        _self.tableData2 = res.data.data
                    })
                    .catch( res=> {
                        console.log('请求公司员工详情数据超时222')
                    })
            },
            handleAdd(tt, queryNo) {
//                this.$store.dispatch('change_frame', this.content)
                window.sessionStorage.setItem('frame_queryNo', queryNo)
                this.$router.push(tt);
            },
            getInfo(index) {
                const _self = this
                _self.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                    .then( res => {
                        _self.content = res.data.data
                    })
                    .catch( res=> {
                        console.log('请求公司详情数据超时')
                    })
                _self.$axios.get(`/iem_hrm/organ/queryChildOrganDetail/${index}`)
                    .then( res => {
                        _self.tableData = res.data.data
                    })
                    .catch( res=> {
                        console.log('请求公司下级详情数据超时')
                    })
//                _self.$axios.get(`/iem_hrm/organ/queryOrganMember/${index}`)
//                    .then( res => {
//                        _self.tableData2 = res.data.data
//                    })
//                    .catch( res=> {
//                        console.log('请求公司员工数据超时')
//                    })
                $('.list').find('li').removeClass('active')
                $('.head_quarters').addClass('active')
            },
            collapse(index, e, parent) {
                let _self = this
//                var reg = /L/
//                var reg1 = /X/
//                var reg2 = /J/
                let name = e.target.className.split(' ')[2]
                if (!parent) {
                    _self.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                        .then( res => {
                            _self.content = res.data.data
                        })
                        .catch( res=> {
                            console.log('请求公司详情数据超时')
                        })
                    _self.$axios.get(`/iem_hrm/organ/queryChildOrganDetail/${index}`)
                        .then( res => {
                            _self.tableData = res.data.data
                        })
                        .catch( res=> {
                            console.log('请求公司下级详情数据超时')
                        })
                    $('.L'+ index + ' >ul').slideToggle('slow')
                    $('.L'+ index).siblings().find('ul').slideUp('slow')
                    $('.list').find('li').removeClass('active')
                    $('.head_quarters').removeClass('active')
                    $('.L'+ index).addClass('active')
                }
                if (parent!==null) {
                    _self.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
                        .then( res => {
                            _self.content = res.data.data
                        })
                        .catch( res=> {
                            console.log('请求公司详情数据超时')
                        })
                    _self.$axios.get(`/iem_hrm/organ/queryChildOrganDetail/${index}`)
                        .then( res => {
                            _self.tableData = res.data.data
                        })
                        .catch( res=> {
                            console.log('请求公司下级详情数据超时')
                        })
                    $('.list').find('li').removeClass('active')
                    $('.head_quarters').removeClass('active')
                    $('.L'+ parent+' .'+name + index).addClass('active')
                    $('.L'+ parent+' .'+name + index + ' >ul').slideToggle('slow')
                    $('.L'+ parent+' .'+name + index).siblings().find('ul').slideUp('slow')
                }
//                if (reg2.test(e.target.className) && parent!==null) {
//                    _self.$axios.get(`/iem_hrm/organ/queryCurrentAndParentOrganDetail/${index}`)
//                        .then(res => {
//                            _self.content = res.data.data
//                        })
//                        .catch( res=> {
//                            console.log('请求公司详情数据超时')
//                        })
//                    _self.$axios.get(`/iem_hrm/organ/queryChildOrganDetail/${index}`)
//                        .then( res => {
//                            _self.tableData = res.data.data
//                        })
//                        .catch( res=> {
//                            console.log('请求公司下级详情数据超时')
//                        })
////                    _self.$axios.get(`/iem_hrm/organ/queryOrganMember/${index}`)
////                        .then( res => {
////                            _self.tableData2 = res.data.data
////                        })
////                        .catch( res=> {
////                            console.log('请求公司员工数据超时')
////                            return false
////                        })
//                    $('.list').find('li').removeClass('active')
//                    $('.head_quarters').removeClass('active')
//                    $('.L'+ parent+' .J'+ index).addClass('active')
//                    $('.L'+ parent+' .J'+ index + ' >ul').slideToggle('slow')
//                    $('.L'+ parent+' .J'+ index).siblings().find('ul').slideUp('slow')
//                }
            },
            _reload() {
                console.log('reload')
                this.$axios.get('/iem_hrm/organ/queryOrganList/0')
                    .then( res => {
                        console.log('reload.axios')
                        console.log(res.data.data[0])
                        return res.data.data[0]
                    })
                    .catch( res=> {
                        console.log('请求公司数据超时')
                    })
            },
            del(index) {
                const self = this
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.delete(`/iem_hrm/organ/deleteOrganInfo/${index}`)
                        .then(res => {
                            if (res.data.retMsg == "操作成功") {
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                self.$axios.get('/iem_hrm/organ/queryOrganList')
                                    .then( res => {
                                        self.companies = res.data.data[0]
                                        if(!self.companies){
                                            return
                                        }else {
                                            self.$axios.get('/iem_hrm/organ/queryCurrentAndParentOrganDetail/'+self.companies.organNo)
                                                .then( res => {
                                                    self.content = res.data.data
                                                })
                                                .catch( res=> {
                                                    console.log('请求公司详情数据超时')
                                                })
                                            self.$axios.get('/iem_hrm/organ/queryChildOrganDetail/'+self.companies.organNo)
                                                .then( res => {
                                                    self.tableData = res.data.data
                                                })
                                                .catch( res=> {
                                                    console.log('请求公司下级详情数据超时')
                                                })
                                        }
                                        self.$nextTick(function () {
                                            var ulObj = $('.common-list')
                                            let length = ulObj.length
                                            for (let index=0;index<length;index++) {
                                                let obj = ulObj[index]
                                                $(obj).slideUp(0)
                                            }
                                            $('.head_quarters').addClass('active')
                                        })
                                    })
                                    .catch( res=> {
                                        console.log('请求公司数据超时')
                                    })
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: res.data.retMsg
                                });
                            }
                        })
                        .catch(res=>{
                            console.log('删除失败')
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

<style>
.framework-content-wrapper *{
    margin:0;
    padding: 0;
}
.framework-content-wrapper .test{
   padding-left: 10px;
}
.framework-content-wrapper{
    padding:0px 0 20px 20px ;
    /*overflow: hidden;*/
}
.framework-content-wrapper .framework-content{
    /*display: flex;*/
    clear: both;
    overflow: hidden;
    background: #fff;
}
.framework-content-wrapper .framework-content .content-left{
    /*flex: 0 0 350px;*/
    /*width: 350px;*/
    background: #fff;
    padding: 32px 0 30000px 20px;
    margin-bottom: -29960px;
}
.framework-content-wrapper .framework-content .content-right{
    /*flex: 1;*/
    padding: 0 40px 30000px 41px;
    margin-bottom: -29960px;
    background: #fff;
    border-left: 1px solid #eee;
    overflow: hidden;
}
.framework-content-wrapper .content-left-title{
    display: flex;
    height: 21px;
    align-items: center;
}
.framework-content-wrapper .content-left-title>img{
    float: left;
    margin-right: -54px;
}
.framework-content-wrapper .content-left .head_quarters{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 16px;
    height: 16px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 6.7px;
    vertical-align: middle;
    cursor: pointer;
}
.framework-content-wrapper .content-left .list{
    margin-top: 32px;
    padding-left: 18px;
}
.framework-content-wrapper .content-left .common{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 20px;
    margin-right: 4px;
    cursor: pointer;
}
.framework-content-wrapper .content-left ul>li:first-child{
    margin-top: 20px;
}
.framework-content-wrapper .list .count{
    margin-left: 4px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #CCCCCC;
    letter-spacing: 0;
}
.framework-content-wrapper ul, li{
    list-style: none;
}
.framework-content-wrapper .list>.L:before{
    display: inline-block;
    content: 'L';
    color: #CCCCCC;
    width: 8px;
    height: 12px;
    margin-right: 10px;
}
.framework-content-wrapper .list .dot:before{
    display: inline-block;
    content: '';
    background: #CCCCCC;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin-right: 10px;
    vertical-align: middle;
}
.framework-content-wrapper .list .common-list{
    padding-left: 18px;
}
.framework-content-wrapper .list .common-list .common-list-item{
    padding-left: 16px;
}
.framework-content-wrapper .content-right .title{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-between;
}
.framework-content-wrapper .content-right .title .text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    /*margin-right: 309px;*/
    border-bottom: 2px solid #363D47;
    height: 50px;
    line-height: 50px;
    width: auto;
}
.framework-content-wrapper .content-right .title .text_special{
    max-width: 400px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.framework-content-wrapper .content-right .title .del {
    border-radius: 4px;
    height: 30px;
    line-height: 30px;
    width: 120px;
    color: #FF9900;
    border-color:#FF9900 ;
    margin-right: 20px;
}
.framework-content-wrapper .content-right .title .toolBtn {
    border-radius: 4px;
    height: 30px;
    line-height: 30px;
    width: 120px;
    background: #FF9900;
    border: none;
}
@-moz-document url-prefix(){
    .framework-content-wrapper .content-right .title .del { line-height: 0; }
}
@-moz-document url-prefix(){
    .framework-content-wrapper .content-right .title .toolBtn { line-height: 0; }
}
.framework-content-wrapper .form1-wrapper{
    padding-left: 10px;
    margin-top: 40px;
}
.framework-content-wrapper .form1-wrapper>span{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    line-height: 14px;
    width: 56px;
    height: 14px;
    display: inline-block;
    margin-right: 30px;
    vertical-align: middle;
    text-align: right;
}
.framework-content-wrapper .form1-wrapper .el-input, .framework-content-wrapper .form1-wrapper .el-select{
    width: 300px;
    height: 40px;
    font-family: PingFangSC-Regular;
    color: #333333;
    margin-bottom: 20px;
}
.framework-content-wrapper .form1-wrapper .el-input .el-input__inner{
    width: 300px;
    height: 40px;
    text-indent: 1em;
}
.framework-content-wrapper .active{
    color: orange !important;
}
.framework-content-wrapper .el-pagination{
    position: absolute;
    right: 40px;
    bottom: -20px;
}
.framework-content-wrapper .el-pagination .el-pagination__total{
    height: 24px;
}
.framework-content-wrapper .el-pagination .btn-prev, .framework-content-wrapper .el-pagination .el-pagination__jump, .framework-content-wrapper .el-pagination .btn-next{
    height: 24px;
    width: 24px;
    line-height: 24px;
}
.framework-content-wrapper .el-pagination .el-pager li{
    height: 24px;
    width: 24px;
    line-height: 24px;
}
.framework-content-wrapper .el-pagination .el-pager li.active{
    background: #ff9900;
    border: 1px solid #ff9900;
    color: #fff !important;
}
.framework-content-wrapper .el-pagination .el-pager li:hover, .framework-content-wrapper .el-pagination button:hover{
    color: #ff9900;
}
.framework-content-wrapper .el-pagination .el-pagination__jump .el-pagination__editor{
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin: 0 3px;
    text-indent: 0;
}
.framework-content-wrapper .el-pagination .el-pagination__editor:focus{
    outline: none;
    border-color: #ff9900;
}
</style>


