<template>
	<div class="agg-content salary-detail">
		<current yiji="首页" erji="考勤与休假" sanji="有薪假期查询"></current>
		<div class="content">
			<contentTitle titleTxt="个人薪资查询"></contentTitle>
			<div class="msg-list">
                <el-row :gutter="20">
                    <el-col :span="6" class="head-img-box">
                        <div class="imgUserHead"><img v-if="imageUrl" :src="imageUrl" alt=""></div>
                    </el-col>
                    <el-col :span="15">
                       <el-form :inline="true" class="msg-form">
                            <el-col :sm="24" :md="12" v-for="(item,index) in msgList" >
                                <el-form-item :label="item.label" class="no-border-input short-label">
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
                       <span><input v-model="accountData.allPay" readonly="readonly" :placeholder="baseNum"></span>
                   </li>
                   <li>
                       <label class="cur-pointer" @click="isSalary=!isSalary">标准薪资<i class="ico-salary"></i></label>
                       <span ><input v-model="accountData.salaryStd" readonly="readonly" :placeholder="baseNum"></span>
                       <ul class="sec-list" v-if="isSalary">
                           <li>
                               <label>基本工资</label>
                               <span><input v-model="accountData.wagesBase"  readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>绩效工资</label>
                               <span><input v-model="accountData.wagesPerf" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                       </ul>
                   </li>
                   <li>
                        <label class="cur-pointer"  @click="isBonus=!isBonus">奖金及补贴<i class="ico-salary"></i></label>
                        <span><input v-model="accountData.bonuses" readonly="readonly" :placeholder="baseNum"></span>
                            <ul class="sec-list" v-show="isBonus">
                           <li>
                               <label>岗位津贴</label>
                               <span><input v-model="accountData.postPension" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>通讯补贴</label>
                               <span><input v-model="accountData.phonePension" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>交通补贴</label>
                               <span><input v-model="accountData.trafficPension" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>生活补贴</label>
                               <span><input v-model="accountData.livingPension" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <!-- <li>
                               <label>全勤奖</label>
                               <span><input v-model="accountData.attendanceBonus" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>工龄奖</label>
                               <span><input v-model="accountData.seniorityPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li> -->
                           <li>
                               <label>加班工资</label>
                               <span><input v-model="accountData.overtimePay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                               <label>其他</label>
                               <span><input v-model="accountData.otherPension" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                       </ul>
                   </li>
               </ul>
               <ul>
                   <li class="list-tit">
                       <label >应扣金额</label>
                       <span><input v-model="accountData.allTakeCount" readonly="readonly" :placeholder="baseNum"></span>
                      
                   </li>
                   <li>
                       <label class="cur-pointer" @click="isWork=!isWork">考勤<i class="ico-salary"></i></label>
                       <span><input v-model="accountData.allCheckCount" readonly="readonly" :placeholder="baseNum"></span>
                       <span>迟到、事假、病假等考勤扣款合计</span>
                        <ul class="sec-list" v-if="isWork">
                           <li>
                                <label>迟到早退</label>
                               <span><input v-model="accountData.lateArrivalPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>病事假</label>
                                <span><input v-model="accountData.leavePay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>旷工</label>
                               <span><input v-model="accountData.absentPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                       </ul>
                   </li>
                   <li>
                       <label class="cur-pointer" @click="isWel=!isWel">福利<i class="ico-salary"></i></label>
                       <span><input v-model="accountData.allWelCount" readonly="readonly" :placeholder="baseNum"></span>
                       <span>当月社保及公积金个人承担部分，包含补发补扣</span>
                        <ul class="sec-list"  v-if="isWel">
                           <li>
                                <label>养老保险个人缴费</label>
                               <span><input v-model="accountData.perEndmPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>医疗保险个人缴费</label>
                               <span><input v-model="accountData.perMediPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>失业保险个人缴费</label>
                               <span><input v-model="accountData.perUnemPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>工伤保险个人缴费</label>
                               <span><input v-model="accountData.perEmplPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>生育保险个人缴费</label>
                               <span><input v-model="accountData.perMatePay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>商业保险个人缴费</label>
                               <span><input v-model="accountData.perCommercialPay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                           <li>
                                <label>公积金个人缴费</label>
                                <span><input v-model="accountData.perHousePay" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                       </ul>
                   </li>
                  
                   <li>
                       <label class="cur-pointer" @click="isOther=!isOther">其他<i class="ico-salary"></i></label>
                       <span><input v-model="accountData.otherCutPay" readonly="readonly" :placeholder="baseNum"></span> 
                       <ul class="sec-list" v-show="isOther">
                           <li>
                                <label>个人所得税</label>
                               <span><input v-model="accountData.payTax" readonly="readonly" :placeholder="baseNum"></span>
                           </li>
                       </ul>
                   </li>
                   <li class="list-tit list-primary">
                       <label>实发金额</label>
                       <span><input v-model="accountData.aftTaxIncom" readonly="readonly" :placeholder="baseNum"></span>
                   </li>
               </ul>
            </div>
		</div>
	</div>
