import { styled } from '..'

export const PostContainer = styled('main', {
  maxWidth: '70rem',
  margin: '0 auto',
  padding: '0 2rem',
})

export const PostContent = styled('article', {
  maxWidth: '45rem',
  margin: '5rem auto 0',

  h1: {
    fontSize: '3.5rem',
    fontWeight: 900,
  },

  time: {
    display: 'block',
    fontSize: '1rem',
    color: '$gray300',
    margin: '1rem 0 0',
  },
})

export const RenderingDivContent = styled('div', {
  margin: '2rem 0 0',
  lineHeight: '2rem',
  fontSize: '1.125rem',
  color: '$gray100',

  'p, ul': {
    margin: '1.5rem 0',
  },

  ul: {
    padding: '0 1.5rem 0 0',

    li: {
      margin: '0.5rem 0',
    },
  },

  variants: {
    preview: {
      true: {
        background: 'linear-gradient($gray100, transparent)',
        backgroundClip: 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    },
  },
})

export const PostContinueReadingContainer = styled('div', {
  padding: '2rem',
  textAlign: 'center',
  background: '$gray850',
  borderRadius: '100px',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  margin: '4rem 0 2rem',

  a: {
    color: '$yellow500',
    margin: '0 0 0 0.5rem',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
