import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <link rel="stylesheet" type='text/css' href="/static/a11y-dark.css" />
          <link rel="stylesheet" type='text/css' href="https://fonts.googleapis.com/css?family=Google+Sans|Roboto:400,500|Roboto+Mono:400" />
          <link rel="stylesheet" type='text/css' href="/static/opensource.css" />
          <link rel='stylesheet' type='text/css' href='/static/jian.css' />
          <title>NeXTs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}