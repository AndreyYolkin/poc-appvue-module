const consola = require('consola')

const fallback = 'div'
const notFoundMessage = 'Could not load custom app.vue, using fallback'

let AppVue = fallback
try {
  AppVue = require('../app.vue')
  AppVue = AppVue.default || fallback
} catch (err) {
  AppVue = fallback
  consola.warn(notFoundMessage)
}

module.exports = AppVue
