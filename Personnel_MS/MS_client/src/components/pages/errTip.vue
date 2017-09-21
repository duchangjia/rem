<template>
	<!--<el-button class="errpage" type="text" @click="open">点击打开 Message Box</el-button>-->
	<div class="errmessage-wrap" :class="{hidden:errflag}">
		<div class="errmessage">
			<div class="header">
				<span class="title-text">{{errmessage.title}}</span>
				<span class="close-icon" @click="close()"></span>
			</div>
			<div class="main">{{errmessage.content}}</div>
			<div class="bottom">
				<span class="button" @click="close()">确定</span>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Bus from '../../common/Bus'
	export default {
		data() {
			return {
				errflag: true,
				errmessage:{
					content:'登录失败!账号或者密码有误，请填写正确的账号和密码。',
					title:'温馨提示'
				}
			}
		},
		created(){
			Bus.$on('showErrTip',(msg) => {
				this.errflag = false;
				if(msg !== ''){
					this.errmessage = msg;
				}
				
			})
		},
	    methods: {
	    	close() {
	    		this.errflag = true;
	    	}
//	      open() {
//	        this.$alert(this.errmessage.content, this.errmessage.title, {
//	          confirmButtonText: '确定',
//	          callback: action => {
//	            this.$message({
//	              type: 'info',
//	              message: `action: ${ action }`
//	            });
//	          }
//	        });
//	      }
	    }
  }

</script>

<style>
	.errmessage-wrap {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.errmessage-wrap .hidden{
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
		background: url(../../../static/img/common/close.png) no-repeat top center;
		cursor: pointer;
	}
	.errmessage .main {
		padding: 20px 20px;
		width: 100%;
		height: 120px;
	}
	.errmessage .bottom {
		width: 100%;
		height: 60px;
		text-align: center;
	}
	.errmessage .bottom .button{
		display: inline-block;
		padding: 9px 104px;
		font-size: 16px;
		color: #FF9900;
		border: 1px solid #CCCCCC;
		border-radius: 4px;
		cursor: pointer;
	}
</style>