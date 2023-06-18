import { styled } from '..'

export const PostsContainer = styled('main', {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 2rem',
})

export const PostListContainer = styled('div', {
  maxWidth: '720px',
  margin: '5rem auto 0',

  a: {
    display: 'block',

    '& + a': {
      margin: '2rem 0 0',
      padding: '2rem 0 0',
      borderTop: '1px solid $gray700',
    },

    time: {
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      color: '$gray300',
    },

    strong: {
      display: 'block',
      fontSize: '1.5rem',
      margin: '1rem 0 0',
      lineHeight: '2rem',

      transition: 'color 0.2s',

      '&:hover': {
        color: '$yellow500',
      },
    },

    p: {
      color: '$gray300',
      margin: '0.5rem 0 0',
      lineHeight: '1.625rem',
    },
  },
})
