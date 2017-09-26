<template>
    <div class="location-wrapper">
        <el-col :span="24">
            <span class="title">当前位置：</span>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-if="yiji">{{yiji}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="erji">{{erji}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="sanji">{{sanji}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="siji">{{siji}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="wuji">{{wuji}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:{
            yiji: {
                type: String,
                default: ''
            },
            erji: {
                type: String,
                default: ''
            },
            sanji: {
                type: String,
                default: ''
            },
            siji: {
                type: String,
                default: ''
            },
            wuji: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style>
    .location-wrapper {
        height: 70px;
        line-height: 70px;
        font-size: 12px;
    }
    .location-wrapper .title {
        color: #475669;
        vertical-align: middle;
    }
    .location-wrapper .breadcrumb-inner {
        font-size: 12px;
        display: inline-block;
        vertical-align: middle;
    }

</style>
