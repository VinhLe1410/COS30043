<script setup lang="ts">
import { watch, ref } from 'vue'
import ProductCard from '@/components/icons/ProductCard.vue'
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

// watch(eventIdFilter, (newValue) => {
//   console.log('Event ID Filter changed:', newValue)
// })

// watch(eventNameFilter, (newValue) => {
//   console.log('Event Name Filter changed:', newValue)
// })
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
            class="form-control" 
            type="text" 
            v-model="eventIdFilter"
            placeholder="Enter Event ID" />
          <label for="event-id-filter">Event ID</label>
        </div>
        <!-- Event Name Filter -->
        <div class="form-floating col-lg-4 col-md-6 col-sm-12">
          <input 
            id="event-name-filter" 
            class="form-control" 
            type="text"
            v-model="eventNameFilter"
            placeholder="Enter Event Name" />
          <label for="event-name-filter">Event Name</label>
        </div>
      </div>
      <div id="events-table" class="table-responsive px-5">
        <table class="table table-striped">
          <thead>
            <th scope="col">Event ID</th>
            <th scope="col">Event Name</th>
            <th scope="col">Category</th>
            <th scope="col">Duration (Hours)</th>
          </thead>
          <tbody>
            <tr v-for="event in typedEvents" :key="event.eventid">
              <td>{{ event.eventid }}</td>
              <td>{{ event.eventname }}</td>
              <td>{{ event.category }}</td>
              <td>{{ event.durationhour }}</td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  </main>
</template>

