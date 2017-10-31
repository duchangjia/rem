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
.travelC_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}
.travelC_wrap .content {
	width: 100%;
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}
.travelC_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.travelC_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.travelC_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}

.travelC_wrap .content-inner {
	padding: 40px 0px;
}	
.travelC_wrap .info-title{
	padding: 11px 0px 11px 10px;
    margin-bottom: 30px;
	color: #999999;
	border-bottom: none;
}

.travelC_wrap .el-form-item {
	padding-left: 20px;
}
.travelC_wrap .el-form-item__content {
    width: 300px;
    margin-left: 30px;
}
.travelC_wrap .el-input, 
.travelC_wrap .el-input__inner {
    width: 300px;
    display: inline-block;
}
.travelC_wrap .el-input__inner {
    border: 1px solid #EEEEEE;
    color: #999999;
    width: 300px;
    height: 40px;
}
.travelC_wrap .el-date-editor.el-input {
    width: 300px;
}
.travelC_wrap .travelCity {
	display: inline-block;
	width: 120px;
}
.travelC_wrap .travelCity .el-input__inner{
	width: 120px;
}
.travelC_wrap .travelCity_line {
	padding: 0px 23px;
}
.travelC_wrap .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 1;
    padding: 11px 0px 11px 0;
    box-sizing: border-box;
}
.travelC_wrap .file_button {
	color: #FF9900;
	font-size: 14px;
}
.travelC_wrap .el-form-item__error {
    left: 30px;
}
.travelC_wrap .uploadBtn {
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
.travelC_wrap .el-upload__input {
    margin-left: 30px;
    border: 1px solid #eeeeee;
    display: none;
}
.travelC_wrap .conserve {
	float: right;
	margin-top: 20px;
	background: #F4F4F4;
	border: 1px solid #F4F4F4;
	border-radius: 0px;
	font-size: 14px;
	color: #333333;
	width: 120px;
	height: 40px;
}
.travelC_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.travelC_wrap .remark {
	width: 82%;
	display: flex!important;
}
.travelC_wrap .remark .el-form-item__content {
	flex: 1;
}
</style>