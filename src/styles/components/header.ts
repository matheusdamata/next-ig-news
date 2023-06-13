import Link from 'next/link'
import { styled } from '..'

export const HeaderContainer = styled('header', {
  height: '5rem',
  borderBottom: '1px solid $gray800',
})

export const HeaderContent = styled('div', {
  maxWidth: '1120px',
  height: '5rem',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  alignItems: 'center',

  nav: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '5rem',
    height: '5rem',
    gap: '2rem',
  },

  button: {
    marginLeft: 'auto',
  },
})

export const HeaderMenuLink = styled(Link, {
  display: 'inline-block',
  position: 'relative',
  padding: '0 0.5rem',
  lineHeight: '5rem',

  color: '$gray300',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$white',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        fontWeight: 'bold',

        '&::after': {
          content: '',
          height: '3px',
          borderRadius: '3px 3px 0 0',
          width: '100%',
          position: 'absolute',
          bottom: '1px',
          left: 0,
          background: '$yellow500',
        },
      },
    },
  },
})
