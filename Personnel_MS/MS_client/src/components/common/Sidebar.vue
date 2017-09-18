<template>
    <el-menu default-active="home/basetable" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <template v-for="item in items">
            <template v-if="item.subs">
                <el-submenu :index="item.index" @click='link()' v-bind:key="item.index">
                    <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                    <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.index" v-bind:key="item.index"> 
                    <i :class="item.icon"></i>{{ item.title }}
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        created(){
            this.$axios.get("/ifdp/getMenus/", {}).then((res) =>{
                this.items = res.data.data;
            });
        },
        methods: {
            link() {
                this.$router.path = this.$router.path.replace(/\/home\//,'')
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>

</style>
