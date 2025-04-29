<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { typedJobs } from '@/interface/types.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
const jobID = ref('')

watch(
  () => route.params.job_id,
  (newJobId) => {
    jobID.value = newJobId as string
  },
  { immediate: true },
)

const filteredEvent = computed(() => {
  return typedJobs.find((job) => job.job_id.toLowerCase() === jobID.value.toLowerCase()) || null
})
</script>

<template>
  <div class="job-list">
    <h3>
      <strong>{{ filteredEvent?.job_title }} ({{ filteredEvent?.job_id }})</strong>
    </h3>
    <p><strong>Company:</strong> {{ filteredEvent?.company }}</p>
    <p><strong>Location:</strong> {{ filteredEvent?.location }}</p>
    <p><strong>Category:</strong> {{ filteredEvent?.category }}</p>
    <p><strong>Employment Type:</strong> {{ filteredEvent?.employment_type }}</p>
    <p><strong>Salary Range:</strong> {{ filteredEvent?.salary_range }}</p>
    <p><strong>Job Level:</strong> {{ filteredEvent?.job_level }}</p>
    <p>
      <strong>Required Skills: </strong>
      <span v-for="(skill, index) in filteredEvent?.required_skills" :key="index">
        {{ index === 0 ? '' : ', ' }}{{ skill }}
      </span>
    </p>
    <p>
      <strong>Preferred Qualifications: </strong>
      <span v-for="(qualification, index) in filteredEvent?.preferred_qualifications" :key="index">
        {{ index === 0 ? '' : ', ' }}{{ qualification }}
      </span>
    </p>
    <p><strong>Description:</strong> {{ filteredEvent?.job_description }}</p>
    <p><strong>Application Deadline:</strong> {{ filteredEvent?.application_deadline }}</p>
    <p><strong>Posted Date:</strong> {{ filteredEvent?.posted_date }}</p>
    <p><strong>Supervisor:</strong> {{ filteredEvent?.supervisor }}</p>
    <p><strong>Positions Available:</strong> {{ filteredEvent?.positions_available }}</p>
    <p><strong>Start Date:</strong> {{ filteredEvent?.start_date }}</p>
    <p>
      <strong>Tags: </strong>
      <span v-for="(tag, index) in filteredEvent?.tags" :key="index">
        {{ index === 0 ? '' : ', ' }}{{ tag }}
      </span>
    </p>
  </div>
</template>
