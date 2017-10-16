<template>
	<div class="side" id='sidebar' :class="{'sider-active':isCollapse}">
		<el-radio-group v-model="isCollapse">
			<el-radio-button :label="!isCollapse">
				<i class="collapsible"></i>
			</el-radio-button>
		</el-radio-group>
		<el-menu  class="el-menu-vertical-demo" :default-active="onRoutes" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :class="itemActive[item.index]" >
						<template slot="title"><i class="icon" :class="item.icon"></i><span slot="title">{{ item.title }}</span></template>
						<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" :class="itemActive[subItem.index]">{{ subItem.title }}
						</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :class="itemActive[item.index]">
						<i :class="item.icon" class="icon"></i><span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
				//subMenu index
				subMenuOldIndex: '',
				//nav item activeClass
				itemActive: {},
                items: [
                    {
                    	icon: 'icon-home',
                        index: 'home',
                        title: '主页'
                    },
                    {
                        icon: 'icon-sys',
                        index: '2',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'management_framework',
                                title: '组织架构'
                            },
                            {
                                index: 'management_user',
                                title: '用户管理'
                            },
                            {
                                index: 'management_role',
                                title: '角色管理'
                            },
                            {
                                index: 'management_fun',
                                title: '功能管理'
                            }
                        ]
                    },
                    {
                        icon: 'icon-csgl',
                        index: '3',
                        title: '参数管理',
                        subs: [
                            {
                                index: 'argument_1',
                                title: '参数管理1'
                            },
                            {
                                index: 'argument_2',
                                title: '参数管理2'
                            },
                        ]
                    },
                    {
                        icon: 'icon-khgx',
                        index: 'client',
                        title: '客户关系'
                    },
                    {
                        icon: 'icon-xmgl',
                        index: '5',
                        title: '项目管理',
                        subs: [
                            {
                                index: 'project_1',
                                title: '项目管理1'
                            },
                            {
                                index: 'project_2',
                                title: '项目管理2'
                            },
                        ]
                    },
					{
                        icon: 'icon-ywgl',
						index: 'business',
                        title: '业务管理',
					},
                    {
                        icon: 'icon-tjbb',
                        index: '7',
                        title: '统计报表',
                        subs: [
                            {
                                index: 'statement_1',
                                title: '统计报表1'
                            },
                            {
                                index: 'statement_2',
                                title: '统计报表2'
                            },
                        ]
                    }
                ]

			};
		},
		methods: {
			handleSelect(key,keyPath) {
				//subMenu index
				if(keyPath[1]){
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
				return this.$route.path.replace('/', '');
			}
		},
		watch: {
			$route: function(){
				//sidebar导航highlight随路由变化
				let path = this.$route.matched[1].path.substr(1);
				this.itemActive = {};
				this.itemActive[path] = 'is-active';
				if(this.$route.matched.length==3){
					this.itemActive[this.subMenuOldIndex] = 'is-active';
				}
			}
		}
	}
</script>

