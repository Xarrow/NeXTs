import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html amp="⚡" lang="en">
        <Head>
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          <link rel="stylesheet" type='text/css' href="/static/css/a11y-dark.css" />
          <link rel="stylesheet" type='text/css' href="/static/css/google_fonts_family.css" />
          <link rel="stylesheet" type='text/css' href="/static/css/opensource.css" />
          <link rel='stylesheet' type='text/css' href='/static/css/jian.css' />
          <meta name="theme-color" content="hsl(214, 78%, 50%)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}