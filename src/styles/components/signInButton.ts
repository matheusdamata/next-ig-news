import { styled } from '..'

export const SignInButtonContainer = styled('button', {
  height: '3rem',
  borderRadius: '3rem',
  background: '$gray850',
  padding: '0 1.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '1rem',

  color: '$white',
  fontWeight: 'bold',

  transition: 'filter 0.2s',

  svg: {
    width: '1.25rem',
    height: '1.25rem',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
