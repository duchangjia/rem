<template>
    <div class="user_info">
        <current class="current-user_info" yiji="首页" erji="基本信息"></current>
        <div class="content">
        	<div class="title">
        		<span class="title-text">基本信息</span>
        	</div>
        	<ul class="content-inner">
        		<li class="list-item">
        			<div class="left">公司</div>
        			<div class="right">{{userInfo.organName}}</div>
        		</li>
        		<li class="list-item">
        			<div class="left">部门</div>
        			<div class="right">{{userInfo.derpName}}</div>
        		</li>
        		<li class="list-item">
        			<div class="left">岗位</div>
        			<div class="right">{{custPostName}}</div>
        		</li>
        		<li class="list-item">
    				<div class="left">系统权限</div>
    				<div class="right right3">
        				<span class="sys-item" v-for="item in userInfoList" :key="item.userNo">{{item.roleName}}</span>
        			</div>
        		</li>
        	</ul>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import current from '../../common/current_position.vue'
	const baseURL = 'iem_hrm'
    export default {
		data() {
			return {
				custPostName: "",
				userInfoList: [],
				userInfo: {},
				custPostList: []
			}
		},
		components: {
			current
		},
		created() {
			this.queryUserInfo();
		},
		methods: {
			queryUserInfo() {
				let self = this;
				self.$axios.get(baseURL+'/CustInfo/queryCustRole')
				.then((res) => {
					console.log('userInfo',res);
					if(res.data.code === "S00000") {
						self.userInfoList = res.data.data;
						self.userInfo = res.data.data[0];
						self.queryCans()
					}
					
				}).catch((err) => {
					console.log('error');
				})
			},
			queryCans() {
				let self = this;
				self.$axios.get(baseURL+'/sysParamMgmt/queryPubAppParams?paraCode=CUST_POST')
				.then((res) => {
					console.log('queryCans',res);
					if(res.data.code === "S00000") {
						self.custPostList = res.data.data;
						self.custPostList.forEach(function(ele) {
							if(ele.paraValue === self.userInfo.custPost) {
								self.custPostName = ele.paraShowMsg;
							}
						},this)
					}
					
				}).catch((err) => {
					console.log('error');
				})
			}
		}

    }
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
a {
	text-decoration: none;
}
.user_info {
	padding-left: 20px;
	width: 100%;
}
.user_info .content {
	width: 100%;
	padding: 0px 40px;
	background: #ffffff;
}
.user_info .content .title {
	border-bottom: 1px solid #EEEEEE;
}
.user_info .content .title .title-text{
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}
.user_info .content .title .title-text:after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.user_info .content .list-item{
	display: flex;
}
.user_info .content .list-item .left,.user_info .content .list-item .right {
	display: inline-block;
	padding: 32px 0px;
	color: #333333;
}
.user_info .content .list-item .left {
	flex: 0 0 64px;
	width: 64px;
	text-align: right;
	margin-right: 40px;
	color: #999999;
	
}
.user_info .content .list-item .right{
	flex: 1;
}
.user_info .list-item .right3 {
    padding: 14px 0px!important;
}
.user_info .sys-item {
	display: inline-block;
	padding: 10px;
	font-size: 14px;
	color: #333333;
	letter-spacing: 0;
	line-height: 14px;
	background: #F4F4F4;
	border-radius: 2px;
    margin: 10px 20px 10px -10px;
}
</style>
