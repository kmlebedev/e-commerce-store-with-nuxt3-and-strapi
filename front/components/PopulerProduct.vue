<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const { addValueToCartList } = cartStore
const config = useRuntimeConfig();
const { data: products } = await useFetch(() => `/api/products`, {
  baseURL: config.API_URL,
  headers: {"Authorization": "bearer " + config.API_TOKEN},
  query: { "populate": "Image"},
})
</script>

<template>
  <section class="populerproduct">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h2>Popular Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in products.data" :key="item.id" class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a :href="'/product/' + item.attributes.Slug"><img :src="config.API_URL + item.attributes.Image.data[0].attributes.url" :alt="item.attributes.Name"
                                                  class="img-fluid"></a>
              <div class="cart-icon">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#" @click.prevent="addValueToCartList(item.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16.75" height="16.75"
                       viewBox="0 0 16.75 16.75">
                    <g id="Your_Bag" data-name="Your Bag" transform="translate(0.75)">
                      <g id="Icon" transform="translate(0 1)">
                        <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="0.682" cy="0.714"
                                 rx="0.682" ry="0.714" transform="translate(4.773 13.571)"
                                 fill="none" stroke="#1a2224" stroke-linecap="round"
                                 stroke-linejoin="round" stroke-width="1.5" />
                        <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="0.682" cy="0.714"
                                 rx="0.682" ry="0.714" transform="translate(12.273 13.571)"
                                 fill="none" stroke="#1a2224" stroke-linecap="round"
                                 stroke-linejoin="round" stroke-width="1.5" />
                        <path id="Path_3" data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)" fill="none" stroke="#1a2224"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <a :href="'/product/' + item.attributes.Slug">{{ item.attributes.Name }}</a>
              <span>${{ item.attributes.Price }}</span> <del>${{ item.attributes.Price + 24 }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
