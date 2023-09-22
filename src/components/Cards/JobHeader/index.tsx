'use client'
import { useRouter } from 'next/navigation'
import { Button, JobLogo, Typography } from '@components'
import styles from './styles.module.scss'

const JobHeader = ({ job }: IJob) => {
  const router = useRouter()

  return (
    <div className={styles.jobHeader}>
      <JobLogo
        logo={job.logo}
        backgroundColor={job.logoBackground}
        className={styles.logo}
      />
      <Typography variant='h3'>
        {job.company}
      </Typography>
      <Typography variant='caption' className={styles.url}>
        {job.website}
      </Typography>
      <Button variant='transparent' size='md' onClick={() => router.push(job.apply)}>
        <Typography variant='buttonTransparent'>Company Site</Typography>
      </Button>
    </div>
  )
}

export default JobHeader