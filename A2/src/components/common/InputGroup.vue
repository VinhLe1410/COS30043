<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  showError: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="row gx-1 px-2 py-1 col-lg-4 col-md-6 col-sm-12">
    <div class="input-group-container position-relative" style="min-height: 90px">
      <label :for="id" class="form-label">{{ label }}:</label>
      <input
        :type="type"
        :id="id"
        :name="id"
        class="form-control"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :required="required"
      />
      <div v-if="showError" class="text-danger error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group-container {
  position: relative;
}

.error-message {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 0.875rem;
  word-wrap: break-word;
  max-width: 100%;
}
</style>
