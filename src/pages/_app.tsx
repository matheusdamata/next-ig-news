import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { Header } from '@/components/Header'

import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </PrismicPreview>
  )
}
