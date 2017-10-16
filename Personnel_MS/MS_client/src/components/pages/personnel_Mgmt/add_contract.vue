<template>
    <div class="add_contract">
        <current yiji="人事事务" erji="人事合同" sanji="新增合同">
        </current>
        <div class="content-wrapper">
            <div class="titlebar">
                <span class="title-text">新增合同</span>
                <el-button type="primary" @click="handleAdd" class="toolBtn">保存</el-button>
            </div>
            <div class="add-wrapper"></div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
import current from '../../common/current_position.vue'
export default {
    data() {
        return {
            
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
</style>
