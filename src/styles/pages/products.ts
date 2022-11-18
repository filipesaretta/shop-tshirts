import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4.5rem',

  maxWidth: 1180,
  margin: '0 auto',


})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea473 0%, #7465d4 100%)',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    color: '$gray300',
  },

  span: {
    fontSize: '$xl',
    color: '$green500',
    marginTop: '1rem',
  },

  p: {
    marginTop: '1rem',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: '$green500',
    transition: 'background-color 300ms ease',
    borderRadius: 8,

    cursor: 'pointer',
    marginTop: 'auto',
    padding: '1.25rem',
    fontSize: '$md',
    fontWeight: 'bold',

    color: '$gray100',

    '&:disabled': {
      opacity: .5,
    },
    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})