<template>
    <transition name="move" mode="out-in">
        <keep-alive><router-view></router-view></keep-alive>
    </transition>
</template>

<script type='text/ecmascript-6'>
export default {};
</script>

<style>
.content-wrapper {
  background: #ffffff;
  padding: 0 20px 20px;
  color: #333333;
  clear: both;
}
table .el-button {
  color: #ff9900;
  border-color: #ff9900;
}
table .el-button:focus,
table .el-button:hover,
table .el-button:active {
  color: #ff9900;
}
.add-wrapper .downloadBtn {
  height: 40px;
  color: #ffffff;  
  border: 1px solid #ff9900;
  background: #ff9900;
  font-family: "PingFang SC";
}

</style>

