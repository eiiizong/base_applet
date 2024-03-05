// import type { PropType } from 'vue'

namespace Ta {
  export type TransitionStaus = 'leave' | 'enter' | ''
  /**
   * 动画类型 当传入空字符串时表示自定义动画
   *
   * fade 淡入
   *
   * fade-up 上滑淡入
   *
   * fade-down 下滑淡入
   *
   * fade-left 左滑淡入
   *
   * fade-right 右滑淡入
   *
   * slide-up 上滑进入
   *
   * slide-down 下滑进入
   *
   * slide-left 左滑进入
   *
   * slide-right 右滑进入
   */
  export type TransitionPropsName =
    | ''
    | 'fade'
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
  export type TransitionPropsDuration = {
    /**
     * 进入时间 毫秒
     */
    enter: number
    /**
     * 离开时间 毫秒
     */
    leave: number
  }

  /**
   * 弹出位置，可选值为 top bottom right left center
   */
  export type PopupPropsPosition = 'center' | 'top' | 'right' | 'left' | 'bottom'

  /**
   * 关闭图标位置，可选值为 top-left bottom-left bottom-right top-right
   */
  export type PopupPropsCloseIconPosition = 'top-left' | 'bottom-left' | 'bottom-right' | 'top-right'
}

export default Ta
