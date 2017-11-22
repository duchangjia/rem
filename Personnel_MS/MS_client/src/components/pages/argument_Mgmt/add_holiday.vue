<template>
    <div class="add_holiday">
        <current yiji="参数管理" erji="业务参数" sanji="免签节假日维护" siji="节假日新增"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">节假日新增</span><button class="save" @click="save">保存</button></div>
                <el-form ref="form" :model="content" class="content" :rules="rules">
                    <div>
                        <el-form-item class="item_group" prop="dayDate">
                            <span class="text">日期</span><el-date-picker type="date" class="common" v-model="content.dayDate" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="item_group" prop="dayFlag">
                            <span class="text">类型</span><el-select v-model="content.dayFlag">
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
                        <!--<el-form-item class="item_group" prop="date2">-->
                            <!--<span class="text">结束日期</span><el-date-picker type="date" v-model="content.date2" placeholder="选择日期"></el-date-picker>-->
                        <!--</el-form-item>-->
                    </div>
                    <div>
                        <el-form-item class="item_group">
                            <span class="text">备注</span><el-input v-model="content.remark" class="common" :max-length="256"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </el-col>
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
                    region: [
                        { required: true, message: '请选择类型', trigger: 'change' }
                    ],
                    dayDate: [
                        {type:"date", required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    dayFlag: [
                        { required: true, message: '请选择类型', trigger: 'change' }
                    ],
                    remark: [
                        { required: true, message: '请输入备注', trigger: 'blur' }
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
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 50px;
                .save
                    width: 120px
                    height 30px
                    background: #F4F4F4;
                    border: none
                    border-radius 4px
                    outline none
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    line-height 30px
                    text-align center
                    position absolute
                    right 0px
                    bottom 10px
                    &:hover
                        background: #f90;
                        color #fff
            .content
                padding 30px 0 0 8px
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
                            width 100%
                            height 100%
                        .el-input__inner:focus
                            border-color: #ff9900;
                        .el-input__inner:hover
                            border-color: #ff9900;
                    .el-form-item__error
                        left 90px
</style>
