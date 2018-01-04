<template>
    <div>
        <current yiji="项目管理" erji="项目收入" sanji="收入申报"></current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">收入申报</span>
            </div>
            <div class="add-wrapper">
                <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="130px">
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目名称">
                            <el-input v-model="ruleForm.jihuihao" placeholder="请输入项目名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目编号">
                            <el-select v-model="ruleForm.shouru">
                                <el-option value="01">xx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入确定类型">
                            <el-input v-model="ruleForm.projName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="收入类型">
                            <el-input v-model="ruleForm.projNo"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="部门">
                            <el-select v-model="ruleForm.client">
                                <el-option value="01">xxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="项目经理">
                            <el-select v-model="ruleForm.guanlimoshi">
                                <el-option value="01">xxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划开始时间">
                            <el-select v-model="ruleForm.proType">
                                <el-option value="01">xxxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="计划结束时间">
                            <el-select v-model="ruleForm.shouruType">
                                <el-option value="01">xxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="年月">
                            <el-input v-model.number="ruleForm.yujiHTMony"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="预算收入">
                            <el-select v-model="ruleForm.dingdanType">
                                <el-option value="01">xxx</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item class="xiangmuDidian" label="申报收入">
                            <el-input  v-model="ruleForm.xiangmuDidian"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="申报状态">
                            <el-date-picker type="datetime" v-model="ruleForm.yujiHTTime" @change="changeYujiHTTime" style="width:100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="累计收入">
                            <el-date-picker type="datetime" v-model="ruleForm.yujiStartTime" @change="changeStartTime" style="width:100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12">
                        <el-form-item label="合同金额">
                            <el-input  v-model="ruleForm.hetongbianhao"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    const baseURL = "iem_hrm";
    export default {
        data() {
          return {
              ruleForm: {

              }
          }
        },
        components: {
            current
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
