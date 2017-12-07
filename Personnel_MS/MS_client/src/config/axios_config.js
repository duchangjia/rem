import Promise from 'es6-promise';
import axios from 'axios';
import utils from 'axios/lib/utils'
import normalizeHeaderName from 'axios/lib/helpers/normalizeHeaderName'
import Qs from 'qs'
import router from '../router/index.js'
import { Loading } from 'element-ui'
// import store from '../store/index'
// import { LOGIN, LOGOUT } from '../store/types'
// import router from '../router/index'

Promise.polyfill();
let loadingInstance
let count = 0

const DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
/* 看方法名就知道，这个是设置ContentType用的（Content-Type没有设置的时候） */
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
/* 这个是用来区别对待浏览器和nodejs请求发起工具的区别的 */
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = require('../../node_modules/axios/lib/adapters/xhr');
    } else if (typeof process !== 'undefined') {
        // For node use HTTP adapter
        adapter = require('../../node_modules/axios/lib/adapters/http');
    }
    return adapter;
}

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.headers['deviceId'] = '12345';
axios.defaults.transformRequest = [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
    ) {
        return data;
    }
    if (utils.isArrayBufferView(data)) {
        return data.buffer;
    }
    /* 关键点1、如果用URLSearchParams对象传递参数，就可以用我们想要的Content-Type传递 */
    if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
    }
    /* 关键点2、这里我们看到，如果参数Object的话，就是通过json传递 */
    if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        data = Qs.stringify(data, { allowDots: true });
        // data = Qs.stringify(data);
        return data;
    //     let keys2 = Object.keys(data);
    //     console.log(111,(keys2.map(name => `${name}=${data[name]}`).join('&')))
    //     return (keys2.map(name => `${name}=${data[name]}`).join('&'));
    }
    return data;
}],




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
            loadingInstance = Loading.service({
                lock: true,
                text: '加载中',
                customClass: 'loading-bg'
            })
        count++
        let token = localStorage.getItem('access_token');
       if (token) {
//             config.headers.Authorization = `token ${store.state.token}`;
            config.headers.Authorization = `Bearer ${token}`;
       }
        return config;
    },
    err => {
        return Promise.reject(err);
    }

)

// http response 拦截器
axios.interceptors.response.use(
     response => {
         if(--count <= 0) {
             loadingInstance.close()
         }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('access_token');
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        if(--count <= 0) {
            loadingInstance.close()
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
});

export default axios;
