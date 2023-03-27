// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        API_TOKEN: "45056b035260477a6353468702860ff1e987b4a6d6559a0e144401c8c8ebf6bd48619fadbde863dd30b030c00e2ad57a2497ca4aa187e541952e73ad052567374594fb43676056096c885b4c429b6ea6c38fb43b1e582e1ae804bc373ff269fb49c6653e410a6f4d369dfda94109a42ec057da1d7cf4ed3b768e744a38014758",
        public: {
            API_URL: "https://api.sh3h.ru",
        },
    },
    css: [
        '@/assets/scss/main.scss'
    ]
})