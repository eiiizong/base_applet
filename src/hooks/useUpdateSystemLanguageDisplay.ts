import type { Store } from '@/stores/types'
import type { PageNmae } from '@/types'

import messages from '@/locale'
import { setTabBarItem, setNavigationBarTitle } from '@/utils/uni'

/**
 * 更新系统所有语言
 * @param {Store.UserSettings['language']} lang
 */
const useUpdateSystemLanguageDisplay = (lang: Store.UserSettings['language']) => {
  // 更新tabbar
  const data = messages[lang]

  if (!data || !data.tabbar) {
    return
  }

  const { home, my } = data.tabbar
  setTabBarItem(0, home.text, home.iconPath, home.selectedIconPath, home.pagePath)
  setTabBarItem(1, my.text, my.iconPath, my.selectedIconPath, my.pagePath)

  // #ifndef H5
  // h5 平台不执行以下代码
  // 更新标题
  const pages = getCurrentPages()
  if (pages && pages.length) {
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

export default useUpdateSystemLanguageDisplay
