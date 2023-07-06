import {
  blue,
  cyan,
  green,
  yellow,
  lightGreen,
  reset
} from 'kolorist'

export default [
  {
    name: 'applets',
    display: 'Applets',
    description: 'miniprogram framework',
    color: yellow,
    variants: [{
      name: 'applets-empty',
      display: 'Applets Empty',
      description: 'miniprogram framework',
      color: lightGreen,
    }, {
      name: 'applets',
      display: 'Applets JavaScript',
      description: 'miniprogram framework',
      color: yellow,
    }, {
      name: 'applets-ts',
      display: 'Applets TypeScript',
      description: 'miniprogram framework',
      color: blue,
    }]
  }, {
    name: 'vue',
    display: 'Vue',
    description: 'Vue framework',
    color: green,
    variants: [{
      name: 'vue',
      display: 'Vue JavaScript',
      description: 'Vue framework',
      color: yellow,
    }, {
      name: 'vue-ts',
      display: 'Vue TypeScript',
      description: 'Vue framework',
      color: blue,
    }, {
      name: 'vue-nuxt',
      display: 'Vue JavaScript Nuxt',
      description: 'Vue framework',
      color: green,
    }, {
      name: 'vue-empty',
      display: 'Vue JavaScript Empty',
      description: 'Vue framework',
      color: lightGreen,
    }]
  }, {
    name: 'node',
    display: 'Node',
    description: 'Node Backend Service',
    color: cyan,
    variants: [{
      name: 'koa',
      display: 'Node Koa RESTAPI',
      description: 'Node Koa RESTAPI Backend Service',
      color: blue,
    }, {
      name: 'express',
      display: 'Node Express RESTAPI',
      description: 'Node Express RESTAPI Backend Service',
      color: yellow,
    }]
  }, {
    name: 'others',
    display: 'Others',
    description: 'Others Framework',
    color: reset,
    variants: [{
      name: 'others-electron',
      display: 'Other Electron',
      description: 'Other Framework Electron',
      color: yellow,
    }]
  }
]
