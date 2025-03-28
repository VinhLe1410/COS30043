<script setup lang="ts">
import { ref, computed } from 'vue'
import CategoryRadios from '@/components/common/CategoryRadios.vue'
import { typedEvents } from '@/interfaces/types.ts'

const registrationUsername = ref('')
const registrationPassword = ref('')
const registrationConfirmPassword = ref('')
const registrationCategory = ref('All')

const filteredRegistrationEvents = computed(() => {
  return typedEvents.filter(event => {
    const matchesCategory = registrationCategory.value === 'All' || event.category === registrationCategory.value
    return matchesCategory
  })
})

const passwordMatch = computed(() => {
  return registrationPassword.value === registrationConfirmPassword.value && registrationPassword.value.length > 0
})
</script>


<template>
  <div id="registration-form" class="container-fluid px-3 py-3">
    <div class="row g-1 px-5 pb-3">
      <label for="registration-form-username">Username:</label>
      <input type="text" 
        id="registration-form-username" 
        class="form-control" 
        v-model="registrationUsername" />
      <label for="registration-form-password">Password:</label>
      <input type="password" 
        id="registration-form-password" 
        class="form-control" 
        v-model="registrationPassword" />
      <label for="registration-form-confirm-password">Confirm Your Password:</label>
      <input type="password" 
        id="registration-form-confirm-password" 
        class="form-control" 
        v-model="registrationConfirmPassword" />
      <div v-if="!passwordMatch" class="text-danger pb-3">
        Passwords requirements hasn't been met (Not matching or empty)
      </div>
      <div class="row">
        <CategoryRadios v-model="registrationCategory" name="registration-category-filter"/>
        <div class="col-lg-8 col-md-6 col-sm-12">
          <select id="registration-form-event" class="form-select">
            <option v-for="event in filteredRegistrationEvents" :value="event.eventid">{{ event.eventname }}</option>
          </select>
        </div>
      </div>
      <button type="submit" 
        class="btn btn-primary" 
        :disabled="!passwordMatch">
        Register
      </button>
    </div>
  </div>
</template>