'use client'
import styles from './styles.module.scss'

const JobLogo = ({ logo, backgroundColor, className }: IJobLogo) => {
  if (!logo) return null
  const SvgComponent = require(`public/logos/${logo}`).default
  const getClasses = () => {
    let classes = styles.jobLogo
    className && (classes += ` ${className}`)
    return classes
  }

  return (
    <div style={{backgroundColor: backgroundColor}} className={getClasses()}>
      {SvgComponent && <SvgComponent />}
    </div>
  )
}

interface IJobLogo {
  className?: string
  logo: string
  backgroundColor: string
}

export default JobLogo