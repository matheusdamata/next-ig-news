import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { LinkContent } from '@/styles/components/activeLink'

interface ActiveLinkProps extends LinkProps {
  text: string
}

export function ActiveLink({ text, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const active = asPath === rest.href ? true : undefined

  return (
    <LinkContent {...rest} active={active}>
      {text}
    </LinkContent>
  )
}
