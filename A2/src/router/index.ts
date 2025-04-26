import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobOverview from '../views/JobExplorer/JobOverview.vue'
import JobList from '../views/JobExplorer/JobList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/job-overview',
      name: 'job-overview',
      component: JobOverview,
    },
    {
      path: '/job/:job_id',
      name: 'job-list',
      component: JobList,
    },
  ],
})

export default router
