// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // '~/node_modules/swiper/modules/pagination/pagination-element.min.css',
        '~/assets/css/reset.css',
        '~/assets/css/main.css',
        '~/assets/css/section.css',
        '~/assets/css/fonts.css',
        '~/assets/css/popup.css',
        '~/assets/css/button.css',
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


