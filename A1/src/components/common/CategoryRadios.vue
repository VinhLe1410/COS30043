<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  { id: 'FilterRadio1', value: 'All', label: 'All' },
  { id: 'FilterRadio2', value: 'Technology', label: 'Technology' },
  { id: 'FilterRadio3', value: 'Business', label: 'Business' },
  { id: 'FilterRadio4', value: 'Marketing', label: 'Marketing' },
  { id: 'FilterRadio5', value: 'Finance', label: 'Finance' }
]

const selectedCategory = defineModel()
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="col-lg-4 col-md-6 col-sm-12 pb-2">
    <div class="form-check" v-for="category in categories" :key="category.id">
      <input
        class="form-check-input"
        type="radio"
        :name="name"
        :id="name + '-' + category.id"
        :value="category.value"
        v-model="selectedCategory"
        :checked="category.value === 'All'"
      >
      <label class="form-check-label" :for="name + '-' + category.id">
        {{ category.label }}
      </label>
    </div>
  </div>
</template>
