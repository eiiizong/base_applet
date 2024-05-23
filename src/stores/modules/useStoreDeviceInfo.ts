import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// import type { ApiResponseResult } from '@/server/types'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store【一体机使用】设备信息
 */
const useStoreDeviceInfo = defineStore('storeDeviceInfo', () => {
  const deviceInfo = ref<any | null>(null)

  const getStoreDeviceInfo = computed(() => deviceInfo.value)

  function updateStoreDeviceInfo(data: any) {
    deviceInfo.value = { ...deviceInfo.value, ...data }
  }

  return { deviceInfo, getStoreDeviceInfo, updateStoreDeviceInfo }
})

export default useStoreDeviceInfo
