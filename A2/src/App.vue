<script setup lang="ts">
import NavBar from './components/common/NavBar.vue'
import JobApplication from './views/JobApplication.vue'
import JobExplorer from './views/JobExplorer.vue'
import TodoList from './views/TodoList.vue'
</script>

<template>
  <NavBar />
  <JobExplorer />
  <JobApplication />
  <TodoList />
</template>
