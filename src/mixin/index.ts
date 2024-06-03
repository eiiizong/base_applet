import { useUpdateNavigationBarTitle } from '@/hooks'
import { getEnvData } from '@/utils/get'
import { useStoreCurrentRouteInfo } from '@/stores/modules'

/**
 * 更新页面标题
 * 更新当前路由信息
 */
export default {
  onShow() {
    const platform = getEnvData('VITE_PLATFORM')

    const storeCurrentRouteInfo = useStoreCurrentRouteInfo()
    storeCurrentRouteInfo.updateCurrentRouteInfo()

    if (platform !== '03') {
      useUpdateNavigationBarTitle()
    }
  }
}
