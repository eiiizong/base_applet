/**
 * 登陆类型
 * 01 微信
 * 02 一体机
 * 03 安卓
 * 04 ios
 * 05 鸿蒙
 */
export type LoginType = '01' | '02' | '03' | '04' | '05'

/**
 * 登录接口成功响应返回的数据格式
 */
export interface LoginApiSuccessResponse {
  appId?: unknown
  /**
   * base64 头像
   */
  avatar?: string
  createBy?: unknown
  /**
   * 创建时间
   */
  createTime?: string
  deviceId?: unknown
  gender?: unknown
  /**
   * 用户id
   */
  id?: string
  /**
   * 用户身份证号
   */
  idCard?: string
  /**
   * 用户姓名
   */
  name?: string
  nickname?: unknown
  openid?: string
  phonenumber?: unknown
  region?: unknown
  remark?: unknown
  sessionKey?: string
  subscribe?: unknown
  updateBy?: unknown
  updateTime?: unknown
  userDeviceId?: unknown
}
