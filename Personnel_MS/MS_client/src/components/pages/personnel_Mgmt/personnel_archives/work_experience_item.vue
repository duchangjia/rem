<template>
    <div class="work_experience_item">
        <div :class="{'bg_color':!ruleFrom.isShowEdit,'bg_color2':ruleFrom.isShowEdit}">
            <el-form :model="ruleFrom" :rules="rules" :ref="`ruleFrom${relationNum}`" label-width="100px">
                <div class="title">
                    <i :class="{'el-icon-close':!ruleFrom.isShowEdit,'el-icon-edit':ruleFrom.isShowEdit}" @click="delOrEdit(ruleFrom.isShowEdit,relationNum)"></i>
                </div>
                <el-col :span="12">
                    <div style="display: flex">
                        <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleFrom.startTime" :disabled="ruleFrom.isShowEdit"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleFrom.endTime" :disabled="ruleFrom.isShowEdit"></el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司" prop="company">
                        <el-input v-model="ruleFrom.company" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="职务" prop="post1">
                        <el-input v-model="ruleFrom.post1" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="职责" prop="duty">
                        <el-input v-model="ruleFrom.duty" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="工作描述" prop="desc" class="fifth_common">
                        <el-input type="textarea" v-model="ruleFrom.desc" :disabled="ruleFrom.isShowEdit"></el-input>
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
                    startTime: '',
                    endTime: '',
                    company: '',
                    post1: '',
                    duty: '',
                    desc: '',
                    isShowEdit: false
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
                    startTime: [
                        {type:'date', required: true, message: '请选择日期范围', trigger: 'change'}
                    ],
                    endTime: [
                        {type:'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    company: [
                        {required: true, message: '请输入公司', trigger: 'blur'}
                    ],
                    post1: [
                        {required: true, message: '请输入职务', trigger: 'blur'}
                    ],
                    duty: [
                        {required: true, message: '请输入职责', trigger: 'blur'}
                    ],
                    desc: [
                        {required: true, message: '请输入工作描述', trigger: 'blur'}
                    ],
                }
            }
        },
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .work_experience_item
        position relative
        overflow hidden
        padding-bottom 30px
        .el-input
            width 215px
            height 40px
        .el-input__inner
            width 100%
            height 100%
            &:hover
                border-color #ff9900
            &:focus
                border-color #ff9900
        .el-select
            width 215px
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
            .el-icon-close, .el-icon-edit
                color #f90
                width: 14px
                height: 14px
                cursor pointer
                position absolute
                top: 14px;
                right: 20px;
                &:hover
                    text-decoration underline
        .el-form-item
            .el-form-item__label
                margin-right 30px
            .el-form-item__error
                left 30px
        .social-address
            .address_special
                width 91%
                max-width 600px
</style>
