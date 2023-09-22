'use client'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logos/devjobs.svg' width={115} height={32} alt='' />
    </Link>
    
  )
}

export default Logo