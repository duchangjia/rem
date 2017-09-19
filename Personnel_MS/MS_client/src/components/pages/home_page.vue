<template>
    <div class="home_page">
        <div class="location-wrapper">
            <span class="current-location">当前位置：首页</span>
            <span class="search"><input type="text" class="search-text"><i class="search-icon"></i></span>
        </div>
        <ul class="list">
            <li class="list-item">
                <img src="../../../static/img/home/xmyl.png" alt="" width="56" height="56">
                <div class="des">
                    <div class="count">321</div>
                    <div class="text">项目一览</div>
                </div>
            </li>
            <li class="list-item">
                <img src="../../../static/img/home/xmyl.png" alt="" width="56" height="56">
                <div class="des">
                    <div class="count">321</div>
                    <div class="text">项目一览</div>
                </div>
            </li>
            <li class="list-item">
                <img src="../../../static/img/home/xmyl.png" alt="" width="56" height="56">
                <div class="des">
                    <div class="count">321</div>
                    <div class="text">项目一览</div>
                </div>
            </li>
            <li class="list-item">
                <img src="../../../static/img/home/xmyl.png" alt="" width="56" height="56">
                <div class="des">
                    <div class="count">321</div>
                    <div class="text">项目一览</div>
                </div>
            </li>
            <li class="list-item">
                <img src="../../../static/img/home/xmyl.png" alt="" width="56" height="56">
                <div class="des">
                    <div class="count">321</div>
                    <div class="text">项目一览</div>
                </div>
            </li>
        </ul>
        <div class="content-wrapper">
            <div class="content-left" id="mychart1"></div>
            <div class="content-right" id="mychart2"></div>
        </div>
        <div class="content-wrapper">
            <div class="content-left" id="mychart3"></div>
            <div class="content-right" id="mychart4"></div>
        </div>
        <div class="content-wrapper">
            <div class="content-left info-msg"></div>
            <div class="content-right"></div>
        </div>
        <div class="content-wrapper">
            <div class="item-pro"></div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        mounted() {
            this.drawLine1();
            this.drawLine2();
//            this.drawLine3();
//            this.drawLine4();
        },
        methods: {
            drawLine1() {
                let myChart = this.$echarts.init(document.getElementById('myChart1'))
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
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

<style scoped>
    .home_page *{
        padding: 0;
        margin: 0;
    }
    .location-wrapper{
        margin: 20px 0;
        display: flex;
    }
    .current-location, .search{
        display: inline-block;
        height: 30px;
        background: #fff;
        box-sizing: border-box;
        line-height: 30px;
    }
    .current-location{
        width: 670px;
        margin-right: 20px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        padding-left: 10px;
    }
    .search{
        display: inline-flex;
        width: 390px;
        vertical-align: middle;
    }
    .search-text{
        flex: 1;
        border: none;
        text-indent: 1em;
    }
    .search-icon{
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        background: #E6E6E6 url(../../../static/img/home/search3.png) no-repeat center;
        cursor: pointer;
    }
    .list{
        display: flex;
    }
    .list-item{
        float: left;
        width: 216px;
        height: 100px;
        background: #fff;
        list-style: none;
        box-sizing: border-box;
        padding: 20px 20px 24px 20px;
    }
    .list-item .des{
        float: right;
        margin-left: 56px;
    }
    .list-item .count{
        float: right;
        margin-bottom: 12px;
        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #FF6600;
        letter-spacing: -0.58px;
        line-height: 24px;
    }
    .list-item .text{
        float: right;
        clear: both;
        font-family: PingFangSC-Light;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 16px;
    }
    .content-wrapper{
        margin: 20px 0;
        overflow: hidden;
    }
    .content-wrapper .content-left{
        width: 530px;
        height: 344px;
        background: red;
        margin-right: 20px;
        float: left;
    }
    .content-wrapper .content-right{
        width: 530px;
        height: 344px;
        background: gold;
        float: left;
    }


    .content-wrapper .info-msg{
        padding: 20px 20px 24px 20px;
    }
</style>
