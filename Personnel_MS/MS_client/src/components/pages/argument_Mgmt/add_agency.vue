<template>
    <div class="add_agency">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" siji="CCC新增"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">CCC新增</span><button class="save" @click="save">保存</button></div>
                <div class="content">
                    <div class="item_group">
                        <span class="text">机构名称</span><div style="display: inline-block; position: relative">
                            <!--<el-input class="common" v-model="obj.organName" @blur="check(obj.organName, 1)" @focus="hidden(1)"></el-input>-->
                            <el-select placeholder="请选择机构" v-model="obj.organName" @change="hidden(1)" class="common">
                                <el-option v-for="item in optionItem"
                                        :label="item"
                                        :value="item">
                                </el-option>
                                <!--<el-option-->
                                        <!--label="售前CCC"-->
                                        <!--value="02">-->
                                <!--</el-option>-->
                                <!--<el-option-->
                                        <!--label="项目CCC"-->
                                        <!--value="03">-->
                                <!--</el-option>-->
                            </el-select>
                            <div style="position: absolute; top:35px;color: #ff4949" v-show="rules.organName">{{rules.organName}}</div>
                        </div>
                        <span class="text">CCC类型</span><div style="display: inline-block; position: relative">
                            <el-select placeholder="请选择CCC类型" v-model="obj.costType" @change="hidden(2)">
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
                        <div style="position: absolute; top:35px;color: #ff4949" v-show="rules.costType">{{rules.costType}}</div>
                    </div>
                    </div>
                    <div class="item_group">
                        <span class="text">CCC值</span><div style="display: inline-block; position: relative">
                            <el-input class="common" v-model="obj.costCode" @blur="check(obj.costCode, 3)" @focus="hidden(3)" :maxlength="32"></el-input>
                            <div style="position: absolute; top:35px;color: #ff4949" v-show="rules.costCode">{{rules.costCode}}</div>
                        </div>
                        <span class="text">备注</span><el-input v-model="obj.descr" :maxlength="256" @blur="check(obj.descr, 4)" @focus="hidden(4)"></el-input>
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
                },
                rules:{
                    organName: '',
                    costCode: '',
                    costType: '',
                    descr:''
                },
                optionItem:{},
            }
        },
        created() {
          this.$axios.get('/iem_hrm/organ/getOrganName')
              .then(res=>{
                  console.log(res)
                  this.optionItem = res.data
              })
              .catch(e=>{
                  console.log(e)
              })
        },
        methods: {
            check(value, num) {
                if(!value&&num==1){
                    this.rules.organName = '请输入机构名称'
                }
                if(!value&&num==3){
                    this.rules.costCode = '请输入CCC值'
                }
                if(value.length>31&&num==3){
                    this.rules.costCode = '长度不能大于32字节'
                }
                if(isNaN((value-0)*1) && num==3){
                    this.rules.costCode = '只能输入数字'
                }
                if(!value&&num==2){
                    this.rules.costType = '请选择CCC类型'
                }
                if(value.length>255&&num==4){
                    this.rules.descr = '长度不能大于256字节'
                }
            },
            hidden(num) {
                if(num==1)this.rules.organName = ''
                if(num==3)this.rules.costCode = ''
                if(num==2)this.rules.costType = ''
                if(num==4)this.rules.descr = ''
            },
          save(){
            let self = this
              let a = !this.rules.organName
              let b = !this.rules.costCode
              let c = !this.rules.costType
              if(this.obj.organName&&this.obj.costCode&&this.obj.costType){
                  this.$axios.post('/iem_hrm/organ/addOrgCCC', this.obj)
                      .then(res => {
                          let result = res.data.retMsg
                          if(result==='操作成功'){
                              self.$message({
                                  message: result,
                                  type: 'success'
                              });
                          } else {
                              self.$message({
                                  message: result,
                                  type: 'error'
                              });
                          }
                      })
                      .catch(e=>{
                          console.log('新增CCC失败', e)
                      })
              }else{
                  if(a)this.rules.organName = '请输入机构名称'
                  if(b)this.rules.costCode = '请输入CCC值'
                  if(c)this.rules.costType = '请选择CCC类型'
                  self.$message({
                      message: '请输入完整信息',
                      type: 'error'
                  });
                  return false
              }
          }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .add_agency
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
                    .fade_check
                        position absolute
                        top:35px
                        color #ff4949
                        height 0
                    .fade_check_animation
                        transition height .5s
                        height 5px
                    .el-input
                        width 300px
                        height 40px
                        .el-input__inner
                            width 100%
                            height 100%
                        .el-input__inner:focus
                            border-color: #ff9900;
                        .el-input__inner:hover
                            border-color: #ff9900;

</style>
