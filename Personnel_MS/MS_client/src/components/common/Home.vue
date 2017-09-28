<template>
    <div id="home-wrapper">
        <v-head class="home-header"></v-head>
                <div class="wrapper">
                        <v-Sidebar class="sider"></v-Sidebar>
                        <div class="container-wrapper">
                            <transition name="move" mode="out-in">
                                <router-view></router-view>
                            </transition>
                        </div>
                </div>
    </div>
    <!--<el-row class="container">-->
        <!--<v-head></v-head>-->
        <!--<el-row :gutter="20" class="content">-->
            <!--<el-col :span="5">-->
                <!--<v-sidebar></v-sidebar>-->
            <!--</el-col>-->
            <!--<el-col :span="19">-->
                <!--<transition name="move" mode="out-in">-->
                    <!--<router-view></router-view>-->
                <!--</transition>-->
            <!--</el-col>-->
        <!--</el-row>-->
    <!--</el-row> -->
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

    .home-wrapper .el-row{
        display: flex;
    }
    .home-wrapper .home-header{
        height: 60px;
    }
    .wrapper{
        display: flex;
    }
    /*.sider{
        flex: 0 0 180px;
        width: 180px;
        background: #fff;
    }*/
    .container-wrapper{
        flex: 1;
        background: #f4f4f4;
        /* padding-left: 20px; */
    }
</style>
