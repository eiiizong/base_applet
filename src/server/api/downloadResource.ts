import downloadFile from '@/server/downloadFile'

/**
 * 下载政策文件
 * @param {string} resource 政策主键
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestDownloadResource = (resource: string): Promise<UniApp.DownloadSuccessData> => {
  return new Promise((resolve, reject) => {
    downloadFile('/common/download/resource?resource=' + resource)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default requestDownloadResource
