import { importAll, parseVersion } from '~/utils'
import { version, dependencies, devDependencies, description } from '~/../package.json'
import DEFAULT_CONFIG from '~/../src/utils/config-defaults'

const componentsContext = require.context('~/../src/components/', true, /package.json/)
export const components = importAll(componentsContext)

const directivesContext = require.context('~/../src/directives/', true, /package.json/)
export const directives = importAll(directivesContext)

const referenceContext = require.context('~/markdown/reference', true, /meta.json/)
export const reference = importAll(referenceContext)

const miscContext = require.context('~/markdown/misc', true, /meta.json/)
export const misc = importAll(miscContext)

export const nav = [
  {
    title: 'Getting started',
    base: '',
    exact: true
  },
  {
    title: 'Components',
    base: 'components/',
    pages: components,
    description: 'BootstrapVue components and component group plugins'
  },
  {
    title: 'Directives',
    base: 'directives/',
    pages: directives,
    description: 'BootstrapVue directives and directive group plugins'
  },
  {
    title: 'Reference',
    base: 'reference/',
    pages: reference,
    description: 'BootstrapVue and Bootstrap reference documentation'
  },
  {
    title: 'Misc',
    base: 'misc/',
    pages: misc,
    description: 'BootstrapVue changelog, settings, and miscellaneous additional resources'
  }
]

export const bootstrapVersion = parseVersion(dependencies.bootstrap)
export const nuxtVersion = parseVersion(devDependencies.nuxt)
export const portalVueVersion = parseVersion(dependencies['portal-vue'])
export const vueVersion = parseVersion(devDependencies.vue)
export const defaultConfig = DEFAULT_CONFIG
export const bvDescription = description

export { version }
