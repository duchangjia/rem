<template>
    <el-row class="header">
      <el-col :span="24">后台管理系统</el-col>
    </el-row> 
</template>
<script>
    export default {
        data() {
            return {
                name: 'ifdp'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 44px;
        line-height: 44px;
    }
</style>
