import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
