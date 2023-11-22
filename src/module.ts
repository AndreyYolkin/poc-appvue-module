import { defineNuxtModule, createResolver, findPath, addTemplate } from '@nuxt/kit'
import { join } from 'pathe'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'app-vue-loader',
    compatibility: {
      nuxt: '>=2.16.0',
      bridge: true
    }
  },
  async setup (_, nuxt) {
    // @ts-ignore
    const { resolve } = createResolver(import.meta.url)

    const possibleAppVue = await findPath([join(nuxt.options.srcDir, 'App.vue'), join(nuxt.options.srcDir, 'app.vue')])

    addTemplate({
      src: resolve('./templates', 'app.ejs'),
      dst: 'App.js'
    })

    if (possibleAppVue) {
      addTemplate({
        filename: 'AppVue.js',
        getContents: () => `import App from '${possibleAppVue}'\nexport default App`
      })
    } else {
      addTemplate({
        filename: 'AppVue.js',
        getContents: () => 'export default \'div\''
      })
    }
  }
})
