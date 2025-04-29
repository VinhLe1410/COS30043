<script setup lang="ts">
// No props or logic needed for now
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid justify-content-between align-items-center pb-2">
      <a class="navbar-brand" href="#">Event Management</a>
      <div class="d-flex text-light">
        <a class="nav-link p-1" href="#/job-explorer">Job Explorer</a>
        <a class="nav-link p-1" href="#/job-application">Job Application</a>
        <a class="nav-link p-1" href="#/todo-list">Todo List</a>
      </div>
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
