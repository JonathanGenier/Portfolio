/*==MODULES===================================================================*/
import type { NextPage } from 'next'

/*==COMPONENTS================================================================*/
/*==STYLES====================================================================*/
import styles from '../styles/pages/projects.module.scss'

/*============================================================================*/

const Page: NextPage = () => {
  return (
    <div className={styles.pageWrapper + " exp-c"}>'
      <div className={styles.container + " res-c"}>
        <h1>Projects</h1>
      </div>
    </div>
  )
}

export default Page
