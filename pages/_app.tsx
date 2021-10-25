/*==MODULES===================================================================*/
import type { AppProps } from 'next/app'

/*==COMPONENTS================================================================*/
import Layout from '../components/layout'

/*==STYLES====================================================================*/
import '../styles/globals.scss'

/*============================================================================*/

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Portfolio
