import { styled } from '..'

export const PostContainer = styled('main', {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 2rem',
})

export const PostContent = styled('article', {
  maxWidth: '720px',
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
})
