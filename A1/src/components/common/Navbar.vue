<script setup lang="ts">
// No props or logic needed for now
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <h1 class="navbar-brand mb-0 pb-3">Web-Based Event Management System</h1>
      </div>
      <span class="text-light">104193108@student.swin.edu.au</span>
    </div>
    <!-- Banner Image -->
    <div class="banner-container">
      <img src="@/assets/banner.jpg" alt="Event Management Banner" class="banner-image">
    </div>
  </nav>
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