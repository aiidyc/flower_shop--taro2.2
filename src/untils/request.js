import Taro from '@tarojs/taro'
import { appInfo } from "../api/configUrl";

// 拦截器
Taro.addInterceptor(function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url, header } = requestParams
  // 请求前添加header
  console.log(`请求前url${url}`,data, header)

  return chain.proceed(requestParams)
})

// 封装接口函数
function request({ url, method, data = {}, header = {} }) {
  // 入参
  const token = Taro.getStorageSync('token')
  const tokenObj = header.token === 'no' ? {} : { 'token': token || '' }
  const allHeader =  {
    'content-Type': 'application/json',
    'authOption': appInfo.authOption,
    'appId': appInfo.appid,
    'imei': appInfo.imei,
    "org": appInfo.org,
    ...tokenObj,
    ...header
  }
  // 请求
  return new Promise(function (resolve, reject) {
    Taro.request({
      url: url,
      header: allHeader,
      data: data,
      method: method,
      dataType: 'json',
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
        reject(error)
        console.log(error)
      }
    })
  })
}
export default {
  "get": function ({ url, data, header}) {
    return request({ url, method: "GET", data, header });
  },
  "post": function ({ url, data, header }) {
    return request({ url, method: "POST", data, header });
  },
  "put": function ({ url, data, header }) {
    return request({ url, method: "PUT", data, header });
  },
  "delete": function ({ url, data, header }) {
    return request({ url, method: "DELETE", data, header });
  }
}
