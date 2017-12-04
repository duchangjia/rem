// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './config/axios_config';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import echarts from 'echarts';
import filters from './filters/filters.js'
//Vue.config.productionTip = false
// axios.defaults.headers['deviceId'] = '12345';
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
// 实例化Vue的filter
// console.log(Object.keys(filters),'过滤器名字');
var filterKey = Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
new Vue({
    router,
    render: h => h(App),
    filters:{
        filterKey
    },
}).$mount('#app');
