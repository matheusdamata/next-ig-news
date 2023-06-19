import Image from 'next/image'

import { HeaderContainer, HeaderContent } from '@/styles/components/header'

import LogoImage from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={LogoImage} alt="ig.news" />

        <nav>
          <ActiveLink href="/" text="Ínicio" />
          <ActiveLink href="/posts" text="Posts" />
        </nav>

        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
