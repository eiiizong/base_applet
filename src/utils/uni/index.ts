// 基础
export { default as env } from './env'
export { default as canIUse } from './canIUse'
export { default as base64ToArrayBuffer } from './base64ToArrayBuffer'
export { default as arrayBufferToBase64 } from './arrayBufferToBase64'

// 基础-系统
export { default as getSystemInfo } from './getSystemInfo'
export { default as getSystemInfoAsync } from './getSystemInfoAsync'
export { default as getSystemInfoSync } from './getSystemInfoSync'

// 基础-更新
export { default as updateWeChatApp } from './updateWeChatApp'
export { default as getUpdateManager } from './getUpdateManager'

// 路由
export { default as switchTab } from './switchTab'
export { default as reLaunch } from './reLaunch'
export { default as redirectTo } from './redirectTo'
export { default as navigateTo } from './navigateTo'
export { default as navigateBack } from './navigateBack'

// 跳转
export { navigateToMiniProgram } from './navigateToMiniProgram'
export { navigateBackMiniProgram } from './navigateBackMiniProgram'
export { exitMiniProgram } from './exitMiniProgram'

// 转发
export { showShareMenu } from './showShareMenu'
export { hideShareMenu } from './hideShareMenu'

// 界面-交互
export { default as showToast } from './showToast'
export { default as showModal } from './showModal'
export { default as showLoading } from './showLoading'
export { showActionSheet } from './showActionSheet'
export { default as hideToast } from './hideToast'
export { default as hideLoading } from './hideLoading'
export { enableAlertBeforeUnload } from './enableAlertBeforeUnload'
export { disableAlertBeforeUnload } from './disableAlertBeforeUnload'

// 界面-导航栏
export { showNavigationBarLoading } from './showNavigationBarLoading'
export { default as setNavigationBarTitle } from './setNavigationBarTitle'
export { setNavigationBarColor } from './setNavigationBarColor'
export { hideNavigationBarLoading } from './hideNavigationBarLoading'
export { hideHomeButton } from './hideHomeButton'

// 界面-背景
export { setBackgroundTextStyle } from './setBackgroundTextStyle'
export { setBackgroundColor } from './setBackgroundColor'

// 界面-Tab Bar
export { showTabBarRedDot } from './showTabBarRedDot'
export { showTabBar } from './showTabBar'
export { setTabBarStyle } from './setTabBarStyle'
export { default as setTabBarItem } from './setTabBarItem'
export { setTabBarBadge } from './setTabBarBadge'
export { removeTabBarBadge } from './removeTabBarBadge'
export { hideTabBarRedDot } from './hideTabBarRedDot'
export { hideTabBar } from './hideTabBar'

// 界面-下拉刷新
export { stopPullDownRefresh } from './stopPullDownRefresh'
export { startPullDownRefresh } from './startPullDownRefresh'

// 网络-发起请求
export { default as request } from './request'

// 网络-下载
export { default as downloadFile } from './downloadFile'

// 网络-上传
export { default as uploadFile } from './uploadFile'

// 支付
export { requestPayment } from './requestPayment'

// 数据缓存
export { setStorageSync } from './setStorageSync'
export { setStorage } from './setStorage'
export { removeStorageSync } from './removeStorageSync'
export { removeStorage } from './removeStorage'
export { getStorageSync } from './getStorageSync'
export { getStorage } from './getStorage'
export { clearStorageSync } from './clearStorageSync'
export { default as clearStorage } from './clearStorage'

// 媒体-图片
export { previewImage } from './previewImage'
export { getImageInfo } from './getImageInfo'
export { chooseImage } from './chooseImage'
export { chooseMedia } from './chooseMedia'

// 开放接口-登录
export { default as login } from './login'

// 开放接口-生物认证
export { startSoterAuthentication } from './startSoterAuthentication'

// 位置
export { openLocation } from './openLocation'
export { getLocation } from './getLocation'
export { chooseLocation } from './chooseLocation'

// 文件
export { default as openDocument } from './openDocument'
export { default as getFileSystemManager } from './getFileSystemManager'

// 开放接口-用户信息
export { getUserProfile } from './getUserProfile'

// 开放接口-设置
export { openSetting } from './openSetting'
export { getSetting } from './getSetting'

// 设备-键盘
export { onKeyboardHeightChange } from './onKeyboardHeightChange'
export { offKeyboardHeightChange } from './offKeyboardHeightChange'
export { hideKeyboard } from './hideKeyboard'

// 设备-电话
export { makePhoneCall } from './makePhoneCall'

// 设备-扫码
export { scanCode } from './scanCode'
// 设备-剪贴板
export { setClipboardData } from './setClipboardData'

// 其他的方法
export { checkIsSupportFacialRecognition } from './checkIsSupportFacialRecognition'
export { startFacialRecognitionVerify } from './startFacialRecognitionVerify'

// uniapp 特有api
export { default as getLocale } from './getLocale'
export { default as setLocale } from './setLocale'
