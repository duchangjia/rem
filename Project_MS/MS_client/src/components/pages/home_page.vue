<template>
    <div class="home_page">
        <!--<div class="location-wrapper">-->
            <!--<span class="current-location">当前位置：首页</span>-->
            <!--<span class="search"><input type="text" class="search-text"><i class="search-icon"></i></span>-->
        <!--</div>-->
        <current yiji="首页"></current>
        <el-row>
            <el-col :span="24">
                <ul class="list">
                    <li class="list-item cur-pointer" v-for="(item, index) in listObj" v-if="item.show" @click="linkTo(item.url)">
                        <img :src="`../../../static/img/home/${item.img}.png`" alt="" width="56" height="56">
                        <div class="des">
                            <div class="count" v-bind:class="item.class">{{item.listData}}</div>
                            <div class="text">{{item.listText}}</div>
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <div class="news-list">
                <div class="msg-item msg-large-item">
                    <div class="msg-item-box">
                        <div class="msg-item-head clearfix">
                            <div class="msg-item-tit tit-size">
                                代办事宜
                            </div>
                            <div class="more-icon tit-size">
                                MORE
                            </div>
                        </div>
                        <div class="msg-content">
                            <ul>
                                <li class="msg-list clearfix msg-large-list txt-size" v-for="item in newsList" v-bind:class="item.class">
                                    <span class="msg-txt ">{{item.txt}}</span>
                                    <div class="msg-time">{{item.time}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="msg-item msg-large-item">
                    <div class="msg-item-box">
                        <div class="msg-item-head clearfix">
                            <div class="msg-item-tit tit-size">
                                事件提醒
                            </div>
                            <div class="more-icon tit-size">
                                MORE
                            </div>
                        </div>
                        <div class="msg-content">
                            <ul>
                                <li class="msg-list clearfix msg-large-list txt-size" v-for="item in newsList" v-bind:class="item.class">
                                    <div class="msg-icon"></div>
                                    <span class="msg-txt ">{{item.txt}}</span>
                                    <div class="msg-time">{{item.time}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        

            <!--<div class="content-wrapper">-->
        <el-row style="margin: 20px 0; overflow: hidden;" class="common-chart">
            <el-col :span="12"><div class="content-left" id="myChart1"></div></el-col>
            <el-col :span="12"><div class="content-right" id="myChart2"></div></el-col>
        </el-row>
        <el-row style="margin: 20px 0; overflow: hidden;" class="common-chart">
            <el-col :span="12"><div class="content-left" id="myChart3"></div></el-col>
            <el-col :span="12"><div class="content-right" id="myChart4"></div></el-col>
        </el-row>
            <!--</div>-->

        <!--<div class="content-wrapper">-->
            <!--<div class="content-left" id="myChart1"></div>-->
            <!--<div class="content-right" id="myChart2"></div>-->
        <!--</div>-->
        <!--<div class="content-wrapper">-->
            <!--<div class="content-left" id="myChart3"></div>-->
            <!--<div class="content-right" id="myChart4"></div>-->
        <!--</div>-->
        <div class="content-wrapper">
            <el-row>
                <el-col :span="12">
                    <div class="content-left info-msg common">
                        <div class="title-wrapper"><span class="title">提示信息</span><a href="#" class="more">MORE</a></div>
                        <ul class="info-msg-list">
                            <li class="info-msg-item" v-for="item in infoObj" >
                                <i class="info-msg-icon"></i>{{item.content}}<span class="text">{{item.date}}</span>
                            </li>
                            <!--<li class="info-msg-item">-->
                                <!--<i class="info-msg-icon"></i>写点东西<span class="text">刚刚</span>-->
                            <!--</li>-->
                            <!--<li class="info-msg-item">-->
                                <!--<i class="info-msg-icon"></i>写点东西<span class="text">刚刚</span>-->
                            <!--</li>-->
                            <!--<li class="info-msg-item">-->
                                <!--<i class="info-msg-icon"></i>写点东西<span class="text">刚刚</span>-->
                            <!--</li>-->
                            <!--<li class="info-msg-item">-->
                                <!--<i class="info-msg-icon"></i>写点东西<span class="text">刚刚</span>-->
                            <!--</li>-->
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="content-right todo common">
                        <div class="event">
                            <div class="title-wrapper"><span class="title">代办事宜</span><a href="#" class="more">MORE</a></div>
                            <ul class="todo-list-common">
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                                <li class="line"></li>
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                                <li class="line"></li>
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                            </ul>
                        </div>
                        <div class="remind">
                            <div class="title-wrapper"><span class="title">信息提醒</span><a href="#" class="more">MORE</a></div>
                            <ul class="todo-list-common">
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                                <li class="line"></li>
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                                <li class="line"></li>
                                <li>xiediandongxi.......<span class="date">2016-10-10</span></li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="23">
                <div class="content-wrapper item-pro">
                    <div class="pro-title">项目进度表</div>
                    <el-table
                            stripe
                            :data="tableData"
                            border
                            style="width: 1040px">
                        <el-table-column
                                align="center"
                                prop="date"
                                label="日期"
                                width="260">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                label="姓名"
                                width="260">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="地址">
                            <template scope="scope">
                                <el-progress :percentage="scope.row.progress"></el-progress>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import current from '../common/current_position.vue'
    import api from '../../common/api/api.js'
    let{ jurisdictionUrl  } = api
    export default {
        data() {
            return {
                listObj:[
                    {
                        img:'ygxxcx1',
                        show:true,
                        url:'/personnel_archives',
                        listText:'员工查询'
                        ,listData:'321'
                        ,class:'c-blue'
                    },
                    {
                        img:'ygxz1',
                        show:true,
                        url:'/add_archives',
                        listText:'员工新增'
                        ,listData:'321'
                        ,class:'c-pink'
                    },
                    {
                        img:'htxz1',
                        show:true,
                        url:'/add_contract',
                        listText:'合同新增'
                        ,listData:'321'
                        ,class:'c-green'
                    },
                    {   
                        img:'zcxz1',
                        show:true,
                        url:'/add_asset',
                        listText:'资产新增'
                        ,listData:'321'
                        ,class:'c-yellow'
                    },
                    {
                        img:'rstd1',
                        show:true,
                        url:'/personnel_transfer',
                        listText:'人事调动'
                        ,listData:'321'
                        ,class:'c-rgreen'
                    }
                ],
                newsList:[
                    {
                        class:'',
                        txt:'药药切克闹,煎饼果子来一套',
                        link:'',
                        time:'刚刚'
                    },
                    {
                        class:'msg-sec-list',
                        txt:'一个鸡蛋一块钱,喜欢脆的多放面',
                        link:'',
                        time:'15分钟前'
                    },
                    {
                        class:'',
                        txt:'药药切克闹,煎饼果子来一套',
                        link:'',
                        time:'刚刚'
                    },
                    {
                        class:'msg-sec-list',
                        txt:'一个鸡蛋一块钱,喜欢脆的多放面',
                        link:'',
                        time:'15分钟前'
                    },
                    {
                        class:'',
                        txt:'药药切克闹,煎饼果子来一套',
                        link:'',
                        time:'刚刚'
                    }
                ],
                toDoList:[
                    {
                        class:'war-class',
                        txt:'张三提交了请假单',
                        link:'',
                        time:'2017-8-30'
                    },
                    {
                        class:'',
                        txt:'李四提交了工作周报',
                        link:'',
                        time:'2017-8-30'
                    },
                    {
                        class:'',
                        txt:'王五提交了请假单',
                        link:'',
                        time:'2017-8-30'
                    }
                ],
                infoObj: [
                    {content: '写点东西', date: '刚刚'},
                    {content: '写点东西', date: '刚刚'},
                    {content: '写点东西', date: '刚刚'},
                    {content: '写点东西', date: '刚刚'},
                    {content: '写点东西', date: '刚刚'},
                ],
                todoObj: [
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                ],
                remindObj: [
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                    {content: '写点东西', date: '2016-10-10'},
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    progress: 40,
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    progress: 50,
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    progress: 60,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    progress: 70,
                }],
            }
        },
        components: {
          current,
        },
        mounted() {
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
            this.drawLine4();
            this.getList();
        },
        methods: {
            linkTo(url){
                this.$router.push(url);
            },
            getList(){
                let self = this;
                    
                self.$axios.get(jurisdictionUrl).then(res=>{
                    console.log(res)
                })
            },
            drawLine1() {
                let myChart = this.$echarts.init(document.getElementById('myChart1'))
                myChart.setOption({
                    title: {
                        text: '部门收入趋势',
                        textStyle: {
                            fontFamily: "PingFangSC-Light",
                            fontSize: 16,
                            lineHeight: 20
                        }
                    },
                    legend: {
                        left: 0,
                        padding:0,
                        itemGap: 5,
                        formatter: function (name) {
                            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
                        },
                        tooltip: {
                            show: true
                        },
                        backgroundColor:'#111',
//                        label: {
//                            show: true,
//                            formatter: function (params) {
//                                return params.value + '万元';
//                            }
//                        }
                    },
                    grid: {
                        show:true,
                        left: '7%',
                        top: 70,
                        borderColor:'transparent',
                        //containLabel: true        // 让轴标签能在内容区里
                    },
                    tooltip: {
                        trigger: 'axis',           // 要配合下面属性一起用。提示X轴信息
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    xAxis: {
                        data: ["一月", "二月", "三月", "四月", "五月", "六月"],
                        axisTick: {
                            alignWithLabel: true           // 让X轴刻度位于data数据正中
                        }
                    },
                    yAxis:[{
//                            type: 'value',
//                            min: 0,
//                            max: 500,
//                            interval: 100,
//                            axisLabel: {
//                                formatter: '{value} 万元'
//                            },
                            name: '万元',
                            splitArea: {
                              show: true,
                                areaStyle: {
                                  color: ['#F9F9F9','#fff']
                                }
                            },
                        },
                    ],
                    series: [{
                        name: '收入',
                        type:'line',
//                        yAxisIndex: 1,   //如果是双Y轴坐标，index1表示使用右侧Y轴
                        smooth: true,
                        data: [50, 250, 150, 300, 270, 450]
                    }],
                    backgroundColor: '#fff',
                })
            },
            drawLine2() {
                var myChart = this.$echarts.init(document.getElementById('myChart2'));
                myChart.setOption({
                    title: {
                        text:'饼状图',
//                        subtext: '纯属虚构',
//                        x: 'center'
                    },
                    backgroundColor: '#fff',
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    legend: {
//                        x : 'center',
//                        y : 'bottom',
                        orient: 'vertical',
                        // x: 'left',
                        right:'10%',
                        bottom:'center',
                        height:80,
//                        padding:20,
//                        align:'left',
//                        itemGap:'100',
//                        itemWidth:30,
//                        itemHeight:38,
                        data:['TeamA','TeamB','TeamC','TeamD','TeamE','TeamF'],
                        tooltip: {
                            show: true
                        }
                    },
//                    color: ['#000'],   //柱子或者图效颜色
                    series : [
                        {
//                            type:'bar',
//                            barWidth: '20%',   //柱状图柱子的宽度
                            name:'访问来源',
                            type:'pie',
                            radius : [30, 110],
                            center : ['25%', '55%'],
                            roseType : 'radius',
                            avoidLabelOverlap:false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '16',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {value:42, name:'TeamA'},
                                {value:37, name:'TeamB'},
                                {value:18, name:'TeamC'},
                                {value:12, name:'TeamD'},
                                {value:10, name:'TeamE'},
                                {value:5, name:'TeamF'},
                            ]
                        },
                    ]
                })
            },
            drawLine3() {
                var myChart = this.$echarts.init(document.getElementById('myChart3'));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        // x: 'left',
                        right:'10%',
                        bottom:'center',
                        data:['直达','邮件营销','联盟广告']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['40%', '55%'],
                            hoverAnimation: false,
                            avoidLabelOverlap:false,
                            label: {
                                normal: {
                                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                    backgroundColor: '#eee',
                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 12,
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'直达',selected:true},
                                {value:310, name:'邮件营销',selected:true},
                                {value:234, name:'联盟广告',selected:true},
                            ]
                        }
                    ]
                })
