<template>
    <div class="detail_assetUse">
        <current yiji="资产管理" erji="资产使用管理" sanji="资产使用详情"></current>
        <el-col :span="24">
            <div class="content-wrapper">
                <div class="title"><span class="text">资产使用详情</span></div>
                <div class="content">
                    <el-form label-width="200px">
                        <el-form-item label="公司名称">
                            <el-select placeholder="请选择公司名称" :disabled="true" v-model="applyCompanyInfo.organName">
                                <el-option :label="applyCompanyInfo.organName" :value="applyCompanyInfo.organName"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请部门名称">
                            <el-select placeholder="请选择申请部门名称" :disabled="true" v-model="applyCompanyInfo.derpName">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="CCC">
                            <el-select placeholder="请选择CCC" :disabled="true" v-model="applyCompanyInfo.ccc">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请使用人工号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyUserNo"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custName"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mobileNo"></el-input>
                        </el-form-item>
                        <el-form-item label="岗位">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custPost"></el-input>
                        </el-form-item>
                        <el-form-item label="职级">
                            <el-input :disabled="true" v-model="applyCompanyInfo.custClass"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="form_info">资产信息</div>
                    <el-form label-width="200px">
                        <el-form-item label="资产编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetNo"></el-input>
                        </el-form-item>
                        <el-form-item label="购买单价">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyUnitPrice"></el-input>
                        </el-form-item>
                        <el-form-item label="当前库存数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.stockNum"></el-input>
                        </el-form-item>
                        <el-form-item label="购买金额">
                            <el-input :disabled="true" v-model="applyCompanyInfo.buyAmount"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.mfrs"></el-input>
                        </el-form-item>
                        <el-form-item label="供应商">
                            <el-input :disabled="true" v-model="applyCompanyInfo.supplier"></el-input>
                        </el-form-item>
                        <el-form-item label="资产类别">
                            <el-select placeholder="请选择资产类别" :disabled="true" v-model="applyCompanyInfo.assetType">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="资产名称">
                            <el-input :disabled="true" v-model="applyCompanyInfo.assetName"></el-input>
                        </el-form-item>
                        <el-form-item label="SN编号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.snNo"></el-input>
                        </el-form-item>
                        <el-form-item label="规格型号">
                            <el-input :disabled="true" v-model="applyCompanyInfo.specType"></el-input>
                        </el-form-item>
                        <el-form-item label="出厂时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.factoryTime"></el-input>
                        </el-form-item>
                        <el-form-item label="免维保截至时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.faxFreeTime"></el-input>
                        </el-form-item>
                        <el-form-item label="主要性能说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.configInstr"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="form_info">使用信息</div>
                    <el-form label-width="200px">
                        <el-form-item label="使用类别">
                            <el-select placeholder="请选择使用类别" :disabled="true" v-model="applyCompanyInfo.applyType">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="使用数量">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyNum"></el-input>
                        </el-form-item>
                        <el-form-item label="发生时间">
                            <el-input :disabled="true" v-model="applyCompanyInfo.applyTime"></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-select placeholder="请选择状态" :disabled="true" v-model="applyCompanyInfo.applyStatus">
                                <el-option label="未核销/未归还" value="01"></el-option>
                                <el-option label="已核销/已归还" value="02"></el-option>
                                <el-option label="不需要核销/不需要归还" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="说明">
                            <el-input type="textarea" :disabled="true" v-model="applyCompanyInfo.remark"></el-input>
                        </el-form-item>
                        <el-form-item label="最新更新人">
                            <el-input :disabled="true" v-model="applyCompanyInfo.updatedBy"></el-input>
                        </el-form-item>
                        <el-form-item label="最新更新时间">
                            <el-input :disabled="true" :value="applyCompanyInfo.updatedDate | formatDate"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue"
    import moment from 'moment'
    export default {
        data() {
            return {
                applyCompanyInfo: {
                },
            }
        },
        created() {
            let self = this
            let applyNo = this.$route.query.applyNo
            self.$axios.get('/iem_hrm/assetUse/queryAssetUseDetails/'+applyNo)
                .then(res => {
                    self.applyCompanyInfo = res.data
                })
                .catch(e=>{
                    console.log(e)
                })
        },
        filters: {
            formatDate(time) {
                return moment(time).format('YYYY-MM-DD hh:mm:ss')
            }
        },
        components: {
            current,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .detail_assetUse
        padding: 0 0 20px 20px;
        overflow: hidden;
        position: relative;
        .content-wrapper
            background: #fff;
            padding-left: 20px;
            padding-right 20px
            min-height: 746px;
            .title
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0;
                height: 80px;
                line-height: 80px;
                border-bottom: 1px solid #f4f4f4;
                position relative
                .text
                    border-bottom:2px solid black;
                    display: inline-block;
                    height: 80px;
            .content
                padding-top: 42px;
                overflow hidden
                .form_info
                    margin 10px 0
                    font-size 16px
                    padding-left 20px
                    font-weight bold
                .el-form-item
                    display inline-block
                    .el-form-item__label
                        color #999
                    .el-input, .el-select
                        width 300px
                        .el-input__inner
                            width 100%
                            &:hover
                                border-color #f90
                    .el-textarea__inner
                        min-width 800px
                        min-height 100px
                        &:hover, &:focus
                            border-color #f90
</style>

