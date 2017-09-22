<template>
    <div class="role_mgmt">
        <div class="location-wrapper">
            <el-col :span="24">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                    <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </div>
        <transition name="move" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
//        props: [{
//           username:{
//               type: String,
//               default: '',
//           }
//        }],
        
    }
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

.role_mgmt {
    padding: 0 20px 20px;
}
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

