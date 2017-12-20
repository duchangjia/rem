<template>
	<div class="side" id='sidebar' :class="{'sider-active':isCollapse}">
		<el-radio-group v-model="isCollapse" @change="changeRadio">
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
					menuUrl: 'home',
					menuName: '主页'
				},
				{
					menuImg: 'icon-sys',
					menuUrl: '2',
					menuName: '系统管理',
					menuList: [
						{
							menuUrl: 'management_framework',
							menuName: '组织架构'
						},
						{
							menuUrl: 'management_user',
							menuName: '用户管理'
						},
						{
							menuUrl: 'management_role',
							menuName: '角色管理'
						},
						{
							menuUrl: 'management_fun',
							menuName: '功能管理'
						}
					]
				},
				{
					menuImg: 'icon-khgx',
					menuUrl: '3',
					menuName: '项目管理',
					menuList: [
						{
							menuUrl: 'preCheck_query',
							menuName: '项目一览'
						},
						{
							menuUrl: 'preSale_query',
							menuName: '售前立项'
						},
						{
							menuUrl: 'proSetUp',
							menuName: '项目立项'
						},
						{
							menuUrl: 'proAccept',
							menuName: '项目验收'
						},
/*=======
							menuUrl: 'proAcceptance',
							menuName: '项目验收'
						}
>>>>>>> 07ca0e21d13802cdec9d9570bc8f7d654556ae1e*/
					]
				},
				{
					menuImg: 'icon-csgl',
					menuUrl: '4',
					menuName: '客户关系',
					menuList: [
						{
							menuUrl: 'query_customer',
							menuName: '客户一览'
						}
					]
				},	
// 				{
// 					menuImg: 'icon-xmgl',
// 					menuUrl: '5',
// 					menuName: '薪酬福利',
// 					menuList: [
// 						{
// 							menuUrl: 'payBaseInfo_setting',
// 							menuName: '薪酬基数设置'
// 						},
// 						{
// 							menuUrl: 'payChange_manage',
// 							menuName: '调薪管理'
// 						},
// 						{
// 							menuUrl: 'wageProcess_manage',
// 							menuName: '工资流程管理'
// 						},
// //						{
// //							menuUrl: 'awardProcess_manage',
// //							menuName: '奖金流程管理'
// //						},
// //						{
// //							menuUrl: 'historyPay_query',
// //							menuName: '历史薪酬查询'
// //						}
// 					]
// 				},
// 				{
// 					menuImg: 'icon-ywgl',
// 					menuUrl: '6',
// 					menuName: '考勤管理',
// 					menuList: [
// 						{
// 							menuUrl: 'attendance_record',
// 							menuName: '考勤记录管理'
// 						},
// 						{
// 							menuUrl: 'travel_management',
// 							menuName: '出差管理'
// 						},
// 						{
// 							menuUrl: 'leave_management',
// 							menuName: '请假管理'
// 						},
// 						{
// 							menuUrl: 'overtime_management',
// 							menuName: '加班管理'
// 						}
// 					]
// 				},
// 				{
// 					menuImg: 'icon-tjbb',
// 					menuUrl: '7',
// 					menuName: '资产管理',
// 					menuList: [
// 						{
// 							menuUrl: 'assetReq_manage',
// 							menuName: '资产登记管理'
// 						},
//                         {
//                             menuUrl: 'assetUse_manage',
//                             menuName: '资产使用管理'
//                         }
// 					]
// 				},
// 				{
// 					menuImg: 'icon-khgx',
// 					menuUrl: '8',
// 					menuName: '员工自助',
// 					menuList: [
// 						{
// 							menuUrl: 'query_personalInfo',
// 							menuName: '个人信息查询'
// 						},
// 						{
// 							menuUrl: 'query_billingInfo',
// 							menuName: '开票信息查询'
// 						},
// 						{
// 							menuUrl: 'lineManager_Mgmt',
// 							menuName: '直线经理管理'
// 						}
// 					]
// 				},
// 				{
// 					menuImg: 'icon-xmgl',
// 					menuUrl: '9',
// 					menuName: '历史薪酬',
// 					menuList: [
// 						{
// 							menuUrl: 'historicalSalary_query',
// 							menuName: '工资查询'
// 						}
// 					]
// 				},
				
			]

		};
	},
	created() {
		
		this.queryList();
	},
	methods: {
		changeRadio(value) {
			console.log('menu',value);
			this.$emit('hideSidebar',value);
		},
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
		},
		queryList() {
			let self = this;
			self.$axios.get(baseURL+'/menu/queryMenuInfo')
			.then(function(res) {
//				console.log('menuList',res);
//				self.items = res.data.data;
			}).catch(function(err) {
				console.log('error');
			})
		}
	},
	computed: {
		onRoutes() {
		    //保持左侧菜单激活状态
			let reg = /\//g
//			console.log(this.$route.matched);
			return this.$route.matched[1].path.replace(reg, '');
		}
	}
}
</script>

<style lang="scss">
.sider {
	width: 180px;
	height:100%;
    background: #FFFFFF;
    transition: width 0.28s ease-out;
    position: absolute;
    left: 0;
    top:0;
}

.sider.sider-active {
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

.sider .button-collapse {
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

.sider .icon {
	display: inline-block;
	margin-right: 24px;
	width: 20px;
	height: 16px;
}

.sider .icon-home {
	background: url('../../../static/img/sidebar/home0.png') no-repeat top center;
}

.sider .icon-sys {
	background: url('../../../static/img/sidebar/sys0.png') no-repeat top center;
}

.sider .icon-csgl {
	background: url('../../../static/img/sidebar/csgl0.png') no-repeat top center;
}

.sider .icon-khgx {
	background: url('../../../static/img/sidebar/khgx0.png') no-repeat top center;
}

.sider .icon-xmgl {
	background: url('../../../static/img/sidebar/xmgl0.png') no-repeat top center;
}

.sider .icon-ywgl {
	background: url('../../../static/img/sidebar/ywgl0.png') no-repeat top center;
}

.sider .icon-tjbb {
	background: url('../../../static/img/sidebar/tjbb0.png') no-repeat top center;
}

.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
	color: #FF9900;
}

.sider .is-active .icon-home {
	background: url('../../../static/img/sidebar/home1.png') no-repeat top center;
}

.sider .is-active .icon-sys {
	background: url('../../../static/img/sidebar/sys1.png') no-repeat top center;
}

.sider .is-active .icon-csgl {
	background: url('../../../static/img/sidebar/csgl1.png') no-repeat top center;
}

.sider .is-active .icon-khgx {
	background: url('../../../static/img/sidebar/khgx1.png') no-repeat top center;
}

.sider .is-active .icon-xmgl {
	background: url('../../../static/img/sidebar/xmgl1.png') no-repeat top center;
}

.sider .is-active .icon-ywgl {
	background: url('../../../static/img/sidebar/ywgl1.png') no-repeat top center;
}

.sider .is-active .icon-tjbb {
	background: url('../../../static/img/sidebar/tjbb1.png') no-repeat top center;
}

.sider .el-submenu .el-menu-item:hover,
.el-submenu__title:hover {
	background-color: #F4F4F4;
}

.sider .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover,
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
	overflow-x:hidden;
	border-right:none;
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

.sider .el-menu:after, .el-menu:before {
    display: table;
    content: "";
}
/*.el-tooltip__popper.is-dark {
	    background: #1f2d3d;
	    color: #fff;
	}*/
</style>