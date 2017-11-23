<template>
	<div class="agg-content ask-leave">
		<current yiji="首页" erji="考勤与休假" sanji="有薪假期查询"></current>
		<div class="content">
			<contentTitle titleTxt="有薪假期查询"></contentTitle>
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
            <div class="msg-list">
            </div>
		</div>
	</div>
</template>
<script>
import current from '../common/current_position.vue'
import contentTitle from '../common/content_title.vue'
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
            ]
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
        padding:30px 0;
        border-bottom: 1px solid #EEEEEE;
        .head-img-box{
            text-align:center;
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
        .msg-form{
            position: relative;
            right:60px;
        }
    }
    
}
</style>

