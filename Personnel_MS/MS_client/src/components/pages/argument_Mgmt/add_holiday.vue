<template>
    <div class="add_holiday">
        <current yiji="参数管理" erji="业务参数" sanji="免签节假日维护" siji="节假日新增" class="test"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">节假日新增</span><button class="save" @click="save">保存</button></div>
                <el-form ref="form" :model="content" class="content" :rules="rules">
                    <div>
                        <el-form-item class="item_group" prop="date1">
                            <span class="text">开始日期</span><el-date-picker type="date" class="common" v-model="content.date1" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="item_group" prop="date2">
                            <span class="text">结束日期</span><el-date-picker type="date" v-model="content.date2" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item class="item_group" prop="region">
                            <span class="text">类型</span><el-select v-model="content.type" class="common"></el-select>
                        </el-form-item>
                        <el-form-item class="item_group" prop="remark">
                            <span class="text">备注</span><el-input v-model="content.mark"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
            return {
                form: {
                    date1: '',
                    date2: '',
                },
                content: {
                    date1: '',
                    date2: '',
                    type: '',
                    mark: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择类型', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    remark: [
                        { required: true, message: '请输入备注', trigger: 'blur' }
                    ]
                }
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
    .add_holiday
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
                    display inline-block
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
                    .el-form-item__error
                        left 90px
</style>
