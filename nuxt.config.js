export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Web Designer & Musician',
    titleTemplate: '%s \xB7 Lasse Krarup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Musician, drummer and web designer. I compose, I teach music, I tour with bands, I record and I do mixing and studio tech stuff. I also design web sites and graphics.'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Lasse Krarup'
      },
      {
        hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.lassekrarup.com/LK-website-screenshot.jpg'
      },
      {
        hid: 'msapplication', name: 'msapplication-TileColor', content: '#da532c'
      },
      {
        hid: 'theme-color', name: 'theme-color', content: '#333333'
      }
    ],
    link: [
      { hid: 'apple-fav', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { hid: '32-fav', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { hid: '16-fav', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { hid: 'manifest-safari', rel: 'manifest', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { hid: 'mask-icon', rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'nuxt-buefy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    // your settings here
    sass: [],
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_keyframes.scss', '~/assets/scss/_mixins.scss'],
    less: [],
    stylus: []
  },
  buefy: {
    css: false,
    materialDesignIconsHRef: '//cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
