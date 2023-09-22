'use client'
import { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Searchbar } from '@components'
import { JobInfo } from '@components/Cards'
import styles from './page.module.scss'
import jobsData from '@data/jobs.json'

const Page: FC = () => {
  const router = useRouter()
  const [filteredJobs, setFilteredJobs] = useState(jobsData)
  const [searchFields, setSearchFields] = useState({
    title: '',
    location: '',
    fullTime: false
  })

  const handleCardClick = (id: number) => {
    router.push(`/job/${id}`)
  }

  const filterJobs = () => {
    return jobsData.filter(job =>
      (!searchFields.title || job.position.toLowerCase().includes(searchFields.title.toLowerCase())) &&
      (!searchFields.location || job.location.toLowerCase().includes(searchFields.location.toLowerCase())) &&
      (!searchFields.fullTime || job.contract === 'Full Time')
    )
  }

  useEffect(() => {
    setFilteredJobs(filterJobs())
  }, [searchFields.title, searchFields.location, searchFields.fullTime])

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Searchbar searchFields={searchFields} setSearchFields={setSearchFields} />

        <div className={styles.jobsContainer}>
          {filteredJobs.map((job, idx) => (
            <JobInfo job={job} key={idx} onClick={() => handleCardClick(job.id)} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Page