import { downloadFile as uniDownloadFile } from '@/utils/uni'
import { getEnvData } from '@/utils/get'
import { useStoreUserInfo } from '@/stores/modules'

const baseUrl = getEnvData('VITE_API_REQUEST_URL')

/**
 * 自定义封装发起 HTTPS 网络请求
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {number} timeout [timeout=6000] 请求超时时间，单位毫秒。
 * @returns { Promise }
 * @example
  downloadFile('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const downloadFile = (url: string, timeout = 1000 * 60): Promise<UniApp.DownloadSuccessData> => {
  /**
   * 请求地址
   */
  let requestUrl = ''
  /**
   * 请求头
   */
  let requestHeader = {
    'content-type': 'application/x-www-form-urlencoded',
    authorization: ''
  }
  const storeUserInfo = useStoreUserInfo()
  const token = storeUserInfo.getStoreUserInfoToken

  // 存在token
  if (token) {
    requestHeader = {
      ...requestHeader,
      authorization: 'Bearer ' + token
    }
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      reject(new Error('调用 downloadFile 接口参数 url 必须传入，请检查！'))
    }
    requestUrl = baseUrl + url

    uniDownloadFile(requestUrl, requestHeader, timeout).then((res) => {
      resolve(res)
    })
  })
}

export default downloadFile
