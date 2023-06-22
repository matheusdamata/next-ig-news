import { HeaderContainer, HeaderContent } from '@/styles/components/header'

import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">dev.news</Link>

        <nav>
          <ActiveLink href="/" text="Ínicio" />
          <ActiveLink href="/posts" text="Posts" />
        </nav>

        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
