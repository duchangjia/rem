<template>
    <div class="add_holiday">
        <current yiji="参数管理" erji="业务参数" sanji="免签节假日维护" siji="节假日新增"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">节假日新增</span>
                <el-button type="primary" class="toolBtn btn-primary" @click="save">保存</el-button>
            </div>
            <div class="add-wrapper clearfix">
                <el-form label-width="110px" :inline="true" :model="content" ref="form" :rules="rules">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="日期" prop="dayDate">
                            <el-date-picker type="date" placeholder="选择日期" style="width:100%;" v-model="content.dayDate" @change="timePicker()"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="类型" prop="costType">
                            <el-select placeholder="请选择日期类型" v-model="content.dayFlag">
                                <el-option
                                        label="法定节假日"
                                        value="1">
                                </el-option>
                                <el-option
                                        label="正常工作日"
                                        value="2">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" >
                        <el-form-item label="备注">
                            <el-input v-model="content.remark" :maxlength="256"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    import moment from 'moment'
    export default {
        data() {
            return {
                content: {
                    dayDate: '',
                    dayFlag: '',
                    remark: '',
                },
                rules: {
                    dayDate: [
                        {type:"date", required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    dayFlag: [
                        { required: true, message: '请选择类型', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            save(){
                    let self = this
                    self.$refs.form.validate((valid) => {
                        if (valid) {
                            let date = moment(self.content.dayDate).format('YYYYMMDD')
                            let data = {
                                dayDate:date,
                                dayFlag:self.content.dayFlag,
                                remark:self.content.remark,
                            }
                        self.$axios.post('/iem_hrm/visaFreeHoliday/insertVisaFreeHoliay', data)
                            .then(res=>{
                                let result = res.data.retMsg
                                if("操作成功"===result) {
                                    self.$message({
                                        message: result,
                                        type: 'success'
                                    });
                                }else {
                                    self.$message({
                                        message: result,
                                        type: 'error'
                                    });
                                }
                                console.log(res)
                            })
                            .catch(e=>{
                                self.$message({
                                    message: '新增失败,请稍后再试',
                                    type: 'error'
                                });
                                console.log(e)
                            })
                        }else {
                            self.$message({
                                message: '请输入完成信息',
                                type: 'error'
                            });
                        }
                    })
            },

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
</style>
