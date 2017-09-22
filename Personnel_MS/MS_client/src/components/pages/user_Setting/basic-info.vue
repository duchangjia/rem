<template>
	<div class="basic-info">
		<div class="location-wrapper">
            <el-col :span="24">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item>个人设置</el-breadcrumb-item>
                    <el-breadcrumb-item>基本信息</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </div>
        <div></div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
.basic-info {
	padding: 0px 20px;
}
.location-wrapper {
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
</style>