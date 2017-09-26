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
	.manage_user {
		padding: 0px 20px;
		width: 100%;
	}
	
	.location-wrapper {
		width: 100%;
		height: 70px;
		line-height: 70px;
		font-size: 12px;
	}
	
	.location-wrapper .title {
		color: #475669;
		vertical-align: middle;
	}
	
	.location-wrapper .breadcrumb-inner {
		font-size: 12px;
		display: inline-block;
		vertical-align: middle;
	}
	
	.manage_user .content {
		width: 100%;
		/*min-height: 530px;*/
		/*height: calc(100% - 90px);*/
		padding: 0px 20px;
		background: #ffffff;
	}
	
	.manage_user .content .title {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.manage_user .content .title .title-text {
		display: inline-block;
		position: relative;
		padding: 29px 0px;
		font-size: 16px;
	}
	
	.manage_user .content .title .title-text:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: #333333;
	}
	
	.manage_user .content-inner {
		padding: 40px 0px;
	}
	
	.manage_user .input-wrap {
		display: flex;
	}
	
	.manage_user .el-form-item__label {
		text-align: left;
		vertical-align: middle;
		float: left;
		font-size: 14px;
		color: #999999;
		line-height: 1;
		padding: 11px 12px 11px 0;
		box-sizing: border-box;
	}
	
	.manage_user .input-wrap .el-form-item {
		margin-right: 80px;
	}
	
	.manage_user .el-form-item {
		margin-bottom: 40px;
	}
	
	.manage_user .el-input,
	.el-input__inner {
		width: 200px;
		display: inline-block;
	}
	
	.manage_user .el-form-item__content {
		line-height: 36px;
		position: relative;
		font-size: 14px;
	}
	
	.manage_user .button-wrap {
		margin: 0px auto;
		width: 264px;
	}
	
	.manage_user .button-wrap .el-form-item__content {
		margin-left: 0!important;
	}
	
	.manage_user .el-input__inner {
		border-radius: 2px;
		border: 1px solid #eeeeee;
		color: #333333;
		padding: 19px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	
	.manage_user .el-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #ff9900;
		color: #ff9900;
		margin: 0;
		padding: 12px 45px;
		border-radius: 4px;
	}
	
	.manage_user .el-button.resetform {
		margin-right: 20px;
	}
	
	.manage_user .el-button--primary {
		color: #fff;
		background-color: #ff9900;
		border-color: #ff9900;
	}
	
	.manage_user .user-info {}
	
	.manage_user .el-table td,
	.manage_user .el-table th {
		text-align: center;
	}
	
	.manage_user .el-table th {
		white-space: nowrap;
		overflow: hidden;
		background-color: #f4f4f4;
		text-align: center;
		box-shadow: inset 0 1px 0 0 #EEEEEE;
	}
	
	.manage_user .el-table--border td,
	.el-table--border th {
		border-right: 1px solid #EEEEEE;
	}
	
	.manage_user .el-table td,
	.manage_user .el-table th.is-leaf {
		border-bottom: 1px solid #EEEEEE;
	}
	.manage_user .el-pagination {
		text-align: right;
		margin-top: 40px;
	}
	.manage_user .el-pager li.active {
	    border-color: #ff9900;
	    background-color: #ff9900;
	    color: #fff;
	    cursor: default;
	}
	.manage_user .el-pager li {
	    padding: 0 4px;
	    border-right: 0;
	    background: #fff;
	    font-size: 12px;
	    min-width: 24px;
	    height: 24px;
	    line-height: 24px;
	    text-align: center;
	}
	.el-pagination button, .el-pagination span {
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
</style>