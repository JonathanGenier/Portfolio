import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {

  render() {
    return (
      <Html>
        <Head/>
        <body>
          <Main />
          <script src='https://code.jquery.com/jquery-3.4.1.min.js' />
        </body>
        <NextScript />
      </Html>
    )
  }
}