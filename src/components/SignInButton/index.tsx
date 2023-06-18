import { signIn, signOut, useSession } from 'next-auth/react'

import { SignInButtonContainer } from '@/styles/components/signInButton'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <SignInButtonContainer onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user?.name}
      <FiX color="#737380" />
    </SignInButtonContainer>
  ) : (
    <SignInButtonContainer onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </SignInButtonContainer>
  )
}
