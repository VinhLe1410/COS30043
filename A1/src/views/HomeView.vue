<script setup lang="ts">
import ProductHighlights from '@/components/features/ProductHighlights.vue'
import EventTable from '@/components/features/EventTable.vue'
import RegistrationForm from '@/components/features/RegistrationForm.vue'

</script>

<template>
  <main>
    <!-- Main Product Highlights -->
    <!-- Will have 6 cards, for 6 key hightlights of the product -->
    <ProductHighlights />

    <!-- Events Section -->
    <!-- Will have two parts, one is for filtering the events based on category/Event ID/Event Name, and the other is the table -->
    <EventTable />

    <!-- Registration Form Section -->
    <RegistrationForm />
  </main>
</template>

