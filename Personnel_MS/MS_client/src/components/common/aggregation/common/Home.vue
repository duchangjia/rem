<template>
    <div id="home-wrapper">
        <v-head class="home-header"></v-head>
        <div class="wrapper">
            <v-Sidebar class="sider-bar"></v-Sidebar>
            <div class="container-box">
                <transition name="move" mode="out-in">
                    <keep-alive>
                    <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
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

    .home-header{
        /* min-width: 1280px; */
        height: 60px;

    }
    @media screen and (max-width: 680px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
        .home-header {
            min-width: 1280px;
        }
        .wrapper{
            min-width: 1280px;
        }
    }
    
    .wrapper{
        display: flex;
        display: -webkit-flex;
        width: 100%;
    }
    /*.sider{
        flex: 0 0 180px;
        width: 180px;
        background: #fff;
    }*/
    .container-box{
        flex: 1;
        background: #f4f4f4;
        /* padding-left: 20px; */
    }
</style>
