/**
 * 中国正常GCJ02坐标---->百度地图BD09坐标
 * 坐标转换 百度地图坐标转换成腾讯地图坐标
 * lng 腾讯经度
 * lat 腾讯纬度
 * 经度 > 纬度
 */
const bMapToQQMap = (lng, lat) => {
  if (lng == null || lng === '' || lat == null || lat === '') {
    return {
      longitude: lng,
      latitude: lat,
    }
  }

  let x_pi = 3.14159265358979324
  let x = parseFloat(lng) - 0.0065
  let y = parseFloat(lat) - 0.006
  let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
  let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
  lng = (z * Math.cos(theta)).toFixed(7)
  lat = (z * Math.sin(theta)).toFixed(7)

  return {
    longitude: lng,
    latitude: lat,
  }
}

export { bMapToQQMap }
