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

.content-wrapper .toolBtn {
  float: right;
  margin-top: 20px;
  border-radius: 0;
  height: 40px;
  /* line-height: 40px; */
  width: 120px;
  background: #ff9900;
  border: none;
}

.content-wrapper .button-wrap {
  margin: 20px auto 40px;
  font-size: 0px;
  text-align: center;
}

.content-wrapper .resetBtn {
  color: #ff9900;
  border-radius: 0;
  height: 40px;
  width: 120px;
  margin-right: 20px;
  border: 1px solid #ff9900;
}

.content-wrapper .queryBtn {
  border-radius: 0;
  height: 40px;
  width: 120px;
  background: #ff9900;
  border: none;
}

.pact_mgmt .el-button {
  padding: 0;
}

.el-input__inner {
  border-radius: 0;
  height: 40px;
  width: 180px;
}

.add-wrapper .el-input__inner {
  width: 300px;
}

.el-input__inner:focus,
.el-textarea__inner:focus,
.el-select .el-input__inner:focus,
.el-input-group__append:focus,
.el-input-group__prepend:focus {
  border-color: #ff9900;
}

.el-input-group--append .el-input__inner {
  width: 253px;
}

.el-input-group--prepend .el-input__inner,
.el-input-group__append {
  border-radius: 0;
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

.el-button--small {
  margin: 4px;
  padding: 7px 9px !important;
}

.el-button,
.el-button + .el-button {
  margin-left: 0;
}

table .el-button:focus,
table .el-button:hover,
table .el-button:active {
  color: #ff9900;
  border-color: #ff9900;
}

table .el-button--danger:focus,
table .el-button--danger:hover,
table .el-button--danger:active {
  color: #fff;
  background-color: #ff4949;
  border-color: #ff4949;
}

.linkSpan {
  color: #337ab7;
  text-decoration: underline;
}

.linkSpan:hover {
  cursor: pointer;
}

.add-wrapper {
  overflow: hidden;
}
.add-wrapper form {
  font-size: 0;
  margin-top: 40px;
}

.add-wrapper .item-title {
  font-size: 14px;
  height: 56px;
  line-height: 56px;
  padding-left: 8px;
}

.add-wrapper .el-form-item__label {
  margin-right: 14px;
}

.querybar .el-form-item__label {
  width: 100px;
  padding: 13px 24px 13px 0;
}
.querybar .el-input__inner {
  width: 200px;
}

.add-wrapper .upload-demo {
  height: 0;
}

.add-wrapper .el-upload__input {
  display: none;
}

.add-wrapper .uploadBtn {
  position: absolute;
  height: 40px;
  top: 0;
  right: 0;
  margin: 0;
  border: 1px solid #ff9900;
  border-radius: 0;
  background: #ff9900;
  font-family: "PingFang SC";
}
.add-wrapper .downloadBtn {
  height: 40px;
  color: #ffffff;  
  border: 1px solid #ff9900;
  border-radius: 0;
  background: #ff9900;
  font-family: "PingFang SC";
}

.el-textarea__inner {
  border-radius: 0;
  width: 500px;
}

.el-date-table td.current:not(.disabled),
.el-date-table td.end-date,
.el-date-table td.start-date {
  background-color: #ff9900 !important;
}
.el-date-table td.today {
  color: #ff9900;
}
.el-date-table td.today:before {
  border-top: 0.5em solid #ff9900;
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
  height: 80px;
  line-height: 80px;
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
  margin: 20px 0;
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

.icon-import {
  display: inline-block;
  border: none;
  width: 40px;
  height: 40px;
  background: url("../../../../../static/img/common/batch-import0.png") center
    no-repeat;
}

.icon-export {
  display: inline-block;
  border: none;
  width: 40px;
  height: 40px;
  background: url("../../../../../static/img/common/batch-export0.png") center
    no-repeat;
}

.icon-download {
  display: inline-block;
  border: none;
  width: 40px;
  height: 40px;
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

.span-icon {
  float: left;
  border: none;
  margin-top: 20px;
  margin-right: 10px;
}
.span-icon:nth-of-type(2) {
  margin-right: 20px;
}
.titlebar .upload-demo {
  line-height: 32px;
}
.titlebar .upload-demo .el-upload__input {
  display: none;
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
</style>

