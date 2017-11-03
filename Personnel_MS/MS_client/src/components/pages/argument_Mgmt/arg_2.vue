<template>
    <div class="argument_2">
        <current yiji="参数管理" erji="业务参数"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">业务参数</span></div>
                <div class="content">
                    <el-row type="flex" justify="space-around" v-for="(content, index) in contents" :key="index">
                        <el-col :span="6" v-for="(obj, index2) in content" :key="index2">
                            <div class="item" @click="link(index, index2)">
                                <span class="space" style="display: inline-block; width: 40px; height: 1px;"></span>
                                <img :src="`../../../../static/img/argument_Mgmt/argument_2/${obj.image}`" width="56" height="56">
                                <span>{{obj.text}}</span>
                            </div>
                        </el-col>
                    </el-row>
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
              contents:[
                  [
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
                  ],
                 [
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
                 ],
              ]
          }
        },
        methods: {
          link(a, b) {
              	let str = ''+a+b
              	if(str=='00') {
                  	this.$router.push('agency_argument')
              	} else if(str=='10') {
              		this.$router.push('welfare_coefficient')
              	} else if(str=='11') {
              		this.$router.push('tax_rate')
              	} else if(str=='12') {
              		this.$router.push('rank')
              	} else if(str=='01') {
                    this.$router.push('holiday_info')
                } else if(str=='02') {
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
    .content-wrapper{
        background: #fff;
        padding-left: 20px;
        height: 650px;
    }
    .content-wrapper .title{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #f4f4f4;
    }
    .content-wrapper .title .text{
        border-bottom:2px solid black;
        display: inline-block;
        height: 80px;
    }
    .content-wrapper .content{
        padding-top: 42px;
    }
    .content-wrapper .content .item{
        height: 120px;
        line-height: 120px;
    }
    .content-wrapper .content .item:hover{
        box-shadow: 0 0 10px 0 rgba(204,204,204,0.50);
        cursor: pointer;
    }
    .content-wrapper .content .item img{
        vertical-align: middle;
        margin-right: 30px;
    }
    .content-wrapper .content .item span{
        font-family: PingFangSC-Light;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
    }
</style>
