import Promise from 'es6-promise';
import axios from 'axios';

//Promise.polyfill();

// axios 配置
axios.defaults.timeout = 60000;
//axios.defaults.baseURL = 'http://localhost:3000';

// http request 拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent 

    return config;
  }, function (error) {
    // Do something with request error 
    return Promise.reject(error);
  });

// http response 拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data 

    return response;
  }, function (error) {
    // Do something with response error 
    return Promise.reject(error);
  });

export default axios;
