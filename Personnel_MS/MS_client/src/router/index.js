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
          path: 'basecharts',
          component: resolve => require(['../components/pages/echartsdemo.vue'], resolve)
        },
        {
          path: 'basetable',
          component: resolve => require(['../components/pages/BaseTable.vue'], resolve)
        },
        {
          path: 'vuetable',
          component: resolve => require(['../components/pages/vuetabledemo.vue'], resolve)
        },
      ]
    }
  ]
})
