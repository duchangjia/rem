import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//export default new Router({
    //     mode: 'history',
    // hashbang: false,
    //     history: true,
const routes = [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            meta: { requireAuth: false, },// 添加该字段，表示进入这个路由是需要登录的
            component: resolve => require(['../components/view/Login.vue'], resolve)
        },
        {

            path: '/home',
            meta: { requireAuth: true, },
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/view/home_page.vue'], resolve)
                },
                // {
                //     path: '/agg_uesr_center',
                //     meta: { requireAuth: true, },
                //     component: resolve => require(['../components/common/aggregation/user_Setting/user_info.vue'], resolve)
                // },
                // {
                //     path: '/agg_modify_password',
                //     meta: { requireAuth: true, },
                //     component: resolve => require(['../components/common/aggregation/user_Setting/modify_password.vue'], resolve)
                // },
                // {
                //     path: '/ask_leave',
                //     meta: { requireAuth: true, },
                //     component: resolve => require(['../components/common/aggregation/check_work/ask_leave.vue'], resolve)
                // },
                // {
                //     path: '/salary_detail',
                //     meta: { requireAuth: true, },
                //     component: resolve => require(['../components/common/aggregation/pay_salary/salary_detail.vue'], resolve)
                // },
                // {
                //     path: '/billing_imformation',
                //     meta: { requireAuth: true, },
                //     component: resolve => require(['../components/common/aggregation/exp_reimy/billing_imformation.vue'], resolve)
                // }
            ]
        },
        // {
        //     path: '/web_standard',
        //     component: resolve => require(['../components/common/web_standard.vue'], resolve)
        // },
        {
    
            path: '/home',
            meta: { requireAuth: true, },
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/view/home_page.vue'], resolve)
                },
                {
                    path: '/management_framework',
                    component: resolve => require(['../components/view/system_Mgmt/frame.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/view/system_Mgmt/framework.vue'], resolve)
                        },
                        {
                            path: '/edit_department',
                            component: resolve => require(['../components/view/system_Mgmt/edit_department.vue'], resolve)
                        },
                        {
                            path: '/add_person',
                            component: resolve => require(['../components/view/system_Mgmt/add_person.vue'], resolve)
                        },
                        {
                            path: '/add_junior',
                            component: resolve => require(['../components/view/system_Mgmt/add_junior.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/management_user',
                    component: resolve => require(['../components/view/system_Mgmt/manage_user.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/view/system_Mgmt/userM_query.vue'], resolve)
                        },
                        {
                            name: 'edit_userM',
                            path: '/edit_userM',
                            component: resolve => require(['../components/view/system_Mgmt/edit_userM.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/management_role',
                    component: resolve => require(['../components/view/system_Mgmt/manage_role.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/view/system_Mgmt/query_role.vue'], resolve)
                        },
                        {
                            path: '/add_role',
                            component: resolve => require(['../components/view/system_Mgmt/add_role.vue'], resolve)
                        },
                        {
                            name: 'edit_role',
                            path: '/edit_role',
                            component: resolve => require(['../components/view/system_Mgmt/edit_role.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/management_fun',
                    component: resolve => require(['../components/view/system_Mgmt/manage_fun.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/view/system_Mgmt/fun.vue'], resolve)
                        },
                        {
                            name: 'edit_fun',
                            path: '/edit_fun',
                            component: resolve => require(['../components/view/system_Mgmt/edit_fun.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/preSale_query',
                    component: resolve => require(['../components/view/project_Mgmt/preSale/preSale.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/view/project_Mgmt/preSale/preSale_query.vue'], resolve),
                        },
                        {
                            name: 'add_preSale',
                            path: '/add_preSale',
                            component: resolve => require(['../components/view/project_Mgmt/preSale/add_preSale.vue'], resolve),
                        },
                        {
                            name: 'edit_preSale',
                            path: '/edit_preSale',
                            component: resolve => require(['../components/view/project_Mgmt/preSale/edit_preSale.vue'], resolve),
                        },
                        {
                            name: 'preSale_info',
                            path: '/preSale_info',
                            component: resolve => require(['../components/view/project_Mgmt/preSale/preSale_info.vue'], resolve),
                        }
                    ]
                }
            ]
        }
    ]
//})



// 页面刷新时，重新赋值token
if (window.localStorage.getItem('access_token')) {
    window.localStorage.setItem('access_token', window.localStorage.getItem('access_token'))
}

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.getItem('access_token')) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;