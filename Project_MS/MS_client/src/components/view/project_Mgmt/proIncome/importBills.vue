<template>
    <div>
        <current yiji="项目管理" erji="项目收入" sanji="导入账单"></current>
    </div>
</template>

<script type='text/ecmascript-6'>
    import current from "../../../common/current_position.vue";
    const baseURL = "iem_hrm";
    export default {
        components: {
            current
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
