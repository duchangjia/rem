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
table .el-button {
  color: #ff9900;
  border-color: #ff9900;
}
table .el-button:focus,
table .el-button:hover,
table .el-button:active {
  color: #ff9900;
}
.add-wrapper {
  overflow: hidden;
}

/*add_wage 部门范围 人员范围 start*/
.add-wrapper .menu-item {
 float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 2px;
  font-family: "PingFangSC-Regular";
}

.add-wrapper .menu .el-checkbox-group {
  display: block;
}

.add-wrapper .menu .el-checkbox-button__inner {
  background: #F4F4F4;
  border: none;
  padding: 10px;
  border-radius: 2px;
}

.add-wrapper
  .menu
  .el-checkbox-button:first-child
  .el-checkbox-button__inner {
  border-left: none;
  border-radius: 2px;
}

.add-wrapper
  .menu
  .el-checkbox-button.is-checked
  .el-checkbox-button__inner {
  background-color: #ff9900;
  color: #FFFFFF;
  box-shadow: none;
}

.add-wrapper
  .menu
  .el-checkbox-button:last-child
  .el-checkbox-button__inner {
  border-radius: 2px;
}

.add-wrapper .menu .el-checkbox-button__inner:hover {
  color: #ff9900;
}

.add-wrapper
  .menu
  .el-checkbox-button.is-checked
  .el-checkbox-button__inner:hover {
  color: #ffffff;
}
.add-wrapper .func-permission .funcs-content {
  background: #f8f8f8;
  height: 312px;
  margin-bottom: 20px;
  overflow: hidden;
}

.add-wrapper .func-permission .funcs-content label {
  color: #333333;
}

.add-wrapper .func-permission .funcs-content .func-item {
  margin-top: 8px;
  height: 264px;
  
}
.add-wrapper .func-permission .funcs-content .func-item:hover {
  overflow-y: auto;
}

.add-wrapper .func-permission .funcs-content .el-checkbox {
  display: block;
  line-height: 36px;
  height: 36px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox + .el-checkbox {
  margin-left: 0;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__input {
  float: right;
  margin-top: 8px;
  margin-right: 20px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__label {
  padding-left: 0;
  font-family: "PingFangSC-Light";
  margin-left: 20px;
  display: inline-block;
  width: calc(100% - 58px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #f1f1f1;
}

.add-wrapper
  .func-permission
  .funcs-content
  .el-checkbox.func-checkall
  .el-checkbox__input {
  margin-top: 10px;
}

.add-wrapper
  .func-permission
  .funcs-content
  .el-checkbox.func-checkall
  .el-checkbox__label {
  font-family: "PingFangSC-Regular";
  font-size: 16px;
}

.add-wrapper
  .func-permission
  .funcs-content
  .el-checkbox__input.is-checked
  .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff9900;
  border-color: #ff8d00;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__inner {
  border-radius: 0;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__inner:hover,
.add-wrapper .func-permission .funcs-content .el-checkbox__inner:focus {
  border-color: #ff8d00;
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
  background-color: #ff9900;
}
/*add_wage 部门范围 人员范围 end*/
</style>