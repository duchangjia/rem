<template>
    <div class="edit-wrapper">
        <current yiji="系统管理" erji="组织架构" sanji="新增子部门" class="test" ></current>
        新增子部门
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from '../../common/current_position.vue'
    export default {
        components: {
            current,
        },
    }
</script>

<style scoped>
.edit-wrapper{
    padding:27px 0 16px 20px ;
}
.edit-wrapper .test{
    padding-left: 10px;
}
</style>
