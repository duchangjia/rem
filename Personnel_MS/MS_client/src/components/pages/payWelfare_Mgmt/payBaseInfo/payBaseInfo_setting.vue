<template>
    <transition name="move" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script type='text/ecmascript-6'>
export default {};
</script>

<style>
.icon-edit {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../../static/img/common/edit.png") center no-repeat;
}
.icon-delete {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../../static/img/common/delete.png") center
    no-repeat;
}
.icon-import {
  display: inline-block;
  border: none;
  width: 30px;
  height: 30px;
  background: url("../../../../../static/img/common/batch-import0.png") center
    no-repeat;
}
.icon-export {
  display: inline-block;
  border: none;
  width: 30px;
  height: 30px;
  background: url("../../../../../static/img/common/batch-export0.png") center
    no-repeat;
}
.icon-download {
  display: inline-block;
  border: none;
  width: 30px;
  height: 30px;
  background: url("../../../../../static/img/common/template-download0.png")
    center no-repeat;
}
.icon-edit:hover,
.icon-delete:hover,
.icon-import:hover,
.icon-export:hover,
.icon-download:hover {
  cursor: pointer;
}

</style>

