<template>
    <div class="modify_agency">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" siji="CCC修改" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">CCC修改</span><button class="save" @click="save">保存</button></div>
                <div class="content">
                    <div class="item_group">
                        <span class="text">机构名称</span><el-input class="common" v-model="obj.organName" :disabled="true"></el-input>
                        <span class="text">CCC类型</span><el-select placeholder="请选择CCC类型" v-model="obj.costType">
                        <el-option
                                label="管理CCC"
                                value="01">
                        </el-option>
                        <el-option
                                label="售前CCC"
                                value="02">
                        </el-option>
                        <el-option
                                label="项目CCC"
                                value="03">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="item_group">
                        <span class="text">CCC值</span><el-input class="common" v-model="obj.costCode"></el-input>
                        <span class="text">备注</span><el-input v-model="obj.descr"></el-input>
                    </div>
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
                obj: {
                    organName: '',
                    costType: '',
                    costCode: '',
                    descr: '',
                }
            }
        },
        created() {
            let self = this
            let organNo = this.$route.query.organNo
            let costType = this.$route.query.costType
          this.$axios.get(`/iem_hrm/organ/queryOrganCCCManagementByOrganNoAndCostType/${organNo}/${costType}`)
              .then(res => {
                  self.obj.organName = res.data.data.organName
                  self.obj.costType = res.data.data.costType
                  self.obj.costCode = res.data.data.costCode
                  self.obj.descr = res.data.data.descr
                  self.obj.organNo = res.data.data.organNo
              })
              .catch(e=>{
                  console.log(e)
              })
        },
        methods: {
            save(){
                let self = this
                this.$axios.put('/iem_hrm/organ/modOrgCCC', this.obj)
                    .then(res => {
                        let result = res.data.retMsg
                        if(result==='操作成功'){
                            self.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                        }else {
                            self.$message({
                                message: result,
                                type: 'error'
                            });
                        }
                    })
                    .catch(e=>{
                        console.log('修改CCC失败', e)
                    })
            }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .modify_agency
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
                .save
                    width: 120px
                    height 40px
                    background: #F4F4F4;
                    border: none
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    line-height 40px
                    text-align center
                    position absolute
                    right 0px
                    bottom 20px
                    &:hover
                        background: #f90;
                        color #fff
            .content
                padding 42px 0 0 8px
                .item_group
                    margin-bottom 30px
                    height 40px
                    line-height 40px
                    .text
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                        margin-right 30px
                        display inline-block
                        width 60px
                        height 40px
                        line-height 40px
                        text-align right
                    .common
                        margin-right 120px
                    .el-input
                        width 300px
                        height 40px
                        .el-input__inner
                            height 100%
                        .el-input__inner:focus
                            border-color: #ff9900;
                        .el-input__inner:hover
                            border-color: #ff9900;

</style>
