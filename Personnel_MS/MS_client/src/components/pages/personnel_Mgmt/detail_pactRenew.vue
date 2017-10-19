<template>
    <div class="detail_pactRenew">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同续签详情">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同续签详情</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper">
                
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
            detailPRenewMsg: {}
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
.detail_pactRenew {
    padding: 0 0 20px 20px;
}
</style>
