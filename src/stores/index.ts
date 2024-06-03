import type { App } from 'vue'

import { createPinia } from 'pinia'
import { createLogger, reset } from './plugins'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
pinia.use(createLogger)
pinia.use(reset)

const setupStore = (app: App<Element>) => {
  app.use(pinia)
}

export default pinia
export { setupStore }
