<script setup lang="ts">
import { productCards } from '@/interfaces/types.ts'

</script>

<template>
  <div class="container-fluid px-3 py-3">
    <div class="row g-3 pb-3">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="card in productCards" :key="card.title">
        <div class="card h-100">
          <div class="card-body d-flex flex-column align-items-center text-center">
            <h5>{{ card.title }}</h5>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
