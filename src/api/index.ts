
// 引入axios
import axios from 'axios';
// axios.defaults.baseURL = 'https://httpbin.org';
// axios.defaults.timeout = 5000;

const BASE_URL = 'http://localhost:9000';
const TIMEOUT = 5000;

// 创建axios实例
const instance = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
});

//添加拦截
instance.interceptors.request.use(config => {
  console.log('请求被拦截')
  return config
},error => {

})
instance.interceptors.response.use(res => { 
  return res.data
},error => {
  return error;
})

/**
 * 封装get方法
 */
function get(config:object):any {
  return new Promise((resolve, reject) => {
    axios
      .get(config.url,config.params).then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export {instance, get};