<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card h-100">
      <div class="card-body d-flex flex-column align-items-center text-center">
        <h5>{{ title }}</h5>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
