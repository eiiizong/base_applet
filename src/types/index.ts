export type PageNmae = 'home' | 'my'
/**
 * 登录表单类型
 */
export interface LoginPageForm {
  /**
   * 姓名
   */
  name: string
  /**
   * 身份证号
   */
  idcard: string
  /**
   * 手机号
   */
  tel: string
  /**
   * base64 头像
   */
  avatar: string
  /**
   * 是否同意协议
   */
  agree: boolean
}
