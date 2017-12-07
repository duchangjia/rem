<template>
    <div class="user_center">
        <v-header></v-header>
        <div class="main">
        	<div class="basic-sider">
				<div class="top">
					<img class="avatar" :src="srcUrl" width="100px" height="100px" alt="" />
					<div class="name">{{userInfo.custName}}</div>
					<div class="job">{{custPostName}}</div>
				</div>
				<div class="bottom">
					<div class="info"  :class="{'active':infoChange}" command="user_center" @click="handleCommand('user_center')">基本信息</div>
					<div class="setword" :class="{'active':!infoChange}" command="modify_password" @click="handleCommand('modify_password')">修改密码</div>
				</div>
			</div>
				<span class="back_icon" @click="backHome"></span>
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
	const baseURL = 'iem_hrm';
    export default {
    	data() {
    		return {
    			srcUrl: '../../../static/img/common/avatar.png',
    			custPostName: '',
    			userInfo: {
    				custName: "",
    				custPost: "",
    			}
    		}
    	},
		computed: {
			infoChange() {
				if (this.$route.path === '/user_center') {
					return true
				}
				return false
			}
		},
        components: {
            vHeader,successTip
        },
        created() {
        	this.queryUserInfo();
        },
        methods: {
        	handleCommand(commmand) {
	            const _self = this;
//	            _self.infoChange = !_self.infoChange;
	            _self.$router.push(commmand);
			},
			backHome() {
				this.$router.push('/home');
			},
	        queryUserInfo() {
				let self = this;
				self.$axios.get(baseURL+'/CustInfo/queryCustRole')
				.then(function(res) {
					console.log('userInfo',res);
					if(res.data.code === "S00000") {
						self.userInfo = res.data.data[0];
						self.queryCans();
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			},
			queryCans() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then(function(res) {
					console.log('queryCans',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
						self.custPostList.forEach(function(ele) {
							if(ele.paraValue === self.userInfo.custPost) {
								self.custPostName = ele.paraShowMsg;
							}
						},this)
					}
					
				}).catch(function(err) {
					console.log('error');
				})
			}
        },
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
.user_center .back_icon {
	width: 19px;
    height: 10px;
    position: absolute;
    right: 80px;
    top: 77px;
	z-index: 200;
    cursor: pointer;
	background: url("../../../static/img/common/back.png");
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
	font-size: 16px;
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
