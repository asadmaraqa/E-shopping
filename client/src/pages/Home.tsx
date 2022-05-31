import React from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/AppBar';
import Products from '../components/Products';
const Home = () => {

  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <Products />
    </Container>
  )
}

export default Home