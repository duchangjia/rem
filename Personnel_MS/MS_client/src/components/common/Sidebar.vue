<template>
	<!--<el-menu default-active="home/basetable" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <h1>sidbar</h1>
        <template v-for="item in items">
            <template v-if="item.subs">
                <el-submenu :index="item.index" @click='link()' v-bind:key="item.index">
                    <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                    <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.index" v-bind:key="item.index"> 
                    <i :class="item.icon"></i>{{ item.title }}
                </el-menu-item>
            </template>
        </template>
    </el-menu>-->
	<div class="sidebar" id='sidebar'>
		<el-radio-group v-model="isCollapse">
			<el-radio-button :label="!isCollapse">
				<i class="collapsible"></i>
			</el-radio-button>
		</el-radio-group>
		<el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
			<el-menu-item index="1">
				<i class="icon icon-home"></i>
				<span slot="title">主页</span>
			</el-menu-item>
			<el-submenu index="2" id="el-submenu">
				<template slot="title">
					<i class="icon icon-sys"></i>
					<span slot="title">系统管理</span>
				</template>
				<el-menu-item index="2-1">组织架构</el-menu-item>
				<el-menu-item index="2-2">用户管理</el-menu-item>
				<el-menu-item index="2-3">角色管理</el-menu-item>
				<el-menu-item index="2-4">功能管理</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<i class="icon icon-csgl"></i>
				<span slot="title">参数管理</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="icon icon-khgx"></i>
				<span slot="title">客户关系</span>
			</el-menu-item>
			<el-menu-item index="5">
				<i class="icon icon-xmgl"></i>
				<span slot="title">项目管理</span>
			</el-menu-item>
			<el-menu-item index="6">
				<i class="icon icon-ywgl"></i>
				<span slot="title">业务管理</span>
			</el-menu-item>
			<el-menu-item index="7">
				<i class="icon icon-tjbb"></i>
				<span slot="title">统计报表</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}

		//		data() {
		//			return {
		//				items: []
		//			}
		//		},
		//		created() {
		//			this.$axios.get("/ifdp/getMenus/", {}).then((res) => {
		//				this.items = res.data.data;
		//			});
		//		},
		//		methods: {
		//			link() {
		//				this.$router.path = this.$router.path.replace(/\/home\//, '')
		//			}
		//		},
		//		computed: {
		//			onRoutes() {
		//				return this.$route.path.replace('/', '');
		//			}
		//		}
	}
</script>

<style>
	.sidebar .collapsible {
		display: inline-block;
		width: 16px;
		height: 13px;
		background: url('../../../static/img/sidebar/collapsible.png') no-repeat;
	}
	.el-menu--collapse {
	    width: 60px;
	}
	.el-radio-button {
	    display: inline-block;
	    max-width: 100%;
	     margin-bottom: 0px; 
	    font-weight: 700;
	}
	.icon{
		display: inline-block;
		margin-right: 17px;
		width: 20px;
		height: 16px;
	}
	.icon-home{
		background: url('../../../static/img/sidebar/home0.png') no-repeat top center;
	}
	.icon-sys{
		background: url('../../../static/img/sidebar/sys0.png') no-repeat top center;
	}
	.icon-csgl{
		background: url('../../../static/img/sidebar/csgl0.png') no-repeat top center;
	}
	.icon-khgx{
		background: url('../../../static/img/sidebar/khgx0.png') no-repeat top center;
	}
	.icon-xmgl{
		background: url('../../../static/img/sidebar/xmgl0.png') no-repeat top center;
	}
	.icon-ywgl{
		background: url('../../../static/img/sidebar/ywgl0.png') no-repeat top center;
	}
	.icon-tjbb{
		background: url('../../../static/img/sidebar/tjbb0.png') no-repeat top center;
	}
	.el-submenu .el-menu-item:hover, .el-submenu__title:hover {
	    background-color: #F4F4F4;
	}
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {
	    background-color: #F4F4F4;
	}
	.el-submenu .el-menu-item:hover, .el-submenu__title:hover {
	    background-color: #F4F4F4;
	}
	.el-submenu .el-menu-item {
	    height: 50px;
	    line-height: 50px;
	    padding: 0 45px;
	    padding-left: 60px!important;
	    min-width: 200px;
	}
	.el-menu-item, .el-submenu__title {
	    height: 60px;
	    line-height: 60px;
	    font-size: 14px;
	    color: #333333;
	    padding: 0 20px;
	    cursor: pointer;
	    position: relative;
	    transition: border-color .3s,background-color .3s,color .3s;
	    box-sizing: border-box;
	    white-space: nowrap;
	}
	.el-submenu .el-menu {
	    background-color: #ffffff;
	}
	.el-menu {
	    border-radius: 2px;
	    list-style: none;
	    position: relative;
	    margin: 0;
	    padding-left: 0;
	    background-color: #ffffff!important;
	}
	.el-submenu__icon-arrow {
	    position: absolute;
	    top: 50%;
	    right: 20px;
	    margin-top: -5px;
	    transition: transform .3s;
	    font-size: 12px;
	    transform: rotateZ(-90deg);
	}
	.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
	    -ms-transform: rotate(0deg);
	    transform: rotateZ(0deg);
	}
	.el-radio-button__inner {
	    white-space: nowrap;
	    background: #ffffff;
	    border: none;
	    border-left: 0;
	    color: #1f2d3d;
	    -webkit-appearance: none;
	    text-align: center;
	    box-sizing: border-box;
	    outline: 0;
	    margin: 0;
	    cursor: pointer;
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	    padding: 22.5px 22px;
	    font-size: 14px;
	    border-radius: 0;
	}
	.el-radio-button:first-child .el-radio-button__inner {
	    border-left: none;
	    border-radius: 4px 0 0 4px;
	    box-shadow: none!important;
	}
</style>