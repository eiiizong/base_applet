namespace Wx {
  export interface env {
    /**
     * 文件系统中的用户目录路径 (本地路径)
     */
    USER_DATA_PATH: string
  }
}

/**
 * 自定义微信小程序相关的方法和属性
 */
declare class wx {
  static env: Wx.env
}
