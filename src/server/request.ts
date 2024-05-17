// import type { Api } from './types'

/**
 * 登录类型 01 小程序 02 app 03 一体机
 */
type LoginType = '01' | '02' | '03'

import { showModal, showLoading, hideLoading, request as uniRequest } from '@/utils/uni'
import { useStoreUserInfo, useStoreSystemInfo } from '@/stores/modules'
// import { AES_Encrypt, AES_Decrypt } from './aes' // 加密

const { VITE_API_REQUEST_URL } = process.env
// const isOpenDataEncryption = VITE_OPEN_DATA_ENCRYPTION === 'true'

/**
 * 自定义发起 HTTPS 网络请求 未定义token过期业务逻辑
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {object} data 请求的参数
 * @param {boolean} isShowLoading [true] 请求数据时显示加载中
 * @param {boolean} showErrorToast [true] 是否显示错误提示
 * @param {"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined} method [POST] HTTP 请求方法。
 * @returns { Promise }
 * @example
  request('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const request = (
  url: string,
  data: any = {},
  isShowLoading = true,
  showErrorToast = true,
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | undefined = 'POST',
  timeout = 60000
): Promise<any> => {
  const { userInfo } = useStoreUserInfo()
  const { systemInfo } = useStoreSystemInfo()
  const loginType: LoginType = '01'

  console.log(systemInfo?.deviceType)

  let header = {
    'content-type': 'application/json;charset=UTF-8',
    authorization: ''
  }

  // 根据加密情况使用content-type
  // if (isOpenDataEncryption) {
  //   header = {
  //     'content-type': 'application/x-www-form-urlencoded'
  //   }
  // }

  // 存在token
  if (userInfo.token) {
    header = {
      ...header,
      authorization: 'Bearer ' + userInfo.token
    }
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      showModal('调用request接口参数 url 必须传入，请检查！')
      reject(false)
    }
    url = VITE_API_REQUEST_URL + url

    // 是否显示数据加载中
    if (isShowLoading) {
      showLoading()
    }
    data = {
      ...data,
      // 登陆类型(01 小程序 02 app 03 一体机)
      loginType
    }

    uniRequest(url, data, header, method, timeout)
      .then((res) => {
        console.log(res, 987, showErrorToast)
      })
      .catch((err) => {
        reject(err)
      })
      .finally(() => {
        if (isShowLoading) {
          hideLoading()
        }
      })
  })
}

export default request
