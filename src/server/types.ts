/**
 * 登录类型
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
   *用户头像 base64
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
  /**
   * 更新时间
   */
  updateTime?: string
  userDeviceId?: unknown
}

/**
 * 查询个人民生资金查询汇总信息接口成功响应返回的数据格式
 */
export interface GetSelfFundCollectDataApiSuccessResponse {
  /**
   * 发放总金额（元）
   */
  totalMoney: number
  /**
   * 发放总次数
   */
  totalTime: number
}
