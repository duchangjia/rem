import Promise from 'es6-promise';
import axios from 'axios';
// import store from '../store/index'
// import { LOGIN, LOGOUT } from '../store/types'
// import router from '../router/index'

//Promise.polyfill();

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.headers['deviceId'] = '12345';
//axios.defaults.baseURL = 'http://localhost:3000';

// http request 拦截器
axios.interceptors.request.use(
    // function (config) {
    // // Do something before request is sent
    //
    //     return config;
    // },
    // function (error) {
    // // Do something with request error
    //     return Promise.reject(error);
    // }
    config => {
        // if (store.state.token) {
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    }

)

// http response 拦截器
axios.interceptors.response.use(
    // function (response) {
    // // Do something with response data
    //
    //     return response;
    //   },
    // function (error) {
    // // Do something with response error
    //     return Promise.reject(error);
    // }
    response => {
        return response;
    },
    error => {
        // if (error.response) {
        //     switch (error.response.status) {
        //         case 401:
        //             // 401 清除token信息并跳转到登录页面
        //             store.commit(LOGOUT);
        //             router.replace({
        //                 path: 'login',
        //                 query: {redirect: router.currentRoute.fullPath}
        //             })
        //     }
        // }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    }
);

export default axios;
