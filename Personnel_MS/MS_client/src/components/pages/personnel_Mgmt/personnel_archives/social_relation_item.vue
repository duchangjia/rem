<template>
    <div class="social_relation_item">
        <div :class="{'bg_color':ruleFrom.isShow,'bg_color2':!ruleFrom.isShow}">
            <el-form :model="ruleFrom" :rules="rules" :ref="`ruleFrom${relationNum}`" label-width="100px">
                <div class="title">
                    <span>关系人{{relationNum*1 + 1}}</span><i :class="{'el-icon-close':ruleFrom.isShow,'el-icon-edit':!ruleFrom.isShow}" @click="delOrEdit(ruleFrom.isShow,relationNum)"></i>
                </div>
                <el-col :span="8">
                    <el-form-item label="姓名" prop="member_name">
                        <el-input v-model="ruleFrom.member_name" :disabled="!ruleFrom.isShow"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="与本人关系" prop="relationship">
                        <el-input v-model="ruleFrom.relationship" :disabled="!ruleFrom.isShow"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系电话" prop="member_phone">
                        <el-input v-model="ruleFrom.member_phone" :disabled="!ruleFrom.isShow"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="职业">
                        <el-input v-model="ruleFrom.member_job" :disabled="!ruleFrom.isShow"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16">
                    <el-form-item label="地址" class="address">
                        <el-input v-model="ruleFrom.address" class="address_special" :disabled="!ruleFrom.isShow"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props: {
            ruleFrom: {
                type: Object,
                default: {
                    member_name: '',
                    relationship: '',
                    member_phone: '',
                    member_job: '',
                    address: '',
                    isShow: true
                },
            },
            relationNum: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                rules: {
                    member_name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    relationship: [
                        {required: true, message: '请输入与本人关系', trigger: 'blur'}
                    ],
                    member_phone: [
                        {required: true, message: '请输入联系电话', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            delOrEdit(isShow,relationNum) {
                if(isShow)  this.$emit('del_item', relationNum)
                if(!isShow) {
                    this.$emit('edit_item', relationNum)
                }

            },
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .social_relation_item
        .bg_color
            background: #f4f4f4;
            overflow hidden
            margin-top:40px;
        .bg_color2
            background: #fff;
            overflow hidden
            margin-top:40px;
        .el-input
            width 200px
            height 40px
        .el-input__inner
            width 100%
            height 100%
            &:hover
                border-color #ff9900
            &:focus
                border-color #ff9900
        .el-select
            width 200px
            height 40px
            .el-input
                height 100%
                .el-input__inner
                    width 100%
                    height 100%
                    &:hover
                        border-color #ff9900
                    &:focus
                        border-color #ff9900
        .title
            height 40px
            box-sizing border-box
            padding 10px 20px 10px 20px
            margin-bottom 20px
            .el-icon-close, .el-icon-edit
                color #f90
                width: 14px
                height: 14px
                float right
                cursor pointer
                &:hover
                    text-decoration underline
        .el-form-item
            margin-bottom 30px
            .el-form-item__label
                margin-right 30px
            .el-form-item__error
                left 30px
        .address
            .address_special
                width 91%
                max-width 600px
</style>
