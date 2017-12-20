<template>
	<div class="success-wrap" :class="{hidden:errflag}">
		<div class="errmessage">
			<div class="header">
				<span class="title-text">温馨提示</span>
				<span class="close-icon" @click="close()"></span>
			</div>
			<div class="main-content">恭喜您，密码修改成功，请重新<span class="login" @click="login()">登录</span>！</div>
			<div class="bottom">
			</div>
		</div>
	</div>
	
</template>

<script>
	import Bus from '../../../common/Bus'
	export default {
		data() {
			return {
				errflag: false
//				errmessage:{
//					content:'登录失败!账号或者密码有误，请填写正确的账号和密码。',
//					title:'温馨提示'
//				}
			}
		},
		created(){
			// Bus.$on('showSuccessTip',(msg) => {
			// 	this.errflag = false;
			// 	if(msg !== ''){
			// 		this.errmessage = msg;
			// 	}
				
			// })
		},
	    methods: {
	    	close() {
	    		this.errflag = true;
	    	},
	    	login() {
	    		this.$router.push('/login');
	    	}
	    }
  }

</script>

<style scoped>
	.success-wrap {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.success-wrap .hidden{
		display: none;
	}
	.errmessage{
		position: absolute;
		left: 27%;
		top: 43%;
		width: 640px;
		background: #ffffff;
	}
	.errmessage .header{
		padding: 18px 20px 20px 20px;
		width: 100%;
		height: 60px;
		line-height: 22px;
		background: #F4F4F4;
		
	}
	.errmessage .header .title-text {
		float: left;
		font-size: 16px;
		color: #333333;
	}
	.errmessage .header .close-icon {
		float: right;
		margin: 4px;
		width: 14px;
		height: 14px;
		box-sizing: content-box;
		background: url(../../../../static/img/common/close.png) no-repeat top center;
		cursor: pointer;
	}
	.errmessage .main-content {
		padding: 20px 20px;
		text-align: center;
		width: 100%;
		height: 120px;
		font-size: 18px;
	}
	.errmessage .bottom {
		width: 100%;
		height: 60px;
		text-align: center;
	}
	/*.errmessage .bottom .button{
		display: inline-block;
		padding: 9px 104px;
		font-size: 16px;
		color: #FF9900;
		border: 1px solid #CCCCCC;
		border-radius: 4px;
		cursor: pointer;
	}*/
	.login {
		font-size: 18px;
		color: #FF9900;
		line-height: 25px;
		cursor: pointer;
	}
</style>