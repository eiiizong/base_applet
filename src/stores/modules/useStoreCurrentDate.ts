import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface CurrentDate {
  /**
   * 年月日
   */
  date: string
  /**
   * 星期
   */
  week: string
  /**
   * 时分秒
   */
  time: string
}
/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store【一体机使用】当前时间
 */
const useStoreCurrentDate = defineStore('storeCurrentDate', () => {
  const currentDate = ref<CurrentDate>({
    date: '',
    week: '',
    time: ''
  })

  const getStoreCurrentDate = computed(() => currentDate.value)

  function updateStoreCurrentDate(data: CurrentDate) {
    currentDate.value = { ...data }
  }

  return { currentDate, getStoreCurrentDate, updateStoreCurrentDate }
})

export { useStoreCurrentDate }
