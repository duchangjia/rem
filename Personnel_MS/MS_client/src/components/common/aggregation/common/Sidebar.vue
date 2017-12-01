<template>
	<div class="side-bar" id='sidebar' :class="{'sider-active':isCollapse}">
		<el-radio-group v-model="isCollapse">
			<el-radio-button :label="!isCollapse">
				<i class="collapsible"></i>
			</el-radio-button>
		</el-radio-group>
		<el-menu class="el-menu-vertical-demo" :default-active="onRoutes" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.menuList">
					<el-submenu :index="item.menuUrl" :class="itemActive[item.menuUrl]">
						<template slot="title">
							<i class="icon" :class="item.menuImg"></i>
							<span slot="menuName">{{ item.menuName }}</span>
						</template>
						<el-menu-item v-for="(subItem,i) in item.menuList" :key="i" :index="subItem.menuUrl" :class="itemActive[subItem.menuUrl]">{{ subItem.menuName }}
						</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.menuUrl" :class="itemActive[item.menuUrl]">
						<i :class="item.menuImg" class="icon"></i>
						<span slot="title">{{ item.menuName }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
const baseURL = 'iem_hrm'
export default {
	data() {
		return {
			isCollapse: false,
			//subMenu menuUrl
			subMenuOldIndex: '',
			//nav item activeClass
			itemActive: {},
			items: [
				{
					menuImg: 'icon-home',
					menuUrl: 'aggHome',
					menuName: '首页'
				},
				{
					menuImg: 'icon-sys',
					menuUrl: '2',
					menuName: '考勤与休假',
					menuList: [
						{
							menuUrl: 'ask_leave',
							menuName: '请假'
						}
					]
				},
				{
					menuImg: 'icon-khgx',
					menuUrl: '3',
					menuName: '个人信息',
					menuList: [
						{
							menuUrl: 'agg_uesr_center',
							menuName: '基本信息'
						},
                        {
                            menuUrl: 'agg_modify_password',
                            menuName: '修改密码'
                        }
					]
				},
				{
					menuImg: 'icon-xmgl',
					menuUrl: '5',
					menuName: '薪资福利',
					menuList: [
						{
                            menuUrl: 'salary_detail',
                            menuName: '个人薪资'
                        }
					]
				},
				{
					menuImg: 'icon-ywgl',
					menuUrl: '6',
					menuName: '费用报销',
					menuList: [
						{
                            menuUrl: 'billing_imformation',
                            menuName: '开票信息查询'
                        }
					]
				},
				{
					menuImg: 'icon-tjbb',
					menuUrl: '7',
					menuName: '差旅',
					menuList: [
						
					]
				},
				{
					menuImg: 'icon-khgx',
					menuUrl: '8',
					menuName: '行政助手',
					menuList: [
						
					]
				}
				
			]

		};
	},
	created() {
		
		
	},
	methods: {
		handleSelect(key, keyPath) {
			//subMenu menuUrl
			if (keyPath[1]) {
				this.subMenuOldIndex = keyPath[0];
			}
		},
		handleOpen(key, keyPath) {
			//				console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			//				console.log(key, keyPath);
		},
		collapse() {
			console.log('collapse');
		}
	},
	computed: {
		onRoutes() {
		    //保持左侧菜单激活状态
			let reg = /\//g
			console.log(this.$route.matched);
			return this.$route.matched[1].path.replace(reg, '');
		}
	},
	watch: {
		$route: function() {
			// sidebar导航highlight随路由变化
			// console.log(this.$route.matched);
			// alert(111)
			// let path = this.$route.matched[1].path.substr(1);
			// this.itemActive = {};
			// this.itemActive[path] = 'is-active';
			// if (this.$route.matched.length == 3) {
			// 	this.itemActive[this.subMenuOldIndex] = 'is-active';
			// }
		}
	}
}
</script>

<style lang="sass">
.side-bar {
	flex: 0 0 180px;
	width: 180px;
	background: #FFFFFF;
	transition: all 0.3s linear;
	.sider-active {
		flex: 0 0 60px;
		width: 60px;
	}
	.collapsible {
		display: inline-block;
		width: 16px;
		height: 13px;
		background: url('../../../../../static/img/sidebar/collapsible.png') no-repeat;
	}
	.collapse-btn {
		width: 180px;
		background: #ffffff;
		transition: all 0.3s linear;
	}
	.collapse-btn.collapse-active {
		width: 60px;
		background: #ffffff;
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
	.el-radio-button__inner {
		border: none;
		transition: all 0.3s linear;
		padding: 22.5px 22px;
		font-size: 14px;
		border-radius: 0;
	}
	.button-collapse {
		width: 180px;
	}
	.el-radio-button:first-child .el-radio-button__inner {
		border-left: none;
		border-radius: 0px 0 0 0px;
		box-shadow: none!important;
	}
	.el-radio-button:first-child:last-child .el-radio-button__inner {
		border-radius: 0px;
	}
	.icon {
		display: inline-block;
		margin-right: 24px;
		width: 20px;
		height: 16px;
	}
	.icon-home {
		background: url('../../../../../static/img/sidebar/home0.png') no-repeat top center;
	}
	.icon-sys {
		background: url('../../../../../static/img/sidebar/sys0.png') no-repeat top center;
	}
	.icon-csgl {
		background: url('../../../../../static/img/sidebar/csgl0.png') no-repeat top center;
	}
	.icon-khgx {
		background: url('../../../../../static/img/sidebar/khgx0.png') no-repeat top center;
	}
	.icon-xmgl {
		background: url('../../../../../static/img/sidebar/xmgl0.png') no-repeat top center;
	}
	.icon-ywgl {
		background: url('../../../../../static/img/sidebar/ywgl0.png') no-repeat top center;
	}
	.icon-tjbb {
		background: url('../../../../../static/img/sidebar/tjbb0.png') no-repeat top center;
	}
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
	.el-menu-item.is-active {
		color: #FF9900;
	}
	.is-active .icon-home {
		background: url('../../../../../static/img/sidebar/home1.png') no-repeat top center;
	}
	.is-active .icon-sys {
		background: url('../../../../../static/img/sidebar/sys1.png') no-repeat top center;
	}
	.is-active .icon-csgl {
		background: url('../../../../../static/img/sidebar/csgl1.png') no-repeat top center;
	}
	.is-active .icon-khgx {
		background: url('../../../../../static/img/sidebar/khgx1.png') no-repeat top center;
	}
	.is-active .icon-xmgl {
		background: url('../../../../../static/img/sidebar/xmgl1.png') no-repeat top center;
	}
	.is-active .icon-ywgl {
		background: url('../../../../../static/img/sidebar/ywgl1.png') no-repeat top center;
	}
	.is-active .icon-tjbb {
		background: url('../../../../../static/img/sidebar/tjbb1.png') no-repeat top center;
	}
	.el-submenu .el-menu-item:hover,
	.el-submenu__title:hover {
		background-color: #F4F4F4;
	}
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover,
	.el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover,
	.el-menu-item:hover {
		background-color: #F4F4F4;
	}
	.sider .el-submenu .el-menu-item:hover,
.el-submenu__title:hover {
	background-color: #F4F4F4;
}

.sider .el-submenu .el-menu-item {
	height: 50px;
	line-height: 50px;
	padding: 0 45px;
	padding-left: 67px!important;
	min-width: 200px;
}

.el-menu-item,
.el-submenu__title {
	height: 60px;
	line-height: 60px;
	font-size: 14px;
	color: #333333;
	padding: 0 20px;
	cursor: pointer;
	position: relative;
	transition: all 0.3s linear;
	box-sizing: border-box;
	white-space: nowrap;
}

.el-submenu .el-menu {
	background-color: #ffffff;
	transition: all 0.3s linear!important;
}

 .el-menu {
	border-radius: 2px;
	list-style: none;
	position: relative;
	margin: 0;
	padding-left: 0;
	background-color: #ffffff!important;
	transition: all 0.3s linear;
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

 .el-submenu.is-opened {
	border-top: 4px solid #f4f4f4;
	border-bottom: 4px solid #f4f4f4;
}

 .el-menu--collapse .el-submenu.is-opened {
	border-top: none;
	border-bottom: none;
}

 .el-menu--collapse .el-submenu .el-menu {
	border: 1px solid #f4f4f4;
}

}








</style>