<template>
    <div class="header">
        <span class="homelogo">
            <img src="../../../static/img/common/home_logo.png" alt="" width="120" height="30">
        </span>
        <span class="headertitle">项目管理系统</span>
        <div class="headerright">
            <span class="tips">
                <img src="../../../static/img/common/Group.png" alt="" width="14" height="16">
                <!-- <span>8</span> -->
            </span>
            <span><img src="../../../static/img/common/help.png" alt="" width="14" height="16"></span>
            <el-dropdown trigger="hover" class="userinfo">
                <span class="el-dropdown-link">
                    <img src="../../../static/img/common/avatar.png" width="32" height="32" class="useravatar" />您好，{{username}}
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" split-button type="primary" @click="handleClick">
                    <el-dropdown-item>基本信息</el-dropdown-item>
                    <el-dropdown-item>密码修改</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span @click="handleCommand('loginout')">
                <img src="../../../static/img/common/exit0.png" alt="" width="16" height="18">
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'ifdp'
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        handleCommand(command) {
            var _this = this;
            if (command == 'loginout') {
                this.$confirm('确认退出吗?', '提示', {
                }).then(() => {
                    localStorage.removeItem('ms_username');
                    _this.$router.push('/login');
                }).catch(() => {

                });
            }
        },
        handleClick() {
            return false
        }
    }
}
</script>

<style>
.header {
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
    padding: 6px 20px !important;
    margin: 0 !important;
}

</style>
