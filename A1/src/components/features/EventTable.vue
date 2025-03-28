<script setup lang="ts">
import { ref, computed } from 'vue'
import { typedEvents } from '@/interfaces/types.ts'
import CategoryRadios from '@/components/common/CategoryRadios.vue'

const eventIdFilter = ref('')
const eventNameFilter = ref('')
const selectedCategory = ref('All')

// Add computed property for filtered events
const filteredEvents = computed(() => {
  return typedEvents.filter(event => {
    const matchesId = event.eventid.toLowerCase().includes(eventIdFilter.value.toLowerCase())
    const matchesName = event.eventname.toLowerCase().includes(eventNameFilter.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || event.category === selectedCategory.value
    return matchesId && matchesName && matchesCategory
  })
})

const hasFilteredEvents = computed(() => filteredEvents.value.length > 0)
</script>

<template>
  <div class="container-fluid px-3 py-3">
      <!-- Filtering Section -->
      <div class="row g-3 px-5 pb-3">
        <!-- Event ID Filter -->
        <div class="form-floating col-lg-4 col-md-6 col-sm-12">
          <input 
            id="event-id-filter" 
            v-model="eventIdFilter"
            class="form-control" 
            type="text" 
            placeholder="Enter Event ID" />
          <label for="event-id-filter">Event ID</label>
        </div>
        <!-- Event Name Filter -->
        <div class="form-floating col-lg-4 col-md-6 col-sm-12">
          <input 
            id="event-name-filter" 
            v-model="eventNameFilter"
            class="form-control" 
            type="text"
            placeholder="Enter Event Name" />
          <label for="event-name-filter">Event Name</label>
        </div>
        <!-- Event Category Filter -->
        <!-- Four radio buttons, for each category -->
        <CategoryRadios v-model="selectedCategory" name="event-category-filter" preChecked="All" />
        
      </div>
      <!-- Events Table -->
      <div class="table-responsive px-5">
        <div v-if="!hasFilteredEvents" class="alert alert-info">
          No events match your current choice of category.
        </div>
        <table v-else class="table table-striped">
          <thead>
            <tr>
              <th scope="col" id="event-id">Event ID</th>
              <th scope="col" id="event-name">Event Name</th>
              <th scope="col" id="event-category">Category</th>
              <th scope="col" id="event-duration">Duration (Hours)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in filteredEvents" :key="event.eventid">
              <td scope="row" :id="event.eventid">{{ event.eventid }}</td>
              <td :headers="'event-name ' + event.eventid">{{ event.eventname }}</td>
              <td :headers="'event-category ' + event.eventid">{{ event.category }}</td>
              <td :headers="'event-duration ' + event.eventid">{{ event.durationhour }}</td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
</template>