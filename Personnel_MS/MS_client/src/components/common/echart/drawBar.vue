<template>
    <el-row class="news-list common-chart">
        <el-col :span="24">
            <div class="canvas-box" :id="echartId"></div>
        </el-col>
        <div class="chart-button-list" v-show="rightList.length>0">
            <span class="c-dark" v-for="(item,index) of rightList" @click="chooseMonth(index,item)" :class="{'active':index==number}">{{item.month}}</span>
        </div>
    </el-row>
</template>
<script>
export default {
    data(){
        return{
            number:2
        }
    },
    
    watch:{
        option(option){
            console.log(option,'watch')
             let self = this;   
    //   self.optionNum = self.option
            self.draw(option); 
        }
    },
    methods:{
        draw(option){ 
            console.log(echartId,'option')
            // self.echartId = ;
            let echartId = this.echartId,
                myChart = this.$echarts.init(document.getElementById(echartId));
            //为echarts对象加载数据
            console.log(myChart,'myChart')
            myChart.setOption(option);
        },
        chooseMonth(index,item){
            let self = this;
            self.number=index;
            self.$emit('jobEchart',item);
        }
    },
    props:{
      rightList:{
          type:Array,
          default:[]
      },
      option:{
          type:Object,
          default:{}
      },
      echartId:{
          type:String,
          default:''
      }
    }
}
</script>
<style scoped lang="scss">
    
</style>

