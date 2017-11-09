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
.workotC_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.workotC_wrap .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.workotC_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.workotC_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 14px 0px;
	font-size: 16px;
	height: 50px;
}

.workotC_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.workotC_wrap .content-inner {
	padding: 30px 0px;
}	
.workotC_wrap .info-title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}

.workotC_wrap .el-form-item {
	padding-left: 20px;
}
.workotC_wrap .el-form-item__content {
    width: 300px;
    margin-left: 30px;
}
.workotC_wrap .el-input, 
.workotC_wrap .el-input__inner {
    width: 300px;
    display: inline-block;
}
.workotC_wrap .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
}
.workotC_wrap .el-date-editor.el-input {
    width: 300px;
}
.workotC_wrap .workotCity {
	display: inline-block;
	width: 120px;
}
.workotC_wrap .workotCity .el-input__inner{
	width: 120px;
}
.workotC_wrap .workotCity_line {
	padding: 0px 23px;
}
.workotC_wrap .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.workotC_wrap .file_button {
	color: #FF9900;
	font-size: 14px;
}
.workotC_wrap .el-form-item__error {
    left: 30px;
}
.workotC_wrap .uploadBtn {
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
.workotC_wrap .el-upload__input {
    margin-left: 30px;
    border: 1px solid #eeeeee;
    display: none;
}
.workotC_wrap .conserve {
	float: right;
	margin-top: 10px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 30px;
	padding: 0;
}
.workotC_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.workotC_wrap .remark {
	width: 82%;
	display: flex!important;
}
.workotC_wrap .remark .el-form-item__content {
	flex: 1;
}
</style>