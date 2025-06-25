import { Box, styled } from '@devnestali-call-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  placeItems: 'center',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 600px)': {
    placeItems: 'stretch',
    gridTemplateColumns: '1fr',
  },
})
