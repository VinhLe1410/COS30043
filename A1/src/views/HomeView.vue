<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import CategoryRadios from '@/components/CategoryRadios.vue'
import producthighlights from '@/assets/producthighlights.json'
import events from '@/assets/events.json'

interface Event {
  eventid: string
  eventname: string
  category: string
  durationhour: number
}

interface ProductCard {
  title: string
  description: string
}

const productCards: ProductCard[] = producthighlights
const typedEvents: Event[] = events

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
</script>

<template>
  <main>
    <!-- Main Product Highlights -->
    <!-- Will have 6 cards, for 6 key hightlights of the product -->
    <div id="main-product-highlights" class="container-fluid px-3 py-3">
      <div class="row g-3 pb-3">
        <ProductCard v-for="card in productCards" :key="card.title" :title="card.title" :description="card.description" />
      </div>
    </div>

    <!-- Events Section -->
    <!-- Will have two parts, one is for filtering the events based on category/Event ID/Event Name, and the other is the table -->
    <div id="events-section" class="container-fluid px-3 py-3">
      <!-- Filtering Section -->
      <div id="events-filtering" class="row g-3 px-5 pb-3">
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
        <CategoryRadios v-model="selectedCategory" />
        
      </div>
      <!-- Events Table -->
      <div id="events-table" class="table-responsive px-5">
        <table class="table table-striped">
          <thead>
            <th scope="col">Event ID</th>
            <th scope="col">Event Name</th>
            <th scope="col">Category</th>
            <th scope="col">Duration (Hours)</th>
          </thead>
          <tbody>
            <tr v-for="event in filteredEvents" :key="event.eventid">
              <td scope="row">{{ event.eventid }}</td>
              <td>{{ event.eventname }}</td>
              <td>{{ event.category }}</td>
              <td>{{ event.durationhour }}</td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>

    <!-- Registration Form Section -->
    <div id="registration-form" class="container-fluid px-3 py-3">
      <div class="row g-1 px-5 pb-3">
        <label for="registration-form-username">Username:</label>
        <input type="text" id="registration-form-username" class="form-control" />
        <label for="registration-form-password">Password:</label>
        <input type="password" id="registration-form-password" class="form-control" />
        <label for="registration-form-confirm-password">Confirm Your Password:</label>
        <input type="password" id="registration-form-confirm-password" class="form-control" />
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </div>
  </main>
</template>

