type FileType = 'doc' | 'xls' | 'ppt' | 'pdf' | 'docx' | 'xlsx' | 'pptx'
import { openDocument, showLoading, hideLoading, base64ToArrayBuffer, env, getFileSystemManager } from '@/utils/uni'

const fileSystemManager = getFileSystemManager()

/**
 * 创建并打开文件
 * @param {string} filePath 文件将要保存的路径
 * @param {string} fileName 文件名称，已添加后缀的。例如file.pdf
 * @param {ArrayBuffer} arrayBuffer 文件数据
 * @param {FileType} fileType 文件类型
 */
const createAndOpenFile = (filePath: string, fileName: string, arrayBuffer: ArrayBuffer, fileType: FileType) => {
  // 获取历史文件列表
  fileSystemManager.readdir({
    dirPath: filePath,
    success(res) {
      // 删除历史文件
      res.files.forEach((el) => {
        // 删除时要注意文件名一定要和存的时候一样,不然会报没有unlink无文件权限问题
        fileSystemManager.unlink({
          filePath: filePath + el,
          success() {
            //
          },
          fail() {
            //
          }
        })
      })

      // 写入新文件
      fileSystemManager.writeFile({
        filePath: filePath + fileName,
        data: arrayBuffer,
        success() {
          // 写入新文件成功 打开文件
          openDocument(filePath + fileName, fileType).finally(() => {
            hideLoading()
          })
        },
        fail(err) {
          console.error('写入新文件失败', err)
        }
      })
    }
  })
}

/**
 * 创建文件目录
 */

/**
 * 创建文件目录
 * @param {string} base64Str base64 文件数据
 * @param {string} fileName 文件名称，已添加后缀的。例如file.pdf
 * @param {FileType} fileType 文件类型
 */
const createFileDir = (base64Str: string, fileName: string, fileType: FileType) => {
  const arrayBuffer = base64ToArrayBuffer(base64Str)
  // 自定义政策文件存储路径
  const filePath = env().USER_DATA_PATH + '/policyDocument/'
  // 判断文件/目录是否存在
  fileSystemManager.access({
    path: filePath,
    success() {
      createAndOpenFile(filePath, fileName, arrayBuffer, fileType)
    },
    fail() {
      // 文件夹不存在 创建文件夹
      fileSystemManager.mkdir({
        dirPath: filePath,
        success() {
          // 创建文件夹成功 并打开文件
          createAndOpenFile(filePath, fileName, arrayBuffer, fileType)
        },
        fail(err) {
          // 创建文件夹失败
          console.error('创建文件夹失败', err)
          hideLoading()
        }
      })
    }
  })
}

/**
 * 预览 pdf
 * @param {string} fileId 文件id 
 * @param {string} [fileName='file'] 文件名称。默认值：file。
 * @param {FileType} [fileType='pdf'] 文件了类型。默认值：pdf。
 * @returns {Promise}
 *
 * @example
  previewPDFWeixin().then(res => {
	// 接口调用成功
  }).catch(err => {
	// 接口调用失败
  }).finally((res) => {
	// 接口调用完成
  })
 */
const usePreviewPDF = (fileId: string, fileName: string = 'file', fileType: FileType = 'pdf') => {
  showLoading()

  console.log(fileId, fileName, fileType)

  const base64 = ''
  const fileRealName = fileName + '.' + fileType

  createFileDir(base64, fileRealName, fileType)
}

export default usePreviewPDF
