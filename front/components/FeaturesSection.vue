<template>
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h2>Featured Products</h2>
          </div>
        </div>
      </div>
      <div class="features-wrapper">
        <div class="features-active">
          <Carousel class="carousel" :items-to-show="3" :wrap-around="false" ref="carousel" v-model="currentSlide">
            <Slide :index="0">
              <div class="product-item carousel__item">
                <div class="product-item-image">
                  <a href="product-details.html"><img src="/dist/images/product/05.jpg" alt="Product Name"
                                                      class="img-fluid"></a>
                  <div class="cart-icon">
                    <a href="#"><i class="far fa-heart"></i></a>
                    <a href="#">
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
                  <a href="product-details.html">BERRY TYPE-II: C1N Backpack</a>
                  <span>$975</span> <del>$999</del>
                </div>
              </div>
            </Slide>
            <Slide :index="1">
              <div class="product-item carousel__item">
              <div class="product-item-image">
                <a href="product-details.html"> <img src="/dist/images/product/04.jpg" alt="Product Name"
                                                     class="img-fluid"></a>
                <div class="cart-icon">
                  <a href="#"><i class="far fa-heart"></i></a>
                  <a href="#">
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
                <a href="product-details.html">BERRY TYPE-II: C1N Backpack</a>
                <span>$975</span> <del>$999</del>
              </div>
            </div></Slide>
            <Slide :index="2"><div class="product-item carousel__item">
              <div class="product-item-image">
                <a href="product-details.html"><img src="/dist/images/product/01.jpg" alt="Product Name"
                                                    class="img-fluid"></a>
                <div class="cart-icon">
                  <a href="#"><i class="far fa-heart"></i></a>
                  <a href="#">
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
                <a href="product-details.html">BERRY TYPE-II: C1N Backpack</a>
                <span>$975</span> <del>$999</del>
              </div>
            </div></Slide>
            <Slide :index="3"><div class="product-item carousel__item">
              <div class="product-item-image">
                <a href="product-details.html"> <img src="/dist/images/product/02.jpg" alt="Product Name"
                                                     class="img-fluid"></a>
                <div class="cart-icon">
                  <a href="#"><i class="far fa-heart"></i></a>
                  <a href="#">
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
                <a href="product-details.html">BERRY TYPE-II: C1N Backpack</a>
                <span>$975</span> <del>$999</del>
              </div>
            </div></Slide>
            <Slide :index="4"><div class="product-item carousel__item">
              <div class="product-item-image">
                <a href="product-details.html"><img src="/dist/images/product/03.jpg" alt="Product Name"
                                                    class="img-fluid"></a>
                <div class="cart-icon">
                  <a href="#"><i class="far fa-heart"></i></a>
                  <a href="#">
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
                <a href="product-details.html">BERRY TYPE-II: C1N Backpack</a>
                <span>$975</span> <del>$999</del>
              </div>
            </div></Slide>
            <template #addons>
              <Pagination />
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div class="slider-arrows">
          <button type="button"  @click="prev" class="carousel__prev prev-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.414" height="16.828"
                 viewBox="0 0 9.414 16.828">
              <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left"
                    d="M20.5,23l-7-7,7-7" transform="translate(-12.5 -7.586)" fill="none"
                    stroke="#1a2224" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </button>
          <input type="number" min="0" max="9" v-model="currentSlide" />
          <button @click="next" type="button" class="carousel__next next-arrow" aria-label="Navigate to next slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.414" height="16.828"
                 viewBox="0 0 9.414 16.828">
              <path id="Icon_feather-chevron-right" data-name="Icon feather-chevron-right"
                    d="M13.5,23l5.25-5.25.438-.437L20.5,16l-7-7" transform="translate(-12.086 -7.586)"
                    fill="none" stroke="#1a2224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="features-morebutton text-center">
            <a class="btn bt-glass" href="#">View All Products</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<style scoped>
.carousel__slide {
  padding: 0 15px;
}
</style>