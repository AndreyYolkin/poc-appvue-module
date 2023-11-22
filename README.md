# App Vue Loader (POC)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> A Nuxt module that adds support for the app.vue file in Nuxt 2 bridge, with support for both Vite and Webpack build tools.


## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp; Just put `app.vue` and opt-in module in `nuxt.config.js`

## Quick Setup

1. Add `nuxt-app-vue-module` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-app-vue-module

# Using yarn
yarn add --dev nuxt-app-vue-module

# Using npm
npm install --save-dev nuxt-app-vue-module
```

2. Add `nuxt-app-vue-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-app-vue-module'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-app-vue-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-app-vue-module

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-app-vue-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-app-vue-module

[license-src]: https://img.shields.io/npm/l/nuxt-app-vue-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-app-vue-module
