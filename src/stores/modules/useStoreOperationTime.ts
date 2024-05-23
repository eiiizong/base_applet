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
const useStoreOperationTime = defineStore('storeOperationTime', {
  state: () => {
    return {
      operationTime: Number(getEnvData('VITE_OPERATION_TIME'))
    }
  },
  getters: {
    /**
     * 获取操作时间
     */
    getOperationTime: (state) => state.operationTime
  },
  actions: {
    /**
     * 更新操作时间
     */
    updateOperationTime(str: number) {
      this.operationTime = str
    }
  }
})

export default useStoreOperationTime
