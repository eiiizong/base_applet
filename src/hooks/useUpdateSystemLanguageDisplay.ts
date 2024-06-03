import type { PageNmae } from '@/types'

import messages from '@/locale/messages'
import {
  // setTabBarItem,
  setNavigationBarTitle
} from '@/utils/uni'
import { useStoreUserSettings } from '@/stores/modules'

/**
 * 更新系统默认配置的语言（标题栏 、tabbar）
 */
const useUpdateSystemLanguageDisplay = () => {
  const storeUserSettings = useStoreUserSettings()
  const { language } = toRefs(storeUserSettings)

  // 更新tabbar
  const data = messages[language.value]

  // if (!data || !data.tabbar) {
  //   return
  // }

  // const { home, my } = data.tabbar
  // setTabBarItem(0, home.text, home.iconPath, home.selectedIconPath, home.pagePath)
  // setTabBarItem(1, my.text, my.iconPath, my.selectedIconPath, my.pagePath)

  // #ifndef H5
  // h5 平台不执行以下代码
  // 更新标题
  const pages = getCurrentPages()
  if (pages && pages.length) {
    const { route } = pages[pages.length - 1]
    if (route) {
      const name = route?.split('/')[2]
      if (name) {
        const { title } = data.page[name as PageNmae]
        setNavigationBarTitle(title)
      }
    }
  }
  // #endif
}

export default useUpdateSystemLanguageDisplay
