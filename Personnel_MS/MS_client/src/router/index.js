import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//export default new Router({
//     mode: 'history',
// hashbang: false,
//     history: true,
const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        meta: {
            requireAuth: false,
        }, // 添加该字段，表示进入这个路由是需要登录的
        component: resolve => require(['../components/pages/Login.vue'], resolve)
    },
    {
        path: '/user_center',
        component: resolve => require(['../components/common/user_center.vue'], resolve),
        children: [{
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
        path: '/aggPage',
        meta: {
            requireAuth: true,
        },
        component: resolve => require(['../components/common/aggregation/common/aggPage.vue'], resolve)
    },
    {
        path: '/aggHome',
        meta: {
            requireAuth: true,
        },
        component: resolve => require(['../components/common/aggregation/common/Home.vue'], resolve),
        children: [{
                path: '/',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/user_Setting/user_info.vue'], resolve)
            },
            {
                path: '/agg_uesr_center',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/user_Setting/user_info.vue'], resolve)
            },
            {
                path: '/agg_modify_password',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/user_Setting/modify_password.vue'], resolve)
            },
            {
                path: '/ask_leave',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/check_work/ask_leave.vue'], resolve)
            },
            {
                path: '/salary_detail',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/pay_salary/salary_detail.vue'], resolve)
            },
            {
                path: '/billing_imformation',
                meta: {
                    requireAuth: true,
                },
                component: resolve => require(['../components/common/aggregation/exp_reimy/billing_imformation.vue'], resolve)
            }
        ]
    },
    {
        path: '/web_standard',
        component: resolve => require(['../components/common/web_standard.vue'], resolve)
    },
    {

        path: '/home',
        meta: {
            requireAuth: true,
        },
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children: [
            {
                path: '/',
                component: resolve => require(['../components/pages/home_page.vue'], resolve)
            },
            {
                path: '/management_framework',
                component: resolve => require(['../components/pages/system_Mgmt/frame.vue'], resolve),
                children: [{
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
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/system_Mgmt/userM_query.vue'], resolve)
                    },
                    {
                        name: 'edit_userM',
                        path: '/edit_userM',
                        component: resolve => require(['../components/pages/system_Mgmt/edit_userM.vue'], resolve)
                    }
                ]
            },
            {
                path: '/management_role',
                component: resolve => require(['../components/pages/system_Mgmt/manage_role.vue'], resolve),
                children: [{
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
                path: '/management_fun',
                component: resolve => require(['../components/pages/system_Mgmt/manage_fun.vue'], resolve),
                children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/system_Mgmt/fun.vue'], resolve)
                },
                    {
                        name: 'edit_fun',
                        path: '/edit_fun',
                        component: resolve => require(['../components/pages/system_Mgmt/edit_fun.vue'], resolve)
                    }
                ]
            },
            {
                path: '/argument_1',
                component: resolve => require(['../components/pages/argument_Mgmt/argument_1.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/argument_Mgmt/query_sysParam.vue'], resolve)
                    },
                    {
                        name: 'add_sysParam',
                        path: '/add_sysParam',
                        component: resolve => require(['../components/pages/argument_Mgmt/add_sysParam.vue'],resolve)
                    },
                    {
                        name: 'edit_sysParam',
                        path: '/edit_sysParam',
                        component: resolve => require(['../components/pages/argument_Mgmt/edit_sysParam.vue'],resolve)
                    }
                ]

            },
            {
                path: '/argument_2',
                component: resolve => require(['../components/pages/argument_Mgmt/argument_2.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/argument_Mgmt/arg_2.vue'], resolve)
                    },
                    {
                        name: 'agency_argument',
                        path: '/agency_argument',
                        component: resolve => require(['../components/pages/argument_Mgmt/agency.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/agency_argument.vue'], resolve)
                            },
                            {
                                path: '/add_agency',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_agency.vue'], resolve)
                            },
                            {
                                path: '/modify_agency',
                                name: 'modify_agency',
                                component: resolve => require(['../components/pages/argument_Mgmt/modify_agency.vue'], resolve)
                            },
                        ]
                    },

                    {
                        name: 'welfare_coefficient',
                        path: '/welfare_coefficient',
                        component: resolve => require(['../components/pages/argument_Mgmt/welfare.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/welfare_coefficient.vue'], resolve)
                            },
                            {
                                name: 'welfare_info',
                                path: '/welfare_info',
                                component: resolve => require(['../components/pages/argument_Mgmt/welfare_info.vue'], resolve)
                            },
                            {
                                name: 'add_welfare',
                                path: '/add_welfare',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_welfare.vue'], resolve)
                            },
                        ]
                    },

                    {
                        name: 'tax_rate',
                        path: '/tax_rate',
                        component: resolve => require(['../components/pages/argument_Mgmt/tax.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/tax_rate.vue'], resolve)
                            },
                            {
                                name: 'rate_info',
                                path: '/rate_info',
                                redirect: '/rate_info',
                                component: resolve => require(['../components/pages/argument_Mgmt/rate.vue'], resolve),
                                children: [{
                                        path: '/',
                                        component: resolve => require(['../components/pages/argument_Mgmt/rate_info.vue'], resolve)
                                    },
                                    {
                                        name: 'edit_rate',
                                        path: '/edit_rate',
                                        component: resolve => require(['../components/pages/argument_Mgmt/edit_rate.vue'], resolve)
                                    },
                                    {
                                        name: 'add_rate',
                                        path: '/add_rate',
                                        component: resolve => require(['../components/pages/argument_Mgmt/add_rate.vue'], resolve)
                                    },
                                ]
                            },
                            {
                                name: 'add_rateGroup',
                                path: '/add_rateGroup',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_rateGroup.vue'], resolve)
                            },
                        ]
                    },

                    {
                        name: 'rank',
                        path: '/rank',
                        component: resolve => require(['../components/pages/argument_Mgmt/rankRouter.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/rank.vue'], resolve)
                            },
                            {
                                name: 'edit_rank',
                                path: '/edit_rank',
                                component: resolve => require(['../components/pages/argument_Mgmt/edit_rank.vue'], resolve)
                            },
                            {
                                name: 'add_rank',
                                path: '/add_rank',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_rank.vue'], resolve)
                            },
                        ]
                    },

                    {
                        path: '/ticket_info',
                        component: resolve => require(['../components/pages/argument_Mgmt/ticket.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/ticket_info.vue'], resolve)
                            },
                            {
                                path: '/add_ticket',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_ticket.vue'], resolve)
                            },
                            {
                                path: '/edit_ticket',
                                name: 'edit_ticket',
                                component: resolve => require(['../components/pages/argument_Mgmt/edit_ticket.vue'], resolve)
                            },
                        ]
                    },
                    {
                        path: '/holiday_info',
                        component: resolve => require(['../components/pages/argument_Mgmt/holiday.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/argument_Mgmt/holiday_info.vue'], resolve),
                            },
                            {
                                path: '/add_holiday',
                                component: resolve => require(['../components/pages/argument_Mgmt/add_holiday.vue'], resolve),
                            },
                        ]
                    },
                ]
            },
            {
                path: '/personnel_contract',
                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/personnel_contract.vue'], resolve),
                children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/query_contract.vue'], resolve)
                },
                    {
                        name: 'query_contract',
                        path: '/query_contract',
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
                        redirect: '/detail_contract',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/contract_detailInfo.vue'], resolve),
                        children: [{
                            path: '/',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/detail_contract.vue'], resolve)
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
                    },

                    {
                        name: 'add_pactChange',
                        path: '/add_pactChange',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/add_pactChange.vue'], resolve)
                    },

                    {
                        name: 'add_pactRenew',
                        path: '/add_pactRenew',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_contract/add_pactRenew.vue'], resolve)
                    }

                ]
            },
            {
                path: '/personnel_transfer',
                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/personnel_transfer.vue'], resolve),
                children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/query_personnel.vue'], resolve)
                },
                    {
                        name: 'detail_transfer',
                        path: '/detail_transfer',
                        redirect: '/detail_transfer',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/transferRouter.vue'], resolve),
                        children: [{
                            path: '/',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/detail_transfer.vue'], resolve)
                        },
                            {
                                name: 'transfer_info',
                                path: '/transfer_info',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/transfer_info.vue'], resolve)
                            },
                            {
                                name: 'edit_transfer',
                                path: '/edit_transfer',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/edit_transfer.vue'], resolve)
                            },
                            {
                                name: 'add_transfer',
                                path: '/add_transfer',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/add_transfer.vue'], resolve)
                            }
                        ]
                    },

                    {
                        name: 'detail_dimission',
                        path: '/detail_dimission',
                        redirect: '/detail_dimission',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/dimissionRouter.vue'], resolve),
                        children: [{
                            path: '/',
                            component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/detail_dimission.vue'], resolve)
                        },
                            {
                                name: 'dimission_info',
                                path: '/dimission_info',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/dimission_info.vue'], resolve)
                            },
                            {
                                name: 'edit_dimission',
                                path: '/edit_dimission',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/edit_dimission.vue'], resolve)
                            },
                            {
                                name: 'add_dimission',
                                path: '/add_dimission',
                                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_transfer/add_dimission.vue'], resolve)
                            }
                        ]
                    }

                ]
            },
            {
                path: '/personnel_archives',
                component: resolve => require(['../components/pages/personnel_Mgmt/personnel_archives/personnel_archives.vue'], resolve),
                children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/personnel_Mgmt/personnel_archives/query_archives.vue'], resolve)
                },
                    {
                        path: '/add_archives',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_archives/add_archives.vue'], resolve)
                    },
                    {
                        path: '/archives_detail',
                        name: 'archives_detail',
                        component: resolve => require(['../components/pages/personnel_Mgmt/personnel_archives/archives_detail.vue'], resolve)
                    },

                ]
            },
            {
                path: '/attendance_record',
                component: resolve => require(['../components/pages/attendance_Mgmt/attendanceRecord/attendance_record.vue'], resolve),
                children: [{
                    path: '/',
                    component: resolve => require(['../components/pages/attendance_Mgmt/attendanceRecord/attendance_query.vue'], resolve),
                }]
            },
            {
                path: '/travel_management',
                component: resolve => require(['../components/pages/attendance_Mgmt/travel_management/travel_management.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/attendance_Mgmt/travel_management/travel_query.vue'], resolve),
                    },
                    {
                        name: 'travel_info',
                        path: '/travel_info',
                        component: resolve => require(['../components/pages/attendance_Mgmt/travel_management/travel_info.vue'], resolve),
                    },
                    {
                        name: 'edit_travel',
                        path: '/edit_travel',
                        component: resolve => require(['../components/pages/attendance_Mgmt/travel_management/edit_travel.vue'], resolve),
                    },
                    {
                        name: 'add_travel',
                        path: '/add_travel',
                        component: resolve => require(['../components/pages/attendance_Mgmt/travel_management/add_travel.vue'], resolve),
                    }
                ]
            },
            {
                path: '/leave_management',
                component: resolve => require(['../components/pages/attendance_Mgmt/leave_management/leave_management.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/attendance_Mgmt/leave_management/leave_query.vue'], resolve),
                    },
                    {
                        name: 'leave_info',
                        path: '/leave_info',
                        component: resolve => require(['../components/pages/attendance_Mgmt/leave_management/leave_info.vue'], resolve),
                    },
                    {
                        name: 'edit_leave',
                        path: '/edit_leave',
                        component: resolve => require(['../components/pages/attendance_Mgmt/leave_management/edit_leave.vue'], resolve),
                    },
                    {
                        name: 'add_leave',
                        path: '/add_leave',
                        component: resolve => require(['../components/pages/attendance_Mgmt/leave_management/add_leave.vue'], resolve),
                    }
                ]
            },
            {
                path: '/overtime_management',
                component: resolve => require(['../components/pages/attendance_Mgmt/overtime_management/overtime_management.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/attendance_Mgmt/overtime_management/overtime_query.vue'], resolve),
                    },
                    {
                        name: 'overtime_info',
                        path: '/overtime_info',
                        component: resolve => require(['../components/pages/attendance_Mgmt/overtime_management/overtime_info.vue'], resolve),
                    },
                    {
                        name: 'edit_overtime',
                        path: '/edit_overtime',
                        component: resolve => require(['../components/pages/attendance_Mgmt/overtime_management/edit_overtime.vue'], resolve),
                    },
                    {
                        name: 'add_overtime',
                        path: '/add_overtime',
                        component: resolve => require(['../components/pages/attendance_Mgmt/overtime_management/add_overtime.vue'], resolve),
                    }
                ]
            },

            {
                path: '/payBaseInfo_setting',
                component: resolve => require(['../components/pages/payWelfare_Mgmt/payBaseInfo/payBaseInfo_setting.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payBaseInfo/query_payBaseInfo.vue'], resolve)
                    },
                    {
                        name: 'add_payBaseInfo',
                        path: '/add_payBaseInfo',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payBaseInfo/add_payBaseInfo.vue'], resolve)
                    },
                    {
                        name: 'edit_payBaseInfo',
                        path: '/edit_payBaseInfo',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payBaseInfo/edit_payBaseInfo.vue'], resolve)
                    },
                    {
                        name: 'detail_payBaseInfo',
                        path: '/detail_payBaseInfo',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payBaseInfo/detail_payBaseInfo.vue'], resolve)
                    }
                ]
            },
            {
                path: '/payChange_manage',
                component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/payChange_manage.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/query_custInfo.vue'], resolve)
                    },
                    {
                        name: 'query_custInfo',
                        path: '/query_custInfo',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/query_custInfo.vue'], resolve)
                    },
                    {
                        name: 'query_payChangeInfo',
                        path: '/query_payChangeInfo',
                        redirect: '/query_payChangeInfo',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/payChangeInfo.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/query_payChangeInfo.vue'], resolve)
                            },
                            {
                                name: 'detail_payChangeInfo',
                                path: '/detail_payChangeInfo',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/detail_payChangeInfo.vue'], resolve)
                            },
                            {
                                name: 'add_payChangeInfo',
                                path: '/add_payChangeInfo',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/add_payChangeInfo.vue'], resolve)
                            },
                            {
                                name: 'edit_payChangeInfo',
                                path: '/edit_payChangeInfo',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/payChangeMgmt/edit_payChangeInfo.vue'], resolve)
                            }
                        ]
                    },

                ]
            },

            {
                path: '/wageProcess_manage',
                component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/wageProcess.vue'], resolve),
                children: [{
                        name: 'wage_query',
                        path: '/',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/wage_query.vue'], resolve)
                    },
                    {
                        name: 'add_wage',
                        path: '/add_wage',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/add_wage.vue'], resolve)
                    },
                    {
                        name: 'wage_info',
                        path: '/wage_info',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/wage_info.vue'], resolve)
                    },
                    {
                        name: 'edit_wage',
                        path: '/edit_wage',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/edit_wage.vue'], resolve)
                    },
                    {
                        name: 'entry_wage',
                        path: '/entry_wage',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/entryWageRouter.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/entry_wage.vue'], resolve)
                            },
                            {
                                name: 'edit_security',
                                path: '/edit_security',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/edit_security.vue'], resolve)
                            },
                        ]
                    },
                    {
                        name: 'socialSecurity_query',
                        path: '/socialSecurity_query',
                        component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/socialRouter.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/socialSecurity_query.vue'], resolve)
                            },
                            {
                                name: 'import_socialSecurity',
                                path: '/import_socialSecurity',
                                component: resolve => require(['../components/pages/payWelfare_Mgmt/wageProcessMgmt/import_socialSecurity.vue'], resolve)
                            }
                        ]
                    }

                ]

            },
            {
                path: '/assetReq_manage',
                component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/assetReq_manage.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/query_asset.vue'], resolve)
                    },
                    {
                        name: 'query_asset',
                        path: '/query_asset',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/assetInfo.vue'], resolve),
                        children: [{
                                path: '/',
                                component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/query_asset.vue'], resolve),
                            },
                            {
                                name: 'detail_asset',
                                path: '/detail_asset',
                                component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/detail_asset.vue'], resolve)
                            },
                            {
                                name: 'add_asset',
                                path: '/add_asset',
                                component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/add_asset.vue'], resolve)
                            },
                            {
                                name: 'edit_asset',
                                path: '/edit_asset',
                                component: resolve => require(['../components/pages/asset_Mgmt/assetRegMgmt/edit_asset.vue'], resolve)
                            }
                        ]
                    }
                ]
            },
            {
                path: '/assetUse_manage',
                component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/assetUse_manage.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/query_assetUse.vue'], resolve)
                    },
                    {
                        name: 'query_assetUse',
                        path: '/query_assetUse',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/query_assetUse.vue'], resolve)
                    },
                    {
                        name: 'detail_assetUse',
                        path: '/detail_assetUse',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/detail_assetUse.vue'], resolve)
                    },
                    {
                        name: 'add_assetUse',
                        path: '/add_assetUse',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/add_assetUse.vue'], resolve)
                    },
                    {
                        name: 'edit_assetUse',
                        path: '/edit_assetUse',
                        component: resolve => require(['../components/pages/asset_Mgmt/assetUseMgmt/edit_assetUse.vue'], resolve)
                    }
                ]
            },
            {
                path: '/payFlows_manage',
                component: resolve => require(['../components/pages/historicalSalary_Mgmt/historicalSalary_Mgmt.vue'], resolve),
                children: [{
                        path: '/',
                        component: resolve => require(['../components/pages/historicalSalary_Mgmt/historicalSalary_query.vue'], resolve)
                    },
                    //{
                    //    name: 'historicalSalary_query',
                    //    path: '/historicalSalary_query',
                    //    component: resolve => require(['../components/pages/historicalSalary_Mgmt/historicalSalary_query.vue'], resolve)
                    //},
                ]
            },
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
        if (localStorage.getItem('access_token')&&localStorage.getItem('ms_username')) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

export default router;