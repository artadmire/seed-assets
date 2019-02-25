import axios from 'axios'
import Vue from 'vue'
import api from '../api'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL =api.data;
// 添加请求拦截器
axios.interceptors.request.use( (config)=>{
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log(error.response);
    if(error && error.response){
        switch (error.response.status) {
            case 400:
              Message({
                message:'请求错误',
                type:'error'
              })
              break
      
            case 401:
              Message({
                message:'未授权，请登录',
                type:'error'
              })
              break
      
            case 403:
              Message({
                message:'拒绝访问',
                type:'error'
              })
              break
      
            case 404:
              Message({
                message:`请求地址出错: ${err.response.config.url}`,
                type:'error'
              })
              break
      
            case 408:
              Message({
                message:'请求超时',
                type:'error'
              })
              break
      
            case 500:
              Message({
                message:'服务器内部错误',
                type:'error'
              })
              break
      
            case 501:
              Message({
                message:'服务未实现',
                type:'error'
              })
              break
      
            case 502:
              Message({
                message:'服务器重启中,请稍等~',
                type:'error'
              })
              break
      
            case 503:
              Message({
                message:'服务不可用',
                type:'error'
              })
              break
      
            case 504:
              Message({
                message:'网关超时',
                type:'error'
              })
              break
      
            case 505:
              Message({
                message:'HTTP版本不受支持',
                type:'error'
              })
              break
      
            default:
          }
    }
    return Promise.reject(error);
});


export function get(options){
    return new Promise((resolve,reject) => {
        axios.get(options.url,{
            params:options.params
        })
          .then(response => {
            resolve(response.data.value);
          })
          .catch(err => {
            reject(err)
          })
      })
}

export function post(options){
    return new Promise((resolve,reject) => {
        axios.post(options.url,options.data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
      })
}


