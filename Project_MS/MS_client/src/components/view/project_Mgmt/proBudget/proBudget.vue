<template>
	<transition name="move" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
}
</script>

<style>
.info_wrapper {
	padding: 0 0 20px 20px;
}
.add-wrapper .downloadBtn {
  height: 40px;
  color: #ffffff;  
  border: 1px solid #ff9900;
  background: #ff9900;
  font-family: "PingFang SC";
}
</style>