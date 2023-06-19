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
