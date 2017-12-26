<template>
	<div class="agg-content ask-leave">
		<current yiji="首页" erji="考勤与休假" sanji="有薪假期查询"></current>
		<div class="content">
			<contentTitle titleTxt="有薪假期查询"></contentTitle>
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
            <div class="msg-list">
                <div class="txt-center f-big">2017年带薪休假信息（小时）</div>
                <el-row :gutter="20" class="date-list ">
                    <el-col :sm="12" :md="6" v-for="(item,index) in vacationList" >
                        <div class="sri-item  inline-block">
                            <div class="c-primary f-large">{{item.day}}</div>
                            <p class="f-middle">{{item.txt}}</p>
                        </div>
                    </el-col>
                    <el-col :sm="12" :md="6" class="date-btn" style="display:none">
                        <el-button class="btn-primary">请假</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="msg-list">
                <div class="f-big">温馨提示</div>
                <pre>
                    1、 工龄按照毕业时间-当前日期进行计算。
                    2、公司年休假周期：7月1日至次年6月30日。
                    3、公司遵照中国政府颁布的于2008年1月1日开始生效的《职工带薪年休假条例》制定员工带薪年休假政策，员工可享受的年休假天数取决于员工的工龄。
                    （工龄在1年以上10年以下的员工享有5天年假，10年以上20年以下的享有10天年假，20年以上的享有15天年假。）
                </pre>
            </div>
		</div>
	</div>
</template>
<script>
import current from '../common/current_position.vue'
import contentTitle from '../common/content_title.vue'
import api from '../../../../common/api/api.js'
let {custSelfInfo,querySalaryHoliday} = api
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
                }
            ],
            vacationList:[
                {
                    day:'0',
                    txt:'年度享有假期'
                },
                {
                    day:'0',
                    txt:'已使用假期'
                },
                {
                    day:'0',
                    txt:'剩余假期'
                }
            ]
        }
    },
    mounted(){
        let self = this;
            self.getTime();
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
                        message:e.retMsg,
                        type:'error'
                    })
                })
        },
        getTime(){
            let self= this;
            self.$axios.get(querySalaryHoliday).then(res=>{
                let data = res.data.data;
                self.vacationList[0].day = data.holiday
                self.vacationList[1].day = data.leaveTime
                self.vacationList[2].day = data.restTime
                self.msgList[3].val = data.workAge
            }).catch(e=>{
                self.$message({
                    type:'error',
                    message:e.retMsg||'数据异常'
                })
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
            // padding-top:10px;
            // width:300px;
        }
        .msg-form{
            position: relative;
            right:60px;
        }
        .date-list{
            margin-top:60px;
            .date-btn{
                margin-top:40px;
            }
        }
        pre{
            margin-top:10px;
            background:$bg-wihte;
            line-height:30px;
            color:$color-text-secondary;
        }
    }
    
}
</style>

