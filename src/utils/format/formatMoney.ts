/**
 * 格式化金额 如1000->1,000
 */
const formatMoney = (num = 0) => {
  const result = []
  let counter = 0,
    nums = [],
    decimal = '',
    flag = false

  const numString = (num || 0).toString()
  // 如果有小数点，则只取小数点以前的数
  if (numString.includes('.')) {
    flag = true
    const stringList = numString.split('.')
    nums = stringList[0].split('')
    decimal = stringList[1]
  } else {
    flag = false
    nums = numString.split('')
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    counter++
    result.unshift(nums[i])
    if (!(counter % 3) && i != 0) {
      result.unshift(',')
    }
  }
  return flag ? result.join('') + '.' + decimal : result.join('')
}

export { formatMoney }
