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
    line-height: 40px;
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
.el-button {
    padding: 0;
}
.el-input__inner {
    border-radius: 0;
    height: 40px;
    width: 180px;
}
.el-input__inner:focus {
    border-color: #ff9900;
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
    padding: 7px 9px;
}

.el-button,
.el-button+.el-button {
    margin-left: 0;
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
</style>

