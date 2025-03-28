<script setup lang="ts">
import { onMounted } from 'vue'

const categories = [
  { id: 'FilterRadio1', value: 'All', label: 'All' },
  { id: 'FilterRadio2', value: 'Technology', label: 'Technology' },
  { id: 'FilterRadio3', value: 'Business', label: 'Business' },
  { id: 'FilterRadio4', value: 'Marketing', label: 'Marketing' },
  { id: 'FilterRadio5', value: 'Finance', label: 'Finance' }
]

const selectedCategory = defineModel()
const props = defineProps<{
  name: string
  preChecked: string
}>()

// Set the initial value if it's not already set
onMounted(() => {
  if (selectedCategory.value === undefined || selectedCategory.value === '') {
    selectedCategory.value = props.preChecked
  }
})
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
      >
      <label class="form-check-label" :for="name + '-' + category.id">
        {{ category.label }}
      </label>
    </div>
  </div>
</template>
