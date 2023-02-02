import { styled } from '@stitches/react'

export const Container = styled('div', {
  boxSizing: 'border-box',
  maxWidth: '75rem',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const HomeHeaderContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: '0 40px',
  backgroundColor: '$blue200',
  boxShadow: 'inset 0px -120px #fff',
})

export const HomeHeaderContent = styled('div', {
  alignSelf: 'end',
  paddingBottom: '200px',
  paddingLeft: '20px',

  h1: {
    font: '600 4rem/1.125 "Poppins", sans-serif',
    marginBottom: '32px',
  },

  p: {
    font: '400 1.5rem/1.5 "Roboto", sans-serif',
    marginBottom: '32px',
  },

  a: {
    font: '600 1.125rem/1.35 "Poppins", sans-serif',

    display: 'inline-block',
    padding: '16px 32px',
    backgroundColor: '$blue300',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    color: '$brown100',
    textDecoration: 'none',

    maxWidth: 'max-content',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$yellow100',
    },
  },
})
