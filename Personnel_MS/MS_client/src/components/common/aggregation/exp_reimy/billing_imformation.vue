<template>
    <div class="agg-content">
        <current yiji="首页" erji="费用报销" sanji="开票信息查询"></current>
        <div class="content">
            <el-form class="clearfix bill-form" :inline="true" label-width="100">
                <el-col :sm="24" :md="12" v-for="(item,index) in msgList">
                    <el-form-item :label="item.label" class="no-border-input">
                        <div @click="searchAsset(index)">
                            <el-input v-model="item.val" readonly="readonly" ></el-input>
                        </div>
                    </el-form-item>
                </el-col>
            </el-form>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
	import current from '../common/current_position.vue'
	import contentTitle from '../common/content_title.vue'
    import api from '../../../../common/api/api.js'
    let {billUrl} = api;
    export default{
        data(){
            return{
                msgList:[
					{
						label:'公司名称',
						val:'暂无数据'
                    },
                    {
                        label:'纳税人编号',
						val:'暂无数据'
                    },
                    {
                        label:'地址',
						val:'暂无数据'
                    },
                    {
                        label:'电话',
						val:'暂无数据'
                    },
                    {
                        label:'账户名称',
						val:'暂无数据'
                    },
                    {
                        label:'账户',
						val:'暂无数据'
                    }

				]
            }
        },
        mounted(){
          let self = this;  
          self.getMsg();
        },
        methods:{
            getMsg(){
                 let self = this;

                 self.$axios.get(billUrl).then(res=>{
                     let data  =res.data.data;
                    self.msgList[0].val = data.organName
                    self.msgList[1].val = data.organTaxNo
                    self.msgList[2].val = data.organAddr
                    self.msgList[3].val = data.organTel
                    self.msgList[4].val = data.organAcctname
                    self.msgList[5].val = data.organAcct
                 }).catch(e=>{

                 })
            }
        },
        components:{
            current
        }
    }
</script>
<style lang="scss" scoped>
.agg-content{
    .content{
        .bill-form{
            min-height:600px;
            padding-top:100px;
            margin-left:100px;
            .el-form-item{
                margin-bottom:40px;
            }
        }
    }
}
    
</style>
