'use client'
import { Dot, JobLogo, Typography } from '@components'
import styles from './styles.module.scss'

const JobInfo = ({ job, onClick = () => null }: Props) => {
  return (
    <div className={styles.jobInfo} onClick={onClick}>
      <JobLogo logo={job.logo} backgroundColor={job.logoBackground} className={styles.logo}/>
      <Typography variant='caption'>
        {job.postedAt}<Dot/>{job.contract}
      </Typography>
      <Typography variant='h3' className={styles.title}>
        {job.position}
      </Typography>
      <Typography variant='caption'>
        {job.company}
      </Typography>

      <Typography variant='h4' className={styles.location}>
        {job.location}
      </Typography>
    </div>
  )
}

interface Props extends IJob {
  onClick?: (e?: any) => any
}

export default JobInfo