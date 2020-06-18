import Taro from '@tarojs/taro'

import Api from '../untils/request'
import { appInfo, appUrl } from "./configUrl";

// 获取最新token并自动缓存
export const getToken = ()=>{
  return new Promise((resolve, reject) => {
    // 获取最新的code
    Taro.login({
        success: res => {
          console.log(res.code)
          // 调用查询
          Api.get({
            url: appUrl.orderPath + "account/TaroxcxVerify/",
            data: {
              'imei': appInfo.imei,
              "appId": appInfo.appid,
              "TaroAppid": appInfo.appidXcx,
              "TaroCode": res.code
            },
            header: {
              //-查询时不加本地可能缓存的token
              token: 'no'
            }
          }).then(res => {
            // 已注册 自动缓存token
            if (res.data.code === "C1") {
              console.log("已注册,toekn已缓存")
            }
            // 未注册 提醒用户注册获取token
            else if (res.data.code === "C010") {
              console.log("未注册提醒用户", res)
            }
            resolve(res)
          })
        }
      }
    )
  })
}
