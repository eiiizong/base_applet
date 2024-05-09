import messages from '@/locale'
import { setNavigationBarTitle } from '@/utils/uni'
import { useStoreUserSettings } from '@/stores/modules/useStoreUserSettings'

type PageNmae = 'home' | 'my'

/**
 * 更新页面标题
 * @param {PageNmae} pageNmae
 * @param {PageNmae} pageNmae
 */
const useUpdateNavigationBarTitle = (pageNmae: PageNmae) => {
  const storeUserSettings = useStoreUserSettings()
  const data = messages[storeUserSettings.getStoreUserSettingsLanguage]
  const { title } = data[pageNmae]

  setNavigationBarTitle(title)
}

export { useUpdateNavigationBarTitle }
