<template>
    <transition name="move" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script type='text/ecmascript-6'>
export default {

}
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
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  font-family: "PingFang SC";
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}

.content-wrapper .titlebar .title-text {
  display: inline-block;
  height: 80px;
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

.content-wrapper .titlebar .toolBtn {
  float: right;
  margin-top: 20px;
  border-radius: 0;
  height: 40px;
  width: 120px;
  background: #ff9900;
  border: none;
}

.content-wrapper .titlebar .el-button {
  padding: 0;
}

.content-wrapper .el-table th {
  background-color: #f4f4f4 !important;
}

.add-wrapper .item-title {
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    padding-left: 8px;
}

.add-wrapper form {
    font-size: 0;
}

.add-wrapper form>div {
    float: none;
    display: inline-block;
}

.add-wrapper label {
    font-weight: 400;
    color: #999999;
    margin-bottom: 0;
}

.add-wrapper .el-input__inner {
    border-radius: 0;
    width: 300px;
}

.add-wrapper .el-input__inner:focus,
.add-wrapper .el-textarea__inner:focus {
    border-color: #ff9900;
}

.add-wrapper .el-textarea {
    width: 300px;
}

.add-wrapper .el-textarea__inner {
    border-radius: 0;
}

.add-wrapper .el-select-dropdown__item.selected,
.add-wrapper .el-select-dropdown__item.selected.hover {
    background-color: #ff9900;
}

.add-wrapper .el-radio-button__inner {
    background: #F4F4F4;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.add-wrapper .el-radio-button__inner:hover {
    color: #FF9900;
}

.add-wrapper .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
    border-radius: 2px;
}

.add-wrapper .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 2px;
}

.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #FF9900;
    box-shadow: none;
}

.add-wrapper .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover {
    color: #ffffff;
}

.add-wrapper .el-radio__input.is-checked .el-radio__inner {
    background: #ff9900;
    border-color: #ff9900;
}

.add-wrapper .el-radio__inner:hover {
    border-color: #ff9900;
}

.add-wrapper .leftside {
    display: inline-block;
    padding: 7px 0 7px 8px;
    color: #999999;
}

.add-wrapper .rightside {
    float: none;
    display: inline-block;
}

.add-wrapper.role-msg label {
    margin-right: 14px;
}

.add-wrapper .menu-item {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
    font-family: "PingFangSC-Regular";
}

.add-wrapper .submenu {
    padding: 10px;
    margin-bottom: 20px;
    background: #F4F4F4;
}

.add-wrapper .submenu .menu-item {
    margin-bottom: 0;
    font-family: "PingFangSC-Light";
}

.add-wrapper .submenu .el-checkbox-group {
    display: inline-block;
}

.add-wrapper .submenu .el-checkbox-button__inner {
    background: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button:first-child .el-checkbox-button__inner {
    border-left: none;
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner {
    background-color: #FF9900;
    box-shadow: none;
}

.add-wrapper .submenu .el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 2px;
}

.add-wrapper .submenu .el-checkbox-button__inner:hover {
    color: #FF9900;
}

.add-wrapper .submenu .el-checkbox-button.is-checked .el-checkbox-button__inner:hover {
    color: #ffffff;
}


.add-wrapper .func-permission .funcs-content {
    background: #F8F8F8;
    height: 312px;
    margin-bottom: 20px;
    overflow-y: auto;
    overflow-x: hidden;
}

.add-wrapper .func-permission .funcs-content label {
    color: #333333;
}

.add-wrapper .func-permission .funcs-content .func-item {
    margin-top: 8px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox {
    display: block;
    line-height: 36px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox+.el-checkbox {
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
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F1F1F1;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__input {
    margin-top: 10px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox.func-checkall .el-checkbox__label {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
}

.add-wrapper .func-permission .funcs-content .el-checkbox__input.is-checked .el-checkbox__inner {
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

.toolbar.el-pagination {
  text-align: right;
  margin-top: 20px;
}

.content-wrapper .el-pager li.active {
  border-color: #ff9900;
  background-color: #ff9900;
  color: #fff;
  cursor: default;
}

.content-wrapper .el-pager li {
  padding: 0 4px;
  border-right: 0;
  background: #fff;
  font-size: 12px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}

.el-pagination button,
.el-pagination span {
  display: inline-block;
  font-size: 12px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  vertical-align: top;
  box-sizing: border-box;
}

.el-pager li:hover {
  color: #ff9900;
}

.el-pager li.active:hover {
  cursor: pointer;
  color: #ffffff;
}
.el-message-box__btns .el-button {
  border-radius: 2px;
}

.el-message-box__btns .el-button:hover {
  color: #ff9900;
  border-color: #ff9900;
  opacity: 0.5;
}

.el-message-box__btns .el-button--primary,
.el-message-box__btns .el-button--primary:focus,
.el-message-box__btns .el-button--primary:hover {
  background: #ff9900;
  border-color: #ff9900;
  color: #fff;
}

.el-message-box__headerbtn:focus .el-message-box__close,
.el-message-box__headerbtn:hover .el-message-box__close {
  color: #ff9900;
}

.icon-edit {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/edit.png") center no-repeat;
}

.icon-delete {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../../../static/img/common/delete.png") center no-repeat;
}

.icon-edit:hover,
.icon-delete:hover {
  cursor: pointer;
}

</style>

