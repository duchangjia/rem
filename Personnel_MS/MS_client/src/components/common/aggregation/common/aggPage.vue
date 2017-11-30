<template>
    <div id="home-wrapper" class="grey-bg agg-wrapper">
        <v-head class="home-header"></v-head>
        <div class="wrapper">
           <div class="banner_box">
                <img src="../../../../../static/img/home/banner.png">
            </div>
            <div class="nav_item clearfix">
                <div class="item-content" v-for="item in navItem" v-bind:class="item.class" @click="linkToItem(item.url)">
                    <div class="item-list clearfix">
                        <div class="item-list-left"></div>
                        <div class="item-list-right">
                            <div class="item-txt-box">
                                <div class="item-list-txt">
                                    {{item.txt}}
                                </div>
                                <p class="tit-size">{{item.title}}</p>
                            </div>
                        </div>
                        <div class="unUse_item"></div>
                    </div>
                </div>
            </div>
            <div class="search-list">
                <div class="search-item">
                    <div class="search-item-box">
                        <label class="tit-size">人员查找</label>
                        <div class="search-inp-box search-inp-one">
                            <div class="search-inp-tit">
                            </div>
                            <div class="search-inp-con">
                                <input type="text" v-model="searchData.userNo" placeholder="员工姓名/员工编号/邮箱">
                            </div>
                            <div class="search-icon search-inp-tit" @click="searchUser()">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-item">
                    <div class="search-item-box">
                        <label class="tit-size">个人资产查询</label>
                        <div class="search-inp-box search-inp-one  search-inp-two">
                            <div class="search-inp-tit">
                            </div>
                            <div class="search-inp-con">
                                <input type="text" v-model="searchData.accountNo" placeholder="员工姓名/员工编号/邮箱"  disabled="disabled">
                            </div>
                            <div class="search-icon search-inp-tit search-icon-two" @click="searchAsset()">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-list">
                <div class="msg-item msg-large-item">
                    <div class="msg-item-box">
                        <div class="msg-item-head clearfix">
                            <div class="msg-item-tit tit-size">
                                最新资讯
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
                <div class="msg-item">
                    <div class="msg-item-box">
                        <div class="msg-item-head clearfix">
                            <div class="msg-item-tit tit-size">
                                待办事宜
                            </div>
                            <div class="more-icon tit-size">
                                MORE
                            </div>
                        </div>
                        <div class="msg-content">
                            <ul>
                                <li class="msg-list clearfix  txt-size" v-for="item in toDoList" v-bind:class="item.class" >
                                    <span class="msg-txt ">{{item.txt}}</span>
                                    <div class="msg-time">{{item.time}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="msg-item-box mt">
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
                                <li class="msg-list clearfix  txt-size" v-for="item in toDoList" v-bind:class="item.class">
                                    <span class="msg-txt ">{{item.txt}}</span>
                                    <div class="msg-time">{{item.time}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>   
            </div>
            <el-dialog :title="dialogTxt.title" :visible.sync="dialogTableVisible" size="large" >
                <p  v-show="assetShow">若实际使用的IT资产情况与以下显示信息不符，还请及时与后台人员联系核实并更改以确保您名下资产的准确性</p>
                <el-table :data="gridData" v-show="assetShow" height="200" stripe>
                    <el-table-column prop="" label="序号"  align="center">
                        <template scope="scope">
                            {{scope.$index+1}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="assetNo" label="资产编码"  align="center"></el-table-column>
                    <el-table-column prop="organName" label="公司" align="center"></el-table-column>
                    <el-table-column prop="assetType" label="资产类型" align="center" :formatter="assetTypeFormatter"></el-table-column>
                    <el-table-column prop="custName" label="使用人"  align="center"></el-table-column>
                </el-table>
                <el-table :data="gridData" v-show="userShow" stripe>
                    <el-table-column prop="custName" label="姓名"  align="center"></el-table-column>
                    <el-table-column prop="userNo" label="工号" align="center"></el-table-column>
                    <el-table-column prop="derpName" label="部门" align="center"></el-table-column>
                    <el-table-column prop="comEmail" label="公司邮箱"  align="center"></el-table-column>
                    <el-table-column prop="custPost" label="职位" align="center"></el-table-column>
                    <el-table-column prop="organName" label="合同实体" align="center"></el-table-column>
                </el-table>
        </el-dialog> 
        </div>
         <v-footer class="home-footer"></v-footer> 
    </div>
</template>
<<script>
import vHead from './aggHeader.vue';
import vFooter from './footer.vue';
    export default {
        data(){
            return{
                navItem:[
                    {
                        class:'item-one-list',
                        txt:'',
                        title:'个人信息',
                        url:'agg_uesr_center'
                    },
                    {
                        class:'item-two-list',
                        txt:'',
                        title:'薪资福利',
                        url:'salary_detail'
                    },
                    {
                        class:'item-thr-list',
                        txt:'',
                        title:'考勤与休假',
                        url:'ask_leave'
                    },
                    {
                        class:'item-four-list disabled',
                        txt:'',
                        title:'差旅',
                        url:''
                    },
                    {
                        class:'item-five-list disabled',
                        txt:'',
                        title:'费用报销',
                        url:''

                    }
                ],
                searchData:{
                    userNo:'',
                    accountNo:''
                },
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
                dialogTableVisible:false,
                gridData:[],
                assetShow:false,
                userShow:false,
                dialogTxt:{
                    title:'个人资产查询'
                }
            }
           
        },
        methods:{
           searchUser(){
               let self = this,
                    data = {
                        noNameEmail:self.searchData.userNo
                    };
                if(data.noNameEmail == ''){
                    self.$message({
                        type: "error",
                        message: "查找内容不能为空！"
                    });
                    return;
                }
                 self.$axios
                .get("/iem_hrm/CustInfo/queryAllCust", { params: data })
                .then(res => {
                    self.gridData =  res.data.data
                    self.userShow = true
                    self.assetShow = false                    
                    // // self.pagination.total = res.data.data.total
                    // console.log(res,'列表数据');
                     console.log(self.gridData)
                    if(self.gridData.length == 0){
                        self.$message({
                            type: "error",
                            message: "查找内容不存在！"
                        });
                    }else{
                        self.dialogTableVisible = true;
                    }
                    
                })
                .catch(e => {
                console.log(e);
                });
               self.dialogTxt.title = "人员查找"
                
           },
           searchAsset(){ 
               let self = this,
                    data = {
                        noNameEmail:self.searchData.accountNo
                    };
                // if(data.noNameEmail == ''){
                //     self.$message({
                //         type: "error",
                //         message: "查找内容不能为空！"
                //     });
                //     return;
                // }
               self.$axios
                .get("/iem_hrm/CustInfo/queryCustAsset")
                .then(res => {
                    console.log(res)
                self.gridData =  res.data.data
                self.assetShow = true
                self.userShow = false
                // // self.pagination.total = res.data.data.total
                // console.log(res,'列表数据');
                console.log(self.gridData)
                 if(self.gridData.length == 0){
                        self.$message({
                            type: "error",
                            message: "查找内容不存在！"
                        });
                    }else{
                        self.dialogTableVisible = true;
                    }
                
                })
                .catch(e => {
                console.log(e);
                });
               
           },
           assetTypeFormatter(row, column) {
            return row.assetType == "01"
                ? "全部"
                :       row.assetType == "02"
                ? "办公用品"
                : row.assetType == "03"
                    ? "电脑"
                    : row.assetType == "04" ? "后勤用品" : "异常";
            },
            linkToItem(url){
                this.$router.push(url)
            }
        },
        components:{
            vHead,vFooter
        }
    }
</script>
<style lang="scss">
.tit-size{font-size:16px;}
.txt-size{color:#a7a7a7;}
.mt{margin-top:20px;}
.agg-wrapper{
    .banner_box{
        img{
            width:100%;
            display:block;
            max-width:100%;
            height:auto;
        }
    }
    .nav_item{
        padding:20px 0;
        clear: both;
        display:flex;
        justify-content:space-between;
        margin-left: -10px;
        margin-right: -10px;
        .item-content{
            width:20%;
            float:left;
            padding:0 10px; 
            overflow:hidden;
            .item-list{
                background:#fff;
                height:120px;
                cursor:pointer;
                overflow:hidden;
                &:hover{
                    box-shadow: 0 0 10px 0 rgba(204,204,204,0.50);
                    cursor: pointer;
                }
                .item-list-right{
                    float: right;
                    height:100%;
                    width:50%;
                    text-align:right;
                    padding-right:20px;
                }
                .item-txt-box{
                    color:#464646;
                    padding-top:8px;
                    .item-list-txt{
                        font-size:18px;
                        font-weight:500;
                        margin-top:40px;
                        margin-bottom:2px;
                    }
                }
                .item-list-left{
                    float: left;
                    height:100%;
                    width:50%;
                    background-position: 20px center !important;
                }
            }
        }
        .item-one-list{
            .item-list{
                .item-txt-box{
                    .item-list-txt{
                        color:#53a7e1
                    }
                }
                .item-list-left{
                    background:url('../../../../../static/img/home/grxx.png') no-repeat;
                } 
            }
        }
        .item-two-list {
            .item-list{
                .item-txt-box{
                    .item-list-txt{
                        color:#ff6600
                    }
                }
                .item-list-left{
                    background:url('../../../../../static/img/home/xzfl.png') no-repeat
                }
            } 
        } 
        .item-thr-list{
            .item-list{
                .item-txt-box{
                    .item-list-txt{color:#ff9900}
                }
                .item-list-left{background:url('../../../../../static/img/home/kq&xj.png') no-repeat}
            }
        }   
        .item-four-list{
            .item-list{
                .item-txt-box{
                    .item-list-txt{color:#fdcf58}
                }
                .item-list-left{background:url('../../../../../static/img/home/sqlx.png') no-repeat}
            }
        } 
        .item-five-list{
            .item-list{
                .item-txt-box{
                    .item-list-txt{color:#a5d16c}
                }
                .item-list-left{background:url('../../../../../static/img/home/fybx.png') no-repeat}
            }
        } 
    }
    .wrapper{
        height:auto;
    }
    .grey-bg{
        background:#f4f4f4;
        overflow-x: hidden;
    }
    .search-list,.news-list{
        margin-bottom:20px;
        display:flex;
        justify-content:space-between;
        background:#f4f4f4;
        margin-left: -10px;
        margin-right: -10px;
    }
    .news-list{
        margin-bottom:0;
        position:relative;
        .msg-item{
            width:50%;
            padding-left:10px;
            padding-right:10px;
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
                            background:url('../../../../../static/img/home/mess4.png') no-repeat #a5d16c center;
                            float:left;
                        }
                        .msg-txt{
                            display:inline-block;
                            padding-left:10px;
                        }
                        &.msg-sec-list{
                            .msg-icon{
                                background:url('../../../../../static/img/home/mess3.png') no-repeat #fdcf58 center; 
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
        .msg-large-item{
            padding-right:0;
            margin-right:-10px;
            margin-bottom:20px;
            overflow: hidden;
            .msg-item-box{
                position:absolute;
                top:-20px;
                left:-10px;
                height:100%;
                width:50%;
                margin-top:20px;
                margin-bottom:-20px;
                .msg-item-head{
                    padding-left:20px;
                }
                .msg-content{
                    padding-left:20px;
                }
            }
        }
    }
    .search-list{
        .search-item{
            width:50%;padding-left:10px;padding-right:10px;
            .search-item-box{
                background:#fff;
                padding:20px;
                padding-bottom:15px;
                label{
                    font-weight:normal;
                    margin-bottom:0;
                }
                .search-inp-box{
                    border:1px solid #f8b62d;
                    margin-top:20px;
                    height:90px;
                    position:relative;
                    box-sizing:border-box;
                    div{
                        float:left;
                    }
                    .search-inp-tit{
                        height:89px;
                        width:90px;
                        &.search-icon{
                            float:right;
                            background:url('../../../../../static/img/home/search1.png') no-repeat center;cursor:pointer
                        }
                    }
                    
                }
                .search-inp-one{
                    .search-inp-tit{
                        background:url('../../../../../static/img/home/mail.png') no-repeat center #f8b62d;
                    }
                } 
                .search-inp-two {
                    border-color:#53a7e1;
                    .search-inp-tit{
                        background:url('../../../../../static/img/home/zccx.png') no-repeat center #53a7e1;
                        &.search-icon-two{
                            background:url('../../../../../static/img/home/search2.png') no-repeat center;
                        }
                    }
                }
                .search-inp-con{
                    padding-left:20px;
                    height:90px;
                    input{
                        height:100%;
                        width:100%;
                        padding-left:20px;
                        outline:none;
                        border:1px solid #f4f4f4;
                        border-radius: 4px;
                        width:360px;
                        height:40px;
                        line-height:40px;
                        margin-top:25px;
                    }
                }
            }
        }
    }
    .el-dialog__title{color:#333;font-weight:normal;}
    .el-dialog__headerbtn{
        .el-dialog__close{
            color:#ff9900;
        }
        &:hover{
            .el-dialog__close{
                color:#ff6600;
            }
        }
    }
    .el-dialog__header{background:#eef1f6;padding-bottom:20px;}
    .el-dialog__body{
        padding-top:20px;
        p{margin-bottom:20px;color:#FF6666;}
    }
}
.disabled{
    .item-list{
         position: relative;
        .unUse_item{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            opacity:0.5;
            background:#999;
            cursor:auto;
        }
    }
   
}
</style>

