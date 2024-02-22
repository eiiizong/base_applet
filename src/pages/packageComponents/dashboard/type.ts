export interface NavItem {
  /**
   *
   */
  groupName: string
  /**
   *
   */
  icon: string
  /**
   *
   */
  list: {
    /**
     * 路由
     */
    path: string
    /**
     * 名称
     */
    title: string
  }[]
}
