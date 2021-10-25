import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

const Page: NextPage = () => {
  return (
    <div className={styles.pageWrapper + " exp-c"}>'
      <div className={styles.container + " res-c"}>
        <div className={styles.introContainer}>
          <p className={styles.typingOne}>Hello, I'm <span>Jonathan Genier</span>.</p>
          <p className={styles.typingTwo}>I'm a web developer.</p>
        </div>
      </div>
    </div>
  )
}

export default Page
