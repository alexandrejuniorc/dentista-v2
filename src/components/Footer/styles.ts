import { styled } from '../../styles/index'

export const FooterContainer = styled('footer', {
  backgroundColor: '$blue200',
  bottom: 0,
  left: 0,
  // position: 'fixed',
  width: '100%',
})

export const FooterContent = styled('div', {
  boxSizing: 'border-box',
  maxWidth: '1200px',
  paddingLeft: '20px',
  paddingRight: '20px',
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: '3fr 5fr 4fr',
  gap: '40px',
  padding: '60px 0',

  p: {
    '&:last-child': {
      gridColumn: '1/-1',
      marginTop: '40px',
      font: '500 1.125rem/1.35 "Poppins", sans-serif',
    },
  },
})

export const InfosContainer = styled('div', {
  h3: {
    font: '400 1.5rem/1.5 "Poppins", sans-serif',
    marginBottom: '32px',
  },
  ul: {
    marginBottom: '32px',
    padding: '0px',
    listStyle: 'none',
  },
  li: {
    font: ' 500 1.125rem/1.35 "Poppins", sans-serif',
    marginBottom: '16px',

    a: {
      color: '$white',
      textDecoration: 'none',

      '&:hover': {
        color: '$brown100',
      },
    },
  },
})
