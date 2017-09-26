<template>
    <div class="user_center">
        <v-header></v-header>
        <div class="main">
        	<div class="basic-sider">
				<div class="top">
					<img class="avatar" src="../../../static/img/common/avatar.png" width="100px" height="100px" alt="" />
					<div class="name">卢小鱼</div>
					<div class="job">技术经理</div>
				</div>
				<div class="bottom">
					<div class="info" :class="{'active':infoChange}" command="user_center" @click="handleCommand('user_center')">基本信息</div>
					<div class="setword" :class="{'active':!infoChange}" command="modify_password" @click="handleCommand('modify_password')">修改密码</div>
				</div>
			</div>
        	<transition class="content" name="move" mode="out-in">
	            <router-view></router-view>
	        </transition>
        </div>
        <success-tip></success-tip>
    </div>
</template>

<script type='text/ecmascript-6'>
    import vHeader from './Header.vue'
    import successTip from '../pages/user_Setting/successTip.vue'
    export default {
//        props: [{
//           username:{
//               type: String,
//               default: '',
//           }
//        }],
//		data() {
//			return {
//				infoChange: ''
//			}
//		},
		computed: {
			infoChange() {
				console.log(this.$route.path);
				if (this.$route.path === '/user_center') {
					return true
				}
				return false
			}
		},
        components: {
            vHeader,successTip
        },
        methods: {
        	handleCommand(commmand) {
	            const _self = this;
//	            _self.infoChange = !_self.infoChange;
	            _self.$router.push(commmand);
	        }
        }
    }
</script>

<style>
.user_center {
	height: 660px;
	background: #f4f4f4;
}
.user_center .main {
	display: flex;
	width: 100%;
	height: 600px;
}
.user_center .main .basic-sider {
	flex: 0 0 180px;
	width: 180px;
	height: 100%;
	text-align: center;
	background: #ffffff;
}
.user_center .basic-sider .top {
	padding: 40px;
	border-bottom: 4px solid #f4f4f4;
}
.user_center .basic-sider .top .avatar {
    margin-bottom: 30px;
	border-radius: 50%;
}
.user_center .basic-sider .top .name {
	margin-bottom: 10px;
	font-size: 20px;
	color: #333333;
	letter-spacing: 0;
	line-height: 20px;
}
.user_center .basic-sider .top .job {
	font-size: 14px;
	color: #999999;
	letter-spacing: 0;
	line-height: 14px;
}
.user_center .bottom .info,.user_center .bottom .setword {
	padding: 20px 0px;
	font-size: 16px;
	color: #333333;
	cursor: pointer;
}
.user_center .bottom .info.active,.user_center .bottom .setword.active {
	color: #FF9900;
}
.user_center .main .content {
	flex: 1;
}

</style>
