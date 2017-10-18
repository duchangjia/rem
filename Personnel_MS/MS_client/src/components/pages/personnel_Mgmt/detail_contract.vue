<template>
    <div class="detail_contract">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情">
        </current>
        <div class="content-wrapper">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="合同基本情况" name="first">
                    <div class="add-wrapper">
                        <el-form :inline="true" :model="basicPactMsg" :rules="rules" ref="basicPactMsg" :label-position="labelPosition" label-width="110px">
                            <el-col :span="24">
                                <el-form-item label="合同编号" prop="pactNo">
                                    <el-input v-model="basicPactMsg.pactNo"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="纸质合同编号" prop="paperPactNo">
                                    <el-input v-model="basicPactMsg.paperPactNo"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同名称" prop="pactName">
                                    <el-input v-model="basicPactMsg.pactName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="公司名称" prop="organName">
                                    <el-select v-model="basicPactMsg.organName">
                                        <el-option label="总公司" value="1"></el-option>
                                        <el-option label="深圳分公司" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="部门名称" prop="derpName">
                                    <el-select v-model="basicPactMsg.derpName">
                                        <el-option label="财务部" value="1"></el-option>
                                        <el-option label="技术部" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="工号" prop="userNo">
                                    <el-input v-model="basicPactMsg.userNo"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="员工姓名" prop="custName">
                                    <el-input v-model="basicPactMsg.custName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="性别" prop="sex">
                                    <el-select v-model="basicPactMsg.sex">
                                        <el-option label="男" value="1"></el-option>
                                        <el-option label="女" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="身份证" prop="cert">
                                    <el-input v-model="basicPactMsg.cert"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同类型" prop="pactType">
                                    <el-select v-model="basicPactMsg.pactType">
                                        <el-option label="劳动合同" value="1"></el-option>
                                        <el-option label="保密协议" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="签订日期" prop="signTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同开始日期" prop="pactStartTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStartTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同结束日期" prop="pactEndTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactEndTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同状态" prop="pactStatus">
                                    <el-select v-model="basicPactMsg.pactStatus">
                                        <el-option label="已生效" value="1"></el-option>
                                        <el-option label="未生效" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同年限" prop="pactExpires">
                                    <el-input v-model="basicPactMsg.pactExpires"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="终止日期" prop="pactStopTime">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="合同附件" prop="attachm">
                                    <!-- <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
                                            <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                                        </el-upload> -->
                                    <el-input v-model="basicPactMsg.attachm"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="终止原因" prop="stopReason">
                                    <el-input type="textarea" v-model="basicPactMsg.stopReason"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="备注" prop="remark">
                                    <el-input type="textarea" v-model="basicPactMsg.remark"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label=" " prop="autoupFlag">
                                    <el-checkbox v-model="checked">自动更新员工资料</el-checkbox>
                                </el-form-item>
                            </el-col>
                        </el-form>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="合同变更情况" name="second">合同变更情况</el-tab-pane>
                <el-tab-pane label="合同续签情况" name="third">合同续签情况</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
export default {
    data() {
        return {
            activeName: 'first',
            labelPosition: 'right',
            basicPactMsg: {},
            checked: '',
            rules: {
                pactType: [
                    { required: true, message: '请选择合同类型', trigger: 'blur' },
                ],
                signTime: [
                    { required: true, message: '请选择签订日期', trigger: 'blur' },
                ],
                pactStartTime: [
                    { required: true, message: '请选择合同开始日期', trigger: 'blur' },
                ],
                pactEndTime: [
                    { required: true, message: '请选择合同结束日期', trigger: 'blur' },
                ],
                pactStatus: [
                    { required: true, message: '请选择合同状态', trigger: 'blur' },
                ]
            }
        };
    },
    components: {
        current,
    },
    created() {
        const self = this;
        let params = {
            "pactNo": self.$route.params.pactNo
        }
        console.log(params.pactNo);
        self.$axios.get('ifdp/querPactDtl', { params: params })
            .then(function(res) {
                console.log(res);
                self.basicPactMsg = res.data.data;
                self.checked = res.data.data.autoupFlag;
            }).catch(function(err) {
                console.log('error');
            })
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style>
.detail_contract {
    padding: 0 0 20px 20px;
}

.el-tabs__item.is-active {
    color: #333333;
}

.el-tabs__active-bar {
    background-color: #333333;
    height: 2px;
}

.el-tabs__item:first-of-type {
    padding-left: 0;
}

.el-tabs__header {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    font-family: "PingFang SC";
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;
}

.el-date-table td.current:not(.disabled),
.el-date-table td.end-date,
.el-date-table td.start-date {
    background-color: #ff9900!important;
}
.el-date-table td.today {
    color: #ff9900;
}
.el-date-table td.today:before {
    border-top: .5em solid #ff9900;
}

.el-checkbox__inner:focus,
.el-checkbox__inner:hover {
    border-color: #ff9900;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
}
</style>
