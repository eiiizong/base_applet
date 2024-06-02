type FileType = 'doc' | 'xls' | 'ppt' | 'pdf' | 'docx' | 'xlsx' | 'pptx'
import { openDocument, showLoading, hideLoading } from '@/utils/uni'
import { requestDownloadResource } from '@/server/api'

/**
 * 预览 pdf
 * @param {string} fileId 文件id
 * @param {string} fileName 文件名称
 * @param {FileType} [fileType='pdf'] 文件了类型。默认值：pdf。
 */
const usePreviewPDF = (fileId: string, fileName: string = 'file', fileType: FileType = 'pdf') => {
  showLoading()
  requestDownloadResource(fileId, fileName)
    .then((res) => {
      console.log(res, 98)

      const { tempFilePath } = res
      if (tempFilePath) {
        openDocument(tempFilePath, fileType)
      }
    })

    .finally(() => {
      hideLoading()
    })
}

export default usePreviewPDF
