import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  modules: ['../src/module'],
  bridge: {
    // vite: true,
    // @ts-expect-error appVue now is not in core
    appVue: true
  }
})