<style>
	.sider {
	    flex: 0 0 180px;
	    width: 180px;
	    background: #FFFFFF;
	    transition: all 0.3s linear;
	}
	.sider.sider-active {
		flex: 0 0 60px;
		width: 60px;
	}
	.sider .collapsible {
		display: inline-block;
		width: 16px;
		height: 13px;
		background: url('../../../static/img/sidebar/collapsible.png') no-repeat;
	}
	.sider .collapse-btn {
		width: 180px;
		background: #ffffff;
		transition: all 0.3s linear;
	}
	.sider .collapse-btn.collapse-active {
		width: 60px;
		background: #ffffff;
	}
	.sider .el-menu--collapse {
	    width: 60px;
	}
	.sider .el-radio-button {
	    display: inline-block;
	    max-width: 100%;
	    margin-bottom: 0px; 
	    font-weight: 700;
	}
	.sider .el-radio-button__inner {
	    border: none;
	    transition: all 0.3s linear;
	    padding: 22.5px 22px;
	    font-size: 14px;
	    border-radius: 0;
	}
	.sider .button-collapse{
		width: 180px;
	}
	.sider .el-radio-button:first-child .el-radio-button__inner {
	    border-left: none;
	    border-radius: 0px 0 0 0px;
	    box-shadow: none!important;
	}
	.sider .el-radio-button:first-child:last-child .el-radio-button__inner {
	    border-radius: 0px;
	}
	.sider .icon{
		display: inline-block;
		margin-right: 24px;
		width: 20px;
		height: 16px;
	}
	.sider .icon-home{
		background: url('../../../static/img/sidebar/home0.png') no-repeat top center;
	}
	.sider .icon-sys{
		background: url('../../../static/img/sidebar/sys0.png') no-repeat top center;
	}
	.sider .icon-csgl{
		background: url('../../../static/img/sidebar/csgl0.png') no-repeat top center;
	}
	.sider .icon-khgx{
		background: url('../../../static/img/sidebar/khgx0.png') no-repeat top center;
	}
	.sider .icon-xmgl{
		background: url('../../../static/img/sidebar/xmgl0.png') no-repeat top center;
	}
	.sider .icon-ywgl{
		background: url('../../../static/img/sidebar/ywgl0.png') no-repeat top center;
	}
	.sider .icon-tjbb{
		background: url('../../../static/img/sidebar/tjbb0.png') no-repeat top center;
	}
	.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
	    color: #FF9900;
	}
	.sider .is-active .icon-home{
		background: url('../../../static/img/sidebar/home1.png') no-repeat top center;
	}
	.sider .is-active .icon-sys{
		background: url('../../../static/img/sidebar/sys1.png') no-repeat top center;
	}
	.sider .is-active .icon-csgl{
		background: url('../../../static/img/sidebar/csgl1.png') no-repeat top center;
	}
	.sider .is-active .icon-khgx{
		background: url('../../../static/img/sidebar/khgx1.png') no-repeat top center;
	}
	.sider .is-active .icon-xmgl{
		background: url('../../../static/img/sidebar/xmgl1.png') no-repeat top center;
	}
	.sider .is-active .icon-ywgl{
		background: url('../../../static/img/sidebar/ywgl1.png') no-repeat top center;
	}
	.sider .is-active .icon-tjbb{
		background: url('../../../static/img/sidebar/tjbb1.png') no-repeat top center;
	}
	.sider .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
	    background-color: #F4F4F4;
	}
	.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {
	    background-color: #F4F4F4;
	}
	.sider .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
	    background-color: #F4F4F4;
	}
	.sider .el-submenu .el-menu-item {
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
	    transition: all 0.3s linear;
	    box-sizing: border-box;
	    white-space: nowrap;
	}
	.sider .el-submenu .el-menu {
	    background-color: #ffffff;
	    transition: all 0.3s linear!important;
	}
	.sider .el-menu {
	    border-radius: 2px;
	    list-style: none;
	    position: relative;
	    margin: 0;
	    padding-left: 0;
	    background-color: #ffffff!important;
	    transition: all 0.3s linear;
	}
	.sider .el-submenu__icon-arrow {
	    position: absolute;
	    top: 50%;
	    right: 20px;
	    margin-top: -5px;
	    transition: transform .3s;
	    font-size: 12px;
	    transform: rotateZ(-90deg);
	}
	.sider .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
	    -ms-transform: rotate(0deg);
	    transform: rotateZ(0deg);
	}
	.sider .el-submenu.is-opened {
	    border-top: 4px solid #f4f4f4;
    	border-bottom: 4px solid #f4f4f4;
	}
	.sider .el-menu--collapse .el-submenu.is-opened {
	    border-top: none;
    	border-bottom: none;
	}
	.sider .el-menu--collapse .el-submenu .el-menu {
	    border: 1px solid #f4f4f4;
	}
	/*.el-tooltip__popper.is-dark {
	    background: #1f2d3d;
	    color: #fff;
	}*/
</style>