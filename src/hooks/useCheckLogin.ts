import { requestAppletCheckLogin } from '@/server/api'
import { useStoreUserInfo } from '@/stores/modules'

/**
 * 检测用户是否登录，已登录用户返回登录信息
 */
const useCheckLogin = () => {
  const storeUserInfo = useStoreUserInfo()

  requestAppletCheckLogin().then((res) => {
    storeUserInfo.updateStoreUserInfo(res)
  })
}

export default useCheckLogin
