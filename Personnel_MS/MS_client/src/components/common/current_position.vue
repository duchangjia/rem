<template>
    <div class="location-wrapper">
        <el-row>
            <el-col :span="22">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-if="yiji" :to="{ path: links[0] }" class="test1" >{{yiji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="erji" :to="{ path: links[1] }" class="test1" >{{erji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="sanji" :to="{ path: links[2] }" class="test1" >{{sanji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="siji" :to="{ path: links[3] }" class="test1" >{{siji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="wuji" :to="{ path: links[4] }" class="test1" >{{wuji}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="2" v-show="breadItemLength>1">
                <img src="../../../static/img/common/back.png" alt="pic" width="19" height="12" class="pic" @click="jump">
            </el-col>
        </el-row>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        data() {
            return {
                link: [],
                breadItemLength: 0,
            }
        },
        created() {

        },
        methods: {
            jump() {
                let aa = this.link[this.breadItemLength-2]
                if (!aa) return false
                this.$router.push(aa)
            },
        },
        computed: {
          links() {
              let _link=[]
              if(this.yiji==='系统管理'){
                  _link.push('/management_framework')
              }
              if(this.yiji==='人事事务'){
                  _link.push('/personnel_contract')
              }
              if(this.erji==='用户管理'){
                  _link.push('/management_user')
              }
              if(this.erji==='角色管理'){
                  _link.push('/management_role')
              }if(this.erji==='功能管理'){
                  _link.push('/management_fun')
              }
              if(this.erji==='人事合同'){
                  _link.push('/personnel_contract')
              }
              if(this.erji==='组织架构'){
                  _link.push('/management_framework')
              }
              if(this.sanji==='编辑部门'){
                  _link.push('/edit_department')
              }
              if(this.sanji==='新增机构人员'){
                  _link.push('/add_person')
              }
              if(this.sanji==='新增子部门'){
                  _link.push('/add_junior')
              }
              if(this.sanji==='新增角色'){
                  _link.push('/add_role')
              }
              if(this.sanji==='编辑角色'){
                  _link.push('/edit_role')
              }
              if(this.sanji==='用户信息'){
              	 _link.push('/user-info')
              }
              if(this.sanji==='功能编辑'){
              	 _link.push('/edit_fun')
              }
              if(this.sanji==='新增合同'){
              	 _link.push('/add_contract')
              }

              this.link = _link
              this.breadItemLength = _link.length
              return this.link
          }
        },
        props:{
            yiji: {
                type: String,
                default: ''
            },
            erji: {
                type: String,
                default: ''
            },
            sanji: {
                type: String,
                default: ''
            },
            siji: {
                type: String,
                default: ''
            },
            wuji: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped>
    .location-wrapper {
        height: 70px;
        line-height: 70px;
        font-size: 12px;
    }
    .location-wrapper .el-row {
        width: 100%;
    }
    .location-wrapper .title {
        color: #475669;
        vertical-align: middle;
    }
    .location-wrapper .breadcrumb-inner {
        font-size: 12px;
        display: inline-block;
        vertical-align: middle;
    }
    .pic{
        cursor: pointer;
    }

</style>
