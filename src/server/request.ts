/**
 * 开发者服务器返回的数据
 */
interface Data {
  /**
   * 状态码 401无权限访问 403访问受限，授权过期
   */
  code: 200 | 401 | 403 | 500
  /**
   * 错误信息
   */
  msg: string
  /**
   * 数据
   */
  data: any
  /**
   * token
   */
  token: string
}

import { showLoading, hideLoading, request as uniRequest, showModal, navigateTo } from '@/utils/uni'
import { getEnvData } from '@/utils/get'
import { useStoreUserInfo } from '@/stores/modules'

const baseUrl = getEnvData('VITE_API_REQUEST_URL')

/**
 * 自定义封装发起 HTTPS 网络请求
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {string | AnyObject | ArrayBuffer} [data={}] 请求的参数
 * @param {boolean} isShowLoading [isShowLoading=true] 请求数据时显示加载中
 * @param {boolean} showErrorToast [showErrorToast=true] 是否显示错误提示
 * @param {"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined} method [method='POST'] HTTP 请求方法。
 * @param {boolean} [autoQs=false]  是否自动序列化处理，关闭自动序列化后，HTTP请求头中的Content-Type将会被设置成'application/json; charset=utf-8'，借此可以传递JSON复杂对象或者对象数组，后台在参数中添加注解后自动解析
 * @param {number} timeout [timeout=6000] 请求超时时间，单位毫秒。
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
  data: AnyObject = {},
  isShowLoading = true,
  showErrorToast = true,
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | undefined = 'POST',
  autoQs: boolean = false,
  timeout = 1000 * 2
): Promise<any> => {
  /**
   * 请求地址
   */
  let requestUrl = ''
  /**
   * 请求头
   */
  let requestHeader = {
    'content-type': '',
    authorization: ''
  }

  if (autoQs) {
    requestHeader['content-type'] = 'application/x-www-form-urlencoded'
  } else {
    requestHeader['content-type'] = 'application/json;charset=UTF-8'
  }
  /**
   * 请求体data
   */
  let requestData: AnyObject = data

  const storeUserInfo = useStoreUserInfo()
  const token = storeUserInfo.getStoreUserInfoToken

  // 是否显示数据加载中
  if (isShowLoading) {
    showLoading()
  }

  // 存在token
  if (token) {
    requestHeader = {
      ...requestHeader,
      authorization: 'Bearer ' + token
    }
  }

  requestData = {
    ...data
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      reject(new Error('调用request接口参数 url 必须传入，请检查！'))
    }
    requestUrl = baseUrl + url
    uniRequest(requestUrl, requestData, requestHeader, method, timeout)
      .then((res) => {
        const { statusCode, data } = res
        if (statusCode === 200 && data) {
          const { code, msg, data: data_, token } = data as Data

          // 自定义数据 加入token为同一层级数据
          const _data = { ...data_ }
          if (token) {
            _data.token = token
            storeUserInfo.updateStoreUserInfoToken(token)
          }

          if (code === 200 && data_) {
            resolve(_data)
          } else if (code === 401) {
            showModal('无权限访问，请联系管理员！')
            reject(res)
          } else if (code === 403) {
            showModal('访问受限，授权过期，请重新登录！').then(() => {
              navigateTo('login', 'packageCommon')
            })
            reject(res)
          } else {
            if (showErrorToast && msg) {
              showModal(msg)
            }
            reject(data)
          }
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        if (showErrorToast) {
          showModal(`请求错误，接口：${url}，请检查！`)
        }
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
