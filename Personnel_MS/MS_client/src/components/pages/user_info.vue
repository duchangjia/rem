<template>
    <div class="user_info">
        <v-header></v-header>
        <div class="main">
        	<div class="basic-sider">
				<div class="top">
					<img class="avatar" src="../../../static/img/common/avatar.png" width="100px" height="100px" alt="" />
					<div class="name">卢小鱼</div>
					<div class="job">技术经理</div>
				</div>
				<div class="bottom">
					<div class="info">基本信息</div>
					<div class="setword">修改密码</div>
				</div>
			</div>
			<div class="content">
				<basic-info></basic-info>
			</div>
			
        </div>
        
    </div>
</template>

<script type='text/ecmascript-6'>
    import vHeader from '../common/Header.vue'
    import basicInfo from './basic-info.vue'
    export default {
//        props: [{
//           username:{
//               type: String,
//               default: '',
//           }
//        }],
        components: {
            vHeader,basicInfo
        },
    }
</script>

<style>
	.user_info {
		height: 660px;
		background: #f4f4f4;
	}
	.user_info .main {
		display: flex;
		width: 100%;
		height: 600px;
	}
    .user_info .main .basic-sider {
		flex: 0 0 180px;
		width: 180px;
		height: 100%;
		text-align: center;
		background: #ffffff;
	}
	.user_info .basic-sider .top {
		padding: 40px;
		border-bottom: 4px solid #f4f4f4;
	}
	.user_info .basic-sider .top .avatar {
	    margin-bottom: 30px;
		border-radius: 50%;
	}
	.user_info .basic-sider .top .name {
		margin-bottom: 10px;
		font-size: 20px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}
	.user_info .basic-sider .top .job {
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 14px;
	}
	.user_info .bottom .info{
		padding: 20px 0px;
		font-size: 16px;
		color: #FF9900;
	}
	.user_info .bottom .setword {
		padding: 20px 0px;
		font-size: 16px;
		color: #333333;
	}
	.user_info .main .content {
		flex: 1;
	}
</style>
