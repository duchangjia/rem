<template>
    <div class="edit_pactChange">
        <current yiji="人事事务" erji="人事合同" sanji="合同详情" siji="合同变更修改">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">合同变更修改</span>
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
            editPChangeMsg: {}
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
.edit_pactChange {
    padding: 0 0 20px 20px;
}
</style>
