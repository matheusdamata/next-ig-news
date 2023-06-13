import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
    '-webkit-font-smoothing': 'antialiased',

    transition: 'all 0.4s ease',
  },

  ':focus': {
    outline: 0,
  },

  body: {
    background: '$gray900',
    color: '$white',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
    border: 0,
    borderRadius: 6,

    transition: 'all 0.5s ease',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  input: {
    border: 0,
  },

  'button:not(:disabled):hover': {
    opacity: 0.7,
  },

  'button:disabled': {
    cursor: 'not-allowed',
  },

  '::-webkit-scrollbar': {
    width: 10,
  },

  '::-webkit-scrollbar-track': {
    background: '$gray200',
    borderRadius: 10,
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray300',
    borderRadius: 10,
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '#c1c1c1',
  },

  '@media (max-width: 1080px)': {
    html: {
      fontSize: '93.75%',
    },
  },

  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%',
    },
  },
})
