import { defineNuxtModule, createResolver, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'app-vue-loader',
    compatibility: {
      nuxt: '>=2.16.0',
      bridge: true
    }
  },
  setup (_, nuxt) {
    // @ts-ignore
    if (!nuxt.options.bridge.appVue) {
      return
    }
    const { resolve } = createResolver(import.meta.url)
    // @ts-ignore
    if (nuxt.options.bridge.vite) {
      addTemplate({
        src: resolve(__dirname, 'template', 'appLoaderVite.js'),
        dst: 'AppVue.js'
      })
    } else {
      addTemplate({
        src: resolve(__dirname, 'template', 'appLoaderWebpack.js'),
        dst: 'AppVue.js'
      })
    }
    addTemplate({
      src: resolve(__dirname, 'template', 'App.ejs'),
      dst: 'App.js'
    })
  }
})
