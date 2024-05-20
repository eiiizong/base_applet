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
 * 查询个人民生资金汇总信息接口成功响应返回的数据格式
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

/**
 * 查询个人民生资金发放详情信息行数据返回的数据格式
 */
export interface GetSubsidyDetailPageListRow {
  aac002: string
  aac003: string
  aae010: string
  aae017: string
  aae019: number
  aae036: string
  aae100: string
  aae209: string
  chb015: string
  chb017: string
  chb018: string
  chb204: string
  chi031: string
  chm010: string
  chm012: string
  chm020: number
  /**
   * 业务状态(0-发放中，1-已发放)
   */
  crb00k: '0' | '1'
  createBy: unknown
  createTime: unknown
  deptId: unknown
  remark: unknown
  updateBy: unknown
  updateTime: unknown
  userId: unknown
}

/**
 * 查询个人民生资金发放详情信息信息接口成功响应返回的数据格式
 */
export interface GetSubsidyDetailPageListApiSuccessResponse {
  /**
   * 当前页
   */
  pageNum: number
  /**
   * 当前条数
   */
  pageSize: number
  /**
   * 数据列表
   */
  rows: GetSubsidyDetailPageListRow[]
  /**
   * 总条数
   */
  total: number
}

/**
 * 查询补贴项目列表行数据返回的数据格式
 */
export interface GetSubsidyProjectListRow {
  aae100: string
  chb015: string
  chb017: string
  chb018: string
  chi031: string
  chi037: string
  chm030: number
  chm031: string
  chm032: string
  chm033: string
  chm034: string
  chm035: string
  chm036: string
  createBy: unknown
  createTime: unknown
  deptId: unknown
  remark: unknown
  updateBy: unknown
  updateTime: unknown
  userId: unknown
}
/**
 * 查询补贴项目列表接口成功响应返回的数据格式
 */
export interface GetSubsidyProjectListApiSuccessResponse {
  [key: string]: GetSubsidyProjectListRow[]
}

/**
 * 查询补贴项目详情接口成功响应返回的数据格式
 */
export interface GetSubsidyProjectDetailApiSuccessResponse {
  aae100: string
  chb015: null
  chb017: null
  chb018: null
  chi031: string
  chi037: string
  chm030: number
  /**
   * 补贴对象
   */
  chm031: string
  /**
   * 补贴标准
   */
  chm032: string
  chm033: string
  chm034: string
  chm035: null
  chm036: null
  createBy: null
  createTime: string
  deptId: number
  remark: null
  updateBy: null
  updateTime: string
  userId: number
}
