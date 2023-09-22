'use client'
import { Button, Icon, Input } from '@components'
import styles from './styles.module.scss'

// prop collapse
const Searchbar = ({ searchFields, setSearchFields }: Props) => {
  const handleChange = (e: any) => {
    setSearchFields({
      ...searchFields,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <div className={styles.searchbar}>
      <Input
        value={searchFields.title}
        name='title'
        iconName='search'
        onChange={(e) => handleChange(e)}
        placeholder='Filter by title...'
      >
        <div className={styles.container}>
          <Icon size='sm' name='filter' className={styles.filterIcon}/>
          <Button size='sm' onClick={() => null} className={styles.searchBtn}>
            <Icon size='sm' name='search'/>
          </Button>
        </div>
      </Input>
    </div>
  )
}

interface Props {
  searchFields: {
    title: string,
    location: string,
    fullTime: boolean
  }
  setSearchFields: (e: any) => any
}

export default Searchbar
{/* <Input value={''} iconName='location' setValue={() => null} placeholder='Filter by location...' /> */}