<template>
    <div style="margin-top: 30px; position: relative">
        <el-form :model="ruleForm" :rules="rules" label-width="100px" :ref="`workItem${index}`" :class="{'bg_color':!ruleForm.isShowEdit,'bg_color2':ruleForm.isShowEdit}">
            <i :class="{'el-icon-close':!ruleForm.isShowEdit,'el-icon-edit':ruleForm.isShowEdit}" @click="delOrEdit(ruleForm.isShowEdit,index)" class="fifthIcon"></i>
            <el-col :md="12" :sm="24">
                <div style="display: flex">
                    <el-form-item label="时间" prop="startTime" class="fifth_common" style="margin-right: -40px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.startTime" :disabled="ruleForm.isShowEdit"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="至" prop="endTime" class="fifth_common fifth_special">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endTime" :disabled="ruleForm.isShowEdit"　:picker-options="pickerOptions"></el-date-picker>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="公司" prop="company">
                    <el-input v-model="ruleForm.company" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="职务" prop="post1">
                    <el-input v-model="ruleForm.post1" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-form-item label="职责" prop="duty">
                    <el-input v-model="ruleForm.duty" :disabled="ruleForm.isShowEdit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :md="24" :sm="24">
                <el-form-item label="工作描述" prop="desc" class="fifth_common">
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
            ruleForm: {
                type: Object,
                default: {
                    startTime: '',
                    endTime: '',
                    company: '',
                    post1: '',
                    duty: '',
                    desc: '',
                    isShowEdit: false
                }
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
                rules: {
                    startTime: [
                        {type:'date', required: true, message: '请选择日期', trigger: 'blur'}
                    ],
                    endTime: [
                        {type:'date', validator: validateEndTime, trigger: 'blur'}
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
        methods: {
            checkValue() {
                let self = this
                this.$refs['workItem'+this.index].validate((valid) => {
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
                this.$refs.workItem0.resetFields();
            }
        },
    }
</script>


