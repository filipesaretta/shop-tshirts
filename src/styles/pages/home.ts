import { styled } from "..";

export const HomeContainer = styled('div', {
  display: "flex",
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2)',
  marginLeft: 'auto',
  minHeight: 656
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea473 0%,#7465d4 100%)',
  borderRadius: 8,
  padding: '.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '.25rem',
    right: '.25rem',
    left: '.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0, 0, 0, 0.5)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$white',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})