<script setup>
const token = "45056b035260477a6353468702860ff1e987b4a6d6559a0e144401c8c8ebf6bd48619fadbde863dd30b030c00e2ad57a2497ca4aa187e541952e73ad052567374594fb43676056096c885b4c429b6ea6c38fb43b1e582e1ae804bc373ff269fb49c6653e410a6f4d369dfda94109a42ec057da1d7cf4ed3b768e744a38014758"
const { data: products } = await useFetch(() => `/api/products`, {
  baseURL: "https://api.sh3h.ru",
  headers: [{"Authorization": "bearer 45056b035260477a6353468702860ff1e987b4a6d6559a0e144401c8c8ebf6bd48619fadbde863dd30b030c00e2ad57a2497ca4aa187e541952e73ad052567374594fb43676056096c885b4c429b6ea6c38fb43b1e582e1ae804bc373ff269fb49c6653e410a6f4d369dfda94109a42ec057da1d7cf4ed3b768e744a38014758"}],
})
const refresh = () => refreshNuxtData('products')
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
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
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
              <a href="product-details.html">PUMA air max 97</a>
              <span>$975</span> <del>$999</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/02.jpg" alt="Product Name"
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
              <a href="product-details.html">Echo Studio. Amazon Echo Studio</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
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
              <a href="product-details.html">Corning Sunglasses for Men.</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/04.jpg" alt="Product Name"
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
              <a href="product-details.html">Canon PowerShot SX540</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
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
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/06.jpg" alt="Product Name"
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
              <a href="product-details.html">Kauri Marine Blue (Green Sole)</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/07.jpg" alt="Product Name"
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
              <a href="product-details.html">Full Set for photographer</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/08.jpg" alt="Product Name"
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
              <a href="product-details.html">Face Masks,Face Masks of 50 Pack</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-item">
            <div class="product-item-image">
              <a href="product-details.html"><img src="/dist/images/product/09.jpg" alt="Product Name"
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
              <a href="product-details.html">Fossil Men's Nate Stainless Steel Chronograph Quartz
                Watch</a>
              <span>$175</span> <del>$199</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <pre class="text-left"><code>{{ products }}</code></pre>
  <button @click="refresh">Refresh</button>
</template>
