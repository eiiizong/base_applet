/**
 * 根据身份证号（使用该方法前先校验身份证号格式是否正确）获取出生日期
 * @param {String} value 身份证号
 */
const getBirthdayByIDCard = (value: string): string => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  value = (value + '').trim().toUpperCase()

  let birthday = ''
  if (value) {
    const len = value.length

    if (len === 15) {
      birthday = '19' + value.slice(6, 12)
    } else if (len === 18) {
      birthday = value.slice(6, 14)
    } else {
      //
    }

    if (birthday) {
      // 通过正则表达式来指定输出格式为: 1990-01-01
      birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
    }
  }
  return birthday
}

export default getBirthdayByIDCard
