<template>
  <section class="customersreview">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h2>What Our Customers Says</h2>
          </div>
        </div>
      </div>
      <div class="customersreview-wrapper">
        <div class="customersreview-active">
          <Carousel class="carousel" :items-to-show="2" :wrap-around="false">
            <Slide :index="0"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Ryan Ford</h6>
                <span>Content Writer</span>
              </div>
            </div></Slide>
            <Slide :index="1"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Tyler Wood</h6>
                <span>Fashion Designer</span>
              </div>
            </div></Slide>
            <Slide :index="2"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Ryan Ford</h6>
                <span>Content Writer</span>
              </div>
            </div></Slide>
            <Slide :index="3"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Tyler Wood</h6>
                <span>Fashion Designer</span>
              </div>
            </div></Slide>
            <Slide :index="4"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Ryan Ford</h6>
                <span>Content Writer</span>
              </div>
            </div></Slide>
            <Slide :index="5"><div class="customersreview-item">
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.</p>
              <div class="name">
                <h6>Tyler Wood</h6>
                <span>Fashion Designer</span>
              </div>
            </div></Slide>
          </Carousel>
        </div>
        <div class="slider-arrows">
          <div class="prev-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.414" height="16.828"
                 viewBox="0 0 9.414 16.828">
              <path id="Icon_feather-chevron-left" data-name="Icon feather-chevron-left"
                    d="M20.5,23l-7-7,7-7" transform="translate(-12.5 -7.586)" fill="none"
                    stroke="#1a2224" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <div class="next-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.414" height="16.828"
                 viewBox="0 0 9.414 16.828">
              <path id="Icon_feather-chevron-right" data-name="Icon feather-chevron-right"
                    d="M13.5,23l5.25-5.25.438-.437L20.5,16l-7-7" transform="translate(-12.086 -7.586)"
                    fill="none" stroke="#1a2224" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" />
            </svg>
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