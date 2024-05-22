import moment from 'moment'
import { useStoreCurrentDate } from '@/stores/modules'

const timer = ref<NodeJS.Timeout | null>(null)
const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
/**
 * 清除/关闭当前日期定时器
 */
const useCloseTimerCurrentDate = () => {
  if (timer.value) {
    clearInterval(timer.value)
  }
}

/**
 * 开启当前日期定时器
 */
const useOpenTimerCurrentDate = () => {
  useCloseTimerCurrentDate()

  const storeCurrentDate = useStoreCurrentDate()

  timer.value = setInterval(() => {
    // 加1s预计程序执行时间 防止时间延后
    const now = moment().add(0, 'seconds')

    const date = now.format('YYYY年MM月DD日')
    const week = now.day()
    const time = now.format('HH:mm:ss')

    storeCurrentDate.updateStoreCurrentDate({
      date,
      week: weekArr[week],
      time
    })
  }, 1000)
}

export { useCloseTimerCurrentDate, useOpenTimerCurrentDate }
