<template>
	<div class="manage_user">
		<transition name="move" mode="out-in">
	        <router-view></router-view>
	    </transition>
	</div>
	
</template>

<script type='text/ecmascript-6'>
	export default {
	
	}
</script>

<style>
	.manage_user {
		/*padding: 0px 20px;*/
		width: 100%;
	}
</style>