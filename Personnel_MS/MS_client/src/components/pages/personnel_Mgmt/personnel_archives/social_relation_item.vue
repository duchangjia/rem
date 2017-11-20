<template>
    <div class="social_relation_item">
        <div :class="{'bg_color':!ruleFrom.isShowEdit,'bg_color2':ruleFrom.isShowEdit}">
            <el-form :model="ruleFrom" :rules="rules" :ref="`ruleFrom${relationNum}`" label-width="100px">
                <div class="title">
                    <span>关系人{{relationNumber}}</span><i :class="{'el-icon-close':!ruleFrom.isShowEdit,'el-icon-edit':ruleFrom.isShowEdit}" @click="delOrEdit(ruleFrom.isShowEdit,relationNum)"></i>
                </div>
                <el-col :span="8">
                    <el-form-item label="姓名" prop="contactName">
                        <el-input v-model="ruleFrom.contactName" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="与本人关系" prop="relationship">
                        <el-input v-model="ruleFrom.relationship" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系电话" prop="telphone">
                        <el-input v-model="ruleFrom.telphone" :disabled="ruleFrom.isShowEdit" :maxlength="15"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="职业">
                        <el-input v-model="ruleFrom.profession" :disabled="ruleFrom.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16">
                    <el-form-item label="地址" class="address">
                        <el-input v-model="ruleFrom.addr" class="address_special" :disabled="ruleFrom.isShowEdit" :maxlength="150"></el-input>
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
                    contactName: '',
                    relationship: '',
                    telphone: '',
                    profession: '',
                    post: '',
                    addr: '',
                    isShowEdit: false
                },
            },
            relationNum: {
                type: Number,
                default: 0
            },
        },
        computed: {
            relationNumber() {
                return this.relationNum*1+1
            }
        },
        data() {
            return {
                rules: {
                    contactName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        { pattern: /(([\u4E00-\u9FA5]{2,7})|([a-zA-Z]{3,20}))/, message: "只能输入的姓名为全部中文或英文" }
                    ],
                    relationship: [
                        {required: true, message: '请输入与本人关系', trigger: 'blur'},
                        { min: 1, max: 2, message: '长度在 1到 2个字符', trigger: 'blur' }
                    ],
                    telphone: [
                        {required: true, message: '请输入联系电话', trigger: 'blur'},
                        { pattern: /^[1][3578]\d{9}$/, message: "只能输入135至138开头的手机号码" }
                    ],
                }
            }
        },
        methods: {
            delOrEdit(isShow,relationNum) {
                if(!isShow)  {
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$emit('del_item', relationNum)
                    }).catch(()=>{
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    })
                }
                if(isShow) {
                    this.isShowEdit = !this.isShowEdit
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
            margin-top:30px;
        .bg_color2
            background: #fff;
            overflow hidden
            margin-top:30px;
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
