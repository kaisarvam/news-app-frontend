import { Container } from '@mui/material'
import React from 'react'
import LayoutWrapper from '../Elements/Layout/LayoutWrapper'
import NewsMainPage from '../Elements/NewsMainPage'

function NewsPageHome() {
  return (
    <div>
          <LayoutWrapper>
        <Container maxWidth="xl" sx={{ backgroundColor: "#F5EBE0" }}>
          <NewsMainPage />
        </Container>
      </LayoutWrapper>
    </div>
  )
}

export default NewsPageHome