import CryptoJS from 'crypto-js'
// const KEY = CryptoJS.enc.Utf8.parse('_aes_secret_key_')
// const IV = CryptoJS.enc.Utf8.parse('_aes_secret_iv__')

const day = new Date()
const month = String(day.getMonth() + 1).padStart(2, '0')
const date = String(day.getDate()).padStart(2, '0')
const year = day.getFullYear()
const str = '' + year + month + date
const code = 'uwjunawef75jnm8t'
const codeIv = 'twgt6hrmwuszohoh'
const KEY = CryptoJS.enc.Utf8.parse(code.replace('f75jnm8t', str))
const IV = CryptoJS.enc.Utf8.parse(codeIv.replace('wuszohoh', str))

/**
 * AES 加密
 * @param plaintext: 需要加密的文本
 */
const AES_Encrypt = (plaintext: string) => {
  const key = KEY
  const iv = IV
  const srcs = CryptoJS.enc.Utf8.parse(plaintext)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    // padding: CryptoJS.pad.ZeroPadding
    padding: CryptoJS.pad.Pkcs7
  })

  const encryptRes = CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  return encryptRes
}

/**
 * AES 解密
 * @param jsonStr
 */
const AES_Decrypt = (jsonStr: string) => {
  const key = KEY
  const iv = IV
  const base64 = CryptoJS.enc.Base64.parse(jsonStr)
  const src = CryptoJS.enc.Base64.stringify(base64)

  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8).toString()

  return decryptedStr
}

const AES_DecryptRealPhone = (jsonStr: string, keyStr: string, ivStr: string) => {
  keyStr = decodeURIComponent(keyStr) //sessionkey是经过URL 编码的 Base64 编码字符串，要反转义
  const key = CryptoJS.enc.Base64.parse(keyStr)
  const iv = CryptoJS.enc.Base64.parse(ivStr)

  const decrypt = CryptoJS.AES.decrypt(jsonStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8).toString()
  return JSON.parse(decryptedStr)
}

export { AES_Encrypt, AES_Decrypt, AES_DecryptRealPhone }
