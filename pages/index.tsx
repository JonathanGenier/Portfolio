/*==MODULES===================================================================*/
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

/*==COMPONENTS================================================================*/
/*==STYLES====================================================================*/
import styles from '../styles/pages/index.module.scss'

/*============================================================================*/

const Page: NextPage = () => {
  let { t } = useTranslation('home')

  return (
    <div className={styles.pageWrapper + " exp-c"}>'
      <div className={styles.container + " res-c"}>
        <div className={styles.introContainer}>
          <p className={styles.typingOne}>{t('greeting')}<span>Jonathan Genier</span>.</p>
          <p className={styles.typingTwo}>{t('work')}</p>
        </div>
      </div>
    </div>
  )
}

export default Page
