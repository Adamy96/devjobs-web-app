import { Button, Dot, Typography } from '@components'
import styles from './styles.module.scss'

const JobDetails = ({ job, className }: Props) => {
  return (
    <div className={`${styles.jobDetails} ${className}`}>
      <Typography variant='caption'>
        {job.postedAt}<Dot/>{job.contract}
      </Typography>
      <Typography variant='h3' className={styles.title}>
        {job.position}
      </Typography>
      <Typography variant='h4'>
        {job.location}
      </Typography>

      <Button size='md' onClick={() => null} className={styles.btnApply}>
        <Typography variant='button'>Apply Now</Typography>
      </Button>

      <Typography variant='body'>
        {job.description}
      </Typography>

      <Typography variant='h3' className={styles.subtitle}>
        Requirements
      </Typography>
      <Typography variant='body'>
        {job.requirements.content}
      </Typography>
      <ul className={styles.unorderedList}>
        {job.requirements.items.map((item, idx) => (
          <li key={idx}>
            <Typography variant='body'>{item}</Typography>
          </li>
        ))}
      </ul>

      <Typography variant='h3' className={styles.subtitle}>
        What You Will Do
      </Typography>
      <Typography variant='body'>
        {job.role.content}
      </Typography>
      <ol className={styles.orderedList}>
        {job.role.items.map((item, idx) => (
          <li key={idx}>
            <span>{idx + 1}</span>
            <Typography variant='body'>{item}</Typography>
          </li>
        ))}
      </ol>
    </div>
  )
}

interface Props extends IJob {
  className?: string
}

export default JobDetails