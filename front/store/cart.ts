// https://pinia.vuejs.org/ssr/nuxt.html
import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
export const useCartStore = defineStore('cartStore', () => {
    const cartItems = useLocalStorage('pinia/cart', [])
    function addValueToCartList(id: never) {
        cartItems.value.push(id)
    }
    function removeCartItem(id: never) {
        cartItems.value = cartItems.value.filter((number, i) => number != id)
        pushCart()
    }
    function quantity(id: never) {
        return cartItems.value.filter((number, i) => number == id).length
    }
    async function pushCart() {
        console.log("pull cart", cartItems.value)
        await useFetch('/api/cart', {
            method: 'post',
            body: { items: cartItems.value }
        })
    }
    async function fetchCart() {
        const { data: resData } = await useFetch('/api/cart')
        if (!resData.value) {
            return
        }
        cartItems.value.length = 0
        cartItems.value.push(...resData.value.items)
    }
    return { removeCartItem, addValueToCartList, pushCart, fetchCart, quantity, cartItems: skipHydrate(cartItems)}
})