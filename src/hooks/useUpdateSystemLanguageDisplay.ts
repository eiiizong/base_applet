import type { Store } from '@/stores/types'

import messages from '@/locale'
import { setTabBarItem } from '@/utils/uni'

/**
 * 更新系统所有语言
 * @param {Store.UserSettings['language']} lang
 */
const useUpdateSystemLanguageDisplay = (lang: Store.UserSettings['language']) => {
  const data = messages[lang]
  const { home, my } = data.tabbar

  setTabBarItem(0, home.text, home.iconPath, home.selectedIconPath, home.pagePath)
  setTabBarItem(1, my.text, my.iconPath, my.selectedIconPath, my.pagePath)
  console.log(9988, data)
}

export { useUpdateSystemLanguageDisplay }
