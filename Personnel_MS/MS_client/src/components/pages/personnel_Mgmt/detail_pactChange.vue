<template>
    <div class="detail_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更详情" :activeTab="activeName">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更详情</span>
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
            activeName: "changePactMsg",
            detailPChangeMsg: {}
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
.detail_pactChange {
    padding: 0 0 20px 20px;
}
</style>
