/**
 * 分页查询基础数据格式
 */
interface PaginationQueryBaseVo<T> {
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
  rows: T[]
  /**
   * 总条数
   */
  total: number
}

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
  chi031Desc: string
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
export interface GetSubsidyDetailPageListApiSuccessResponse
  extends PaginationQueryBaseVo<GetSubsidyDetailPageListRow> {}

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
  /**
   * 审批；流程
   */
  chm036: string
  /**
   * 申报材料
   */
  chm037: string
  createBy: null
  createTime: string
  deptId: number
  remark: null
  updateBy: null
  updateTime: string
  userId: number
}

/**
 * 综合查询汇总统计接口基础数据数据格式
 */
export interface GetAllSummaryStatisticsBaseVo {
  /**
   * 涉及补贴项目数
   */
  projectNum: number
  /**
   * 涉及金额
   */
  totalMoney: number
  /**
   * 涉及人数
   */
  totalPerson: number
}

/**
 * 综合查询汇总统计接口补贴项目数据数据格式
 */
export interface GetAllSummaryStatisticsSubsidyCountVo extends GetAllSummaryStatisticsBaseVo {
  /**
   * 补贴项目名称
   */
  chi031: string
  chi031Desc: string
  /**
   * 补贴项目所属业务局
   */
  chi037: string
}

/**
 * 综合查询汇总统计接口业务局数据数据格式
 */
export interface GetAllSummaryStatisticsDepartCountVo extends GetAllSummaryStatisticsBaseVo {
  /**
   * 业务局名称
   */
  chi037: string
  chi037Desc: string
  /**
   * 业务局包含的补贴项目
   */
  subsidyCountVoList: GetAllSummaryStatisticsSubsidyCountVo[]
}
/**
 * 综合查询汇总统计接口成功响应返回的数据格式
 */
export interface GetAllSummaryStatisticsApiSuccessResponse extends GetAllSummaryStatisticsBaseVo {
  /**
   * 业务局信息
   */
  departCountVos: GetAllSummaryStatisticsDepartCountVo[]
}

/**
 * picker下拉选数据格式
 */
export interface Option {
  label: string
  value: string
  children: Option[] | null
}

/**
 * 查询区县乡镇级联接口成功响应返回的数据格式
 */
export interface GetChb015AndChb018ListApiSuccessResponse {
  /**
   * 区县
   */
  chb015Vos: Option[]
}

/**
 * 综合查询详情信息行数据返回的数据格式
 */
export interface GetAllQueryDetailRow {
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
  chi037: string
  chm010: string
  chm012: string
  chm020: number
  crb00k: string
  createBy: unknown
  createTime: string
  deptId: number
  remark: unknown
  updateBy: unknown
  updateTime: unknown
  userId: number
}

/**
 * 综合查询详情接口成功响应返回的数据格式
 */
export interface GetAllQueryDetailApiSuccessResponse extends PaginationQueryBaseVo<GetAllQueryDetailRow> {}

/**
 * 政策数据格式
 */
export interface PolicyVo {
  chb015: string
  chb017: string
  chb018: string
  chi031: string
  chi031Desc: string
  chi037: string
  chi037Desc: string
  chm010: string
  chm012: string
  /**
   * 政策主键
   */
  chm050: number
  /**
   * 政策名称
   */
  chm051: string
  /**
   *
   */
  chm052: string
  /**
   *
   */
  chm053: string
  chm054: unknown
  chm055: string
  chm056: string
  isNew: unknown
}

/**
 * 获取最新政策数据接口成功响应返回的数据格式
 */
export interface GetLatestPolicyListApiSuccessResponse {
  /**
   * 数据列表
   */
  policyVoList: PolicyVo[]
}

/**
 * 获取主管部门及其补贴项目数据接口成功响应返回的数据格式
 */
export interface GetChi037AndChi031ListApiSuccessResponse {
  /**
   * 数据列表
   */
  chi037List: Option[]
}

/**
 * 获取政策数据接口成功响应返回的数据格式
 */
export interface GetDepartPolicyListApiSuccessResponse extends PaginationQueryBaseVo<PolicyVo> {}
