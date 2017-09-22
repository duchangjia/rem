<template>
	<div :class="{tusi:true, tusi_none:toastflag}">
		<i class="loading"></i>
		<span class="toast-text">{{toastcontent}}</span>
	</div>
</template>

<script>
	import Bus from '../../common/Bus'
	export default {
		name:'Toast',
		data () {
			return {
				//吐丝状态标记
				toastflag:true,
				//吐丝内容
				toastcontent:'努力加载中……'
			}
		},
		created () {
			Bus.$on('showToast',(msg)=>{
				this.toastflag = false;
				this.toastcontent = msg;
				setTimeout(()=>{
					this.toastflag = true;
				},1000)
			})
		}
	}
</script>

<style>
.tusi{
	position: absolute;
	left: 37.5%;
	top:57%;
	font-size: 0px;
	padding:9px 106px;
	color: white;
	background: rgba(0,0,0,0.8);
	text-align: center;
	border-radius: 5px;
	transition: 1s;
}
.tusi_none{display: none;}
.loading{
	display: inline-block;
	margin-right: 10px;
	width: 22px;
	height: 22px;
	vertical-align: bottom;
	background: url(../../../static/img/common/loading.png) no-repeat;
}
.toast-text {
	display: inline-block;
	font-size: 12px;
}
</style>