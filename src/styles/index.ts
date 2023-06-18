import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      black: '#000',
      white: '#fff',

      cyan500: '#61dafb',

      gray900: '#121214',
      gray850: '#1f2729',
      gray800: '#29292e',
      gray700: '#323238',
      gray300: '#a8a8b3',
      gray100: '#e1e1e6',

      yellow500: '#eba417',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
