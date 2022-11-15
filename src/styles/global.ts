import { globalCss } from '@stitches/react';


export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    background: '$gray100',

    '-webkit-font-smoothing': 'antialiased'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})