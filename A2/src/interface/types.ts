import jobs from '@/assets/jobs.json'

export interface typedJob {
  job_id: string
  job_title: string
  category: string
  location: string
  employment_type: string
  salary_range: string
  job_level: string
  required_skills: string[]
  preferred_qualifications: string[]
  job_description: string
  application_deadline: string
  posted_date: string
  company: string
  supervisor: string
  positions_available: number
  start_date: string
  tags: string[]
}

export const typedJobs: typedJob[] = jobs
