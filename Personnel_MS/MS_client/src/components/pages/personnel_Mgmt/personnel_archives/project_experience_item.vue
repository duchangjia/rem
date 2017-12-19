<template>
    <div style="margin-top: 30px; position: relative">
        <el-form :model="ruleForm" :rules="rules" label-width="100px" :ref="`projectItem${index}`" :class="{'bg_color':!ruleForm.isShowEdit,'bg_color2':ruleForm.isShowEdit}">
            <i :class="{'el-icon-close':!ruleForm.isShowEdit,'el-icon-edit':ruleForm.isShowEdit}" @click="delOrEdit(ruleForm.isShowEdit,index)" class="fifthIcon"></i>
            <el-col :md="12" :sm="24">
                <div style="display: flex">
                    <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.startTime" :disabled="ruleForm.isShowEdit"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endTime" :disabled="ruleForm.isShowEdit" :picker-options="pickerOptions"></el-date-picker>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="项目名称" prop="projectName">
                    <el-input v-model="ruleForm.projectName" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="主要技能" prop="mainSkill">
                    <el-input v-model="ruleForm.mainSkill" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="项目角色" prop="projectRole">
                    <el-input v-model="ruleForm.projectRole" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="软件环境" prop="softEnv">
                    <el-input v-model="ruleForm.softEnv" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="客户" prop="custom">
                    <el-input v-model="ruleForm.custom" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="24" :sm="24">
                <el-form-item label="项目职责" prop="projectDuty" class="fifth_common">
                    <el-input type="textarea" v-model="ruleForm.projectDuty" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="24" :sm="24">
                <el-form-item label="项目描述" prop="desc" class="fifth_common">
                    <el-input type="textarea" v-model="ruleForm.desc" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props: {
            index: {
                type: Number,
                default: 0
            },
        },
        data() {
            let that = this
            let validateEndTime = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请选择日期'));
                } else if (value  < that.ruleForm.startTime) {
                    callback(new Error('结束日期不能小于开始日期'));
                } else {
                    callback();
                }
            }
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < that.ruleForm.startTime
                    },
                },
                ruleForm: {
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
                rules: {
                    startTime: [
                        {type:'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    endTime: [
                        {type:'date', validator: validateEndTime, trigger: 'change'}
                    ],
                    projectName: [
                        {required: true, message: '请输入项目名称', trigger: 'blur'}
                    ],
                    mainSkill: [
                        {required: true, message: '请输入主要技能', trigger: 'blur'}
                    ],
                    projectRole: [
                        {required: true, message: '请输入项目角色', trigger: 'blur'}
                    ],
                    softEnv: [
                        {required: true, message: '请输入软件环境', trigger: 'blur'}
                    ],
                    custom: [
                        {required: true, message: '请输入客户', trigger: 'blur'}
                    ],
                    projectDuty: [
                        {required: true, message: '请输入项目职责', trigger: 'blur'}
                    ],
                    desc: [
                        {required: true, message: '请输入项目描述', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            checkValue() {
                let self = this
                this.$refs['projectItem'+this.index].validate((valid) => {
                    if (valid) {
                        self.$emit('pass_validate', 1)
                    }else {
                        self.$emit('pass_validate', 0)
                    }
                })
            },
            delOrEdit(isShow,index) {
                if(!isShow)  {
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$emit('del_item', index)
                    }).catch(()=>{
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    })
                }
                if(isShow) {
                    this.ruleForm.isShowEdit = !isShow
                }
            },
            resetForm() {
                this.$refs.projectItem0.resetFields();
            }
        },
    }
</script>


