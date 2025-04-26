<script lang="ts" setup>
import { typedJobs } from '@/interface/types.ts'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <h2>Job Explorer</h2>
    </div>
    <div class="row">
      <div class="col-3">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <RouterLink to="/">Overview</RouterLink>
              </td>
            </tr>
            <tr v-for="job in typedJobs" :key="job.job_id">
              <td>
                <RouterLink :to="{ path: '/job/' + job.job_id }">
                  {{ job.job_id }}
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-9">
        <RouterView />
      </div>
    </div>
  </div>
</template>
