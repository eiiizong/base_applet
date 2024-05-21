import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// import type { StoreRoute } from '@/stores/types'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store【一体机使用】路由信息
 */
const useStoreRoute = defineStore('storeRoute', () => {
  const route = ref<any>({})

  const getStoreRoute = computed(() => route.value)

  function updateStoreRoute(data: any) {
    route.value = data
  }

  return { route, getStoreRoute, updateStoreRoute }
})

export { useStoreRoute }
