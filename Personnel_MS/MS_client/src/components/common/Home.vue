<template>
    <el-row class="container">
        <v-head></v-head>
        <el-row :gutter="20" class="content">
            <el-col :span="5">
                <v-sidebar></v-sidebar>
            </el-col>
            <el-col :span="19">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
    </el-row> 
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>

<style scoped>

</style>
