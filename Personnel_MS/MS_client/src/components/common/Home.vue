<template>
        <div id="home-wrapper">
        <v-head class="home-header"></v-head>
        <div :class='{"wrapper": true,"sidebarHide": hideSidebarFlag}'>
            <v-Sidebar class="sider" @hideSidebar="hideSidebar"></v-Sidebar>
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
    	data() {
    		return {
    			hideSidebarFlag: false
    		}
    	},
        components:{
            vHead, vSidebar
        },
        methods: {
        	hideSidebar(value) {
        		this.hideSidebarFlag = value;
        	}
        }
    }
</script>

<style scoped lang="scss">

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
        width: 100%;
        position: relative;
        @include clearfix;
    }
    .container-wrapper{
       	min-height: 100%;
       	/*min-height: 600px;*/
       	margin-left: 180px;
        background: #f4f4f4;
        transition: margin-left 0.28s ease-out;
    }
    .wrapper.sidebarHide .container-wrapper {
    	margin-left: 60px;
    }

</style>
