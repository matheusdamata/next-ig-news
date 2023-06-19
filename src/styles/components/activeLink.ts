import Link from 'next/link'
import { styled } from '..'

export const LinkContent = styled(Link, {
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
