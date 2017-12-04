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
            component: resolve => require(['../components/pages/Login.vue'], resolve)
        },
        {

            path: '/home',
            meta: { requireAuth: true, },
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/pages/home_page.vue'], resolve)
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