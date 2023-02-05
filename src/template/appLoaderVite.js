import { existsSync } from 'fs'
import consola from 'consola'

const fallback = 'div'
const notFoundMessage = 'Could not load custom app.vue, using fallback'

let AppVue = fallback
if (existsSync('../app.vue')) {
  try {
    const AppVue$1 = require('../app.vue')
    if (Object.keys(AppVue$1).length === 0) {
      AppVue = fallback
      consola.warn(notFoundMessage)
    } else {
      AppVue = AppVue$1.default
    }
  } catch (err) {
    AppVue = fallback
    consola.warn(notFoundMessage)
  }
} else {
  consola.warn(notFoundMessage)
}

export default AppVue
