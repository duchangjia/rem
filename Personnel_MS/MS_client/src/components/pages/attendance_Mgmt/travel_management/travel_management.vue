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
.content_wrap {
	padding-left: 20px;
    padding-bottom: 20px;
	width: 100%;
}

.content_wrap .content {
	width: 100%;
	/*min-height: 530px;*/
	/*height: calc(100% - 90px);*/
	padding: 0px 20px;
	background: #ffffff;
	clear: both;
}

.content_wrap .content .title {
	border-bottom: 1px solid #EEEEEE;
}

.content_wrap .content .title .title-text {
	display: inline-block;
	position: relative;
	padding: 29px 0px;
	font-size: 16px;
}

.content_wrap .content .title .title-text:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background: #333333;
}
.content_wrap .title_button {
	float: right;
	margin-top: 20px;
}
.content_wrap .content-inner {
	padding: 40px 0px;
}

.content_wrap .el-form-item__label {
	text-align: left;
	vertical-align: middle;
	float: left;
	font-size: 14px;
	color: #999999;
	line-height: 1;
	padding: 11px 12px 11px 0;
	box-sizing: border-box;
}

.content_wrap .input-wrap .el-form-item {
	margin-right: 80px;
	float: left;
}

.content_wrap .el-form-item {
	margin-bottom: 40px;
}

.content_wrap .el-input,
.content_wrap .el-input__inner {
	width: 200px;
	display: inline-block;
}

.content_wrap .el-form-item__content {
	line-height: 36px;
	position: relative;
	font-size: 14px;
}

.content_wrap .button-wrap {
	margin: 0px auto 40px;
	width: 260px;
	clear: both;
	font-size: 0px;
}

.content_wrap .el-input__inner {
	border-radius: 4px;
	border: 1px solid #EEEEEE;
	color: #333333;
	padding: 19px 10px;
	transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
}

.content_wrap .el-input__inner:hover {
	border-color: #FF9900;
}

.content_wrap .el-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #FF9900;
	color: #FF9900;
	/*margin: 0;*/
	padding: 12px 45px;
	border-radius: 0px;
}

.content_wrap .el-button.resetform {
	margin-right: 20px;
}

.content_wrap .el-button--primary {
	color: #fff;
	background-color: #FF9900;
	border-color: #FF9900;
}
.el-button+.el-button {
    margin-left: 0px;
}
/*.content_wrap .el-table {
	background-color: #fff;
	border-left: 1px solid #EEEEEE;
	color: #666666;
}

.content_wrap .el-table__footer-wrapper thead div,
.content_wrap .el-table__header-wrapper thead div {
	background-color: #f4f4f4;
	color: #666666;
}*/

.content_wrap .el-table td,
.content_wrap .el-table th {
	text-align: center;
}
.content_wrap .el-table td:first-child{
	cursor: pointer;
}
.content_wrap .link {
	cursor: pointer;
    color: #337ab7;
    text-decoration: underline;
}
.content_wrap .el-table td:first-child:hover{
	color: #FF9900;
}
/*.content_wrap .el-table--enable-row-hover .el-table__body tr:hover>td {
	background-color: #f8f8f8;
	background-clip: padding-box;
}

.content_wrap .el-table--striped .el-table__body tr.el-table__row--striped td {
	background: #F8F8F8;
	background-clip: padding-box;
}*/

.content_wrap .el-table th {
	white-space: nowrap;
	overflow: hidden;
	background-color: #f4f4f4;
	text-align: center;
	box-shadow: inset 0 1px 0 0 #EEEEEE;
}
.icon_edit {
	width: 14px;
	height: 14px;
	cursor: pointer;
	display: inline-block;
	background: url(../../../../../static/img/common/edit.png);
}
.icon_delete {
	width: 14px;
	height: 16px;
	cursor: pointer;
	display: inline-block;
	margin-left: 20px;
	background: url(../../../../../static/img/common/delete.png);
}
/*.content_wrap .el-table--border td,
.content_wrap .el-table--border th {
	border-right: 1px solid #EEEEEE;
}

.content_wrap .el-table td,
.content_wrap .el-table th.is-leaf {
	border-bottom: 1px solid #EEEEEE;
}


.content_wrap .el-table::after,
.content_wrap .el-table::before {
	content: '';
	position: absolute;
	background-color: transparent;
}*/

.content_wrap .el-pagination {
	text-align: right;
	margin-top: 40px;
	margin-right: 40px;
	color: #282828;
}

.content_wrap .el-pager li.active {
	border-color: #FF9900;
	background-color: #FF9900;
	color: #fff;
	cursor: default;
}

.content_wrap .el-pager li {
	padding: 0 4px;
	border-right: 0;
	background: #fff;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	line-height: 24px;
	text-align: center;
}

.content_wrap .el-pager li:last-child {
	border-right: 1px solid #EEEEEE;
}

.content_wrap .el-pagination button,
.content_wrap .el-pagination span {
	display: inline-block;
	font-size: 12px;
	letter-spacing: -0.39px;
	min-width: 24px;
	height: 24px;
	color: #282828;
	line-height: 24px;
	vertical-align: top;
	box-sizing: border-box;
}

.content_wrap .el-pager li:hover {
	color: #FF9900;
}
.content_wrap .el-pager li.active {
    border-color: #ff9900;
    background-color: #ff9900;
    color: #fff;
    cursor: default;
}
.content_wrap .el-pager li.active:hover {
	cursor: pointer;
	color: #ffffff;
}

.content_wrap .el-pagination button:hover {
	color: #FF9900;
}
.content_wrap .el-pagination button.disabled:hover {
	color: #e4e4e4;
}

.content_wrap .el-pagination__editor {
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	padding: 2px 0px;
	width: 24px;
	min-width: 24px;
}

.content_wrap .el-pagination__editor:focus {
	outline: 0;
	border-color: #FF9900;
}

.content_wrap .el-pagination .btn-next,
.content_wrap .el-pagination .btn-prev {
	border: 1px solid #EEEEEE;
	color: #282828;
}

.content_wrap .el-autocomplete-suggestion__wrap,
.content_wrap .el-pager li {
	border: 1px solid #EEEEEE;
}

.content_wrap .el-pager li.btn-quicknext,
.content_wrap .el-pager li.btn-quickprev {
	line-height: 28px;
	color: #282828;
}
.content_wrap .el-upload__input {
    display: none;
}
.content_wrap .btn_wrap {
	margin-top: 30px;
}
.content_wrap .upload_btn {
	display: inline-block;
	left: 100%;
}
</style>