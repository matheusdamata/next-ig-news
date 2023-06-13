import Image from 'next/image'

import {
  HeaderContainer,
  HeaderContent,
  HeaderMenuLink,
} from '@/styles/components/header'

import LogoImage from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={LogoImage} alt="ig.news" />

        <nav>
          <HeaderMenuLink href="" active="true">
            Início
          </HeaderMenuLink>
          <HeaderMenuLink href="">Posts</HeaderMenuLink>
        </nav>

        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
