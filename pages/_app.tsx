
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import '../styles/globals.scss'

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <head>
        <title>Portfolio</title>
        <meta name="description" content="Jonathan Genier's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Portfolio
