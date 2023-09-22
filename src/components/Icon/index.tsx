'use client'
import React from 'react';
import styles from './styles.module.scss'

const Icon = ({ className, name, size  }: IIcon) => {
  if (!name) return null
  const SvgComponent = require(`public/icons/icon-${name}.svg`).default
  const getClasses = () => {
    let classes = `${styles.iconContainer} ${styles[`size-${size}`]}`
    className && (classes += ` ${className}`)
    return classes
  }

  return (
    <div className={getClasses()}>
      {SvgComponent && <SvgComponent />}
    </div>
  )
}

interface IIcon {
  className?: string
  name?: string
  size: 'sm' | 'md' | 'lg'
}

export default Icon