<template>
    <div class="home_page">
        <current yiji="首页"></current>
        <el-row>
            <el-col :span="24">
                <ul class="list">
                    <li class="list-item cur-pointer" v-for="(item, index) in listObj" v-if="item.show" @click="linkTo(item.url)">
                        <img :src="`../../../static/img/home/${item.img}.png`" alt="" width="56" height="56">
                        <div class="des">
                            <div class="count" v-bind:class="item.class"></div>
                            <div class="text">{{item.listText}}</div>
                        </div>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-row class="news-list">
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
                            <!-- <li class="msg-list clearfix msg-large-list txt-size" v-for="item in newsList" v-bind:class="item.class">
                                <span class="msg-txt ">{{item.txt}}</span>
                                <div class="msg-time">{{item.time}}</div>
                            </li> -->
                            <li class="msg-list clearfix msg-large-list txt-size">
                                <span class="msg-txt ">暂无数据</span>
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
                            <!-- <li class="msg-list clearfix msg-large-list txt-size" v-for="item in newsList" v-bind:class="item.class">
                                <div class="msg-icon"></div>
                                <span class="msg-txt ">{{item.txt}}</span>
                                <div class="msg-time">{{item.time}}</div>
                            </li> -->
                            <li class="msg-list clearfix msg-large-list txt-size">
                                <div class="warning-icon"></div>
                                <span class="msg-txt ">暂无数据</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </el-row>

        <v-DrawBar 
        :rightList="monthList"
        :option="entryOption"
        @jobEchart="jobEchart"
        echartId="jobEchart"
        title="入离职情况(人)"
        ></v-DrawBar>
        <v-DrawLine 
        :rightList="monthList"
        :option="salaryOption"
        @salaryEchart="salaryEchart"
        echartId="salaryEchart"
        title="薪酬发放"
        ></v-DrawLine>
        <el-row :gutter="20">
            <el-col :span="12">
                <v-DrawBar 
                    :rightList="[]"
                    :option="leaveOption"
                    echartId="leaveEchart"
                    title="请假情况"
                ></v-DrawBar>
            </el-col>
            <el-col :span="12">
                <v-DrawLine 
                    :rightList="[]"
                    :option="contractOption"
                    echartId="contractEchart"
                    title="合同到期"
                ></v-DrawLine>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import current from '../common/current_position.vue'
    import vDrawBar from '../common/echart/drawBar.vue'
    import vDrawLine from '../common/echart/drawLine.vue'
    import api from '../../common/api/api.js'
    let{queryStaffFlow,leaveForm,queryPayroll,queryPactForm} = api
    export default {
        data() {
            return {
                number:0,
                payNumber:0,
                entryOption:{},
                salaryOption:{},
                leaveOption:{},
                contractOption:{},
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
                monthList:[
                    {
                        month:'近3月',
                        type:'01',
                        payMonth:3
                    },
                    {
                        month:'近6月',
                        type:'02',
                        payMonth:6
                    },
                    {
                        month:'近一年',
                        type:'03',
                        payMonth:12
                    }
                ]
            }
        },
        components: {
          current,vDrawBar,vDrawLine
        },
        mounted() {
            let self = this;
            self.leaveEchart();//请假信息
            self.contractEchart();//合同到期   
            self.jobEchart();//离入职图表
            self.salaryEchart();//薪酬发放
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
            jobEchart(item){
                console.log(item);
                let params ={},
                    self = this;
                    if(item){
                        params = {
                            monthGapType:item.type
                        };
                    }else{
                        params = {
                            monthGapType:'03'
                        };
                    }
                 let inJobArray = [],
                        monthArray = [],
                        outJobArray = [];

                        for(let i = 0;i<12;i++){
                            inJobArray.push('暂无数据');
                            outJobArray.push('暂无数据');
                            monthArray.push((i+1)+'月')
                        }
                    self.drawBar(inJobArray,outJobArray,monthArray)   
                // self.number=index
                // self.$axios.post(queryStaffFlow,params).then(res=>{
                //     let inJobArray = [],
                //         monthArray = [],
                //         outJobArray = [],
                //         data = res.data.data;

                //         for(let i = 0;i<data[0].length;i++){
                //             inJobArray.push(data[0][i].count);
                //             monthArray.push(data[0][i].month)
                //         }
                //        for(let i = 0;i<data[1].length;i++){
                //             outJobArray.push(data[1][i].count)
                //         }
                //     // console.log(data,inJobArray,outJobArray,monthArray)
                //     self.drawBar(inJobArray,outJobArray,monthArray)
                // })
            },
            salaryEchart(item){
                let self = this,
                    params = {};

                    if(item){
                        params = {month:item.payMonth};
                    }else{
                        params = {month:12};
                    }
                  let monthArray = [],
                        payArray = [];
                    for(let i = 0;i<12;i++){
                        monthArray.push((i+1) + '月')
                        payArray.push('暂无数据')
                    }
                    self.drawLine(monthArray,payArray);  
                // self.payNumber=index
                // self.$axios.get(queryPayroll,{params:params}).then(res=>{
                //     let monthArray = [],
                //         payArray = [],
                //         data = res.data.data;
                //     for(let i = 0;i<data.length;i++){
                //         monthArray.push(data[i].month)
                //         payArray.push(data[i].realHairTotal)
                //     }
                //     self.drawLine(monthArray,payArray);
                // })
            },
            leaveEchart(){
                let self = this;
                let monthArray = [],
                        leaveArray = [];
                        for(let i = 0;i<7;i++){
                            monthArray.push((i+1)+'月')
                            leaveArray.push('暂无数据')
                        }
                        self.drawSmBar(monthArray,leaveArray);
                //  self.$axios.get(leaveForm).then(res=>{
                //      let monthArray = [],
                //         leaveArray = [],
                //         data = res.data.data;
                //         for(let i = 0;i<data.length;i++){
                //             monthArray.push(data[i].month)
                //             leaveArray.push(data[i].leaveNum)
                //         }
                //         self.drawSmBar(monthArray,leaveArray);
                // })
            },
            contractEchart(){
                let self = this;
                let monthArray = [],
                    contractArray = [];
                    for(let i = 0;i<7;i++){
                        monthArray.push((i+1)+'月')
                        contractArray.push('暂无数据')
                    }
                    self.drawSmLine(monthArray,contractArray);
                // self.$axios.get( queryPactForm).then(res=>{
                //     let monthArray = [],
                //         contractArray = [],
                //         data = res.data.data;
                //         for(let i = 0;i<data.length;i++){
                //             monthArray.push(data[i].month)
                //             contractArray.push(data[i].pactNum)
                //         }
                //         self.drawSmLine(monthArray,contractArray);
                // }).catch(e=>{

                // })
            },
            drawBar(inJobArray,outJobArray,monthArray){
                let self = this;
                //定义图表option
                    self.entryOption = {
                    //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
                    title: {
                        //主标题文本，'\n'指定换行
                        
                        //主标题文本超链接
                        link: '',
                        //副标题文本，'\n'指定换行
                        subtext: '',
                        //副标题文本超链接
                        sublink: '',
                        //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'left',
                        //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'top',
                        //设定标题风格
                        textStyle:{
                             //文字颜色
                            color:'#333',
                            //字体风格,'normal','italic','oblique'
                            fontStyle:'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight:'normal',
                            //字体系列
                            fontFamily:'sans-serif',
                            //字体大小
                    　　　　 fontSize:14
                        }
                    },
                    //图表的pianyiliang
                    grid:{  
                        left:'40',
                        x:25,
                        y:45,
                        x2:5,
                        y2:20,
                        borderWidth:1
                    },
                    //提示框，鼠标悬浮交互时的信息提示
                    tooltip: {
                        //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
                        trigger: 'axis',
                        //悬浮后的单位
                        // formatter:'{b1}<br/>{a0}:{c0}人<br/>{a1}:{c1}人'
                        formatter:'{b1}<br/>{c0}'
                    },
                    //图例，每个图表最多仅有一个图例
                    legend: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                        show: false,
                        //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'center',
                        //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'top',
                        //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
                        data: ['入职情况','离职情况']
                    },
                    //工具箱，每个图表最多仅有一个工具箱
                    toolbox: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                        show: true,
                        //启用功能，目前支持feature，工具箱自定义功能回调处理
                        feature: {
                          
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
                            data: monthArray,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            }
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
                            splitArea: {show: true},
                            min: 0,
                            max:500,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            },
                            splitLine:{
                                show:true
                            } 
                        }
                    ],

                    //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
                    series: [
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '入职情况',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: inJobArray,
                            //柱状图的颜色
                            itemStyle:{
                                normal:{
                                    color:'#badcf5'
                                }
                            }
                        },
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '离职情况',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: outJobArray,
                            //柱状图的颜色
                            itemStyle:{
                                normal:{
                                    color:'#7BBFF1'
                                }
                            }
                           
                        }
                    ]
                }
            },
            drawLine(monthArray,payArray) {
                let self = this;
                    self.salaryOption = {
                        title: {
                            text: '',//水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                            x: 'left',
                            //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                            y: 'top',
                            //设定标题风格
                            textStyle:{
                                //文字颜色
                                color:'#333',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'normal',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'sans-serif',
                                //字体大小
                        　　　　 fontSize:14
                            }
                        },
                        legend: {
                            left: 0,
                            padding:0,
                            itemGap: 5
                        },
                        grid:{  
                            left: '40',
                            x:25,
                            y:45,
                            x2:5,
                            y2:20,
                            borderWidth:1
                        },
                        tooltip: {
                            // trigger:'item',
                            // formatter:'{c0}万元',
                            trigger: 'axis',
                            formatter:'{c0}'

                        },
                        xAxis: {
                            data: monthArray,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            }
                        },
                        yAxis:[
                            {
                                min: 0,
                                max: 1000,
                                splitArea: {show: true},
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#333'
                                    }
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'#FF9966'
                                    }
                                }
                            },
                        ],
                        series: [{
                            type:'line',
                            smooth: true,
                            data: payArray
                        }]
                }
            },
            drawSmBar(monthArray,leaveArray){
                let self = this;
                    //定义图表option
                    self.leaveOption = {
                    //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
                    title: {
                        //主标题文本，'\n'指定换行
                        text: '',
                        //主标题文本超链接
                        link: '',
                        //副标题文本，'\n'指定换行
                        subtext: '',
                        //副标题文本超链接
                        sublink: '',
                        //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'left',
                        //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'top',
                        //设定标题风格
                        textStyle:{
                             //文字颜色
                            color:'#333',
                            //字体风格,'normal','italic','oblique'
                            fontStyle:'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight:'normal',
                            //字体系列
                            fontFamily:'sans-serif',
                            //字体大小
                    　　　　 fontSize:14
                        }
                    },
                    //图表的pianyiliang
                    grid:{  
                        left:'40',
                        x:25,
                        y:45,
                        x2:5,
                        y2:20,
                        borderWidth:1
                    },
                    //提示框，鼠标悬浮交互时的信息提示
                    tooltip: {
                        //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
                        // trigger: 'item',
                        //悬浮后的单位
                        // formatter:'{a0}:{c0}人',
                        trigger: 'axis',
                        formatter:'{c0}',
                    },
                    
                    //工具箱，每个图表最多仅有一个工具箱
                    toolbox: {
                        //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                        show: true,
                        //启用功能，目前支持feature，工具箱自定义功能回调处理
                        feature: {
                          
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
                            data: monthArray,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            }
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
                            splitArea: {show: true},
                            min: 0,
                            max:500,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            },
                            splitLine:{
                                show:true
                            } 
                        }
                    ],

                    //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
                    series: [
                        {
                            //系列名称，如果启用legend，该值将被legend.data索引相关
                            name: '请假情况',
                            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                            type: 'bar',
                            //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                            data: leaveArray,
                            //柱状图的颜色
                            itemStyle:{
                                normal:{
                                    color:'#badcf5'
                                }
                            }
                        }
                    ]

                };
               
                // self.draw(id,option);
            },
            drawSmLine(monthArray,contractArray){
                let self = this;
                
                self.contractOption = {
                        title: {
                            text: '',//水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                            x: 'left',
                            //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                            y: 'top',
                            //设定标题风格
                            textStyle:{
                                //文字颜色
                                color:'#333',
                                //字体风格,'normal','italic','oblique'
                                fontStyle:'normal',
                                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                                fontWeight:'normal',
                                //字体系列
                                fontFamily:'sans-serif',
                                //字体大小
                        　　　　 fontSize:14
                            }
                        },
                        legend: {
                            left: 0,
                            padding:0,
                            itemGap: 5
                        },
                        grid:{  
                            left: '40',
                            x:25,
                            y:45,
                            x2:5,
                            y2:20,
                            borderWidth:1
                        },
                        tooltip: {
                            // trigger:'item',
                            // formatter:'{c0}万元',
                            trigger: 'axis',
                            formatter:'{c0}',

                        },
                        xAxis: {
                            data: monthArray,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#FF9966'
                                }
                            }
                        },
                        yAxis:[
                            {
                                min: 0,
                                max: 500,
                                splitArea: {show: true},
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#333'
                                    }
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'#FF9966'
                                    }
                                }
                            },
                        ],
                        series: [{
                            type:'line',
                            smooth: true,
                            data: contractArray
                        }],
                    };
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
                padding:0 20px;
                .des{
                    float: right;
                }
                .count{
                    float: right;
                    margin-bottom: 20px;
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
                            .warning-icon{
                                height:37px;
                                width:40px;
                                background:url('../../../static/img/home/mess4.png') no-repeat #FF7E5F center;
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
</style>
