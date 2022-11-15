import { createStitches } from "@stitches/react";

export const { config,
  styled,
  globalCss,
  keyframes,
  theme,
  createTheme,
  css,
  getCssText
} = createStitches(
  {
    theme: {
      colors: {
        white: '#fff',
        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e2e6',

        green500: '#00875f',
        green300: '#00b37e'
      },

      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      }
    }
  }
) 