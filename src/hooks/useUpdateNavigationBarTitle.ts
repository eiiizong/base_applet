import type { PageNmae } from '@/types'

import messages from '@/locale'
import { setNavigationBarTitle } from '@/utils/uni'
import { useStoreUserSettings } from '@/stores/modules/useStoreUserSettings'

/**
 * 更新页面标题
 */
const useUpdateNavigationBarTitle = () => {
  // #ifndef H5
  // h5 平台不执行以下代码
  const storeUserSettings = useStoreUserSettings()
  const { getStoreUserSettingsLanguage } = storeUserSettings
  const data = messages[getStoreUserSettingsLanguage]

  const pages = getCurrentPages()
  if (pages) {
    const { route } = pages[pages.length - 1]
    if (route) {
      const name = route?.split('/')[2]
      if (name) {
        const { title } = data[name as PageNmae]
        setNavigationBarTitle(title)
      }
    }
  }
  // #endif
}

export { useUpdateNavigationBarTitle }
