import ja from './ja.json'
import uniAppJa from './uni-app.ja.json'
import zhHans from './zh-Hans.json'
import uniAppZhHans from './uni-app.zh-Hans.json'

export default {
  ja: { ...uniAppJa, ...ja },
  'zh-Hans': { ...uniAppZhHans, ...zhHans }
}
