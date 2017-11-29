<template>
    <div class="add_agency">
        <current yiji="参数管理" erji="业务参数" sanji="机构CCC管理" siji="CCC新增"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">CCC新增</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
            </div>
            <div class="add-wrapper clearfix">
                <el-form label-width="110px" :inline="true" :model="obj" ref="form" :rules="rules">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="机构名称" prop="organName">
                            <el-select v-model="obj.organName" placeholder="请选择机构">
                                <el-option v-for="item in optionItem"
                                           :label="item"
                                           :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="CCC类型" prop="costType">
                            <el-select placeholder="请选择CCC类型" v-model="obj.costType">
                                <el-option
                                        label="管理CCC"
                                        value="01">
                                </el-option>
                                <el-option
                                        label="售前CCC"
                                        value="02">
                                </el-option>
                                <el-option
                                        label="项目CCC"
                                        value="03">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" >
                        <el-form-item label="CCC值" prop="costCode">
                            <el-input v-model="obj.costCode" placeholder="请输入CCC值(数字类型)" :maxlength="32"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" >
                        <el-form-item label="备注">
                            <el-input v-model="obj.descr" :maxlength="256"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        data() {
            return {
                obj: {
                    organName: '',
                    costType: '',
                    costCode: '',
                    descr: '',
                },
                rules:{
                    organName: [
                        { required: true, message: '机构不能为空', trigger: 'change' }
                    ],
                    costType: [
                        { required: true, message: 'CCC类型不能为空', trigger: 'change'}
                    ],
                    costCode: [
                        { required: true, message: 'CCC值不能为空', trigger: 'blur'},
                        { pattern: /^[0-9]*$/, message: "CCC值只能为数字" }
                    ],
                },
                optionItem:{},
            }
        },
        created() {
          this.$axios.get('/iem_hrm/organ/getOrganName')
              .then(res=>{
                  console.log(res)
                  this.optionItem = res.data.data
              })
              .catch(e=>{
                  console.log(e)
              })
        },
        methods: {
            save(){
              let self = this
                this.$refs.form.validate((valid) => {
                        if (valid) {
                            this.$axios.post('/iem_hrm/organ/addOrgCCC', this.obj)
                                .then(res => {
                                    let result = res.data.retMsg
                                    if(result==='操作成功'){
                                        self.$message({
                                            message: result,
                                            type: 'success'
                                        });
                                    } else {
                                        self.$message({
                                            message: result,
                                            type: 'error'
                                        });
                                    }
                                })
                                .catch(e=>{
                                    self.$message({
                                        message: '新增失败,请稍后再试',
                                        type: 'error'
                                    });
                                    console.log('新增CCC失败', e)
                                })
                        }else {
                            self.$message({
                                message: '请填写完整信息',
                                type: 'error'
                            });
                        }
                })
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
</style>
