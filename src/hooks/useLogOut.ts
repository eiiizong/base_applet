import { requestLogout } from '@/server/api'
import { useStoreUserInfo } from '@/stores/modules'
import { showToast } from '@/utils/uni'

/**
 * 退出登录
 */
const useLogOut = () => {
  const storeUserInfo = useStoreUserInfo()

  requestLogout().then(() => {
    storeUserInfo.$reset()
    showToast('退出成功', 'success')
  })
}

export default useLogOut
