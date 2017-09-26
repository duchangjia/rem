import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/pages/Login.vue'], resolve)
        },
        {
            path: '/user_center',
            component: resolve => require(['../components/common/user_center.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/pages/user_Setting/user_info.vue'], resolve)
                },
                {
                    path: '/modify_password',
                    component: resolve => require(['../components/pages/user_Setting/modify_password.vue'], resolve)
                },
            ]
        },
        {

            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/pages/home_page.vue'], resolve)
                },
                {
                    path: '/management_framework',
                    component: resolve => require(['../components/pages/system_Mgmt/frame.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/system_Mgmt/framework.vue'], resolve)
                        },
                        {
                            path: '/edit_department',
                                component: resolve => require(['../components/pages/system_Mgmt/edit_department.vue'], resolve)
                        },
                        {
                            path: '/add_person',
                                component: resolve => require(['../components/pages/system_Mgmt/add_person.vue'], resolve)
                        },
                        {
                            path: '/add_junior',
                                component: resolve => require(['../components/pages/system_Mgmt/add_junior.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/management_user',
                    component: resolve => require(['../components/pages/system_Mgmt/manage_user.vue'], resolve)
                },
                {
                    path: '/management_role',
                    component: resolve => require(['../components/pages/system_Mgmt/role.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/system_Mgmt/manage_role.vue'], resolve)
                        },
                        {
                            path: '/add_role',
                            component: resolve => require(['../components/pages/system_Mgmt/add_role.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/argument_1',
                    component: resolve => require(['../components/pages/argument_Mgmt/argument_1.vue'], resolve)
                },
                {
                    path: '/management_fun',
                    component: resolve => require(['../components/pages/system_Mgmt/manage_fun.vue'], resolve)
                },
                {
                    path: '/argument_2',
                    component: resolve => require(['../components/pages/argument_Mgmt/argument_2.vue'], resolve)
                },
                {
                    path: '/client',
                    component: resolve => require(['../components/pages/client_Relationship/client.vue'], resolve)
                }, {
                    path: '/project_1',
                    component: resolve => require(['../components/pages/project_Mgmt/project_1.vue'], resolve)
                },
                {
                    path: '/project_2',
                    component: resolve => require(['../components/pages/project_Mgmt/project_2.vue'], resolve)
                },
                {
                    path: '/business',
                    component: resolve => require(['../components/pages/business_Mgmt/business.vue'], resolve)
                },
                {
                    path: '/statement_1',
                    component: resolve => require(['../components/pages/statement_STAT/statement_1.vue'], resolve)
                },
                {
                    path: '/statement_2',
                    component: resolve => require(['../components/pages/statement_STAT/statement_2.vue'], resolve)
                }
            ]
        }
    ]
})
