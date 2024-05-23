import { useUpdateNavigationBarTitle } from '@/hooks'
import { useStoreCurrentRouteInfo } from '@/stores/modules'

/**
 * 更新页面标题
 * 更新当前路由信息
 */
export default {
  onShow() {
    const storeCurrentRouteInfo = useStoreCurrentRouteInfo()
    storeCurrentRouteInfo.updateCurrentRouteInfo()

    useUpdateNavigationBarTitle()
  }
}
