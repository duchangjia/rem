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

.icon-edit:hover,
.icon-delete:hover {
  cursor: pointer;
}
</style>



