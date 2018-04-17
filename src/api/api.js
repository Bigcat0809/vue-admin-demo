// 定义 axios 的 api
import axios from 'axios';

let base = '';
// axios.defaults.baseURL = 'http://127.0.0.1:80';
export const requestLogin = params => { return axios.post(`${base}/Login`, params).then(res => res.data); };
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
export const getUserPageList = params => { return axios.get(`${base}/user/pageList`, { params: params }); };
export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };
export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };
export const batchUsers = params => { return axios.get(`${base}/user/batchRemove`, { params: params }) }
    // 没做后台服务。 那这时可以使用mock.js进行拦截， 然后模拟后台服务返回的数据