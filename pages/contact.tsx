import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

const Page: NextPage = () => {
  return (
    <div className={styles.pageWrapper + " exp-c"}>'
      <div className={styles.container + " res-c"}>
        <h1>Contact</h1>
      </div>
    </div>
  )
}

export default Page
