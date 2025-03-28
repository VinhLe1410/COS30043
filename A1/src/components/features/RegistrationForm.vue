<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import CategoryRadios from '@/components/common/CategoryRadios.vue'
import { typedEvents } from '@/interfaces/types.ts'

const registrationUsername = ref('')
const registrationPassword = ref('')
const registrationConfirmPassword = ref('')
const registrationCategory = ref('Business')
const selectedEventId = ref('')
const showSuccessBanner = ref(false)

// Filter the events based on the selected category
const filteredRegistrationEvents = computed(() => {
  return typedEvents.filter(event => {
    const matchesCategory = registrationCategory.value === 'All' || event.category === registrationCategory.value
    return matchesCategory
  })
})

// Update selectedEventId when filtered events change
watch(filteredRegistrationEvents, (newEvents) => {
  // If there are events and the selected event is not in the new events, set the selected event to the first event
  if (newEvents.length > 0 && !newEvents.some(event => event.eventid === selectedEventId.value)) {
    selectedEventId.value = newEvents[0].eventid
  }
}, { immediate: true })

// Get the selected event
const selectedEvent = computed(() => {
  return typedEvents.find(event => event.eventid === selectedEventId.value) || null
})

// Check if the password matches the confirmation password and is not empty
const passwordMatch = computed(() => {
  return registrationPassword.value === registrationConfirmPassword.value && registrationPassword.value.length > 0
})

// Check if the username is valid
const isUsernameValid = computed(() => {
  return registrationUsername.value.trim() !== '' && !registrationUsername.value.includes(' ')
})

// Check if the form is valid
const isFormValid = computed(() => {
  return passwordMatch.value && isUsernameValid.value && selectedEventId.value !== ''
})

// Handle registration
const handleRegistration = () => {
  showSuccessBanner.value = true
  // Hide the success banner after 5 seconds
  setTimeout(() => {
    showSuccessBanner.value = false
  }, 5000)
}
</script>


<template>
  <div id="registration-form" class="container-fluid px-3 py-3">
    <div class="row g-1 px-5 pb-3">
      <!-- Username -->
      <label for="registration-form-username">Username:</label>
      <input type="text" 
        id="registration-form-username" 
        class="form-control" 
        v-model="registrationUsername" />
      <!-- Username validation -->
      <div v-if="registrationUsername && !isUsernameValid" class="text-danger pb-3">
        Username cannot contain spaces.
      </div>
      <!-- Password -->
      <label for="registration-form-password">Password:</label>
      <input type="password" 
        id="registration-form-password" 
        class="form-control" 
        v-model="registrationPassword" />
      <!-- Password Confirmation -->
      <label for="registration-form-confirm-password">Confirm Your Password:</label>
      <input type="password" 
        id="registration-form-confirm-password" 
        class="form-control" 
        v-model="registrationConfirmPassword" />
      <!-- Password validation -->
      <div v-if="registrationPassword && !passwordMatch" class="text-danger pb-3">
        Passwords requirements hasn't been met (Not matching or empty).
      </div>
      <div class="row pt-3">
        <CategoryRadios v-model="registrationCategory" name="registration-category-filter" preChecked="Business"/>
        <div class="col-lg-8 col-md-6 col-sm-12">
          <select id="registration-form-event" class="form-select" v-model="selectedEventId">
            <option v-for="event in filteredRegistrationEvents" :key="event.eventid" :value="event.eventid">{{ event.eventname }}</option>
          </select>
          <!-- Event validation -->
          <div v-if="filteredRegistrationEvents.length === 0" class="text-warning mt-2">
            No events available for the selected category.
          </div>
        </div>
      </div>
      <!-- Success banner -->
      <div v-if="showSuccessBanner" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Registration completed successfully!</strong>
        <div>Username: {{ registrationUsername }}</div>
        <div>Category: {{ registrationCategory }}</div>
        <div>Event: {{ selectedEvent ? selectedEvent.eventname : 'None selected' }}</div>
        <button type="button" class="btn-close" @click="showSuccessBanner = false" aria-label="Close"></button>
      </div>
      <button type="button" 
        class="btn btn-primary" 
        :disabled="!isFormValid || filteredRegistrationEvents.length === 0"
        @click="handleRegistration">
        Register
      </button>
    </div>
  </div>
</template>