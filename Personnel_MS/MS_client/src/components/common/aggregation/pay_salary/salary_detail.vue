<template>
	<div class="agg-content ask-leave">
		<current yiji="首页" erji="考勤与休假" sanji="有薪假期查询"></current>
		<div class="content">
			<contentTitle titleTxt="个人薪资查询"></contentTitle>
			<div class="msg-list">
                <el-row :gutter="20">
                    <el-col :span="4" class="head-img-box">
                        <div class="imgUserHead"><img src="../../../../../static/img/common/avatar.png" alt=""></div>
                    </el-col>
                    <el-col :span="16">
                       <el-form :inline="true" class="msg-form">
                            <el-col :sm="24" :md="12" v-for="(item,index) in msgList" >
                                <el-form-item :label="item.label" class="no-border-input">
                                    <el-input v-model="item.val" readonly="readonly" ></el-input>
                                </el-form-item>
					        </el-col>
                       </el-form>
                    </el-col>
                </el-row>
            </div>
            <div class="msg-list pl0">
                <el-form :inline="true">
                    <el-form-item label="选择月份" >
                        <el-date-picker
                            type="month"
                            placeholder="选择查询月份"
                            class="month-input"
                            v-model="month"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-button class="btn-primary btn-mt" @click="searchSalary()">查询</el-button>
                </el-form>
            </div>
            <div class="msg-table">
               <ul>
                   <li class="list-tit">
                       <label>应发金额</label>
                       <span>0.00</span>
                   </li>
                   <li>
                       <label>标准薪资<i class="ico-salary"></i></label>
                       <span>0.00</span>
                       <ul class="sec-list">
                           <li>
                               <label>基本工资</label>
                               <span>0.00</span>
                           </li>
                           <li>
                               <label>绩效工资</label>
                               <span>0.00</span>
                           </li>
                       </ul>
                   </li>
                   <li>
                        <label>奖金及补贴<i class="ico-salary"></i></label>
                        <span>0.00</span>
                   </li>
               </ul>
               <ul>
                   <li class="list-tit">
                       <label>应扣金额</label>
                       <span>0.00</span>
                   </li>
                   <li>
                       <label>考勤<i class="ico-salary"></i></label>
                       <span>0.00</span>
                   </li>
                   <li>
                        <label>福利<i class="ico-salary"></i></label>
                        <span>0.00</span>
                   </li>
                   <li>
                       <label>其他<i class="ico-salary"></i></label>
                       <span>0.00</span>
                   </li>
                   <li class="list-tit list-primary">
                       <label>实发金额</label>
                       <span>0.00</span>
                   </li>
               </ul>
            </div>
		</div>
	</div>
</template>
<script>
import current from '../common/current_position.vue'
import contentTitle from '../common/content_title.vue'

const getMsgURL = '/iem_hrm/CustInfo/queryCustSelfInfo'
import moment from "moment";
export default {
    data(){
        return{
            msgList:[
                {
                    label:'姓名',
                    val:'暂无数据'
                },
                {
                    label:'部门',
                    val:'暂无数据'
                },
                {
                    label:'工号',
                    val:'暂无数据'
                },
                {
                    label:'工龄',
                    val:'暂无数据'
                }
            ],
            month:'',
            accountData:{}
        }
    },
    mounted(){
        let self = this;
            self.getUser();
    },
    methods:{
        getUser(){
            let self = this;
                self.$axios.get(getMsgURL).then(res=>{
                    let data = res.data.data;
                        self.msgList[0].val = data.custName||'暂无数据'
                        self.msgList[1].val = data.derpName||'暂无数据'
                        self.msgList[2].val = data.userNo||'暂无数据'
                }).catch(e=>{
                    self.$message({
                        message:e.retMsg||'数据异常',
                        type:'error'
                    })
                })
        },
        changeMonth(){
            
        },
        searchSalary(){
            let self = this,
                month = moment(self.month).format("YYYY-MM-DD");
            console.log(month)
        }
    },
    components: {
	    current,contentTitle
    },
}
</script>
<style lang="scss">
.ask-leave{
    .msg-list{
        padding:30px 0 30px 30px;
        border-bottom: 1px solid #EEEEEE;
        &.pl0{
            padding-left:0;
        }
        .head-img-box{
            .imgUserHead{
                @include size(100px,100px);
                border-radius:50%;
                overflow: hidden;
                display:inline-block;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .el-form-item{
            margin-bottom:0;
            padding-top:10px;
        }
        .msg-form{
            position: relative;
            right:60px;
        }
       .el-date-editor{
            &.el-input{
                width:280px;
                .el-input__inner{
                    height: 32px;
                    line-height:32px;
                }
            }
        }
        .btn-mt{
            margin-top:13px;
            margin-left:20px;
        }
        
    }
    .msg-table{
        padding-top:0;
        border-bottom: none;
        ul{
            li{
                line-height:40px;
                padding-left: 30px;
                @include clearfix;
                color:$color-text;
                label{
                    font-weight: normal;
                    font-size:14px;
                    width:50%;
                    
                }
                &.list-tit{
                    background: #eeeeee;
                    &.list-primary{
                        color:$color-primary;
                    }
                }
                .sec-list{
                    li{
                        color:$color-text-secondary;
                    }
                    label{
                        padding-left:35px;
                    }
                    span{
                        position: relative;
                        right:15px;
                    }
                }
                .ico-salary{
                    background:url('../../../../../static/img/common/salary.png') no-repeat;
                    display:inline-block;
                    @include size(16px,13px);
                    position: relative;
                    top:2px;
                    margin-left:10px;
                }
            }
        }
        
    }
}
</style>

