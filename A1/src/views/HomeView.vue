<script setup lang="ts">
</script>

<template>
  <main>
    <!-- Banner Image -->
    <div class="banner-container">
      <img src="@/assets/banner.jpg" alt="Event Management Banner" class="banner-image">
    </div>

    <!-- Main Product Highlights -->
    <!-- Will have 6 cards, for 6 key hightlights of the product -->
    <div id="main-product-highlights" class="container-fluid px-3 py-3">
      <div class="row g-3">

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 1</h5>
              <p>Insert Card 1 here</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 2</h5>
              <p>Insert Card 2 here</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 3</h5>
              <p>Insert Card 3 here</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 4</h5>
              <p>Insert Card 4 here</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 5</h5>
              <p>Insert Card 5 here</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column align-items-center text-center">
              <h5>Card 6</h5>
              <p>Insert Card 6 here</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </main>
</template>

<style scoped>
.banner-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
