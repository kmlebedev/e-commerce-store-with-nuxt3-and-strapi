// Todo
// https://pinia.vuejs.org/ssr/nuxt.html
import { defineStore } from 'pinia'
import { useLocalStorage} from '@vueuse/core'
export const useCartStore = defineStore('cartStore', () => {
    const cartList = useLocalStorage('pinia/cart', [], {
        mergeDefaults: true
    })
    function addValueToCartList(id: number) {
        cartList.value.push(id)
    }
    return { addValueToCartList, cartList }
})