import { useUpdateNavigationBarTitle } from '@/hooks/useUpdateNavigationBarTitle'

/**
 * 更新页面标题
 */
export default {
  onShow() {
    useUpdateNavigationBarTitle()
  }
}
