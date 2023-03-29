// Todo
// https://pinia.vuejs.org/ssr/nuxt.html
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cartStore', () => {
    const cartItems = useLocalStorage('pinia/cart', [])
    async function addValueToCartList(id: never) {
        cartItems.value.push(id)
        await useFetch('/api/cart', {
            method: 'post',
            body: { items: cartItems.value }
        })
    }
    return { addValueToCartList, cartItems: skipHydrate(cartItems)}
})