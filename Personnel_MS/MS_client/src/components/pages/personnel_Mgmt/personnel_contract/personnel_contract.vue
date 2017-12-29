<template>
    <transition name="move" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script type='text/ecmascript-6'>
export default {};
</script>

<style>

.el-input-group--append .el-input__inner {
  width: 253px;
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
  background-color: #ff9900;
}

label {
  font-weight: 400;
  margin-bottom: 0;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-form-item__label {
  font-family: "PingFangSC Regular";
  color: #999999;
  padding: 13px 12px 13px 0;
}

.el-table th > .cell {
  padding: 0 15px;
}

.el-table .el-button--text {
  color: #ff9900;
}

.el-button--small {
  margin: 4px;
}
.el-button,
.el-button + .el-button {
  margin-left: 0;
}
.linkSpan {
  color: #337ab7;
  text-decoration: underline;
}
.linkSpan:hover {
  cursor: pointer;
}
.el-dialog__body {
  padding: 0 20px 30px 20px;
}
.el-dialog__body .el-input__inner {
  width: 164px;
}
.item-box .button-box .restBtn {
  margin-right: 5px;
}

.el-checkbox__inner:focus,
.el-checkbox__inner:hover {
  border-color: #ff9900;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff9900;
  border-color: #ff9900;
}

.el-tabs__item {
  padding: 0 10px;
}

.el-tabs__item.is-active {
  color: #333333;
}

.el-tabs__active-bar {
  background-color: #333333;
  height: 2px;
}

.el-tabs__item:first-of-type {
  padding-left: 0;
}

.el-tabs__header {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.el-input.is-disabled .el-input__inner,
.el-textarea.is-disabled .el-textarea__inner {
  background-color: #f7f7f7;
}

.content-wrapper .subtitlebar {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-family: "PingFangSC Regular";
  padding-left: 10px;
  margin-bottom: 15px;
}

.content-wrapper .subtitlebar .title-text {
  display: inline-block;
  height: 24px;
  position: relative;
  color: #333333;
}

.content-wrapper .subtitlebar .addBtn {
  float: right;
  color: #ff9900;
  border: none;
  padding: 5px;
  padding-right: 0;
}

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

