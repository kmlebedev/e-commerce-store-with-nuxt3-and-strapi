<script setup>
const config = useRuntimeConfig();
const { data: categories } = await useFetch(() => `/api/categories`, {
  baseURL: config.API_URL,
  headers: {"Authorization": "bearer " + config.API_TOKEN},
  query: { "populate": "Image"},
})
</script>

<template>
  <section class="categorys">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h2>Shop with top categorys</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in categories.data" :key="item.id" class="col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="productcategory text-center">
            <div class="productcategory-img">
              <a href="#"><img :src="config.API_URL + item.attributes.Image.data.attributes.url" :alt="item.attributes.Name"></a>
            </div>
            <div class="productcategory-text">
              <a href="#">
                <h6>{{ item.attributes.Name }}</h6>
                <span>480 Products</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="features-morebutton text-center">
            <a class="btn bt-glass" href="#">View All Categorys</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>