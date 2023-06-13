import { styled } from '..'

export const SubscribeButtonContainer = styled('button', {
  width: '260px',
  height: '4rem',
  borderRadius: '2rem',
  background: '$yellow500',
  color: '$gray900',
  fontSize: '1.25rem',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