</template>
<script>
import current from '../common/current_position.vue'
import contentTitle from '../common/content_title.vue'
import moment from "moment";
import api from '../../../../common/api/api.js'
let {custSelfInfo,queryCustSalary,querySalaryHoliday} = api

export default {
    data(){
        return{
            imageUrl: '',
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
                },
               
            ],
            isSalary:false,
            isBonus:false,
            isWork:false,
            isWel:false,
            isOther:false,
            month:'',
            baseNum:'0.00',
            accountData:{
               
            }
        }
    },
    mounted(){
        let self = this;
            self.getUser();
            self.queryUserImage();
    },
    methods:{
        getUser(){
            let self = this;
                self.$axios.get(custSelfInfo).then(res=>{
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
                self.$axios.get(querySalaryHoliday).then(res=>{
                    let data = res.data.data;
                    self.msgList[3].val = data.workAge+'' || '暂无数据'
                }).catch(e=>{
                    self.$message({
                        message:e.retMsg||'数据异常',
                        type:'error'
                    })
                })
        },
        searchSalary(){
            let self = this,
                month = moment(self.month).format("YYYY-MM");
            console.log(month)
            if(self.month == ''){
                 self.$message({
                    message:'请选择您所需要查询的月份',
                    type:'error'
                })
                return
            }
            self.$axios.get(queryCustSalary+month).then(res=>{
                    self.accountData = res.data.data;
                     for(let i in self.accountData){
                        self.accountData[i] = Number(self.accountData[i]);
                    }
                    //标准薪资金额
                    self.accountData.salaryStd =  self.accountData.wagesPerf+self.accountData.wagesBase
                    //奖金及补贴
                    self.accountData.bonuses = self.accountData.postPension
                        +self.accountData.phonePension
                        +self.accountData.trafficPension
                        +self.accountData.livingPension
                        // +self.accountData.attendanceBonus
                        // +self.accountData.seniorityPay
                        +self.accountData.overtimePay
                        +self.accountData.otherPension
                    //应扣金额=>福利
                    self.accountData.allWelCount = self.accountData.perEndmPay
                        +self.accountData.perMediPay
                        +self.accountData.perUnemPay
                        +self.accountData.perEmplPay
                        +self.accountData.perMatePay
                        +self.accountData.perHousePay
                        +self.accountData.perCommercialPay
                    //应扣金额 =>考勤
                    self.accountData.allCheckCount = self.accountData.lateArrivalPay
                        +self.accountData.leavePay
                        +self.accountData.absentPay
                    //应扣金额=>其他
                    self.accountData.otherCutPay = self.accountData.payTax
                    //应扣金额
                    self.accountData.allTakeCount =  self.accountData.allCheckCount
                        +self.accountData.allWelCount
                        +self.accountData.otherCutPay
                   //应发金额
                    self.accountData.allPay = self.accountData.salaryStd+self.accountData.bonuses
                    //实发金额
                    self.accountData.aftTaxIncom = self.accountData.allPay-self.accountData.allTakeCount 
                    for(let i in self.accountData){
                        self.accountData[i] = Number(self.accountData[i]).toFixed(2);
                    }
                    
            }).catch(e=>{
                // self.$message({
                //     message:e.retMsg||'数据异常',
                //     type:'error'
                // })
            })
        },
        queryUserImage() {
            this.$axios.get('/iem_hrm/CustInfo/queryLoadCustAvatar')
                .then(res=>{
                    console.log('头像查询', res)
                    if(res.data.data) {
                        let url = 'data:image/jpg;base64,'+res.data.data
                        this.imageUrl = url
                    }
                })
                .catch(e=>{
                    console.log(e)
                })
        },
    },
    computed:{
        
    },
    components: {
	    current,contentTitle
    },
    filters:{
       
    }
}
</script>
<style lang="scss">
.salary-detail{
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
            vertical-align: middle;
        }
        .msg-form{
            position: relative;
            right:60px;
        }
       .month-input{
            &.el-input{
                width:280px;
                .el-input__inner{
                    height: 30px;
                    line-height:normal;
                }
            }
        }
        .btn-mt{
            vertical-align: middle;
        }
        
    }
    .msg-table{
        padding-top:0;
        border-bottom: none;
        padding-bottom:30px;
        ul{
            li{
                line-height:40px;
                padding-left: 30px;
                @include clearfix;
                color:$color-text;
                input{
                    border:none;
                    background:none;
                    margin-left: 15px;
                }
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
    .slide-enter-active {
        animation: bounce-in 2s;
    }
}

</style>

