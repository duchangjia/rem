import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    //     mode: 'history',
    // hashbang: false,
    //     history: true,
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
                    component: resolve => require(['../components/pages/system_Mgmt/manage_user.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/system_Mgmt/user-query.vue'], resolve)
                        },
                        {
                            path: '/user-info',
                            component: resolve => require(['../components/pages/system_Mgmt/user-info.vue'], resolve)
                        },
                        {
                            path: '/test',
                            component: resolve => require(['../components/pages/system_Mgmt/test.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/management_role',
                    component: resolve => require(['../components/pages/system_Mgmt/manage_role.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/system_Mgmt/query_role.vue'], resolve)
                        },
                        {
                            path: '/add_role',
                            component: resolve => require(['../components/pages/system_Mgmt/add_role.vue'], resolve)
                        },
                        {
                            name: 'edit_role',
                            path: '/edit_role',
                            component: resolve => require(['../components/pages/system_Mgmt/edit_role.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/argument_1',
                    component: resolve => require(['../components/pages/argument_Mgmt/argument_1.vue'], resolve),

                },
                {
                    path: '/management_fun',
                    component: resolve => require(['../components/pages/system_Mgmt/manage_fun.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/system_Mgmt/fun.vue'], resolve)
                        },
                        {
                            path: '/edit_fun',
                            component: resolve => require(['../components/pages/system_Mgmt/edit_fun.vue'], resolve)
                        }
                    ]
                },
                {
                    path: '/argument_2',
                    component: resolve => require(['../components/pages/argument_Mgmt/argument_2.vue'], resolve),
                	children: [
                		{
                			path:'/',
                			component: resolve => require(['../components/pages/argument_Mgmt/arg_2.vue'], resolve)
                		},
                		{
                			name:'agency_argument',
                			path:'/agency_argument',
                			component: resolve => require(['../components/pages/argument_Mgmt/agency_argument.vue'], resolve)
                		},
                		{
                			name:'welfare_coefficient',
                			path:'/welfare_coefficient',
                			component: resolve => require(['../components/pages/argument_Mgmt/welfare_coefficient.vue'], resolve)
                		},
                		{
                			name:'welfare_info',
                			path:'/welfare_info',
                			component: resolve => require(['../components/pages/argument_Mgmt/welfare_info.vue'], resolve)
                		},
                		{
                			name:'add_welfare',
                			path:'/add_welfare',
                			component: resolve => require(['../components/pages/argument_Mgmt/add_welfare.vue'], resolve)
                		},
                		{
                			name:'tax_rate',
                			path:'/tax_rate',
                			component:resolve => require(['../components/pages/argument_Mgmt/tax_rate.vue'],resolve)
                		},
                		{
                			name:'rate_info',
                			path:'/rate_info',
                			component:resolve => require(['../components/pages/argument_Mgmt/rate_info.vue'],resolve)
                		},
                		{
                			name:'add_rateGroup',
                			path:'/add_rateGroup',
                			component:resolve => require(['../components/pages/argument_Mgmt/add_rateGroup.vue'],resolve)
                		},
                		{
                			name:'edit_rate',
                			path:'/edit_rate',
                			component:resolve => require(['../components/pages/argument_Mgmt/edit_rate.vue'],resolve)
                		},
                		{
                			name:'add_rate',
                			path:'/add_rate',
                			component:resolve => require(['../components/pages/argument_Mgmt/add_rate.vue'],resolve)
                		},
                		{
                			name:'rank',
                			path:'/rank',
                			component:resolve => require(['../components/pages/argument_Mgmt/rank.vue'],resolve)
                		},
                		{
                			name:'edit_rank',
                			path:'/edit_rank',
                			component:resolve => require(['../components/pages/argument_Mgmt/edit_rank.vue'],resolve)
                		},
                		{
                			name:'add_rank',
                			path:'/add_rank',
                			component:resolve => require(['../components/pages/argument_Mgmt/add_rank.vue'],resolve)
                		},
                        {
                            path:'/ticket_info',
                            component:resolve => require(['../components/pages/argument_Mgmt/ticket_info.vue'],resolve)
                        },
                        {
                            path:'/holiday_info',
                            component:resolve => require(['../components/pages/argument_Mgmt/holiday_info.vue'],resolve)
                        },
                        {
                            path:'/add_agency',
                            component:resolve => require(['../components/pages/argument_Mgmt/add_agency.vue'],resolve)
                        },
                        {
                            path:'/add_ticket',
                            component:resolve => require(['../components/pages/argument_Mgmt/add_ticket.vue'],resolve)
                        },
                        {
                            path:'/add_holiday',
                            component:resolve => require(['../components/pages/argument_Mgmt/add_holiday.vue'],resolve)
                        }
                    ]
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
                },
                {
                    path: '/personnel_contract',
                    component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/personnel_contract.vue'], resolve),
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/query_contract.vue'], resolve)
                        },
                        {
                            name: 'add_contract',
                            path: '/add_contract',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/add_contract.vue'], resolve)
                        },
                        {
                            name: 'edit_contract',
                            path: '/edit_contract',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/edit_contract.vue'], resolve)
                        },
                        {
                            name: 'detail_contract',
                            path: '/detail_contract',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/detail_contract.vue'], resolve)
                        },
                        {
                            name: 'add_pactChange',
                            path: '/add_pactChange',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/add_pactChange.vue'], resolve)
                        },
                        {
                            name: 'detail_pactChange',
                            path: '/detail_pactChange',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/detail_pactChange.vue'], resolve)
                        },
                        {
                            name: 'edit_pactChange',
                            path: '/edit_pactChange',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/edit_pactChange.vue'], resolve)
                        },
                        {
                            name: 'add_pactRenew',
                            path: '/add_pactRenew',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/add_pactRenew.vue'], resolve)
                        },
                        {
                            name: 'detail_pactRenew',
                            path: '/detail_pactRenew',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/detail_pactRenew.vue'], resolve)
                        },
                        {
                            name: 'edit_pactRenew',
                            path: '/edit_pactRenew',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/edit_pactRenew.vue'], resolve)
                        }
                    ]
                }
            ]
        }
    ]
})
