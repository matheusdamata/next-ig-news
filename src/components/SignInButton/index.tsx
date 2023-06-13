import { SignInButtonContainer } from '@/styles/components/signInButton'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <SignInButtonContainer>
      <FaGithub color="#04d361" />
      Matheus Silva
      <FiX color="#737380" />
    </SignInButtonContainer>
  ) : (
    <SignInButtonContainer>
      <FaGithub color="#eba417" />
      Sign in with Github
    </SignInButtonContainer>
  )
}
