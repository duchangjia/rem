<template>
    <div class="argument_2">
        <current yiji="参数管理" erji="业务参数"></current>
        <div class="queryContent_wrapper">
            <div class="titleBar">
                <span class="title-text">业务参数</span>
            </div>
            <div class="queryContent_inner argument_2-content-wrapper">
                <div class="content">
                    <el-col :sm="12" :md="8" v-for="(obj, index) in contentss">
                        <div class="item" @click="link(index)">
                            <span class="space" style="display: inline-block; width: 40px; height: 1px;"></span>
                            <img :src="`../../../../static/img/argument_Mgmt/argument_2/${obj.image}`" width="56" height="56">
                            <span>{{obj.text}}</span>
                        </div>
                    </el-col>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
          return {
              contentss:[

                      {
                          image:'ccc1.png',
                          text: '机构CCC管理'
                      },
                      {
                          image:'mqjjrwh1.png',
                          text: '免签节假日维护'
                      },
                      {
                          image:'gskpxxwh.png',
                          text: '公司开票信息维护'
                      },


                      {
                          image:'fljnxssz1.png',
                          text: '福利缴纳系数设置'
                      },
                      {
                          image:'grsdsslsz1.png',
                          text: '个人所得税税率设置'
                      },
                      {
                          image:'zjxcbzsz1.png',
                          text: '职级薪酬标准设置'
                      },

              ]
          }
        },
        methods: {
          link(a) {
              	if(a=='0') {
                  	this.$router.push('agency_argument')
              	} else if(a=='3') {
              		this.$router.push('welfare_coefficient')
              	} else if(a=='4') {
              		this.$router.push('tax_rate')
              	} else if(a=='5') {
              		this.$router.push('rank')
              	} else if(a=='1') {
                    this.$router.push('holiday_info')
                } else if(a=='2') {
                    this.$router.push('ticket_info')
                }
          },
        },
        components: {
            current,
        }
    }
</script>
<style scoped>
    .argument_2 {
        padding: 0 0 20px 20px;
        overflow: hidden;
    }
    .argument_2 .test{
        padding-left: 10px;
    }
    .argument_2-content-wrapper{
        background: #fff;
        padding-left: 20px;
        min-height: 650px;
    }
    .argument_2-content-wrapper .content{
        padding-top: 42px;
    }
    .argument_2-content-wrapper .content .item{
        height: 120px;
        line-height: 120px;
    }
    .argument_2-content-wrapper .content .item:hover{
        box-shadow: 0 0 10px 0 rgba(204,204,204,0.50);
        cursor: pointer;
    }
    .argument_2-content-wrapper .content .item img{
        vertical-align: middle;
        margin-right: 30px;
    }
    .argument_2-content-wrapper .content .item span{
        font-family: PingFangSC-Light;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
    }
</style>
