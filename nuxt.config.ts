// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            meta: [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }
            ],
            link: [
                { rel: 'stylesheet', href: '_nuxt/assets/css/popup.css' },
                { rel: 'stylesheet', href: '_nuxt/assets/css/reset.css' },
                { rel: 'stylesheet', href: '_nuxt/assets/css/section.css' },
                { rel: 'stylesheet', href: '_nuxt/assets/css/fonts.css' },
            ],
        },
    },

    css: [
        // '~/node_modules/swiper/modules/pagination/pagination-element.min.css',
        // '~/assets/css/reset.css',
        '~/assets/css/main.css',
        // '~/assets/css/section.css',
        // '~/assets/css/fonts.css',
        // '~/assets/css/popup.css',
    ],
    plugins: [
        '~/plugins/showPassword.js',
        '~/plugins/initPopup.js',
        '~/plugins/submitForm.js'
    ],
    modules: ['nuxt-swiper'],
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        styleLang: 'css',
        modules: ['navigation', 'pagination'], // all modules are imported by default
    }
})


