import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <head>
            <title>Portfolio</title>
            <meta name="description" content="Jonathan Genier's portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <Main />
          <script src='https://code.jquery.com/jquery-3.4.1.min.js' />
        </body>
        <NextScript />
      </Html>
    )
  }
}