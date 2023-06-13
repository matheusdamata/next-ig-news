import { styled } from '..'

export const HomeContainer = styled('main', {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 2rem',
  height: 'calc(100vh - 5rem)',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const SectionHomeHero = styled('section', {
  maxWidth: '600px',

  '& > span': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  h1: {
    fontSize: '4.5rem',
    fontWeight: 900,
    lineHeight: '4.5rem',
    marginTop: '2.5rem',

    span: {
      color: '$cyan500',
    },
  },

  p: {
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
    marginTop: '1.5rem',

    span: {
      color: '$cyan500',
      fontWeight: 'bold',
    },
  },

  button: {
    marginTop: '2.5rem',
  },
})
