<template>
    <div class="project_experience_item">
        <div :class="{'bg_color':!ruleFrom.isShowEdit,'bg_color2':ruleFrom.isShowEdit}">
            <el-form :model="item" :rules="rules5" label-width="100px" :ref="`third${index}`" :class="{'bg_color':!item.isShowEdit,'bg_color2':item.isShowEdit}">
                <i :class="{'el-icon-close':!item.isShowEdit,'el-icon-edit':item.isShowEdit}" @click="proDel(item.isShowEdit,index)" class="fifthIcon"></i>
                <el-col :span="12">
                    <div style="display: flex">
                        <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                            <el-date-picker type="date" placeholder="选择日期" v-model="item.startTime" :disabled="item.isShowEdit"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                            <el-date-picker type="date" placeholder="选择日期" v-model="item.endTime" :disabled="item.isShowEdit"></el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="公司" prop="company">
                        <el-input v-model="item.company" :disabled="item.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="职务" prop="post1">
                        <el-input v-model="item.post1" :disabled="item.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="职责" prop="duty">
                        <el-input v-model="item.duty" :disabled="item.isShowEdit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="工作描述" prop="desc" class="fifth_common">
                        <el-input type="textarea" v-model="item.desc" :disabled="item.isShowEdit"></el-input>
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
                    projectName: '',
                    mainSkill: '',
                    projectRole: '',
                    softEnv: '',
                    custom: '',
                    projectDuty: '',
                    desc: '',
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
            checkValue() {
                let self = this
                this.$refs['ruleFrom'+this.relationNum].validate((valid) => {
                    if (valid) {
                        self.$emit('pass_validate', 1)
                    }else {
                        self.$emit('pass_validate', 0)
                    }
                })
            },
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
                    this.ruleFrom.isShowEdit = !isShow
                }
            },
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .project_experience_item
        position relative
        .bg_color
            background: #f4f4f4;
            overflow hidden
            margin-top 30px
            padding-bottom 18px
        .bg_color2
            background: #fff;
            overflow hidden
            margin-top:30px;
            padding-bottom 18px
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
