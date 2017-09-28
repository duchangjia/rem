<template>
  <div class="picWrapper">
      <div id="myChart" style='width:500px; height: 400px;'></div>
      <div id="myChart2" style='width:500px; height: 400px;'></div>
  </div>
</template>
<script>
  export default {
        mounted() {
              this.drawLine();
              this.drawLine2();
        },
        methods: {
          drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                })
            },
            drawLine2() {
               var myChart = this.$echarts.init(document.getElementById('myChart2'));
               myChart.setOption({
                    title: {
                        text:'某站点用户访问来源',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        center: ['50%', '50%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                        }
                    }]
               })
            },
        }
  }
</script>
<style>
.picWrapper{
    display: flex;
    padding-left: 300px;
}
</style>
