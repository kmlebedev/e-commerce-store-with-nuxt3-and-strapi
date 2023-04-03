// Todo use serverStorage
// https://nuxt.com/docs/guide/directory-structure/server#server-storage
export default defineNuxtConfig({
    runtimeConfig: {
        API_TOKEN: "",  // NUXT_API_TOKEN
        public: {
            API_URL: "", // NUXT_PUBLIC_API_URL
        },
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    modules: [
        '@pinia/nuxt',
    ],
    nitro: {
        // Production
        storage: {
            db: {
                driver: 'redis',
                // redis connector options
            }
        },
        // Development
        devStorage: {
            db: {
                driver: 'fs',
                base: './data/db'
            }
        }
    },
    experimental: {
        componentIslands: true
    }
})