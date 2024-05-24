import downloadFile from '@/server/downloadFile'

/**
 * 下载政策文件
 * @param {string} resource 政策主键
 * @param {string} fileName 政策名称
 */
const requestDownloadResource = (resource: string, fileName: string): Promise<UniApp.DownloadSuccessData> => {
  return new Promise((resolve, reject) => {
    downloadFile(`/common/download/resource?resource=${resource}&fileName=${fileName}`)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default requestDownloadResource
