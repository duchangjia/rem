<template>
    <div class="add_agency">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" siji="CCC新增" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">CCC新增</span><button class="save" @click="save">保存</button></div>
                <div class="content">
                    <div class="item_group">
                        <span class="text">机构名称</span><el-input class="common"></el-input>
                        <span class="text">CCC类型</span><el-select v-model="value" placeholder="请选择CCC类型"></el-select>
                    </div>
                    <div class="item_group">
                        <span class="text">CCC值</span><el-input class="common"></el-input>
                        <span class="text">备注</span><el-input></el-input>
                    </div>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
          save(){

          }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .add_agency
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .test
            padding-left: 10px;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            height: 746px;
            .title
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 80px;
                .save
                    width: 120px
                    height 40px
                    background: #F4F4F4;
                    border: none
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    line-height 40px
                    text-align center
                    position absolute
                    right 0px
                    bottom 20px
            .content
                padding 42px 0 0 8px
                .item_group
                    margin-bottom 30px
                    height 40px
                    line-height 40px
                    .text
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                        margin-right 30px
                        display inline-block
                        width 60px
                        height 40px
                        line-height 40px
                        text-align right
                    .common
                        margin-right 120px
                    .el-input
                        width 300px
                        height 40px
                        .el-input__inner
                            height 100%
                        .el-input__inner:focus
                            border-color: #ff9900;
                        .el-input__inner:hover
                            border-color: #ff9900;

</style>
