<template>
    <div class="modifine_password">
        <div class="location-wrapper">
            <el-col :span="24">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item>个人设置</el-breadcrumb-item>
                    <el-breadcrumb-item>修改密码</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </div>
        <div class="content">
        	<div class="title">
        		<span class="title-text">修改密码</span>
        	</div>
        	<ul class="content-inner">
        		<li class="list-item">
        			<div class="left">当前密码</div>
        			<div class="right">
        				<input type="password" class="input" placeholder="请输入原密码"/>
        				<span class="tips forget">忘记密码</span>
        			</div>
        		</li>
        		<li class="list-item">
        			<div class="left">新密码</div>
        			<div class="right">
        				<input type="password" class="input" placeholder="请输入新密码"/>
        				<span class="tips">密码支持6-20位字符，至少包含数字、字母（区分大小写）、符号中的2种</span>
        			</div>
        		</li>
        		<li class="list-item">
    				<div class="left">确认密码</div>
    				<div class="right">
        				<input type="password" class="input" placeholder="请再次输入新密码"/>
        			</div>
    				<div class="err-tips" v-show="true">两次输入的密码不一致</div>
        		</li>
        		<li class="list-item">
        			<div class="right">
        				<input class="confirm" type="button" @click="confirm()" value="确定"/>
        			</div>
        		</li>
        	</ul>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
	import Bus from '../../../common/Bus.js'
    export default {
		data() {
			return {
				
			}
		},
		methods: {
			confirm() {
				Bus.$emit('showErrTip',{content:'登录失败！请填写正确的账号和密码。',title:'温馨提示'});
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
.modifine_password {
	padding: 0px 20px;
	width: 100%;
}
.location-wrapper {
	width: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 12px;
}

.location-wrapper .title {
    color: #475669;
    vertical-align: middle;
}
.location-wrapper .breadcrumb-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}
.modifine_password .content {
	width: 100%;
	min-height: 530px;
	padding: 0px 40px;
	background: #ffffff;
}
.modifine_password .content .title {
	border-bottom: 1px solid #EEEEEE;
}
.modifine_password .content .title .title-text{
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}
.modifine_password .content .title .title-text:after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.modifine_password .content-inner{
	padding-top: 30px;
}
.modifine_password .content .list-item .left,.modifine_password .content .list-item .right {
	display: inline-block;
	padding: 10px 0px;
	color: #333333;
}
.modifine_password .content .list-item .left {
	width: 64px;
	text-align: right;
	margin-right: 40px;
	color: #999999;
	
}
.modifine_password .right .input{
    padding: 8px 0px 8px 10px;
	width: 300px;
	color: #333333;
	background: #FFFFFF;
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	margin-right: 40px;
}
.modifine_password .right .tips{
	font-size: 14px;
	color: #999999;
	letter-spacing: 0;
}
.modifine_password .right .forget{
	cursor: pointer;
}
.modifine_password .right .forget:hover {
	color: #FF9900 ;
}
/*.modifine_password .right .err-tips-wrap {
	height: 20px;
	line-height: 14px;
}*/
.modifine_password .err-tips {
    position: absolute;
	font-size: 12px;
	color: #FF6666;
	margin-left: 120px;
}
.modifine_password .confirm {
	padding: 8px 0px 8px 10px;
	width: 300px;
	margin-left: 108px;
	margin-top: 54px;
	outline: none;
	background: #FF9900;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: 16px;
}
</style>
