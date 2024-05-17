import { requestAppletCheckLogin } from '@/server/api'
import { login } from '@/utils/uni'

/**
 * 更新页面标题
 */
const useCheckLogin = () => {
  login().then((res) => {
    requestAppletCheckLogin(res.code)
  })
}

export { useCheckLogin }
