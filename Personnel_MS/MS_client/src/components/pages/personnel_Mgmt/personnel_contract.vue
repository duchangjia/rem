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
    content: '';
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
    background: #FF9900;
    border: none;
}

.content-wrapper .queryBtn {
    border-radius: 0;
    height: 40px;
    line-height: 40px;
    width: 120px;
    background: #FF9900;
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
.el-select .el-input__inner:focus {
    border-color: #ff9900;
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item.selected.hover {
    background-color: #FF9900;
}

label {
    font-weight: 400;
    margin-bottom: 0;
}

.el-form-item__label {
    font-family: "PingFangSC Regular";
    color: #999999;
    padding: 13px 12px 13px 0;
}

.el-table th>.cell {
    padding: 0 15px;
}

.el-button--small {
    margin: 4px;
    padding: 7px 9px !important;
}

.el-button,
.el-button+.el-button {
    margin-left: 0;
}

/* .el-button:active {
    color: #ff9900;
    border-color: #ff9900;
} */
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

.add-wrapper {
    overflow: hidden;
}
.add-wrapper form {
    font-size: 0;
    margin-top: 40px;
    overflow: hidden;
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

.add-wrapper .el-upload__input {
    width: 300px;
    border: 1px solid #bfcbd9;
}

.add-wrapper .uploadBtn {
    position: absolute;
    height: 38px;
    top: 0;
    right: 0;
    margin: 0;
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
    background-color: #ff9900!important;
}
.el-date-table td.today {
    color: #ff9900;
}
.el-date-table td.today:before {
    border-top: .5em solid #ff9900;
}

.el-checkbox__inner:focus,
.el-checkbox__inner:hover {
    border-color: #ff9900;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #ff9900;
    border-color: #ff9900;
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
    color: #FF9900;
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

