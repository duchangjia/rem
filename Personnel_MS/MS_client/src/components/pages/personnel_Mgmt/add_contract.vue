<template>
    <div class="add_contract">
        <current yiji="人事事务" erji="人事合同" sanji="新增合同">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">新增合同</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="addPactMsg" :rules="rules" ref="addPactMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="纸质合同编号" prop="paperNo">
                            <el-input v-model="addPactMsg.paperNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同名称" prop="pactName">
                            <el-input v-model="addPactMsg.pactName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司名称" prop="organName">
                            <el-select v-model="addPactMsg.organName">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门名称" prop="derpName">
                            <el-select v-model="addPactMsg.derpName">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="addPactMsg.userNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="员工姓名" prop="custName">
                            <el-input v-model="addPactMsg.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="性别" prop="gender">
                            <el-select v-model="addPactMsg.gender">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证" prop="cert">
                            <el-input v-model="addPactMsg.cert"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同类型" prop="pactStatus">
                            <el-select v-model="addPactMsg.pactType">
                                <el-option label="劳动合同" value="1"></el-option>
                                <el-option label="保密协议" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="签订日期" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.signTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同开始日期" prop="pactStartTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactStartTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同结束日期" prop="pactEndTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactEndTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同状态" prop="pactStatus">
                            <el-select v-model="addPactMsg.pactStatus">
                                <el-option label="有效" value="1"></el-option>
                                <el-option label="无效" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同年限" prop="pactPeriod">
                            <el-input v-model="addPactMsg.pactPeriod"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="终止日期" prop="pactTermDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addPactMsg.pactTermDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同附件" prop="pactAttach">
                            <!-- <el-input v-model="addPactMsg.pactAttach"></el-input> -->
                            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
                                <el-button slot="trigger" size="small" type="primary" class="uploadBtn">选取文件</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="终止原因" prop="pactTermReason">
                            <el-input type="textarea" v-model="addPactMsg.pactTermReason"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input type="textarea" v-model="addPactMsg.remark"></el-input>
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
            labelPosition: 'right',
            addPactMsg: {
                paperNo: '',
                pactName: '',
                organName: '',
                derpName: '',
                userNo: '',
                custName: '',
                gender: '',
                cert: '',
                pactType: '',
                signTime: '',
                pactStartTime: '',
                pactEndTime: '',
                pactStatus: '',
                pactPeriod: '',
                pactTermDate: '',
                pactAttach: '',
                pactTermReason: '',
                remark: ''

            },
            rules: {
                userNo: [
                    { required: true, message: '请输入工号', trigger: 'blur' },
                    // { validator: checkUserName, trigger: 'blur' }
                ],
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
    methods: {

        handleAdd() {

        }
    }
}
</script>

<style>
.add_contract {
    padding: 0 0 20px 20px;
}

.add-wrapper form {
    font-size: 0;
    margin-top: 40px;
}
</style>
