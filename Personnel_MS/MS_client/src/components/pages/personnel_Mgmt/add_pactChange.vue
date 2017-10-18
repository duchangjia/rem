<template>
    <div class="add_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同变更">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px">
                    <el-col :span="12">
                        <el-form-item label="合同编号" prop="pactNo">
                            <el-input v-model="basicPactMsg.pactNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同名称" prop="pactName">
                            <el-input v-model="basicPactMsg.pactName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同签约时间" prop="signTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.signTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="合同终止时间" prop="pactStopTime">
                            <el-date-picker type="date" placeholder="选择日期" v-model="basicPactMsg.pactStopTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
            <div class="add-wrapper">
                <el-col :span="24" class="item-title">员工信息</el-col>
                <el-form :inline="true" :model="basicPactMsg" :label-position="labelPosition" label-width="110px" style="margin-top:0;overflow:visible;">
                    <el-col :span="12">
                        <el-form-item label="工号" prop="userNo">
                            <el-input v-model="basicPactMsg.userNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="姓名" prop="custName">
                            <el-input v-model="basicPactMsg.custName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证" prop="cert">
                            <el-input v-model="basicPactMsg.cert"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="公司" prop="organName">
                            <el-select v-model="basicPactMsg.organName">
                                <el-option label="总公司" value="1"></el-option>
                                <el-option label="深圳分公司" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="部门" prop="derpName">
                            <el-select v-model="basicPactMsg.derpName">
                                <el-option label="财务部" value="1"></el-option>
                                <el-option label="技术部" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="岗位">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职务">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职级">
                            <el-input></el-input>
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
            basicPactMsg: {},
            addPChangeMsg: {
                pactNo: '',
                changeTime: '',
                changeType: '',
                changeContent: '',
                attachm: '',
                remark: ''
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
                self.basicPactMsg = res.data.data;
                console.log(self.basicPactMsg);
            }).catch(function(err) {
                console.log('error');
            })
    },
    methods: {
        handleAdd() {
        }
    }
}
</script>

<style>
.add_pactChange {
    padding: 0 0 20px 20px;
}
</style>
