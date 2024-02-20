import { TempFiles } from '@/server/types/api'
/**
 * 拍摄或从手机相册中选择图片或视频
 * @param {number} [count=9] 最多可以选择的文件个数，微信小程序ios真机可以选择的文件个数不能大于9
 * @param {Array} [mediaType] 文件类型，默认值['image', 'video']，mix可同时选择图片和视频
 * @param {number} [_maxDuration] 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间，默认值10
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const chooseMedia = (
  count = 9,
  mediaType: ('video' | 'image')[] = ['video', 'image'],
  _maxDuration = 30
): Promise<TempFiles[]> => {
  return new Promise((resolve) => {
    uni.chooseMedia({
      count,
      mediaType,
      maxDuration: _maxDuration,
      success(res) {
        const { tempFiles } = res
        resolve(tempFiles as TempFiles[])
      }
    })
  })
}

export { chooseMedia }
