import colors from 'vuetify/es5/util/colors'

export default {

    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/styles/mian.css'
    ],
    transition: {
        name: 'component-fade',
        mode: 'out-in'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {
            src: '~/plugins/sw.js',
            ssr: false
        },
        {
            src: '~/plugins/axiosConfig.js',
            ssr: false
        },
        {
            src: '@/plugins/aosPlugin.js',
            ssr: false
        },
        '~/plugins/mixins/userPlugin.js',

        /* {
             src: '~/plugins/mixins/userPlugin.js',
             ssr: true
         },*/
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/dotenv'
    ],
    axios: {
        baseURL: process.env.NODE_ENV == 'production' ? "https://nuxt-pwa-oscar.herokuapp.com/api/" : 'http://localhost:8000/api/',
        // baseURL: "http://localhost:8000/",
        // baseURL: "https://nuxt-pwa-oscar.herokuapp.com/",
    },
    auth: {
        redirect: false,
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'auth/login', method: 'post', propertyName: 'meta.token' },
                    logout: { url: 'auth/logout', method: 'post' },
                    user: { url: 'auth/user', method: 'get', propertyName: 'data' }
                },
            }
        }

    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/pwa',
    ],
    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        defaultAssets: {
            font: false,
            icons: 'mdiSvg'
        },
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },
    pwa: {
        manifest: {
            display: 'standalone',
            start_url: '/',
            name: 'ingOscarPWA',
            short_name: 'pwaOscar',
            description: 'testing laravel whit nuxtJs on PWA',
            orientation: 'portrait',
            lang: 'en',
        },
        /*workbox: {
            runtimeCaching: [
                {
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
                },
                {
                    urlPattern: 'https://cdn.snipcart.com/.*',
                    method: 'GET',
                    strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
                },
                {
                    urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
                }
            ]
        }*/
    },
}
