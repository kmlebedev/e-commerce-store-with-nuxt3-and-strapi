<script setup>
import { useCartStore } from '~/store/cart.ts'
const cartStore = useCartStore()
const { addValueToCartList } = cartStore

const slug = useRoute().params.slug
const config = useRuntimeConfig()
const { data: products } = await useFetch(() => `/api/products`, {
  baseURL: config.API_URL,
  headers: { "Authorization": "bearer " + config.API_TOKEN },
  query: { "filters\[Slug\][$eq]": slug, "populate": "Image" }
})
</script>

<template>
  <section class="product">
    <div class="container">
      <div v-for="item in products.data" :key="item.id" class="row">
        <div class="col-lg-6 col-md-5 col-12">
          <div class="product-slider">
            <div class="exzoom" id="exzoom">
              <div class="exzoom_img_box">
                <ul class='exzoom_img_ul'>
                  <li v-for="image in item.attributes.Image.data" :key="item.id">
                    <img :src="config.API_URL + image.attributes.url" /></li>
                </ul>
              </div>
              <div class="exzoom_nav"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-12">
          <div class="product-pricelist">
            <h2>{{ item.attributes.Name }}</h2>
            <div class="product-pricelist-ratting">
              <div class="price">
                <span>${{ item.attributes.Price }}</span>
              </div>
              <div class="star">
                <ul>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li>5.0</li>
                  <li class="point">(500 Rating)</li>
                </ul>
              </div>
            </div>
            <p>{{ item.attributes.Description }}</p>
            <div class="product-pricelist-selector">
              <div class="product-pricelist-selector-size">
                <h6>Sizes</h6>
                <div class="sizes" id="sizes">
                  <li class="sizes-all">S</li>
                  <li class="sizes-all active">M</li>
                  <li class="sizes-all">L</li>
                  <li class="sizes-all">XL</li>
                  <li class="sizes-all">XXL</li>
                </div>
              </div>
              <div class="product-pricelist-selector-color">
                <h6>Colors</h6>
                <div class="colors" id="colors">
                  <li class="colorall color-1 active"></li>
                  <li class="colorall color-2"></li>
                </div>
              </div>
              <div class="product-pricelist-selector-quantity">
                <h6>quantity</h6>
                <div class="wan-spinner wan-spinner-4">
                  <a href="javascript:void(0)" class="minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                         viewBox="0 0 11.98 6.69">
                      <path id="Arrow" d="M1474.286,26.4l5,5,5-5"
                            transform="translate(-1473.296 -25.41)" fill="none" stroke="#989ba7"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" />
                    </svg>
                  </a>
                  <input type="text" value="1" min="1">
                  <a href="javascript:void(0)" class="plus"><svg
                      xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                      viewBox="0 0 11.98 6.69">
                    <g id="Arrow" transform="translate(10.99 5.7) rotate(180)">
                      <path id="Arrow-2" data-name="Arrow" d="M1474.286,26.4l5,5,5-5"
                            transform="translate(-1474.286 -26.4)" fill="none"
                            stroke="#1a2224" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.4" />
                    </g>
                  </svg></a>
                </div>
              </div>
            </div>
            <div class="product-pricelist-selector-button">
              <a class="btn cart-bg " href="#" @click.prevent="addValueToCartList(item.id)">Add to cart
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </a>
              <a class="btn bg-primary cart-hart" href="#">
                <svg id="Heart" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="20"
                     viewBox="0 0 22 20">
                  <defs>
                    <clipPath id="clip-path">
                      <rect width="22" height="20" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Repeat_Grid_1" data-name="Repeat Grid 1" clip-path="url(#clip-path)">
                    <g transform="translate(1 1)">
                      <path id="Heart-2" data-name="Heart"
                            d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                            transform="translate(-1.549 -2.998)" fill="#fff" stroke="#335aff"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </g>
                  </g>
                </svg>
              </a>
              <div class="product-pricelist-selector-button-item">
                <div class="shipping">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.4" height="17.937"
                         viewBox="0 0 21.4 17.937">
                      <g id="Truck_Icon" data-name="Truck Icon"
                         transform="translate(-0.8 -3.8)">
                        <path id="Path_14" data-name="Path 14" d="M1.5,4.5H15.112V16.3H1.5Z"
                              fill="none" stroke="#335aff" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.4" />
                        <path id="Path_15" data-name="Path 15"
                              d="M24,12h3.63l2.722,2.722V19.26H24Z"
                              transform="translate(-8.852 -3)" fill="none" stroke="#335aff"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.4" />
                        <path id="Path_16" data-name="Path 16"
                              d="M9.037,26.269A2.269,2.269,0,1,1,6.769,24a2.269,2.269,0,0,1,2.269,2.269Z"
                              transform="translate(-1.185 -7.5)" fill="none" stroke="#335aff"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.4" />
                        <path id="Path_17" data-name="Path 17"
                              d="M28.537,26.269A2.269,2.269,0,1,1,26.269,24,2.269,2.269,0,0,1,28.537,26.269Z"
                              transform="translate(-8.852 -7.5)" fill="none" stroke="#335aff"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.4" />
                      </g>
                    </svg>

                  </div>
                  <p>Free Shipping Cast</p>
                </div>
                <div class="delivery">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5"
                         viewBox="0 0 17.5 17.5">
                      <g id="Icon" transform="translate(-2.25 -2.25)">
                        <path id="Path_20" data-name="Path 20"
                              d="M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Z" fill="none"
                              stroke="#335aff" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5" />
                        <path id="Path_21" data-name="Path 21" d="M18,9v4.8l3.2,1.6"
                              transform="translate(-7 -2.8)" fill="none" stroke="#335aff"
                              stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5" />
                      </g>
                    </svg>
                  </div>
                  <p>3 Days Delivery Time</p>
                </div>
                <div class="cash">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"
                         viewBox="0 0 10 16">
                      <path id="Icon"
                            d="M14.863,11.522c-2.23-.524-2.947-1.067-2.947-1.911,0-.969.992-1.644,2.652-1.644,1.749,0,2.4.756,2.456,1.867H19.2a3.655,3.655,0,0,0-3.153-3.387V4.5H13.095V6.42c-1.906.373-3.438,1.493-3.438,3.209,0,2.053,1.876,3.076,4.617,3.671,2.456.533,2.947,1.316,2.947,2.142,0,.613-.481,1.591-2.652,1.591-2.024,0-2.819-.818-2.927-1.867H9.48c.118,1.947,1.729,3.04,3.615,3.4V20.5h2.947V18.589c1.916-.329,3.438-1.333,3.438-3.156C19.48,12.909,17.093,12.047,14.863,11.522Z"
                            transform="translate(-9.48 -4.5)" fill="#335aff" />
                    </svg>
                  </div>
                  <p>Cash on Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>