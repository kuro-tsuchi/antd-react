/*
 * @Author: wqjiao
 * @Date: 2019-03-15 11:27:55
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-03-15 17:09:36
 * @Description: $axios axios 请求方法封装
 */
import axios from 'axios';
import {notification} from 'antd';
import {API_BASE_URL} from '@/constants/constants';

/**
 * @method 接口请求数据时执行的方法
 * @param {String} method  创建请求时的方法
 * @param {String} url  用户传入的请求路径
 * @param {String} params  即将与请求一起发送的 URL 参数
 * @param {String} data  作为请求主体被发送的数据，只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
 * @param {Object} config 用户传入的接口配置参数
 */
export default function $axios(config) {
    let {method = 'GET', url = '', params = {}, data = {}} = config;

    // 返回的 Promise 对象含有 then、catch 方法
    return new Promise(function(resolve, reject) {
        axios({
            baseURL: 'https://www.easy-mock.com/mock/5bdace5449b3f05c44e33cf8/mockurl', // 请求接口 url 前缀
            // baseURL: API_BASE_URL, // 请求接口 url 前缀
            method: method,
            url: url,
            params: params,
            data: data,
            timeout: 5000, // 指定请求超时的毫秒数(0 表示无超时时间)
            headers: {
                'Content-Type': 'application/json',
                token: window.sessionStorage.getItem('token') || ''
            }, // 即将被发送的自定义请求头
            ...config
        })
            .then(function(response) {
                if (response) {
                    console.log('response', response);
                    if (response.data && response.data.success) {
                        // if (response.data && response.data.code) {
                        resolve(response.data);
                    } else {
                        notification.error({
                            message: '操作失败',
                            description: '返回的数据格式有误'
                        });
                        resolve(response);
                    }
                } else {
                    // 处理特殊的情况就是 response 返回什么也没有
                    notification.error({
                        message: '操作失败',
                        description: '服务器错误'
                    });
                    resolve(response);
                }
            })
            .catch(function(error) {
                notification.error({
                    message: '操作失败',
                    description: '网络异常,请稍后重试'
                });
                reject(error);
            });
        // 添加请求拦截器
        axios.interceptors.request.use(
            function(config) {
                // 在发送请求之前做些什么
                return config;
            },
            function(error) {
                // 对请求错误做些什么
                return Promise.reject(error);
            }
        );

        // 添加响应拦截器
        axios.interceptors.response.use(
            function(response) {
                // 对响应数据做点什么
                return response;
            },
            function(error) {
                // 对响应错误做点什么
                return Promise.reject(error);
            }
        );
    });
}
