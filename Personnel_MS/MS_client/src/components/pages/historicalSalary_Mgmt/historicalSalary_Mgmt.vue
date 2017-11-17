<template>
    <transition name="move" mode="out-in">
        <router-view></router-view>
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
  overflow: hidden;
}

.content-wrapper .titlebar {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .titlebar .title-text {
  display: inline-block;
  height: 50px;
  position: relative;
}

.content-wrapper .titlebar .title-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #333333;
}

.content-wrapper .toolBtn {
  float: right;
  margin-top: 10px;
  /* border-radius: 0; */
  height: 30px;
  width: 120px;
  background: #ff9900;
  border: none;
}
.content-wrapper .button-wrap {
  margin: 15px auto 30px;
  font-size: 0px;
  text-align: center;
}
.content-wrapper .resetBtn {
  color: #ff9900;
  /* border-radius: 0; */
  height: 30px;
  width: 120px;
  padding: 0;
  margin-right: 20px;
  border: 1px solid #ff9900;
}
.content-wrapper .queryBtn {
  color: #ffffff;
  /* border-radius: 0; */
  height: 30px;
  width: 120px;
  padding: 0;
  background: #ff9900;
  border: none;
}
.el-input__inner {
  height: 40px;
  width: 180px;
}
.querybar .el-form--inline .el-form-item {
  margin-right: 0;
}

.querybar .el-form-item__label {
  padding: 10px 8px 10px 0;
}
.querybar .el-input__inner {
  width: 164px;
  height: 30px;
  border-radius: 4px;
}
.querybar .el-form-item {
  margin-bottom: 15px;
}
.toolbar.el-pagination {
  text-align: right;
  margin-top: 20px;
}
.el-table th > .cell {
  padding: 0 15px;
}

</style>