//                var dataStyle = { //作用不明
//                    normal: {
//                        label: {show:false},
//                        labelLine: {show:false},
//                        shadowBlur: 40,
//                        shadowColor: 'rgba(40, 40, 40, 0.5)',
//                    }
//                };
//                var placeHolderStyle = { //作用不明  原来是这是pie图里面的
//                    normal : {
//                        color: 'rgba(0,0,0,0)',
//                        label: {show:false},
//                        labelLine: {show:false}
//                    },
//                    emphasis : {
//                        color: 'rgba(0,0,0,0)'
//                    }
//                };
//                var option = {
//                    backgroundColor: '#fff', //图表的配置颜色
//                    color: ['#45e8bc', '#33d7fb','#ffdf34','#eeeeee'], //每一项对应的颜色
//                    tooltip : {  //提示框组件
//                        show: true,
//                        formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
//                    },
//                    legend: {  //图例组件
//                        orient:'vertical', //图例的布局朝向
//                        x:400,  //图例的位置--离左边的距离
//                        y:50,  //图例的位置--离上边的距离
//                        itemGap:20, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
//                        data:['高血压','高血脂','高血糖','会员总数']
//                    },
//                    series : [  //系列列表
//                        {
//                            name:'高血压',  //名字--用于tooltip的显示
//                            type:'pie',    //类型--饼状图
//                            clockWise:false,   //饼图的扇区是否是顺时针排布。
//                            radius : [90,115], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
//                            center:['30%', '50%'], //饼图片的中心
//                            itemStyle : dataStyle, //样式
//                            hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
//                            zlevel:2,
////                            avoidLabelOverlap:true,
//                            data:[  //系列中的数据内容数组
//                                {
//                                    value:360,     //数据值总的值
//                                    name:'高血压'  //数据项名称。
//                                },
//                                {
//                                    value:60,     //剩下的值
//                                    name:'invisible',
//                                    itemStyle : placeHolderStyle
//                                }
//
//                            ],
//                        },
//                        {
//                            name:'高血脂',
//                            type:'pie',
//                            clockWise:false,
//                            radius : [70, 90],
//                            center:['30%', '50%'], //饼图片的中心
//                            itemStyle : dataStyle,
//                            hoverAnimation: false,
//                            zlevel:100,
//                            data:[
//                                {
//                                    value:360,   //数据值总的值
//                                    name:'高血脂'
//                                },
//                                {
//                                    value:270,
//                                    name:'invisible',
//                                    itemStyle : placeHolderStyle
//                                }
//                            ]
//                        },
//                        {
//                            name:'高血糖',
//                            type:'pie',
//                            clockWise:false,
//                            hoverAnimation: false,
//                            radius : [50, 70],
//                            center:['30%', '50%'], //饼图片的中心
//                            itemStyle : dataStyle,
//
//                            data:[
//                                {
//                                    value:360,
//                                    name:'高血糖'
//                                },
//                                {
//                                    value:300,
//                                    name:'invisible',
//                                    itemStyle : placeHolderStyle
//                                }
//                            ]
//                        },
//                        {
//                            name:'会员总数',
//                            type:'pie',
//                            clockWise:false,
//                            hoverAnimation: false,
//                            radius : [90,115],
//                            center:['30%', '50%'], //饼图片的中心
//                            itemStyle : dataStyle,
//                            zlevel:1,
//                            data:[
//                                {
//                                    value:360,
//                                    name:'会员总数'
//                                },
//                                {
//                                    value:0,
//                                    name:'invisible',
//                                    itemStyle : placeHolderStyle
//                                }
//                            ],
//                        },
//                    ]
//                };
//                myChart.setOption(option);
            },
            drawLine4() {
                let myChart = this.$echarts.init(document.getElementById('myChart4'))
                //定义图表option
                var option = {
                    //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
                    title: {
                        //主标题文本，'\n'指定换行
                        text: '2013年广州降水量与蒸发量统计报表',
                        //主标题文本超链接
                        link: 'http://www.tqyb.com.cn/weatherLive/climateForecast/2014-01-26/157.html',
                        //副标题文本，'\n'指定换行
                        subtext: 'www.stepday.com',
                        //副标题文本超链接
                        sublink: 'http://www.stepday.com/myblog/?Echarts',
                        //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'left',
                        //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'top'
                    },
                    //提示框，鼠标悬浮交互时的信息提示
                    tooltip: {
                        //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
                        trigger: 'axis'
                    },
                    //图例，每个图表最多仅有一个图例
                    legend: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                        show: true,
                        //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'center',
                        //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'top',
                        //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
                        data: ['蒸发量','降水量']
                    },
                    //工具箱，每个图表最多仅有一个工具箱
                    toolbox: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                        show: true,
                        //启用功能，目前支持feature，工具箱自定义功能回调处理
                        feature: {
                            //辅助线标志
                            mark: {show: true},
                            //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
                            dataZoom: {
                                show: true,
                                title: {
                                    dataZoom: '区域缩放',
                                    dataZoomReset: '区域缩放后退'
                                }
                            },
                            //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
                            dataView: {show: true, readOnly: true},
                            //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
                            magicType: {show: true, type: ['line', 'bar']},
                            //restore，还原，复位原始图表
                            restore: {show: true},
                            //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
                            saveAsImage: {show: true}
                        }
                    },
                    //是否启用拖拽重计算特性，默认关闭(即值为false)
                    calculable: true,
                    //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
                    //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
                    xAxis: [
                        {
                            //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                            show: true,
                            //坐标轴类型，横轴默认为类目型'category'
                            type: 'category',
                            //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
                    //纵轴通常为数值型，但条形图时则纵轴为类目型
                    yAxis: [
                        {
                            //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                            show: true,
                            //坐标轴类型，纵轴默认为数值型'value'
                            type: 'value',
                            //分隔区域，默认不显示
                            splitArea: {show: true}
                        }
                    ],

                    //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
                    series: [
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '蒸发量',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                            //系列中的数据标注内容
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            //系列中的数据标线内容
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '降水量',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                            //系列中的数据标注内容
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            //系列中的数据标线内容
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                };

                //为echarts对象加载数据
                myChart.setOption(option);
            }

        }
    }
