import { FC } from 'react'
import jobsData from '@data/jobs.json'
import { JobHeader } from '@components/Cards'
import { Button, JobDetails, Typography } from '@components'
import styles from './page.module.scss'

interface pageProps {
  params: { jobId: string }
}

const page: FC<pageProps> = ({ params }) => {
  const currentJob = jobsData.find(job => job.id === +params.jobId)

  if (!currentJob) return null

  return (
    <div className={styles.page}>
      <JobHeader job={currentJob} />
      <JobDetails job={currentJob} className={styles.jobDetails} />

      <div className={styles.footer}>
        <Button size='md' onClick={() => null}>
          <Typography variant='button'>Apply Now</Typography>
        </Button>
      </div>
    </div>
  )
}
export default page

