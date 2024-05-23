import { showModal } from '@/utils/uni'

const innerAudioContext = ref<UniApp.InnerAudioContext | null>(null)

/**
 * 创建音频实例
 */
const createInnerAudioContext = (src: string) => {
  innerAudioContext.value = uni.createInnerAudioContext()

  innerAudioContext.value.autoplay = false
  innerAudioContext.value.loop = false
  innerAudioContext.value.src = src

  innerAudioContext.value.onPlay(() => {
    // showModal('开始播放')
  })

  innerAudioContext.value.onError((res) => {
    showModal(JSON.stringify(res))
  })
}

/**
 * 播放音频
 */
const usePlayAudio = (src: string, isPaly = true) => {
  if (isPaly) {
    if (innerAudioContext.value) {
      innerAudioContext.value.destroy()
    }

    createInnerAudioContext(src)

    innerAudioContext.value && innerAudioContext.value.play()
  } else {
    innerAudioContext.value && innerAudioContext.value.stop()
  }
}

export default usePlayAudio
