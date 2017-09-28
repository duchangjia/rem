<template>
	<div class="set">
		<div class="basic-sider">
			<div class="top">
				<!--<div class="content">-->
					<img src="../../../../static/img/common/avatar.png" width="100px" height="100px" alt="" />
					<div class="name">卢小鱼</div>
					<div class="job">技术经理</div>
				<!--</div>-->
			</div>
			<div class="bottom">
				<div class="info">基本信息</div>
				<div class="setword">修改密码</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.set .basic-sider {
		flex: 0 0 180px;
		width: 180px;
		text-align: center;
		background: #ffffff;
	}
	.set .basic-sider .top {
		padding: 40px;
		border-bottom: 4px solid #f4f4f4;
	}
	.set .basic-sider .top .name {
		font-size: 20px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
	}
	.set .basic-sider .top .job {
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		line-height: 14px;
	}
</style>