</script>

<style scoped lang="scss">
    .home_page{
        padding-left: 20px;
        padding-bottom: 20px;
        .list{
            @include clearfix;
            background:$bg-wihte;
            padding:20px 0;
            .list-item{
                float: left;
                width:20%;
                padding:0 30px;
                .des{
                    float: right;
                }
                .count{
                    float: right;
                    margin-bottom: 12px;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    letter-spacing: -0.58px;
                    line-height: 24px;
                }
                .text{
                    float: right;
                    clear: both;
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0;
                    line-height: 16px;
                }
            }
        }
        .news-list{
            margin-bottom:0;
            position:relative;
            margin-top:20px;
            @include clearfix;
            .msg-item{
                width:50%;
                display:block;
                float: left;
                padding-right:10px;
                &:last-child{
                    padding-left:10px;
                    padding-right:0;
                }
                .msg-item-box{
                    background:#fff;
                    padding:20px;
                    padding-bottom:15px;
                    .msg-item-head{
                        padding-bottom:20px;
                        .msg-item-tit{
                            float:left;
                        }
                        .more-icon{
                            float:right;
                            color:#ff9900;
                            cursor:pointer;
                        }
                    }
                    .msg-content{
                        .msg-list{
                            background:#f4f8ff;
                            cursor:pointer;
                            margin-bottom:10px;
                            padding-right:10px;
                            height: 25px;
                            line-height: 25px;
                            .war-class{
                                background:#fef6f4;
                                &:last-child{
                                    margin-bottom: 0;
                                }
                            }
                            .msg-icon{
                                height:37px;
                                width:40px;
                                background:url('../../../static/img/home/mess4.png') no-repeat #a5d16c center;
                                float:left;
                            }
                            .msg-txt{
                                display:inline-block;
                                padding-left:10px;
                            }
                            &.msg-sec-list{
                                .msg-icon{
                                    background:url('../../../static/img/home/mess3.png') no-repeat #fdcf58 center; 
                                }
                            } 
                            .msg-time{
                                float:right;
                            }
                        }
                        .msg-large-list{
                            height:37px;
                            line-height: 37px;
                            background:#f9f9f9;
                        }
                    }
                }
            }
    }
    }
    .content-wrapper{
        margin: 20px 0;
        overflow: hidden;
    }
    .common-chart .content-left{
        width: 530px;
        height: 344px;
        background: #fff;
        margin-right: 20px;
        float: left;
        box-sizing: border-box;
    }
    .common-chart .content-right{
        width: 530px;
        height: 344px;
        background: #fff;
        float: left;
        box-sizing: border-box;
    }
    .content-wrapper .content-left{
        width: 530px;
        height: 344px;
        background: #fff;
        margin-right: 20px;
        float: left;
        box-sizing: border-box;
    }
    .content-wrapper .content-right{
        width: 530px;
        height: 344px;
        background: #fff;
        float: left;
        box-sizing: border-box;
    }
    .common-chart #myChart1{
        padding: 20px 30px 20px 20px;
        /*background: #fff !important;*/
    }
    .common-chart #myChart2{
        padding: 20px 30px 38px 20px;
        /*background: #fff !important;*/
    }
    .common-chart #myChart3{
        padding: 20px 30px 51px 20px;
        background: #fff !important;
    }
    .common-chart #myChart4{
        padding: 20px 14px 30px 20px;
        background: #fff !important;
    }
    .content-wrapper .info-msg{
        padding: 20px 20px 24px 20px;
        height: 324px;
    }
    .title-wrapper{
        margin-bottom: 20px;
        padding-right: 10px;
    }
    .content-wrapper .common .title{
        font-family: PingFangSC-Light;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 20px;
        display: inline-block;
        height: 20px;
    }
    .content-wrapper .common .more{
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #FF6600;
        letter-spacing: 0;
        line-height: 20px;
        float: right;
        height: 20px;
    }
    .info-msg-item{
        width: 490px;
        height: 40px;
        margin-bottom: 10px;
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        line-height: 40px;
        background:  #F9F9F9;
        overflow: hidden;
        padding-right: 10px;
    }
    .info-msg-list .info-msg-icon{
        width: 38px;
        height: 40px;
        float: left;
        background: #A5D16C url("../../../static/img/home/mess4.png") no-repeat center;
        margin-right: 10px;
    }
    .info-msg-list .text{
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        float: right;
    }
    .content-wrapper .todo{
        height: auto;
        background: transparent;
    }
    .todo .event, .todo .remind{
        /*width: 530px;*/
        /*height: 152px;*/
        /*box-sizing: border-box;*/
        margin-bottom: 20px;
        padding: 20px 20px 12px 20px;
        background: #fff;
    }
    .todo .remind{
        margin-bottom: 0px;
        padding-bottom: 16px;
    }
    .todo .remind .title-wrapper{
        margin-bottom: 16px;
    }
    .common .todo-list-common{
        width: 490px;
        height: 80px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .common .todo-list-common li{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }
    .common .todo-list-common li:first-child{
        background: #FEF6F4;
    }
    .common .todo-list-common li:last-child, .common .todo-list-common li:nth-child(3){
        background: #F4F8FF;
    }
    .common .todo-list-common .line{
        flex: 0 0 3px;
    }
    .item-pro{
        /*width: 1080px;*/
        height: 324px;
        padding: 20px 20px 43px 20px;
        background: #fff;
    }
    .item-pro .pro-title{
        font-family: PingFangSC-Light;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 20px;
        height: 20px;
        margin-bottom: 20px;
    }

</style>
