import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { Header } from '@/components/Header'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
