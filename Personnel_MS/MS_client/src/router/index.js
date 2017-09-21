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
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/pages/home_page.vue'], resolve)
        },
        {
          path: '/management_framework',
          component: resolve => require(['../components/pages/framework.vue'], resolve)
        },
        {
          path: '/management_user',
          component: resolve => require(['../components/pages/manage_user.vue'], resolve)
        },
        {
          path: '/management_role',
          component: resolve => require(['../components/pages/manage_role.vue'], resolve)
        },
        {
            path: '/argument_1',
                component: resolve => require(['../components/pages/argument_1.vue'], resolve)
        },
        {
            path: '/management_fun',
                component: resolve => require(['../components/pages/manage_fun.vue'], resolve)
        },
        {
            path: '/argument_2',
                component: resolve => require(['../components/pages/argument_2.vue'], resolve)
        },
        {
            path: '/client',
                component: resolve => require(['../components/pages/client.vue'], resolve)
        },{
            path: '/project_1',
                component: resolve => require(['../components/pages/project_1.vue'], resolve)
        },
        {
            path: '/project_2',
                component: resolve => require(['../components/pages/project_2.vue'], resolve)
        },
        {
            path: '/business',
                component: resolve => require(['../components/pages/business.vue'], resolve)
        },
        {
            path: '/statement_1',
                component: resolve => require(['../components/pages/statement_1.vue'], resolve)
        },
        {
            path: '/statement_2',
                component: resolve => require(['../components/pages/statement_2.vue'], resolve)
        }
      ]
    }
  ]
})
