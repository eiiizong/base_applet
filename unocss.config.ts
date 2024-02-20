import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { presetIcons } from 'unocss'

import transformerDirectives from '@unocss/transformer-directives'

// 可以写属性会自动增加class,也可以写class
const prefix = 'uno-'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({ prefix }),
    // attributify autocomplete
    presetWeappAttributify(),
    presetIcons(),
  ],
  shortcuts: [
    {
      'uno-center': 'uno-flex uno-justify-center uno-items-center',
    },
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre',
    }),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
  theme: {
    color: {
      blue: 'rgba(22, 33, 255, 1)',
      red: '#e74c3c',
      sun: '#f1c40f',
      green: '#16a085',
    },
    border: {
      blue: 'rgba(22, 33, 255, 1)',
      red: '#e74c3c',
      sun: '#f1c40f',
      green: '#16a085',
    },
  },
}
