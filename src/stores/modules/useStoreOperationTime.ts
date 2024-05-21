import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getEnvData } from '@/utils/get'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store【一体机使用】剩余操作时间
 */
const useStoreOperationTime = defineStore('storeOperationTime', () => {
  const operationTime = ref<number>(Number(getEnvData('VITE_OPERATION_TIME')))

  const getStoreOperationTime = computed(() => operationTime.value)

  function updateStoreOperationTime(data: number) {
    operationTime.value = data
  }

  return { operationTime, getStoreOperationTime, updateStoreOperationTime }
})

export { useStoreOperationTime }
