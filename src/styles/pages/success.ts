import { styled } from ".."

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  alignItems: 'center',
  margin: '0 auto',
  minHeight: 565,
  color: '$gray300',
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },
  p: {
    maxWidth: 500,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },
  a: {
    display: 'block',
    fontSize: '$lg',
    textDecoration: 'none',
    marginTop: '5rem',
    color: '$green500',
    fontWeight: 'bold',

  },
})
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea473 0%, #7465d4 100%)',
  borderRadius: 8,
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
}) 