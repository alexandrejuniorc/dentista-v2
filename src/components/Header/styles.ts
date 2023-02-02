import { styled } from '../../styles/index'

export const HeaderContainer = styled('header', {
  padding: '20px 100px',
  backgroundColor: '$blue200',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  padding: '0 20px',
})

export const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',

  a: {
    font: '400 1.125rem/1.35 "Poppins", sans-serif',
    color: '$white',
    textDecoration: 'none',

    transition: '0.5s',
    borderBottom: '1px solid transparent',

    '&:hover': {
      borderBottom: '1px solid white',
    },
  },
})
