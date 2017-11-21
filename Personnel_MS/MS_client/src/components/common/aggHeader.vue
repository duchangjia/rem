<template>
    <div class="header">
        <span class="homelogo logo-margin">
            <img src="../../../static/img/common/home_logo.png" alt="" width="120" height="30" @click="link2Home" style="cursor: pointer">
        </span>
        <span class="nav_list" v-for="item in navList" @click="linkTo(item.url)">
                {{item.name}}
        </span>
        <div class="headerright">
            <span class="tips">
                <img src="../../../static/img/common/Group.png" alt="" width="14" height="16">
            </span>
            <span>
                <img src="../../../static/img/common/help.png" alt="" width="14" height="16">
            </span>
            <el-dropdown trigger="hover" class="userinfo" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img src="../../../static/img/common/avatar.png" width="32" height="32" class="useravatar" />您好，{{username}}
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" split-button type="primary">
                    <el-dropdown-item command="user_center">基本信息</el-dropdown-item>
                    <el-dropdown-item command="modify_password">密码修改</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span @click="loginout()">
                <img src="../../../static/img/common/exit0.png" alt="" width="16" height="18">
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'ifdp',
            navList:[
                {name:'项目管理',url:''},
                {name:'人事管理',url:'/home'},
                {name:'财务管理',url:''},
                {name:'运营管理',url:''},
                {name:'招聘管理',url:''},
                {name:'前端样式',url:'/web_standard'}
            ]
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        loginout() {
            const _this = this;
            this.$confirm('您确认退出登录吗?', '提示', {
                type: 'warning'
            }).then(() => {
                localStorage.removeItem('ms_username');
                localStorage.removeItem('access_token');
                _this.$router.push('/login');
            }).catch(() => {
                
            });

        },
        linkTo(url){
            this.$router.push(url)
        },
        handleCommand(commmand) {
            const _self = this
            if (commmand === 'user_center') {
                sessionStorage.setItem('user_center', true);
            } else {
                sessionStorage.setItem('user_center', false);
            }
            _self.$router.push(commmand);
        },
        link2Home() {
            this.$router.push('/aggPage')
        }
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #cccccc;
    background: #363D47;
}

.header span {
    display: inline-block;
}

.header .homelogo {
    padding: 0 20px;
}
.header .logo-margin{
    margin-right:20px;
}
.header .headertitle {
    font-size: 18px;
    font-family: "PingFang SC light";
    padding: 0 10px;
}

.header .headertitle::before {
    display: block;
    content: '';
    width: 1px;
    height: 20px;
    background: #cccccc;
    position: absolute;
    margin-left: -11px;
    margin-top: 20px;
}

.header .headerright {
    float: right;
}

.header .headerright>span {
    width: 60px;
    text-align: center;
}

.header .headerright>span.tips span {
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
    position: absolute;
}

.header .headerright>span:hover,
.header .headerright .userinfo:hover {
    cursor: pointer;
    background: #000000;
}

.header .headerright .userinfo {
    padding: 0 20px;
}

.header .headerright .el-icon--right {
    font-size: 10px;
}

.header .headerright .userinfo .useravatar {
    margin-right: 15px;
    border-radius: 50%;
}

.el-dropdown {
    color: #cccccc;
}

.el-dropdown-menu {
    margin: 0 !important;
}

.el-dropdown-menu__item {
    padding: 0 20px;
}
.header .nav_list{
    width:100px;
    text-align:center;
    height:58px;
}
.header .nav_list:hover{
    color:#ff9900;
    cursor: pointer;
    background: #000000;
}
</style>
