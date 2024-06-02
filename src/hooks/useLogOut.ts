import { requestLogout } from '@/server/api'
import { useStoreUserInfo } from '@/stores/modules'

/**
 * 退出登录
 */
const useLogOut = () => {
  const storeUserInfo = useStoreUserInfo()

  requestLogout().then(() => {
    storeUserInfo.$reset()
  })
}

export default useLogOut
