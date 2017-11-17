<template>
    <div id="home-wrapper" class="grey-bg agg-wrapper">
        <v-head class="home-header"></v-head>
        <div class="wrapper">
           <div class="banner_box">
                <img src="../../../static/img/home/banner.png">
            </div>
            <div class="nav_item clearfix">
                <div class="item-content" v-for="item in navItem" v-bind:class="item.class">
                    <div class="item-list clearfix">
                        <div class="item-list-left"></div>
                        <div class="item-list-right">
                            <div class="item-txt-box">
                                <div class="item-list-txt">
                                    {{item.txt}}
                                </div>
                                <p>{{item.title}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-list">
                <div class="search-item">
                    <div class="search-item-box">
                        <label>人员查找</label>
                        <div class="search-inp-box search-inp-one">
                            <div class="search-inp-tit">
                            </div>
                            <div class="search-inp-con">
                                <input type="text" v-model="searchData.userNo" placeholder="员工姓名/员工编号/邮箱">
                            </div>
                            <div class="search-icon search-inp-tit">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-item">
                    <div class="search-item-box">
                        <label>个人资产查询</label>
                        <div class="search-inp-box search-inp-one  search-inp-two">
                            <div class="search-inp-tit">
                            </div>
                            <div class="search-inp-con">
                                <input type="text" v-model="searchData.userNo" placeholder="员工姓名/员工编号/邮箱">
                            </div>
                            <div class="search-icon search-inp-tit search-icon-two">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<<script>
import vHead from './aggHeader.vue';
import vSidebar from './Sidebar.vue';
    export default {
        data(){
            return{
                navItem:[
                    {
                        class:'item-one-list',
                        txt:'321',
                        title:'个人信息'
                    },
                    {
                        class:'item-two-list',
                        txt:'21',
                        title:'薪资福利'
                    },
                    {
                        class:'item-thr-list',
                        txt:'28',
                        title:'考勤与休假'
                    },
                    {
                        class:'item-four-list',
                        txt:'24',
                        title:'差旅'
                    },
                    {
                        class:'item-five-list',
                        txt:'25',
                        title:'费用报销'

                    }
                ],
                searchData:{
                    userNo:'',
                    accountNo:''
                }
            }
           
        },
        components:{
            vHead
        }
    }
</script>
<style>
.agg-wrapper .banner_box img{width:100%;display:block;max-width:100%;height:auto;}
.agg-wrapper .nav_item{padding:20px 0;clear: both;display:flex;justify-content:space-between;margin-left: -10px;margin-right: -10px;}
.agg-wrapper .nav_item .item-content{width:20%;float:left;padding:0 10px; overflow:hidden;}
.agg-wrapper .nav_item .item-content .item-list{background:#fff;height:120px;cursor:pointer;overflow:hidden;}
.agg-wrapper .wrapper{height:auto;}
.agg-wrapper .nav_item .item-content .item-list .item-list-right{float: right;height:100%;width:50%;text-align:right;padding-right:20px;}
.agg-wrapper.grey-bg{background:#f4f4f4}
.agg-wrapper .nav_item .item-content .item-list .item-txt-box{color:#464646;}
.agg-wrapper .nav_item .item-content .item-list .item-txt-box .item-list-txt{font-size:18px;font-weight:500;margin-top:40px;margin-bottom:2px;}
.agg-wrapper .search-list{display:flex;justify-content:space-between;background:#f4f4f4;margin-left: -10px;margin-right: -10px;}
.agg-wrapper .search-list .search-item{width:50%;padding-left:10px;padding-right:10px;}
.agg-wrapper .search-list .search-item .search-item-box{background:#fff;padding:20px;padding-bottom:15px;}
.agg-wrapper .search-list .search-item .search-item-box label{font-weight:normal;margin-bottom:0;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box{border:1px solid #f8b62d;margin-top:20px;height:90px;position:relative;box-sizing:border-box;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box>div{float:left;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box .search-inp-tit{height:89px;width:90px;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-one .search-inp-tit{background:url('../../../static/img/home/mail.png') no-repeat center #f8b62d;}
.agg-wrapper .nav_item .item-one-list .item-list .item-txt-box .item-list-txt{color:#53a7e1}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box .search-inp-con{padding-left:20px;height:90px;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box .search-inp-con input{height:100%;width:100%;padding-left:20px;outline:none;border:1px solid #f4f4f4;border-radius: 4px;width:360px;height:40px;line-height:40px;margin-top:25px;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-box .search-icon{float:right;background:url('../../../static/img/home/search1.png') no-repeat center;cursor:pointer}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-two {border-color:#53a7e1;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-two .search-inp-tit.search-icon-two{background:url('../../../static/img/home/search2.png') no-repeat center;}
.agg-wrapper .search-list .search-item .search-item-box .search-inp-two .search-inp-tit{background:url('../../../static/img/home/zccx.png') no-repeat center #53a7e1;}
.agg-wrapper .nav_item .item-two-list .item-list .item-txt-box .item-list-txt{color:#ff6600}
.agg-wrapper .nav_item .item-thr-list .item-list .item-txt-box .item-list-txt{color:#ff9900}
.agg-wrapper .nav_item .item-four-list .item-list .item-txt-box .item-list-txt{color:#fdcf58}
.agg-wrapper .nav_item .item-five-list .item-list .item-txt-box .item-list-txt{color:#a5d16c}
.agg-wrapper .nav_item .item-one-list .item-list .item-list-left{background:url('../../../static/img/home/grxx.png') no-repeat;}
.agg-wrapper .nav_item .item-two-list .item-list .item-list-left{background:url('../../../static/img/home/xzfl.png') no-repeat}
.agg-wrapper .nav_item .item-thr-list .item-list .item-list-left{background:url('../../../static/img/home/kq&xj.png') no-repeat}
.agg-wrapper .nav_item .item-four-list .item-list .item-list-left{background:url('../../../static/img/home/sqlx.png') no-repeat}
.agg-wrapper .nav_item .item-five-list .item-list .item-list-left{background:url('../../../static/img/home/fybx.png') no-repeat}
.agg-wrapper .nav_item .item-content .item-list .item-list-left{float: left;height:100%;width:50%;background-position: 20px center;}
</style>

